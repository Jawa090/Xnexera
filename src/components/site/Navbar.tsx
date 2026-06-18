import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Nexera Logo" className="h-9 w-auto object-contain" />
        </Link>
        <Link to="/book-demo" className="rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-2.5 text-[13px] font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]">Book Demo</Link>
      </div>
    </motion.nav>
  );
}

