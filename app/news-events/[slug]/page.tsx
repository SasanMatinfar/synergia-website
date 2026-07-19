import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatNewsEventDate, newsEvents } from '@/data/newsEvents';

export function generateStaticParams() {
  return newsEvents.filter((entry) => entry.published).map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const entry = newsEvents.find((item) => item.slug === slug && item.published);
    return entry ? { title: entry.title, description: entry.excerpt } : {};
  });
}

export default async function NewsEventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = newsEvents.find((item) => item.slug === slug && item.published);
  if (!entry) notFound();
  const date = formatNewsEventDate(entry.date);

  return (
    <article>
      <header className="bg-academic-light">
        <div className="section-container py-12 md:py-16">
          <Link href="/news-events" className="mb-6 inline-block font-semibold text-academic-blue">← News & Events</Link>
          <div className="mb-4 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wider text-academic-blue">
            <span>{entry.type}</span>
            {date && <time dateTime={entry.date}>{date}</time>}
            {entry.location && <span>{entry.location}</span>}
          </div>
          <h1 className="max-w-4xl text-academic-navy">{entry.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-academic-gray">{entry.summary}</p>
        </div>
      </header>
      <div className="section-container">
        <figure className="relative mb-10 aspect-[16/7] overflow-hidden rounded-xl">
          <Image src={entry.image} alt={entry.imageAlt} fill priority sizes="(min-width: 1280px) 72rem, 100vw" className="object-cover" />
        </figure>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-academic-gray">
          {entry.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {entry.externalLink && (
            <a href={entry.externalLink} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-academic-blue">
              Visit related resource ↗
            </a>
          )}
        </div>
        {entry.gallery && entry.gallery.length > 0 && (
          <section className="mt-14" aria-labelledby="event-gallery">
            <h2 id="event-gallery" className="mb-7 text-academic-navy">Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {entry.gallery.map((item) => (
                <figure key={item.image}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  {item.caption && <figcaption className="mt-2 text-sm text-academic-gray">{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
