import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PlaceholderNotice from '@/components/PlaceholderNotice';
import ContactForm from '@/components/ContactForm';
import { collaborators } from '@/data/collaborators';

export const metadata: Metadata = {
  title: 'About',
  description: 'Project summary, participating institutions, funding, contact, legal, privacy, and accessibility information.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Synergia" description="Project context, participating institutions, funding acknowledgement, contact information, and public-information notices." />
      <section className="section-container">
        <div className="max-w-4xl">
          <h2 className="mb-5 text-academic-navy">Project Summary</h2>
          <p className="text-lg leading-relaxed text-academic-gray">Synergia is an interdisciplinary research initiative investigating how multisensory integration, sonification, spatial audio, artificial intelligence, and human perception can contribute to computer-assisted medicine and demanding surgical environments.</p>
        </div>
      </section>
      <section className="bg-academic-light">
        <div className="section-container">
          <h2 className="mb-8 text-academic-navy">Participating Institutions</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.map((institution) => (
              <a key={institution.id} href={institution.website} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 bg-white p-6">
                {institution.logo && <img src={`/logos/${institution.logo}`} alt="" className="mb-4 h-16 w-28 object-contain" />}
                <h3 className="mb-2 text-heading-sm text-academic-navy">{institution.name}</h3>
                <p className="text-sm text-academic-gray">{institution.primaryRole}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section-container">
        <h2 className="mb-5 text-academic-navy">Funding Acknowledgement</h2>
        <p className="max-w-4xl text-lg leading-relaxed text-academic-gray">The project identifies the Deutsche Forschungsgemeinschaft (DFG) as its funding organisation. Formal acknowledgement wording, grant number, funding period, and funding amount require confirmation before publication.</p>
      </section>
      <section id="contact" className="scroll-mt-28 bg-academic-light">
        <div className="section-container">
          <h2 className="mb-8 text-academic-navy">Contact</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-academic-gray">
              <div><strong className="text-academic-navy">Scientific Coordinator</strong><p>Dr. Sasan Matinfar</p></div>
              <div><strong className="text-academic-navy">Email</strong><p><a className="text-academic-blue" href="mailto:sasan.matinfar@tum.de">sasan.matinfar@tum.de</a></p></div>
              <PlaceholderNotice>Official project office, institutional postal addresses, telephone details, and additional institutional contacts have not been supplied.</PlaceholderNotice>
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
      <section id="legal" className="scroll-mt-28 bg-academic-light"><div className="section-container"><h2 className="mb-5 text-academic-navy">Legal Notice / Impressum</h2><PlaceholderNotice>The legally responsible publisher, representative, postal address, and applicable institutional legal text must be provided by the hosting institution.</PlaceholderNotice></div></section>
      <section id="privacy" className="section-container scroll-mt-28"><h2 className="mb-5 text-academic-navy">Privacy</h2><PlaceholderNotice>An institutionally approved privacy statement is required. The current contact form opens the visitor’s email application and does not submit data to this website.</PlaceholderNotice></section>
      <section id="accessibility" className="scroll-mt-28 bg-academic-light"><div className="section-container"><h2 className="mb-5 text-academic-navy">Accessibility</h2><PlaceholderNotice>An accessibility statement, contact route for reporting barriers, and applicable compliance information are required from the responsible institution.</PlaceholderNotice></div></section>
    </>
  );
}
