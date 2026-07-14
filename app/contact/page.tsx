import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'About - Synergia',
  description:
    'Learn about the Synergia project, its institutions, funding, and how to get in touch.',
};

/**
 * Contact page
 * Provides multiple contact options and inquiry form
 */
export default function ContactPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">About Synergia</h1>
          <p className="text-2xl text-blue-100">
            Funding, institutions, and contact information for Synergia
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="card p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-heading-md font-bold text-academic-navy mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4 text-academic-gray">
                  <div>
                    <p className="font-semibold text-academic-navy">Dr. Sasan Matinfar</p>
                    <p className="text-sm">Project Coordinator & Sonification Lead</p>
                  </div>

                  <div>
                    <p className="text-sm">
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:sasan.matinfar@tum.de"
                        className="text-academic-blue hover:text-academic-navy font-semibold"
                      >
                        sasan.matinfar@tum.de
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm">
                      <strong>Affiliations:</strong>
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-academic-gray">
                      <li>
                        <span className="font-semibold text-academic-navy">Chair for Social Affective Touch, TU Dresden</span>
                        <br />
                        <a
                          href="https://tu-dresden.de/ing/elektrotechnik/ias/socialtouch"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-academic-blue hover:text-academic-navy font-semibold"
                        >
                          socialtouch.tu-dresden.de
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold text-academic-navy">Chair for Computer Aided Medical Procedures (CAMP), TUM</span>
                        <br />
                        <a
                          href="https://www.cs.cit.tum.de/camp/start/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-academic-blue hover:text-academic-navy font-semibold"
                        >
                          camp.cs.cit.tum.de
                        </a>
                        <div className="mt-1">
                          <span className="font-semibold text-academic-navy">Co-founder, </span>
                          <a
                            href="https://sonixense.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-academic-blue hover:text-academic-navy font-semibold"
                          >
                            Sonixense
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm">
                      <strong>Homepage:</strong>{' '}
                      <a
                        href="https://www.cs.cit.tum.de/camp/members/sasan-matinfar-1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-academic-blue hover:text-academic-navy font-semibold"
                      >
                        Sasan Matinfar
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-heading-md font-bold text-academic-navy mb-6">
                  Contact
                </h2>

                <p className="text-academic-gray leading-relaxed mb-6">
                  For inquiries, collaborations, or questions about the Synergia project, please contact the project coordinator directly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding and support */}
      <section className="section-container bg-academic-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-6 text-center">
            Funding and Support
          </h2>
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <p className="text-lg text-academic-gray mb-4">
              <strong>Funded by:</strong> Deutsche Forschungsgemeinschaft (DFG)
            </p>
            <p className="text-academic-gray mb-4">
              <strong>Program:</strong> DFG Synergia
            </p>
            <p className="text-academic-gray mb-4">
              <strong>Start:</strong> 2025<br />
            </p>
            <a
              href="https://www.dfg.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-academic-blue font-semibold hover:text-academic-navy transition-colors"
            >
              Learn more about DFG funding →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section-container bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-academic-blue font-semibold mb-3">
            About
          </p>
          <h2 className="text-heading-lg font-bold text-academic-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-academic-gray text-lg leading-relaxed mb-8">
            For common questions about collaboration, visits, funding, and the project scope, see our dedicated FAQ page.
          </p>
          <Link
            href="/contact/faq"
            className="inline-flex items-center justify-center rounded-full bg-academic-blue px-6 py-3 text-white font-semibold hover:bg-academic-navy transition-colors"
          >
            Open FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
