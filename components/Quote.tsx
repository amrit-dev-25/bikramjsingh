import { quote } from "@/lib/content";

export default function Quote() {
  return (
    <section className="relative flex h-svh flex-col items-center bg-[#f6f6f2] px-6 pt-[33vh] text-center">
      {/* Ghost quote mark, cropped by the top-left corner */}
      <svg
        aria-hidden
        viewBox="0 0 190 187"
        className="pointer-events-none absolute -left-2 top-0 w-44 fill-[#e9e9e7] md:w-[14vw]"
      >
        <path d="M0 0H88V83L48 187H0Z M105 0H190V83L150 187H105Z" />
      </svg>

      <blockquote>
        <p className="bg-linear-to-r from-[#bdbdba] via-[#5f5f5d] to-[#b3b3b0] bg-clip-text font-display text-[clamp(2rem,4.6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-transparent">
          {quote.text}
        </p>
        <footer className="mt-6 font-display text-[clamp(1.5rem,3vw,3.25rem)] uppercase tracking-[-0.01em] text-[#111]">
          ~ {quote.author}
        </footer>
      </blockquote>
    </section>
  );
}