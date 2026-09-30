"use client";

import { useEffect, useRef } from "react";
import { gridImages } from "@/lib/content";

const CENTER = 7; // middle cell of the 15
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function PhotoGrid() {
  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const stage = stageRef.current!;
    const center = centerRef.current!;
    let vh = 0;
    let animPx = 0; // scroll distance for the shrink/reveal
    let shiftPx = 0; // scroll distance for the grid moving up at the end
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrolled = clamp(-wrap.getBoundingClientRect().top, 0, animPx + shiftPx);
      const q = clamp(scrolled / animPx); // 0 -> 1 during the animation
      const t = shiftPx ? clamp((scrolled - animPx) / shiftPx) : 0;

      const g = 0.5 + 0.5 * q; // whole grid scale: 0.5 -> 1
      const c = (2 - q) / g; // centre photo: looks 2x a tile -> 1x a tile

      stage.style.transform = `translate3d(0, ${-shiftPx * t}px, 0) scale(${g})`;
      stage.style.setProperty("--o", String(clamp(q / 0.7)));
      center.style.transform = `scale(${c})`;
    };

    const measure = () => {
      vh = window.innerHeight;
      const gridH = stage.offsetHeight; // unaffected by transforms
      animPx = vh * 1.8;
      shiftPx = Math.max(0, (gridH - vh) / 2 + vh * 0.06);
      wrap.style.height = `${vh + animPx + shiftPx}px`;
      update();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrapRef} id="moments" className="relative h-[400vh]">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden bg-[#f6f6f2]">
        <div
          ref={stageRef}
          className="grid w-[88vw] shrink-0 grid-cols-3 gap-x-[3vw] gap-y-[4vw] will-change-transform md:w-[82vw] md:grid-cols-5 md:gap-x-[1.9vw] md:gap-y-[2.7vw]"
          style={{ transform: "scale(0.5)", ["--o" as string]: 0 }}
        >
          {gridImages.map((g, i) =>
            i === CENTER ? (
              <div
                key={g.id}
                ref={centerRef}
                className="relative z-10 aspect-[4/5] will-change-transform"
                style={{ transform: "scale(4)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.alt} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div key={g.id} className="relative aspect-[4/5] overflow-hidden [opacity:var(--o)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}