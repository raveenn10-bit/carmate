"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Wrench,
  Users,
  Image as ImageIcon,
  Phone,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/components/providers/theme-provider";

const navLinks = [
  { name: "Home",             href: "/",         Icon: Home       },
  { name: "Services",         href: "/services",  Icon: Wrench     },
  { name: "About Us",         href: "/about",     Icon: Users      },
  { name: "Gallery & Builds", href: "/gallery",   Icon: ImageIcon  },
  { name: "Contact",          href: "/contact",   Icon: Phone      },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 28 },
  },
  exit: { opacity: 0, y: 12, transition: { duration: 0.15 } },
};

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // body-scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [mobileOpen]);

  // close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark
            ? scrolled
              ? "bg-[#05070a]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-lg"
              : "bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/60 to-transparent py-4 sm:py-5"
            : scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#62B6CB]/30 py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(11,31,59,0.08)]"
            : "bg-gradient-to-b from-white/90 via-white/60 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Left: Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className={`min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-lg focus:outline-none transition-colors ${
                isDark
                  ? "text-zinc-300 hover:text-white active:bg-white/10"
                  : "text-[#0B1F3B] hover:text-[#1B4965] active:bg-[#62B6CB]/15"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center py-1 group focus:outline-none">
            <img
              src="/assets/carmate-logo.png"
              alt="Carmate Modifications"
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[140px] sm:max-w-none object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:brightness-110 transition-all"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`text-xs uppercase tracking-[0.14em] font-semibold py-2 transition-colors ${
                    isActive
                      ? "text-[#ea1c24] font-bold"
                      : isDark
                      ? "text-zinc-300 hover:text-white"
                      : "text-[#1B4965] hover:text-[#0B1F3B]"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Automotive Theme Toggle Button */}
            <ThemeToggle size="sm" className="sm:hidden" />
            <ThemeToggle size="md" className="hidden sm:inline-flex" />

            {/* Desktop WhatsApp Action */}
            <a
              href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20vehicle%20modification."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#ea1c24] hover:bg-[#ff2d36] text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full shadow-[0_4px_16px_rgba(234,28,36,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare size={16} />
              <span>Get Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col md:hidden"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              backgroundColor: isDark ? "rgba(5,7,10,0.92)" : "rgba(240,249,255,0.96)",
            }}
          >
            {/* Close button — centered at top */}
            <div className="flex flex-col items-center pt-14 pb-4">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                  isDark ? "text-white/80 hover:text-white" : "text-[#0B1F3B]/80 hover:text-[#0B1F3B]"
                }`}
              >
                <X size={28} strokeWidth={1.6} />
              </button>
              {/* thin accent line */}
              <span className="mt-2 w-10 h-px bg-[#ea1c24]/60" />
            </div>

            {/* Nav items — centered, icon + label */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 flex flex-col items-center justify-center gap-1"
            >
              {navLinks.map(({ name, href, Icon }) => {
                const isActive = pathname === href;
                return (
                  <motion.div key={name} variants={itemVariants} className="w-full flex justify-center">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 px-8 py-3.5 min-h-[56px] text-2xl font-light tracking-wide transition-all select-none ${
                        isActive
                          ? "text-[#ea1c24] font-medium"
                          : isDark
                          ? "text-white/75 hover:text-white active:text-[#ea1c24]"
                          : "text-[#0B1F3B]/80 hover:text-[#0B1F3B] active:text-[#ea1c24]"
                      }`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className={
                          isActive
                            ? "text-[#ea1c24]"
                            : isDark
                            ? "text-white/50"
                            : "text-[#1B4965]/70"
                        }
                      />
                      <span>{name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Mobile Theme Selector Switcher */}
            <div className="flex justify-center py-4">
              <ThemeToggle size="md" showLabel={true} />
            </div>

            {/* Bottom CTA — pill outline button */}
            <div className="flex justify-center pb-12 px-8">
              <motion.a
                href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.35 } }}
                exit={{ opacity: 0 }}
                className={`w-full max-w-xs min-h-[52px] flex items-center justify-center gap-2 border rounded-full text-sm font-medium tracking-widest uppercase transition-all active:scale-95 ${
                  isDark
                    ? "border-white/30 hover:border-[#ea1c24] text-white hover:text-[#ea1c24]"
                    : "border-[#1B4965]/40 hover:border-[#ea1c24] text-[#0B1F3B] hover:text-[#ea1c24]"
                }`}
              >
                <MessageSquare size={16} strokeWidth={1.5} />
                <span>WhatsApp Consultation</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
