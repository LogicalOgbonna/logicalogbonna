import { socialLinks } from '@/lib/contants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Arinze Ogbonna.',
};

export default function ContactPage() {
  return (
    <>
      <h1 className='font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-16'>
        Contact
      </h1>

      <div className='space-y-6'>
        {socialLinks.map((link) => (
          <div key={link.label} className='flex items-baseline gap-6'>
            <span className='text-sm text-stone-400 dark:text-stone-500 w-16 shrink-0'>
              {link.label}
            </span>
            <a
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors'
            >
              {link.displayValue}
            </a>
          </div>
        ))}
      </div>

      <div className='mt-16 pt-8 border-t border-stone-200 dark:border-stone-800'>
        <p className='text-stone-500 dark:text-stone-400 text-sm'>
          Hiring, collaborating, or just want to exchange ideas — reach out.
        </p>
      </div>
    </>
  );
}
