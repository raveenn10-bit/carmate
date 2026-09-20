"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CARMATE_ALBUMS } from "@/lib/albums-data";
import {
  Gallery,
  useGallery,
} from "@/components/ui/shared-element-gallery";
import {
  Camera,
  MessageSquareQuote,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  albumId: string;
  title: string;
  vehicle: string;
  category: string;
  badge: string;
}

function AlbumsHorizontalTrack({ photos }: { photos: PhotoItem[] }) {
  const { setSelectedImage } = useGallery();
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate photos so the horizontal reel loops seamlessly
  const repeatedPhotos = useMemo(() => {
    if (photos.length === 0) return [];
    if (photos.length < 8) {
      return [...photos, ...photos, ...photos, ...photos];
    }
    return [...photos, ...photos, ...photos];
  }, [photos]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Vignettes */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#05070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#05070a] to-transparent z-10 pointer-events-none" />

      {/* Floating Manual Controls */}
      <div className="absolute top-3 right-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => handleManualScroll("left")}
          aria-label="Scroll left"
          className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center transition-all active:scale-95 shadow-lg"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => handleManualScroll("right")}
          aria-label="Scroll right"
          className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-[#ea1c24] hover:border-[#ea1c24] flex items-center justify-center transition-all active:scale-95 shadow-lg"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-8 py-4 scroll-smooth"
      >
        <div
          className={`flex gap-4 sm:gap-6 shrink-0 ${
            isHovered ? "[animation-play-state:paused]" : ""
          }`}
          style={{
            animation: "albumsScrollLtr 42s linear infinite",
          }}
        >
          {repeatedPhotos.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              onClick={() => setSelectedImage(photo)}
              className="group/item relative w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden bg-[#0a0d14] border border-white/10 hover:border-[#ea1c24]/60 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(234,28,36,0.2)] select-none"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700 will-change-transform"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-sm">
                  {photo.badge}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/item:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                  <ZoomIn size={14} />
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 pointer-events-none">
                <span className="text-[10px] font-mono text-[#ea1c24] font-bold uppercase tracking-wider block mb-0.5">
                  {photo.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-zinc-400 font-mono">
                  {photo.vehicle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectAlbumsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "black-beast", label: "Black Beast" },
    { id: "red-phantom", label: "Red Phantom" },
    { id: "silver-aero", label: "Silver Aero GT" },
    { id: "interior-cockpit", label: "Bespoke Interior" },
  ];

  // Photos displayed
  const filteredPhotos = useMemo<PhotoItem[]>(() => {
    if (filter === "all") {
      return CARMATE_ALBUMS.flatMap((album) =>
        album.photos.slice(0, 5).map((photoUrl, idx) => ({
          id: `${album.id}-${idx}`,
          src: photoUrl,
          alt: `${album.name} - ${album.vehicle} photo ${idx + 1}`,
          albumId: album.id,
          title: album.name,
          vehicle: album.vehicle,
          category: album.category,
          badge: album.name.replace("Project ", ""),
        }))
      );
    }

    const album = CARMATE_ALBUMS.find((a) => a.id === filter);
    if (!album) return [];
    return album.photos.map((photoUrl, idx) => ({
      id: `${album.id}-${idx}`,
      src: photoUrl,
      alt: `${album.name} - ${album.vehicle} photo ${idx + 1}`,
      albumId: album.id,
      title: album.name,
      vehicle: album.vehicle,
      category: album.category,
      badge: album.name.replace("Project ", ""),
    }));
  }, [filter]);

  const activeProject = useMemo(() => {
    if (filter === "all") return null;
    return CARMATE_ALBUMS.find((a) => a.id === filter) || null;
  }, [filter]);

  const whatsappInquiryUrl = useMemo(() => {
    if (activeProject) {
      return `https://wa.me/94777177452?text=${encodeURIComponent(
        `Hello Carmate! I am inquiring about ${activeProject.name} (${activeProject.vehicle}). Could you share package options, schedule & pricing?`
      )}`;
    }
    return `https://wa.me/94777177452?text=${encodeURIComponent(
      "Hello Carmate! I am viewing your vehicle modification project gallery and would like to get a quote for my vehicle."
    )}`;
  }, [activeProject]);

  return (
    <section
      data-preserve-dark="true"
      className="relative py-16 sm:py-28 bg-[#05070a] text-white border-y border-white/10 overflow-hidden"
      id="albums"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="gsap-fade-up flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-ping" />
              <span>WORKSHOP ARCHIVE // MAKULUWA</span>
            </div>
            <h2 className="gsap-split-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Project Albums
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="gsap-fade-in-out text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              High-resolution documentation of completed builds from our Makuluwa bays. Auto-scrolling left-to-right reel. Click any photo to view full details.
            </p>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-black border border-[#25d366]/30 font-bold text-xs uppercase tracking-wider px-4 py-2.5 min-h-[44px] rounded-full transition-all shrink-0 active:scale-95"
            >
              <MessageSquareQuote size={15} />
              <span>{activeProject ? `Quote: ${activeProject.name.replace("Project ", "")}` : "Get WhatsApp Quote"}</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-white/10">
          {filterTabs.map((tab) => {
            const count =
              tab.id === "all"
                ? CARMATE_ALBUMS.length * 5
                : CARMATE_ALBUMS.find((a) => a.id === tab.id)?.photos.length || 0;

            const isActive = filter === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative px-4 sm:px-5 py-2.5 min-h-[40px] flex items-center rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeAlbumFilterPill"
                    className="absolute inset-0 bg-[#ea1c24] rounded-full shadow-[0_4px_20px_rgba(234,28,36,0.45)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-black/30 text-white"
                        : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Spotlight Banner */}
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a0f18] via-[#070b12] to-[#0a0f18] border border-white/15 shadow-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ea1c24] bg-[#ea1c24]/10 border border-[#ea1c24]/30 px-3 py-1 rounded-full">
                    {activeProject.category}
                  </span>
                  <span className="text-xs text-zinc-300 font-semibold">
                    {activeProject.vehicle}
                  </span>
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                    <Camera size={12} className="text-[#ea1c24]" />
                    <span>{activeProject.photos.length} High-Res Photos</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  {activeProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                  {activeProject.tagline}
                </p>

                {/* Specs Highlights */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {activeProject.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                    >
                      <CheckCircle2 size={12} className="text-[#ea1c24]" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quote CTA */}
              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all hover:scale-102 active:scale-98"
                >
                  <MessageSquareQuote size={17} />
                  <span>Inquire for {activeProject.name.replace("Project ", "")}</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="all-projects-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <Camera size={15} className="text-[#ea1c24]" />
                <span>
                  Browsing <strong>{filteredPhotos.length}</strong> featured Carmate modification photographs. Click any photo to view full screen.
                </span>
              </div>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#25d366] hover:underline"
              >
                <MessageSquareQuote size={14} />
                <span>Inquire About Custom Builds ↗</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shared Element Gallery with Left-to-Right Auto-Scroll Track */}
        <Gallery key={filter}>
          <AlbumsHorizontalTrack photos={filteredPhotos} />
        </Gallery>

        {/* Bottom Callout Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wide mb-1">
              Want a Similar Build for Your Vehicle?
            </h4>
            <p className="text-xs text-zinc-400">
              Contact Carmate on WhatsApp with your vehicle model to discuss body kits, lighting, and bespoke interior packages.
            </p>
          </div>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ea1c24] hover:bg-[#ff2d36] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(234,28,36,0.35)] transition-all shrink-0 active:scale-95"
          >
            <span>Start WhatsApp Consultation</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Global CSS for Albums Left-to-Right Marquee */}
      <style jsx global>{`
        @keyframes albumsScrollLtr {
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
