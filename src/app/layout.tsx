import type { Metadata } from 'next';
import { Newsreader, Outfit, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CursorTorch } from '@/components/CursorTorch';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Arinze Ogbonna — Engineer, Builder, Thinker',
    template: '%s — Arinze Ogbonna',
  },
  description:
    'Senior software engineer who builds reliable systems, thinks deeply about technology, and documents the journey along the way.',
  openGraph: {
    title: 'Arinze Ogbonna — Engineer, Builder, Thinker',
    description:
      'Senior software engineer who builds reliable systems, thinks deeply about technology, and documents the journey along the way.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arinze Ogbonna — Engineer, Builder, Thinker',
    description:
      'Senior software engineer who builds reliable systems, thinks deeply about technology, and documents the journey along the way.',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1654135828757479425/UqP-NX3v_400x400.jpg',
        width: 1200,
        height: 630,
        alt: 'Arinze Ogbonna',
      },
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D03AQGd_uGFqY-wRw/profile-displayphoto-crop_800_800/B4DZfiMiRJHAAI-/0/1751846628492?e=1769040000&v=beta&t=BIU2TPGW1kkcAypGA3zwfmwXd5vUnv01ql0_-2z9u_0',
        width: 1200,
        height: 630,
        alt: 'Arinze Ogbonna',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark) || (stored === 'system' && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${newsreader.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <CursorTorch />
          <div className='max-w-2xl mx-auto px-6 w-full flex flex-col min-h-screen'>
            <Header />
            <main className='flex-1 py-8'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
