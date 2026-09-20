"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#05070a] text-zinc-300 border-t border-white/10 overflow-hidden" id="contact">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/assets/footer-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/90 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 flex flex-col items-start gap-4">
            <img
              src="/assets/carmate-logo.png"
              alt="Carmate Modifications"
              className="h-10 sm:h-12 w-auto object-contain mb-1"
            />
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Automotive body shop &amp; precision customization specialists based in Makuluwa, Galle, Sri Lanka. Transforming vehicles into bespoke automotive masterpieces.
            </p>
            <div className="h-0.5 w-16 bg-[#ea1c24] my-1" />
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white">
              BUILT DIFFERENT. ALWAYS.
            </p>
          </div>

          {/* Quick Links with >=40px touch targets */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <Link href="/" className="min-h-[40px] flex items-center hover:text-[#ea1c24] transition-colors py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="min-h-[40px] flex items-center hover:text-[#ea1c24] transition-colors py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="min-h-[40px] flex items-center hover:text-[#ea1c24] transition-colors py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="min-h-[40px] flex items-center hover:text-[#ea1c24] transition-colors py-1">
                  Gallery &amp; Builds
                </Link>
              </li>
              <li>
                <Link href="/contact" className="min-h-[40px] flex items-center hover:text-[#ea1c24] transition-colors py-1">
                  Contact &amp; Quotes
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] inline-flex items-center gap-1.5 hover:text-[#ea1c24] transition-colors py-1"
                >
                  Facebook Page ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li className="py-0.5">Custom Body Kits &amp; Styling</li>
              <li className="py-0.5">Bi-LED &amp; Flowing DRL Lights</li>
              <li className="py-0.5">Carbon GT Wings &amp; Spoilers</li>
              <li className="py-0.5">Luxury Interior Upholstery</li>
              <li className="py-0.5">64-Color Ambient Cabin</li>
              <li className="py-0.5">Lowering &amp; Stance Fitment</li>
            </ul>
          </div>

          {/* Contact Details with >=44px touch targets */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-5">
              Workshop
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-start gap-3 text-zinc-300 hover:text-white py-1 group transition-colors"
              >
                <MapPin className="text-[#ea1c24] flex-shrink-0 mt-0.5" size={18} />
                <span className="leading-snug">197, Hotel Suniru Lanka, Makuluwa, Galle 80000</span>
              </a>
              <a
                href="tel:+94777177452"
                className="min-h-[44px] flex items-center gap-3 text-zinc-300 hover:text-white py-1 transition-colors"
              >
                <Phone className="text-[#ea1c24] flex-shrink-0" size={18} />
                <span>+94 77 717 7452</span>
              </a>
              <a
                href="mailto:info@carmate.lk"
                className="min-h-[44px] flex items-center gap-3 text-zinc-300 hover:text-white py-1 transition-colors"
              >
                <Mail className="text-[#ea1c24] flex-shrink-0" size={18} />
                <span>info@carmate.lk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>© 2026 Carmate Modifications. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 font-semibold tracking-wider text-zinc-400 text-[10px] sm:text-xs">
            <span>CARS</span>
            <span className="text-zinc-600">|</span>
            <span>PEOPLE</span>
            <span className="text-zinc-600">|</span>
            <span>PASSION</span>
            <span className="text-zinc-600">|</span>
            <span>FOREVER</span>
          </div>
        </div>
      </div>

      {/* Official WhatsApp Floating Button - Safe Area & Touch Friendly */}
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
