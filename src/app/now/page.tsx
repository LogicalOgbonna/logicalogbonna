import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm focused on right now.",
};

export default function NowPage() {
  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
        Now
      </h1>
      <p className="text-sm text-stone-400 dark:text-stone-500 mb-16">
        January 2026
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Focus
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Preparing for senior/staff-level roles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Deepening system design skills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Writing weekly, even when it&apos;s uncomfortable</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Learning
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Advanced Next.js patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>System reliability & observability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Personal finance & investing</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Avoiding
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Shiny tools without a problem</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Over-optimizing early</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Silent burnout</span>
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="text-stone-500 dark:text-stone-400 text-sm">
            This is a{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 dark:text-stone-300 underline underline-offset-2 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              /now page
            </a>
            . A snapshot of what I&apos;m doing and thinking about at this
            moment.
          </p>
        </section>
      </div>
    </>
  );
}
