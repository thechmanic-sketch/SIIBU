"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, EXPO_OUT } from "@/lib/gsap";
import { ARTIST_NAME, NAV_ITEMS } from "@/lib/site-data";

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open && listRef.current) {
      const items = listRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.9, ease: EXPO_OUT, stagger: 0.05 }
      );
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-label={`${ARTIST_NAME} — Home`}
        className="fixed left-6 top-6 z-50 text-sm font-semibold tracking-[0.3em] text-white uppercase mix-blend-difference"
      >
        {ARTIST_NAME}
      </Link>

      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed right-6 top-6 z-50 flex items-center gap-2 text-xs tracking-[0.3em] text-white/80 uppercase mix-blend-difference"
      >
        <span>Menu</span>
        <span className="flex flex-col gap-1">
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-black px-6 py-8 text-white sm:px-16 sm:py-12"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-[0.3em] uppercase text-white/60">{ARTIST_NAME}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-xs tracking-[0.3em] uppercase text-white/80"
              >
                Close ✕
              </button>
            </div>

            <ul ref={listRef} className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="overflow-hidden">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-item group flex items-baseline gap-6 border-b border-white/10 py-4 sm:py-5"
                  >
                    <span className="text-xs text-white/40">{item.number}</span>
                    <span className="text-3xl font-medium transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 text-xs tracking-widest text-white/50 uppercase">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Spotify</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
