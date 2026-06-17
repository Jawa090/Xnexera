import { motion } from "framer-motion";
import { Phone, Mic, CheckCircle2, Calendar, Database, FileText } from "lucide-react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      className="relative w-full"
    >
      {/* glow */}
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(235,125,2,0.35),transparent_70%)] blur-3xl" />

      <div className="glass overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Live Console</div>
          <div className="flex items-center gap-1.5 text-[11px] text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Connected
          </div>
        </div>

        <div className="grid grid-cols-5 gap-0">
          {/* Sidebar / status */}
          <div className="col-span-2 space-y-3 border-r border-white/5 p-5">
            <motion.div {...fadeUp(0.6)} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary/40" />
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Incoming Call</div>
                  <div className="text-sm font-medium">+1 (415) 555 · 0192</div>
                </div>
              </div>
              <div className="text-[11px] text-muted-foreground">00:42</div>
            </motion.div>

            <motion.div {...fadeUp(0.8)} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="mb-2 flex items-center gap-2">
                <Mic className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">AI Speaking</span>
              </div>
              <div className="flex h-8 items-end gap-[3px]">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[3px] origin-bottom rounded-full bg-gradient-to-t from-primary to-accent animate-wave"
                    style={{ animationDelay: `${(i % 8) * 0.08}s`, height: `${30 + ((i * 13) % 70)}%` }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(1.0)} className="flex items-center justify-between rounded-xl border border-success/15 bg-success/5 p-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-sm">Lead Qualified</span>
              </div>
              <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-success">High Intent</span>
            </motion.div>

            <motion.div {...fadeUp(1.2)} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <Calendar className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <div className="text-sm">Appointment Booked</div>
                <div className="text-[11px] text-muted-foreground">Thu, Jun 11 · 2:30 PM</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(1.4)} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <Database className="h-4 w-4 text-accent" />
              <div className="flex-1">
                <div className="text-sm">CRM Updated</div>
                <div className="text-[11px] text-muted-foreground">HubSpot · Contact #4821</div>
              </div>
              <span className="text-[10px] text-success">SYNCED</span>
            </motion.div>
          </div>

          {/* Call summary */}
          <div className="col-span-3 p-5">
            <motion.div {...fadeUp(0.7)} className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Call Summary</span>
              </div>
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-muted-foreground">Auto-Generated</span>
            </motion.div>

            <motion.div {...fadeUp(0.9)} className="space-y-3">
              <Row label="Caller" value="Maria Hernandez" />
              <Row label="Intent" value="New patient · Cardiology consult" />
              <Row label="Insurance" value="Verified · Blue Cross PPO" />
              <Row label="Booked" value="Dr. Patel · Jun 11, 2:30 PM" highlight />
              <Row label="Followup" value="SMS confirmation sent" />
            </motion.div>

            <motion.div {...fadeUp(1.3)} className="mt-5 rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent p-4">
              <div className="mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">Transcript snippet</div>
              <p className="text-[13px] leading-relaxed text-foreground/90">
                "Of course, I can book that for you. I see Dr. Patel has an opening Thursday at 2:30. Should I send the confirmation to the number we're on?"
              </p>
            </motion.div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { k: "Resolved", v: "94%" },
                { k: "Avg Handle", v: "1m 47s" },
                { k: "CSAT", v: "4.9" },
              ].map((m) => (
                <motion.div key={m.k} {...fadeUp(1.5)} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                  <div className="mt-0.5 text-base font-semibold tracking-tight">{m.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
      <span className="text-[12px] text-muted-foreground">{label}</span>
      <span className={`text-[13px] ${highlight ? "text-success" : "text-foreground/90"}`}>{value}</span>
    </div>
  );
}
