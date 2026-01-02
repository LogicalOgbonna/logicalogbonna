'use client';

import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { ViewTransitionLink } from './ViewTransitionLink';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Journal', href: '/journal' },
  { name: 'Writing', href: '/writing' },
  { name: 'Now', href: '/now' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className='py-8 md:py-12'>
      <nav className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <ViewTransitionLink
          href='/'
          className='text-lg font-medium text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors'
        >
          Arinze Ogbonna
        </ViewTransitionLink>
        <div className='flex items-center gap-6'>
          <ul className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'>
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.name}>
                  <ViewTransitionLink
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? 'text-stone-900 dark:text-stone-100 font-medium'
                        : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                    }`}
                  >
                    {item.name}
                  </ViewTransitionLink>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
