import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — Declarative, no explanation */}
      <section className="mb-32">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6">
          Arinze Ogbonna
        </h1>
        <p className="text-2xl md:text-3xl text-stone-700 dark:text-stone-300 font-light leading-snug max-w-lg">
          I build systems that don&apos;t break under pressure.
        </p>
        <div className="mt-10 text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md">
          <p>
            Senior software engineer.
            <br />
            Frontend, backend, QA automation, infrastructure.
            <br />
            I ship production systems and write about the thinking behind them.
          </p>
        </div>
      </section>

      {/* Contrast Statement */}
      <section className="mb-24">
        <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-6 py-2">
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Most portfolios show outcomes.
          </p>
          <p className="text-lg text-stone-900 dark:text-stone-100 font-medium mt-1">
            This one shows decisions.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-8 text-sm">
          <Link
            href="/work"
            className="text-stone-900 dark:text-stone-100 font-medium hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
          >
            → Work
          </Link>
          <Link
            href="/journal"
            className="text-stone-900 dark:text-stone-100 font-medium hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
          >
            → Journal
          </Link>
          <Link
            href="/writing"
            className="text-stone-900 dark:text-stone-100 font-medium hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
          >
            → Writing
          </Link>
        </div>
      </section>

      {/* What I Do — Opinionated, outcome-focused */}
      <section className="mb-24">
        <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
          What I do
        </h2>
        <ul className="space-y-3 text-stone-700 dark:text-stone-300">
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>Build systems that survive real users</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>Turn ambiguity into shipped features</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>Prevent failures before they become incidents</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-stone-400 dark:text-stone-600 select-none">—</span>
            <span>Write tests so teams can move faster, not slower</span>
          </li>
        </ul>
      </section>

      {/* Signature Line — Standalone, memorable */}
      <section className="mb-24">
        <p className="text-xl md:text-2xl text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed max-w-lg">
          &quot;Clarity scales. Cleverness doesn&apos;t.&quot;
        </p>
      </section>

      {/* Credibility — Understated */}
      <section>
        <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-6">
          Background
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-md">
          Enterprise-scale React & Next.js applications. QA automation and
          CI/CD pipelines. API-heavy systems. Teams that value quality over
          chaos.
        </p>
      </section>
    </>
  );
}
