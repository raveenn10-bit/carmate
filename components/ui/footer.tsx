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
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);

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
      className="relative bg-[#05070a] text-zinc-300 border-t border-white/10 overflow-hidden"
      id="contact"
    >
      {/* Background Ambient Glow & Aerodynamic Speed Streamers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Dark Radial Highlights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ea1c24]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-red-900/[0.05] rounded-full blur-[100px]" />

        {/* Aerodynamic Red Streamers (Coded SVG Curves) */}
        <svg
          className="absolute -top-10 right-0 w-[600px] h-[300px] opacity-25 pointer-events-none hidden lg:block"
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 600 50 C 450 60, 300 120, 150 260"
            stroke="#ea1c24"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 600 90 C 420 100, 260 160, 100 290"
            stroke="#ea1c24"
            strokeWidth="2"
            className="drop-shadow-[0_0_10px_#ea1c24]"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-10">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group focus:outline-none">
              <img
                src="/assets/carmate-logo.png"
                alt="Carmate Modifications"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
              DRIVE YOUR VISION
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              Premium car customization, performance upgrades and everything you need to build your dream ride.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61561763061849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Carmate on Facebook"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ea1c24] border border-white/10 hover:border-[#ea1c24] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Facebook size={14} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.facebook.com/profile.php?id=61561763061849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Carmate on Instagram"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ea1c24] border border-white/10 hover:border-[#ea1c24] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Instagram size={14} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.facebook.com/profile.php?id=61561763061849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Carmate on TikTok"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ea1c24] border border-white/10 hover:border-[#ea1c24] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.05 3.27-1.52 3.36-3.33.07-2.73.04-5.46.04-8.19.01-3.66.01-7.33.01-11z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.facebook.com/profile.php?id=61561763061849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Carmate on YouTube"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ea1c24] border border-white/10 hover:border-[#ea1c24] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Youtube size={14} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20consult%20about%20a%20vehicle%20modification."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Carmate on WhatsApp"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#25d366] border border-white/10 hover:border-[#25d366] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.397 0 .007 5.385.007 12.018a11.97 11.97 0 0 0 1.636 6.077L0 24l6.093-1.6a11.97 11.97 0 0 0 5.938 1.57h.005c6.634 0 12.023-5.385 12.023-12.018A12.01 12.01 0 0 0 12.031 0zm-.005 21.99a9.99 9.99 0 0 1-5.093-1.39l-.365-.216-3.784.993 1.01-3.69-.238-.378a9.96 9.96 0 0 1-1.542-5.291c0-5.522 4.496-10.016 10.017-10.016a9.97 9.97 0 0 1 7.086 2.935 9.97 9.97 0 0 1 2.936 7.084c0 5.523-4.494 10.018-10.027 10.018zm5.492-7.5c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.125-.276-.201-.577-.351z" />
                </svg>
              </a>
            </div>

            {/* Red Slogan Accent */}
            <div className="pt-2">
              <div className="h-[2px] w-10 bg-[#ea1c24] mb-2.5" />
              <p className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-white">
                BUILT DIFFERENT. ALWAYS.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-transform">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-4 sm:mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Performance Upgrades
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Body Kits &amp; Styling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Wheels &amp; Tyres
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Lighting Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Interior Customization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Maintenance &amp; Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ea1c24] transition-colors">
                  Car Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-4 sm:mb-5">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Returns &amp; Warranty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Send Us a Message
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Stay updated with the latest builds, offers and automotive news.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-xs text-green-400 font-semibold">
                <Check size={16} className="text-green-400" />
                <span>Thank you! You're subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
                <div className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-white/[0.04] border border-white/15 focus:border-[#ea1c24] focus:outline-none text-xs text-white placeholder:text-zinc-500 px-3.5 py-2.5 rounded-lg transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="bg-[#ea1c24] hover:bg-[#ff222a] active:bg-[#c9141b] text-white p-2.5 rounded-lg transition-all flex items-center justify-center shrink-0 shadow-[0_2px_12px_rgba(234,28,36,0.35)]"
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
                  <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 select-none leading-snug">
                    I agree to receive updates from Carmate.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Middle Info & Contact Cards Row */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            {/* Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 flex-1 max-w-3xl">
              {/* Location Card */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] group-hover:scale-105 transition-transform shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    Our Location
                  </p>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                    Galle, Sri Lanka
                  </p>
                </div>
              </a>

              {/* Call Card */}
              <a
                href="tel:+94777177452"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] group-hover:scale-105 transition-transform shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    Call Us
                  </p>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                    +94 77 717 7452
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@carmate.lk"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ea1c24]/10 border border-[#ea1c24]/30 flex items-center justify-center text-[#ea1c24] group-hover:scale-105 transition-transform shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    Email Us
                  </p>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                    info@carmate.lk
                  </p>
                </div>
              </a>
            </div>

            {/* Right Side Stacked Slogan ("MORE THAN JUST CARS") */}
            <div className="hidden lg:flex flex-col items-end justify-center tracking-[0.25em] font-black text-[11px] text-zinc-500 uppercase leading-snug select-none pr-2">
              <span>MORE</span>
              <span>THAN</span>
              <span>JUST</span>
              <span className="text-zinc-200">CARS</span>
            </div>
          </div>
        </div>

        {/* Flowing Red Neon S-Curve Wave (Pure SVG Ribbon) */}
        <div className="relative w-full overflow-hidden my-6">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Ambient Red Glow Layer */}
            <path
              d="M0 35 Q 360 -5, 720 35 T 1440 25"
              stroke="#ea1c24"
              strokeWidth="8"
              strokeOpacity="0.25"
              className="blur-md"
            />
            {/* Crisp Red Center Neon Line */}
            <path
              d="M0 35 Q 360 -5, 720 35 T 1440 25"
              stroke="#ea1c24"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_10px_#ea1c24]"
            />
          </svg>
        </div>

        {/* Bottom Bar: Copyright & Designer Credit */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 Carmate. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <p className="text-zinc-400">
              Designed by{" "}
              <a
                href="https://www.harshapex.com.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ea1c24] font-semibold transition-colors underline-offset-4 hover:underline"
              >
                Harsh Apex
              </a>{" "}
              <span className="text-zinc-500 text-[11px]">
                (
                <a
                  href="https://www.harshapex.com.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300"
                >
                  www.harshapex.com.lk
                </a>
                )
              </span>
            </p>
          </div>

          {/* Slogan Motto Badges */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 font-semibold tracking-wider text-zinc-400 text-[10px] sm:text-xs">
            <span>CARS</span>
            <span className="text-[#ea1c24] font-bold">|</span>
            <span>PEOPLE</span>
            <span className="text-[#ea1c24] font-bold">|</span>
            <span>PASSION</span>
            <span className="text-[#ea1c24] font-bold">|</span>
            <span>FOREVER</span>
          </div>
        </div>
      </div>

      {/* Official WhatsApp Floating Button */}
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
