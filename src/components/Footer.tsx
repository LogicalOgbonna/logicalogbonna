export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-auto border-t border-stone-200 dark:border-stone-800">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-stone-500 dark:text-stone-400">
        <p>© {currentYear} Arinze Ogbonna</p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:arinzeogbo@gmail.com"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/arinze-ogbonna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/logicalOgbonna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
