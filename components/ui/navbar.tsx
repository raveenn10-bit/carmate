"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquareQuote } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        scrolled
          ? "bg-[#05070a]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-gradient-to-b from-[#05070a]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/carmate-logo.png"
            alt="Carmate Modifications"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.14em] font-semibold transition-colors ${
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

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20vehicle%20modification."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#ea1c24] hover:bg-[#ff2d36] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(234,28,36,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquareQuote size={15} />
            <span>Get Quote</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#070a0f]/98 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-5 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xl uppercase tracking-wider font-bold py-2 border-b border-white/5 ${
                    isActive ? "text-[#ea1c24]" : "text-zinc-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pb-8">
            <a
              href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#ea1c24] text-white font-bold py-3 rounded-xl uppercase tracking-wider"
            >
              WhatsApp Consultation ↗
            </a>
            <p className="text-center text-xs text-zinc-400">
              197, Hotel Suniru Lanka, Makuluwa, Galle
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
