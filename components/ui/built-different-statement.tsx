"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BuiltDifferentStatement() {
  const containerRef = React.useRef<HTMLElement>(null);
  const pinWrapperRef = React.useRef<HTMLDivElement>(null);
  
  // Animated text layers
  const builtTextRef = React.useRef<HTMLHeadingElement>(null);
  const differentTextRef = React.useRef<HTMLHeadingElement>(null);
  const kineticRow1Ref = React.useRef<HTMLDivElement>(null);
  const kineticRow2Ref = React.useRef<HTMLDivElement>(null);
  
  // Car & foreground elements
  const carWrapperRef = React.useRef<HTMLDivElement>(null);
  const carImageRef = React.useRef<HTMLImageElement>(null);
  const supportingTextRef = React.useRef<HTMLDivElement>(null);
  const techLinesRef = React.useRef<HTMLDivElement>(null);
  
  // Magnetic hover badge / cursor
  const cursorBadgeRef = React.useRef<HTMLDivElement>(null);
  const [isHoveringCar, setIsHoveringCar] = React.useState(false);

  // Custom magnetic cursor movement (Desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cursorBadgeRef.current || window.innerWidth < 1024) return;
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    gsap.to(cursorBadgeRef.current, {
      x,
      y,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current || !pinWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Create scrubbed pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "carmate-built-different",
          trigger: containerRef.current,
          start: "top top",
          end: "+=160%", // pinned distance for smooth cinematic scrub
          pin: pinWrapperRef.current,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Initial lock-in phase (0% - 40%)
      tl.fromTo(
        builtTextRef.current,
        { xPercent: -50, opacity: 0.1 },
        { xPercent: 0, opacity: 1, ease: "power2.out" },
        0
      )
        .fromTo(
          differentTextRef.current,
          { xPercent: 50, opacity: 0.1 },
          { xPercent: 0, opacity: 1, ease: "power2.out" },
          0
        )
        .fromTo(
          carWrapperRef.current,
          { clipPath: "inset(20% 15% 20% 15%)", scale: 1.12, opacity: 0.4 },
          { clipPath: "inset(0% 0% 0% 0%)", scale: 1.0, opacity: 1, ease: "power2.out" },
          0
        )
        .fromTo(
          kineticRow1Ref.current,
          { xPercent: 15, opacity: 0.05 },
          { xPercent: -15, opacity: 0.15, ease: "none" },
          0
        )
        .fromTo(
          kineticRow2Ref.current,
          { xPercent: -15, opacity: 0.05 },
          { xPercent: 15, opacity: 0.15, ease: "none" },
          0
        )
        .fromTo(
          techLinesRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, ease: "power2.out" },
          0.1
        )
        .fromTo(
          supportingTextRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          0.2
        );

      // 2. Parallax deep drift while pinned (40% - 80%)
      tl.to(
        builtTextRef.current,
        { xPercent: 12, ease: "none" },
        0.4
      )
        .to(
          differentTextRef.current,
          { xPercent: -12, ease: "none" },
          0.4
        )
        .to(
          carImageRef.current,
          { yPercent: -6, scale: 1.03, ease: "none" },
          0.4
        )
        .to(
          kineticRow1Ref.current,
          { xPercent: -35, ease: "none" },
          0.4
        )
        .to(
          kineticRow2Ref.current,
          { xPercent: 35, ease: "none" },
          0.4
        );

      // 3. Cinematic transition out (80% - 100%)
      tl.to(
        builtTextRef.current,
        { yPercent: -25, opacity: 0.4, ease: "power1.in" },
        0.8
      )
        .to(
          differentTextRef.current,
          { yPercent: 25, opacity: 0.4, ease: "power1.in" },
          0.8
        )
        .to(
          carWrapperRef.current,
          { scale: 1.06, opacity: 0.7, ease: "power1.in" },
          0.8
        )
        .to(
          supportingTextRef.current,
          { opacity: 0.3, y: -20, ease: "power1.in" },
          0.8
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#030508] text-white w-full overflow-hidden border-t border-b border-white/10 select-none"
      style={{ minHeight: "100vh" }}
    >
      {/* Pinned Viewport Frame */}
      <div
        ref={pinWrapperRef}
        className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-12 py-10 sm:py-14"
      >
        {/* Ambient Dark Automotive Lighting & Ground Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-[#ea1c24]/[0.035] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent" />
        </div>

        {/* LAYER 0: Kinetic Background Typography (Oversized, Drifting Horizontally) */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-around overflow-hidden z-0 opacity-15">
          <div
            ref={kineticRow1Ref}
            className="whitespace-nowrap font-black uppercase text-[12vw] sm:text-[10vw] tracking-tighter leading-none text-zinc-700/40 select-none will-change-transform"
            style={{
              fontFamily: "'Oswald', 'Barlow Condensed', sans-serif",
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              color: "transparent",
            }}
          >
            PERFORMANCE • PRECISION • IDENTITY • AERODYNAMICS • PERFORMANCE • PRECISION
          </div>
          <div
            ref={kineticRow2Ref}
            className="whitespace-nowrap font-black uppercase text-[12vw] sm:text-[10vw] tracking-tighter leading-none text-zinc-700/40 select-none will-change-transform"
            style={{
              fontFamily: "'Oswald', 'Barlow Condensed', sans-serif",
              WebkitTextStroke: "1px rgba(234,28,36,0.25)",
              color: "transparent",
            }}
          >
            ENGINEERED TO STAND OUT • BESPOKE CULTURE • COMMAND THE ROAD • 2026 SPEC
          </div>
        </div>

        {/* Top Telemetry & Small Technical Label */}
        <div className="relative z-30 w-full flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-pulse" />
            <span className="text-zinc-400 font-bold">CARMATE / MODIFICATION CULTURE / 2026</span>
          </div>
          <div className="hidden sm:block text-zinc-500">
            ENGINEERED TO STAND OUT
          </div>
        </div>

        {/* CENTER STAGE: Deep 3D Composition (Typography Behind → Vehicle → Foreground Typography) */}
        <div className="relative z-10 my-auto w-full flex flex-col items-center justify-center">
          {/* LAYER 1: Massive Typography "BUILT" (Behind vehicle on Desktop) */}
          <div className="w-full flex justify-start lg:pl-[6vw]">
            <h2
              ref={builtTextRef}
              className="text-[20vw] sm:text-[18vw] lg:text-[17vw] font-black uppercase tracking-tighter leading-[0.82] text-white will-change-transform drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Oswald', 'Barlow Condensed', sans-serif" }}
            >
              BUILT
            </h2>
          </div>

          {/* LAYER 2: High-Quality Modified Vehicle (Studio Presentation with Depth Overlap) */}
          <div
            ref={carWrapperRef}
            onMouseEnter={() => setIsHoveringCar(true)}
            onMouseLeave={() => setIsHoveringCar(false)}
            className="relative -my-[8vw] sm:-my-[10vw] lg:-my-[12vw] z-20 w-[92%] sm:w-[80%] lg:w-[64%] max-w-4xl cursor-pointer will-change-transform"
          >
            <Link href="/gallery" className="block focus:outline-none" aria-label="View build in gallery">
              {/* Under-chassis shadow & ambient red floor glow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/90 blur-xl rounded-full" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-[#ea1c24]/20 blur-lg rounded-full" />

              <img
                ref={carImageRef}
                src="/assets/black-beast-front.webp"
                alt="Carmate Bespoke Custom Modified Prius Build"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* LAYER 3: Massive Typography "DIFFERENT." (Overlapping / in front of chassis) */}
          <div className="w-full flex justify-end lg:pr-[6vw] relative z-25">
            <h2
              ref={differentTextRef}
              className="text-[17vw] sm:text-[16vw] lg:text-[15vw] font-black uppercase tracking-tighter leading-[0.82] text-transparent bg-clip-text bg-gradient-to-r from-[#ea1c24] via-[#ff3b44] to-[#ea1c24] will-change-transform drop-shadow-[0_0_35px_rgba(234,28,36,0.45)]"
              style={{
                fontFamily: "'Oswald', 'Barlow Condensed', sans-serif",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              }}
            >
              DIFFERENT.
            </h2>
          </div>
        </div>

        {/* BOTTOM FOREGROUND: Supporting Line, Secondary Text & Technical Rules */}
        <div className="relative z-30 w-full max-w-7xl mx-auto">
          {/* Technical Accent Decorative Line */}
          <div
            ref={techLinesRef}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ea1c24]/60 to-transparent mb-6 origin-center will-change-transform"
          />

          <div
            ref={supportingTextRef}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 text-left will-change-transform"
          >
            {/* Supporting Line */}
            <div className="space-y-1.5 max-w-md">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#ea1c24] block">
                PRECISION • PERFORMANCE • PERSONALITY
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                We don’t just modify cars.
                <br className="hidden sm:inline" />
                We transform the way they feel, look and command the road.
              </p>
            </div>

            {/* Quick Link Action */}
            <div className="flex items-center gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-[#ea1c24] border border-white/15 hover:border-[#ea1c24] text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md group"
              >
                <span>Explore Builds</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Magnetic Cursor Hover Badge */}
        <div
          ref={cursorBadgeRef}
          className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 hidden lg:flex items-center justify-center ${
            isHoveringCar ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="px-3.5 py-1.5 rounded-full bg-[#ea1c24] text-white text-[10px] font-black uppercase tracking-wider shadow-[0_4px_25px_rgba(234,28,36,0.8)] border border-white/30 flex items-center gap-1">
            <span>EXPLORE BUILD</span>
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}
