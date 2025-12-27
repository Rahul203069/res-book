"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Signatures", href: "#signatures" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "h-16 glass-nav border-b border-white/5" : "h-20 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div whileHover={{ rotate: 12 }} className="w-8 h-8 bg-rust-600 rounded-sm flex items-center justify-center text-white font-serif italic text-lg shadow-[0_0_15px_rgba(219,39,33,0.3)]">
            S
          </motion.div>
          <span className="text-white font-medium tracking-widest text-xs uppercase group-hover:text-rust-500 transition-colors">Scarlet</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-medium uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-neutral-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Link href="#reserve" className="hidden sm:flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:text-rust-500 transition-colors group">
            Reservations <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg tracking-widest border-b border-white/5 pb-2">
                  {link.name}
                </Link>
              ))}
              <Link href="#reserve" onClick={() => setIsOpen(false)} className="text-rust-500 text-lg tracking-widest">Book Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}