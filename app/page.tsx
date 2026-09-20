"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { StatsSection } from "@/components/ui/stats-section";
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
  return (
    <div className="relative w-full">
      {/* 250-Frame Scroll-Locked Hero Scrubbing Component */}
      <ScrollLockedFrameHero
        frameCount={250}
        title="PRECISION AERO. BESPOKE LIGHTING. ZERO COMPROMISE."
        scrollHint="SCRUB TO INSPECT CHASSIS & DIODE ILLUMINATION"
        tagline="Prius 30/50 Modellista conversions, Bi-LED projector retrofits & baked 2K paintwork — handcrafted in Makuluwa, Galle."
        signature={{ name: "carmate.lk", url: "https://wa.me/94777177452" }}
      />

      {/* Standalone Stats Section with Bounce Animations */}
      <StatsSection />

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
