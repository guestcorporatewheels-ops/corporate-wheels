export interface KieMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

/**
 * Minimal client for kie.ai's OpenAI-compatible chat completions API.
 * Each model on kie.ai is served from its own route, e.g.
 * https://api.kie.ai/gemini-2.5-flash/v1/chat/completions
 */
export async function kieChatCompletion(
  messages: KieMessage[],
  opts?: { temperature?: number },
): Promise<string> {
  const apiKey = process.env.KIE_API_KEY;
  if (!apiKey) {
    throw new Error("KIE_API_KEY is not configured");
  }
  const modelRoute = process.env.KIE_MODEL_ROUTE || "gemini-2.5-flash";
  const url = `https://api.kie.ai/${modelRoute}/v1/chat/completions`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: modelRoute,
      temperature: opts?.temperature ?? 0.4,
      messages: messages.map((m) => ({
        role: m.role,
        content: [{ type: "text", text: m.content }],
      })),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`kie.ai request failed (${res.status}): ${text.slice(0, 500)}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: unknown } }[];
  };
  const content = data.choices?.[0]?.message?.content;

  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    return content
      .map((part) =>
        part && typeof part === "object" && "text" in part
          ? String((part as { text?: unknown }).text ?? "")
          : "",
      )
      .join("")
      .trim();
  }
  return "";
}
