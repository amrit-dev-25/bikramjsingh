"use client";

import { useEffect, useRef } from "react";
import { links, socials } from "@/components/MenuPanel";
import { studio } from "@/lib/content";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);

const FADE_IN = 0.6; // white -> black over this much scrolling (fraction of viewport height)

const label = "font-sans text-[11px] uppercase tracking-[0.18em] opacity-60";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let vh = 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      const top = el.getBoundingClientRect().top;
      const f = smooth(clamp((vh - top) / (FADE_IN * vh)));
      el.style.backgroundColor = `rgb(${mix(246, 17, f)}, ${mix(246, 17, f)}, ${mix(242, 17, f)})`;
    };
    const measure = () => {
      vh = window.innerHeight;
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
    <footer ref={ref} className="relative bg-[#f6f6f2]">
      {/* Text flips colour against the fading background (same trick as the navbar) */}
      <div className="flex min-h-[85svh] flex-col justify-between px-6 pb-6 pt-[16vh] text-white mix-blend-difference md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-[clamp(2rem,3.8vw,4.75rem)] leading-[1.02] tracking-[-0.02em]">
              Let&apos;s make something you&apos;ll want to watch again.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block border-b border-current pb-2 font-sans text-[clamp(0.9rem,1.1vw,1.25rem)] uppercase"
            >
              Start an enquiry
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-8">
            <p className={label}>Menu</p>
            <ul className="mt-5 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-[clamp(0.85rem,1vw,1.1rem)] uppercase transition-opacity hover:opacity-60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className={label}>Follow</p>
            <ul className="mt-5 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="font-sans text-[clamp(0.85rem,1vw,1.1rem)] uppercase transition-opacity hover:opacity-60"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <p className="font-display text-[clamp(2.25rem,6vw,8rem)] uppercase leading-[0.9] tracking-[-0.03em]">
            {studio.name}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-current/30 pt-5 font-sans text-xs uppercase tracking-wide">
            <span>
              © {new Date().getFullYear()} {studio.name}
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="uppercase transition-opacity hover:opacity-60"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}