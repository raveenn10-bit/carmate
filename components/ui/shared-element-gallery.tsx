"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, MessageSquareQuote, ZoomIn } from "lucide-react";

// --- Types ---
export interface ImageData {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  vehicle?: string;
  category?: string;
  badge?: string;
}

export type GalleryItem = ImageData;

interface GalleryContextType {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
}

const GalleryContext = React.createContext<GalleryContextType | null>(null);

export function useGallery() {
  const context = React.useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a Gallery component");
  }
  return context;
}

// --- Physics ---
export const spring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 35,
  mass: 1,
};

// --- Components ---

/**
 * Root Gallery Provider
 * Manages the state of the expanded image and renders the Modal.
 */
export function Gallery({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(null);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [selectedImage]);

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  );
}

/**
 * Responsive Masonry Grid
 */
export function GalleryGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface GalleryImageProps {
  src: string;
  alt?: string;
  id: string;
  className?: string;
  title?: string;
  vehicle?: string;
  category?: string;
  badge?: string;
  loading?: "lazy" | "eager";
  children?: React.ReactNode;
}

/**
 * Individual Gallery Image Thumbnail
 */
export function GalleryImage({
  src,
  alt,
  id,
  className,
  title,
  vehicle,
  category,
  badge,
  loading = "lazy",
  children,
}: GalleryImageProps) {
  const context = React.useContext(GalleryContext);
  if (!context) throw new Error("GalleryImage must be used within a Gallery");

  return (
    <motion.div
      layout
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "group relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden border border-white/10 bg-[#0a0d14] hover:border-[#ea1c24]/50 transition-colors shadow-lg",
        className
      )}
      onClick={() => context.setSelectedImage({ id, src, alt, title, vehicle, category, badge })}
    >
      {/* Top Project Badge / Vehicle Tag */}
      {badge && (
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-md">
            {badge}
          </span>
        </div>
      )}

      {/* Top Right Zoom Hint */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
          <ZoomIn size={13} />
        </span>
      </div>

      <motion.img
        layoutId={`image-${id}`}
        src={src}
        alt={alt || title || "Gallery Image"}
        loading={loading}
        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 will-change-transform"
        variants={{
          hover: { scale: 0.985 },
          tap: { scale: 0.96 },
        }}
        transition={spring}
      />

      {/* Subtle hover overlay for premium automotive feel */}
      <motion.div
        variants={{
          hover: { opacity: 1 },
          tap: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none rounded-xl flex flex-col justify-end p-4 transition-opacity duration-300"
      >
        {category && (
          <span className="text-[10px] font-extrabold text-[#ea1c24] uppercase tracking-widest mb-1">
            {category}
          </span>
        )}
        {title && (
          <h4 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-1">
            {title}
          </h4>
        )}
        {vehicle && (
          <p className="text-[11px] text-zinc-400 line-clamp-1">
            {vehicle}
          </p>
        )}
      </motion.div>

      {children}
    </motion.div>
  );
}

/**
 * Expanded View Modal with Drag-to-Dismiss
 */
export function GalleryModal() {
  const context = React.useContext(GalleryContext);
  if (!context) return null;

  const { selectedImage, setSelectedImage } = context;

  return (
    <AnimatePresence>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Frosted glass backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          />

          {/* Interactive container for drag gesture */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8 cursor-zoom-out select-none"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragEnd={(_e, info) => {
              // Dismiss if dragged far enough or fast enough
              if (
                Math.abs(info.offset.y) > 100 ||
                Math.abs(info.velocity.y) > 300
              ) {
                setSelectedImage(null);
              }
            }}
            onClick={() => setSelectedImage(null)}
          >
            {/* The Shared Element */}
            <motion.img
              layoutId={`image-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.title || "Selected gallery image"}
              className="w-auto h-auto max-w-[95vw] max-h-[82vh] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(234,28,36,0.15)] border border-white/10 object-contain will-change-transform"
              draggable={false} // Prevent native drag to allow framer-motion drag
              transition={spring}
            />
          </motion.div>

          {/* Header Bar with project info & close button */}
          <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 z-50 flex items-center justify-between pointer-events-none">
            {selectedImage.title ? (
              <div className="bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider shadow-md">
                <span className="text-[#ea1c24] mr-2">CARMATE</span>
                <span>{selectedImage.title}</span>
                {selectedImage.badge && (
                  <span className="ml-2 text-zinc-400 hidden sm:inline">· {selectedImage.badge}</span>
                )}
              </div>
            ) : (
              <div />
            )}

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="pointer-events-auto w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 bg-black/75 hover:bg-[#ea1c24] active:bg-[#ea1c24] text-white rounded-full backdrop-blur-md transition-all border border-white/20 shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#ea1c24]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Bottom Action Pill with Vehicle Info & WhatsApp Inquiry CTA */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-auto sm:max-w-xl z-50 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.25 }}
              className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/15 px-4 sm:px-5 py-2.5 rounded-2xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              {selectedImage.vehicle && (
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-zinc-400 font-medium">Vehicle Specification</p>
                  <p className="text-xs font-bold text-white uppercase">{selectedImage.vehicle}</p>
                </div>
              )}
              <a
                href={`https://wa.me/94777177452?text=${encodeURIComponent(
                  `Hello Carmate! I am inquiring about ${selectedImage.title || "this build"} (${selectedImage.vehicle || "modification"}). Could you share pricing & details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all active:scale-95"
              >
                <MessageSquareQuote size={15} />
                <span>Get Quote on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
