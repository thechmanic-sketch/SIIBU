"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePlayer } from "@/lib/PlayerContext";
import { ALBUMS, paletteFor } from "@/lib/site-data";
import MediaImage from "@/components/MediaImage";

export default function MusicExperience({ showHeading = true }: { showHeading?: boolean }) {
  const [albumIndex, setAlbumIndex] = useState(0);
  const { albumIndex: playingAlbum, trackIndex: playingTrack, isPlaying, progress, playTrack } = usePlayer();

  const album = ALBUMS[albumIndex];

  return (
    <section id="music" className="relative min-h-screen w-full bg-umber-2 px-6 py-24 text-sand sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-ochre uppercase">03 — Music Experience</span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Discography</h2>
        </>
      )}

      <div className="mt-12 flex gap-4">
        {ALBUMS.map((a, i) => (
          <button
            key={a.id}
            onClick={() => setAlbumIndex(i)}
            className={`text-sm tracking-wide uppercase transition ${
              i === albumIndex ? "text-ochre" : "text-sand/40 hover:text-sand/70"
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
          className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl"
        >
          <MediaImage
            src={album.cover}
            alt={album.title}
            fallbackClassName={`h-full w-full bg-gradient-to-br ${paletteFor(albumIndex)}`}
          />
        </motion.div>

        <div className="flex flex-col justify-center gap-1">
          {album.tracks.map((track, i) => {
            const active = playingAlbum === albumIndex && playingTrack === i;
            return (
              <button
                key={track.title}
                onClick={() => playTrack(albumIndex, i)}
                className={`group flex items-center justify-between border-b border-sand/10 py-4 text-left transition ${
                  active ? "text-ochre" : "text-sand/60 hover:text-sand"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="w-5 text-xs text-sand/40">
                    {active && isPlaying ? "❚❚" : "▶"}
                  </span>
                  <span>{track.title}</span>
                </span>
                <span className="flex items-center gap-4">
                  {active && (
                    <span className="h-px w-24 overflow-hidden bg-sand/15">
                      <span
                        className="block h-full bg-ochre transition-[width]"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </span>
                  )}
                  <span className="text-xs text-sand/40">{track.duration}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
