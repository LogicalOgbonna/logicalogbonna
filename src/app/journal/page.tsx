import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByType } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Journal",
  description: "Unfiltered thinking. Decisions, not outcomes. Read slowly.",
};

export default function JournalPage() {
  const posts = getPostsByType("journal");

  return (
    <>
      {/* The Hook */}
      <section className="mb-20">
        <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-md">
          Some of these thoughts are unfinished.
          <br />
          Some are uncomfortable.
          <br />
          Most are honest.
        </p>
        <p className="text-stone-500 dark:text-stone-400 mt-8 max-w-md leading-relaxed">
          This journal is where I think in public — before the conclusions are
          clean. I write to expose assumptions, track patterns, and test ideas
          under real pressure.
        </p>
        <p className="text-stone-400 dark:text-stone-500 text-sm mt-8 italic">
          Read slowly.
        </p>
      </section>

      {/* Why This Exists */}
      <section className="mb-20">
        <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
          Why I keep this journal
        </h2>
        <p className="text-stone-700 dark:text-stone-300 mb-6">
          Most people document outcomes.
          <br />I document decisions.
        </p>
        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-sm">
          Because outcomes lie without context. Decisions reveal how someone
          thinks. Repeated decisions expose patterns.
        </p>
      </section>

      {/* The Rules */}
      <section className="mb-20">
        <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
          Rules I follow here
        </h2>
        <ul className="space-y-2 text-stone-700 dark:text-stone-300">
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>I write before I&apos;m certain</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>I don&apos;t edit for approval</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>I don&apos;t write to sound smart</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>I revisit entries when I&apos;m wrong</span>
          </li>
        </ul>
      </section>

      {/* Entry List — Bare, Editorial */}
      <section className="mb-20">
        {posts.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400 italic">
            No entries yet.
          </p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group block py-4 border-b border-stone-100 dark:border-stone-800 last:border-b-0"
              >
                <span className="text-stone-800 dark:text-stone-200 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* The Closing Line */}
      <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
        <p className="text-stone-500 dark:text-stone-400 text-sm italic">
          I don&apos;t always agree with my past entries.
          <br />
          That&apos;s the point.
        </p>
      </section>
    </>
  );
}
