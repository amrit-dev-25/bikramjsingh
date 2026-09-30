import Image from "next/image";
import { studio } from "@/lib/content";

// Put the hero photo at /public/hero.jpg
export default function Hero() {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden bg-ink-soft">
      {/* 1. Background image */}
      <Image
        src="/h3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
  aria-hidden
  className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.2)_22%,rgba(0,0,0,0.1))]"
/>


      {/* 3. Top-right paragraph */}
      <p className="absolute right-6 top-28 z-10 max-w-[min(26rem,78vw)] text-right text-[13px] font-medium leading-[1.7] text-white md:right-10 md:top-[19%] md:text-[15px]">
        {studio.intro}
      </p>

      {/* 4. Bottom-left headline */}
      <h1 className="absolute bottom-5 left-6 right-6 z-10 font-display text-[clamp(3.25rem,8.4vw,11.5rem)] leading-[0.92] tracking-[-0.035em] text-cream md:bottom-7 md:left-[3.3vw]">
        {studio.headline}
      </h1>
    </section>
  );
}