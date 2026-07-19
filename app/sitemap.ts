import type { MetadataRoute } from 'next';
import { publishedNewsEvents } from '@/data/newsEvents';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.org';
  const primaryRoutes = ['', '/project', '/research', '/research-infrastructure', '/team', '/news-events', '/about'].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const),
      priority: path === '' ? 1 : 0.8,
    })
  );
  const newsEventRoutes = publishedNewsEvents.map((entry) => ({
    url: `${baseUrl}/news-events/${entry.slug}`,
    lastModified: entry.date ? new Date(`${entry.date}T00:00:00Z`) : new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...primaryRoutes, ...newsEventRoutes];
}
