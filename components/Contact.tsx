"use client";

import { useEffect, useRef } from "react";
import { contactImage, studio } from "@/lib/content";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);

// Keep this identical to FADE_OUT in Portfolio.tsx so the two sections match at the seam
const FADE_OUT = 0.55;

// Scroll distance for each wipe, in viewport heights
const IMG_SCROLL = 1.0;
const FORM_SCROLL = 1.0;

const word =
  "whitespace-nowrap font-sans text-[clamp(0.8rem,1.05vw,1.35rem)] font-medium uppercase tracking-[-0.03em]";
const field =
  "border-b border-[#111] bg-transparent px-3 py-2.5 font-sans text-[clamp(0.75rem,0.9vw,1.1rem)] outline-none placeholder:text-[#9b9b98] focus:border-b-2";

export default function Contact() {
  const wrapRef = useRef<HTMLElement>(null);
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const imgBox = imgBoxRef.current!;
    const img = imgRef.current!;
    const panel = panelRef.current!;
    let vh = 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);

      // Background: starts black (matching the portfolio) and fades to paper
      const f = smooth(clamp((vh - rect.top) / (FADE_OUT * vh)));
      wrap.style.backgroundColor = `rgb(${mix(17, 246, f)}, ${mix(17, 246, f)}, ${mix(17, 242, f)})`;
      const a = clamp(scrolled / (IMG_SCROLL * vh)); // image wipe 0 -> 1
      const b = clamp((scrolled - IMG_SCROLL * vh) / (FORM_SCROLL * vh)); // form wipe 0 -> 1

      imgBox.style.clipPath = `inset(0 0 0 ${(1 - a) * 100}%)`;
      img.style.transform = `scale(${1 + 0.12 * (1 - a)})`;
      panel.style.clipPath = `inset(0 0 0 ${(1 - b) * 100}%)`;
      panel.inert = b < 0.5; // no tabbing into a hidden form
    };

    const measure = () => {
      vh = window.innerHeight;
      wrap.style.height = `${vh * (1 + IMG_SCROLL + FORM_SCROLL + 0.2)}px`;
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
    <section
      ref={wrapRef}
      id="contact"
      className="relative h-[420vh] bg-[#000000]"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* 1. Full-screen image, unwraps right -> left */}
        <div
          ref={imgBoxRef}
          className="absolute inset-0"
          style={{ clipPath: "inset(0 0 0 100%)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={contactImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ transform: "scale(1.12)" }}
          />
        </div>

        {/* 2. Form panel, unwraps from the same side */}
        <div
          ref={panelRef}
          inert
          className="absolute inset-y-0 right-0 flex w-full flex-col items-center justify-center bg-[#f6f6f2] px-[4vw] text-[#111] md:w-[58vw]"
          style={{ clipPath: "inset(0 0 0 100%)" }}
        >
          <h2 className="font-display text-[clamp(2.75rem,5vw,6.5rem)] leading-none tracking-[-0.03em]">
            Hey There!
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-[6vh] flex w-full flex-col items-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-[1.2vw] gap-y-[2.2vh]">
              <span className={word}>My name is</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Jane Smith"
                aria-label="Your name"
                className={`${field} w-[11vw] min-w-[7rem]`}
              />
              <span className={word}>and I am planning a</span>
              <input
                name="event"
                placeholder="Wedding"
                aria-label="Type of event"
                className={`${field} w-[11vw] min-w-[7rem]`}
              />
              <span className={word}>in</span>
              <input
                name="location"
                placeholder="Thailand"
                aria-label="Location"
                className={`${field} w-[11vw] min-w-[7rem]`}
              />
              <span className={word}>on</span>
              <input
                type="date"
                name="date"
                aria-label="Date"
                className={`${field} w-[11vw] min-w-[8rem]`}
              />
              <span className={word}>my wedding planner is</span>
              <input
                name="planner"
                placeholder="This"
                aria-label="Wedding planner"
                className={`${field} w-[11vw] min-w-[7rem]`}
              />
              <span className={word}>and I&apos;m</span>
              <input
                name="instagram"
                placeholder="@Jane"
                aria-label="Instagram handle"
                className={`${field} w-[11vw] min-w-[7rem]`}
              />
              <span className={word}>on Instagram</span>
            </div>

            <div className="mt-[5vh] flex flex-wrap items-center justify-center gap-x-[1.2vw] gap-y-[2.2vh]">
              <span className={word}>Please email me your proposal at</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="jane@gmail.com"
                aria-label="Email"
                className={`${field} w-[15vw] min-w-[9rem]`}
              />
              <span className={word}>and contact me via mobile at</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+91 9898989898"
                aria-label="Mobile number"
                className={`${field} w-[15vw] min-w-[9rem]`}
              />
            </div>

            <button
              type="submit"
              className="mt-[5vh] h-[clamp(2.75rem,3.3vw,3.5rem)] w-[min(100%,24rem)] rounded-xl bg-[#111] font-sans text-[clamp(0.85rem,0.95vw,1.05rem)] font-semibold text-white transition-opacity hover:opacity-85"
            >
              Submit
            </button>

            <p className="mt-[3vh] max-w-[38rem] text-center font-sans text-[clamp(0.7rem,0.8vw,0.95rem)] text-[#444]">
              By submitting this form, you agree to the Terms &amp; Conditions,
              Privacy Policy, and service guidelines of {studio.name}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
