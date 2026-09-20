"use client";

import { ProjectAlbumsSection } from "@/components/ui/project-albums-section";
import { VideoReelsSection } from "@/components/ui/video-reels-section";

export default function GalleryPage() {
  return (
    <div className="bg-[#05070a] text-white">
      {/* Header */}
      <div className="pt-32 pb-12 text-center max-w-3xl mx-auto px-4">
        <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3 block">
          Showcase Archive
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
          Gallery &amp; Builds
        </h1>
        <p className="text-sm text-zinc-400">
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
