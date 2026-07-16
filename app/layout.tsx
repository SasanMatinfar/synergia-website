import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Synergia | Multisensory Integration for Surgical Environments',
    template: '%s | Synergia',
  },
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.org'),
  openGraph: {
    title: 'Synergia - Multisensory Integration Research',
    description:
      'DFG-funded research bridging AI analysis and human perception in surgical environments',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/logos/synergia-icon.png',
    apple: '/logos/synergia-icon.png',
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
