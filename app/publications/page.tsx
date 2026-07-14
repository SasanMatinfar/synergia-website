import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPublicationsByYear } from '@/data/publications';

export const metadata: Metadata = {
  title: 'Publications - Synergia',
  description:
    'Browse research publications from the Synergia project and our collaborators.',
};

/**
 * Publications page
 * Lists academic publications with filters
 */
export default function PublicationsPage() {
  const publicationsByYear = getAllPublicationsByYear();
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Publications</h1>
          <p className="text-2xl text-blue-100">
            Research outputs from Synergia and our collaborators
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Note about TODOs */}
          <div className="bg-blue-50 border-l-4 border-academic-blue rounded p-6 mb-12">
            <h3 className="font-bold text-academic-navy mb-2">Research Publications</h3>
            <p className="text-academic-gray text-sm">
              TODO: Replace placeholder publications with real papers. Each publication should include:
              title, authors, venue, year, DOI, PDF link (if available), and relevant project tags.
            </p>
          </div>

          {/* Publications by year */}
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year}>
                <h2 className="text-heading-md font-bold text-academic-navy mb-6">{year}</h2>

                <div className="space-y-4">
                  {publicationsByYear[year].map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-white rounded-lg border border-gray-200 hover:border-academic-blue hover:shadow-md transition-all p-6"
                    >
                      {/* Title */}
                      <h3 className="text-lg font-bold text-academic-navy mb-2 leading-relaxed">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-sm text-academic-gray mb-3">
                        <strong>Authors:</strong> {pub.authors.join(', ')}
                      </p>

                      {/* Venue and year */}
                      <p className="text-sm text-academic-gray mb-4">
                        <strong>Venue:</strong> {pub.venue} ({pub.year})
                      </p>

                      {/* Abstract if available */}
                      {pub.abstract && (
                        <div className="mb-4 p-3 bg-academic-light rounded border-l-2 border-academic-blue">
                          <p className="text-sm text-academic-gray leading-relaxed">
                            {pub.abstract}
                          </p>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {pub.projectTags?.map((tag) => (
                          <span
                            key={`proj-${tag}`}
                            className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-academic-blue rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {pub.topicTags?.map((tag) => (
                          <span
                            key={`topic-${tag}`}
                            className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 text-sm">
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-academic-blue hover:text-academic-navy font-semibold"
                          >
                            DOI: {pub.doi}
                          </a>
                        )}
                        {pub.pdfUrl && (
                          <a
                            href={pub.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-academic-blue hover:text-academic-navy font-semibold"
                          >
                            📄 PDF
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {years.length === 0 && (
            <div className="text-center py-12">
              <p className="text-academic-gray">TODO: Add publications to data/publications.ts</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA for submissions */}
      <section className="section-container bg-academic-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-md font-bold text-academic-navy mb-4">
            Contribute Your Research
          </h2>
          <p className="text-academic-gray mb-6">
            If you've published research as part of the Synergia project or in collaboration with
            our team, please let us know so we can add it to our publication list.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
