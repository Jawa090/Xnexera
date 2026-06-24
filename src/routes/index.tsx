import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { HeroDashboard } from "@/components/site/Dashboard";
import {
  StatementSection, BentoSection, HowItWorks, IndustriesSection,
  MetricsSection, IntegrationsSection, FinalCTA, Footer,
  RoiCalculator, ComparisonSection, DeploymentWorkflow, SecuritySection, TrustSection,
} from "@/components/site/Sections";
import { DemoSection } from "@/components/site/DemoSection";
import { ChatWidget } from "@/components/site/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexera — AI Voice Agents That Answer, Qualify & Book 24/7" },
      { name: "description", content: "Deploy AI voice and chat agents for Healthcare and Real Estate. Never miss another lead." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.25]" />
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(235,125,2,0.06),transparent)]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,217,44,0.03),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <TrustSection />
      <StatementSection />
      <BentoSection />
      <RoiCalculator />
      <HowItWorks />
      <DeploymentWorkflow />
      <IndustriesSection />
      <DemoSection />
      <ComparisonSection />
      <SecuritySection />
      <MetricsSection />
      <IntegrationsSection />
      <FinalCTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:pt-36">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Now booking pilots · Q3 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-balance text-[clamp(3rem,7.2vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-gradient"
          >
            AI Voice Agents that answer, qualify &amp; book leads 24/7.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Deploy AI employees that answer calls, engage leads, schedule appointments, and update your systems — automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/book-demo" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]">
              Book Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href="#demos" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/[0.08]">
              <Play className="h-3.5 w-3.5" />
              Listen to Demo Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>SOC2 In Progress</span>
            <span className="h-3 w-px bg-white/10" />
            <span>HIPAA Aware</span>
            <span className="h-3 w-px bg-white/10" />
            <span>99.99% Uptime</span>
          </motion.div>
        </div>

        <div className="relative">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
