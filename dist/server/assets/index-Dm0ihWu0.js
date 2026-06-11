import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Mic, CheckCircle2, Calendar, Database, FileText, PhoneCall, MessageSquare, ClipboardCheck, CalendarClock, Workflow, Clock, ChevronRight, Stethoscope, Home, ArrowRight, Pause, Play, Volume2, X, Send } from "lucide-react";
import { n as nexeraLogo } from "./router-BuEGXfWg.js";
import { useRef, useState, useEffect } from "react";
import { SiHubspot, SiSalesforce, SiGoogle, SiTwilio, SiGooglecalendar, SiZapier, SiMake, SiN8N, SiSlack } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@ai-sdk/openai-compatible";
function Navbar() {
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5", children: [
        /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: nexeraLogo, alt: "Nexera", width: 36, height: 36, className: "h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-[0.18em]", children: "NEXERA" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#cta", className: "rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-black transition-transform hover:scale-[1.02]", children: "Book Demo" })
      ] })
    }
  );
}
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] }
});
function HeroDashboard() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40, rotateX: 8 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      transition: { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
      style: { transformPerspective: 1200 },
      className: "relative w-full",
      children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.35),transparent_70%)] blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "glass overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/5 px-5 py-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Live Console" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-success", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
              "Connected"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-span-2 space-y-3 border-r border-white/5 p-5", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.6), className: "flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-pulse-ring rounded-full border border-primary/40" }),
                    /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Incoming Call" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "+1 (415) 555 · 0192" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "00:42" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.8), className: "rounded-xl border border-white/5 bg-white/[0.02] p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Mic, { className: "h-3.5 w-3.5 text-primary" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "AI Speaking" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex h-8 items-end gap-[3px]", children: Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "w-[3px] origin-bottom rounded-full bg-gradient-to-t from-primary to-accent animate-wave",
                    style: { animationDelay: `${i % 8 * 0.08}s`, height: `${30 + i * 13 % 70}%` }
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1), className: "flex items-center justify-between rounded-xl border border-success/15 bg-success/5 p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Lead Qualified" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-success", children: "High Intent" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.2), className: "flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Appointment Booked" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "Thu, Jun 11 · 2:30 PM" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.4), className: "flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3", children: [
                /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-accent" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm", children: "CRM Updated" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "HubSpot · Contact #4821" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-success", children: "SYNCED" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-3 p-5", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.7), className: "mb-4 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Call Summary" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-muted-foreground", children: "Auto-Generated" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.9), className: "space-y-3", children: [
                /* @__PURE__ */ jsx(Row, { label: "Caller", value: "Maria Hernandez" }),
                /* @__PURE__ */ jsx(Row, { label: "Intent", value: "New patient · Cardiology consult" }),
                /* @__PURE__ */ jsx(Row, { label: "Insurance", value: "Verified · Blue Cross PPO" }),
                /* @__PURE__ */ jsx(Row, { label: "Booked", value: "Dr. Patel · Jun 11, 2:30 PM", highlight: true }),
                /* @__PURE__ */ jsx(Row, { label: "Followup", value: "SMS confirmation sent" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.3), className: "mt-5 rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-[11px] uppercase tracking-wider text-muted-foreground", children: "Transcript snippet" }),
                /* @__PURE__ */ jsx("p", { className: "text-[13px] leading-relaxed text-foreground/90", children: `"Of course, I can book that for you. I see Dr. Patel has an opening Thursday at 2:30. Should I send the confirmation to the number we're on?"` })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-3 gap-2", children: [
                { k: "Resolved", v: "94%" },
                { k: "Avg Handle", v: "1m 47s" },
                { k: "CSAT", v: "4.9" }
              ].map((m) => /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.5), className: "rounded-lg border border-white/5 bg-white/[0.02] p-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: m.k }),
                /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-base font-semibold tracking-tight", children: m.v })
              ] }, m.k)) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Row({ label, value, highlight }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/5 pb-2 last:border-0", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[12px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("span", { className: `text-[13px] ${highlight ? "text-success" : "text-foreground/90"}`, children: value })
  ] });
}
function StatementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const lines = [
    "Every missed call",
    "is a missed opportunity.",
    "Your competitors answer instantly.",
    "Now you can too."
  ];
  return /* @__PURE__ */ jsx("section", { ref, className: "relative mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsx("h2", { className: "text-balance text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]", children: lines.map((line, i) => /* @__PURE__ */ jsx(
    motion.span,
    {
      initial: { opacity: 0, y: 30 },
      animate: inView ? { opacity: i < 2 ? 1 : 0.45, y: 0 } : {},
      transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
      className: `block ${i >= 2 ? "text-muted-foreground" : "text-gradient"}`,
      children: line
    },
    i
  )) }) });
}
const features = [
  { icon: PhoneCall, title: "AI Voice Agent", desc: "Natural, sub-second voice that handles inbound and outbound at scale.", span: "md:col-span-2 md:row-span-2" },
  { icon: MessageSquare, title: "AI Chat Agent", desc: "Web, SMS, and WhatsApp — one brain, every channel." },
  { icon: ClipboardCheck, title: "Lead Qualification", desc: "Dynamic scripts that score intent in real time." },
  { icon: CalendarClock, title: "Appointment Scheduling", desc: "Calendar-aware booking with conflict resolution.", span: "md:col-span-2" },
  { icon: Workflow, title: "CRM Automation", desc: "Bi-directional sync to your stack — no glue code." },
  { icon: Clock, title: "24/7 Availability", desc: "Nights, weekends, holidays — zero hold time." }
];
function BentoSection() {
  return /* @__PURE__ */ jsxs("section", { id: "solutions", className: "relative mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Platform", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Built for revenue teams",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "that can't afford to miss." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]", children: features.map((f, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
        className: `glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-white/15 ${f.span ?? ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-between", children: [
            /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold tracking-tight", children: f.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md text-sm text-muted-foreground", children: f.desc })
            ] })
          ] })
        ]
      },
      f.title
    )) })
  ] });
}
const steps = [
  { t: "Lead Calls", d: "Inbound from any channel" },
  { t: "AI Answers", d: "Sub-second pickup, natural tone" },
  { t: "Qualifies Lead", d: "Intent scoring in real time" },
  { t: "Books Appointment", d: "Calendar-aware scheduling" },
  { t: "Updates CRM", d: "Bi-directional sync" },
  { t: "Notifies Team", d: "Slack, email, SMS" }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Workflow", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "From ring to revenue,",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "in under two minutes." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-3", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-10%" },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: "glass relative flex items-center gap-5 rounded-2xl p-5 md:ml-12",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[3.25rem] hidden h-3 w-3 rounded-full border border-primary/40 bg-background md:flex", children: /* @__PURE__ */ jsx("span", { className: "m-auto h-1.5 w-1.5 rounded-full bg-primary" }) }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-lg font-medium tracking-tight", children: s.t }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: s.d })
            ] }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
          ]
        },
        s.t
      )) })
    ] })
  ] });
}
function IndustriesSection() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Industries", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Two industries.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Purpose-built playbooks." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        IndustryCard,
        {
          id: "healthcare",
          icon: Stethoscope,
          name: "Healthcare",
          headline: "Patient intake without the wait.",
          desc: "HIPAA-aware intake, insurance verification, triage routing, and same-day scheduling across every provider.",
          metrics: [
            { k: "Intake Resolved", v: "92%" },
            { k: "Avg Pickup", v: "0.8s" },
            { k: "No-shows", v: "−38%" }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        IndustryCard,
        {
          id: "real-estate",
          icon: Home,
          name: "Real Estate",
          headline: "Every inquiry, instantly nurtured.",
          desc: "Listing-aware responses, showing scheduling, buyer/seller qualification, and live handoff to your top agent.",
          metrics: [
            { k: "Lead Speed", v: "<2s" },
            { k: "Tours Booked", v: "+47%" },
            { k: "After-hours", v: "100%" }
          ]
        }
      )
    ] })
  ] });
}
function IndustryCard({ id, icon: Icon, name, headline, desc, metrics }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      id,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "glass group relative overflow-hidden rounded-3xl p-8",
      children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }),
            " ",
            name
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 max-w-md text-4xl font-semibold tracking-tight", children: headline }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground", children: desc }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-3 gap-3", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/5 bg-white/[0.02] p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-semibold tracking-tight", children: m.v }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[11px] uppercase tracking-wider text-muted-foreground", children: m.k })
          ] }, m.k)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-2 text-sm text-primary opacity-80 transition-opacity group-hover:opacity-100", children: [
            "Explore the ",
            name.toLowerCase(),
            " playbook ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ]
    }
  );
}
function MetricsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const stats = [
    { v: "80%", l: "Fewer Missed Leads" },
    { v: "35%", l: "More Appointments" },
    { v: "60%", l: "Less Admin Work" },
    { v: "24/7", l: "Coverage" }
  ];
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative overflow-hidden py-24", children: [
    /* @__PURE__ */ jsx(motion.div, { style: { y }, "aria-hidden": true, className: "absolute inset-0 -z-10 grid-bg opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-0 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: i * 0.1 },
        className: "bg-background p-10",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.05em] text-gradient", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm text-muted-foreground", children: s.l })
        ]
      },
      s.l
    )) })
  ] });
}
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
  { name: "Slack", Icon: SiSlack, color: "#E01E5A" }
];
function IntegrationsSection() {
  return /* @__PURE__ */ jsxs("section", { id: "integrations", className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Integrations", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Plug into the stack",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "you already run." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]", children: /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee gap-3", children: [...logos, ...logos].map((l, i) => /* @__PURE__ */ jsxs("div", { className: "glass flex h-20 w-56 items-center justify-center gap-3 rounded-2xl", children: [
      /* @__PURE__ */ jsx(l.Icon, { className: "h-6 w-6", style: { color: l.color } }),
      /* @__PURE__ */ jsx("span", { className: "text-base font-medium tracking-tight text-foreground/90", children: l.name })
    ] }, i)) }) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsx("section", { id: "cta", className: "relative mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-12 md:p-20", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 grid-bg opacity-30" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute left-1/2 top-0 -z-10 h-64 w-[60%] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" }),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        className: "max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-gradient",
        children: "Your next lead should never reach a competitor first."
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Deploy AI employees in days, not months." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]", children: [
        "Book Demo ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10", children: "Talk to Sales" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: nexeraLogo, alt: "Nexera", width: 32, height: 32, loading: "lazy", className: "h-8 w-8 object-contain" }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-[0.18em]", children: "NEXERA" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground", children: "AI voice and chat agents that answer, qualify, and book — 24/7." })
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Product", items: ["Voice Agent", "Chat Agent", "Integrations", "Pricing"] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Nexera, Inc."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/privacy", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "/dpa", className: "hover:text-foreground", children: "DPA" })
      ] })
    ] })
  ] }) });
}
function FooterCol({ title, items }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: items.map((i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-foreground/80 transition-colors hover:text-foreground", children: i }) }, i)) })
  ] });
}
function SectionHead({ eyebrow, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
      " ",
      eyebrow
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient", children: title })
  ] });
}
const demos = [
  {
    id: "healthcare",
    industry: "Healthcare",
    Icon: Stethoscope,
    title: "New Patient Intake",
    subtitle: "Inbound · Family Clinic · 0:42",
    duration: 42,
    tags: ["HIPAA-aware", "Insurance verified", "Same-day booked"],
    transcript: [
      { who: "AI", text: "Thanks for calling Brightside Family Clinic, this is Ava. How can I help you today?", at: 0 },
      { who: "Caller", text: "Hi, I'd like to book an appointment for my son — he's been running a fever since last night.", at: 5 },
      { who: "AI", text: "I'm sorry to hear that. Is he an existing patient with us?", at: 12 },
      { who: "Caller", text: "No, this would be his first visit.", at: 17 },
      { who: "AI", text: "Got it. I'll set up a new patient intake. Can I grab his date of birth and your insurance provider?", at: 21 },
      { who: "Caller", text: "Sure — March 14, 2019. We're on Blue Cross PPO.", at: 28 },
      { who: "AI", text: "Verified. Dr. Patel has an opening today at 3:40 PM — would that work?", at: 34 },
      { who: "Caller", text: "Yes, perfect. Thank you.", at: 40 }
    ]
  },
  {
    id: "real-estate",
    industry: "Real Estate",
    Icon: Home,
    title: "Listing Inquiry & Showing",
    subtitle: "Inbound · 412 Elm Ave · 0:38",
    duration: 38,
    tags: ["Buyer qualified", "Showing booked", "Agent notified"],
    transcript: [
      { who: "AI", text: "Hi, this is Marcus with Northline Realty — I see you reached out about 412 Elm Avenue?", at: 0 },
      { who: "Caller", text: "Yeah, is it still available? And what's the asking?", at: 5 },
      { who: "AI", text: "It is — listed at $625,000, four bed, two and a half bath, fully renovated kitchen.", at: 10 },
      { who: "Caller", text: "Nice. Could I see it this weekend?", at: 17 },
      { who: "AI", text: "Absolutely. I have Saturday at 11 AM or Sunday at 2 PM with the listing agent, Priya.", at: 21 },
      { who: "Caller", text: "Saturday 11 works.", at: 30 },
      { who: "AI", text: "Booked. You'll get a confirmation text in a moment. Anything else I can pull up?", at: 33 }
    ]
  }
];
function DemoSection() {
  return /* @__PURE__ */ jsxs("section", { id: "demos", className: "relative mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
        " Live Demos"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient", children: [
        "Hear it answer a real call.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Two industries. Zero hold time." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: demos.map((d, i) => /* @__PURE__ */ jsx(DemoPlayer, { demo: d, delay: i * 0.1 }, d.id)) })
  ] });
}
function DemoPlayer({ demo, delay }) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const raf = useRef(null);
  const last = useRef(0);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current);
      return;
    }
    last.current = performance.now();
    const tick = (now) => {
      const dt = (now - last.current) / 1e3;
      last.current = now;
      setT((prev) => {
        const next = prev + dt;
        if (next >= demo.duration) {
          setPlaying(false);
          return demo.duration;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [playing, demo.duration]);
  const visible = demo.transcript.filter((l) => l.at <= t);
  const activeIdx = visible.length - 1;
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [activeIdx]);
  const progress = Math.min(1, t / demo.duration);
  const Icon = demo.Icon;
  const toggle = () => {
    if (t >= demo.duration) setT(0);
    setPlaying((p) => !p);
  };
  const fmt = (s) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
      className: "glass group relative overflow-hidden rounded-3xl p-6 md:p-8",
      children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }),
              " ",
              demo.industry
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl font-semibold tracking-tight", children: demo.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: demo.subtitle })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: toggle,
              "aria-label": playing ? "Pause demo" : "Play demo",
              className: "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95",
              children: [
                playing && /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute inset-0 animate-pulse-ring rounded-full border border-white/40" }),
                playing ? /* @__PURE__ */ jsx(Pause, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Play, { className: "h-5 w-5 translate-x-[1px]" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex h-14 items-end gap-[3px]", children: Array.from({ length: 56 }).map((_, i) => {
          const filled = i / 56 < progress;
          const h = 18 + i * 37 % 100 * 0.42;
          return /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-[3px] rounded-full",
              style: {
                height: `${h}%`,
                background: filled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.15)",
                transform: playing && filled && i > progress * 56 - 6 ? "scaleY(1.15)" : "scaleY(1)",
                transition: "background 200ms, transform 180ms"
              }
            },
            i
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between text-[11px] font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: fmt(t) }),
          /* @__PURE__ */ jsx("div", { className: "mx-3 h-px flex-1 bg-white/5", children: /* @__PURE__ */ jsx("div", { className: "h-px bg-white/60", style: { width: `${progress * 100}%` } }) }),
          /* @__PURE__ */ jsx("span", { children: fmt(demo.duration) })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: scrollRef,
            className: "mt-6 h-44 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 [mask-image:linear-gradient(180deg,transparent,#000_12%,#000_88%,transparent)]",
            children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: visible.length === 0 ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: "flex h-full items-center justify-center gap-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx(Volume2, { className: "h-3.5 w-3.5" }),
                  " Press play to hear the transcript stream in real time."
                ]
              },
              "idle"
            ) : /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: visible.map((l, i) => /* @__PURE__ */ jsxs(
              motion.li,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: i === activeIdx ? 1 : 0.55, y: 0 },
                transition: { duration: 0.4 },
                className: "flex gap-3 text-sm leading-relaxed",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mt-[2px] inline-flex h-5 shrink-0 items-center rounded-md px-1.5 font-mono text-[10px] uppercase tracking-wider ${l.who === "AI" ? "bg-white text-black" : "border border-white/10 bg-white/[0.04] text-muted-foreground"}`,
                      children: l.who
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: l.text })
                ]
              },
              i
            )) }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: demo.tags.map((tg) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-success" }),
              " ",
              tg
            ]
          },
          tg
        )) })
      ]
    }
  );
}
const SUGGESTIONS = [
  "What does Nexera do?",
  "Demo a healthcare intake call",
  "Book me a product demo"
];
const WELCOME = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hey, I'm **Ava** — the live AI agent that powers Nexera. Ask me anything, or pick a demo below and I'll role-play a real call."
    }
  ]
};
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const transport = useRef(new DefaultChatTransport({ api: "/api/chat" })).current;
  const { messages, sendMessage, status, error } = useChat({
    id: "landing-demo",
    messages: [WELCOME],
    transport
  });
  const isLoading = status === "submitted" || status === "streaming";
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open, messages.length]);
  const submit = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    await sendMessage({ text: trimmed });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => setOpen((o) => !o),
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6, duration: 0.6 },
        className: "fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-transform hover:scale-[1.03] active:scale-95",
        "aria-label": open ? "Close chat" : "Open chat with Ava",
        children: open ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          " Close"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-success" })
          ] }),
          /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
          " Chat with Ava"
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.98 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        className: "fixed bottom-24 right-6 z-[60] flex h-[600px] max-h-[80vh] w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3 border-b border-white/5 px-5 py-4", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 -z-0 h-32 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" }),
            /* @__PURE__ */ jsx("div", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ jsx("img", { src: nexeraLogo, alt: "Nexera", className: "h-6 w-6 object-contain" }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold tracking-tight", children: "Ava · AI Agent" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
                " Online · responds in <1s"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { ref: scrollRef, className: "flex-1 space-y-4 overflow-y-auto px-5 py-5", children: [
            messages.map((m) => {
              const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
              if (!text) return null;
              const isUser = m.role === "user";
              return /* @__PURE__ */ jsx("div", { className: `flex ${isUser ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: isUser ? "max-w-[85%] rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm text-black" : "max-w-[90%] text-sm leading-relaxed text-foreground/95",
                  children: isUser ? text : /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-strong:text-white", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: text }) })
                }
              ) }, m.id);
            }),
            status === "submitted" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" }),
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" }),
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" })
            ] }),
            error && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-xs text-red-300", children: "Connection issue. Please try again." }),
            messages.length <= 1 && !isLoading && /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-2", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => submit(s),
                className: "w-full rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-left text-sm text-foreground/90 transition-colors hover:border-white/20 hover:bg-white/[0.05]",
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                submit(input);
              },
              className: "border-t border-white/5 bg-white/[0.02] p-3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2 rounded-2xl border border-white/10 bg-black px-3 py-2 focus-within:border-white/25", children: [
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      ref: inputRef,
                      rows: 1,
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      onKeyDown: (e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          submit(input);
                        }
                      },
                      placeholder: "Ask Ava anything…",
                      className: "max-h-32 flex-1 resize-none bg-transparent py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",
                      disabled: isLoading
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isLoading || !input.trim(),
                      "aria-label": "Send",
                      className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition-opacity disabled:opacity-30",
                      children: /* @__PURE__ */ jsx(Send, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-2 px-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Live AI · same engine powers your calls" })
              ]
            }
          )
        ]
      },
      "panel"
    ) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { id: "top", className: "relative min-h-screen overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-[0.25]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.04),transparent)]" })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(StatementSection, {}),
    /* @__PURE__ */ jsx(BentoSection, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(IndustriesSection, {}),
    /* @__PURE__ */ jsx(DemoSection, {}),
    /* @__PURE__ */ jsx(MetricsSection, {}),
    /* @__PURE__ */ jsx(IntegrationsSection, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ChatWidget, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:pt-36", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })
        ] }),
        "Now booking pilots · Q3 2026"
      ] }),
      /* @__PURE__ */ jsx(motion.h1, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1]
      }, className: "mt-7 text-balance text-[clamp(3rem,7.2vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-gradient", children: "AI Voice Agents that answer, qualify & book leads 24/7." }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.2
      }, className: "mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "Deploy AI employees that answer calls, engage leads, schedule appointments, and update your systems — automatically." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.35
      }, className: "mt-10 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "#cta", className: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]", children: [
          "Book Demo",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#demos", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/[0.08]", children: [
          /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5" }),
          "Listen to Demo Call"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1,
        delay: 0.6
      }, className: "mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "SOC2 In Progress" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-white/10" }),
        /* @__PURE__ */ jsx("span", { children: "HIPAA Aware" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-white/10" }),
        /* @__PURE__ */ jsx("span", { children: "99.99% Uptime" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(HeroDashboard, {}) })
  ] }) });
}
export {
  Index as component
};
