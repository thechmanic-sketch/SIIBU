"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/site-data";

export default function Shop() {
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
            className="group cursor-pointer"
          >
            <div className="aspect-square w-full rounded-md bg-gradient-to-br from-neutral-800 to-neutral-900 transition group-hover:from-neutral-700 group-hover:to-neutral-800" />
            <p className="mt-3 text-sm">{p.name}</p>
            <p className="text-sm text-white/50">{p.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
