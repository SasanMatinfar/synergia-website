import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { publications } from '@/data/publications';
import { researchThemes } from '@/data/researchThemes';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research themes, enabling technologies, publications, software, and research outputs from Synergia.',
};

export default function ResearchPage() {
  const scientificThemes = researchThemes.filter((theme) => theme.kind === 'research-theme');
  const enablingTechnologies = researchThemes.filter((theme) => theme.kind === 'enabling-technology');

  return (
    <>
      <PageHero title="Research" description="Integrated research on multisensory perception, surgical sonification, spatial interaction, artificial intelligence, and clinical translation." />
      <section className="section-container">
        <div className="mb-12 max-w-4xl">
          <p className="text-lg leading-relaxed text-academic-gray">The research programme investigates how advanced computational systems communicate with clinicians through perceptually meaningful visual and auditory information. Its scientific themes address human perception, performance, and translation, supported by a connected set of enabling technologies.</p>
        </div>
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-academic-navy">Scientific Research Themes</h2>
          <p className="text-lg leading-relaxed text-academic-gray">These visitor-oriented themes describe the scientific questions investigated across the project and identify the contributing work packages.</p>
        </div>
        <div className="space-y-7">
          {scientificThemes.map((theme) => (
            <article id={theme.id} key={theme.id} className="scroll-mt-28 rounded-lg border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="mb-4 text-heading-md text-academic-navy">{theme.title}</h3>
                  <p className="max-w-4xl leading-relaxed text-academic-gray">{theme.description}</p>
                </div>
                {theme.relatedWorkPackages && theme.relatedWorkPackages.length > 0 && (
                  <div aria-label={`Related work packages: ${theme.relatedWorkPackages.join(', ')}`} className="flex flex-wrap content-start gap-2 md:max-w-44">
                    {theme.relatedWorkPackages.map((workPackage) => (
                      <span key={workPackage} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-academic-navy">{workPackage}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-academic-navy">Enabling Technologies</h2>
            <p className="text-lg leading-relaxed text-academic-gray">These capabilities support research across multiple themes rather than representing work packages themselves.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enablingTechnologies.map((technology) => (
              <article id={technology.id} key={technology.id} className="scroll-mt-28 rounded-lg border border-slate-200 bg-white p-7">
                <h3 className="mb-4 text-heading-sm text-academic-navy">{technology.title}</h3>
                <p className="leading-relaxed text-academic-gray">{technology.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="section-container scroll-mt-28">
        <h2 className="mb-8 text-academic-navy">Publications</h2>
        <div className="space-y-6">
          {publications.map((publication) => (
            <article key={publication.id} className="rounded-lg border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-academic-blue">Preprint</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-academic-navy">{publication.year}</span>
                {publication.topicTags?.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-academic-gray">{tag}</span>)}
              </div>
              <h3 className="mb-3 text-heading-sm text-academic-navy">
                <a href={`https://arxiv.org/abs/${publication.doi?.replace('10.48550/arXiv.', '')}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-academic-blue">{publication.title}</a>
              </h3>
              <p className="mb-2 leading-relaxed text-academic-gray">{publication.authors.join(', ')}</p>
              <p className="mb-5 font-medium text-academic-navy">{publication.venue}</p>
              {publication.abstract && <p className="mb-5 max-w-4xl leading-relaxed text-academic-gray">{publication.abstract}</p>}
              <div className="flex flex-wrap gap-5 text-sm font-semibold">
                <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="text-academic-blue hover:underline">DOI</a>
                {publication.pdfUrl && <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-academic-blue hover:underline">View PDF</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="outputs" className="bg-academic-light">
        <div className="section-container scroll-mt-28">
          <h2 className="mb-8 text-academic-navy">Software, Datasets, and Research Outputs</h2>
          <article className="rounded-lg border border-slate-200 bg-white p-7 md:p-9">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-academic-blue">Software repository</span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Coming soon</span>
            </div>
            <h3 className="mb-3 text-heading-sm text-academic-navy">iOCT Sonification for Subretinal Injection</h3>
            <p className="mb-5 max-w-3xl leading-relaxed text-academic-gray">Official repository for code and samples associated with the project’s physics-based iOCT sonification research. The repository is public, with its resources currently marked as coming soon.</p>
            <a href="https://github.com/luisdavid64/ioct-subretinal-sonification" target="_blank" rel="noopener noreferrer" className="font-semibold text-academic-blue hover:underline">View repository on GitHub →</a>
          </article>
        </div>
      </section>
    </>
  );
}
