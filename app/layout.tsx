import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Synergia - Multisensory Integration in High-Intensity Environments',
  description:
    'DFG-funded research project bridging AI analysis and human perception in surgical environments through innovative multisensory integration.',
  keywords: [
    'DFG',
    'research',
    'multisensory',
    'AI',
    'surgery',
    'sonification',
    'spatial audio',
    'surgical AI',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Synergia - Multisensory Integration Research',
    description:
      'DFG-funded research bridging AI analysis and human perception in surgical environments',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      { url: '/logos/favicons/synergia-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-256.png', sizes: '256x256', type: 'image/png' },
      { url: '/logos/favicons/synergia-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logos/favicons/synergia-icon-32.png',
    apple: '/logos/favicons/synergia-icon-180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
