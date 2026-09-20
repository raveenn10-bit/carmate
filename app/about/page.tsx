"use client";

import { Shield, Sparkles, Award, MapPin, Phone, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "Millimeter Precision",
      desc: "Every spoiler mount, body kit seam, and optical projector is aligned with strict tolerances to ensure structural integrity and flawless symmetry.",
    },
    {
      num: "02",
      title: "Electrical Integrity",
      desc: "We prioritize safety above all: all dynamic DRLs, projectors, and ambient suites are installed with dedicated relays, fuses, and heat-shielded harnesses.",
    },
    {
      num: "03",
      title: "Personalized Craftsmanship",
      desc: "No cookie-cutter builds. We consult closely with each car owner to capture their personality through hand-selected materials and tailored finishes.",
    },
  ];

  return (
    <div className="py-24 bg-[#05070a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-8">
          <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3 block">
            Our Heritage &amp; Ethos
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Bred From Passion.<br />Crafted in Galle.
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            Operating from Makuluwa in Galle, Carmate is a passionate team of automotive styling craftsmen dedicated to transforming ordinary vehicles into extraordinary rolling art.
          </p>
        </div>

        {/* Split Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              The Carmate Philosophy
            </h2>
            <p>
              Carmate began with a simple belief: a car is never just transportation—it is a canvas for self-expression, personality, and engineering appreciation. What started as bespoke lighting experiments for enthusiasts has grown into Galle’s foremost automotive body shop.
            </p>
            <p>
              Whether it’s a high-downforce carbon GT wing on a Toyota Prius, aggressive custom bumpers on an Aqua, or a 64-color fiber-optic cabin, our team treats every project as if it were our own track machine.
            </p>
            <div className="pt-4 flex flex-wrap gap-6 text-zinc-300">
              <div className="flex items-center gap-2">
                <Users className="text-[#ea1c24]" size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">1.2K+ Community Followers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#ea1c24]" size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">197 Hotel Suniru Lanka, Makuluwa</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
            <img
              src="/assets/cac-8260-front-lights.jpg"
              alt="Carmate Workshop in Galle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Workshop Location · Makuluwa, Galle
              </p>
              <p className="text-[11px] text-zinc-400">
                English &amp; Sinhala Consultations Available
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-black uppercase text-white tracking-tight mb-12">
            Our Build Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.num}
                className="bg-[#090d14] p-8 rounded-2xl border border-white/10 hover:border-[#ea1c24]/40 transition-colors"
              >
                <div className="text-3xl font-black text-[#ea1c24] mb-4">
                  {v.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
