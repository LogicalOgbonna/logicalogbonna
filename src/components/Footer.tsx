import { socialLinks } from '@/lib/contants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-12 mt-auto border-t border-stone-200 dark:border-stone-800'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-stone-500 dark:text-stone-400'>
        <p>© {currentYear} Arinze Ogbonna</p>
        <div className='flex items-center gap-6'>
          {socialLinks.map((link) => (
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
