import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import logoImg from "@/assets/logo-icon.png";

const SUGGESTIONS = [
  "What does Nexera do?",
  "Demo a healthcare intake call",
  "Book me a product demo",
];

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const WELCOME: Message = {
  id: "welcome",
  role: "assistant",
  text: "Hey, I'm **Ava** — the live AI agent that powers Nexera. Ask me anything, or pick a demo below and I'll role-play a real call.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open, messages.length]);

  const submit = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Generate responsive reply
    const normText = trimmed.toLowerCase().replace(/[?,.!]/g, "").trim();
    let responseText = "";

    const isGreeting =
      normText === "hi" || normText === "hello" || normText === "hey" ||
      normText === "hlo" || normText === "yo" ||
      normText.startsWith("hi ") || normText.startsWith("hello ") ||
      normText.startsWith("hey ") || normText.startsWith("hlo ");

    const isWhatDo =
      normText.includes("what you do") || normText.includes("what do you") ||
      normText.includes("what does nexera") || normText.includes("what is nexera") ||
      normText.includes("who are you") || normText.includes("who is ava") ||
      normText.includes("what you doo") || normText.includes("what nexera do") ||
      normText.includes("what is this") || normText.includes("about nexera");

    if (isWhatDo) {
      responseText = "**Nexera** is an AI-powered voice and chat employee platform purpose-built for **Healthcare clinics** and **Real Estate teams**.\n\nKey features:\n* 📞 **24/7 Inbound Call Answering:** Under 1-second pickup with natural, ultra-realistic voice.\n* 📝 **Lead Qualification:** Dynamic scripts to qualify intent, insurance, or budget.\n* 📅 **Calendar Booking:** Automatic scheduling into your calendar (Google Calendar, Outlook, Cal.com) with conflict resolution.\n* 🔄 **CRM Sync:** Instant updates to HubSpot, Salesforce, GoHighLevel.\n\nWould you like to roleplay a **Healthcare Intake** call or a **Real Estate** inquiry demo here?";
    } else if (isGreeting) {
      responseText = "Hello! I'm **Ava**, your AI assistant. How can I help you today? You can ask me what Nexera does, ask about our pricing, or start a live demo roleplay (type **healthcare** or **real estate**)!";
    } else if (normText.includes("healthcare intake") || normText.includes("healthcare call") || normText.includes("demo a healthcare") || normText.includes("healthcare")) {
      responseText = "Sure! Let's roleplay a healthcare intake call. 📞 *Ring ring...*\n\n\"Hi, thank you for calling Nexera Medical. I'm Ava, your virtual assistant. Are you calling to book a **new appointment** or modify an existing one?\"";
    } else if (normText.includes("real estate") || normText.includes("real-estate") || normText.includes("realty") || normText.includes("realestate") || normText.includes("property")) {
      responseText = "Absolutely! Let's start a real estate inquiry roleplay. 📞 *Ring ring...*\n\n\"Hi! Thanks for calling Nexera Realty, this is Ava. I see you're interested in the property on **452 Maple Avenue**. Are you looking to buy, sell, or schedule a **private showing**?\"";
    } else if (normText.includes("book") && normText.includes("demo")) {
      responseText = "I'd love to get you booked for a live product demo with our team! \n\nTo schedule a call, please reply with your:\n1. **Full Name**\n2. **Company Email**\n3. **Phone Number**\n\nOnce you share these, I'll lock in a slot for you!";
    } else if (normText.includes("pricing") || normText.includes("cost") || normText.includes("price")) {
      responseText = "Nexera pricing is simple and volume-based:\n\n* **Starter:** $199/mo (Includes 400 call minutes, custom playbooks, HubSpot integration).\n* **Pro:** $499/mo (Includes 1,200 call minutes, advanced voices, Salesforce integration, priority routing).\n* **Enterprise:** Custom (Dedicated VoIP lines, custom SLA, custom voice cloning).\n\nWould you like to book a demo to get custom pricing for your volume?";
    } else {
      // Check message history context
      const historyText = [...messages, userMsg]
        .map((m) => m.text)
        .join(" ")
        .toLowerCase();

      if (historyText.includes("nexera medical")) {
        if (normText.includes("new") || normText.includes("appointment") || normText.includes("book")) {
          responseText = "Great! I can help you schedule that new appointment. What **medical specialty or doctor** are you looking to see? (e.g., Cardiology, General Medicine, Pediatrics)";
        } else if (normText.includes("cardio") || normText.includes("heart") || normText.includes("general") || normText.includes("pediatric")) {
          responseText = "Perfect. We have slots available this Thursday at **2:30 PM** or Friday at **10:00 AM**. Which of these times works best for you?";
        } else if (normText.includes("thursday") || normText.includes("2:30") || normText.includes("friday") || normText.includes("10:00")) {
          responseText = "Excellent. I have booked your appointment for **Thursday at 2:30 PM**.\n\nI have automatically:\n1. Sent a **confirmation SMS** to your number.\n2. Scheduled it in **Dr. Patel's calendar**.\n3. Updated the patient record in our system.\n\nIs there anything else I can assist you with?";
        } else {
          responseText = "I'm in **Healthcare Intake** roleplay mode right now. Would you like to schedule a new appointment, or ask a general question about Nexera?";
        }
      } else if (historyText.includes("realty") || historyText.includes("maple avenue")) {
        if (normText.includes("buy") || normText.includes("showing") || normText.includes("private") || normText.includes("schedule")) {
          responseText = "Awesome. I can coordinate a private showing of **452 Maple Avenue** for you.\n\nBefore I check the agent's schedule, are you currently pre-approved for a mortgage?";
        } else if (normText.includes("yes") || normText.includes("approved") || normText.includes("pre-approved") || normText.includes("preapproved")) {
          responseText = "Perfect! That makes it much easier. We have showing slots available this **Saturday at 11:00 AM** or **Sunday at 2:00 PM**. Which one works best for you?";
        } else if (normText.includes("saturday") || normText.includes("11:00") || normText.includes("sunday") || normText.includes("2:00")) {
          responseText = "Fantastic! I've booked your private showing for **Saturday at 11:00 AM**.\n\nI have:\n1. Sent the **calendar invite** with the property details.\n2. Assigned our lead agent, **Sarah Chen**, to meet you at the property.\n3. Synced this to our database.\n\nLooking forward to meeting you there! Do you have any questions about the property?";
        } else {
          responseText = "I'm in **Real Estate** roleplay mode right now. Would you like to schedule a showing, or ask a general question about Nexera?";
        }
      } else {
        responseText = "I'm here to help! You can ask me what Nexera does, ask about pricing, or type **healthcare** or **real estate** to start a call roleplay demo.";
      }
    }

    // Simulate thinking delay (approx 600ms)
    await new Promise((resolve) => setTimeout(resolve, 600));

    const assistantMsgId = Date.now().toString() + "-assistant";

    // Add empty assistant response to begin typing stream
    setMessages((prev) => [...prev, { id: assistantMsgId, role: "assistant", text: "" }]);

    const words = responseText.split(" ");
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + (i === words.length - 1 ? "" : " ");

      // Update last message
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantMsgId ? { ...m, text: currentText } : m))
      );

      // Delay to simulate typing (word by word)
      await new Promise((resolve) => setTimeout(resolve, 25 + Math.random() * 20));
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-3 text-sm font-semibold text-black shadow-[0_15px_40px_-10px_rgba(235,125,2,0.4)] transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer"
        aria-label={open ? "Close chat" : "Open chat with Ava"}
      >
        {open ? (
          <>
            <X className="h-4 w-4" /> Close
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
            </span>
            <MessageSquare className="h-4 w-4" /> Chat with Ava
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[60] flex h-[600px] max-h-[80vh] w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)]"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-white/5 px-5 py-4">
              <div aria-hidden className="absolute inset-x-0 top-0 -z-0 h-32 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(235,125,2,0.08),transparent)]" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black border border-white/10 overflow-hidden">
                <img src={logoImg} alt="Nexera Logo" className="h-8 w-8 object-contain" />
              </div>
              <div className="relative flex-1">
                <div className="text-sm font-semibold tracking-tight text-white">Ava · AI Agent</div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online · responds in &lt;1s
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={
                        isUser
                          ? "max-w-[85%] rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm text-black"
                          : "max-w-[90%] text-sm leading-relaxed text-foreground/95"
                      }
                    >
                      {isUser ? (
                        m.text
                      ) : (
                        <div className="prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-strong:text-white">
                          <ReactMarkdown>{m.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-1.5 px-1 text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" />
                </div>
              )}

              {messages.length <= 1 && !isLoading && (
                <div className="space-y-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-left text-sm text-foreground/90 transition-colors hover:border-white/20 hover:bg-white/[0.05] cursor-pointer"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="border-t border-white/5 bg-white/[0.02] p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black px-3 py-2 focus-within:border-white/25">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submit(input);
                    }
                  }}
                  placeholder="Ask Ava anything…"
                  className="max-h-32 flex-1 resize-none bg-transparent py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="mt-2 px-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Live AI · same engine powers your calls
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
