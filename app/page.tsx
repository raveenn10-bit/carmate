"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";
import { CraftsmanshipShowcaseSection } from "@/components/ui/craftsmanship-showcase-section";
import { BuiltDifferentStatement } from "@/components/ui/built-different-statement";
import { CinematicPriusCta } from "@/components/ui/cinematic-prius-cta";
import { Star } from "lucide-react";

const ScrollLockedFrameHero = dynamic(
  () => import("@/components/ui/scroll-locked-frame-hero"),
  { ssr: false }
);


export default function HomePage() {
  const stats = [
    { value: 30, suffix: "+", label: "PROJECTS COMPLETED" },
    { value: 50, suffix: "+", label: "HAPPY CUSTOMERS" },
    { value: 4, suffix: "+", label: "YEARS EXPERIENCE" },
    { value: 15, suffix: "+", label: "SPECIALIZED SERVICES" },
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

      {/* Second Section: Craftsmanship & Pure Passion Showcase (Spyker-Style Asymmetric 3-Video ScrollTrigger Parallax) */}
      <CraftsmanshipShowcaseSection />

      {/* Standalone Cinematic Statement: BUILT DIFFERENT. (3D Kinetic Typography & Parallax Car Layering) */}
      <BuiltDifferentStatement />

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

      {/* Final Cinematic CTA: Dark Full-Screen Prius Shot with Headlights Ignition, YOUR CAR. YOUR STYLE. and WhatsApp Action */}
      <CinematicPriusCta />
    </div>
  );
}
