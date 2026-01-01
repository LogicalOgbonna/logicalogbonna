import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

// Average reading speed in words per minute
const WORDS_PER_MINUTE = 200;

/**
 * Calculate estimated reading time from content
 */
function calculateReadingTime(content: string): number {
  // Remove code blocks
  const textWithoutCode = content.replace(/```[\s\S]*?```/g, "");
  // Remove markdown syntax and count words
  const text = textWithoutCode
    .replace(/[#*_\[\](){}|`]/g, "")
    .replace(/\n+/g, " ")
    .trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return Math.max(1, minutes); // Minimum 1 minute
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPostsByType(type: "journal" | "writing"): PostMeta[] {
  const directory = path.join(contentDirectory, type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(directory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(
  type: "journal" | "writing",
  slug: string
): Post | null {
  const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getAllSlugs(type: "journal" | "writing"): string[] {
  const directory = path.join(contentDirectory, type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllTags(type: "journal" | "writing"): string[] {
  const posts = getPostsByType(type);
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
