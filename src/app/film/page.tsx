import type { Metadata } from "next";
import Link from "next/link";
import { FILMOGRAPHY, PAGE_INTROS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Filmography | SIIBU",
  description: "Selected film and screen credits.",
};

export default function FilmPage() {
  return (
    <main className="min-h-screen w-full bg-ink px-6 py-24 text-sand sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-sand/50 uppercase hover:text-ochre">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-ochre uppercase">Filmography</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Selected Credits</h1>
      <p className="mt-4 max-w-lg text-sm text-sand/60 sm:text-base">{PAGE_INTROS.film}</p>

      <div className="mt-16 flex flex-col">
        {FILMOGRAPHY.map((entry) => (
          <div
            key={entry.title}
            className="flex flex-col gap-1 border-b border-sand/10 py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-8"
          >
            <span className="w-16 shrink-0 text-sm text-sand/40">{entry.year}</span>
            <span className="flex-1 text-xl font-medium sm:text-2xl">{entry.title}</span>
            <span className="text-sm text-sand/60">{entry.role}</span>
            <span className="text-xs uppercase tracking-widest text-sand/40">{entry.type}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
