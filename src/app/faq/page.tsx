import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | SIIBU",
  description: "Frequently asked questions about booking, licensing, and more.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-white/50 uppercase hover:text-white">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-white/50 uppercase">FAQ</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Frequently Asked</h1>

      <FaqAccordion />
    </main>
  );
}
