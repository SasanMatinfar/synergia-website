import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PlaceholderNotice from '@/components/PlaceholderNotice';
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
          <p className="text-lg leading-relaxed text-academic-gray">The research programme studies how computational systems can communicate with clinicians through perceptually meaningful visual, auditory, and tactile information. The themes below are interconnected and contribute to the project work packages.</p>
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
          <h2 className="mb-4 text-academic-navy">Publications and Preprints</h2>
          <p className="mb-8 max-w-3xl text-lg text-academic-gray">This section is structured to grow into a filterable catalogue by year, topic, work package, and output type.</p>
          <PlaceholderNotice>No publication records in the repository are currently verified. The previous entries were explicitly marked as fictional placeholders and have therefore not been presented as publications.</PlaceholderNotice>
        </div>
      </section>

      <section id="outputs" className="section-container scroll-mt-28">
        <h2 className="mb-4 text-academic-navy">Software, Datasets, and Research Outputs</h2>
        <p className="mb-8 max-w-3xl text-lg text-academic-gray">Future releases may include software prototypes, experimental datasets, sonification examples, study materials, and technical documentation, subject to publication, ethics, licensing, and data-governance requirements.</p>
        <PlaceholderNotice>Verified output titles, repositories, licences, persistent identifiers, and access conditions have not yet been supplied.</PlaceholderNotice>
      </section>
    </>
  );
}
