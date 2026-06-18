import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import {
  PhoneCall, MessageSquare, ClipboardCheck, CalendarClock, Workflow, Clock,
  ArrowRight, Stethoscope, Home, ChevronRight,
  DollarSign, TrendingUp, Check,
  Cpu, UserCheck, ShieldCheck, Sparkles, Lock, Shield, Eye, RefreshCw,
} from "lucide-react";
import {
  SiHubspot, SiSalesforce, SiTwilio, SiGooglecalendar, SiZapier, SiMake, SiN8N, SiSlack, SiGoogle,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

/* ---------- Statement / Scroll Reveal ---------- */
export function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const lines = [
    "Every missed call",
    "is a missed opportunity.",
    "Your competitors answer instantly.",
    "Now you can too.",
  ];
  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-balance text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
        {lines.map((line, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: i < 2 ? 1 : 0.45, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`block ${i >= 2 ? "text-muted-foreground" : "text-gradient"}`}
          >
            {line}
          </motion.span>
        ))}
      </h2>
    </section>
  );
}

/* ---------- Bento ---------- */
const features = [
  { icon: PhoneCall, title: "AI Voice Agent", desc: "Natural, sub-second voice that handles inbound and outbound at scale.", span: "md:col-span-2 md:row-span-2" },
  { icon: MessageSquare, title: "AI Chat Agent", desc: "Web, SMS, and WhatsApp — one brain, every channel." },
  { icon: ClipboardCheck, title: "Lead Qualification", desc: "Dynamic scripts that score intent in real time." },
  { icon: CalendarClock, title: "Appointment Scheduling", desc: "Calendar-aware booking with conflict resolution.", span: "md:col-span-2" },
  { icon: Workflow, title: "CRM Automation", desc: "Bi-directional sync to your stack — no glue code." },
  { icon: Clock, title: "24/7 Availability", desc: "Nights, weekends, holidays — zero hold time." },
];
export function BentoSection() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Platform" title={<>Built for revenue teams<br /><span className="text-muted-foreground">that can't afford to miss.</span></>} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-white/15 ${f.span ?? ""}`}
          >
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-full flex-col justify-between">
              <f.icon className="h-5 w-5 text-primary" />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
const steps = [
  { t: "Lead Calls", d: "Inbound from any channel" },
  { t: "AI Answers", d: "Sub-second pickup, natural tone" },
  { t: "Qualifies Lead", d: "Intent scoring in real time" },
  { t: "Books Appointment", d: "Calendar-aware scheduling" },
  { t: "Updates CRM", d: "Bi-directional sync" },
  { t: "Notifies Team", d: "Slack, email, SMS" },
];
export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow="Workflow" title={<>From ring to revenue,<br /><span className="text-muted-foreground">in under two minutes.</span></>} />
      <div className="relative">
        <div aria-hidden className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass relative flex items-center gap-5 rounded-2xl p-5 md:ml-12"
            >
              <span className="absolute -left-[3.25rem] hidden h-3 w-3 rounded-full border border-primary/40 bg-background md:flex">
                <span className="m-auto h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <div className="flex-1">
                <div className="text-lg font-medium tracking-tight">{s.t}</div>
                <div className="text-sm text-muted-foreground">{s.d}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
export function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Industries" title={<>Two industries.<br /><span className="text-muted-foreground">Purpose-built playbooks.</span></>} />
      <div className="grid gap-5 md:grid-cols-2">
        <IndustryCard
          id="healthcare"
          icon={Stethoscope}
          name="Healthcare"
          headline="Patient intake without the wait."
          desc="HIPAA-aware intake, insurance verification, triage routing, and same-day scheduling across every provider."
          metrics={[
            { k: "Intake Resolved", v: "92%" },
            { k: "Avg Pickup", v: "0.8s" },
            { k: "No-shows", v: "−38%" },
          ]}
        />
        <IndustryCard
          id="real-estate"
          icon={Home}
          name="Real Estate"
          headline="Every inquiry, instantly nurtured."
          desc="Listing-aware responses, showing scheduling, buyer/seller qualification, and live handoff to your top agent."
          metrics={[
            { k: "Lead Speed", v: "<2s" },
            { k: "Tours Booked", v: "+47%" },
            { k: "After-hours", v: "100%" },
          ]}
        />
      </div>
    </section>
  );
}
function IndustryCard({ id, icon: Icon, name, headline, desc, metrics }: any) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative overflow-hidden rounded-3xl p-8"
    >
      <div aria-hidden className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Icon className="h-3.5 w-3.5" /> {name}
        </div>
        <h3 className="mt-6 max-w-md text-4xl font-semibold tracking-tight">{headline}</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{desc}</p>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {metrics.map((m: any) => (
            <div key={m.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="text-2xl font-semibold tracking-tight">{m.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary opacity-80 transition-opacity group-hover:opacity-100">
          Explore the {name.toLowerCase()} playbook <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Metrics (parallax) ---------- */
export function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const stats = [
    { v: "80%", l: "Fewer Missed Leads" },
    { v: "35%", l: "More Appointments" },
    { v: "60%", l: "Less Admin Work" },
    { v: "24/7", l: "Coverage" },
  ];
  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <motion.div style={{ y }} aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-background p-10"
          >
            <div className="text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.05em] text-gradient">{s.v}</div>
            <div className="mt-4 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Integrations marquee ---------- */
const logos = [
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Salesforce", Icon: SiSalesforce, color: "#00A1E0" },
  { name: "GoHighLevel", Icon: SiGoogle, color: "#FFFFFF" },
  { name: "Twilio", Icon: SiTwilio, color: "#F22F46" },
  { name: "Google Calendar", Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Outlook", Icon: TbBrandOffice, color: "#0078D4" },
  { name: "Zapier", Icon: SiZapier, color: "#FF4A00" },
  { name: "Make", Icon: SiMake, color: "#6D00CC" },
  { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { name: "Slack", Icon: SiSlack, color: "#E01E5A" },
];
export function IntegrationsSection() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Integrations" title={<>Plug into the stack<br /><span className="text-muted-foreground">you already run.</span></>} />
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="glass flex h-20 w-56 items-center justify-center gap-3 rounded-2xl">
              <l.Icon className="h-6 w-6" style={{ color: l.color }} />
              <span className="text-base font-medium tracking-tight text-foreground/90">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-12 md:p-20">
        <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-64 w-[60%] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-gradient"
        >
          Your next lead should never reach a competitor first.
        </motion.h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Deploy AI employees in days, not months.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/book-demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]">
            Book Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={logoImg} alt="Nexera Logo" loading="lazy" className="h-9 w-auto object-contain" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">AI voice and chat agents that answer, qualify, and book — 24/7.</p>
          </div>
          <FooterCol title="Product" items={["Voice Agent", "Chat Agent", "Integrations", "Pricing"]} />
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Nexera, Inc.</span>
          <div className="flex gap-6"><a href="/privacy" className="hover:text-foreground">Privacy</a><a href="/terms" className="hover:text-foreground">Terms</a><a href="/dpa" className="hover:text-foreground">DPA</a></div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-3">
        {items.map((i) => <li key={i}><a href="#" className="text-sm text-foreground/80 transition-colors hover:text-foreground">{i}</a></li>)}
      </ul>
    </div>
  );
}

/* ---------- ROI Calculator ---------- */
export function RoiCalculator() {
  const [calls, setCalls] = useState(1000);
  const [leadValue, setLeadValue] = useState(250);

  // Industry average missed call rate is 25%
  const missedCalls = Math.round(calls * 0.25);
  // Average booking/qualification rate of recovered calls is 85%
  const recoveredCalls = Math.round(missedCalls * 0.85);
  // Average lead-to-sale conversion rate is 15%
  const closedDeals = Math.round(recoveredCalls * 0.15);
  // Monthly revenue lost currently
  const revenueLost = Math.round(missedCalls * 0.15 * leadValue);
  // Monthly revenue recovered with Nexera
  const revenueRecovered = Math.round(closedDeals * leadValue);
  // Human salary vs Nexera cost
  const humanCost = 3500;
  const nexeraCost = Math.round(calls * 0.50); // $0.50 per call average
  const monthlySavings = humanCost + revenueRecovered - nexeraCost;

  return (
    <section id="roi-calculator" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="ROI Calculator" title={<>Calculate what missed calls<br /><span className="text-muted-foreground">are costing your business.</span></>} />
      
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sliders Control Panel */}
        <div className="glass rounded-3xl p-8 lg:col-span-5 flex flex-col justify-center space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-foreground">Monthly Inbound Calls</label>
              <span className="text-lg font-bold text-[#ffd92c]">{calls.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="5000" 
              step="100"
              value={calls}
              onChange={(e) => setCalls(Number(e.target.value))}
              className="w-full accent-[#eb7d02] bg-white/10 h-1 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>100</span>
              <span>5,000+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-foreground">Average Lead Value</label>
              <span className="text-lg font-bold text-[#ffd92c]">${leadValue}</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="2000" 
              step="10"
              value={leadValue}
              onChange={(e) => setLeadValue(Number(e.target.value))}
              className="w-full accent-[#eb7d02] bg-white/10 h-1 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>$20</span>
              <span>$2,000+</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#eb7d02]/20 bg-[#eb7d02]/5 text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-white block mb-1">Industry Statistics:</span>
            On average, <strong>25% of inbound business calls</strong> go unanswered. 85% of those callers will not call back and instead contact a competitor.
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          {/* Card 1: Revenue Lost */}
          <div className="glass rounded-3xl p-6 border border-red-500/10 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Unanswered Calls / Mo</div>
              <div className="text-3xl font-bold mt-2 text-red-400">{missedCalls}</div>
            </div>
            <div className="mt-8">
              <div className="text-xs text-muted-foreground">Est. Lost Revenue / Mo</div>
              <div className="text-xl font-semibold text-red-500">${revenueLost.toLocaleString()}</div>
            </div>
          </div>

          {/* Card 2: Revenue Recovered */}
          <div className="glass rounded-3xl p-6 border border-[#eb7d02]/30 bg-gradient-to-b from-[#eb7d02]/10 to-transparent flex flex-col justify-between relative overflow-hidden">
            <div aria-hidden className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#eb7d02]/10 blur-2xl" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Calls Answered by Nexera</div>
              <div className="text-3xl font-bold mt-2 text-[#ffd92c]">100%</div>
            </div>
            <div className="mt-8">
              <div className="text-xs text-muted-foreground">Recovered Revenue / Mo</div>
              <div className="text-2xl font-bold text-gradient">${revenueRecovered.toLocaleString()}</div>
            </div>
          </div>

          {/* Card 3: Cost Comparison */}
          <div className="glass rounded-3xl p-6 sm:col-span-2 flex flex-col justify-between border border-[#ffd92c]/20 bg-gradient-to-r from-black via-black to-[#ffd92c]/5">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Operational Efficiency</div>
                <div className="text-lg font-semibold mt-1">Nexera vs. Full-Time Receptionist</div>
              </div>
              <TrendingUp className="h-5 w-5 text-[#ffd92c]" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4">
              <div>
                <span className="text-xs text-muted-foreground block">Human Receptionist Cost</span>
                <span className="text-base font-semibold text-red-400">$3,500/mo</span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">Nexera Agent Cost</span>
                <span className="text-base font-semibold text-green-400">${nexeraCost}/mo</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <div className="text-xs text-muted-foreground">Total Monthly Value Generated</div>
                <div className="text-3xl font-black text-gradient">${monthlySavings.toLocaleString()}</div>
              </div>
              <Link to="/book-demo" className="rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-2.5 text-xs font-bold text-black transition-transform hover:scale-[1.03]">
                Claim Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Comparison Section ---------- */
export function ComparisonSection() {
  const tableData = [
    { feature: "Speed to Answer", nexera: "Instant (<0.8s)", humans: "15-45 seconds", bots: "Text-only / Delayed" },
    { feature: "Cost per Call/Minute", nexera: "~$0.15 - $0.50", humans: "$2.50 - $4.50+", bots: "Low, but lacks voice" },
    { feature: "Availability", nexera: "24/7/365 (Zero hold)", humans: "Business Hours only", bots: "24/7 (Text-only)" },
    { feature: "Booking & Qualification", nexera: "Adaptive & Custom Playbooks", humans: "Varies by training", bots: "Rigid button-based flows" },
    { feature: "CRM & Live Sync", nexera: "Real-time Bi-directional", humans: "Manual entry / Post-call", bots: "Limited API integrations" },
    { feature: "Simultaneous Lines", nexera: "Unlimited / Infinite scale", humans: "1 line per agent", bots: "High, but chat only" },
  ];

  return (
    <section id="comparison" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="The Advantage" title={<>How Nexera outmatches<br /><span className="text-muted-foreground">traditional options.</span></>} />
      
      <div className="overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-6 text-sm font-semibold text-muted-foreground">Features & Capabilities</th>
              <th className="p-6 text-sm font-bold text-[#ffd92c] border-l border-white/5">
                <span className="inline-block bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] bg-clip-text text-transparent font-black">Nexera AI Agents</span>
              </th>
              <th className="p-6 text-sm font-semibold text-muted-foreground border-l border-white/5">Traditional Call Center</th>
              <th className="p-6 text-sm font-semibold text-muted-foreground border-l border-white/5">Standard Chatbots</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tableData.map((row, index) => (
              <tr key={index} className="transition-colors hover:bg-white/[0.01]">
                <td className="p-6 text-sm font-medium text-foreground">{row.feature}</td>
                <td className="p-6 text-sm font-semibold text-white border-l border-white/5 bg-gradient-to-r from-[#eb7d02]/5 to-transparent">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#ffd92c] shrink-0" />
                    <span>{row.nexera}</span>
                  </div>
                </td>
                <td className="p-6 text-sm text-muted-foreground border-l border-white/5">{row.humans}</td>
                <td className="p-6 text-sm text-muted-foreground border-l border-white/5">{row.bots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 text-center text-xs text-muted-foreground">
        *Based on average operational data from healthcare and real estate clients in 2026.
      </div>
    </section>
  );
}

/* ---------- Deployment Workflow ---------- */
export function DeploymentWorkflow() {
  const stepsList = [
    {
      day: "Day 01",
      title: "Playbook Design",
      desc: "We analyze your calls, FAQs, and custom booking logic to construct your tailored agent playbook.",
      icon: Sparkles,
      color: "#ffd92c",
    },
    {
      day: "Day 02",
      title: "Voice & Tone Training",
      desc: "Select a hyper-realistic native voice and fine-tune latency so interactions feel human and natural.",
      icon: Cpu,
      color: "#eb7d02",
    },
    {
      day: "Day 03",
      title: "CRM & API Integration",
      desc: "Connect to your calendar, CRM (HubSpot, Salesforce), and phone systems (Twilio, VoIP).",
      icon: UserCheck,
      color: "#ffd92c",
    },
    {
      day: "Day 04-05",
      title: "Pilot & Live Launch",
      desc: "Run simulations, test edge cases, and launch live to handle overflow or 100% of calls.",
      icon: ShieldCheck,
      color: "#eb7d02",
    },
  ];

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Deployment Process" title={<>How we build &amp; deploy<br /><span className="text-muted-foreground">your custom AI Agent.</span></>} />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stepsList.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-[#eb7d02]/30 hover:shadow-[0_4px_30px_rgba(235,125,2,0.1)]"
            >
              <div 
                className="absolute top-0 left-0 h-[3px] w-full transition-all duration-300 group-hover:scale-x-110"
                style={{ background: `linear-gradient(90deg, ${step.color}, #eb7d02)` }}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[#ffd92c]">{step.day}</span>
                <div className="rounded-full bg-white/[0.03] p-2 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Security & Trust ---------- */
export function SecuritySection() {
  const securityItems = [
    {
      title: "HIPAA & PII Safeguards",
      desc: "Fully HIPAA aware. Every voice recording and transcript is encrypted in transit and at rest with automated PII redaction.",
      icon: Shield,
    },
    {
      title: "Jailbreak Prevention",
      desc: "Robust input/output guardrails ensure the AI agent sticks strictly to your playbooks, preventing prompt injection.",
      icon: Lock,
    },
    {
      title: "Redundant VoIP Routing",
      desc: "Built on globally redundant telecom networks with automatic failovers to guarantee 99.99% call connection uptime.",
      icon: RefreshCw,
    },
    {
      title: "Audit Logs & Monitoring",
      desc: "Full audit logs, live call sentiment analysis, and continuous monitoring via SOC2 Type II compliance standards.",
      icon: Eye,
    },
  ];

  return (
    <section id="security" className="relative mx-auto max-w-7xl px-6 py-20 border-t border-white/5">
      <div className="grid gap-12 lg:grid-cols-12 items-center">
        {/* Left side info */}
        <div className="lg:col-span-5">
          <SectionHead eyebrow="Security" title={<>Enterprise Trust &amp; Compliance</>} />
          <p className="text-muted-foreground leading-relaxed -mt-6">
            We understand that AI handling client communications requires absolute security. Nexera is built from the ground up to protect user data, adhere to strict regulatory compliance, and prevent prompt manipulation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white">HIPAA AWARE</span>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white">SOC2 TYPE II (Q3 2026)</span>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white">GDPR COMPLIANT</span>
          </div>
        </div>

        {/* Right side grid */}
        <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
          {securityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="rounded-2xl bg-white/[0.02] p-3 w-fit text-[#ffd92c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared ---------- */
function SectionHead({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient">{title}</h2>
    </div>
  );
}
