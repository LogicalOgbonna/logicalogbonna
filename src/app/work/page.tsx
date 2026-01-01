import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work and experience from my engineering career.",
};

export default function WorkPage() {
  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-16">
        Work
      </h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Enterprise Web Platforms
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Large-scale React & Next.js applications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Performance optimization, testability, DX</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Close collaboration with product and QA</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            QA Automation & Reliability
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Playwright and Cypress test suites</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>CI/CD pipeline integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Reduced regressions, reduced release anxiety</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Systems Thinking
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Architecture, trade-offs, failure modes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Comfortable across frontend, backend, and infra</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Building systems that age well</span>
            </li>
          </ul>
        </section>

        <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
            Want the full picture?
          </p>
          <Link
            href="/contact"
            className="text-stone-900 dark:text-stone-100 font-medium text-sm hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
          >
            → Get in touch
          </Link>
        </section>
      </div>
    </>
  );
}
