"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquareQuote, Check } from "lucide-react";

export default function ContactPage() {
  const [vehicle, setVehicle] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const serviceOptions = [
    "Custom Body Kit & Front Lip",
    "Carbon GT Wing & Spoilers",
    "Bi-LED Projector Retrofit",
    "Dynamic Flowing DRLs",
    "Bespoke Leather Interior",
    "64-Color Ambient Lighting",
    "Auto-Folding Mirrors",
    "Paint Correction & Blackout",
  ];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const svcs = selectedServices.length > 0 ? selectedServices.join(", ") : "General Consultation";
    const msg = `Hello Carmate!
I would like to inquire about a vehicle modification.

Vehicle: ${vehicle || "Not specified"}
Services Interested: ${svcs}
Notes/Ideas: ${notes || "None"}

Could you provide compatibility and pricing details?`;

    window.open(`https://wa.me/94777177452?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const faqs = [
    {
      q: "Where is the Carmate workshop located?",
      a: "Our workshop is located at 197, Hotel Suniru Lanka, Makuluwa, Galle 80000, Sri Lanka. You can visit us for in-person evaluations.",
    },
    {
      q: "How long does a typical body kit or lighting installation take?",
      a: "Lighting and DRL upgrades typically take 1–2 days. Complete body kits with paint matching and custom GT wings take between 3–5 working days.",
    },
    {
      q: "Do you offer consultations in Sinhala?",
      a: "Yes! Our team provides full consultations in both Sinhala (සිංහල) and English.",
    },
    {
      q: "Can I bring my own body kit or parts for installation?",
      a: "Yes, we provide professional fitment, alignment, and wiring services for customer-supplied parts as well as our own curated builds.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#05070a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 pt-6 sm:pt-8">
          <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3 block">
            Direct Quotes &amp; Location
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Contact &amp; Quotes
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
            Tell us about your vehicle and modification idea. Generate an instant custom inquiry message for our WhatsApp team.
          </p>
        </div>

        {/* Two-Column Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 sm:mb-28">
          {/* Quote Builder Form */}
          <div className="lg:col-span-7 bg-[#090d14] border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white mb-2">
              Vehicle Quote Builder
            </h2>
            <p className="text-xs text-zinc-400 mb-6 sm:mb-8">
              Select what you have in mind to construct an instant WhatsApp estimate request.
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  Your Vehicle Model &amp; Year
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Toyota Prius 30 / Aqua / Vitz / Honda Civic"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-[#121722] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ea1c24] focus:ring-1 focus:ring-[#ea1c24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  Select Desired Modifications
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {serviceOptions.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`min-h-[44px] flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-medium transition-all active:scale-98 ${
                          isSelected
                            ? "bg-[#ea1c24]/15 border-[#ea1c24] text-white"
                            : "bg-[#121722] border-white/5 text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                            isSelected
                              ? "bg-[#ea1c24] border-[#ea1c24] text-white"
                              : "border-zinc-600"
                          }`}
                        >
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="leading-tight">{svc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  Additional Notes or Specific Inspiration
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Looking for carbon rear diffuser and sequential projector DRLs like Project Red Phantom."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121722] border border-white/10 rounded-xl p-4 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ea1c24] focus:ring-1 focus:ring-[#ea1c24]"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-[#25d366] hover:bg-[#2ee672] active:bg-[#20b858] text-[#05070a] font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all active:scale-95"
              >
                <MessageSquareQuote size={18} />
                <span>Send to Carmate WhatsApp ↗</span>
              </button>
            </form>
          </div>

          {/* Workshop Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#090d14] border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-5 sm:mb-6">
                Workshop Coordinates
              </h3>
              <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#ea1c24] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-white">Carmate Modifications</h4>
                    <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">
                      197, Hotel Suniru Lanka, Makuluwa, Galle 80000, Sri Lanka
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=197%20Hotel%20Suniru%20Lanka%20Makuluwa%20Galle%20Sri%20Lanka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[38px] inline-flex items-center text-xs text-[#ea1c24] font-semibold hover:underline mt-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <Phone className="text-[#ea1c24] flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white text-xs">Direct Line</h4>
                    <a href="tel:+94777177452" className="min-h-[38px] inline-flex items-center text-zinc-300 text-xs hover:text-white">
                      +94 77 717 7452
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <Mail className="text-[#ea1c24] flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-white text-xs">Email Inquiries</h4>
                    <a href="mailto:info@carmate.lk" className="min-h-[38px] inline-flex items-center text-zinc-300 text-xs hover:text-white">
                      info@carmate.lk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#090d14] border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-4">
                Operating Hours
              </h3>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-white">8:30 AM – 6:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Sunday</span>
                  <span className="text-[#ea1c24] font-semibold">By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#090d14] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
