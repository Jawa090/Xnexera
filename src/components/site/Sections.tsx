import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import nexeraLogo from "@/assets/nexera-logo.png";
import {
  PhoneCall, MessageSquare, ClipboardCheck, CalendarClock, Workflow, Clock,
  ArrowRight, Stethoscope, Home, ChevronRight,
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
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
            Book Demo <ArrowRight className="h-4 w-4" />
          </a>
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
            <div className="flex items-center gap-2">
              <img src={nexeraLogo} alt="Nexera" width={32} height={32} loading="lazy" className="h-8 w-8 object-contain" />
              <span className="text-base font-semibold tracking-[0.18em]">NEXERA</span>
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
