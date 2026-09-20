"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export function TransformationSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep accurate container width for the overlay image on all screen sizes & resize events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      setContainerWidth(el.getBoundingClientRect().width);
    };

    updateWidth();

    const ro = new ResizeObserver(() => {
      updateWidth();
    });
    ro.observe(el);

    window.addEventListener("resize", updateWidth, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Keyboard accessibility for arrow keys
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Drag slider horizontally to compare OEM stock vehicle with Carmate custom build"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize touch-none focus:outline-none focus:ring-2 focus:ring-[#ea1c24]"
      style={{ touchAction: "none" }}
    >
      {/* Before Image (Background) */}
      <img
        src="/assets/image-18.webp"
        alt="Before transformation — OEM factory vehicle"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 shadow-md pointer-events-none">
        OEM STOCK
      </div>

      {/* After Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src="/assets/carmate-project-2.jpg"
          alt="After transformation — Carmate custom build"
          className="absolute inset-0 h-full object-cover max-w-none pointer-events-none"
          draggable={false}
          style={{
            width: containerWidth > 0 ? `${containerWidth}px` : "100%",
            maxWidth: "none",
          }}
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-[#ea1c24] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg pointer-events-none">
          CARMATE SPEC
        </div>
      </div>

      {/* Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Touch Handle Target: >= 44px with touch-action: none */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-full bg-[#ea1c24] border-2 border-white shadow-[0_0_20px_rgba(234,28,36,0.8),0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center text-white font-black pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform"
          style={{ touchAction: "none" }}
        >
          <span className="flex items-center text-sm sm:text-base font-black tracking-tighter drop-shadow select-none">
            ‹ ›
          </span>
        </div>
      </div>
    </div>
  );
}
