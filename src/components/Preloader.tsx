"use client";

import { useEffect, useState } from "react";
import { ARTIST_NAME } from "@/lib/site-data";

const SWEEP_MS = 1400;
const HOLD_MS = 300;
const FADE_MS = 600;

export default function Preloader() {
  const [phase, setPhase] = useState<"sweeping" | "fading" | "done">("sweeping");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setPhase("fading"), SWEEP_MS + HOLD_MS);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, SWEEP_MS + HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity ease-out"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <div className="relative inline-block">
        <span className="block select-none text-6xl font-bold tracking-tight text-white/10 sm:text-8xl">
          {ARTIST_NAME}
        </span>
        <span
          className="preloader-sweep-text absolute inset-0 block select-none overflow-hidden whitespace-nowrap text-6xl font-bold tracking-tight text-white sm:text-8xl"
          style={{ animationDuration: `${SWEEP_MS}ms` }}
        >
          {ARTIST_NAME}
        </span>
        <span
          className="preloader-sweep-glow pointer-events-none absolute top-0 h-full w-24 sm:w-32"
          style={{ animationDuration: `${SWEEP_MS}ms` }}
        />
      </div>
    </div>
  );
}
