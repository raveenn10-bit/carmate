"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileOpen]);

  // Close drawer on path change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery & Builds", href: "/gallery" },
    { name: "Contact & Quotes", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#05070a]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3"
          : "bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile toggle button with >=44px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-zinc-300 hover:text-white active:bg-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ea1c24] transition-colors"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Brand Logo - Crisp and proportionate on all devices */}
        <Link href="/" className="flex items-center py-1 group focus:outline-none">
          <img
            src="/assets/carmate-logo.png"
            alt="Carmate Modifications"
            className="h-8 sm:h-10 md:h-11 w-auto max-w-[140px] sm:max-w-none object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:brightness-110 transition-all"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.14em] font-semibold py-2 transition-colors ${
                  isActive
                    ? "text-[#ea1c24]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20vehicle%20modification."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#ea1c24] hover:bg-[#ff2d36] text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full shadow-[0_4px_16px_rgba(234,28,36,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageSquareQuote size={16} />
            <span>Get Quote</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Animation & Backdrop Blur */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 58px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[58px] sm:top-[64px] bg-[#070a0f]/98 backdrop-blur-2xl border-t border-white/10 px-5 py-6 flex flex-col justify-between overflow-y-auto overscroll-contain z-40"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`min-h-[48px] flex items-center text-lg uppercase tracking-wider font-bold px-4 py-3 rounded-xl transition-all border-b border-white/5 ${
                      isActive
                        ? "text-[#ea1c24] bg-white/5"
                        : "text-zinc-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 pb-6 pt-4 border-t border-white/10 mt-auto">
              <a
                href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex items-center justify-center gap-2 bg-[#ea1c24] hover:bg-[#ff2d36] text-white font-bold py-3.5 px-6 rounded-xl uppercase tracking-wider shadow-lg active:scale-95 transition-all text-sm"
              >
                <MessageSquareQuote size={18} />
                <span>WhatsApp Consultation ↗</span>
              </a>
              <p className="text-center text-xs text-zinc-400">
                197, Hotel Suniru Lanka, Makuluwa, Galle
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
