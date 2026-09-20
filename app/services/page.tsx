"use client";

import Link from "next/link";
import { Check, ArrowRight, MessageSquareQuote } from "lucide-react";

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Aerodynamic Body Kits & Bumpers",
      category: "AERO STYLING",
      img: "/assets/carmate-project-1.jpg",
      desc: "Front and rear bumper replacements, aerodynamic side skirts, widebody fenders, and custom front splitters engineered for aggressive street stance.",
      features: [
        "High-grade lightweight fiber composite",
        "Factory mounting alignment & seamless gaps",
        "Front splitters with downforce tie-rods",
        "Rear diffusers with vertical fins",
      ],
    },
    {
      title: "Bi-LED & Dynamic Lighting Solutions",
      category: "LIGHTING DYNAMICS",
      img: "/assets/cac-8260-front-lights.jpg",
      desc: "Custom daytime running lights, projector headlight upgrades, smartphone app-controlled RGB multi-color sequences, and fog projector retrofits.",
      features: [
        "Bi-LED high-output optical projectors",
        "Dynamic flowing turn signals",
        "Bluetooth app color & rhythm controls",
        "Moisture-sealed optical housings",
      ],
    },
    {
      title: "Custom Cockpit & Upholstery",
      category: "INTERIOR ARCHITECTURE",
      img: "/assets/interior/606076893_122172084434392102_6626188684078899595_n.jpg",
      desc: "Complete cabin transformations: custom leather seat sets with diamond stitching, steering wheel leather wraps, and 64-color ambient cabin illumination.",
      features: [
        "Handcrafted premium automotive leather",
        "Contrast racing stitching (red/silver)",
        "64-color fiber-optic ambient cabin suite",
        "Precision door panel & console trimming",
      ],
    },
    {
      title: "High-Mount Carbon GT Wings",
      category: "RACE ENGINEERING",
      img: "/assets/carmate-project-1.jpg",
      desc: "High-downforce carbon fiber rear spoilers, swan-neck mounts, and ducktail trunk lips to elevate both aerodynamics and high-speed stability.",
      features: [
        "3D real carbon weave finish",
        "CNC aluminum mounting uprights",
        "Multi-angle adjustable blade rake",
        "Chassis-reinforced backing plates",
      ],
    },
    {
      title: "Auto-Folding Mirrors & Electrical",
      category: "CONVENIENCE SYSTEMS",
      img: "/assets/carmate-project-3.jpg",
      desc: "Smart key lock-linked auto-folding side mirrors, welcome lighting, sequential mirror indicators, and custom switchgear integration.",
      features: [
        "OEM harness plug-and-play wiring",
        "Lock/unlock automatic motor fold",
        "Integrated LED arrow indicators",
        "Dash override button setup",
      ],
    },
    {
      title: "Paint Correction & Ceramic Protection",
      category: "BODY SHOP & FINISH",
      img: "/assets/carmate-project-2.jpg",
      desc: "Precision touch-up paint matching, gloss black blackout packages, debadging, and deep paint correction for flawless mirror reflections.",
      features: [
        "Automotive color code spectrometer matching",
        "Multi-stage machine paint correction",
        "Ceramic surface sealing & hydrophobic coat",
        "Piano black chrome-delete packages",
      ],
    },
  ];

  const packages = [
    {
      name: "Street Spec",
      badge: "ESSENTIAL",
      price: "Stage 1",
      desc: "Ideal for daily drivers seeking a sharper stance and modern lighting profile.",
      includes: [
        "Front aero lip kit",
        "Dynamic sequential DRLs",
        "Auto-folding mirror upgrade",
        "Smoked tail lamp accents",
        "Basic paint touch-up",
      ],
    },
    {
      name: "Apex Aero",
      badge: "MOST POPULAR",
      price: "Stage 2",
      featured: true,
      desc: "Complete exterior makeover with downforce aerodynamics and custom projector lighting.",
      includes: [
        "Full body kit (front, skirts, rear)",
        "High-mount Carbon GT wing",
        "Bi-LED RGB app-controlled projectors",
        "Rear diffuser with vertical LED strobes",
        "Chrome-delete gloss blackout package",
        "Full vehicle machine polish",
      ],
    },
    {
      name: "Carmate Masterpiece",
      badge: "FLAGSHIP",
      price: "Stage 3",
      desc: "The pinnacle of bespoke craftsmanship: ground-up exterior styling and handcrafted cabin.",
      includes: [
        "Custom widebody & aero package",
        "Complete bespoke leather interior suite",
        "64-color fiber-optic ambient cabin",
        "Custom steering wheel wrap & console",
        "Dual exhaust & sound calibration",
        "Full ceramic hydrophobic protection",
        "Exclusive Carmate serialized badging",
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#05070a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 pt-6 sm:pt-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Modification Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
            From subtle styling enhancements to complete ground-up automotive transformations, every build at Carmate is executed with millimeter precision and true automotive passion in Makuluwa, Galle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {serviceList.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#090d14] border border-white/10 hover:border-[#ea1c24]/50 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  {svc.category}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check size={14} className="text-[#ea1c24] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`https://wa.me/94777177452?text=${encodeURIComponent(
                    `Hello Carmate! I would like to ask about ${svc.title} for my vehicle.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] bg-white/10 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95"
                >
                  <MessageSquareQuote size={16} />
                  <span>Consult on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modification Package Tiers */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2 block">
              Curated Packages
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-3">
              Build Packages
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Select an all-in-one package or customize each individual item to suit your exact vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-[#090d14] rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.featured
                    ? "border-[#ea1c24] shadow-[0_0_35px_rgba(234,28,36,0.25)] md:scale-105 bg-[#0e131d] my-2 md:my-0"
                    : "border-white/10"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ea1c24] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white">{pkg.name}</h3>
                    <span className="text-xs font-bold text-[#ea1c24] uppercase tracking-wider">{pkg.price}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-6">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <span className="text-[#ea1c24] font-bold">▸</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/94777177452?text=${encodeURIComponent(
                    `Hello Carmate! I am interested in the ${pkg.name} package for my car.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full min-h-[48px] flex items-center justify-center text-center font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all active:scale-95 ${
                    pkg.featured
                      ? "bg-[#ea1c24] hover:bg-[#ff2d36] text-white shadow-lg"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Book Package Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
