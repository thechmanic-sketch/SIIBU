"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/lib/LenisContext";

const COVER_MS = 600;
const HOLD_MS = 120;
const REVEAL_MS = 600;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);
  const [displayed, setDisplayed] = useState(children);
  const [phase, setPhase] = useState<"idle" | "covering" | "revealing" | "resetting">("idle");

  useEffect(() => {
    if (prevPathname.current === pathname) {
      setDisplayed(children);
      return;
    }
    prevPathname.current = pathname;

    document.body.style.overflow = "hidden";
    setPhase("covering");

    const t1 = setTimeout(() => {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      setDisplayed(children);
      setPhase("revealing");
    }, COVER_MS + HOLD_MS);

    const t2 = setTimeout(() => {
      setPhase("resetting");
      document.body.style.overflow = "";
    }, COVER_MS + HOLD_MS + REVEAL_MS);

    const t3 = setTimeout(() => {
      setPhase("idle");
    }, COVER_MS + HOLD_MS + REVEAL_MS + 30);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (phase === "idle" && prevPathname.current === pathname) {
      setDisplayed(children);
    }
  }, [children, pathname, phase]);

  const transform =
    phase === "covering"
      ? "translateY(0%)"
      : phase === "revealing"
        ? "translateY(100%)"
        : "translateY(-100%)";

  const transition =
    phase === "covering"
      ? `transform ${COVER_MS}ms ${EASE}`
      : phase === "revealing"
        ? `transform ${REVEAL_MS}ms ${EASE}`
        : "none";

  return (
    <>
      {displayed}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[150] bg-ink"
        style={{ transform, transition }}
      />
    </>
  );
}
