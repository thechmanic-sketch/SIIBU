import type { Metadata } from "next";
import Link from "next/link";
import { FILMOGRAPHY, PAGE_INTROS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Filmography | SIIBU",
  description: "Selected film and screen credits.",
};

export default function FilmPage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-white/50 uppercase hover:text-white">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-white/50 uppercase">Filmography</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Selected Credits</h1>
      <p className="mt-4 max-w-lg text-sm text-white/60 sm:text-base">{PAGE_INTROS.film}</p>

      <div className="mt-16 flex flex-col">
        {FILMOGRAPHY.map((entry) => (
          <div
            key={entry.title}
            className="flex flex-col gap-1 border-b border-white/10 py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-8"
          >
            <span className="w-16 shrink-0 text-sm text-white/40">{entry.year}</span>
            <span className="flex-1 text-xl font-medium sm:text-2xl">{entry.title}</span>
            <span className="text-sm text-white/60">{entry.role}</span>
            <span className="text-xs uppercase tracking-widest text-white/40">{entry.type}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
