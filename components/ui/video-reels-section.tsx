"use client";

import { useState, useRef } from "react";
import { CARMATE_REELS, VideoReel } from "@/lib/reels-data";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

export function VideoReelsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    Object.entries(videoRefs.current).forEach(([k, v]) => {
      if (!v) return;
      if (k === id) {
        if (v.paused) {
          v.play().catch(() => {});
          setPlayingId(id);
        } else {
          v.pause();
          setPlayingId(null);
        }
      } else {
        v.pause();
      }
    });
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !muted;
    setMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = nextMuted;
    });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#070a0f] text-white overflow-hidden" id="reels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="gsap-fade-up flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <Sparkles size={14} />
              <span>9:16 Portrait Reels</span>
            </div>
            <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Build Footage &amp; DRL Sound
            </h2>
          </div>
          <p className="gsap-fade-in-out text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Experience our dynamic lighting sequences, exhaust notes, and body transformations in native 9:16 vertical video format.
          </p>
        </div>

        {/* Video Track Grid with Responsive Portrait Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 max-w-sm sm:max-w-none mx-auto">
          {CARMATE_REELS.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlay(reel.id)}
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#ea1c24]/50 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(234,28,36,0.2)] select-none"
              >
                {/* 9:16 Video Wrapper */}
                <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden">
                  <video
                    ref={(el) => { videoRefs.current[reel.id] = el; }}
                    src={reel.src}
                    loop
                    playsInline
                    muted={muted}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

                  {/* Top Bar Badges & Sound Toggle */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm pointer-events-none">
                      {reel.badge}
                    </span>

                    {/* Sound Toggle Button with >=44px touch target */}
                    <button
                      type="button"
                      onClick={toggleSound}
                      className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/70 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-all active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ea1c24]"
                      aria-label={muted ? "Unmute video audio" : "Mute video audio"}
                    >
                      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>

                  {/* Center Play/Pause Button with >=44px touch target */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(reel.id);
                      }}
                      className={`pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 min-w-[44px] min-h-[44px] rounded-full bg-[#ea1c24]/90 hover:bg-[#ea1c24] text-white flex items-center justify-center shadow-[0_0_25px_rgba(234,28,36,0.6)] backdrop-blur-md transition-all duration-300 active:scale-95 ${
                        isPlaying ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      <Play size={26} className="ml-1 fill-current" />
                    </button>
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
    </section>
  );
}
