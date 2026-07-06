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

    // Generate comprehensive response
    const normText = trimmed.toLowerCase().replace(/[?,.!]/g, "").trim();
    let responseText = "";

    // Greeting patterns
    const isGreeting = /^(hi|hello|hey|hlo|yo|good morning|good afternoon|good evening)(\s|$)/i.test(trimmed);

    // Question patterns
    const isWhatQuestion = /what (do you do|does nexera|is nexera|are you|is this)/i.test(trimmed);
    const isHowQuestion = /how (does|do|can)/i.test(trimmed);
    const isWhyQuestion = /why (should|would|do)/i.test(trimmed);
    const isWhenQuestion = /when (can|will|do)/i.test(trimmed);
    const isWhereQuestion = /where (is|are|can)/i.test(trimmed);

    // Topic patterns
    const isAboutPricing = /(pricing|price|cost|fee|expensive|cheap|budget)/i.test(trimmed);
    const isAboutFeatures = /(feature|capability|function|tool|benefit)/i.test(trimmed);
    const isAboutIntegration = /(integrate|integration|connect|api|crm|calendar)/i.test(trimmed);
    const isAboutDemo = /(demo|demonstration|show me|example|try)/i.test(trimmed);
    const isAboutHealthcare = /(healthcare|medical|doctor|patient|hospital|clinic)/i.test(trimmed);
    const isAboutRealEstate = /(real estate|property|house|home|agent|listing)/i.test(trimmed);
    const isAboutSupport = /(help|support|problem|issue|trouble|question)/i.test(trimmed);
    const isAboutSecurity = /(secure|security|safe|privacy|data|protection)/i.test(trimmed);
    const isAboutAccuracy = /(accurate|accuracy|reliable|quality|performance)/i.test(trimmed);

    // Check conversation history for context
    const historyText = [...messages, userMsg].map((m) => m.text).join(" ").toLowerCase();
    const inHealthcareDemo = historyText.includes("nexera medical");
    const inRealEstateDemo = historyText.includes("nexera realty") || historyText.includes("maple avenue");

    // Response logic
    if (isGreeting) {
      responseText = "Hello! I'm **Ava**, Nexera's AI voice agent. I'm here to show you what our AI can do for Healthcare and Real Estate teams. What would you like to know about our platform?";
    
    } else if (isWhatQuestion || normText.includes("about nexera")) {
      responseText = "**Nexera** is an AI Voice Agent platform that transforms how Healthcare and Real Estate teams handle leads.\n\n**What we do:**\n• Answer calls, SMS & web chat in under 1 second\n• Qualify leads with smart conversation flows\n• Book appointments directly into calendars\n• Update your CRM automatically\n• Work 24/7 without breaks\n\n**Two specialized playbooks:** Healthcare (HIPAA-compliant) and Real Estate (listing-aware).\n\nWant to see a **healthcare** or **real estate** demo?";
    
    } else if (isAboutPricing) {
      responseText = "**Nexera Pricing** (Volume-based):\n\n💼 **Starter** - $199/month\n• 400 call minutes included\n• Basic playbooks\n• HubSpot integration\n• Email support\n\n🚀 **Professional** - $499/month\n• 1,200 call minutes\n• Advanced AI voices\n• Multi-CRM sync (Salesforce, GoHighLevel)\n• Priority routing\n• Phone support\n\n🏢 **Enterprise** - Custom pricing\n• Unlimited minutes\n• Custom voice cloning\n• Dedicated phone lines\n• White-label options\n• 99.9% SLA\n\nNeed a custom quote? I can book you a demo call!";
    
    } else if (isAboutFeatures) {
      responseText = "**Key Nexera Features:**\n\n🎯 **Smart Lead Qualification**\n• Dynamic conversation flows\n• Industry-specific scripts\n• Real-time intent scoring\n\n📞 **Voice Technology**\n• Sub-second call pickup\n• Natural voice synthesis\n• Multi-language support\n\n📅 **Calendar Integration**\n• Google Calendar, Outlook sync\n• Conflict resolution\n• Automatic confirmations\n\n🔄 **CRM Automation**\n• HubSpot, Salesforce integration\n• Instant lead updates\n• Custom field mapping\n\n📱 **Omnichannel**\n• Phone, SMS, WhatsApp, Web chat\n• Unified conversation history\n\nWhich feature interests you most?";
    
    } else if (isAboutIntegration) {
      responseText = "**Integration Capabilities:**\n\n🏥 **CRM Systems**\n• HubSpot (native integration)\n• Salesforce (bi-directional sync)\n• GoHighLevel (full automation)\n• Pipedrive, Zoho, custom APIs\n\n📅 **Calendar Platforms**\n• Google Calendar\n• Microsoft Outlook\n• Cal.com, Calendly\n• Custom booking systems\n\n💬 **Communication Channels**\n• VoIP providers (Twilio, RingCentral)\n• SMS/WhatsApp integration\n• Website chat widgets\n• Social media messaging\n\n🔧 **Automation Tools**\n• Zapier (1000+ apps)\n• Make.com workflows\n• Custom webhooks\n• API access\n\nSetup takes 15 minutes. Want a technical demo?";
    
    } else if (isAboutSecurity) {
      responseText = "**Security & Compliance:**\n\n🛡️ **Data Protection**\n• SOC 2 Type II (in progress)\n• End-to-end encryption\n• GDPR compliant\n• Regular security audits\n\n🏥 **Healthcare Compliance**\n• HIPAA-aware processing\n• PHI handling protocols\n• Secure data storage\n• Audit trail logging\n\n🔒 **Infrastructure Security**\n• AWS enterprise-grade hosting\n• 99.99% uptime SLA\n• Automatic backups\n• DDoS protection\n\n📋 **Access Controls**\n• Role-based permissions\n• Multi-factor authentication\n• Activity monitoring\n\nSecurity is our top priority. Need a compliance overview?";
    
    } else if (isAboutAccuracy) {
      responseText = "**Performance & Accuracy:**\n\n🎯 **Call Handling**\n• 94% call resolution rate\n• 0.8 second average pickup\n• 99.2% uptime reliability\n• Natural conversation flow\n\n📊 **Lead Qualification**\n• 87% qualification accuracy\n• Intent scoring precision\n• Reduced false positives\n• Smart follow-up triggers\n\n📅 **Booking Success**\n• 92% successful bookings\n• 38% reduction in no-shows\n• Conflict resolution\n• Automatic confirmations\n\n🔄 **CRM Accuracy**\n• 99.8% data sync success\n• Real-time updates\n• Error detection\n• Duplicate prevention\n\nOur AI gets smarter with every conversation!";
    
    } else if (isAboutDemo && (isAboutHealthcare || inHealthcareDemo)) {
      if (inHealthcareDemo) {
        // Continue healthcare demo flow
        if (normText.includes("new") || normText.includes("appointment") || normText.includes("book")) {
          responseText = "Perfect! I can help schedule that appointment. What type of medical service do you need?\n\n**Available specialties:**\n• General Medicine\n• Cardiology\n• Pediatrics\n• Dermatology\n• Orthopedics\n\nWhich specialty would you like to see?";
        } else if (/(cardio|heart|general|pediatric|dermatology|orthopedic)/i.test(normText)) {
          const specialty = normText.includes("cardio") ? "Cardiology" : 
                          normText.includes("general") ? "General Medicine" :
                          normText.includes("pediatric") ? "Pediatrics" :
                          normText.includes("dermatology") ? "Dermatology" : "Orthopedics";
          responseText = `Great choice! For **${specialty}**, I have these available slots:\n\n📅 **This Week:**\n• Thursday, Jan 11 at 2:30 PM\n• Friday, Jan 12 at 10:00 AM\n\n📅 **Next Week:**\n• Monday, Jan 15 at 9:15 AM\n• Wednesday, Jan 17 at 3:45 PM\n\nWhich time works best for you?`;
        } else if (/(thursday|friday|monday|wednesday|2:30|10:00|9:15|3:45)/i.test(normText)) {
          responseText = "Excellent! I've booked your appointment.\n\n✅ **Appointment Confirmed**\n• **Date:** Thursday, Jan 11 at 2:30 PM\n• **Doctor:** Dr. Sarah Patel (Cardiology)\n• **Location:** Nexera Medical Center\n\n📱 **Next Steps:**\n• Confirmation SMS sent to your phone\n• Calendar invite sent to your email\n• Patient intake form link included\n• Parking pass attached\n\n💊 **Preparation:**\n• Bring current medications list\n• Arrive 15 minutes early\n• Bring insurance card\n\nIs there anything else I can help you with today?";
        } else {
          responseText = "I'm here to help with your appointment booking! You can tell me:\n• What type of doctor you need\n• Your preferred date/time\n• Any special requirements\n\nWhat would you like to do next?";
        }
      } else {
        responseText = "Sure! Let me show you a **Healthcare intake demo**. 📞\n\n*Phone rings...*\n\n---\n\n**\"Good morning! Thank you for calling Nexera Medical Center. This is Ava, your virtual assistant. I can help you schedule appointments, check availability, and answer questions about our services.\"**\n\n**\"Are you calling to schedule a new appointment, modify an existing one, or do you have a general question?\"**\n\n*Try responding like a real patient would!*";
      }
    
    } else if (isAboutDemo && (isAboutRealEstate || inRealEstateDemo)) {
      if (inRealEstateDemo) {
        // Continue real estate demo flow
        if (/(buy|showing|private|schedule|tour)/i.test(normText)) {
          responseText = "Perfect! I can arrange a private showing for **452 Maple Avenue**.\n\n🏡 **Property Details:**\n• 4 bed, 3 bath Colonial\n• 2,400 sq ft\n• Recently renovated kitchen\n• Large backyard, 2-car garage\n• Listed at $625,000\n\nBefore I check our agent's availability, are you currently pre-approved for a mortgage?";
        } else if (/(yes|approved|pre-approved|preapproved|ready)/i.test(normText)) {
          responseText = "Excellent! Pre-approval makes everything smoother. Here are our available showing times:\n\n📅 **This Weekend:**\n• Saturday at 11:00 AM\n• Saturday at 2:30 PM\n• Sunday at 10:00 AM\n• Sunday at 1:00 PM\n\n🏠 **Tour Details:**\n• 45-minute private showing\n• Meet with listing agent Sarah Chen\n• Neighborhood overview included\n• Comparable sales data provided\n\nWhich time slot works best for your schedule?";
        } else if (/(saturday|sunday|11:00|2:30|10:00|1:00)/i.test(normText)) {
          responseText = "Perfect! I've scheduled your private showing.\n\n✅ **Showing Confirmed**\n• **Property:** 452 Maple Avenue\n• **Date:** Saturday at 11:00 AM\n• **Agent:** Sarah Chen (Top Producer)\n• **Duration:** 45 minutes\n\n📧 **Confirmation Sent:**\n• Calendar invite with property details\n• Driving directions included\n• Agent contact information\n• Neighborhood market report attached\n\n🗂️ **What to Bring:**\n• Photo ID\n• Pre-approval letter\n• List of questions\n\n**Sarah will meet you at the front door. Looking forward to showing you this beautiful home!**\n\nAny questions about the property or area?";
        } else {
          responseText = "I'm here to help with your property inquiry! I can:\n• Schedule private showings\n• Provide property details\n• Share market information\n• Connect you with our agents\n\nWhat would you like to know about 452 Maple Avenue?";
        }
      } else {
        responseText = "Absolutely! Here's a **Real Estate inquiry demo**. 📞\n\n*Phone rings...*\n\n---\n\n**\"Hello! Thank you for calling Nexera Realty. This is Ava, your virtual assistant. I see you're interested in our listing at 452 Maple Avenue.\"**\n\n**\"This is a beautiful 4-bedroom Colonial with a recently renovated kitchen, listed at $625,000. Are you looking to schedule a private showing, or do you have questions about the property?\"**\n\n*Try responding as a potential buyer!*";
      }
    
    } else if (isAboutDemo) {
      responseText = "I'd love to show you what Nexera can do! We have **two interactive demos**:\n\n🏥 **Healthcare Demo**\n• Patient intake simulation\n• Appointment scheduling\n• Insurance verification\n• HIPAA-compliant handling\n\n🏡 **Real Estate Demo**\n• Property inquiry handling\n• Showing coordination\n• Lead qualification\n• Agent handoff process\n\n📞 **Live Product Demo**\n• 15-minute screen share\n• Custom setup walkthrough\n• ROI calculator\n• Implementation timeline\n\nWhich would you like to try? Type **healthcare**, **real estate**, or **live demo**!";
    
    } else if (isAboutSupport) {
      responseText = "I'm here to help! **Common questions I can answer:**\n\n🤔 **About Nexera:**\n• How it works\n• Pricing and plans\n• Features and capabilities\n• Integration options\n\n💼 **For Your Business:**\n• ROI calculation\n• Implementation timeline\n• Training requirements\n• Compliance questions\n\n🚀 **Getting Started:**\n• Demo scheduling\n• Trial setup\n• Onboarding process\n• Technical requirements\n\n📞 **Need Human Help?**\nI can connect you with our team for:\n• Custom pricing\n• Technical consultation\n• Implementation planning\n\nWhat specific question can I help you with?";
    
    } else if (isHowQuestion) {
      responseText = "**How Nexera Works:**\n\n1️⃣ **Call Comes In**\n• Phone rings to your Nexera number\n• AI picks up in under 1 second\n• Natural greeting with your branding\n\n2️⃣ **AI Conversation**\n• Understands caller intent\n• Asks qualifying questions\n• Follows industry-specific scripts\n\n3️⃣ **Action Taken**\n• Books appointments in your calendar\n• Updates your CRM instantly\n• Sends confirmations via SMS/email\n\n4️⃣ **Team Notification**\n• Slack/SMS alert to your team\n• Full conversation transcript\n• Lead score and next steps\n\n🔄 **Continuous Learning**\n• AI improves with every call\n• Custom training on your data\n• Regular performance optimization\n\nWant to see it in action? Try a **healthcare** or **real estate** demo!";
    
    } else if (isWhyQuestion) {
      responseText = "**Why Choose Nexera?**\n\n📈 **Proven Results**\n• 80% fewer missed leads\n• 35% more appointments booked\n• 60% reduction in admin work\n• 300% ROI within 6 months\n\n⚡ **Instant Response**\n• 24/7 availability\n• Sub-second pickup\n• No hold times\n• Professional every time\n\n🎯 **Industry Expertise**\n• Built specifically for Healthcare & Real Estate\n• HIPAA-compliant for medical practices\n• Property-aware for real estate teams\n• Proven conversion strategies\n\n💰 **Cost Effective**\n• Replaces multiple staff members\n• No sick days or vacation time\n• Scales with your business\n• Predictable monthly cost\n\n🔧 **Easy Integration**\n• 15-minute setup\n• Works with existing systems\n• No technical expertise required\n• Full training included\n\nReady to transform your lead handling?";
    
    } else if (isWhenQuestion) {
      responseText = "**Timeline & Availability:**\n\n⚡ **Setup Time**\n• Account creation: 5 minutes\n• System integration: 15 minutes\n• Custom training: 24-48 hours\n• Go live: Within 3 days\n\n📞 **Availability**\n• 24 hours a day\n• 7 days a week\n• 365 days a year\n• No holidays or breaks\n\n📊 **Performance Monitoring**\n• Real-time dashboard\n• Daily performance reports\n• Weekly optimization calls\n• Monthly strategy reviews\n\n🚀 **Scaling**\n• Handle 1 or 1000 calls simultaneously\n• Instant capacity increases\n• No additional hardware needed\n• Pay only for what you use\n\n📅 **Getting Started**\n• Demo available now\n• Trial can start today\n• Implementation next week\n• Full deployment within days\n\nWhen would you like to begin?";
    
    } else if (isWhereQuestion) {
      responseText = "**Where Nexera Operates:**\n\n🌍 **Geographic Coverage**\n• United States (all 50 states)\n• Canada (English & French)\n• United Kingdom\n• Australia\n• Expanding to EU in 2024\n\n📱 **Platform Availability**\n• Cloud-based (no hardware needed)\n• Web dashboard accessible anywhere\n• Mobile app for iOS & Android\n• API access for developers\n\n🏢 **Infrastructure**\n• AWS enterprise hosting\n• Multiple data centers\n• 99.99% uptime guarantee\n• Automatic failover protection\n\n🎯 **Perfect For**\n• Healthcare clinics & hospitals\n• Real estate agencies & brokerages\n• Medical practices of any size\n• Property management companies\n\n📞 **Contact Methods**\n• Phone integration\n• Website chat widgets\n• SMS & WhatsApp\n• Social media messaging\n\nWhere is your business located?";
    
    } else if (normText.includes("thank")) {
      responseText = "You're very welcome! I'm glad I could help.\n\n**What's next?**\n• Try a **healthcare** or **real estate** demo\n• Schedule a live product demonstration\n• Get a custom pricing quote\n• Speak with our implementation team\n\nIs there anything else you'd like to know about Nexera?";
    
    } else if (/(goodbye|bye|see you|talk later)/i.test(trimmed)) {
      responseText = "Thank you for your interest in Nexera! \n\n**Before you go:**\n• Save this chat for reference\n• Try our interactive demos anytime\n• Visit nexera.com for more info\n• Book a demo: [calendly.com/nexera-demo]\n\n**Remember:** We're transforming how Healthcare and Real Estate teams handle leads. Every missed call is a missed opportunity!\n\nHave a great day! 👋";
    
    } else {
      // Intelligent fallback with suggestions
      responseText = "Great question! I want to give you the most helpful answer. \n\n**I can help you with:**\n• **Product demo** - See Nexera in action\n• **Pricing info** - Plans and ROI calculator  \n• **How it works** - Technical details\n• **Integration** - CRM and calendar setup\n• **Results** - Success stories and metrics\n\n**Quick demos:**\n• Type **healthcare** for medical practice demo\n• Type **real estate** for property agent demo\n• Type **live demo** to book a screen share\n\nWhat specific aspect of Nexera interests you most?";
    }

    // Simulate thinking delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

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
      await new Promise((resolve) => setTimeout(resolve, 40 + Math.random() * 30));
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
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60] flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_15px_40px_-10px_rgba(235,125,2,0.4)] transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer"
        aria-label={open ? "Close chat" : "Open chat with Ava"}
      >
        {open ? (
          <>
            <X className="h-3.5 sm:h-4 w-3.5 sm:w-4" /> <span className="hidden sm:inline">Close</span>
          </>
        ) : (
          <>
            <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-70" />
              <span className="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-black" />
            </span>
            <MessageSquare className="h-3.5 sm:h-4 w-3.5 sm:w-4" /> 
            <span className="hidden xs:inline">Chat with Ava</span>
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
            className="fixed bottom-16 sm:bottom-20 lg:bottom-24 right-2 sm:right-4 lg:right-6 z-[60] flex h-[70vh] sm:h-[600px] max-h-[80vh] w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)]"
          >
            {/* Header */}
            <div className="relative flex items-center gap-2 sm:gap-3 border-b border-white/5 px-3 sm:px-5 py-3 sm:py-4">
              <div aria-hidden className="absolute inset-x-0 top-0 -z-0 h-24 sm:h-32 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(235,125,2,0.08),transparent)]" />
              <div className="relative flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-black border border-white/10 overflow-hidden">
                <img src={logoImg} alt="Nexera Logo" className="h-6 sm:h-8 w-6 sm:w-8 object-contain" />
              </div>
              <div className="relative flex-1 min-w-0">
                <div className="text-sm font-semibold tracking-tight text-white">Ava · AI Agent</div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-muted-foreground">
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-green-500" /> Online · responds in &lt;1s
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 sm:space-y-4 overflow-y-auto px-3 sm:px-5 py-3 sm:py-5">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={
                        isUser
                          ? "max-w-[85%] rounded-2xl rounded-br-md bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-black"
                          : "max-w-[90%] text-xs sm:text-sm leading-relaxed text-foreground/95"
                      }
                    >
                      {isUser ? (
                        m.text
                      ) : (
                        <div className="prose prose-invert prose-sm max-w-none prose-p:my-1 sm:prose-p:my-1.5 prose-ul:my-1 sm:prose-ul:my-1.5 prose-strong:text-white">
                          <ReactMarkdown>{m.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-1 sm:gap-1.5 px-1 text-muted-foreground">
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" />
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" />
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60" />
                </div>
              )}

              {messages.length <= 1 && !isLoading && (
                <div className="space-y-1.5 sm:space-y-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.02] px-3 sm:px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-foreground/90 transition-colors hover:border-white/20 hover:bg-white/[0.05] cursor-pointer"
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
              className="border-t border-white/5 bg-white/[0.02] p-2 sm:p-3"
            >
              <div className="flex items-end gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-black px-2.5 sm:px-3 py-1.5 sm:py-2 focus-within:border-white/25">
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
                  className="max-h-24 sm:max-h-32 flex-1 resize-none bg-transparent py-1 sm:py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send"
                  className="flex h-7 sm:h-8 w-7 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer"
                >
                  <Send className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                </button>
              </div>
              <div className="mt-1.5 sm:mt-2 px-0.5 sm:px-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Live AI · same engine powers your calls
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
