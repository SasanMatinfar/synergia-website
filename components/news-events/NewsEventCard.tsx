import Image from 'next/image';
import Link from 'next/link';
import { formatNewsEventDate, type NewsEvent } from '@/data/newsEvents';

export default function NewsEventCard({
  entry,
  featured = false,
}: {
  entry: NewsEvent;
  featured?: boolean;
}) {
  const date = formatNewsEventDate(entry.date);

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-academic-blue hover:shadow-md ${featured ? 'lg:grid lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
      <Link href={`/news-events/${entry.slug}`} className={`relative block overflow-hidden ${featured ? 'min-h-72' : 'aspect-[16/10]'}`} aria-label={`Read ${entry.title}`}>
        <Image
          src={entry.image}
          alt={entry.imageAlt}
          fill
          sizes={featured ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 768px) 34vw, 100vw'}
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      <div className={`flex flex-1 flex-col ${featured ? 'p-7 lg:p-9' : 'p-6'}`}>
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-academic-blue">
          <span>{entry.type}</span>
          {date && <time dateTime={entry.date}>{date}</time>}
        </div>
        <h3 className={`${featured ? 'text-heading-md' : 'text-xl'} mb-3 text-academic-navy`}>
          <Link href={`/news-events/${entry.slug}`} className="hover:text-academic-blue">{entry.title}</Link>
        </h3>
        <p className="mb-5 line-clamp-3 leading-relaxed text-academic-gray">{entry.excerpt}</p>
        <Link href={`/news-events/${entry.slug}`} className="mt-auto font-semibold text-academic-blue" aria-label={`Read more about ${entry.title}`}>
          Read more →
        </Link>
      </div>
    </article>
  );
}
