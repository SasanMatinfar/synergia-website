import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import NewsEventCard from '@/components/news-events/NewsEventCard';
import { publishedNewsEvents } from '@/data/newsEvents';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'News, events, demonstrations, conference activity, announcements, and selected media from the Synergia project.',
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHero title="News & Events" />
      <section className="section-container">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-academic-gray">
          Developments, events, demonstrations, and activities from the Synergia research programme.
        </p>
        {publishedNewsEvents.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {publishedNewsEvents.map((entry) => <NewsEventCard key={entry.slug} entry={entry} />)}
          </div>
        ) : (
          <p className="text-lg text-academic-gray">Project news and event documentation will be added as the project progresses.</p>
        )}
      </section>
    </>
  );
}
