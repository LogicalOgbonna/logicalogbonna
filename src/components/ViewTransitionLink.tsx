'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps, startTransition } from 'react';

type ViewTransitionLinkProps = ComponentProps<typeof Link>;

export function ViewTransitionLink({
  href,
  children,
  onClick,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow default behavior for external links or modified clicks
    if (
      typeof href === 'string' &&
      (href.startsWith('http') || href.startsWith('mailto:'))
    ) {
      return;
    }

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    e.preventDefault();

    const url = typeof href === 'string' ? href : href.pathname || '/';

    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        startTransition(() => {
          router.push(url);
        });
      });
    } else {
      // Fallback for browsers without View Transitions API
      startTransition(() => {
        router.push(url);
      });
    }

    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

