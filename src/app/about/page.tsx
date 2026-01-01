import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A software engineer with a strong bias for clarity, ownership, and long-term thinking.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-16">
        About
      </h1>

      <div className="space-y-16">
        <section>
          <p className="text-xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-lg">
            Software engineer with a bias for clarity, ownership, and long-term
            thinking.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Hats I&apos;ve worn
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Frontend engineer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Full-stack engineer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>QA automation engineer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>Infrastructure-aware builder</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            How this shapes my work
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>I think end-to-end</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>I test what I build</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
              <span>
                I care about how systems fail, not just how they succeed
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
            Beyond code
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-md">
            I write. Sometimes about technology. Sometimes about pressure,
            growth, money, and uncertainty.
          </p>
        </section>

        <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="text-stone-500 dark:text-stone-400 text-sm italic">
            This site is a living document — not a highlight reel.
          </p>
        </section>
      </div>
    </>
  );
}
