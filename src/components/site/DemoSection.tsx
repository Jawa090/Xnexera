import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Stethoscope, Home, Volume2 } from "lucide-react";

type Line = { who: "AI" | "Caller"; text: string; at: number };

type Demo = {
  id: string;
  industry: string;
  Icon: typeof Stethoscope;
  title: string;
  subtitle: string;
  duration: number; // seconds
  tags: string[];
  transcript: Line[];
};

const demos: Demo[] = [
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
      { who: "Caller", text: "Yes, perfect. Thank you.", at: 40 },
    ],
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
      { who: "AI", text: "Booked. You'll get a confirmation text in a moment. Anything else I can pull up?", at: 33 },
    ],
  },
];

export function DemoSection() {
  return (
    <section id="demos" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-primary" /> Live Demos
        </div>
        <h2 className="text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-gradient">
          Hear it answer a real call.
          <br />
          <span className="text-muted-foreground">Two industries. Zero hold time.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {demos.map((d, i) => (
          <DemoPlayer key={d.id} demo={d} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function DemoPlayer({ demo, delay }: { demo: Demo; delay: number }) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current);
      return;
    }
    last.current = performance.now();
    const tick = (now: number) => {
      const dt = (now - last.current) / 1000;
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

  // Visible transcript: lines whose `at` <= t
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

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative overflow-hidden rounded-3xl p-6 md:p-8"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Icon className="h-3.5 w-3.5" /> {demo.industry}
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{demo.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{demo.subtitle}</p>
        </div>
        <button
          onClick={toggle}
          aria-label={playing ? "Pause demo" : "Play demo"}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95"
        >
          {playing && (
            <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-white/40" />
          )}
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
        </button>
      </div>

      {/* Waveform */}
      <div className="mt-6 flex h-14 items-end gap-[3px]">
        {Array.from({ length: 56 }).map((_, i) => {
          const filled = i / 56 < progress;
          // pseudo-random heights based on index
          const h = 18 + ((i * 37) % 100) * 0.42;
          return (
            <span
              key={i}
              className="w-[3px] rounded-full"
              style={{
                height: `${h}%`,
                background: filled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.15)",
                transform: playing && filled && i > (progress * 56) - 6 ? "scaleY(1.15)" : "scaleY(1)",
                transition: "background 200ms, transform 180ms",
              }}
            />
          );
        })}
      </div>

      {/* Progress + time */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span>{fmt(t)}</span>
        <div className="mx-3 h-px flex-1 bg-white/5">
          <div className="h-px bg-white/60" style={{ width: `${progress * 100}%` }} />
        </div>
        <span>{fmt(demo.duration)}</span>
      </div>

      {/* Transcript */}
      <div
        ref={scrollRef}
        className="mt-6 h-44 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 [mask-image:linear-gradient(180deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <AnimatePresence initial={false}>
          {visible.length === 0 ? (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-full items-center justify-center gap-2 text-xs text-muted-foreground"
            >
              <Volume2 className="h-3.5 w-3.5" /> Press play to hear the transcript stream in real time.
            </motion.div>
          ) : (
            <ul className="space-y-3">
              {visible.map((l, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: i === activeIdx ? 1 : 0.55, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3 text-sm leading-relaxed"
                >
                  <span
                    className={`mt-[2px] inline-flex h-5 shrink-0 items-center rounded-md px-1.5 font-mono text-[10px] uppercase tracking-wider ${
                      l.who === "AI"
                        ? "bg-white text-black"
                        : "border border-white/10 bg-white/[0.04] text-muted-foreground"
                    }`}
                  >
                    {l.who}
                  </span>
                  <span className="text-foreground/90">{l.text}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>

      {/* Tags / outcomes */}
      <div className="mt-5 flex flex-wrap gap-2">
        {demo.tags.map((tg) => (
          <span
            key={tg}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-success" /> {tg}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
