import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Nexera Logo" className="h-8 sm:h-9 w-auto object-contain" />
        </Link>
        
        {/* Desktop CTA */}
        <Link 
          to="/book-demo" 
          className="hidden sm:block rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-5 py-2.5 text-[13px] font-semibold text-black transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(235,125,2,0.25)] hover:shadow-[0_4px_25px_rgba(235,125,2,0.4)]"
        >
          Book Demo
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-full bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] px-6 py-3 text-center text-sm font-semibold text-black transition-all hover:scale-[1.02]"
            >
              Book Demo
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              AI Voice Agents · 24/7 Lead Qualification
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

