"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { CARMATE_REELS } from "@/lib/reels-data";
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export function VideoReelsSection() {
  const [pausedMap, setPausedMap] = useState<{ [key: string]: boolean }>({});
  const [muted, setMuted] = useState(true);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const repeatedReels = useMemo(() => {
    return [...CARMATE_REELS, ...CARMATE_REELS, ...CARMATE_REELS];
  }, []);

  // Auto-play all videos simultaneously on mount and maintain looping
  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  const togglePlay = (key: string) => {
    const video = videoRefs.current[key];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPausedMap((prev) => ({ ...prev, [key]: false }));
    } else {
      video.pause();
      setPausedMap((prev) => ({ ...prev, [key]: true }));
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !muted;
    setMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = nextMuted;
    });
  };

  const handleMobileScroll = (direction: "left" | "right") => {
    if (!mobileScrollRef.current) return;
    const amount = direction === "left" ? -260 : 260;
    mobileScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      data-preserve-dark="true"
      className="relative py-20 sm:py-28 bg-[#070a0f] text-white overflow-hidden border-t border-white/10"
      id="reels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="gsap-fade-up flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <Sparkles size={14} />
              <span>DYNAMIC FOOTAGE // WORKSHOP REELS</span>
            </div>
            <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Build Clips &amp; DRL Ignition
            </h2>
          </div>
          <p className="gsap-fade-in-out text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Raw garage clips: sequential DRL light sequences, Bi-LED laser cutoffs, and custom exhaust notes recorded straight from our Makuluwa installation bays.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Original 4-Column Responsive Grid
            ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-none mx-auto">
          {CARMATE_REELS.map((reel) => {
            const isManuallyPaused = !!pausedMap[`desk-${reel.id}`];

            return (
              <div
                key={`desk-${reel.id}`}
                onClick={() => togglePlay(`desk-${reel.id}`)}
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#ea1c24]/60 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(234,28,36,0.25)] select-none"
              >
                {/* 9:16 Video Wrapper */}
                <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[`desk-${reel.id}`] = el;
                    }}
                    src={reel.src}
                    autoPlay
                    loop
                    playsInline
                    muted={muted}
                    preload="auto"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

                  {/* Top Bar Badges & Sound Toggle */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm pointer-events-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea1c24] animate-pulse" />
                      <span>{reel.badge}</span>
                    </span>

                    <button
                      type="button"
                      onClick={toggleSound}
                      className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/70 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-all active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ea1c24]"
                      aria-label={muted ? "Unmute audio" : "Mute audio"}
                    >
                      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>

                  {/* Center Play/Pause Cue */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 min-w-[44px] min-h-[44px] rounded-full bg-[#ea1c24]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(234,28,36,0.6)] backdrop-blur-md transition-all duration-300 ${
                        isManuallyPaused
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75 group-hover:opacity-80 group-hover:scale-100"
                      }`}
                    >
                      {isManuallyPaused ? (
                        <Play size={24} className="ml-0.5 fill-current" />
                      ) : (
                        <Pause size={24} className="fill-current" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex flex-col gap-1.5 pointer-events-none">
                    <span className="text-[10px] font-mono text-zinc-400">
                      {reel.specs}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 line-clamp-2">
                      {reel.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: Horizontal Left-to-Right Auto-Scrolling Track
          ========================================================================= */}
      <div
        className="block lg:hidden relative w-full overflow-hidden group"
        onMouseEnter={() => setIsMobilePaused(true)}
        onMouseLeave={() => setIsMobilePaused(false)}
      >
        <div className="flex items-center justify-between px-4 mb-3">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            {isMobilePaused ? "PAUSED" : "SWIPE OR AUTO-SCROLL LTR →"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleMobileScroll("left")}
              aria-label="Scroll left"
              className="w-7 h-7 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center active:scale-95"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => handleMobileScroll("right")}
              aria-label="Scroll right"
              className="w-7 h-7 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center active:scale-95"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div
          ref={mobileScrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-2 scroll-smooth"
        >
          <div
            className={`flex gap-4 shrink-0 ${
              isMobilePaused ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "mobileReelsLtr 32s linear infinite",
            }}
          >
            {repeatedReels.map((reel, idx) => {
              const uniqueKey = `mob-${reel.id}-${idx}`;
              const isManuallyPaused = !!pausedMap[uniqueKey];

              return (
                <div
                  key={uniqueKey}
                  onClick={() => togglePlay(uniqueKey)}
                  className="group/reel relative w-[220px] xs:w-[250px] shrink-0 rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#ea1c24]/60 shadow-xl cursor-pointer transition-all duration-300 select-none"
                >
                  <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[uniqueKey] = el;
                      }}
                      src={reel.src}
                      autoPlay
                      loop
                      playsInline
                      muted={muted}
                      preload="auto"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 pointer-events-none flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea1c24] animate-pulse" />
                        <span>{reel.badge}</span>
                      </span>

                      <button
                        type="button"
                        onClick={toggleSound}
                        className="w-8 h-8 flex items-center justify-center bg-black/70 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-all active:scale-95 shadow-md"
                        aria-label={muted ? "Unmute audio" : "Mute audio"}
                      >
                        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div
                        className={`w-11 h-11 rounded-full bg-[#ea1c24]/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(234,28,36,0.6)] backdrop-blur-md transition-all duration-300 ${
                          isManuallyPaused ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                      >
                        {isManuallyPaused ? (
                          <Play size={18} className="ml-0.5 fill-current" />
                        ) : (
                          <Pause size={18} className="fill-current" />
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10 flex flex-col gap-1 pointer-events-none">
                      <span className="text-[9px] font-mono text-zinc-400">
                        {reel.specs}
                      </span>
                      <h3 className="text-xs font-bold text-white leading-snug line-clamp-1">
                        {reel.title}
                      </h3>
                      <p className="text-[10px] text-zinc-400 line-clamp-2">
                        {reel.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes mobileReelsLtr {
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
