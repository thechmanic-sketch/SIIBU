"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_ITEMS, paletteFor } from "@/lib/site-data";

export default function DestinationsGrid() {
  return (
    <section className="relative w-full bg-black px-6 py-24 text-white sm:px-16">
      <span className="text-xs tracking-[0.4em] text-white/50 uppercase">Explore</span>
      <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Where to next</h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              href={item.href}
              className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br p-6 ${paletteFor(i)}`}
            >
              <span className="text-xs text-white/50">{item.number}</span>
              <span className="mt-1 text-xl font-medium transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
