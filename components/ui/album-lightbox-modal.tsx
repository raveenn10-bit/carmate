"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { AlbumProject } from "@/lib/albums-data";

interface AlbumLightboxModalProps {
  album: AlbumProject | null;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function AlbumLightboxModal({
  album,
  initialIndex = 0,
  isOpen,
  onClose,
}: AlbumLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, album]);

  const handleNext = useCallback(() => {
    if (!album) return;
    setCurrentIndex((prev) => (prev + 1) % album.photos.length);
  }, [album]);

  const handlePrev = useCallback(() => {
    if (!album) return;
    setCurrentIndex((prev) => (prev - 1 + album.photos.length) % album.photos.length);
  }, [album]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !album) return null;

  const currentPhoto = album.photos[currentIndex];
  const waText = encodeURIComponent(
    `Hello Carmate! I am inquiring about ${album.name} (${album.vehicle}). Could you provide more details and a quote?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Shell */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#07090d]/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#0c0f16]/90">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ea1c24] bg-[#ea1c24]/10 px-2.5 py-0.5 rounded-full">
              {album.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {album.name}
            </h3>
            <span className="text-xs text-zinc-400">
              Photo {currentIndex + 1} of {album.photos.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/94777177452?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#ea1c24] hover:bg-[#ff2d36] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
            >
              <MessageSquareQuote size={14} />
              <span>Inquire Build ↗</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Main Viewer */}
        <div className="relative flex-1 min-h-[380px] max-h-[62vh] flex items-center justify-center bg-[#020406] p-2 sm:p-4">
          <button
            onClick={handlePrev}
            className="absolute left-4 z-20 p-3 text-white bg-black/60 hover:bg-[#ea1c24] rounded-full backdrop-blur-md transition-all transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            key={currentPhoto}
            src={currentPhoto}
            alt={`${album.name} photo ${currentIndex + 1}`}
            className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 z-20 p-3 text-white bg-black/60 hover:bg-[#ea1c24] rounded-full backdrop-blur-md transition-all transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Filmstrip Thumbs */}
        <div className="p-3 bg-[#0a0d14] border-t border-white/10 overflow-x-auto flex items-center gap-2.5 scrollbar-thin">
          {album.photos.map((src, idx) => (
            <button
              key={src + idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? "border-[#ea1c24] scale-105 shadow-[0_0_12px_rgba(234,28,36,0.6)]"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
