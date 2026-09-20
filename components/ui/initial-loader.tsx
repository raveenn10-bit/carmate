"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING WORKSHOP ENGINE...");
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Lock body scroll while loader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 10000; // 10 seconds

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(currentProgress);

      if (currentProgress < 22) {
        setStatusText("INITIALIZING WORKSHOP ENGINE // MAKULUWA");
      } else if (currentProgress < 45) {
        setStatusText("PRELOADING 250 HIGH-RES CHASSIS FRAMES...");
      } else if (currentProgress < 68) {
        setStatusText("CALIBRATING BI-LED OPTICS & DRL SEQUENCES...");
      } else if (currentProgress < 90) {
        setStatusText("OPTIMIZING BESPOKE MODELLISTA ARCHIVE...");
      } else if (currentProgress < 99) {
        setStatusText("ATELIER READY // BUILT DIFFERENT");
      } else {
        setStatusText("SYSTEM ARMED // ZERO COMPROMISE");
      }

      if (currentProgress < 100) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Finished 10 seconds
        setTimeout(() => {
          triggerExit();
        }, 300);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Refresh ScrollTrigger to ensure positions are razor sharp
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();
      }
    }, 800);
  };

  const handleSkip = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setProgress(100);
    setStatusText("ENTERING CARMATE...");
    triggerExit();
  };

  if (isComplete) return null;

  return (
    <div
      data-preserve-dark="true"
      className={`fixed inset-0 z-[999999] bg-[#000000] flex flex-col items-center justify-center select-none transition-all duration-700 ease-out ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Deep Automotive Ambient Lighting & Radial Red Halos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ea1c24]/[0.08] rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#6b111e]/[0.12] rounded-full blur-[90px]" />
      </div>

      {/* Centerpiece Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Carmate Logo with Shimmer & Headlight Aura */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ea1c24]/0 via-[#ea1c24]/20 to-[#ea1c24]/0 rounded-2xl blur-xl transition-all duration-1000 animate-pulse" />
          <img
            src="/assets/carmate-logo.png"
            alt="Carmate Modifications"
            className="relative h-14 xs:h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_25px_rgba(234,28,36,0.4)] transition-transform duration-500 will-change-transform"
          />
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] text-[#ea1c24] uppercase mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-ping" />
          <span>SOUTHERN CEYLON AUTOMOTIVE ATELIER</span>
        </div>

        {/* 10-Second High Precision Laser Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-inner mb-3.5">
          <div
            className="h-full bg-gradient-to-r from-[#6b111e] via-[#ea1c24] to-[#ff3b44] rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_#ea1c24,0_0_25px_#ea1c24]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Status & Live Percentage Counter */}
        <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider">
          <span className="text-zinc-400 uppercase truncate pr-2 text-left">
            {statusText}
          </span>
          <span className="text-white font-bold tracking-widest shrink-0">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          type="button"
          className="mt-10 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors py-1.5 px-3 rounded-full border border-white/10 hover:border-[#ea1c24]/50 hover:bg-white/[0.04] active:scale-95 cursor-pointer"
        >
          <span>Skip Intro</span>
          <span className="text-[#ea1c24]">↗</span>
        </button>
      </div>

      {/* Slogan Watermark at Bottom */}
      <div className="absolute bottom-6 sm:bottom-8 text-center pointer-events-none">
        <p className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-zinc-600">
          BUILT DIFFERENT // MAKULUWA, GALLE
        </p>
      </div>
    </div>
  );
}
