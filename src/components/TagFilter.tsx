"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";

interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  readingTime: number;
}

interface TagFilterProps {
  posts: Post[];
  allTags: string[];
}

export function TagFilter({ posts, allTags }: TagFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tagFromUrl = searchParams.get("tag");
  const [selectedTag, setSelectedTag] = useState<string | null>(tagFromUrl);

  // Sync with URL on mount and when URL changes
  useEffect(() => {
    setSelectedTag(tagFromUrl);
  }, [tagFromUrl]);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      router.push(`/writing?tag=${tag}`, { scroll: false });
    } else {
      router.push("/writing", { scroll: false });
    }
  };

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  return (
    <>
      {/* Tag filter buttons */}
      {allTags.length > 0 && (
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                selectedTag === null
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag === selectedTag ? null : tag)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900"
                    : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTag && (
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} tagged with{" "}
              <span className="font-medium text-stone-700 dark:text-stone-300">
                {selectedTag}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Posts list */}
      {filteredPosts.length === 0 ? (
        <p className="text-stone-500 dark:text-stone-400 italic">
          No posts found.
        </p>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block py-5 border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900/50 -mx-4 px-4 transition-colors"
            >
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <time className="text-sm text-stone-400 dark:text-stone-500 font-mono tabular-nums">
                  {post.date ? format(parseISO(post.date), "MMM dd") : "—"}
                </time>
                <span className="text-stone-300 dark:text-stone-600">·</span>
                <span className="text-sm text-stone-400 dark:text-stone-500">
                  {post.readingTime} min read
                </span>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="text-stone-300 dark:text-stone-600 hidden sm:inline">·</span>
                    <div className="flex gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <h2 className="text-lg text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm">
                  {post.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
