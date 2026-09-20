"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Flame, Lightbulb, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CinematicPriusCta() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [headlightsOn, setHeadlightsOn] = React.useState(false);
  const [ignitedOnce, setIgnitedOnce] = React.useState(false);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Trigger headlights ON automatically when scrolled into view
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 65%",
      onEnter: () => {
        setHeadlightsOn(true);
        setIgnitedOnce(true);
      },
      onLeaveBack: () => {
        setHeadlightsOn(false);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const whatsappBuildUrl =
    "https://wa.me/94777177452?text=Hello%20Carmate!%20I'm%20ready%20to%20start%20my%20build.%20YOUR%20CAR.%20YOUR%20STYLE.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full bg-[#030508] text-white flex flex-col justify-between overflow-hidden border-t border-white/10 py-16 sm:py-24"
    >
      {/* Background Prius Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Dark Silhouette Base Shot */}
        <img
          src="/assets/black-beast-front.webp"
          alt="Carmate Custom Prius Black Beast"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />

        {/* Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/75 to-[#030508]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-transparent to-[#030508]" />

        {/* Headlights Lit Layer (Ignites with smooth transition) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            headlightsOn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Glowing Headlights Image Layer */}
          <img
            src="/assets/prius-headlights-lit.png"
            alt="Prius Bi-LED Illuminated Projectors"
            className="w-full h-full object-cover object-center opacity-70 mix-blend-screen scale-100 transition-transform duration-1000"
          />

          {/* Twin Volumetric Headlight Cones / Beams (Shooting forward across the road) */}
          <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[480px] h-[550px] bg-gradient-to-t from-cyan-400/25 via-blue-500/10 to-transparent blur-3xl transform -rotate-12 origin-bottom pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[480px] h-[550px] bg-gradient-to-t from-red-500/30 via-red-600/10 to-transparent blur-3xl transform rotate-12 origin-bottom pointer-events-none" />

          {/* Central Ground Light Bloom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.08] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-[#ea1c24]/25 rounded-full blur-[60px] pointer-events-none" />
        </div>

        {/* Light Flash Flare upon ignition */}
        <div
          className={`absolute inset-0 bg-white/20 transition-opacity duration-300 pointer-events-none ${
            headlightsOn && !ignitedOnce ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Top Bar: Subhead & Interactive Headlight Toggle */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#ea1c24] uppercase">
          <Flame size={14} className="text-[#ea1c24] animate-pulse" />
          <span>FINAL CINEMATIC SHOWCASE</span>
        </div>

        {/* Interactive Headlights Control */}
        <button
          onClick={() => setHeadlightsOn((prev) => !prev)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-[11px] font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
          title="Click to toggle headlights"
        >
          <Lightbulb
            size={13}
            className={headlightsOn ? "text-yellow-400 fill-yellow-400" : "text-zinc-500"}
          />
          <span className="text-zinc-300">
            HEADLIGHTS:{" "}
            <strong className={headlightsOn ? "text-green-400" : "text-zinc-500"}>
              {headlightsOn ? "ON" : "OFF"}
            </strong>
          </span>
        </button>
      </div>

      {/* Center: Massive Cinematic Typography */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-12">
        {/* Subtle Overline */}
        <p className="text-xs sm:text-sm font-extrabold tracking-[0.3em] sm:tracking-[0.4em] text-zinc-400 uppercase mb-4 sm:mb-6">
          CARMATE BESPOKE MOTORING • MAKULUWA, GALLE
        </p>

        {/* Requested Headline: YOUR CAR. YOUR STYLE. */}
        <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white mb-6 sm:mb-8 leading-[0.9] drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            YOUR CAR.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ea1c24] via-[#ff4a52] to-white drop-shadow-[0_0_35px_rgba(234,28,36,0.6)]">
            YOUR STYLE.
          </span>
        </h2>

        {/* Narrative Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Transform your Prius, sports coupe, or daily drive into an uncompromising automotive statement. Aerodynamic body styling, custom Bi-LED projector retrofits, and bespoke interior craftsmanship tailored exclusively to you.
        </p>

        {/* CTA Actions: START YOUR BUILD -> WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          {/* Primary High-Impact Button */}
          <a
            href={whatsappBuildUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ea1c24] hover:bg-[#ff222a] active:bg-[#c9141b] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-9 py-4 rounded-full shadow-[0_4px_35px_rgba(234,28,36,0.55)] transition-all hover:scale-105 active:scale-95 group"
          >
            {/* WhatsApp Brand Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0 fill-white drop-shadow-sm"
              aria-hidden="true"
            >
              <path d="M12.031 0C5.397 0 .007 5.385.007 12.018a11.97 11.97 0 0 0 1.636 6.077L0 24l6.093-1.6a11.97 11.97 0 0 0 5.938 1.57h.005c6.634 0 12.023-5.385 12.023-12.018A12.01 12.01 0 0 0 12.031 0zm-.005 21.99a9.99 9.99 0 0 1-5.093-1.39l-.365-.216-3.784.993 1.01-3.69-.238-.378a9.96 9.96 0 0 1-1.542-5.291c0-5.522 4.496-10.016 10.017-10.016a9.97 9.97 0 0 1 7.086 2.935 9.97 9.97 0 0 1 2.936 7.084c0 5.523-4.494 10.018-10.027 10.018zm5.492-7.5c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.125-.276-.201-.577-.351z" />
            </svg>
            <span>START YOUR BUILD</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary Link: Explore Gallery */}
          <Link
            href="/gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-full border border-white/20 transition-all active:scale-95 shadow-md"
          >
            <span>Explore All Projects</span>
          </Link>
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-400 font-semibold">
            Workshop Open • Direct WhatsApp Consultations Available
          </span>
        </div>
        <p className="text-[11px] tracking-wider text-zinc-500 uppercase">
          PRIUS 30 / 50 • AQUA • VITZ • AXIO • CIVIC • BESPOKE BUILDS
        </p>
      </div>
    </section>
  );
}
