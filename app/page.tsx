"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";
import { ArrowRight, Flame, Star } from "lucide-react";

const ScrollLockedFrameHero = dynamic(
  () => import("@/components/ui/scroll-locked-frame-hero"),
  { ssr: false }
);

const TransformationSlider = dynamic(
  () => import("@/components/ui/transformation-slider").then((m) => m.TransformationSlider),
  { ssr: false }
);

export default function HomePage() {
  const stats = [
    { value: 500, suffix: "+", label: "PROJECTS COMPLETED" },
    { value: 1200, suffix: "+", label: "HAPPY CUSTOMERS" },
    { value: 5, suffix: "+", label: "YEARS EXPERIENCE" },
    { value: 15, suffix: "+", label: "SPECIALIZED SERVICES" },
  ];

  const services = [
    {
      title: "Aerodynamic Body Kits",
      desc: "Custom front & rear bumpers, side splitters, and high-downforce GT wings tailored to your chassis.",
      img: "/assets/carmate-project-1.jpg",
      tag: "STYLING",
    },
    {
      title: "Precision Lighting & DRL",
      desc: "Bi-LED projector retrofits, app-controlled multi-color RGB DRLs, and dynamic sequential signal flows.",
      img: "/assets/cac-8260-front-lights.jpg",
      tag: "LIGHTING",
    },
    {
      title: "Custom Cockpit & Trim",
      desc: "Hand-stitched leather steering wheels, 64-color fiber-optic cabin ambience, and diamond upholstery.",
      img: "/assets/black-beast-front.webp",
      tag: "INTERIOR",
    },
  ];

  const testimonialsRow1 = [
    {
      quote: "Carmate transformed my Civic beyond anything I imagined. The body kit fits millimeter-perfect and the attention to detail is incredible.",
      name: "Nuwan K.",
      role: "Honda Civic Custom Spec",
      rating: 5,
    },
    {
      quote: "The DRL and lighting upgrade made my car look like a completely different vehicle. Professional work and fair pricing in Galle.",
      name: "Sahan P.",
      role: "Toyota Axio SP Owner",
      rating: 5,
    },
    {
      quote: "Best automotive body shop in the Southern Province! The carbon aero wing and custom diffuser completely transformed the car's highway presence.",
      name: "Dinesh F.",
      role: "Suzuki Swift Track Spec",
      rating: 5,
    },
    {
      quote: "Carmate transformed my Civic beyond anything I imagined. The body kit fits millimeter-perfect and the attention to detail is incredible.",
      name: "Nuwan K.",
      role: "Honda Civic Custom Spec",
      rating: 5,
    },
    {
      quote: "The DRL and lighting upgrade made my car look like a completely different vehicle. Professional work and fair pricing in Galle.",
      name: "Sahan P.",
      role: "Toyota Axio SP Owner",
      rating: 5,
    },
    {
      quote: "Best automotive body shop in the Southern Province! The carbon aero wing and custom diffuser completely transformed the car's highway presence.",
      name: "Dinesh F.",
      role: "Suzuki Swift Track Spec",
      rating: 5,
    },
  ];

  const testimonialsRow2 = [
    {
      quote: "The interior ambient lighting they installed is stunning. My friends can't believe it's the same car. 64 colors with smartphone control!",
      name: "Amaya M.",
      role: "Nissan March Custom Client",
      rating: 5,
    },
    {
      quote: "From start to finish, the Carmate team was professional and passionate. My Prius looks absolutely aggressive and clean now.",
      name: "Ravindu P.",
      role: "Prius Custom Build Owner",
      rating: 5,
    },
    {
      quote: "I got the full package — body kit, RGB lights, and interior cockpit upholstery. Worth every rupee. Carmate is the real deal.",
      name: "Kasun Jayasuriya",
      role: "Honda Fit Full Build",
      rating: 5,
    },
    {
      quote: "The interior ambient lighting they installed is stunning. My friends can't believe it's the same car. 64 colors with smartphone control!",
      name: "Amaya M.",
      role: "Nissan March Custom Client",
      rating: 5,
    },
    {
      quote: "From start to finish, the Carmate team was professional and passionate. My Prius looks absolutely aggressive and clean now.",
      name: "Ravindu P.",
      role: "Prius Custom Build Owner",
      rating: 5,
    },
    {
      quote: "I got the full package — body kit, RGB lights, and interior cockpit upholstery. Worth every rupee. Carmate is the real deal.",
      name: "Kasun Jayasuriya",
      role: "Honda Fit Full Build",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 250-Frame Scroll-Locked Hero Scrubbing Component */}
      <ScrollLockedFrameHero
        frameCount={250}
        title="TRANSFORMING CARS INTO PERSONALIZED MASTERPIECES"
        scrollHint="SCROLL TO SCRUB CARMATE DIODES"
        tagline="At Carmate we're passionate about transforming cars into personalized masterpieces!"
        signature={{ name: "carmate.lk", url: "https://wa.me/94777177452" }}
      />

      {/* Stats Bar with ScrollTrigger Animated Counter & Expanding Accent Line */}
      <section className="stats-bar-section bg-[#080c12] border-y border-white/10 py-10 sm:py-14 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-accent-line"></div>
          <div className="gsap-stagger grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((st) => (
              <div key={st.label} className="p-3">
                <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 flex items-center justify-center">
                  <span
                    className="gsap-stat-number text-white"
                    data-target={st.value}
                  >
                    0
                  </span>
                  <span className="text-[#ea1c24] ml-0.5">{st.suffix}</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-zinc-400 uppercase">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passion & Craftsmanship Highlights with GSAP Split-Heading & Clip-Reveal */}
      <section className="py-16 sm:py-24 bg-[#05070a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="gsap-fade-up inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3">
              <Flame size={14} />
              <span>Automotive Body Shop · Makuluwa, Galle</span>
            </div>
            <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              Pure Passion. Precision Execution.
            </h2>
            <p className="gsap-fade-in-out text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
              At Carmate we're passionate about transforming cars into personalized masterpieces! Whether you're looking to enhance performance, elevate style, or customize your ride to reflect your unique taste, we've got you covered.
            </p>
          </div>

          {/* 3 Featured Build Cards with GSAP Clip-Reveal & Stagger */}
          <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group relative bg-[#090d14] rounded-2xl overflow-hidden border border-white/10 hover:border-[#ea1c24]/50 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="gsap-clip-reveal relative h-52 sm:h-64 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-black/30 pointer-events-none" />
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest text-white bg-[#ea1c24] px-3 py-1 rounded-full shadow-md z-10">
                    {svc.tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#ea1c24] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                      {svc.desc}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#ea1c24] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Interactive Transformation Slider with GSAP Entrance */}
      <section className="py-16 sm:py-24 bg-[#070a0f] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gsap-fade-in-out text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2 block">
              Interactive Comparison
            </span>
            <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-3">
              See the Transformation
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Drag the center slider horizontally to compare factory OEM styling with Carmate's custom aero &amp; lighting build.
            </p>
          </div>

          <div className="gsap-fade-up max-w-4xl mx-auto">
            <TransformationSlider />
          </div>
        </div>
      </section>

      {/* Project Albums Section */}
      <ProjectAlbumsSection />

      {/* 9:16 Video Reels Section */}
      <VideoReelsSection />

      {/* Testimonials with Dual Infinite GSAP Marquee Motion */}
      <section className="py-16 sm:py-24 bg-[#05070a] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
          <span className="gsap-fade-up text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2 block">
            Client Feedback
          </span>
          <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            Trusted by Sri Lanka’s Enthusiasts
          </h2>
          <p className="gsap-fade-in-out text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-3">
            Real stories and verified experiences from drivers across Sri Lanka who trusted Carmate with their builds.
          </p>
        </div>

        {/* Dual Infinite Scrolling Marquee Rows */}
        <div className="marquee-wrapper">
          {/* Row 1: Leftward sliding */}
          <div className="marquee-row gsap-marquee-1">
            {testimonialsRow1.map((t, idx) => (
              <div
                key={`r1-${idx}`}
                className="testimonial-card-marquee flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#ea1c24] mb-3 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#ea1c24" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-5">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ea1c24]/20 border border-[#ea1c24]/40 flex items-center justify-center font-bold text-white text-xs flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">{t.name}</h4>
                    <p className="text-[11px] text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Rightward sliding */}
          <div className="marquee-row gsap-marquee-2">
            {testimonialsRow2.map((t, idx) => (
              <div
                key={`r2-${idx}`}
                className="testimonial-card-marquee flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#ea1c24] mb-3 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#ea1c24" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-5">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ea1c24]/20 border border-[#ea1c24]/40 flex items-center justify-center font-bold text-white text-xs flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">{t.name}</h4>
                    <p className="text-[11px] text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action with GSAP Fade-In-Out Entrance */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#070a0f] to-[#05070a] border-t border-white/10 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mb-4 leading-tight">
            Ready to Build Your Masterpiece?
          </h2>
          <p className="gsap-fade-in-out text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us your vehicle model and photos on WhatsApp to get instant consultation, compatibility checks, and pricing.
          </p>
          <div className="gsap-fade-up flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center bg-[#ea1c24] hover:bg-[#ff2d36] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(234,28,36,0.4)] transition-all active:scale-95 text-center"
            >
              Calculate Quote ↗
            </Link>
            <a
              href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20consult%20about%20a%20build."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full border border-white/15 transition-all active:scale-95 text-center"
            >
              WhatsApp Us: 077 717 7452
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
