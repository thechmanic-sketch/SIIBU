"use client";

import { useEffect, useState } from "react";
import { ARTIST_NAME } from "@/lib/site-data";

const DRAW_MS = 2600;
const FILL_MS = 900;
const HOLD_MS = 500;
const FADE_MS = 800;

export default function Preloader() {
  const [phase, setPhase] = useState<"drawing" | "filling" | "holding" | "fading" | "done">(
    "drawing"
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("filling"), DRAW_MS);
    const t2 = setTimeout(() => setPhase("holding"), DRAW_MS + FILL_MS);
    const t3 = setTimeout(() => setPhase("fading"), DRAW_MS + FILL_MS + HOLD_MS);
    const t4 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, DRAW_MS + FILL_MS + HOLD_MS + FADE_MS);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const filled = phase === "filling" || phase === "holding" || phase === "fading";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink transition-opacity ease-out"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <svg
        viewBox="0 0 600 140"
        className="w-64 sm:w-[420px]"
        aria-label={ARTIST_NAME}
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="preloader-draw-text"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontWeight: 700,
            fontSize: "112px",
            letterSpacing: "0.02em",
            fill: filled ? "#D19A3E" : "transparent",
            fillOpacity: filled ? 1 : 0,
            stroke: "#E7D6B4",
            strokeWidth: 1.5,
            transition: `fill-opacity ${FILL_MS}ms ease-out`,
            animationDuration: `${DRAW_MS}ms`,
          }}
        >
          {ARTIST_NAME}
        </text>
      </svg>
    </div>
  );
}
