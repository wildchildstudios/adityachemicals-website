"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface EventGalleryProps {
  images: string[];
}

export default function EventGallery({ images }: EventGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, images.length]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer overflow-hidden rounded-[8px] border border-surface-container-highest bg-surface-container-low aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setActiveIdx(idx)}
          >
            <Image
              src={src}
              alt={`Event photo ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-deep-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl select-none">zoom_in</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep-navy/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200"
            onClick={() => setActiveIdx(null)}
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-3xl select-none">close</span>
          </button>

          {/* Navigation - Left */}
          <button
            className="absolute left-4 md:left-8 z-45 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
            }}
            aria-label="Previous Image"
          >
            <span className="material-symbols-outlined text-3xl select-none">chevron_left</span>
          </button>

          {/* Navigation - Right */}
          <button
            className="absolute right-4 md:right-8 z-45 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Next Image"
          >
            <span className="material-symbols-outlined text-3xl select-none">chevron_right</span>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] px-4 flex flex-col items-center justify-center"
          >
            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIdx]}
                alt={`Expanded event photo ${activeIdx + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>
            {/* Image counter / indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-semibold uppercase tracking-wider">
              Image {activeIdx + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
