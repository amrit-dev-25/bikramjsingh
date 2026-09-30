type Props = { open: boolean; onClose: () => void };

// Swap the "#" hrefs for real sections as you build them.
export const links = [
  { label: "Home", href: "/" },
  { label: "Real Weddings", href: "#moments" },
  { label: "Portfolio", href: "#films" },
  { label: "Blogs", href: "#" },
  { label: "Films", href: "#films" },
  { label: "Testimonials", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function MenuPanel({ open, onClose }: Props) {
  return (
    <div
      id="site-menu"
      inert={!open}
      className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#f6f6f2] px-6 pb-8 pt-28 text-[#111] transition-[transform,visibility] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:px-10 ${
        open ? "visible translate-y-0" : "invisible -translate-y-full"
      }`}
    >
      <ul>
        {links.map((l, i) => (
          <li key={l.label} className="overflow-hidden">
            <a
              href={l.href}
              onClick={onClose}
              className="block font-sans text-[clamp(2.5rem,4.6vw,5rem)] font-normal uppercase leading-[0.95] tracking-[-0.02em]"
            >
              <span
                className={`block origin-top-left transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-0 rotate-0" : "-translate-y-[120%] -rotate-3"
                }`}
                style={{ transitionDelay: open ? `${380 + i * 70}ms` : "0ms" }}
              >
                {l.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`mt-auto pt-8 transition-[opacity,transform] duration-700 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: open ? "1000ms" : "0ms" }}
      >
        <ul className="grid grid-cols-2 border border-[#111] md:grid-cols-4">
          {socials.map((s) => (
            <li
              key={s.label}
              className="relative border-[#111] after:absolute after:bottom-2.5 after:right-0 after:top-2.5 after:w-px after:bg-[#111] last:after:hidden max-md:[&:nth-child(2)]:after:hidden max-md:[&:nth-child(n+3)]:border-t"
            >
              <a
                href={s.href}
                className="flex items-center justify-center gap-2 py-3.5 text-[13px] uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {s.label}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}