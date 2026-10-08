import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './exhibits.css';
import './physics.css';
import './themes.css';
import './reader-experience.css';
import './foundations.css';
import './gum.css';
import './journey.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// The static export is served from a project page; the origin and base path are
// fixed at build time so the canonical URL matches where GitHub Pages serves it.
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://johngmuender.github.io';
const canonical = siteOrigin + (process.env.NEXT_PUBLIC_BASE_PATH ?? '') + '/';

export const metadata: Metadata = {
  title:
    'What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping? — An Interactive Edition',
  description:
    'The GUM draft as an interactive edition: a material with positions and orientations, light as its locked wave, a knot as a particle, a tower of fields as the wave function, and thirty stakes with printed kills.',
  metadataBase: new URL(canonical),
  alternates: { canonical },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      style={{ colorScheme: 'dark' }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
