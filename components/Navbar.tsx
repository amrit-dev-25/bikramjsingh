"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MenuPanel from "@/components/MenuPanel";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-24 items-center justify-between px-6 mix-blend-difference md:px-10 mt-2.5">
        <a
          href="/"
          aria-label="Home"
          onClick={() => setOpen(false)}
          className="pointer-events-auto"
        >
          <Image
            src="/logo-mann.png"
            alt="Studio logo"
            width={220}
            height={120}
            priority
            className="h-auto w-[76px] md:w-[100px]"
          />
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto flex h-10 w-12 flex-col items-end justify-center gap-3"
        >
          <span
            className={`block h-[2px] w-10 bg-white transition-transform duration-500 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-10 bg-white transition-transform duration-500 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <MenuPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}