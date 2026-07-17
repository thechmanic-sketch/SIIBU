"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ALBUMS } from "@/lib/site-data";

type PlayerState = {
  albumIndex: number;
  trackIndex: number | null;
  isPlaying: boolean;
  progress: number;
  playTrack: (albumIndex: number, trackIndex: number) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  stop: () => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [albumIndex, setAlbumIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnded = () => next();

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function playTrack(newAlbumIndex: number, newTrackIndex: number) {
    const audio = audioRef.current;
    if (!audio) return;
    ensureAudioGraph();

    if (albumIndex === newAlbumIndex && trackIndex === newTrackIndex) {
      togglePlay();
      return;
    }

    const album = ALBUMS[newAlbumIndex];
    audio.src = album.tracks[newTrackIndex].src;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    setAlbumIndex(newAlbumIndex);
    setTrackIndex(newTrackIndex);
    setIsPlaying(true);
    setProgress(0);
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || trackIndex === null) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      ensureAudioGraph();
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }

  function next() {
    if (trackIndex === null) return;
    const album = ALBUMS[albumIndex];
    const nextIndex = (trackIndex + 1) % album.tracks.length;
    playTrack(albumIndex, nextIndex);
  }

  function prev() {
    if (trackIndex === null) return;
    const album = ALBUMS[albumIndex];
    const prevIndex = (trackIndex - 1 + album.tracks.length) % album.tracks.length;
    playTrack(albumIndex, prevIndex);
  }

  function stop() {
    audioRef.current?.pause();
    setIsPlaying(false);
    setTrackIndex(null);
    setProgress(0);
  }

  return (
    <PlayerContext.Provider
      value={{ albumIndex, trackIndex, isPlaying, progress, playTrack, togglePlay, next, prev, stop }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
