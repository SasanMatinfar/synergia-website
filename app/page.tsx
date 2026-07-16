import type { Metadata } from 'next';
import Link from 'next/link';
import { collaborators } from '@/data/collaborators';
import { researchThemes } from '@/data/researchThemes';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Synergia investigates multisensory integration, surgical sonification, spatial audio, AI, and human perception in computer-assisted medicine.',
};

export default function HomePage() {
  const themes = researchThemes.slice(0, 6);
  const institutions = collaborators.filter((item) => item.id !== 'dfg');

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-academic-navy via-academic-blue to-academic-gray text-white">
        <div className="section-container text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Interdisciplinary research initiative
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Synergia</h1>
          <p className="mx-auto mb-8 max-w-4xl text-xl font-light text-blue-100 md:text-2xl">
            Multisensory integration for high-stakes surgical environments
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-200">
            The project connects artificial intelligence, spatial audio, sonification,
            vibroacoustic sensing, and human perception to investigate more intuitive forms of
            guidance in computer-assisted medicine.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/project" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
              Explore the Project
            </Link>
            <Link href="/research" className="btn-secondary border-white bg-transparent text-white">
              View the Research
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-academic-navy">Core Research Areas</h2>
          <p className="text-lg leading-relaxed text-academic-gray">
            Synergia brings together complementary scientific perspectives rather than treating
            sensing, computation, and perception as separate problems.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Link
              key={theme.id}
              href={`/research#${theme.id}`}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 hover:border-academic-blue"
            >
              <h3 className="mb-2 text-lg text-academic-navy">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-academic-gray">{theme.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <h2 className="mb-4 text-academic-navy">Consortium</h2>
          <p className="mb-8 max-w-3xl text-lg text-academic-gray">
            Academic, technical, and clinical expertise is contributed by partners in Munich,
            Dresden, and the wider research network.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {institutions.map((institution) => (
              <a
                key={institution.id}
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-32 items-center gap-5 rounded-lg border border-slate-200 bg-white p-5"
              >
                {institution.logo && (
                  <img
                    src={`/logos/${institution.logo}`}
                    alt=""
                    className="h-14 w-20 object-contain"
                  />
                )}
                <span>
                  <strong className="block text-academic-navy">{institution.abbreviation}</strong>
                  <span className="text-sm text-academic-gray">{institution.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="card p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-academic-blue">Featured capability</p>
            <h2 className="mb-4 text-heading-sm text-academic-navy">Sonification and Ambisonics Laboratory</h2>
            <p className="mb-6 text-academic-gray">
              A controlled spatial-audio environment supports auditory-display development,
              soundscape simulation, and multisensory perception studies.
            </p>
            <Link href="/research-infrastructure#ambisonics-lab" className="font-semibold text-academic-blue">
              Explore the laboratory →
            </Link>
          </article>
          <article className="card p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-academic-blue">Research outputs</p>
            <h2 className="mb-4 text-heading-sm text-academic-navy">Publications and Preprints</h2>
            <p className="mb-6 text-academic-gray">
              The research section is prepared to document verified publications, preprints,
              software, datasets, and other project outputs as they become available.
            </p>
            <Link href="/research#publications" className="font-semibold text-academic-blue">
              View research outputs →
            </Link>
          </article>
          <article className="card p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-academic-blue">Project activity</p>
            <h2 className="mb-4 text-heading-sm text-academic-navy">Media and Demonstrations</h2>
            <p className="mb-6 text-academic-gray">
              Events, laboratory documentation, videos, and demonstrations will be collected in a
              structured project archive.
            </p>
            <Link href="/media" className="font-semibold text-academic-blue">
              Open the media archive →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
