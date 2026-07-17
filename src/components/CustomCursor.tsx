"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    document.body.classList.add("cursor-none");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };

    function onMouseMove(e: MouseEvent) {
      target.x = e.clientX;
      target.y = e.clientY;
    }

    function onMouseOver(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest("a, button, [role='button'], input, textarea");
      setHovering(!!el);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    let raf: number;
    function tick() {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ willChange: "transform" }}
    >
      <div
        className="flex items-center justify-center transition-[width,height] duration-200 ease-out"
        style={{ width: hovering ? 40 : 20, height: hovering ? 40 : 20 }}
      >
        <span
          className="absolute bg-white transition-all duration-200 ease-out"
          style={{
            width: hovering ? 0 : 14,
            height: 1.5,
          }}
        />
        <span
          className="absolute bg-white transition-all duration-200 ease-out"
          style={{
            width: 1.5,
            height: hovering ? 0 : 14,
          }}
        />
        <span
          className="absolute rounded-full border border-white transition-all duration-200 ease-out"
          style={{
            width: hovering ? 40 : 6,
            height: hovering ? 40 : 6,
            opacity: hovering ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
