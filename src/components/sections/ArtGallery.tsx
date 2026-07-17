"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, EXPO_OUT } from "@/lib/gsap";
import { ARTWORKS, paletteFor } from "@/lib/site-data";
import MediaImage from "@/components/MediaImage";

const FILTERS = ["all", "painting", "photography", "design"] as const;
type Filter = (typeof FILTERS)[number];

export default function ArtGallery({ showHeading = true }: { showHeading?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const items = ARTWORKS.filter((a) => filter === "all" || a.category === filter);
  const active = ARTWORKS.find((a) => a.id === selected);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll(".gallery-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: EXPO_OUT,
          stagger: 0.12,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="gallery" className="relative w-full bg-umber-2 px-6 py-24 text-sand sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-ochre uppercase">05 — Art Gallery</span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Paintings · Photography · Design</h2>
        </>
      )}

      <div className="mt-8 flex gap-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm uppercase tracking-wide transition ${
              filter === f ? "text-ochre" : "text-sand/40 hover:text-sand/70"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        ref={gridRef}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        <AnimatePresence>
          {items.map((art, i) => (
            <motion.button
              key={art.id}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelected(art.id)}
              onMouseEnter={() => setHovered(art.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transition: "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear",
                transform:
                  hovered === art.id
                    ? "scale(1.04) rotate(-1deg)"
                    : "scale(1) rotate(0deg)",
                opacity: hovered !== null && hovered !== art.id ? 0.4 : 1,
              }}
              className="gallery-card group relative aspect-[4/5] overflow-hidden rounded-md"
            >
              <MediaImage
                src={art.image}
                alt={art.title}
                fallbackClassName={`h-full w-full bg-gradient-to-br ${paletteFor(i)}`}
              />
              <span className="absolute left-3 top-3 text-[10px] uppercase tracking-widest text-sand/40">
                {art.category}
              </span>
              <span className="absolute bottom-3 left-3 text-xs tracking-wide text-sand/80 opacity-0 transition group-hover:opacity-100">
                {art.title}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[80vh] w-full max-w-2xl rounded-md bg-umber p-1"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
                <MediaImage
                  src={active.image}
                  alt={active.title}
                  fallbackClassName={`h-full w-full bg-gradient-to-br ${paletteFor(ARTWORKS.indexOf(active))}`}
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-sand/90">{active.title}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sand/40">{active.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
