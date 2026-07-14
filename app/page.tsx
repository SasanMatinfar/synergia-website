import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import EcosystemOverview from '@/components/sections/EcosystemOverview';

export const metadata: Metadata = {
  title: 'Home - Synergia Project',
  description:
    'Discover how Synergia bridges AI analysis and human perception in surgical environments through innovative multisensory integration.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemOverview />
    </>
  );
}
