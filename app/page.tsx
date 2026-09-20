"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";
import { CraftsmanshipShowcaseSection } from "@/components/ui/craftsmanship-showcase-section";
import { BuiltDifferentStatement } from "@/components/ui/built-different-statement";
import { CinematicPriusCta } from "@/components/ui/cinematic-prius-cta";
import { SriLankanFeedbackSection } from "@/components/ui/sri-lankan-feedback-section";

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

      {/* Authentic Sri Lankan Customer Feedback Section (Google, WhatsApp, FB Reviews with Filtered Categories) */}
      <SriLankanFeedbackSection />

      {/* Final Cinematic CTA: Dark Full-Screen Prius Shot with Headlights Ignition, YOUR CAR. YOUR STYLE. and WhatsApp Action */}
      <CinematicPriusCta />
    </div>
  );
}
