import type { ChatMessage, ChatResponseBody } from "@shared/chat";

export async function sendChatMessage(
  messages: ChatMessage[],
  leadAlreadySent: boolean,
): Promise<ChatResponseBody> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, leadAlreadySent }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Chat request failed (${res.status})`);
  }
  return res.json();
}
