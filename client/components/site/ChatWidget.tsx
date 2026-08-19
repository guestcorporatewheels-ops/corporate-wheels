import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { sendChatMessage } from "@/lib/chatApi";
import type { ChatMessage } from "@shared/chat";

const STORAGE_KEY = "corporate-wheels-chat";

interface StoredChatState {
  messages: ChatMessage[];
  leadAlreadySent: boolean;
}

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hello! I'm the Corporate Wheels concierge. Ask me about airport transfers, our fleet, routes and pricing — or I can help set up a quote or booking. How can I help?",
};

const QUICK_REPLIES = [
  "I need an airport transfer quote",
  "What cars are in your fleet?",
  "How do I book a chauffeur?",
];

function loadStored(): StoredChatState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { messages: [WELCOME_MESSAGE], leadAlreadySent: false };
    const parsed = JSON.parse(raw) as StoredChatState;
    if (!Array.isArray(parsed.messages) || parsed.messages.length === 0) {
      return { messages: [WELCOME_MESSAGE], leadAlreadySent: false };
    }
    return parsed;
  } catch {
    return { messages: [WELCOME_MESSAGE], leadAlreadySent: false };
  }
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<StoredChatState>(() => loadStored());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [state.messages, loading, open]);

  async function handleSend(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages: ChatMessage[] = [...state.messages, { role: "user", content }];
    setState((s) => ({ ...s, messages: nextMessages }));
    setInput("");
    setLoading(true);

    try {
      const res = await sendChatMessage(nextMessages, state.leadAlreadySent);
      setState((s) => ({
        messages: [...nextMessages, { role: "assistant", content: res.reply }],
        leadAlreadySent: s.leadAlreadySent || res.leadCaptured,
      }));
    } catch {
      setState((s) => ({
        ...s,
        messages: [
          ...nextMessages,
          {
            role: "assistant",
            content:
              "Sorry, I couldn't reach our system just now. Please call us on +44 7351 111355, or tap \"Get a Quote\" below.",
          },
        ],
      }));
    } finally {
      setLoading(false);
    }
  }

  const showWelcomeState = state.messages.length === 1;

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Corporate Wheels"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-corporate-gold text-black shadow-[0_8px_30px_rgba(230,167,0,0.45)]"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="absolute inset-0 -z-10 rounded-full bg-corporate-gold blur-lg opacity-40" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-[69] flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl",
              isMobile
                ? "inset-x-3 bottom-3 top-16"
                : "bottom-24 right-6 h-[600px] max-h-[75vh] w-[380px]",
            )}
          >
            <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-corporate-black to-[#161616] px-4 py-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-corporate-gold/15 text-corporate-gold">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">Corporate Wheels Concierge</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Usually replies in a minute
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {state.messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "rounded-br-sm bg-corporate-gold text-black"
                        : "rounded-bl-sm bg-muted text-foreground",
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {showWelcomeState && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-corporate-gold/40 px-3 py-1.5 text-xs text-corporate-gold transition-colors hover:bg-corporate-gold/10"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-muted">
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border px-3 py-2.5">
              <div className="mb-2 flex gap-2">
                <Button asChild variant="glow" size="sm" className="flex-1 rounded-full">
                  <Link to="/booking" onClick={() => setOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
                  <Link to="/booking" onClick={() => setOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message…"
                  className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="glow"
                  className="h-10 w-10 shrink-0 rounded-full"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
