import type { Metadata } from 'next';
import Providers from './providers';
import NavBar from '@patterns/NavBar';
import Footer from '@patterns/Footer';
import '../styles/globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'dark',
};

export const metadata: Metadata = {
  title: 'Wilson Goltara',
  description: 'Full-stack developer, JavaScript enthusiast, and course creator',
  metadataBase: new URL('https://wilsongoltara.me'),
  openGraph: {
    title: 'Wilson Goltara',
    url: 'https://wilsongoltara.me',
    siteName: 'Wilson Goltara Portfolio',
    type: 'website',
    images: ['/meta.webp'],
  },
  robots: { index: true, follow: true },
  keywords: [
    'Wilson',
    'Goltara',
    'Wilson Goltara',
    'Full Stack',
    'Developer',
    'Portfolio',
    'Web developer',
  ],
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <div id="__next">
            <NavBar />
            <main className="size-box">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

