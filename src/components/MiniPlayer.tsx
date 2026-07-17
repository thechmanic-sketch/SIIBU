"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePlayer } from "@/lib/PlayerContext";
import { ALBUMS, paletteFor } from "@/lib/site-data";

export default function MiniPlayer() {
  const { albumIndex, trackIndex, isPlaying, progress, togglePlay, next, prev, stop } = usePlayer();

  const album = ALBUMS[albumIndex];
  const track = trackIndex !== null ? album.tracks[trackIndex] : null;

  return (
    <AnimatePresence>
      {track && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-0 left-0 z-40 flex w-full items-center gap-4 border-t border-sand/10 bg-ink/90 px-4 py-3 text-sand backdrop-blur-sm sm:px-8"
        >
          <div className={`h-10 w-10 shrink-0 rounded bg-gradient-to-br ${paletteFor(albumIndex)}`} />

          <div className="min-w-0 flex-1 sm:flex-none sm:w-48">
            <p className="truncate text-sm">{track.title}</p>
            <p className="truncate text-xs text-sand/40">{album.title}</p>
          </div>

          <div className="hidden flex-1 items-center gap-3 sm:flex">
            <button onClick={prev} aria-label="Previous track" className="text-sand/60 hover:text-ochre">
              ◀◀
            </button>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-sand/30 hover:border-ochre"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
            <button onClick={next} aria-label="Next track" className="text-sand/60 hover:text-ochre">
              ▶▶
            </button>
            <div className="ml-2 h-px flex-1 overflow-hidden bg-sand/15">
              <div
                className="h-full bg-ochre transition-[width]"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"} className="sm:hidden">
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button onClick={stop} aria-label="Close player" className="shrink-0 text-sand/40 hover:text-ochre">
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
