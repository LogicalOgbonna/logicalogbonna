import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-5 text-stone-700 dark:text-stone-300 space-y-2 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 text-stone-700 dark:text-stone-300 space-y-2 mb-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-stone-300 dark:border-stone-700 pl-4 italic text-stone-600 dark:text-stone-400 my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono text-stone-800 dark:text-stone-200">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-stone-900 dark:text-stone-100 underline underline-offset-2 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-stone-200 dark:border-stone-800 my-8" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-stone-900 dark:text-stone-100">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    ...components,
  };
}
