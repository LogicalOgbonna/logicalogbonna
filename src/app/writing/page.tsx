import type { Metadata } from "next";
import { Suspense } from "react";
import { getPostsByType, getAllTags } from "@/lib/mdx";
import { TagFilter } from "@/components/TagFilter";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Longer-form pieces on software engineering, career growth, and systems thinking.",
};

function TagFilterFallback() {
  return (
    <div className="animate-pulse">
      <div className="flex gap-2 mb-10">
        <div className="h-7 w-12 bg-stone-200 dark:bg-stone-800 rounded-full" />
        <div className="h-7 w-20 bg-stone-200 dark:bg-stone-800 rounded-full" />
        <div className="h-7 w-24 bg-stone-200 dark:bg-stone-800 rounded-full" />
      </div>
      <div className="space-y-8">
        {[1, 2].map((i) => (
          <div key={i} className="py-5 border-b border-stone-100 dark:border-stone-800">
            <div className="h-4 w-16 bg-stone-200 dark:bg-stone-800 rounded mb-2" />
            <div className="h-6 w-3/4 bg-stone-200 dark:bg-stone-800 rounded mb-2" />
            <div className="h-4 w-1/2 bg-stone-200 dark:bg-stone-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WritingPage() {
  const posts = getPostsByType("writing");
  const allTags = getAllTags("writing");

  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6">
        Writing
      </h1>

      <p className="text-stone-600 dark:text-stone-400 mb-12 max-w-md">
        Longer-form pieces where I slow down and think properly.
        <br />
        <span className="text-stone-500 dark:text-stone-500">
          Software, career, money, systems, failure, trade-offs.
        </span>
      </p>

      <Suspense fallback={<TagFilterFallback />}>
        <TagFilter posts={posts} allTags={allTags} />
      </Suspense>
    </>
  );
}
