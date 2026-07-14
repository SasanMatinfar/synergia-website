import { Metadata } from 'next';
import Link from 'next/link';
import { researchThemes } from '@/data/researchThemes';

export const metadata: Metadata = {
  title: 'Scientific Work - Synergia',
  description:
    'Explore the detailed scientific work streams and work packages behind the Synergia project.',
};

/**
 * Research themes page
 * Displays detailed information about each research area
 */
export default function ResearchPage() {
  const cardClassName = 'border border-slate-200 bg-slate-50';

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Scientific Work</h1>
          <p className="text-2xl text-blue-100">
            A detailed view of the work packages and research directions shaping the project
          </p>
        </div>
      </section>

      {/* Scientific work streams */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-academic-gray mb-10 max-w-3xl">
            This page presents the detailed scientific work streams that support the project, including the core research directions and their relationship to the underlying work packages.
          </p>
          <div className="space-y-12">
            {researchThemes.map((theme, idx) => (
              <div
                key={theme.id}
                id={theme.id}
                className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${cardClassName}`}
              >
                  <div className="p-8 md:p-12">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-5xl">{theme.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="inline-block px-3 py-1 bg-white bg-opacity-70 rounded-full text-sm font-semibold text-academic-navy">
                            Work Stream {idx + 1}
                          </span>
                        </div>
                        <h2 className="text-heading-md font-bold text-academic-navy mb-2">
                          {theme.title}
                        </h2>
                        <p className="text-lg font-semibold text-academic-blue">
                          {theme.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 prose prose-lg text-academic-gray">
                      <p className="leading-relaxed">{theme.description}</p>
                    </div>

                    {/* Related work packages */}
                    {theme.relatedWorkPackages && theme.relatedWorkPackages.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="text-sm font-semibold text-academic-navy">
                          Related Work Packages:
                        </span>
                        {theme.relatedWorkPackages.map((wp) => (
                          <span
                            key={wp}
                            className="inline-block px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm font-medium text-academic-navy"
                          >
                            {wp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration section */}
      <section className="section-container bg-academic-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-md font-bold text-academic-navy mb-6 text-center">
            Integrated Research Approach
          </h2>
          <p className="text-lg text-academic-gray leading-relaxed text-center mb-8">
            These research objectives are not isolated; they form an integrated framework in which
            each area informs and strengthens the others. Work on surgical sonification informs
            studies of human perception, which in turn guide the design of intelligent support
            systems. This integration is central to the Synergia vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-academic-navy mb-2">Interconnected</h3>
              <p className="text-sm text-academic-gray">
                Themes complement and support each other in creating holistic solutions
              </p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-academic-navy mb-2">Goal-Oriented</h3>
              <p className="text-sm text-academic-gray">
                All themes contribute to improved surgical performance and safety
              </p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-academic-navy mb-2">Innovative</h3>
              <p className="text-sm text-academic-gray">
                Novel combinations of AI, perception science, and sensory engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-heading-md font-bold text-academic-navy mb-4">
            Learn More About Our Work
          </h2>
          <p className="text-lg text-academic-gray mb-8">
            Explore infrastructure, meet the team, and discover the latest research publications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/infrastructure" className="btn-primary">
              Research Infrastructure
            </Link>
            <Link href="/team" className="btn-secondary">
              Team Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
