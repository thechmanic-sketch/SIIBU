"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ARTIST_NAME } from "@/lib/site-data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  const letters = ARTIST_NAME.split("");

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/video/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 text-xs tracking-[0.4em] text-white/60 uppercase">
          Artist · Actor · Musician
        </span>

        <h1 className="flex flex-wrap justify-center text-6xl font-bold tracking-tight text-white sm:text-8xl md:text-9xl">
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
          className="mt-6 max-w-md text-sm text-white/70"
        >
          A cinematic universe of sound, story, and visual art.
        </motion.p>
      </div>

      <button
        onClick={toggleSound}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 backdrop-blur-sm transition hover:border-white hover:text-white"
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
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.3em] text-white/50 uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
