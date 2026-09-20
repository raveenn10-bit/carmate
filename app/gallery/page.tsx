"use client";

import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";

export default function GalleryPage() {
  return (
    <div className="bg-[#05070a] text-white">
      {/* Header */}
      <div className="pt-24 sm:pt-32 pb-8 sm:pb-12 text-center max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3 block">
          Showcase Archive
        </span>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
          Gallery &amp; Builds
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
          Inspect our completed bespoke builds, photo chronicles, and 9:16 vertical video reels.
        </p>
      </div>

      {/* Project Albums Component */}
      <ProjectAlbumsSection />

      {/* 9:16 Video Reels Component */}
      <VideoReelsSection />
    </div>
  );
}
