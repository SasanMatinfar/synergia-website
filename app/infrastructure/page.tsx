import { Metadata } from 'next';
import Link from 'next/link';
import { infrastructure, getFeaturedInfrastructure } from '@/data/infrastructure';

export const metadata: Metadata = {
  title: 'Research Infrastructure - Synergia',
  description:
    'Explore the research infrastructure and facilities supporting the Synergia project, including the Ambisonics Laboratory.',
};

/**
 * Infrastructure page
 * Details about research facilities and equipment
 */
export default function InfrastructurePage() {
  const featured = getFeaturedInfrastructure();
  const other = infrastructure.filter((item) => !item.featured);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Research Infrastructure</h1>
          <p className="text-2xl text-blue-100">
            State-of-the-art facilities and platforms enabling multisensory surgical research
          </p>
        </div>
      </section>

      {/* Featured infrastructure */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-12 text-center">
            Featured Facilities
          </h2>

          <div className="space-y-12">
            {featured.map((item) => (
              <div key={item.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image placeholder */}
                  <div className="bg-gradient-to-br from-academic-blue to-academic-navy min-h-96 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🔬</div>
                      <p className="text-lg font-semibold">TODO: {item.name}</p>
                      <p className="text-sm mt-2 opacity-75">Photo placeholder</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-heading-md font-bold text-academic-navy mb-2">
                        {item.name}
                      </h3>
                      <p className="text-academic-blue font-semibold mb-4">
                        {item.shortDescription}
                      </p>
                      <p className="text-academic-gray leading-relaxed mb-6">
                        {item.fullDescription}
                      </p>

                      {/* Capabilities */}
                      <div>
                        <h4 className="font-bold text-academic-navy mb-3">Key Capabilities:</h4>
                        <ul className="space-y-2">
                          {item.capabilities.map((cap, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-academic-gray">
                              <span className="text-academic-blue font-bold flex-shrink-0">✓</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-academic-gray">
                        <strong>Location:</strong> {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional infrastructure */}
      <section className="section-container bg-academic-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-12 text-center">
            Additional Facilities & Platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {other.map((item) => (
              <div key={item.id} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-heading-sm font-bold text-academic-navy mb-2">
                  {item.name}
                </h3>
                <p className="text-academic-blue font-semibold mb-3">
                  {item.shortDescription}
                </p>
                <p className="text-academic-gray text-sm mb-4 leading-relaxed">
                  {item.fullDescription}
                </p>

                {/* Quick capability list */}
                <div className="space-y-1 mb-4">
                  {item.capabilities.slice(0, 3).map((cap, idx) => (
                    <p key={idx} className="text-xs text-academic-gray">
                      • {cap}
                    </p>
                  ))}
                  {item.capabilities.length > 3 && (
                    <p className="text-xs text-academic-blue font-semibold">
                      +{item.capabilities.length - 3} more capabilities
                    </p>
                  )}
                </div>

                <p className="text-xs text-academic-gray font-medium">
                  <strong>Location:</strong> {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with research */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-md font-bold text-academic-navy mb-6 text-center">
            Infrastructure Supporting Research Themes
          </h2>
          <p className="text-lg text-academic-gray leading-relaxed text-center mb-8">
            Our infrastructure is specifically designed to support and advance all major research
            themes. From AI algorithm development to human perception studies, each facility plays
            a critical role in enabling groundbreaking research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-academic-light rounded-lg p-6">
              <h4 className="font-bold text-academic-navy mb-3">🤖 AI & Imaging Research</h4>
              <p className="text-sm text-academic-gray">
                Surgical simulators and real OR data provide testbeds for algorithm development
              </p>
            </div>
            <div className="bg-academic-light rounded-lg p-6">
              <h4 className="font-bold text-academic-navy mb-3">👁️ Perception Studies</h4>
              <p className="text-sm text-academic-gray">
                Ambisonics lab and simulator enable controlled human perception experiments
              </p>
            </div>
            <div className="bg-academic-light rounded-lg p-6">
              <h4 className="font-bold text-academic-navy mb-3">🔊 Sonification Design</h4>
              <p className="text-sm text-academic-gray">
                Spatial audio platform and lab enable iterative sonification development
              </p>
            </div>
            <div className="bg-academic-light rounded-lg p-6">
              <h4 className="font-bold text-academic-navy mb-3">🏥 Clinical Translation</h4>
              <p className="text-sm text-academic-gray">
                Simulation and XR systems bridge research findings to surgical practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Ambisonics Lab */}
      <section className="section-container bg-gradient-to-r from-academic-blue to-academic-navy text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-md font-bold mb-4">
            Explore Our Flagship Ambisonics Laboratory
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our state-of-the-art immersive spatial audio facility is at the heart of Synergia
            research. Learn more about its capabilities and research applications.
          </p>
          <Link href="/ambisonics-lab" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
            Visit the Ambisonics Lab
          </Link>
        </div>
      </section>
    </div>
  );
}
