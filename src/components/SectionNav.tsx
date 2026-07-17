"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/site-data";

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          className="group flex items-center justify-end gap-3"
        >
          <span
            className={`whitespace-nowrap text-xs tracking-widest text-white/0 transition group-hover:text-white/70 ${
              active === s.id ? "text-white/70" : ""
            }`}
          >
            {s.number}
          </span>
          <span
            className={`h-1.5 w-1.5 rounded-full border border-white/50 transition ${
              active === s.id ? "bg-white scale-125" : "bg-transparent"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
