import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Journal | SIIBU",
  description: "Studio diaries, behind-the-scenes notes, and updates.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-white/50 uppercase hover:text-white">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-white/50 uppercase">Journal</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Notes &amp; Updates</h1>

      <div className="mt-16 flex flex-col">
        {JOURNAL_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col gap-2 border-b border-white/10 py-8 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span className="w-28 shrink-0 text-xs uppercase tracking-widest text-white/40">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <div>
              <h2 className="text-xl font-medium transition group-hover:text-white/80 sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/60">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
