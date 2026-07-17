"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, paletteFor } from "@/lib/site-data";

export default function Shop() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-neutral-950 px-6 py-24 text-white sm:px-16">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
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
            <div className={`aspect-square w-full rounded-md bg-gradient-to-br ${paletteFor(i)}`} />
            <p className="mt-3 text-sm">{p.name}</p>
            <p className="text-sm text-white/50">{p.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
