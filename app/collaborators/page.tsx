import { Metadata } from 'next';
import Link from 'next/link';
import { collaborators, getCollaboratorsByType } from '@/data/collaborators';

export const metadata: Metadata = {
  title: 'Collaborators - Synergia',
  description:
    'Learn about the institutional partners and collaborators supporting the Synergia research project.',
};

/**
 * Collaborators page
 * Displays institutional partners and research ecosystem
 */
export default function CollaboratorsPage() {
  const universities = getCollaboratorsByType('university');
  const researchCenters = getCollaboratorsByType('research_center');
  const hospitals = getCollaboratorsByType('hospital');
  const institutions = getCollaboratorsByType('institution');

  const CollaboratorCard = ({ collab }: { collab: (typeof collaborators)[number] }) => (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      {/* Logo placeholder */}
      <div className="h-24 bg-gradient-to-br from-academic-blue to-academic-navy rounded-lg mb-4 flex items-center justify-center text-white text-center px-3">
        <p className="text-sm font-semibold">{collab.abbreviation}</p>
      </div>

      <h3 className="text-heading-sm font-bold text-academic-navy mb-2">{collab.name}</h3>
      <p className="text-academic-blue font-semibold text-sm mb-3">{collab.primaryRole}</p>

      <p className="text-academic-gray text-sm mb-4 leading-relaxed line-clamp-3">
        {collab.description}
      </p>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <a
          href={collab.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm text-academic-blue hover:text-academic-navy font-semibold"
        >
          Visit Website →
        </a>
        {collab.affiliatedMembers && collab.affiliatedMembers.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-academic-gray mb-2">Key Members:</p>
            <div className="space-y-1">
              {collab.affiliatedMembers.map((member, idx) => (
                <p key={idx} className="text-xs text-academic-gray">
                  • {member}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Our Collaborators</h1>
          <p className="text-2xl text-blue-100">
            A network of leading institutions driving Synergia research forward
          </p>
        </div>
      </section>

      {/* Ecosystem overview */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-academic-light rounded-lg p-8">
            <h2 className="text-heading-md font-bold text-academic-navy mb-4">
              A Truly Interdisciplinary Ecosystem
            </h2>
            <p className="text-academic-gray leading-relaxed">
              Synergia brings together the best expertise across computer science, surgery,
              perception science, audio engineering, and clinical medicine. Our collaborators span
              leading universities, research institutes, and clinical centers, creating a unified
              ecosystem dedicated to advancing multisensory surgical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      {researchCenters.length > 0 && (
        <section className="section-container bg-academic-light">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
                Research Centers
              </h2>
              <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
              <p className="text-academic-gray mt-4">
                Specialized research institutes and centers driving Synergia initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchCenters.map((collab) => (
                <CollaboratorCard key={collab.id} collab={collab} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Universities */}
      {universities.length > 0 && (
        <section className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
                Universities
              </h2>
              <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
              <p className="text-academic-gray mt-4">
                Academic institutions contributing research and training programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((collab) => (
                <CollaboratorCard key={collab.id} collab={collab} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hospitals and Clinical Centers */}
      {hospitals.length > 0 && (
        <section className="section-container bg-academic-light">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
                Clinical Partners
              </h2>
              <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
              <p className="text-academic-gray mt-4">
                Hospitals and clinical centers participating in surgical testing and validation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospitals.map((collab) => (
                <CollaboratorCard key={collab.id} collab={collab} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Funding and Support */}
      {institutions.length > 0 && (
        <section className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
                Funding and Support
              </h2>
              <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
              <p className="text-academic-gray mt-4">
                Organizations providing funding and strategic support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {institutions.map((collab) => (
                <CollaboratorCard key={collab.id} collab={collab} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Collaboration opportunities */}
      <section className="section-container bg-gradient-to-r from-academic-blue to-academic-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-lg font-bold mb-6 text-center">
            Interested in Collaboration?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold mb-2">Research Partnership</h3>
              <p className="text-sm text-blue-100">
                Collaborate on joint research projects and publications
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">Clinical Validation</h3>
              <p className="text-sm text-blue-100">
                Participate in surgical testing and clinical studies
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold mb-2">Academic Exchange</h3>
              <p className="text-sm text-blue-100">
                Student training and knowledge exchange programs
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-blue-100 mb-6">
              We welcome inquiries from researchers, clinicians, and institutions interested in
              advancing multisensory surgical innovation.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
