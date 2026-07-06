import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, Menu, Phone, Mic, CheckCircle2, Calendar, Database, FileText, Clock, ClipboardCheck, CalendarClock, Workflow, MessageSquare, Check, PhoneCall, TrendingUp, ChevronRight, Sparkles, Cpu, UserCheck, ShieldCheck, Stethoscope, Home, ArrowRight, Shield, Lock, RefreshCw, Eye, Pause, Play, Volume2, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { l as logoImg } from "./logo-CA2-MQhC.js";
import { SiHubspot, SiSalesforce, SiGoogle, SiTwilio, SiGooglecalendar, SiZapier, SiMake, SiN8N, SiSlack } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import { l as logoImg$1 } from "./router-epz7qM_c.js";
import "@tanstack/react-query";
import "zod";
import "ai";
import "@ai-sdk/openai-compatible";
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Nexera Logo", className: "h-8 sm:h-9 w-auto object-contain" }) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/book-demo",
              className: "hidden sm:block rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-2.5 text-[13px] font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]",
              children: "Book Demo"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "sm:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white",
              "aria-label": "Toggle mobile menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
            }
          )
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "sm:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10",
            children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 space-y-4", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/book-demo",
                  onClick: () => setMobileMenuOpen(false),
                  className: "block w-full rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-center text-sm font-semibold text-black transition-all hover:scale-[1.02]",
                  children: "Book Demo"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-center text-xs text-muted-foreground", children: "AI Voice Agents · 24/7 Lead Qualification" })
            ] })
          }
        )
      ]
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
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -inset-6 sm:-inset-10 -z-10 rounded-[2rem] sm:rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(235,125,2,0.35),transparent_70%)] blur-2xl sm:blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "glass overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] sm:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/5 px-3 sm:px-5 py-2 sm:py-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-white/15" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-white/15" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-white/15" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Live Console" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-success", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Connected" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-5 gap-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 space-y-2 sm:space-y-3 border-b sm:border-b-0 sm:border-r border-white/5 p-3 sm:p-5", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.6), className: "flex items-center justify-between rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative flex h-7 sm:h-9 w-7 sm:w-9 items-center justify-center rounded-full bg-primary/15 text-primary", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-pulse-ring rounded-full border border-primary/40" }),
                    /* @__PURE__ */ jsx(Phone, { className: "h-3 sm:h-4 w-3 sm:w-4" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] sm:text-[11px] uppercase tracking-wider text-muted-foreground", children: "Incoming Call" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm font-medium", children: "+1 (415) 555 · 0192" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-[11px] text-muted-foreground", children: "00:42" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.8), className: "rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-1 sm:mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Mic, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5 text-primary" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[11px] uppercase tracking-wider text-muted-foreground", children: "AI Speaking" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex h-6 sm:h-8 items-end gap-[2px] sm:gap-[3px]", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "w-[2px] sm:w-[3px] origin-bottom rounded-full bg-gradient-to-t from-primary to-accent animate-wave",
                    style: { animationDelay: `${i % 8 * 0.08}s`, height: `${30 + i * 13 % 70}%` }
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1), className: "flex items-center justify-between rounded-lg sm:rounded-xl border border-success/15 bg-success/5 p-2 sm:p-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-2.5", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 sm:h-4 w-3 sm:w-4 text-success" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm", children: "Lead Qualified" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full bg-success/15 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-success", children: "High Intent" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.2), className: "flex items-center gap-2 sm:gap-2.5 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-3 sm:h-4 w-3 sm:w-4 text-primary" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm", children: "Appointment Booked" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-[11px] text-muted-foreground", children: "Thu, Jun 11 · 2:30 PM" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.4), className: "flex items-center gap-2 sm:gap-2.5 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
                /* @__PURE__ */ jsx(Database, { className: "h-3 sm:h-4 w-3 sm:w-4 text-accent" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm", children: "CRM Updated" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-[11px] text-muted-foreground", children: "HubSpot · Contact #4821" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] text-success", children: "SYNCED" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-3 p-3 sm:p-5", children: [
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.7), className: "mb-3 sm:mb-4 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Call Summary" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "rounded-md border border-white/10 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] text-muted-foreground", children: "Auto-Generated" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(0.9), className: "space-y-2 sm:space-y-3", children: [
                /* @__PURE__ */ jsx(Row, { label: "Caller", value: "Maria Hernandez" }),
                /* @__PURE__ */ jsx(Row, { label: "Intent", value: "New patient · Cardiology consult" }),
                /* @__PURE__ */ jsx(Row, { label: "Insurance", value: "Verified · Blue Cross PPO" }),
                /* @__PURE__ */ jsx(Row, { label: "Booked", value: "Dr. Patel · Jun 11, 2:30 PM", highlight: true }),
                /* @__PURE__ */ jsx(Row, { label: "Followup", value: "SMS confirmation sent" })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.3), className: "mt-4 sm:mt-5 rounded-lg sm:rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent p-3 sm:p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-1 sm:mb-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground", children: "Transcript snippet" }),
                /* @__PURE__ */ jsx("p", { className: "text-[12px] sm:text-[13px] leading-relaxed text-foreground/90", children: `"Of course, I can book that for you. I see Dr. Patel has an opening Thursday at 2:30. Should I send the confirmation to the number we're on?"` })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-5 grid grid-cols-3 gap-1.5 sm:gap-2", children: [
                { k: "Resolved", v: "94%" },
                { k: "Avg Handle", v: "1m 47s" },
                { k: "CSAT", v: "4.9" }
              ].map((m) => /* @__PURE__ */ jsxs(motion.div, { ...fadeUp(1.5), className: "rounded-md sm:rounded-lg border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground", children: m.k }),
                /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-sm sm:text-base font-semibold tracking-tight", children: m.v })
              ] }, m.k)) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Row({ label, value, highlight }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/5 pb-1.5 sm:pb-2 last:border-0", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] sm:text-[12px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("span", { className: `text-[12px] sm:text-[13px] ${highlight ? "text-success" : "text-foreground/90"}`, children: value })
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
  return /* @__PURE__ */ jsx("section", { ref, className: "relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ jsx("h2", { className: "text-balance text-[clamp(2rem,5.5vw,4.5rem)] sm:text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]", children: lines.map((line, i) => /* @__PURE__ */ jsx(
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
function SectionHead({ eyebrow, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 sm:mb-12 lg:mb-16 max-w-4xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
      " ",
      eyebrow
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-balance text-[clamp(2rem,5vw,3.5rem)] sm:text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient", children: title })
  ] });
}
function BentoSection() {
  return /* @__PURE__ */ jsxs("section", { id: "solutions", className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Platform", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Built for revenue teams",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "that can't afford to miss." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[200px] lg:auto-rows-[220px]", children: features.map((f, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
        className: `glass group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-colors hover:border-white/15 ${f.span ?? ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-16 sm:-right-20 -top-16 sm:-top-20 h-48 sm:h-56 w-48 sm:w-56 rounded-full bg-primary/10 blur-2xl sm:blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-between", children: [
            /* @__PURE__ */ jsx(f.icon, { className: "h-4 sm:h-5 w-4 sm:w-5 text-primary" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-semibold tracking-tight", children: f.title }),
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
  return /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Workflow", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "From ring to revenue,",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "in under two minutes." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute left-4 sm:left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-3", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-10%" },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: "glass relative flex items-center gap-3 sm:gap-4 lg:gap-5 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:ml-8 lg:ml-12",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[2.25rem] sm:-left-[2.75rem] lg:-left-[3.25rem] hidden h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full border border-primary/40 bg-background md:flex", children: /* @__PURE__ */ jsx("span", { className: "m-auto h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-primary" }) }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] sm:text-xs text-muted-foreground min-w-[1.5rem] sm:min-w-[2rem]", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "text-base sm:text-lg font-medium tracking-tight", children: s.t }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: s.d })
            ] }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground shrink-0" })
          ]
        },
        s.t
      )) })
    ] })
  ] });
}
function IndustriesSection() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Industries", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Two industries.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Purpose-built playbooks." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:gap-5 md:grid-cols-2", children: [
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
      className: "glass group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8",
      children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-24 sm:-top-32 right-0 h-56 sm:h-72 w-56 sm:w-72 rounded-full bg-primary/10 blur-2xl sm:blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5" }),
            " ",
            name
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 sm:mt-6 max-w-md text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight", children: headline }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 max-w-md text-sm leading-relaxed text-muted-foreground", children: desc }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: m.v }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground", children: m.k })
          ] }, m.k)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm text-primary opacity-80 transition-opacity group-hover:opacity-100", children: [
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
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative overflow-hidden py-16 sm:py-20 lg:py-24", children: [
    /* @__PURE__ */ jsx(motion.div, { style: { y }, "aria-hidden": true, className: "absolute inset-0 -z-10 grid-bg opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-white/5 px-0 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: i * 0.1 },
        className: "bg-background p-6 sm:p-8 lg:p-10 text-center sm:text-left",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-[clamp(2.5rem,6vw,4.5rem)] sm:text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.05em] text-gradient", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 sm:mt-4 text-sm text-muted-foreground", children: s.l })
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
      /* @__PURE__ */ jsxs(Link, { to: "/book-demo", className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]", children: [
        "Book Demo ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10", children: "Talk to Sales" })
    ] })
  ] }) });
}
function TrustSection() {
  const trustItems = [
    { icon: Clock, title: "24/7 Availability", desc: "Always on, never tired — handle calls around the clock" },
    { icon: ClipboardCheck, title: "Lead Qualification", desc: "Intelligent scoring to identify your best prospects" },
    { icon: CalendarClock, title: "Appointment Booking", desc: "Calendar-aware scheduling with conflict resolution" },
    { icon: Workflow, title: "CRM Integration", desc: "Seamless sync with your existing business systems" },
    { icon: MessageSquare, title: "Multilingual Support", desc: "Engage customers in their preferred language" }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "trust", className: "relative mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHead,
      {
        eyebrow: "Why Choose Us",
        title: /* @__PURE__ */ jsx(Fragment, { children: "Trusted By Growing Businesses" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: trustItems.map((item, idx) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.08 },
          className: "glass rounded-2xl p-6 text-center hover:border-white/15 transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-gradient-to-br from-[#ffd92c]/20 to-[#eb7d02]/20 p-3", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-[#ffd92c]" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold tracking-tight text-white", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.desc }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-[#eb7d02]" }) })
          ]
        },
        idx
      );
    }) })
  ] });
}
function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small practices getting started",
      monthlyPrice: 199,
      annualPrice: 179,
      // 10% discount
      features: [
        "400 call minutes per month",
        "Basic AI voice & chat agent",
        "Standard playbooks (Healthcare/Real Estate)",
        "HubSpot integration",
        "Email support",
        "Basic analytics dashboard",
        "SMS confirmations",
        "Calendar sync (Google Calendar)"
      ],
      limitations: [
        "Single phone number",
        "Standard voice quality",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Best for growing teams and practices",
      monthlyPrice: 499,
      annualPrice: 449,
      // 10% discount
      features: [
        "1,200 call minutes per month",
        "Advanced AI with natural voices",
        "Custom playbook builder",
        "Multi-CRM integration (HubSpot, Salesforce, GoHighLevel)",
        "Priority phone & email support",
        "Advanced analytics & reporting",
        "SMS, WhatsApp & web chat",
        "Calendar sync (Google, Outlook, Cal.com)",
        "Custom branding",
        "Lead scoring & qualification rules",
        "Appointment reminders",
        "Team notifications (Slack integration)"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited call minutes",
        "Premium AI with voice cloning",
        "Fully custom playbooks & workflows",
        "All CRM integrations + custom APIs",
        "Dedicated customer success manager",
        "White-label solution available",
        "Real-time analytics & custom reports",
        "Omnichannel (Voice, SMS, WhatsApp, Web, Social)",
        "Multiple phone numbers & locations",
        "Advanced lead routing",
        "Custom integrations & webhooks",
        "99.9% uptime SLA",
        "24/7 priority support",
        "On-premise deployment option"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "pricing", className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24", children: [
    /* @__PURE__ */ jsx(
      SectionHead,
      {
        eyebrow: "Pricing",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Simple, transparent pricing.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "No hidden fees. Cancel anytime." })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-full bg-white/5 p-1 border border-white/10", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsAnnual(false),
          className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${!isAnnual ? "bg-white text-black" : "text-muted-foreground hover:text-foreground"}`,
          children: "Monthly"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsAnnual(true),
          className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${isAnnual ? "bg-white text-black" : "text-muted-foreground hover:text-foreground"}`,
          children: [
            "Annual",
            /* @__PURE__ */ jsx("span", { className: "ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-black font-semibold", children: "Save 10%" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:gap-8 md:grid-cols-3", children: plans.map((plan, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.7, delay: index * 0.1 },
        className: `relative rounded-2xl lg:rounded-3xl p-6 lg:p-8 transition-all duration-300 ${plan.popular ? "glass border-primary/20 bg-gradient-to-b from-primary/5 to-transparent scale-105 lg:scale-110" : "glass hover:border-white/20"}`,
        children: [
          plan.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-4 py-1 text-xs font-semibold text-black", children: "Most Popular" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-foreground mb-2", children: plan.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: plan.description }),
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: plan.monthlyPrice ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-4xl lg:text-5xl font-bold text-gradient", children: [
                  "$",
                  isAnnual ? plan.annualPrice : plan.monthlyPrice
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "/month" })
              ] }),
              isAnnual && /* @__PURE__ */ jsxs("p", { className: "text-xs text-success mt-2", children: [
                "Save $",
                (plan.monthlyPrice - plan.annualPrice) * 12,
                "/year"
              ] })
            ] }) : /* @__PURE__ */ jsx("div", { className: "text-2xl font-semibold text-foreground", children: "Custom Pricing" }) }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/book-demo",
                className: `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95 w-full ${plan.popular ? "bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-black shadow-[0_4px_20px_rgba(235,125,2,0.25)]" : "border border-white/20 bg-white/5 text-foreground hover:bg-white/10"}`,
                children: [
                  plan.cta,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "What's Included:" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: plan.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-success mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/90", children: feature })
            ] }, idx)) }),
            plan.limitations.length > 0 && /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Limitations:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: plan.limitations.map((limitation, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "h-4 w-4 text-muted-foreground mt-0.5 shrink-0", children: "—" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: limitation })
              ] }, idx)) })
            ] })
          ] })
        ]
      },
      plan.name
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-foreground mb-4", children: "All plans include:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsx("span", { children: "SOC 2 Compliance" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsx("span", { children: "HIPAA Ready" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsx("span", { children: "99.99% Uptime" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsx("span", { children: "Real-time Analytics" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-2xl font-semibold text-center text-foreground mb-8", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 max-w-5xl mx-auto", children: [
        {
          q: "What happens if I exceed my call minutes?",
          a: "Overage is charged at $0.50 per additional minute. We'll notify you when you reach 80% of your limit."
        },
        {
          q: "Can I switch plans anytime?",
          a: "Yes! Upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
        },
        {
          q: "Is there a setup fee?",
          a: "No setup fees ever. We'll help you get configured and running within 15 minutes at no extra cost."
        },
        {
          q: "What integrations are included?",
          a: "All plans include standard integrations. Professional+ gets priority integration support and custom APIs."
        }
      ].map((faq, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: idx * 0.1 },
          className: "glass rounded-xl p-6",
          children: [
            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-foreground mb-3", children: faq.q }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: faq.a })
          ]
        },
        idx
      )) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Nexera Logo", loading: "lazy", className: "h-9 w-auto object-contain" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground", children: "AI voice and chat agents that answer, qualify, and book — 24/7." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg", children: "📧" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:support@xnexera.com", className: "font-medium", children: "support@xnexera.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg", children: "📞" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+18005550199", className: "font-medium", children: "+1 (800) 555-0199" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Product", items: ["Voice Agent", "Chat Agent", "Integrations", "Pricing"] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Company", items: [] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Follow Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.linkedin.com/company/xnexera",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sm text-foreground/80 transition-colors hover:text-foreground flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { children: "in" }),
                " LinkedIn"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.facebook.com/XNexEra",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sm text-foreground/80 transition-colors hover:text-foreground flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { children: "f" }),
                " Facebook"
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " XNEXERA. All Rights Reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/privacy", className: "hover:text-foreground", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-foreground", children: "Terms & Conditions" }),
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
function RoiCalculator() {
  const [calls, setCalls] = useState(1e3);
  const [leadValue, setLeadValue] = useState(250);
  const missedCalls = Math.round(calls * 0.25);
  const recoveredCalls = Math.round(missedCalls * 0.85);
  const closedDeals = Math.round(recoveredCalls * 0.15);
  const revenueLost = Math.round(missedCalls * 0.15 * leadValue);
  const revenueRecovered = Math.round(closedDeals * leadValue);
  const humanCost = 3500;
  const nexeraCost = Math.round(calls * 0.5);
  const monthlySavings = humanCost + revenueRecovered - nexeraCost;
  return /* @__PURE__ */ jsxs("section", { id: "roi-calculator", className: "relative mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "ROI Calculator", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Calculate what missed calls",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "are costing your business." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 lg:col-span-5 flex flex-col justify-center space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-foreground", children: "Monthly Inbound Calls" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-[#ffd92c]", children: calls.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "100",
              max: "5000",
              step: "100",
              value: calls,
              onChange: (e) => setCalls(Number(e.target.value)),
              className: "w-full accent-[#eb7d02] bg-white/10 h-1 rounded-lg cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "100" }),
            /* @__PURE__ */ jsx("span", { children: "5,000+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-foreground", children: "Average Lead Value" }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-[#ffd92c]", children: [
              "$",
              leadValue
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "20",
              max: "2000",
              step: "10",
              value: leadValue,
              onChange: (e) => setLeadValue(Number(e.target.value)),
              className: "w-full accent-[#eb7d02] bg-white/10 h-1 rounded-lg cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "$20" }),
            /* @__PURE__ */ jsx("span", { children: "$2,000+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl border border-[#eb7d02]/20 bg-[#eb7d02]/5 text-xs text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-white block mb-1", children: "Industry Statistics:" }),
          "On average, ",
          /* @__PURE__ */ jsx("strong", { children: "25% of inbound business calls" }),
          " go unanswered. 85% of those callers will not call back and instead contact a competitor."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 border border-red-500/10 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Unanswered Calls / Mo" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold mt-2 text-red-400", children: missedCalls })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Est. Lost Revenue / Mo" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xl font-semibold text-red-500", children: [
              "$",
              revenueLost.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 border border-[#eb7d02]/30 bg-gradient-to-b from-[#eb7d02]/10 to-transparent flex flex-col justify-between relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#eb7d02]/10 blur-2xl" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Calls Answered by Nexera" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold mt-2 text-[#ffd92c]", children: "100%" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Recovered Revenue / Mo" }),
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-gradient", children: [
              "$",
              revenueRecovered.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 sm:col-span-2 flex flex-col justify-between border border-[#ffd92c]/20 bg-gradient-to-r from-black via-black to-[#ffd92c]/5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Operational Efficiency" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold mt-1", children: "Nexera vs. Full-Time Receptionist" })
            ] }),
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-[#ffd92c]" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground block", children: "Human Receptionist Cost" }),
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-red-400", children: "$3,500/mo" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground block", children: "Nexera Agent Cost" }),
              /* @__PURE__ */ jsxs("span", { className: "text-base font-semibold text-green-400", children: [
                "$",
                nexeraCost,
                "/mo"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Total Monthly Value Generated" }),
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-gradient", children: [
                "$",
                monthlySavings.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/book-demo", className: "rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-2.5 text-xs font-bold text-black transition-transform hover:scale-[1.03]", children: "Claim Your ROI" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ComparisonSection() {
  const tableData = [
    { feature: "Speed to Answer", nexera: "Instant (<0.8s)", humans: "15-45 seconds", bots: "Text-only / Delayed" },
    { feature: "Cost per Call/Minute", nexera: "~$0.15 - $0.50", humans: "$2.50 - $4.50+", bots: "Low, but lacks voice" },
    { feature: "Availability", nexera: "24/7/365 (Zero hold)", humans: "Business Hours only", bots: "24/7 (Text-only)" },
    { feature: "Booking & Qualification", nexera: "Adaptive & Custom Playbooks", humans: "Varies by training", bots: "Rigid button-based flows" },
    { feature: "CRM & Live Sync", nexera: "Real-time Bi-directional", humans: "Manual entry / Post-call", bots: "Limited API integrations" },
    { feature: "Simultaneous Lines", nexera: "Unlimited / Infinite scale", humans: "1 line per agent", bots: "High, but chat only" }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "comparison", className: "relative mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "The Advantage", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "How Nexera outmatches",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "traditional options." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[600px] border-collapse text-left", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsx("th", { className: "p-6 text-sm font-semibold text-muted-foreground", children: "Features & Capabilities" }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-sm font-bold text-[#ffd92c] border-l border-white/5", children: /* @__PURE__ */ jsx("span", { className: "inline-block bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] bg-clip-text text-transparent font-black", children: "Nexera AI Agents" }) }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-sm font-semibold text-muted-foreground border-l border-white/5", children: "Traditional Call Center" }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-sm font-semibold text-muted-foreground border-l border-white/5", children: "Standard Chatbots" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: tableData.map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "transition-colors hover:bg-white/[0.01]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-6 text-sm font-medium text-foreground", children: row.feature }),
        /* @__PURE__ */ jsx("td", { className: "p-6 text-sm font-semibold text-white border-l border-white/5 bg-gradient-to-r from-[#eb7d02]/5 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#ffd92c] shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: row.nexera })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-6 text-sm text-muted-foreground border-l border-white/5", children: row.humans }),
        /* @__PURE__ */ jsx("td", { className: "p-6 text-sm text-muted-foreground border-l border-white/5", children: row.bots })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center text-xs text-muted-foreground", children: "*Based on average operational data from healthcare and real estate clients in 2026." })
  ] });
}
function DeploymentWorkflow() {
  const stepsList = [
    {
      day: "Day 01",
      title: "Playbook Design",
      desc: "We analyze your calls, FAQs, and custom booking logic to construct your tailored agent playbook.",
      icon: Sparkles,
      color: "#ffd92c"
    },
    {
      day: "Day 02",
      title: "Voice & Tone Training",
      desc: "Select a hyper-realistic native voice and fine-tune latency so interactions feel human and natural.",
      icon: Cpu,
      color: "#eb7d02"
    },
    {
      day: "Day 03",
      title: "CRM & API Integration",
      desc: "Connect to your calendar, CRM (HubSpot, Salesforce), and phone systems (Twilio, VoIP).",
      icon: UserCheck,
      color: "#ffd92c"
    },
    {
      day: "Day 04-05",
      title: "Pilot & Live Launch",
      desc: "Run simulations, test edge cases, and launch live to handle overflow or 100% of calls.",
      icon: ShieldCheck,
      color: "#eb7d02"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "process", className: "relative mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Deployment Process", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "How we build & deploy",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "your custom AI Agent." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: stepsList.map((step, idx) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.1 },
          className: "glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-[#eb7d02]/30 hover:shadow-[0_4px_30px_rgba(235,125,2,0.1)]",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute top-0 left-0 h-[3px] w-full transition-all duration-300 group-hover:scale-x-110",
                style: { background: `linear-gradient(90deg, ${step.color}, #eb7d02)` }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-bold tracking-widest text-[#ffd92c]", children: step.day }),
              /* @__PURE__ */ jsx("div", { className: "rounded-full bg-white/[0.03] p-2 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-semibold tracking-tight text-white", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: step.desc })
          ]
        },
        idx
      );
    }) })
  ] });
}
function SecuritySection() {
  const securityItems = [
    {
      title: "HIPAA & PII Safeguards",
      desc: "Fully HIPAA aware. Every voice recording and transcript is encrypted in transit and at rest with automated PII redaction.",
      icon: Shield
    },
    {
      title: "Jailbreak Prevention",
      desc: "Robust input/output guardrails ensure the AI agent sticks strictly to your playbooks, preventing prompt injection.",
      icon: Lock
    },
    {
      title: "Redundant VoIP Routing",
      desc: "Built on globally redundant telecom networks with automatic failovers to guarantee 99.99% call connection uptime.",
      icon: RefreshCw
    },
    {
      title: "Audit Logs & Monitoring",
      desc: "Full audit logs, live call sentiment analysis, and continuous monitoring via SOC2 Type II compliance standards.",
      icon: Eye
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "security", className: "relative mx-auto max-w-7xl px-6 py-20 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Security", title: /* @__PURE__ */ jsx(Fragment, { children: "Enterprise Trust & Compliance" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed -mt-6", children: "We understand that AI handling client communications requires absolute security. Nexera is built from the ground up to protect user data, adhere to strict regulatory compliance, and prevent prompt manipulation." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white", children: "HIPAA AWARE" }),
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white", children: "SOC2 TYPE II (Q3 2026)" }),
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-white", children: "GDPR COMPLIANT" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid gap-6 sm:grid-cols-2", children: securityItems.map((item, idx) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/[0.02] p-3 w-fit text-[#ffd92c]", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-semibold text-white", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: item.desc })
      ] }, idx);
    }) })
  ] }) });
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
  return /* @__PURE__ */ jsxs("section", { id: "demos", className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:mb-12 lg:mb-14 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
        " Live Demos"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-balance text-[clamp(2rem,5vw,3.5rem)] sm:text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient", children: [
        "Hear it answer a real call.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Two industries. Zero hold time." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:gap-5 md:grid-cols-2", children: demos.map((d, i) => /* @__PURE__ */ jsx(DemoPlayer, { demo: d, delay: i * 0.1 }, d.id)) })
  ] });
}
function DemoPlayer({ demo, delay }) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const raf = useRef(null);
  const last = useRef(0);
  const scrollRef = useRef(null);
  const lastSpokenIdx = useRef(-1);
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
  useEffect(() => {
    if (!playing) {
      lastSpokenIdx.current = -1;
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return;
    }
    if (activeIdx >= 0 && activeIdx !== lastSpokenIdx.current) {
      lastSpokenIdx.current = activeIdx;
      const currentLine = demo.transcript[activeIdx];
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentLine.text);
        const voices = window.speechSynthesis.getVoices();
        if (currentLine.who === "AI") {
          const voice = voices.find((v) => {
            const name = v.name.toLowerCase();
            return name.includes("female") || name.includes("zira") || name.includes("samantha") || name.includes("hazel") || name.includes("google uk english female") || name.includes("natural");
          });
          if (voice) utterance.voice = voice;
          utterance.pitch = 1.05;
          utterance.rate = 0.95;
        } else {
          const voice = voices.find((v) => {
            const name = v.name.toLowerCase();
            return name.includes("male") || name.includes("david") || name.includes("mark") || name.includes("george") || name.includes("google us english male");
          });
          if (voice) utterance.voice = voice;
          utterance.pitch = 0.9;
          utterance.rate = 1.05;
        }
        window.speechSynthesis.speak(utterance);
      }
    }
  }, [activeIdx, playing, demo.transcript]);
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
  const progress = Math.min(1, t / demo.duration);
  const Icon = demo.Icon;
  const toggle = () => {
    if (t >= demo.duration) {
      setT(0);
      lastSpokenIdx.current = -1;
    }
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
      className: "glass group relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8",
      children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-16 sm:-right-20 lg:-right-24 -top-16 sm:-top-20 lg:-top-24 h-56 sm:h-64 lg:h-72 w-56 sm:w-64 lg:w-72 rounded-full bg-primary/10 blur-2xl sm:blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Icon, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5" }),
              " ",
              demo.industry
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold tracking-tight", children: demo.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: demo.subtitle })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: toggle,
              "aria-label": playing ? "Pause demo" : "Play demo",
              className: "relative flex h-12 sm:h-14 w-12 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95 cursor-pointer",
              children: [
                playing && /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute inset-0 animate-pulse-ring rounded-full border border-white/40" }),
                playing ? /* @__PURE__ */ jsx(Pause, { className: "h-4 sm:h-5 w-4 sm:w-5" }) : /* @__PURE__ */ jsx(Play, { className: "h-4 sm:h-5 w-4 sm:w-5 translate-x-[1px]" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 flex h-10 sm:h-14 items-end gap-[2px] sm:gap-[3px]", children: Array.from({ length: 40 }).map((_, i) => {
          const filled = i / 40 < progress;
          const h = 18 + i * 37 % 100 * 0.42;
          const isNearActive = playing && filled && Math.abs(i - progress * 40) < 6;
          return /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-[2px] sm:w-[3px] rounded-full",
              style: {
                height: `${h}%`,
                background: filled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.15)",
                transform: isNearActive ? "scaleY(1.3)" : "scaleY(1)",
                transition: "background 200ms, transform 180ms",
                animation: isNearActive ? "wave 0.8s ease-in-out infinite" : "none",
                animationDelay: `${i * 0.05 % 0.8}s`,
                transformOrigin: "bottom"
              }
            },
            i
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 sm:mt-3 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: fmt(t) }),
          /* @__PURE__ */ jsx("div", { className: "mx-2 sm:mx-3 h-px flex-1 bg-white/5", children: /* @__PURE__ */ jsx("div", { className: "h-px bg-white/60", style: { width: `${progress * 100}%` } }) }),
          /* @__PURE__ */ jsx("span", { children: fmt(demo.duration) })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: scrollRef,
            className: "mt-4 sm:mt-6 h-36 sm:h-44 overflow-hidden rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4 [mask-image:linear-gradient(180deg,transparent,#000_12%,#000_88%,transparent)]",
            children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: visible.length === 0 ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: "flex h-full items-center justify-center gap-2 text-[11px] sm:text-xs text-muted-foreground text-center px-2",
                children: [
                  /* @__PURE__ */ jsx(Volume2, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5" }),
                  " Press play to hear the transcript stream in real time."
                ]
              },
              "idle"
            ) : /* @__PURE__ */ jsx("ul", { className: "space-y-2 sm:space-y-3", children: visible.map((l, i) => /* @__PURE__ */ jsxs(
              motion.li,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: i === activeIdx ? 1 : 0.55, y: 0 },
                transition: { duration: 0.4 },
                className: "flex gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mt-[1px] sm:mt-[2px] inline-flex h-4 sm:h-5 shrink-0 items-center rounded-md px-1 sm:px-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider ${l.who === "AI" ? "bg-white text-black animate-pulse" : "border border-white/10 bg-white/[0.04] text-muted-foreground"}`,
                      children: l.who
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground/90 flex-1 min-w-0", children: l.text })
                ]
              },
              i
            )) }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2", children: demo.tags.map((tg) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-muted-foreground",
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
  text: "Hey, I'm **Ava** — the live AI agent that powers Nexera. Ask me anything, or pick a demo below and I'll role-play a real call."
};
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open, messages.length]);
  const submit = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    const normText = trimmed.toLowerCase().replace(/[?,.!]/g, "").trim();
    let responseText = "";
    const isGreeting = /^(hi|hello|hey|hlo|yo|good morning|good afternoon|good evening)(\s|$)/i.test(trimmed);
    const isWhatQuestion = /what (do you do|does nexera|is nexera|are you|is this)/i.test(trimmed);
    const isHowQuestion = /how (does|do|can)/i.test(trimmed);
    const isWhyQuestion = /why (should|would|do)/i.test(trimmed);
    const isWhenQuestion = /when (can|will|do)/i.test(trimmed);
    const isWhereQuestion = /where (is|are|can)/i.test(trimmed);
    const isAboutPricing = /(pricing|price|cost|fee|expensive|cheap|budget)/i.test(trimmed);
    const isAboutFeatures = /(feature|capability|function|tool|benefit)/i.test(trimmed);
    const isAboutIntegration = /(integrate|integration|connect|api|crm|calendar)/i.test(trimmed);
    const isAboutDemo = /(demo|demonstration|show me|example|try)/i.test(trimmed);
    const isAboutHealthcare = /(healthcare|medical|doctor|patient|hospital|clinic)/i.test(trimmed);
    const isAboutRealEstate = /(real estate|property|house|home|agent|listing)/i.test(trimmed);
    const isAboutSupport = /(help|support|problem|issue|trouble|question)/i.test(trimmed);
    const isAboutSecurity = /(secure|security|safe|privacy|data|protection)/i.test(trimmed);
    const isAboutAccuracy = /(accurate|accuracy|reliable|quality|performance)/i.test(trimmed);
    const historyText = [...messages, userMsg].map((m) => m.text).join(" ").toLowerCase();
    const inHealthcareDemo = historyText.includes("nexera medical");
    const inRealEstateDemo = historyText.includes("nexera realty") || historyText.includes("maple avenue");
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
        if (normText.includes("new") || normText.includes("appointment") || normText.includes("book")) {
          responseText = "Perfect! I can help schedule that appointment. What type of medical service do you need?\n\n**Available specialties:**\n• General Medicine\n• Cardiology\n• Pediatrics\n• Dermatology\n• Orthopedics\n\nWhich specialty would you like to see?";
        } else if (/(cardio|heart|general|pediatric|dermatology|orthopedic)/i.test(normText)) {
          const specialty = normText.includes("cardio") ? "Cardiology" : normText.includes("general") ? "General Medicine" : normText.includes("pediatric") ? "Pediatrics" : normText.includes("dermatology") ? "Dermatology" : "Orthopedics";
          responseText = `Great choice! For **${specialty}**, I have these available slots:

📅 **This Week:**
• Thursday, Jan 11 at 2:30 PM
• Friday, Jan 12 at 10:00 AM

📅 **Next Week:**
• Monday, Jan 15 at 9:15 AM
• Wednesday, Jan 17 at 3:45 PM

Which time works best for you?`;
        } else if (/(thursday|friday|monday|wednesday|2:30|10:00|9:15|3:45)/i.test(normText)) {
          responseText = "Excellent! I've booked your appointment.\n\n✅ **Appointment Confirmed**\n• **Date:** Thursday, Jan 11 at 2:30 PM\n• **Doctor:** Dr. Sarah Patel (Cardiology)\n• **Location:** Nexera Medical Center\n\n📱 **Next Steps:**\n• Confirmation SMS sent to your phone\n• Calendar invite sent to your email\n• Patient intake form link included\n• Parking pass attached\n\n💊 **Preparation:**\n• Bring current medications list\n• Arrive 15 minutes early\n• Bring insurance card\n\nIs there anything else I can help you with today?";
        } else {
          responseText = "I'm here to help with your appointment booking! You can tell me:\n• What type of doctor you need\n• Your preferred date/time\n• Any special requirements\n\nWhat would you like to do next?";
        }
      } else {
        responseText = 'Sure! Let me show you a **Healthcare intake demo**. 📞\n\n*Phone rings...*\n\n---\n\n**"Good morning! Thank you for calling Nexera Medical Center. This is Ava, your virtual assistant. I can help you schedule appointments, check availability, and answer questions about our services."**\n\n**"Are you calling to schedule a new appointment, modify an existing one, or do you have a general question?"**\n\n*Try responding like a real patient would!*';
      }
    } else if (isAboutDemo && (isAboutRealEstate || inRealEstateDemo)) {
      if (inRealEstateDemo) {
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
        responseText = `Absolutely! Here's a **Real Estate inquiry demo**. 📞

*Phone rings...*

---

**"Hello! Thank you for calling Nexera Realty. This is Ava, your virtual assistant. I see you're interested in our listing at 452 Maple Avenue."**

**"This is a beautiful 4-bedroom Colonial with a recently renovated kitchen, listed at $625,000. Are you looking to schedule a private showing, or do you have questions about the property?"**

*Try responding as a potential buyer!*`;
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
      responseText = "Great question! I want to give you the most helpful answer. \n\n**I can help you with:**\n• **Product demo** - See Nexera in action\n• **Pricing info** - Plans and ROI calculator  \n• **How it works** - Technical details\n• **Integration** - CRM and calendar setup\n• **Results** - Success stories and metrics\n\n**Quick demos:**\n• Type **healthcare** for medical practice demo\n• Type **real estate** for property agent demo\n• Type **live demo** to book a screen share\n\nWhat specific aspect of Nexera interests you most?";
    }
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));
    const assistantMsgId = Date.now().toString() + "-assistant";
    setMessages((prev) => [...prev, { id: assistantMsgId, role: "assistant", text: "" }]);
    const words = responseText.split(" ");
    let currentText = "";
    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + (i === words.length - 1 ? "" : " ");
      setMessages(
        (prev) => prev.map((m) => m.id === assistantMsgId ? { ...m, text: currentText } : m)
      );
      await new Promise((resolve) => setTimeout(resolve, 40 + Math.random() * 30));
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => setOpen((o) => !o),
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6, duration: 0.6 },
        className: "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60] flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_15px_40px_-10px_rgba(235,125,2,0.4)] transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer",
        "aria-label": open ? "Close chat" : "Open chat with Ava",
        children: open ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(X, { className: "h-3.5 sm:h-4 w-3.5 sm:w-4" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Close" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 sm:h-2 w-1.5 sm:w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-70" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-black" })
          ] }),
          /* @__PURE__ */ jsx(MessageSquare, { className: "h-3.5 sm:h-4 w-3.5 sm:w-4" }),
          /* @__PURE__ */ jsx("span", { className: "hidden xs:inline", children: "Chat with Ava" })
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
        className: "fixed bottom-16 sm:bottom-20 lg:bottom-24 right-2 sm:right-4 lg:right-6 z-[60] flex h-[70vh] sm:h-[600px] max-h-[80vh] w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-2 sm:gap-3 border-b border-white/5 px-3 sm:px-5 py-3 sm:py-4", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 -z-0 h-24 sm:h-32 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(235,125,2,0.08),transparent)]" }),
            /* @__PURE__ */ jsx("div", { className: "relative flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-black border border-white/10 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: logoImg$1, alt: "Nexera Logo", className: "h-6 sm:h-8 w-6 sm:w-8 object-contain" }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold tracking-tight text-white", children: "Ava · AI Agent" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-green-500" }),
                " Online · responds in <1s"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { ref: scrollRef, className: "flex-1 space-y-3 sm:space-y-4 overflow-y-auto px-3 sm:px-5 py-3 sm:py-5", children: [
            messages.map((m) => {
              const isUser = m.role === "user";
              return /* @__PURE__ */ jsx("div", { className: `flex ${isUser ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: isUser ? "max-w-[85%] rounded-2xl rounded-br-md bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-black" : "max-w-[90%] text-xs sm:text-sm leading-relaxed text-foreground/95",
                  children: isUser ? m.text : /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-sm max-w-none prose-p:my-1 sm:prose-p:my-1.5 prose-ul:my-1 sm:prose-ul:my-1.5 prose-strong:text-white", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: m.text }) })
                }
              ) }, m.id);
            }),
            isLoading && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-1.5 px-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" }),
              /* @__PURE__ */ jsx("span", { className: "h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" }),
              /* @__PURE__ */ jsx("span", { className: "h-1 sm:h-1.5 w-1 sm:w-1.5 animate-bounce rounded-full bg-white/60" })
            ] }),
            messages.length <= 1 && !isLoading && /* @__PURE__ */ jsx("div", { className: "space-y-1.5 sm:space-y-2 pt-2", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => submit(s),
                className: "w-full rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.02] px-3 sm:px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-foreground/90 transition-colors hover:border-white/20 hover:bg-white/[0.05] cursor-pointer",
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
              className: "border-t border-white/5 bg-white/[0.02] p-2 sm:p-3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-black px-2.5 sm:px-3 py-1.5 sm:py-2 focus-within:border-white/25", children: [
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
                      className: "max-h-24 sm:max-h-32 flex-1 resize-none bg-transparent py-1 sm:py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",
                      disabled: isLoading
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isLoading || !input.trim(),
                      "aria-label": "Send",
                      className: "flex h-7 sm:h-8 w-7 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer",
                      children: /* @__PURE__ */ jsx(Send, { className: "h-3 sm:h-3.5 w-3 sm:w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-1.5 sm:mt-2 px-0.5 sm:px-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Live AI · same engine powers your calls" })
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
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(235,125,2,0.06),transparent)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,217,44,0.03),transparent)]" })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustSection, {}),
    /* @__PURE__ */ jsx(StatementSection, {}),
    /* @__PURE__ */ jsx(BentoSection, {}),
    /* @__PURE__ */ jsx(RoiCalculator, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(DeploymentWorkflow, {}),
    /* @__PURE__ */ jsx(IndustriesSection, {}),
    /* @__PURE__ */ jsx(DemoSection, {}),
    /* @__PURE__ */ jsx(PricingSection, {}),
    /* @__PURE__ */ jsx(ComparisonSection, {}),
    /* @__PURE__ */ jsx(SecuritySection, {}),
    /* @__PURE__ */ jsx(MetricsSection, {}),
    /* @__PURE__ */ jsx(IntegrationsSection, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ChatWidget, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-28 md:pt-36", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr]", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
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
      }, className: "mt-5 sm:mt-7 text-balance text-[2.5rem] sm:text-[clamp(3rem,7.2vw,5.75rem)] font-semibold leading-[0.95] sm:leading-[0.98] tracking-[-0.045em] text-gradient", children: "AI Voice Agents that answer, qualify & book leads 24/7." }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.2
      }, className: "mt-5 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground", children: "Deploy AI employees that answer calls, engage leads, schedule appointments, and update your systems — automatically." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.35
      }, className: "mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/book-demo", className: "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]", children: [
          "Book Demo",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#demos", className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/[0.08]", children: [
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
      }, className: "mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("span", { children: "SOC2 In Progress" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:block h-3 w-px bg-white/10" }),
          /* @__PURE__ */ jsx("span", { children: "HIPAA Aware" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("span", { className: "hidden sm:block h-3 w-px bg-white/10" }),
          /* @__PURE__ */ jsx("span", { children: "99.99% Uptime" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative order-1 lg:order-2", children: /* @__PURE__ */ jsx(HeroDashboard, {}) })
  ] }) });
}
export {
  Index as component
};
