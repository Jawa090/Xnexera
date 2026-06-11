import { motion } from "framer-motion";
import nexeraLogo from "@/assets/nexera-logo.png";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <img src={nexeraLogo} alt="Nexera" width={36} height={36} className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
          <span className="text-base font-semibold tracking-[0.18em]">NEXERA</span>
        </a>
        <a href="#cta" className="rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-black transition-transform hover:scale-[1.02]">Book Demo</a>
      </div>
    </motion.nav>
  );
}
