"use client";

import * as React from "react";
import { Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const sectionRef = React.useRef<HTMLElement>(null);
  const card1Ref = React.useRef<HTMLDivElement>(null);
  const card2Ref = React.useRef<HTMLDivElement>(null);
  const card3Ref = React.useRef<HTMLDivElement>(null);

  const video1Ref = React.useRef<HTMLVideoElement>(null);
  const video2Ref = React.useRef<HTMLVideoElement>(null);
  const video3Ref = React.useRef<HTMLVideoElement>(null);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [mutedStates, setMutedStates] = React.useState<{ [key: string]: boolean }>({
    v1: true,
    v2: true,
    v3: true,
  });
  const [isPaused, setIsPaused] = React.useState(false);

  const toggleMute = (key: string, videoEl: HTMLVideoElement | null) => {
    if (!videoEl) return;
    const newMuted = !videoEl.muted;
    videoEl.muted = newMuted;
    setMutedStates((prev) => ({ ...prev, [key]: newMuted }));
  };

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // 3 repetitions of the 3 items for mobile infinite seamless scroll
  const repeatedItems = React.useMemo(() => {
    return [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Autoplay desktop videos
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    videos.forEach((v) => {
      if (v) {
        v.play().catch(() => {});
      }
    });

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Zoom & Parallax on Video 1 (Desktop)
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

      // Zoom & Parallax on Video 2 (Desktop)
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

      // Zoom & Parallax on Video 3 (Desktop)
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
      data-preserve-dark="true"
      className="relative bg-[#05070a] text-white py-20 sm:py-32 overflow-hidden border-t border-white/10"
      id="craftsmanship"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ea1c24]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-24">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#ea1c24] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-pulse" />
              WORKSHOP BENCHMARK // MAKULUWA, GALLE
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 lg:mb-6 leading-tight">
              HANDCRAFTED PRECISION. ZERO COMPROMISE.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
              Born inside our Makuluwa bays from a tight-knit crew of fabricators, auto electricians, and paint masters. We build Sri Lanka’s sharpest road machines — engineered for highway aerodynamics, laser illumination, and unmistakable stance.
            </p>
          </div>

          {/* Mobile Auto-Scroll Controls (Visible on mobile only) */}
          <div className="flex lg:hidden items-center justify-between gap-3 pt-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {isPaused ? "PAUSED" : "AUTO-SCROLLING LTR →"}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleManualScroll("left")}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center text-white transition-all active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleManualScroll("right")}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center text-white transition-all active:scale-95"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Original Staggered Asymmetrical Layout with Parallax Zoom
            ========================================================================= */}
        <div className="hidden lg:block space-y-20 sm:space-y-28 lg:space-y-36">
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
                Prius 30/50 Modellista, Aqua G’s, and Civic FD aero packages. Molded in high-flex polyurethane with OEM mounting points, front splitters, and diffuser fins engineered for high-speed stability on the Southern Expressway without vibration or cracking.
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
                Custom multi-lens Bi-LED projector retrofits with razor-sharp laser cutoffs, smoked housing blackouts, dynamic sequential flowing DRLs, and smartphone-controlled RGB demon eyes. Calibrated for zero oncoming glare and maximum Southern Expressway throw.
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
                Flush stance wheel fitment, quad burnt exhaust tips, carbon steering upgrades, and integrated 64-color fiber-optic ambient cabin channeling. Every millimeter tailored with genuine Galle workshop pride.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: Horizontal Left-to-Right Auto-Scrolling Marquee Track
          ========================================================================= */}
      <div
        className="block lg:hidden relative w-full overflow-hidden group mt-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-2 scroll-smooth"
        >
          <div
            className={`flex gap-4 shrink-0 ${
              isPaused ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "craftsmanshipMobileLtr 34s linear infinite",
            }}
          >
            {repeatedItems.map((item, idx) => {
              const uniqueKey = `mob-${item.id}-${idx}`;
              const isMuted = mutedStates[uniqueKey] ?? true;

              return (
                <div
                  key={uniqueKey}
                  className="w-[280px] xs:w-[320px] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d14] shadow-xl hover:border-[#ea1c24]/50 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-black overflow-hidden">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/30 pointer-events-none" />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const videoEl = e.currentTarget.parentElement?.querySelector("video") as HTMLVideoElement | null;
                        toggleMute(uniqueKey, videoEl);
                      }}
                      className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] transition-all shadow-md"
                      aria-label="Toggle sound"
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>

                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-black uppercase text-white tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/10">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 text-[9px] font-mono text-zinc-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                        >
                          <CheckCircle2 size={10} className="text-[#ea1c24]" />
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

      <style jsx global>{`
        @keyframes craftsmanshipMobileLtr {
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
