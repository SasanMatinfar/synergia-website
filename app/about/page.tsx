import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'About',
  description: 'Project summary, participating institutions, funding, contact, legal, privacy, and accessibility information.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Synergia" />
      <section className="section-container">
        <div className="max-w-4xl">
          <h2 className="mb-5 text-academic-navy">Project Summary</h2>
          <p className="text-lg leading-relaxed text-academic-gray">Synergia is an interdisciplinary research initiative investigating how multisensory integration, sonification, spatial audio, artificial intelligence, and human perception can contribute to computer-assisted medicine and demanding surgical environments.</p>
        </div>
      </section>
      <section className="bg-academic-light">
        <div className="section-container">
          <h2 className="mb-5 text-academic-navy">Participating Institutions</h2>
          <p className="mb-5 max-w-4xl text-lg leading-relaxed text-academic-gray">Synergia is conducted jointly by the Technical University of Munich and TU Dresden, together with clinical and technology collaborators.</p>
          <Link href="/team#partners" className="font-semibold text-academic-blue">View the consortium and partners →</Link>
        </div>
      </section>
      <section className="section-container">
        <h2 className="mb-5 text-academic-navy">Funding Acknowledgement</h2>
        <p className="max-w-4xl text-lg leading-relaxed text-academic-gray">Synergia is funded by the Deutsche Forschungsgemeinschaft (DFG).</p>
      </section>
      <section id="contact" className="scroll-mt-28 bg-academic-light">
        <div className="section-container">
          <h2 className="mb-8 text-academic-navy">Contact</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-academic-gray">
              <div><strong className="text-academic-navy">Scientific Coordinator</strong><p>Dr. Sasan Matinfar</p></div>
              <div><strong className="text-academic-navy">Email</strong><p><a className="text-academic-blue" href="mailto:sasan.matinfar@tum.de">sasan.matinfar@tum.de</a></p></div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section id="faq" className="section-container scroll-mt-28">
        <h2 className="mb-6 text-academic-navy">Frequently Asked Questions</h2>
        <div className="space-y-5 max-w-4xl">
          <article className="card p-6"><h3 className="mb-2 text-heading-sm text-academic-navy">How can researchers or clinicians discuss collaboration?</h3><p className="text-academic-gray">Use the project contact details above. Any collaboration is subject to consortium priorities, available capacity, and the relevant institutional processes.</p></article>
          <article className="card p-6"><h3 className="mb-2 text-heading-sm text-academic-navy">Can the laboratory be visited?</h3><p className="text-academic-gray">Visits may be possible by prior arrangement and depend on research schedules, access rules, and institutional approval.</p></article>
        </div>
      </section>
      {/* Replace these launch placeholders with verified institutional legal text. */}
      <section id="legal" className="scroll-mt-28 bg-academic-light"><div className="section-container"><h2 className="mb-5 text-academic-navy">Legal Notice / Impressum</h2><p className="text-academic-gray">Institutional legal information will be published here.</p></div></section>
      <section id="privacy" className="section-container scroll-mt-28"><h2 className="mb-5 text-academic-navy">Privacy</h2><p className="text-academic-gray">The institutional privacy statement will be published here.</p></section>
      <section id="accessibility" className="scroll-mt-28 bg-academic-light"><div className="section-container"><h2 className="mb-5 text-academic-navy">Accessibility</h2><p className="text-academic-gray">The institutional accessibility statement will be published here.</p></div></section>
    </>
  );
}
