"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ALBUMS } from "@/lib/site-data";

export default function MusicExperience() {
  const [albumIndex, setAlbumIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const album = ALBUMS[albumIndex];

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.crossOrigin = "anonymous";
    const audio = audioRef.current;

    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, []);

  function ensureAudioGraph() {
    if (!audioRef.current) return;
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
      sourceRef.current = audioCtxRef.current.createMediaElementSource(audioRef.current);
      sourceRef.current.connect(audioCtxRef.current.destination);
    }
    audioCtxRef.current.resume();
  }

  function playTrack(index: number) {
    const audio = audioRef.current;
    if (!audio) return;
    ensureAudioGraph();

    if (trackIndex === index) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
      return;
    }

    audio.src = album.tracks[index].src;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    setTrackIndex(index);
    setIsPlaying(true);
  }

  function selectAlbum(i: number) {
    setAlbumIndex(i);
    setTrackIndex(null);
    setIsPlaying(false);
    audioRef.current?.pause();
    setProgress(0);
  }

  return (
    <section id="music" className="relative min-h-screen w-full bg-neutral-950 px-6 py-24 text-white sm:px-16">
      <span className="text-xs tracking-[0.4em] text-white/50 uppercase">03 — Music Experience</span>
      <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Discography</h2>

      <div className="mt-12 flex gap-4">
        {ALBUMS.map((a, i) => (
          <button
            key={a.id}
            onClick={() => selectAlbum(i)}
            className={`text-sm tracking-wide uppercase transition ${
              i === albumIndex ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            {a.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-[320px_1fr]">
        <motion.div
          key={album.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-square w-full rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl"
        />

        <div className="flex flex-col justify-center gap-1">
          {album.tracks.map((track, i) => {
            const active = trackIndex === i;
            return (
              <button
                key={track.title}
                onClick={() => playTrack(i)}
                className={`group flex items-center justify-between border-b border-white/10 py-4 text-left transition ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="w-5 text-xs text-white/40">
                    {active && isPlaying ? "❚❚" : "▶"}
                  </span>
                  <span>{track.title}</span>
                </span>
                <span className="flex items-center gap-4">
                  {active && (
                    <span className="h-px w-24 overflow-hidden bg-white/15">
                      <span
                        className="block h-full bg-white transition-[width]"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </span>
                  )}
                  <span className="text-xs text-white/40">{track.duration}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
