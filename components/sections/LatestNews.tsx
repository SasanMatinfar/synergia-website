'use client';

import Link from 'next/link';
import { getLatestNews } from '@/data/news';

/**
 * Latest news section for home page
 */
export default function LatestNews() {
  const news = getLatestNews(3);

  return (
    <section className="section-container bg-academic-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-academic-navy">
          Latest Updates
        </h2>
        <p className="text-center text-academic-gray mb-12 text-lg">
          Stay informed about project progress, events, and milestones
        </p>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {news.map((item) => {
            const categoryColors: Record<string, string> = {
              announcement: 'bg-blue-100 text-blue-800',
              event: 'bg-purple-100 text-purple-800',
              publication: 'bg-green-100 text-green-800',
              milestone: 'bg-red-100 text-red-800',
              collaboration: 'bg-yellow-100 text-yellow-800',
            };

            return (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="card h-full hover:shadow-xl transition-shadow">
                  {/* Category badge */}
                  <div className="px-6 pt-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        categoryColors[item.category] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1).replace('-', ' ')}
                    </span>
                  </div>

                  {/* Image placeholder */}
                  {item.image && (
                    <div className="h-40 bg-gradient-to-br from-academic-blue to-academic-navy flex items-center justify-center text-white">
                      <span className="text-sm">TODO: News image</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-academic-gray mb-2">
                      {item.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="text-lg font-bold text-academic-navy mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-academic-gray line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Read more link */}
                  <div className="px-6 pb-6">
                    <span className="text-sm font-semibold text-academic-blue hover:text-academic-navy transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA to news page */}
        <div className="text-center">
          <Link href="/news" className="btn-secondary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
