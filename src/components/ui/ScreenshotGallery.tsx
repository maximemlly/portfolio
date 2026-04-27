"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  screenshots: string[];
  title: string;
}

export default function ScreenshotGallery({ screenshots, title }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-text-primary font-semibold text-lg">Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(src)}
              className="relative aspect-video rounded-xl overflow-hidden border border-white/7 hover:border-accent/30 transition-all duration-200 group"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={selected} alt={title} fill className="object-contain" />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
