import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { publications } from '@/data/publications';
import { researchThemes } from '@/data/researchThemes';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research themes, clinical studies, publications, preprints, software, and datasets from Synergia.',
};

const themeOrder = [
  'multisensory-perception',
  'surgical-sonification',
  'soundscape-modeling',
  'ai-surgery',
  'human-ai-collaboration',
  'vibroacoustic-sensing',
  'spatial-audio-xr',
  'clinical-translation',
];

export default function ResearchPage() {
  const themes = themeOrder
    .map((id) => researchThemes.find((theme) => theme.id === id))
    .filter((theme): theme is (typeof researchThemes)[number] => Boolean(theme));

  return (
    <>
      <PageHero title="Research" description="Integrated research on multisensory perception, surgical sonification, spatial interaction, artificial intelligence, and clinical translation." />
      <section className="section-container">
        <div className="mb-12 max-w-4xl">
          <p className="text-lg leading-relaxed text-academic-gray">The research programme investigates how advanced computational systems communicate with clinicians through perceptually meaningful visual and auditory information. The themes below are interconnected and contribute to the project’s work packages.</p>
        </div>
        <div className="space-y-7">
          {themes.map((theme) => (
            <article id={theme.id} key={theme.id} className="scroll-mt-28 rounded-lg border border-slate-200 bg-slate-50 p-7 md:p-9">
              <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="mb-2 text-heading-md text-academic-navy">{theme.title}</h2>
                  <p className="mb-4 font-semibold text-academic-blue">{theme.subtitle}</p>
                  <p className="max-w-4xl leading-relaxed text-academic-gray">{theme.description}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2 md:max-w-44">
                  {theme.relatedWorkPackages?.map((wp) => (
                    <span key={wp} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-academic-navy">{wp}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="scroll-mt-28 bg-academic-light">
        <div className="section-container">
          <h2 className="mb-8 text-academic-navy">Publications</h2>
          <div className="space-y-6">
            {publications.map((publication) => (
              <article key={publication.id} className="rounded-lg border border-slate-200 bg-white p-7 md:p-9">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-academic-blue">Preprint</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-academic-navy">{publication.year}</span>
                  {publication.topicTags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-academic-gray">{tag}</span>
                  ))}
                </div>
                <h3 className="mb-3 text-heading-sm text-academic-navy">
                  <a href={`https://arxiv.org/abs/${publication.doi?.replace('10.48550/arXiv.', '')}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-academic-blue">
                    {publication.title}
                  </a>
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
        </div>
      </section>

      <section id="outputs" className="section-container scroll-mt-28">
        <h2 className="mb-8 text-academic-navy">Software, Datasets, and Research Outputs</h2>
        <article className="rounded-lg border border-slate-200 bg-slate-50 p-7 md:p-9">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-academic-blue">Software repository</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Coming soon</span>
          </div>
          <h3 className="mb-3 text-heading-sm text-academic-navy">iOCT Sonification for Subretinal Injection</h3>
          <p className="mb-5 max-w-3xl leading-relaxed text-academic-gray">Official repository for code and samples associated with the project’s physics-based iOCT sonification research. The repository is public, with its resources currently marked as coming soon.</p>
          <a
            href="https://github.com/luisdavid64/ioct-subretinal-sonification"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-academic-blue hover:underline"
          >
            View repository on GitHub →
          </a>
        </article>
      </section>
    </>
  );
}
