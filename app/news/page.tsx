import { Metadata } from 'next';
import Link from 'next/link';
import { getNewsByCategory, newsItems } from '@/data/news';

export const metadata: Metadata = {
  title: 'News - Synergia',
  description:
    'Latest news, announcements, and updates from the Synergia research project.',
};

/**
 * News page
 * Displays all news items with filtering options
 */
export default function NewsPage() {
  const allNews = [...newsItems].sort((a, b) => b.date.getTime() - a.date.getTime());

  const categoryColors: Record<string, { bg: string; text: string }> = {
    announcement: { bg: 'bg-blue-100', text: 'text-blue-800' },
    event: { bg: 'bg-purple-100', text: 'text-purple-800' },
    publication: { bg: 'bg-green-100', text: 'text-green-800' },
    milestone: { bg: 'bg-red-100', text: 'text-red-800' },
    collaboration: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  };

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">News & Updates</h1>
          <p className="text-2xl text-blue-100">
            Stay informed about Synergia project progress and milestones
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Categories overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {['announcement', 'event', 'publication', 'milestone', 'collaboration'].map((cat) => {
              const items = getNewsByCategory(cat as any);
              return (
                <div key={cat} className="bg-academic-light rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-academic-blue mb-1">
                    {items.length}
                  </p>
                  <p className="text-xs font-semibold text-academic-gray capitalize">
                    {cat.replace('-', ' ')}
                  </p>
                </div>
              );
            })}
          </div>

          {/* All news */}
          <div className="space-y-6">
            {allNews.map((item) => {
              const colors = categoryColors[item.category] || { bg: 'bg-gray-100', text: 'text-gray-800' };

              return (
                <div
                  key={item.id}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    {/* Image/placeholder */}
                    {item.image && (
                      <div className="h-48 md:h-auto bg-gradient-to-br from-academic-blue to-academic-navy flex items-center justify-center text-white">
                        <p className="text-sm font-semibold text-center px-4">
                          TODO: {item.title}
                        </p>
                      </div>
                    )}

                    {/* Content */}
                    <div className={`p-6 ${item.image ? 'md:col-span-3' : 'col-span-1'}`}>
                      {/* Category badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}
                        >
                          {item.category.charAt(0).toUpperCase() +
                            item.category.slice(1).replace('-', ' ')}
                        </span>
                      </div>

                      {/* Date */}
                      <p className="text-xs text-academic-gray font-medium mb-2">
                        {item.date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>

                      {/* Title */}
                      <h3 className="text-heading-sm font-bold text-academic-navy mb-2">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-academic-gray mb-4 text-sm leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 text-xs bg-academic-light text-academic-blue rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Author */}
                      {item.author && (
                        <p className="text-xs text-academic-gray mb-4">
                          <strong>By:</strong> {item.author}
                        </p>
                      )}

                      {/* Read more link */}
                      <Link
                        href={`/news/${item.id}`}
                        className="text-sm font-semibold text-academic-blue hover:text-academic-navy transition-colors"
                      >
                        Read Full Article →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {allNews.length === 0 && (
            <div className="text-center py-12 bg-academic-light rounded-lg">
              <p className="text-academic-gray mb-2">No news items yet</p>
              <p className="text-sm text-academic-gray">TODO: Add news to data/news.ts</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe section */}
      <section className="section-container bg-academic-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-md font-bold text-academic-navy mb-4">
            Stay Updated
          </h2>
          <p className="text-academic-gray mb-6">
            Want to receive updates about Synergia research, events, and publications?
            Contact us to join our mailing list.
          </p>
          <Link href="/contact" className="btn-primary">
            Subscribe to Updates
          </Link>
        </div>
      </section>
    </div>
  );
}
