import type { RequestHandler } from "express";
import type { ChatMessage, ChatRequestBody, ChatResponseBody } from "@shared/chat";
import { kieChatCompletion } from "../lib/kie.js";
import { buildKnowledgeBase } from "../lib/knowledge.js";
import { sendChatLeadEmail } from "../lib/leadEmail.js";

const MAX_HISTORY = 16;
const MAX_MESSAGE_LENGTH = 2000;

const LEAD_MARKER_RE = /\[\[LEAD:(\{[\s\S]*?\})\]\]\s*$/;
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/;
const PHONE_RE = /(?:\+?\d[\d\s()-]{7,}\d)/;
const INTENT_RE =
  /\b(quote|price|pricing|cost|book|booking|reserve|reservation|hire|chauffeur|airport|transfer|available|availability)\b/i;

function buildSystemPrompt(): string {
  return `You are the AI concierge for Corporate Wheels, a premium UK chauffeur and executive car hire company. You live in a chat widget on the company website.

Tone: warm, concise, professional — like a five-star hotel concierge. Prefer short paragraphs or a few bullet points over long essays. Always quote prices in GBP (£) and never invent a price — if you don't have a confirmed price, say a member of the team will confirm the exact fare, and direct them to the "Get a Quote" button.

Only answer using the knowledge base below plus general, uncontroversial facts about chauffeur travel. If you don't know something specific to Corporate Wheels (an exact price, real-time availability, a policy not listed below), say so honestly and offer to have the team follow up — never make it up.

Reply in the same language the visitor is writing in.

Your two jobs:
1. Answer questions about services, fleet, routes, pricing structure and policies using the knowledge base.
2. Spot potential clients. Whenever someone is trying to get a price, make a booking, or is clearly interested in hiring a vehicle, proactively and naturally ask for whatever of these you don't have yet: their name, an email or phone number, the service they want, pickup/drop-off (or route), and date/time. Do this conversationally, one or two questions at a time — never dump a form.

Handoff to the sales team: once you have (a) a name AND (b) an email or phone number AND (c) some indication of what they want (a service, a route, or "book a car"), end your reply with a final line, and nothing after it, in EXACTLY this machine-readable format (compact JSON, no line breaks inside it):
[[LEAD:{"name":"...","email":"...","phone":"...","service":"...","from":"...","to":"...","date":"...","notes":"..."}]]
Omit any field you don't have. Never mention this marker to the visitor and never show it as visible text before the closing brackets — it is stripped automatically and used to email the sales team so a human can confirm pricing and follow up. Only include it once you truly have enough to hand off; don't include it on every message.

For an exact instant quote or to actually complete a booking and payment, always point people to the "Get a Quote" / "Book Now" buttons in this widget, which open the real booking flow — don't claim you booked something yourself.

KNOWLEDGE BASE (source of truth — the website's own content):
${buildKnowledgeBase()}`;
}

function fallbackResponse(): ChatResponseBody {
  return {
    reply:
      "Sorry, I'm having trouble connecting right now. Please call us on +44 7351 111355 or tap \"Get a Quote\" below and our team will help right away.",
    leadCaptured: false,
  };
}

export const handleChat: RequestHandler = async (req, res) => {
  try {
    const body = req.body as ChatRequestBody;
    const incoming = Array.isArray(body?.messages) ? body.messages : [];
    if (incoming.length === 0) {
      res.status(400).json({ error: "messages is required" });
      return;
    }

    const history: ChatMessage[] = incoming.slice(-MAX_HISTORY).map((m) => ({
      role: m?.role === "assistant" ? "assistant" : "user",
      content: String(m?.content ?? "").slice(0, MAX_MESSAGE_LENGTH),
    }));

    let rawReply: string;
    try {
      rawReply = await kieChatCompletion([
        { role: "system", content: buildSystemPrompt() },
        ...history,
      ]);
    } catch (err) {
      console.error("kie.ai chat error", err);
      res.json(fallbackResponse());
      return;
    }

    if (!rawReply) {
      res.json(fallbackResponse());
      return;
    }

    let visibleReply = rawReply;
    let leadFromModel: Record<string, unknown> | null = null;
    const markerMatch = rawReply.match(LEAD_MARKER_RE);
    if (markerMatch) {
      visibleReply = rawReply.slice(0, markerMatch.index).trim();
      try {
        leadFromModel = JSON.parse(markerMatch[1]);
      } catch {
        leadFromModel = null;
      }
    }

    const userText = history
      .filter((m) => m.role === "user")
      .map((m) => m.content)
      .join(" ");
    const detectedEmail = userText.match(EMAIL_RE)?.[0];
    const detectedPhone = userText.match(PHONE_RE)?.[0];
    const hasIntent = INTENT_RE.test(userText);

    const leadEmail = (leadFromModel?.email as string | undefined) || (hasIntent ? detectedEmail : undefined);
    const leadPhone = (leadFromModel?.phone as string | undefined) || (hasIntent ? detectedPhone : undefined);
    const hasContact = Boolean(leadEmail || leadPhone);

    let leadCaptured = false;
    if (hasContact && !body.leadAlreadySent) {
      leadCaptured = true;
      sendChatLeadEmail({
        name: leadFromModel?.name as string | undefined,
        email: leadEmail,
        phone: leadPhone,
        service: leadFromModel?.service as string | undefined,
        from: leadFromModel?.from as string | undefined,
        to: leadFromModel?.to as string | undefined,
        date: leadFromModel?.date as string | undefined,
        notes: leadFromModel?.notes as string | undefined,
        transcript: [...history, { role: "assistant", content: visibleReply }],
      }).catch((err) => console.error("chat lead email failed", err));
    }

    const response: ChatResponseBody = { reply: visibleReply, leadCaptured };
    res.json(response);
  } catch (err) {
    console.error("chat handler error", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
