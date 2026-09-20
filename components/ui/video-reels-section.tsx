"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { CARMATE_REELS } from "@/lib/reels-data";
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export function VideoReelsSection() {
  const [pausedMap, setPausedMap] = useState<{ [key: string]: boolean }>({});
  const [muted, setMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // 3 repetitions of the reels for seamless infinite loop
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

  const togglePlay = (uniqueKey: string) => {
    const video = videoRefs.current[uniqueKey];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPausedMap((prev) => ({ ...prev, [uniqueKey]: false }));
    } else {
      video.pause();
      setPausedMap((prev) => ({ ...prev, [uniqueKey]: true }));
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

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
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
          <div className="flex items-center gap-4">
            <p className="gsap-fade-in-out text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed hidden sm:block">
              Raw garage clips: sequential DRL sequences, Bi-LED laser cutoffs, and custom exhaust notes.
            </p>
            {/* Prev / Next Manual Controls */}
            <div className="flex items-center gap-2">
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
      </div>

      {/* Horizontal Auto-Scroll (Left-to-Right) Marquee Track */}
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edge Fade Masks for Desktop */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#070a0f] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#070a0f] to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-8 py-4 scroll-smooth"
        >
          <div
            className={`flex gap-5 sm:gap-6 shrink-0 ${
              isHovered ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "reelsScrollLtr 32s linear infinite",
            }}
          >
            {repeatedReels.map((reel, idx) => {
              const uniqueKey = `${reel.id}-${idx}`;
              const isManuallyPaused = !!pausedMap[uniqueKey];

              return (
                <div
                  key={uniqueKey}
                  onClick={() => togglePlay(uniqueKey)}
                  className="group/reel relative w-[240px] xs:w-[270px] sm:w-[300px] shrink-0 rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#ea1c24]/60 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(234,28,36,0.25)] select-none"
                >
                  {/* 9:16 Video Wrapper */}
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

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

                    {/* Top Bar Badges & Sound Toggle */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm pointer-events-none flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea1c24] animate-pulse" />
                        <span>{reel.badge}</span>
                      </span>

                      {/* Sound Toggle Button */}
                      <button
                        type="button"
                        onClick={toggleSound}
                        className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center bg-black/70 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-all active:scale-95 shadow-lg focus:outline-none"
                        aria-label={muted ? "Unmute audio" : "Mute audio"}
                      >
                        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      </button>
                    </div>

                    {/* Center Play/Pause Cue */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div
                        className={`w-12 h-12 rounded-full bg-[#ea1c24]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(234,28,36,0.6)] backdrop-blur-md transition-all duration-300 ${
                          isManuallyPaused
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75 group-hover/reel:opacity-80 group-hover/reel:scale-100"
                        }`}
                      >
                        {isManuallyPaused ? (
                          <Play size={20} className="ml-0.5 fill-current" />
                        ) : (
                          <Pause size={20} className="fill-current" />
                        )}
                      </div>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col gap-1 pointer-events-none">
                      <span className="text-[9px] font-mono text-zinc-400">
                        {reel.specs}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-1">
                        {reel.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 line-clamp-2">
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

      {/* Global CSS for Reels Left-to-Right Marquee */}
      <style jsx global>{`
        @keyframes reelsScrollLtr {
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
