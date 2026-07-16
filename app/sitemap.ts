import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.org';
  return ['', '/project', '/research', '/research-infrastructure', '/team', '/media', '/about'].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'monthly' : 'yearly',
      priority: path === '' ? 1 : 0.8,
    })
  );
}
