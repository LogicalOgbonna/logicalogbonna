import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
        404
      </h1>
      <p className="text-stone-600 dark:text-stone-400 mb-8">
        This page doesn&apos;t exist — or hasn&apos;t been written yet.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-stone-900 dark:text-stone-100 font-medium hover:gap-3 transition-all"
      >
        Go home
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
