import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { sendChatMessage } from "@/lib/chatApi";
import type { ChatMessage } from "@shared/chat";

const STORAGE_KEY = "corporate-wheels-chat";

const WHATSAPP_NUMBER = "447351111355";
const WHATSAPP_MESSAGE =
  "Hi Corporate Wheels, I'd like to enquire about a chauffeur booking.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.512-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.883 9.884M20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .102 5.36.099 11.947c0 2.105.549 4.161 1.595 5.976L0 24l6.223-1.632a11.9 11.9 0 005.827 1.483h.005c6.586 0 11.947-5.359 11.949-11.945a11.89 11.89 0 00-3.484-8.457" />
    </svg>
  );
}

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

const GREETING_KEY = "corporate-wheels-chat-greeted";

export default function ChatWidget() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<StoredChatState>(() => loadStored());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

  useEffect(() => {
    let alreadyGreeted = false;
    try {
      alreadyGreeted = sessionStorage.getItem(GREETING_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (alreadyGreeted || open) return;

    const showTimer = setTimeout(() => {
      setShowGreeting(true);
      try {
        sessionStorage.setItem(GREETING_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 2500);
    return () => clearTimeout(showTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!showGreeting) return;
    const hideTimer = setTimeout(() => setShowGreeting(false), 7000);
    return () => clearTimeout(hideTimer);
  }, [showGreeting]);

  function openChat() {
    setOpen(true);
    setShowGreeting(false);
  }

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
              "Sorry, I couldn't reach our system just now. Please call or WhatsApp us on +44 7351 111355 using the button below.",
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
      <AnimatePresence>
        {showGreeting && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 right-24 z-[70] max-w-[220px] rounded-2xl rounded-br-sm border border-corporate-gold/30 bg-card px-4 py-3 text-sm text-foreground shadow-2xl"
          >
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setShowGreeting(false)}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
            <button type="button" onClick={openChat} className="text-left">
              👋 Need help? Chat with our concierge for instant quotes & booking.
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Corporate Wheels"}
        onClick={() => (open ? setOpen(false) : openChat())}
        className="fixed bottom-6 right-6 z-[70] flex h-16 w-16 items-center justify-center rounded-full text-black shadow-[0_8px_30px_rgba(230,167,0,0.45)]"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        {!open && (
          <>
            <span className="absolute inset-0 -z-10 rounded-full bg-corporate-gold/60 animate-ping" />
            <span
              className="absolute inset-[-8px] -z-10 rounded-full border-2 border-corporate-gold/40 animate-ping"
              style={{ animationDelay: "0.6s", animationDuration: "2.2s" }}
            />
          </>
        )}
        <span className="absolute inset-0 -z-10 rounded-full btn-gradient btn-gradient-animate" />
        <span className="absolute inset-0 -z-20 rounded-full bg-corporate-gold blur-lg opacity-50" />

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner"
            >
              <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
            </motion.span>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-corporate-red">
            <span className="h-full w-full animate-ping rounded-full bg-corporate-red opacity-75" />
          </span>
        )}
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-corporate-gold/40">
                <img src="/logo.png" alt="Corporate Wheels" className="h-9 w-9 object-contain" />
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
                    Book Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="flex-1 rounded-full bg-[#25D366] text-black hover:bg-[#20bd5a]"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp Now
                  </a>
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
