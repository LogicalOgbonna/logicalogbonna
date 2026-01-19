"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const POSTS_PER_PAGE = 5;

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
  const pageFromUrl = searchParams.get("page");
  
  const [selectedTag, setSelectedTag] = useState<string | null>(tagFromUrl);
  const [currentPage, setCurrentPage] = useState(
    pageFromUrl ? parseInt(pageFromUrl, 10) : 1
  );

  // Sync with URL on mount and when URL changes
  useEffect(() => {
    setTimeout(() => {
      setSelectedTag(tagFromUrl);
    }, 0);
    setTimeout(() => {
      setCurrentPage(pageFromUrl ? parseInt(pageFromUrl, 10) : 1);
    }, 0);
  }, [tagFromUrl, pageFromUrl]);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const updateUrl = (tag: string | null, page: number) => {
    const params = new URLSearchParams();
    if (tag) params.set("tag", tag);
    if (page > 1) params.set("page", page.toString());
    const query = params.toString();
    router.push(`/writing${query ? `?${query}` : ""}`, { scroll: false });
  };

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to page 1 when changing tags
    updateUrl(tag, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(selectedTag, page);
    // Scroll to top of posts list
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              [All]
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
                {`[${tag}]`}
              </button>
            ))}
          </div>
          {selectedTag && (
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} tagged with{" "}
              <span className="font-medium text-stone-700 dark:text-stone-300">
                {`[${selectedTag}]`}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Posts list */}
      {paginatedPosts.length === 0 ? (
        <p className="text-stone-500 dark:text-stone-400 italic">
          No posts found.
        </p>
      ) : (
        <>
          <div className="space-y-8">
            {paginatedPosts.map((post) => (
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
                            {`[${tag}]`}
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
              {/* Previous button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === 1
                    ? "text-stone-300 dark:text-stone-600 cursor-not-allowed"
                    : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                }`}
                aria-label="Previous page"
              >
                ← Prev
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;

                  // Show ellipsis
                  const showEllipsisBefore = page === currentPage - 2 && currentPage > 3;
                  const showEllipsisAfter = page === currentPage + 2 && currentPage < totalPages - 2;

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return (
                      <span
                        key={`ellipsis-${page}`}
                        className="px-2 text-stone-400 dark:text-stone-500"
                      >
                        …
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900"
                          : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? "text-stone-300 dark:text-stone-600 cursor-not-allowed"
                    : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                }`}
                aria-label="Next page"
              >
                Next →
              </button>
            </nav>
          )}

          {/* Page info */}
          {totalPages > 1 && (
            <p className="mt-4 text-center text-sm text-stone-400 dark:text-stone-500">
              Page {currentPage} of {totalPages} · {filteredPosts.length} posts total
            </p>
          )}
        </>
      )}
    </>
  );
}
