"use client";

import * as React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Check,
  Clock,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const { isDark } = useTheme();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer
      className="relative w-full bg-[#05070a] text-zinc-300 border-t border-white/10 overflow-hidden transition-colors duration-300"
      id="contact"
    >
      {/* Background Ambient Glow & Aerodynamic Speed Streamers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Deep Dark Radial Highlights */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[#ea1c24]/[0.035] rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[500px] bg-red-900/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-[#6b111e]/[0.025] rounded-full blur-[150px]" />

        {/* Aerodynamic Red Streamers (Coded SVG Curves) */}
        <svg
          className="absolute -top-10 right-0 w-[800px] h-[360px] opacity-20 pointer-events-none hidden md:block"
          viewBox="0 0 800 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 800 50 C 600 65, 400 130, 180 320"
            stroke="#ea1c24"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <path
            d="M 800 95 C 560 110, 320 180, 120 350"
            stroke="#ea1c24"
            strokeWidth="2.5"
            className="drop-shadow-[0_0_12px_#ea1c24]"
          />
        </svg>
      </div>

      {/* Main Container - Full-Width Fluid Container up to 1720px (Eliminates empty black voids on 1440p/4K/Ultrawide) */}
      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
        {/* Main Responsive Grid - Split into 2 columns on mobile */}
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 pb-14 sm:pb-16 border-b ${
          isDark ? "border-white/10" : "border-[#6b111e]/20"
        }`}>
          
          {/* Column 1: Brand & Automotive Statement (spans 2 cols on mobile, 4 cols on lg/xl) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 xl:col-span-4 flex flex-col items-start space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block group focus:outline-none">
              <img
                src={isDark ? "/assets/carmate-logo.png" : "/assets/carmate-logo-light.png"}
                alt="Carmate Modifications Galle"
                className={`h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102 ${
                  isDark
                    ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                    : "drop-shadow-sm"
                }`}
              />
            </Link>

            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase transition-colors ${
              isDark
                ? "bg-white/[0.04] border-white/10 text-[#ea1c24]"
                : "bg-[#6b111e]/10 border-[#6b111e]/25 text-[#6b111e]"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea1c24] animate-pulse" />
              <span>SOUTHERN CEYLON AUTOMOTIVE ATELIER</span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-md transition-colors ${
              isDark ? "text-zinc-400" : "text-[#222227]"
            }`}>
              Galle's premier automotive styling workshop. Engineered body kit fitting, custom Bi-LED projector retrofits, 2K baked paint perfection, and bespoke vehicle transformations.
            </p>

            {/* Red Slogan Accent */}
            <div className="pt-1">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#ea1c24] to-transparent mb-2" />
              <p className={`text-[11px] sm:text-xs font-black tracking-[0.22em] uppercase transition-colors ${
                isDark ? "text-white" : "text-[#0a0a0c]"
              }`}>
                BUILT DIFFERENT. ALWAYS.
              </p>
            </div>

            {/* Social Channels Pill Bar */}
            <div className="pt-2">
              <span className={`text-[10px] font-mono uppercase tracking-widest block mb-2 transition-colors ${
                isDark ? "text-zinc-500" : "text-[#222227]/80"
              }`}>
                Connect With Workshop
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Facebook - Official Blue #1877F2 */}
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Carmate on Facebook"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] border border-[#1877F2] flex items-center justify-center text-white transition-all shadow-[0_2px_10px_rgba(24,119,242,0.35)] hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] group hover:-translate-y-0.5 active:scale-95"
                  title="Facebook / Carmate Modifications"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram - Official Gradient #f09433 -> #bc1888 */}
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Carmate on Instagram"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 border border-white/20 flex items-center justify-center text-white transition-all shadow-[0_2px_10px_rgba(220,39,67,0.35)] hover:shadow-[0_0_15px_rgba(220,39,67,0.6)] group hover:-translate-y-0.5 active:scale-95"
                  title="Instagram / Carmate Builds"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok - Official Black #010101 */}
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Carmate on TikTok"
                  className="w-9 h-9 rounded-xl bg-black hover:bg-[#111111] border border-white/20 flex items-center justify-center text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,242,254,0.5)] group hover:-translate-y-0.5 active:scale-95"
                  title="TikTok / @CarmateGalle"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#00f2fe" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.87.12V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.48c.03-.03.06-.06.09-.09V9.75a8.28 8.28 0 0 0 5.54 2.11v-3.48a4.83 4.83 0 0 1 0-1.69z" opacity="0.8"/>
                    <path fill="#fe0979" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.87.12V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.48c.03-.03.06-.06.09-.09V9.75a8.28 8.28 0 0 0 5.54 2.11v-3.48a4.83 4.83 0 0 1 0-1.69z" transform="translate(1, 1)" opacity="0.8"/>
                    <path fill="#ffffff" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.87.12V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.48c.03-.03.06-.06.09-.09V9.75a8.28 8.28 0 0 0 5.54 2.11v-3.48a4.83 4.83 0 0 1 0-1.69z"/>
                  </svg>
                </a>

                {/* YouTube - Official Red #FF0000 */}
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Carmate on YouTube"
                  className="w-9 h-9 rounded-xl bg-[#FF0000] hover:bg-[#e60000] border border-[#FF0000] flex items-center justify-center text-white transition-all shadow-[0_2px_10px_rgba(255,0,0,0.35)] hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] group hover:-translate-y-0.5 active:scale-95"
                  title="YouTube / Carmate Workshop Showcase"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp - Official Green #25D366 */}
                <a
                  href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20consult%20about%20a%20vehicle%20modification."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Carmate on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] border border-[#25D366] flex items-center justify-center text-white transition-all shadow-[0_2px_10px_rgba(37,211,102,0.35)] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] group hover:-translate-y-0.5 active:scale-95"
                  title="WhatsApp Consultation (+94 77 717 7452)"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.397 0 .007 5.385.007 12.018a11.97 11.97 0 0 0 1.636 6.077L0 24l6.093-1.6a11.97 11.97 0 0 0 5.938 1.57h.005c6.634 0 12.023-5.385 12.023-12.018A12.01 12.01 0 0 0 12.031 0zm-.005 21.99a9.99 9.99 0 0 1-5.093-1.39l-.365-.216-3.784.993 1.01-3.69-.238-.378a9.96 9.96 0 0 1-1.542-5.291c0-5.522 4.496-10.016 10.017-10.016a9.97 9.97 0 0 1 7.086 2.935 9.97 9.97 0 0 1 2.936 7.084c0 5.523-4.494 10.018-10.027 10.018zm5.492-7.5c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.125-.276-.201-.577-.351z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (1 col on mobile, 2 cols on lg/xl) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-1 h-3.5 bg-[#ea1c24] rounded-full" />
              <h4 className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                isDark ? "text-white" : "text-[#0a0a0c]"
              }`}>
                Explore Carmate
              </h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Workshop", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Build Gallery", href: "/gallery" },
                { label: "Quote Builder", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 transition-all hover:translate-x-1 ${
                      isDark
                        ? "text-zinc-400 hover:text-white"
                        : "text-[#222227] hover:text-[#ea1c24]"
                    }`}
                  >
                    <ChevronRight size={13} className="text-[#ea1c24]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Workshop Services (1 col on mobile, 3 cols on lg/xl) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-1 h-3.5 bg-[#ea1c24] rounded-full" />
              <h4 className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                isDark ? "text-white" : "text-[#0a0a0c]"
              }`}>
                Workshop Services
              </h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {[
                "Modellista Body Kits",
                "Bi-LED Projectors",
                "Carbon GT Wings",
                "2K Baked Paint",
                "Custom Upholstery",
                "Wiring Harnesses",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 transition-all hover:translate-x-1 group ${
                      isDark
                        ? "text-zinc-400 hover:text-white"
                        : "text-[#222227] hover:text-[#ea1c24]"
                    }`}
                  >
                    <span className="text-[#ea1c24]">▪</span>
                    <span className="truncate">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Instant WhatsApp Consultation Card (spans 2 cols on mobile, 3 cols on lg/xl) */}
          <div className={`col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3 flex flex-col justify-between space-y-4 border rounded-2xl p-5 sm:p-6 shadow-xl transition-colors ${
            isDark
              ? "bg-white/[0.02] border-white/10"
              : "bg-white border-[#6b111e]/20 shadow-[0_8px_30px_rgba(10,10,12,0.06)]"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                  isDark ? "text-white" : "text-[#0a0a0c]"
                }`}>
                  VIP Build Updates
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ea1c24]/20 text-[#ea1c24] font-bold">
                  UPDATES
                </span>
              </div>
              <p className={`text-xs leading-relaxed mb-4 transition-colors ${
                isDark ? "text-zinc-400" : "text-[#222227]"
              }`}>
                Be the first to see fresh project rollouts, body kit arrivals and special seasonal offers.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-xs text-green-400 font-semibold">
                  <Check size={16} className="text-green-400 shrink-0" />
                  <span>Thank you! You're added to Carmate VIP list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className={`flex-1 min-w-0 border focus:outline-none text-xs px-3.5 py-2.5 rounded-xl transition-colors ${
                        isDark
                          ? "bg-white/[0.04] border-white/15 text-white placeholder:text-zinc-500 focus:border-[#ea1c24]"
                          : "bg-white border-[#6b111e]/25 text-[#0a0a0c] placeholder:text-[#33333a]/60 focus:border-[#6b111e] shadow-inner"
                      }`}
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="bg-[#ea1c24] hover:bg-[#ff222a] active:bg-[#c9141b] text-white p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0 shadow-[0_2px_12px_rgba(234,28,36,0.35)]"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer pt-1 group">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                      className="mt-0.5 rounded border-white/20 bg-white/[0.05] text-[#ea1c24] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#ea1c24]"
                    />
                    <span className={`text-[11px] select-none leading-tight transition-colors ${
                      isDark ? "text-zinc-400 group-hover:text-zinc-300" : "text-[#222227] group-hover:text-[#0a0a0c]"
                    }`}>
                      I agree to receive automotive project updates.
                    </span>
                  </label>
                </form>
              )}
            </div>

            {/* Quick WhatsApp Action Banner inside the card */}
            <div className={`pt-3 border-t ${isDark ? "border-white/10" : "border-[#6b111e]/20"}`}>
              <a
                href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20vehicle%20build."
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isDark
                    ? "bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-black border border-[#25d366]/30 hover:border-[#25d366]"
                    : "bg-[#25d366]/15 hover:bg-[#25d366] text-[#0a0a0c] hover:text-black border border-[#25d366]/40 hover:border-[#25d366]"
                }`}
              >
                <MessageSquare size={14} />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Command Center: 4 Contact Cards Grid - 2 columns on mobile */}
        <div className="pt-10 sm:pt-12 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full">
            {/* Card 1: Workshop Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all duration-200 group shadow-md ${
                isDark
                  ? "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20"
                  : "bg-white hover:bg-[#f7eef0]/50 border-[#6b111e]/20 hover:border-[#6b111e] shadow-[0_4px_20px_rgba(10,10,12,0.06)]"
              }`}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] group-hover:scale-105 transition-transform shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold tracking-wider ${
                  isDark ? "text-zinc-500" : "text-[#222227]/80"
                }`}>
                  Workshop
                </p>
                <p className={`text-[11px] sm:text-xs md:text-sm font-semibold truncate ${
                  isDark ? "text-zinc-100 group-hover:text-white" : "text-[#0a0a0c] group-hover:text-[#ea1c24]"
                }`}>
                  197 Hotel Suniru
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#ea1c24] flex items-center gap-1 font-mono mt-0.5">
                  Galle <ExternalLink size={9} />
                </span>
              </div>
            </a>

            {/* Card 2: Dedicated Workshop Operating Hours */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all duration-200 group shadow-md ${
                isDark
                  ? "bg-white/[0.02] border-white/10"
                  : "bg-white border-[#6b111e]/20 shadow-[0_4px_20px_rgba(10,10,12,0.06)]"
              }`}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold tracking-wider ${
                    isDark ? "text-zinc-500" : "text-[#222227]/80"
                  }`}>
                    Hours
                  </p>
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-emerald-500 uppercase bg-emerald-500/10 px-1 py-0.2 rounded">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Open
                  </span>
                </div>
                <p className={`text-[11px] sm:text-xs md:text-sm font-semibold truncate ${
                  isDark ? "text-zinc-100" : "text-[#0a0a0c]"
                }`}>
                  Mon-Sat: 8:30-6:30
                </p>
                <span className={`text-[9px] sm:text-[10px] font-mono mt-0.5 block truncate ${
                  isDark ? "text-zinc-400" : "text-[#222227]"
                }`}>
                  Sunday: Appt only
                </span>
              </div>
            </div>

            {/* Card 3: Direct Phone Line & Email */}
            <a
              href="tel:+94777177452"
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all duration-200 group shadow-md ${
                isDark
                  ? "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20"
                  : "bg-white hover:bg-[#f7eef0]/50 border-[#6b111e]/20 hover:border-[#6b111e] shadow-[0_4px_20px_rgba(10,10,12,0.06)]"
              }`}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold tracking-wider ${
                  isDark ? "text-zinc-500" : "text-[#222227]/80"
                }`}>
                  Hotline
                </p>
                <p className={`text-[11px] sm:text-xs md:text-sm font-semibold truncate ${
                  isDark ? "text-zinc-100 group-hover:text-white" : "text-[#0a0a0c] group-hover:text-[#ea1c24]"
                }`}>
                  +94 77 717 7452
                </p>
                <span className={`text-[9px] sm:text-[10px] font-mono mt-0.5 block truncate ${
                  isDark ? "text-zinc-400" : "text-[#222227]"
                }`}>
                  info@carmate.lk
                </span>
              </div>
            </a>

            {/* Card 4: WhatsApp Live Dispatch */}
            <a
              href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20consult%20about%20a%20vehicle%20modification."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all duration-200 group shadow-md ${
                isDark
                  ? "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-[#25d366]/50"
                  : "bg-white hover:bg-[#f7eef0]/50 border-[#6b111e]/20 hover:border-[#25d366] shadow-[0_4px_20px_rgba(10,10,12,0.06)]"
              }`}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 flex items-center justify-center text-[#25d366] group-hover:scale-105 transition-transform shrink-0">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold tracking-wider ${
                    isDark ? "text-zinc-500" : "text-[#222227]/80"
                  }`}>
                    WhatsApp
                  </p>
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-[#25d366] uppercase bg-[#25d366]/10 px-1 py-0.2 rounded">
                    <span className="w-1 h-1 rounded-full bg-[#25d366] animate-ping" />
                    Live
                  </span>
                </div>
                <p className={`text-[11px] sm:text-xs md:text-sm font-semibold truncate ${
                  isDark ? "text-zinc-100 group-hover:text-white" : "text-[#0a0a0c] group-hover:text-[#25d366]"
                }`}>
                  Instant Quote
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#25d366] font-mono mt-0.5 block truncate">
                  Send car photos ↗
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Flowing Red Neon S-Curve Wave (Pure SVG Ribbon across full width) */}
        <div className="relative w-full overflow-hidden my-4 sm:my-6">
          <svg
            viewBox="0 0 1720 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Ambient Red Glow Layer */}
            <path
              d="M0 30 Q 430 -5, 860 30 T 1720 20"
              stroke="#ea1c24"
              strokeWidth="8"
              strokeOpacity="0.22"
              className="blur-md"
            />
            {/* Crisp Red Center Neon Line */}
            <path
              d="M0 30 Q 430 -5, 860 30 T 1720 20"
              stroke="#ea1c24"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_12px_#ea1c24]"
            />
          </svg>
        </div>

        {/* Bottom Bar: Copyright, Designer Credit & Motorsport Manifesto */}
        <div className={`pt-2 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-center lg:text-left transition-colors ${
          isDark ? "text-zinc-400" : "text-[#222227]"
        }`}>
          {/* Left: Copyright & Designer */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p>© 2026 Carmate Modifications (Pvt) Ltd. All rights reserved.</p>
            <span className="hidden sm:inline opacity-40">•</span>
            <p>
              Designed by{" "}
              <a
                href="https://www.harshapex.com.lk"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold transition-colors underline-offset-4 hover:underline ${
                  isDark ? "text-white hover:text-[#ea1c24]" : "text-[#0a0a0c] hover:text-[#ea1c24]"
                }`}
              >
                Harsh Apex
              </a>
            </p>
          </div>

          {/* Center: Sri Lanka Pride Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] sm:text-[11px] font-mono transition-colors ${
            isDark
              ? "bg-white/[0.03] border-white/10 text-zinc-400"
              : "bg-[#6b111e]/10 border-[#6b111e]/25 text-[#6b111e]"
          }`}>
            <ShieldCheck size={12} className="text-[#ea1c24]" />
            <span>Southern Province • Makuluwa, Galle, Sri Lanka</span>
          </div>

          {/* Right: Slogan Motto Badges */}
          <div className={`flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 font-mono font-bold tracking-widest text-[10px] sm:text-[11px] transition-colors ${
            isDark ? "text-zinc-400" : "text-[#222227]"
          }`}>
            <span>CARS</span>
            <span className="text-[#ea1c24]">/</span>
            <span>PEOPLE</span>
            <span className="text-[#ea1c24]">/</span>
            <span>PASSION</span>
            <span className="text-[#ea1c24]">/</span>
            <span className={isDark ? "text-white" : "text-[#0a0a0c]"}>FOREVER</span>
          </div>
        </div>
      </div>

      {/* Official WhatsApp Floating Action Pill */}
      <a
        href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20discuss%20a%20vehicle%20modification."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 bg-[#25d366] hover:bg-[#20bd5a] active:bg-[#1caa50] text-white font-bold p-3 sm:px-5 sm:py-3.5 min-w-[50px] min-h-[50px] rounded-full shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-white border border-white/20"
        aria-label="Chat with Carmate on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 shrink-0 fill-white drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M12.031 0C5.397 0 .007 5.385.007 12.018a11.97 11.97 0 0 0 1.636 6.077L0 24l6.093-1.6a11.97 11.97 0 0 0 5.938 1.57h.005c6.634 0 12.023-5.385 12.023-12.018A12.01 12.01 0 0 0 12.031 0zm-.005 21.99a9.99 9.99 0 0 1-5.093-1.39l-.365-.216-3.784.993 1.01-3.69-.238-.378a9.96 9.96 0 0 1-1.542-5.291c0-5.522 4.496-10.016 10.017-10.016a9.97 9.97 0 0 1 7.086 2.935 9.97 9.97 0 0 1 2.936 7.084c0 5.523-4.494 10.018-10.027 10.018zm5.492-7.5c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.125-.276-.201-.577-.351z" />
        </svg>
        <span className="hidden sm:inline-block pr-0.5 text-white text-xs font-bold uppercase tracking-wider">
          WhatsApp
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      </a>
    </footer>
  );
}
