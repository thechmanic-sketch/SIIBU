import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { PAGE_INTROS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | SIIBU",
  description: "Frequently asked questions about booking, licensing, and more.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen w-full bg-ink px-6 py-24 text-sand sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-sand/50 uppercase hover:text-ochre">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-ochre uppercase">FAQ</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Frequently Asked</h1>
      <p className="mt-4 max-w-lg text-sm text-sand/60 sm:text-base">{PAGE_INTROS.faq}</p>

      <FaqAccordion />
    </main>
  );
}
