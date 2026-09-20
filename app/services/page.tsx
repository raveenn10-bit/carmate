"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, MessageSquareQuote, ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
}

const MagneticButton = ({ children, href }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a ref={buttonRef} href={href} target="_blank" rel="noopener noreferrer" className="inline-block relative">
      {children}
    </a>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 400 && currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#ea1c24] text-white flex items-center justify-center shadow-[0_0_20px_rgba(234,28,36,0.4)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      } hover:bg-[#ff2d36] hover:scale-110 active:scale-95`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power3.out", transformOrigin: "left center", delay: 0.2 }
      );

      const titleElements = document.querySelectorAll(".stagger-title");
      titleElements.forEach((el) => {
        if (el.textContent) {
          const text = el.textContent.trim();
          el.textContent = "";
          text.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.opacity = "0";
            span.style.display = "inline-block";
            el.appendChild(span);
          });

          gsap.to((el as HTMLElement).children, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            yFrom: 20,
            stagger: 0.03,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });

      const serviceRows = document.querySelectorAll(".service-row");
      serviceRows.forEach((row, index) => {
        const isEven = index % 2 === 1;
        const imgContainer = row.querySelector(".service-img-container");
        const listItems = row.querySelectorAll("li");

        if (imgContainer) {
          gsap.fromTo(
            imgContainer,
            { clipPath: isEven ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0%)",
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
              },
            }
          );
        }

        if (listItems.length) {
          gsap.fromTo(
            listItems,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
              },
            }
          );
        }
      });

      const packageCols = document.querySelectorAll(".package-col");
      gsap.fromTo(
        packageCols,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".packages-section",
            start: "top 70%",
          },
        }
      );

      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#05070a] text-white min-h-screen relative font-sans">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">— 02 / SERVICES</p>
              <div className="relative inline-block">
                <h1 className="stagger-title text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter leading-none">
                  SERVICES
                </h1>
                <div className="hero-line absolute -bottom-2 md:-bottom-3 left-0 h-1.5 md:h-2 bg-[#ea1c24] w-full origin-left" />
              </div>
            </div>
            <p className="max-w-md text-sm text-zinc-400 leading-relaxed md:text-right">
              From subtle styling enhancements to complete ground-up automotive transformations, every build at Carmate is executed with millimeter precision.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
            {["ALL", "AERO", "LIGHTING", "INTERIOR", "RACE", "ELECTRICAL", "PAINT"].map(tab => (
              <button key={tab} className="text-xs font-mono tracking-widest text-zinc-500 hover:text-white transition-colors uppercase cursor-pointer">
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {serviceList.map((svc, idx) => {
            const isEven = idx % 2 === 1; // 1, 3, 5 are right-side images
            return (
              <div key={svc.title} className={`service-row flex flex-col gap-8 md:gap-16 ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
                {/* Image */}
                <div className="w-full md:w-[40%]">
                  <div className="service-img-container relative aspect-[4/5] overflow-hidden rounded-sm bg-[#090d14]">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[60%] flex flex-col justify-center">
                  <div className="relative mb-8 md:mb-10 inline-block overflow-hidden">
                    <div className="text-transparent text-5xl md:text-7xl font-black uppercase tracking-tighter opacity-20 select-none whitespace-nowrap" style={{ WebkitTextStroke: '1px #ffffff' }}>
                      {svc.category}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white -mt-5 md:-mt-8 relative z-10 leading-none">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl mb-10">
                    {svc.desc}
                  </p>

                  <ul className="space-y-5 mb-12">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-4 text-zinc-200 font-medium text-sm md:text-base">
                        <div className="w-6 h-6 rounded-full bg-[#ea1c24]/10 flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-[#ea1c24]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <MagneticButton href={`https://wa.me/94777177452?text=${encodeURIComponent(`Hello Carmate! I would like to ask about ${svc.title} for my vehicle.`)}`}>
                    <span className="flex items-center justify-center gap-3 bg-[#ea1c24] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#ff2d36] transition-colors w-max shadow-[0_0_20px_rgba(234,28,36,0.3)]">
                      <MessageSquareQuote size={16} />
                      Consult on WhatsApp
                    </span>
                  </MagneticButton>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden flex z-0 opacity-[0.03] select-none pointer-events-none">
          <div className="marquee-inner flex whitespace-nowrap w-max">
            <span className="text-[15vw] font-black tracking-widest text-white pr-8">STAGE 01 &middot; STAGE 02 &middot; STAGE 03 &middot;</span>
            <span className="text-[15vw] font-black tracking-widest text-white pr-8">STAGE 01 &middot; STAGE 02 &middot; STAGE 03 &middot;</span>
            <span className="text-[15vw] font-black tracking-widest text-white pr-8">STAGE 01 &middot; STAGE 02 &middot; STAGE 03 &middot;</span>
            <span className="text-[15vw] font-black tracking-widest text-white pr-8">STAGE 01 &middot; STAGE 02 &middot; STAGE 03 &middot;</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="stagger-title text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Build Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#090d14]/80 border border-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`package-col p-8 md:p-12 relative flex flex-col ${
                  pkg.featured ? "border-l-[4px] border-[#ea1c24] bg-gradient-to-b from-[#ea1c24]/10 to-transparent shadow-[0_0_50px_-12px_rgba(234,28,36,0.3)] z-10 lg:scale-[1.03] lg:-mx-2 rounded-xl" : "border-l border-white/5 lg:my-4"
                } ${idx === 0 ? "border-l-0" : ""}`}
              >
                <div className="mb-6">
                  <span className="text-[#ea1c24] text-xs font-bold tracking-widest uppercase mb-3 block">
                    {pkg.badge} &mdash; {pkg.price}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">{pkg.name}</h3>
                </div>
                <p className="text-sm text-zinc-400 mb-8 min-h-[40px] leading-relaxed">
                  {pkg.desc}
                </p>
                <ul className="flex-1 space-y-4 mb-10">
                  {pkg.includes.map(inc => (
                    <li key={inc} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                      <Check size={16} className="text-[#ea1c24] flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/94777177452?text=${encodeURIComponent(`Hello Carmate! I am interested in the ${pkg.name} package for my car.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm transition-all ${
                    pkg.featured
                      ? "bg-[#ea1c24] text-white shadow-[0_0_20px_rgba(234,28,36,0.3)] hover:bg-[#ff2d36]"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Book Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
