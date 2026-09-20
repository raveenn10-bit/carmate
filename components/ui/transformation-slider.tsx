"use client";

import { useState, useRef, useCallback } from "react";

export function TransformationSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => { isDragging.current = true; }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize"
    >
      {/* Before Image (Background) */}
      <img
        src="/assets/image-18.webp"
        alt="Before transformation — OEM factory vehicle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md text-white text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10">
        OEM STOCK
      </div>

      {/* After Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src="/assets/carmate-project-2.jpg"
          alt="After transformation — Carmate custom build"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
        />
        <div className="absolute top-4 right-4 z-10 bg-[#ea1c24] text-white text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
          CARMATE SPEC
        </div>
      </div>

      {/* Slider Divider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#ea1c24] border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold">
          ‹ ›
        </div>
      </div>
    </div>
  );
}
