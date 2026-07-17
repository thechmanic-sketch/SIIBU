"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/site-data";

export default function Shop() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="shop" className="relative w-full bg-neutral-950 px-6 py-24 text-white sm:px-16">
      <span className="text-xs tracking-[0.4em] text-white/50 uppercase">07 — Shop</span>
      <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Merchandise</h2>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transition: "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear",
              transform:
                hovered === p.id ? "scale(1.04) rotate(1deg)" : "scale(1) rotate(0deg)",
              opacity: hovered !== null && hovered !== p.id ? 0.4 : 1,
            }}
            className="cursor-pointer"
          >
            <div className="aspect-square w-full rounded-md bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <p className="mt-3 text-sm">{p.name}</p>
            <p className="text-sm text-white/50">{p.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
