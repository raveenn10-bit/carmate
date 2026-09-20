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
    "https://wa.me/94777177452?text=Hello%20Carmate!%20I'd%20like%20to%20consult%20on%20a%20custom%20build%20(Body%20Kit%20/%20Bi-LED%20Retrofit%20/%202K%20Paint).%20Let's%20discuss.";

  return (
    <section
      ref={sectionRef}
      data-preserve-dark="true"
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#030508] text-white flex flex-col justify-between overflow-hidden border-t border-white/10 py-16 sm:py-20"
    >
      {/* Background Prius Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Dark Cherry Metallic Prius Shot */}
        <img
          src="/assets/carmate-prius-cherry.jpg"
          alt="Carmate Custom Stanced Prius 30 Modellista Cherry Edition - Makuluwa Workshop"
          className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
            headlightsOn
              ? "opacity-60 scale-100 brightness-105 contrast-105"
              : "opacity-35 scale-105 brightness-75 contrast-95"
          }`}
        />

        {/* Deep Vignette Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/60 to-[#030508]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030508]/85 via-transparent to-[#030508]/85" />

        {/* Dynamic Headlight Lit Ambience & Volumetric Cones */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            headlightsOn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Volumetric DRL Light Cones & Ground Beam Glow */}
          <div className="absolute bottom-[28%] left-[15%] w-[420px] h-[350px] bg-cyan-300/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[24%] left-[28%] w-[480px] h-[280px] bg-white/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[750px] h-[160px] bg-[#ea1c24]/20 rounded-full blur-[80px] pointer-events-none" />
        </div>

        {/* Light Flash Flare upon ignition */}
        <div
          className={`absolute inset-0 bg-white/15 transition-opacity duration-300 pointer-events-none ${
            headlightsOn && !ignitedOnce ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Top Bar: Subhead & Interactive Headlight Toggle */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-zinc-300 uppercase">
          <Flame size={13} className="text-[#ea1c24] animate-pulse" />
          <span>COMMISSION YOUR BUILD • MAKULUWA WORKSHOP</span>
        </div>

        {/* Interactive Headlights Control */}
        <button
          onClick={() => setHeadlightsOn((prev) => !prev)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-[11px] font-mono font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
          title="Click to toggle headlights"
        >
          <Lightbulb
            size={13}
            className={headlightsOn ? "text-yellow-400 fill-yellow-400" : "text-zinc-500"}
          />
          <span className="text-zinc-300">
            BI-LED PROJECTORS:{" "}
            <strong className={headlightsOn ? "text-emerald-400" : "text-zinc-500"}>
              {headlightsOn ? "IGNITED" : "STANDBY"}
            </strong>
          </span>
        </button>
      </div>

      {/* Center: Massive Cinematic Typography */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-12 sm:py-16">
        {/* Workshop Location & Provenance Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-5 sm:mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea1c24]" />
          <span>CARMATE MODIFICATIONS</span>
          <span className="text-zinc-600">/</span>
          <span>MAKULUWA, GALLE</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300 font-semibold">SOUTHERN EXPRESSWAY TESTED</span>
        </div>

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
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal drop-shadow-md">
          Prius 30 & 50 Modellista conversions, Aqua G’s aero packages, and Civic FD custom retrofits. Built with high-flex urethane fitment, dual Bi-LED projector cutoffs, and oven-cured 2K enamel paint. Handcrafted in Galle with zero compromises.
        </p>

        {/* Workshop Specification Micro-Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-[#ea1c24] font-bold block uppercase tracking-wider">01 / AERO FITMENT</span>
            <span className="text-xs font-semibold text-zinc-200 block mt-0.5">High-Flex Urethane Kits</span>
            <span className="text-[10px] text-zinc-500 block">Zero fiberglass cracking</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-[#ea1c24] font-bold block uppercase tracking-wider">02 / OPTICS</span>
            <span className="text-xs font-semibold text-zinc-200 block mt-0.5">Dual Bi-LED Retrofits</span>
            <span className="text-[10px] text-zinc-500 block">Sharp highway laser cutoff</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-[#ea1c24] font-bold block uppercase tracking-wider">03 / FINISH</span>
            <span className="text-xs font-semibold text-zinc-200 block mt-0.5">2K Oven-Baked Enamel</span>
            <span className="text-[10px] text-zinc-500 block">Deep mirror clearcoat</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-[#ea1c24] font-bold block uppercase tracking-wider">04 / PROVING</span>
            <span className="text-xs font-semibold text-zinc-200 block mt-0.5">E01 Highway Rigidity</span>
            <span className="text-[10px] text-zinc-500 block">Tested at Southern speeds</span>
          </div>
        </div>

        {/* CTA Actions: START YOUR BUILD -> WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-6">
          {/* Primary High-Impact Button */}
          <a
            href={whatsappBuildUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ea1c24] hover:bg-[#ff222a] active:bg-[#c9141b] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_4px_35px_rgba(234,28,36,0.55)] transition-all hover:scale-105 active:scale-95 group"
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
            <span>COMMISSION YOUR BUILD (WHATSAPP)</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary Link: Explore Gallery */}
          <Link
            href="/gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-white/20 transition-all active:scale-95 shadow-md"
          >
            <span>BROWSE WORKSHOP ARCHIVE</span>
          </Link>
        </div>

        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
          Direct Workshop at Makuluwa, Galle • Prior Consultation Required for Custom Retrofits & Full Resprays
        </p>
      </div>
    </section>
  );
}
