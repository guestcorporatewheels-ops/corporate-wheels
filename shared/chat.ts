/**
 * Shared types for the AI chat widget, used by both client and server.
 */

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface ChatRequestBody {
  messages: ChatMessage[];
  /** Set once the client has already received leadCaptured:true this session. */
  leadAlreadySent?: boolean;
}

export interface ChatResponseBody {
  reply: string;
  leadCaptured: boolean;
}
