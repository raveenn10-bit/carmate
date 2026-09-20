"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

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

      {/* WhatsApp Floating Button - Safe Area & Touch Friendly */}
      <a
        href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20discuss%20a%20vehicle%20modification."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25d366] hover:bg-[#2ee672] active:bg-[#20b858] text-white font-bold p-3 sm:p-3.5 min-w-[48px] min-h-[48px] rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Chat with Carmate on WhatsApp"
      >
        <MessageCircle size={22} className="fill-current text-white flex-shrink-0" />
        <span className="hidden sm:inline-block pr-1 text-white text-xs font-bold uppercase tracking-wider">
          WhatsApp
        </span>
      </a>
    </footer>
  );
}
