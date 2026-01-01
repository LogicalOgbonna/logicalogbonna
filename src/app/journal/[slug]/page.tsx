import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Code } from "@/components/Code";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import type { CodeHikeConfig } from "codehike/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("journal");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("journal", slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.description || `Journal entry: ${post.title}`,
  };
}

const chConfig: CodeHikeConfig = {
  components: { code: "Code" },
};

const mdxComponents = {
  Code,
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-outside ml-5 text-stone-700 dark:text-stone-300 space-y-2 mb-4">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-outside ml-5 text-stone-700 dark:text-stone-300 space-y-2 mb-4">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-2 border-stone-300 dark:border-stone-600 pl-4 italic text-stone-600 dark:text-stone-400 my-6">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono text-stone-800 dark:text-stone-200">
      {children}
    </code>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-stone-900 dark:text-stone-100 underline underline-offset-2 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-stone-900 dark:text-stone-100">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
};

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug("journal", slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8"
      >
        <span aria-hidden="true">←</span>
        Back to journal
      </Link>

      <article>
        <header className="mb-10">
          <time className="text-sm text-stone-400 font-mono">
            {post.date ? format(parseISO(post.date), "MMMM d, yyyy") : "—"}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mt-2">
            {post.title}
          </h1>
        </header>

        <div className="prose">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [[remarkCodeHike, chConfig]],
                recmaPlugins: [[recmaCodeHike, chConfig]],
              },
            }}
          />
        </div>
      </article>
    </>
  );
}
