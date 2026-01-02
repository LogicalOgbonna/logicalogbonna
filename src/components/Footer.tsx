export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      href: 'mailto:arinzeogbo@gmail.com',
      label: 'Email',
    },
    {
      href: 'https://linkedin.com/in/arinze-ogbonna',
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/logicalOgbonna',
      label: 'GitHub',
    },
  ];

  return (
    <footer className='py-12 mt-auto border-t border-stone-200 dark:border-stone-800'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-stone-500 dark:text-stone-400'>
        <p>© {currentYear} Arinze Ogbonna</p>
        <div className='flex items-center gap-6'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-stone-900 dark:hover:text-stone-100 transition-colors'
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
