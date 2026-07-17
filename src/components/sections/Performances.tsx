"use client";

import { motion } from "framer-motion";
import { SHOWS } from "@/lib/site-data";

export default function Performances({ showHeading = true }: { showHeading?: boolean }) {
  const upcoming = SHOWS.filter((s) => s.status === "upcoming");
  const past = SHOWS.filter((s) => s.status === "past");

  return (
    <section id="performances" className="relative w-full bg-black px-6 py-24 text-white sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-white/50 uppercase">06 — Performances</span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Tours &amp; Events</h2>
        </>
      )}

      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-white/40">Upcoming</h3>
        <div className="mt-4 flex flex-col">
          {upcoming.map((show, i) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-between border-b border-white/10 py-5"
            >
              <div className="flex items-baseline gap-6">
                <span className="w-24 text-sm text-white/50">
                  {new Date(show.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="text-lg">{show.city}</span>
                <span className="text-sm text-white/40">{show.venue}</span>
              </div>
              <button className="text-xs uppercase tracking-widest text-white/60 transition hover:text-white">
                Tickets →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-white/40">Past</h3>
        <div className="mt-4 flex flex-col opacity-50">
          {past.map((show) => (
            <div key={show.id} className="flex items-center justify-between border-b border-white/10 py-4">
              <div className="flex items-baseline gap-6">
                <span className="w-24 text-sm text-white/50">
                  {new Date(show.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span>{show.city}</span>
                <span className="text-sm text-white/40">{show.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
