"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";
import { CraftsmanshipShowcaseSection } from "@/components/ui/craftsmanship-showcase-section";
import { BuiltDifferentStatement } from "@/components/ui/built-different-statement";
import { CinematicPriusCta } from "@/components/ui/cinematic-prius-cta";

const ScrollLockedFrameHero = dynamic(
  () => import("@/components/ui/scroll-locked-frame-hero"),
  { ssr: false }
);


export default function HomePage() {
  const stats = [
    { value: 30, suffix: "+", label: "PROJECTS COMPLETED", spec: "Prius, Aqua & Civic Builds" },
    { value: 50, suffix: "+", label: "HAPPY CUSTOMERS", spec: "Southern Ceylon Atelier" },
    { value: 4, suffix: "", label: "YEARS EXPERIENCE", spec: "Makuluwa, Galle" },
  ];

  return (
    <div className="flex flex-col">
      {/* 250-Frame Scroll-Locked Hero Scrubbing Component */}
      <ScrollLockedFrameHero
        frameCount={250}
        title="PRECISION AERO. BESPOKE LIGHTING. ZERO COMPROMISE."
        scrollHint="SCRUB TO INSPECT CHASSIS & DIODE ILLUMINATION"
        tagline="Prius 30/50 Modellista conversions, Bi-LED projector retrofits & baked 2K paintwork — handcrafted in Makuluwa, Galle."
        signature={{ name: "carmate.lk", url: "https://wa.me/94777177452" }}
      />

      {/* Stats Bar with ScrollTrigger Animated Counter & Expanding Accent Line */}
      <section className="stats-bar-section bg-[#080c12] border-y border-white/10 py-10 sm:py-14 relative z-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-accent-line"></div>
          <div className="gsap-stagger grid grid-cols-3 gap-6 sm:gap-8 text-center">
            {stats.map((st) => (
              <div key={st.label} className="p-3">
                <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 flex items-center justify-center font-heading">
                  <span
                    className="gsap-stat-number text-white"
                    data-target={st.value}
                  >
                    0
                  </span>
                  <span className="text-[#ea1c24] ml-0.5">{st.suffix}</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-zinc-300 uppercase">
                  {st.label}
                </p>
                {st.spec && (
                  <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider hidden sm:block">
                    {st.spec}
                  </p>
                )}
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

      {/* Final Cinematic CTA: Dark Full-Screen Prius Shot with Headlights Ignition, YOUR CAR. YOUR STYLE. and WhatsApp Action */}
      <CinematicPriusCta />
    </div>
  );
}
