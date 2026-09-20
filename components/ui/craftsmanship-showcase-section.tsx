"use client";

import * as React from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CraftsmanshipShowcaseSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const card1Ref = React.useRef<HTMLDivElement>(null);
  const card2Ref = React.useRef<HTMLDivElement>(null);
  const card3Ref = React.useRef<HTMLDivElement>(null);

  const video1Ref = React.useRef<HTMLVideoElement>(null);
  const video2Ref = React.useRef<HTMLVideoElement>(null);
  const video3Ref = React.useRef<HTMLVideoElement>(null);

  const [mutedStates, setMutedStates] = React.useState({
    v1: true,
    v2: true,
    v3: true,
  });

  const toggleMute = (key: "v1" | "v2" | "v3", videoEl: HTMLVideoElement | null) => {
    if (!videoEl) return;
    const newMuted = !videoEl.muted;
    videoEl.muted = newMuted;
    setMutedStates((prev) => ({ ...prev, [key]: newMuted }));
  };

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Autoplay all videos
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    videos.forEach((v) => {
      if (v) {
        v.play().catch(() => {});
      }
    });

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Zoom & Parallax on Video 1
      if (card1Ref.current && video1Ref.current) {
        gsap.fromTo(
          card1Ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          video1Ref.current,
          { scale: 1.18 },
          {
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: card1Ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // Zoom & Parallax on Video 2
      if (card2Ref.current && video2Ref.current) {
        gsap.fromTo(
          card2Ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          video2Ref.current,
          { scale: 1.18 },
          {
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: card2Ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // Zoom & Parallax on Video 3
      if (card3Ref.current && video3Ref.current) {
        gsap.fromTo(
          card3Ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card3Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          video3Ref.current,
          { scale: 1.18 },
          {
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: card3Ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#05070a] text-white py-20 sm:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ea1c24]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Section: Matching Spyker Cars Minimalist Layout */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#ea1c24] uppercase mb-3 flex items-center gap-2">
            <Sparkles size={13} />
            THE MAKING OF
          </span>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            PURE PASSION
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            The bespoke craft of Carmate was born from a circle of dedicated automotive artisans, fabricators, and aerodynamic perfectionists. United around one conviction: to sculpt Sri Lanka’s most striking, aggressive, and individualized road builds.
          </p>
        </div>

        {/* Asymmetrical Staggered Video Grid (Spyker-Inspired) */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Card 1: Top Right Vertical / Portrait */}
          <div
            ref={card1Ref}
            className="w-full lg:w-[48%] lg:ml-auto max-w-xl group"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ea1c24]/40 transition-colors">
              <video
                ref={video1Ref}
                src="/assets/showcase-video-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Sound Toggle Button */}
              <button
                onClick={() => toggleMute("v1", video1Ref.current)}
                className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] transition-all shadow-md active:scale-95"
                aria-label="Toggle sound for video 1"
              >
                {mutedStates.v1 ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  01 / AERO ARCHITECTURE
                </span>
              </div>
            </div>
            <div className="mt-4 sm:mt-5 max-w-md">
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Sculpted aero dynamics, custom splitters, and carbon GT wings crafted to reduce weight without sacrificing aerodynamic downforce. On the road, air intakes, pedestals, and glides are designed to optimize air stream.
              </p>
            </div>
          </div>

          {/* Card 2: Middle Left Wide / Cinematic */}
          <div
            ref={card2Ref}
            className="w-full lg:w-[52%] lg:mr-auto max-w-2xl group"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ea1c24]/40 transition-colors">
              <video
                ref={video2Ref}
                src="/assets/showcase-video-2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Sound Toggle Button */}
              <button
                onClick={() => toggleMute("v2", video2Ref.current)}
                className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] transition-all shadow-md active:scale-95"
                aria-label="Toggle sound for video 2"
              >
                {mutedStates.v2 ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  02 / PRECISION OPTICS
                </span>
              </div>
            </div>
            <div className="mt-4 sm:mt-5 max-w-md">
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Bi-LED projector retrofits with app-controlled multi-color RGB halos and animated flowing DRL light bars engineered to carve through the night with unmatched presence.
              </p>
            </div>
          </div>

          {/* Card 3: Bottom Right / Center Large Cinematic */}
          <div
            ref={card3Ref}
            className="w-full lg:w-[58%] lg:ml-[34%] max-w-3xl group"
          >
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#ea1c24]/40 transition-colors">
              <video
                ref={video3Ref}
                src="/assets/showcase-video-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Sound Toggle Button */}
              <button
                onClick={() => toggleMute("v3", video3Ref.current)}
                className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] transition-all shadow-md active:scale-95"
                aria-label="Toggle sound for video 3"
              >
                {mutedStates.v3 ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  03 / BESPOKE COCKPIT & STANCE
                </span>
              </div>
            </div>
            <div className="mt-4 sm:mt-5 max-w-lg">
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Hand-stitched leather appointments, precision panel alignment, custom exhaust tips, and 64-color fiber-optic cabin illumination engineered to reflect the driver's pure individuality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
