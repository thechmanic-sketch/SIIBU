import type { Metadata } from "next";
import Link from "next/link";
import { PRESS_MENTIONS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Press | SIIBU",
  description: "Press mentions and media coverage.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-white/50 uppercase hover:text-white">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-white/50 uppercase">Press</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">In the Press</h1>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {PRESS_MENTIONS.map((mention) => (
          <div key={mention.outlet} className="border-l-2 border-white/20 pl-6">
            <p className="text-lg text-white/90 sm:text-xl">&ldquo;{mention.quote}&rdquo;</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
              {mention.outlet} — {mention.year}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-white/10 pt-10">
        <p className="text-sm text-white/60">For press inquiries and media kit access:</p>
        <a href="mailto:press@siibu.com" className="mt-1 block text-lg hover:text-white/80">
          press@siibu.com
        </a>
      </div>
    </main>
  );
}
