"use client";

import { useEffect, useRef } from "react";
import { gsap, EXPO_OUT } from "@/lib/gsap";

export default function SplitReveal({
  children,
  as: Tag = "div",
  className,
}: {
  children: string;
  as?: "h2" | "h3" | "p" | "div";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>(".split-word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: "100%", rotate: 5, opacity: 0 },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: EXPO_OUT,
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const words = children.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <span className="split-word-inner inline-block">
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
