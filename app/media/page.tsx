import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Project videos, scientific demonstrations, events, photographs, press, and news from Synergia.',
};

export default function MediaPage() {
  return (
    <>
      <PageHero title="Media" />
      <section className="section-container">
        <p className="max-w-3xl text-lg leading-relaxed text-academic-gray">Project media and event documentation will be added as the project progresses.</p>
      </section>
    </>
  );
}
