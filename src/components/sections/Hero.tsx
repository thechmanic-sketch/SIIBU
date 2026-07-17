"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { ARTIST_NAME } from "@/lib/site-data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        video,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const letters = ARTIST_NAME.split("");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-umber"
    >
      <video
        ref={videoRef}
        className="absolute inset-[-10%] h-[120%] w-full object-cover opacity-60"
        src="/video/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 text-xs tracking-[0.4em] text-ochre uppercase">
          Artist · Actor · Musician
        </span>

        <h1 className="flex flex-wrap justify-center text-6xl font-bold tracking-tight text-sand sm:text-8xl md:text-9xl">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-6 max-w-md text-sm text-sand/70"
        >
          A cinematic universe of sound, story, and visual art.
        </motion.p>
      </div>

      <button
        onClick={toggleSound}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-sand/30 text-sand/80 backdrop-blur-sm transition hover:border-ochre hover:text-ochre"
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        )}
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.3em] text-sand/50 uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
