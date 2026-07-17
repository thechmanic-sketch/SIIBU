import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_INTROS, PRESS_MENTIONS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Press | SIIBU",
  description: "Press mentions and media coverage.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen w-full bg-ink px-6 py-24 text-sand sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-sand/50 uppercase hover:text-ochre">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-ochre uppercase">Press</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">In the Press</h1>
      <p className="mt-4 max-w-lg text-sm text-sand/60 sm:text-base">{PAGE_INTROS.press}</p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {PRESS_MENTIONS.map((mention) => (
          <div key={mention.outlet} className="border-l-2 border-sand/20 pl-6">
            <p className="text-lg text-sand/90 sm:text-xl">&ldquo;{mention.quote}&rdquo;</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-sand/40">
              {mention.outlet} — {mention.year}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-sand/10 pt-10">
        <p className="text-sm text-sand/60">For press inquiries and media kit access:</p>
        <a href="mailto:press@siibu.com" className="mt-1 block text-lg hover:text-ochre/80">
          press@siibu.com
        </a>
      </div>
    </main>
  );
}
