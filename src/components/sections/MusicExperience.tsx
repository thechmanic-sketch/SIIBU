"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePlayer } from "@/lib/PlayerContext";
import { ALBUMS, paletteFor } from "@/lib/site-data";

export default function MusicExperience({ showHeading = true }: { showHeading?: boolean }) {
  const [albumIndex, setAlbumIndex] = useState(0);
  const { albumIndex: playingAlbum, trackIndex: playingTrack, isPlaying, progress, playTrack } = usePlayer();

  const album = ALBUMS[albumIndex];

  return (
    <section id="music" className="relative min-h-screen w-full bg-neutral-950 px-6 py-24 text-white sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-white/50 uppercase">03 — Music Experience</span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Discography</h2>
        </>
      )}

      <div className="mt-12 flex gap-4">
        {ALBUMS.map((a, i) => (
          <button
            key={a.id}
            onClick={() => setAlbumIndex(i)}
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
          className={`aspect-square w-full rounded-lg bg-gradient-to-br shadow-2xl ${paletteFor(albumIndex)}`}
        />

        <div className="flex flex-col justify-center gap-1">
          {album.tracks.map((track, i) => {
            const active = playingAlbum === albumIndex && playingTrack === i;
            return (
              <button
                key={track.title}
                onClick={() => playTrack(albumIndex, i)}
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
