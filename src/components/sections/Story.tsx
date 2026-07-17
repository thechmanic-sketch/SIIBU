"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { BIO_LONG, TIMELINE } from "@/lib/site-data";
import SplitReveal from "@/components/SplitReveal";

export default function Story({ showHeading = true }: { showHeading?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={containerRef} className="relative w-full bg-black px-6 py-24 text-white sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-white/50 uppercase">04 — Story</span>
          <SplitReveal as="h2" className="mt-2 text-3xl font-semibold sm:text-5xl">
            Biography
          </SplitReveal>
        </>
      )}

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
        {BIO_LONG}
      </p>

      <div className="relative mt-16 max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />
        <div className="flex flex-col gap-14">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-black" />
              <span className="text-sm tracking-widest text-white/40">{item.year}</span>
              <h3 className="mt-1 text-xl font-medium sm:text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/60">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
