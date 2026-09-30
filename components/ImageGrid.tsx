"use client";

import { gridImages } from "@/lib/content";

/**
 * THE EFFECT GOES HERE.
 * Right now it's a plain masonry-ish grid with a simple hover so the
 * layout is ready. Tell me the effect and we'll build it on these tiles
 * (each tile is one <figure>; the wrapper is the <section>).
 */
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
  "",
];

export default function ImageGrid() {
  return (
    <section id="moments" className="px-6 py-24 md:px-12 md:py-32">
      <h2 className="max-w-2xl font-display text-4xl md:text-6xl">
        Moments we kept
      </h2>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
        {gridImages.map((g, i) => (
          <figure
            key={g.id}
            className={`group relative overflow-hidden rounded-sm bg-ink-soft ${spans[i] ?? ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={g.img}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
