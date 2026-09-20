"use client";

import { useState } from "react";
import { CARMATE_ALBUMS, AlbumProject } from "@/lib/albums-data";
import { AlbumLightboxModal } from "./album-lightbox-modal";
import { Camera, ArrowUpRight, MessageSquareQuote } from "lucide-react";

export function ProjectAlbumsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [activeAlbum, setActiveAlbum] = useState<AlbumProject | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "black-beast", label: "Black Beast" },
    { id: "red-phantom", label: "Red Phantom" },
    { id: "silver-aero", label: "Silver Aero GT" },
    { id: "interior-cockpit", label: "Bespoke Interior" },
  ];

  const filteredAlbums =
    filter === "all"
      ? CARMATE_ALBUMS
      : CARMATE_ALBUMS.filter((a) => a.id === filter);

  const openLightbox = (album: AlbumProject, index = 0) => {
    setActiveAlbum(album);
    setPhotoIndex(index);
  };

  return (
    <section className="relative py-28 bg-[#05070a] text-white border-y border-white/10" id="albums">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1c24] animate-ping" />
              <span>Full Build Chronicles</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Project Albums
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Explore dedicated photo albums for each authentic Carmate modification project. Click any card to inspect full high-resolution galleries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-6 mb-10 border-b border-white/10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? "bg-[#ea1c24] text-white shadow-[0_4px_16px_rgba(234,28,36,0.4)]"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAlbums.map((alb) => (
            <div
              key={alb.id}
              className="group relative bg-[#090d14] border border-white/10 hover:border-[#ea1c24]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(234,28,36,0.15)] flex flex-col"
            >
              {/* Cover Image Wrap */}
              <div
                className="relative h-72 sm:h-80 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(alb, 0)}
              >
                <img
                  src={alb.cover}
                  alt={alb.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-black/40" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {alb.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#ea1c24] px-3 py-1 rounded-full shadow-lg">
                    <Camera size={13} />
                    <span>{alb.photos.length} PHOTOS</span>
                  </span>
                </div>

                {/* Hover Cue */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10">
                  <span className="bg-white text-[#05070a] text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Full Gallery ↗
                  </span>
                </div>
              </div>

              {/* Album Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-black uppercase text-white tracking-wide group-hover:text-[#ea1c24] transition-colors">
                        {alb.name}
                      </h3>
                      <p className="text-xs text-[#ea1c24] font-semibold mt-0.5">
                        {alb.vehicle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {alb.tagline}
                  </p>

                  {/* Specs Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {alb.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-medium text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail Preview Strip */}
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {alb.photos.slice(0, 4).map((p, idx) => (
                      <div
                        key={p + idx}
                        onClick={() => openLightbox(alb, idx)}
                        className="relative h-14 rounded-lg overflow-hidden border border-white/10 cursor-pointer group/thumb hover:border-[#ea1c24]"
                      >
                        <img
                          src={p}
                          alt="preview"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                        />
                        {idx === 3 && alb.photos.length > 4 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-xs font-bold text-white">
                            +{alb.photos.length - 4}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => openLightbox(alb, 0)}
                    className="flex-1 bg-white hover:bg-zinc-200 text-[#05070a] font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Album</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <a
                    href={`https://wa.me/94777177452?text=${encodeURIComponent(
                      `Hello Carmate! I am inquiring about ${alb.name} (${alb.vehicle}). Could you share details & pricing?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-[#05070a] border border-[#25d366]/30 rounded-xl transition-all"
                    title="Inquire via WhatsApp"
                  >
                    <MessageSquareQuote size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AlbumLightboxModal
        album={activeAlbum}
        initialIndex={photoIndex}
        isOpen={!!activeAlbum}
        onClose={() => setActiveAlbum(null)}
      />
    </section>
  );
}
