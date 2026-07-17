import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_POSTS, PAGE_INTROS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Journal | SIIBU",
  description: "Studio diaries, behind-the-scenes notes, and updates.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen w-full bg-ink px-6 py-24 text-sand sm:px-16">
      <Link href="/" className="text-xs tracking-[0.3em] text-sand/50 uppercase hover:text-ochre">
        ← Back
      </Link>

      <span className="mt-10 block text-xs tracking-[0.4em] text-ochre uppercase">Journal</span>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">Notes &amp; Updates</h1>
      <p className="mt-4 max-w-lg text-sm text-sand/60 sm:text-base">{PAGE_INTROS.journal}</p>

      <div className="mt-16 flex flex-col">
        {JOURNAL_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col gap-2 border-b border-sand/10 py-8 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span className="w-28 shrink-0 text-xs uppercase tracking-widest text-sand/40">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <div>
              <h2 className="text-xl font-medium transition group-hover:text-ochre/80 sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-sand/60">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
