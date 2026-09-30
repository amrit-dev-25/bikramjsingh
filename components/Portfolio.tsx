"use client";

import { useEffect, useRef } from "react";
import { films } from "@/lib/content";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);

// Tuning knobs (fractions of viewport height unless noted)
const FADE_FROM = 0.65; // background starts darkening when the dark block's top is this far down the screen
const FADE_OVER = 0.5; // fully black after scrolling this much further
const H_START = 0.65; // cards start sliding left when the card row's top reaches this point
const H_SPEED = 1.3; // px moved sideways per px scrolled
const FADE_OUT = 0.55; // black -> white over this much scrolling as the cards leave

export default function Portfolio() {
  const darkRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const dark = darkRef.current!;
    const wrap = wrapRef.current!;
    const track = trackRef.current!;
    const section = sectionRef.current!;
    let vh = 0;
    let dist = 0; // how far the track has to travel sideways
    let extra = 0; // extra scroll distance while pinned
    let raf = 0;

    const update = () => {
      raf = 0;

      // 1. Background: paper -> black on the way in, black -> paper on the way out
      const top = dark.getBoundingClientRect().top;
      const wRect = wrap.getBoundingClientRect();
      const pIn = smooth(clamp((FADE_FROM * vh - top) / (FADE_OVER * vh)));
      const pOut = smooth(clamp((vh - wRect.bottom) / (FADE_OUT * vh)));
      const k = pIn * (1 - pOut);
      section.style.backgroundColor = `rgb(${mix(246, 17, k)}, ${mix(246, 17, k)}, ${mix(242, 17, k)})`;

      // Text in the dark block flips to dark as the background turns white
      const c = mix(255, 17, pOut);
      dark.style.color = `rgb(${c}, ${c}, ${c})`;

      // 2. Cards: vertical scroll -> horizontal slide
      const prog = clamp((H_START * vh - wRect.top) / (H_START * vh + extra));
      track.style.transform = `translate3d(${-dist * prog}px, 0, 0)`;
    };

    const measure = () => {
      vh = window.innerHeight;
      dist = Math.max(0, track.offsetWidth - window.innerWidth);
      extra = Math.max(0, dist / H_SPEED - H_START * vh);
      wrap.style.height = `${vh + extra}px`;
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
    <section ref={sectionRef} id="films" className="bg-[#f6f6f2]">
      {/* Paper strip: same background as the rest, fades together */}
      <div className="flex justify-center pb-[14vh] pt-[30vh]">
        <a
          href="#films"
          className="border-b border-white pb-3 font-sans text-[clamp(1rem,1.9vw,1.75rem)] uppercase text-white mix-blend-difference"
        >
          Explore our portfolio
        </a>
      </div>

      {/* Dark block: only the text colour now, the section handles the fade */}
      <div ref={darkRef} className="text-white">
        <div className="px-[3.5vw] pt-[27vh]">
          <h2 className="font-display text-[clamp(3.5rem,9vw,11.5rem)] font-normal leading-[0.92] tracking-[-0.035em]">
            Our <em className="italic">real</em> weddings
          </h2>
          <a
            href="#"
            className="mt-[8vh] inline-block border-b border-white pb-3 font-sans text-[clamp(1.1rem,1.8vw,1.75rem)] uppercase"
          >
            See all weddings
          </a>
        </div>

        {/* Pinned row: vertical scroll drives the sideways slide */}
        <div ref={wrapRef} className="relative mt-[12vh] h-[300vh]">
          <div className="sticky top-0 h-svh overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-max gap-[8vw] pl-[20vw] pr-[8vw] pt-[3vh] will-change-transform md:gap-[10.7vw] md:pl-[47.5vw]"
            >
              {films.map((f) => (
                <a
                  key={f.id}
                  href="#"
                  className="group block w-[72vw] shrink-0 md:w-[45.5vw]"
                >
                  <p className="font-sans text-[clamp(1.1rem,1.8vw,1.6rem)]">
                    {f.names}
                  </p>
                  <div className="mt-3 aspect-[1.82] overflow-hidden rounded-[3px] bg-[#222]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.img}
                      alt={f.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-7 font-display text-[clamp(1.75rem,3.1vw,3.4rem)] italic leading-[1.05] tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <div className="mt-[7vh]">
                    <p className="font-display text-[clamp(1.25rem,1.8vw,1.75rem)] italic">
                      {f.place}
                    </p>
                    <p className="font-sans text-[clamp(1.1rem,1.6vw,1.5rem)]">
                      {f.year}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
