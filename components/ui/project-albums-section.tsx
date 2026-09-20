"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CARMATE_ALBUMS } from "@/lib/albums-data";
import {
  Gallery,
  GalleryGrid,
  GalleryImage,
} from "@/components/ui/shared-element-gallery";
import {
  Camera,
  MessageSquareQuote,
  CheckCircle2,
  ArrowUpRight,
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

export function ProjectAlbumsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "black-beast", label: "Black Beast" },
    { id: "red-phantom", label: "Red Phantom" },
    { id: "silver-aero", label: "Silver Aero GT" },
    { id: "interior-cockpit", label: "Bespoke Interior" },
  ];

  // Flatten all verified Carmate photos with their project context
  const allPhotos = useMemo<PhotoItem[]>(() => {
    return CARMATE_ALBUMS.flatMap((album) =>
      album.photos.map((photoUrl, idx) => ({
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
  }, []);

  const filteredPhotos = useMemo(() => {
    if (filter === "all") return allPhotos;
    return allPhotos.filter((p) => p.albumId === filter);
  }, [filter, allPhotos]);

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
      className="relative py-16 sm:py-28 bg-[#05070a] text-white border-y border-white/10"
      id="albums"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-ping" />
              <span>Full Build Chronicles</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Project Albums
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Shared element photo gallery featuring our authentic build chronicles. Click any photo to inspect in high definition with drag-to-dismiss physics.
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
                ? allPhotos.length
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
                  Browsing <strong>{allPhotos.length}</strong> verified Carmate modification photographs across all 4 flagship build chronicles. Click any photo to inspect in full-screen with drag-to-dismiss.
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

        {/* Shared Element Gallery Component */}
        <Gallery key={filter}>
          <GalleryGrid>
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo) => (
                <GalleryImage
                  key={photo.id}
                  id={photo.id}
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  vehicle={photo.vehicle}
                  category={photo.category}
                  badge={photo.badge}
                />
              ))}
            </AnimatePresence>
          </GalleryGrid>
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
    </section>
  );
}
