"use client";

import * as React from "react";
import { Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface ShowcaseItem {
  id: string;
  badge: string;
  title: string;
  video: string;
  description: string;
  specs: string[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "aero",
    badge: "01 / AERO ARCHITECTURE",
    title: "Polyurethane Body Kits & Diffusers",
    video: "/assets/showcase-video-1.mp4",
    description:
      "Prius 30/50 Modellista, Aqua G’s, and Civic FD aero packages. Molded in high-flex polyurethane with OEM mounting points, front splitters, and diffuser fins engineered for high-speed stability on the Southern Expressway without vibration or cracking.",
    specs: ["OEM Flush Mounting", "Downforce Tuning", "Zero-Crack Urethane"],
  },
  {
    id: "optics",
    badge: "02 / PRECISION OPTICS",
    title: "Custom Bi-LED & Laser Cutoffs",
    video: "/assets/showcase-video-2.mp4",
    description:
      "Custom multi-lens Bi-LED projector retrofits with razor-sharp laser cutoffs, smoked housing blackouts, dynamic sequential flowing DRLs, and smartphone-controlled RGB demon eyes. Calibrated for zero oncoming glare and maximum Southern Expressway throw.",
    specs: ["Laser Cutoff Horizon", "Sequential Flowing DRL", "Anti-Glare Optics"],
  },
  {
    id: "cockpit",
    badge: "03 / BESPOKE COCKPIT & STANCE",
    title: "Aggressive Stance & Fiber-Optic Cabin",
    video: "/assets/showcase-video-3.mp4",
    description:
      "Flush stance wheel fitment, quad burnt exhaust tips, carbon steering upgrades, and integrated 64-color fiber-optic ambient cabin channeling. Every millimeter tailored with genuine Galle workshop pride.",
    specs: ["Flush Stance Geometry", "64-Color Fiber Channels", "Burnt Titanium Tips"],
  },
];

export function CraftsmanshipShowcaseSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [mutedStates, setMutedStates] = React.useState<{ [key: string]: boolean }>({});
  const [isPaused, setIsPaused] = React.useState(false);

  const toggleSound = (uniqueKey: string, videoEl: HTMLVideoElement | null) => {
    if (!videoEl) return;
    const nextMuted = !videoEl.muted;
    videoEl.muted = nextMuted;
    setMutedStates((prev) => ({ ...prev, [uniqueKey]: nextMuted }));
  };

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = direction === "left" ? -460 : 460;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // 3 repetitions of the 3 items for infinite seamless scroll
  const repeatedItems = React.useMemo(() => {
    return [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];
  }, []);

  return (
    <section
      data-preserve-dark="true"
      className="relative bg-[#05070a] text-white py-20 sm:py-28 overflow-hidden border-t border-white/10"
      id="craftsmanship"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ea1c24]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#ea1c24] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-pulse" />
              WORKSHOP BENCHMARK // MAKULUWA, GALLE
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
              Handcrafted Precision. Zero Compromise.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
              Born inside our Makuluwa bays from a tight-knit crew of fabricators, auto electricians, and paint masters. Auto-scrolling showcase of our core builds.
            </p>
          </div>

          {/* Controls: Prev / Next Manual Scroll & Status */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
              {isPaused ? "PAUSED (HOVERED)" : "AUTO-SCROLLING LTR →"}
            </span>
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center text-white transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center text-white transition-all active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Auto-Scroll (Left-to-Right) Carousel Track */}
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Masks for Desktop */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#05070a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#05070a] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-4 sm:px-8 py-4 scroll-smooth"
        >
          <div
            className={`flex gap-6 sm:gap-8 shrink-0 ${
              isPaused ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "craftsmanshipScrollLtr 38s linear infinite",
            }}
          >
            {repeatedItems.map((item, idx) => {
              const uniqueKey = `${item.id}-${idx}`;
              const isMuted = mutedStates[uniqueKey] ?? true;

              return (
                <div
                  key={uniqueKey}
                  className="w-[300px] xs:w-[360px] sm:w-[440px] md:w-[480px] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d14] shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:border-[#ea1c24]/50 transition-all duration-300 group/card flex flex-col"
                >
                  {/* Video Box */}
                  <div className="relative aspect-[16/10] bg-black overflow-hidden">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/30 pointer-events-none" />

                    {/* Sound Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const videoEl = e.currentTarget.parentElement?.querySelector("video") as HTMLVideoElement | null;
                        toggleSound(uniqueKey, videoEl);
                      }}
                      className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] transition-all shadow-md active:scale-95"
                      aria-label="Toggle sound"
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight mb-2 group-hover/card:text-[#ea1c24] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                        >
                          <CheckCircle2 size={11} className="text-[#ea1c24]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global CSS for Left-to-Right Marquee */}
      <style jsx global>{`
        @keyframes craftsmanshipScrollLtr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
