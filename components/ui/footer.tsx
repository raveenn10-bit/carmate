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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <img
              src="/assets/carmate-logo.png"
              alt="Carmate Modifications"
              className="h-12 w-auto object-contain mb-2"
            />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Automotive body shop & precision customization specialists based in Makuluwa, Galle, Sri Lanka. Transforming vehicles into bespoke automotive masterpieces.
            </p>
            <div className="h-0.5 w-16 bg-[#ea1c24] my-2" />
            <p className="text-xs font-bold tracking-[0.25em] text-white">
              BUILT DIFFERENT. ALWAYS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery & Builds</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Quotes</Link></li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61561763061849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea1c24] transition-colors inline-flex items-center gap-1"
                >
                  Facebook Page ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Custom Body Kits & Styling</li>
              <li>Bi-LED & Flowing DRL Lights</li>
              <li>Carbon GT Wings & Spoilers</li>
              <li>Luxury Interior Upholstery</li>
              <li>64-Color Ambient Cabin</li>
              <li>Lowering & Stance Fitment</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              Workshop
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-300 hover:text-white group"
              >
                <MapPin className="text-[#ea1c24] flex-shrink-0 mt-0.5" size={18} />
                <span>197, Hotel Suniru Lanka, Makuluwa, Galle 80000</span>
              </a>
              <a
                href="tel:+94777177452"
                className="flex items-center gap-3 text-zinc-300 hover:text-white"
              >
                <Phone className="text-[#ea1c24] flex-shrink-0" size={18} />
                <span>+94 77 717 7452</span>
              </a>
              <a
                href="mailto:info@carmate.lk"
                className="flex items-center gap-3 text-zinc-300 hover:text-white"
              >
                <Mail className="text-[#ea1c24] flex-shrink-0" size={18} />
                <span>info@carmate.lk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Carmate Modifications. All rights reserved.</p>
          <div className="flex items-center gap-3 font-semibold tracking-wider text-zinc-400">
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20discuss%20a%20vehicle%20modification."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#2ee672] text-[#05070a] font-bold p-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 flex items-center gap-2 group"
        aria-label="Chat with Carmate on WhatsApp"
      >
        <MessageCircle size={24} className="fill-current text-white" />
        <span className="hidden sm:inline-block pr-2 text-white text-xs font-bold uppercase tracking-wider">
          WhatsApp
        </span>
      </a>
    </footer>
  );
}
