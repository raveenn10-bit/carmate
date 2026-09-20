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
    <section className="relative py-28 bg-[#070a0f] text-white overflow-hidden" id="reels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <Sparkles size={14} />
              <span>9:16 Portrait Reels</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Build Footage &amp; DRL Sound
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Experience our dynamic lighting sequences, exhaust notes, and body transformations in native 9:16 vertical video format.
          </p>
        </div>

        {/* Video Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARMATE_REELS.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlay(reel.id)}
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#ea1c24]/50 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(234,28,36,0.2)]"
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

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {reel.badge}
                    </span>

                    {/* Sound Toggle Button */}
                    <button
                      onClick={toggleSound}
                      className="p-2 bg-black/60 hover:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-colors"
                      aria-label={muted ? "Unmute video" : "Mute video"}
                    >
                      {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-[#ea1c24]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(234,28,36,0.6)] backdrop-blur-md transition-all duration-300 ${
                        isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                    >
                      <Play size={28} className="ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-zinc-400">
                      {reel.specs}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2">
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
