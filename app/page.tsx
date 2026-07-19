import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { collaborators } from '@/data/collaborators';
import NewsEventCard from '@/components/news-events/NewsEventCard';
import { publishedNewsEvents } from '@/data/newsEvents';
import AmbisonicsLabVideo from '@/components/infrastructure/AmbisonicsLabVideo';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Synergia investigates multisensory integration, surgical sonification, spatial audio, AI, and human perception in computer-assisted medicine.',
};

const researchAreas = [
  ['Multisensory Integration', 'How visual and auditory information is combined in demanding environments.', '/research#multisensory-perception'],
  ['Surgical Sonification', 'Auditory representations of surgical and computational information.', '/research#surgical-sonification'],
  ['Spatial Audio and Ambisonics', 'Immersive sound environments for controlled experiments and interaction studies.', '/research#spatial-audio-xr'],
  ['AI and Computational Modeling', 'Context-aware analysis and modeling for computer-assisted interventions.', '/research#ai-surgery'],
  ['Human Perception and Clinical Interaction', 'Human-centred evaluation of feedback, workload, attention, and clinical use.', '/research#clinical-translation'],
] as const;

const consortiumPreview = ['tum', 'tu-dresden', 'tum-ophthalmology'].map((id) =>
  collaborators.find((partner) => partner.id === id)!,
);
const partnerPreview = collaborators.filter((partner) => ['lmu-ophthalmology', 'syntheseyes', 'surag-medical'].includes(partner.id));

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-academic-navy via-academic-blue to-academic-gray text-white">
        <div className="section-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Interdisciplinary research initiative
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Synergia</h1>
            <p className="mb-8 max-w-3xl text-xl font-light text-blue-100 md:text-2xl">
              Multisensory integration for high-stakes surgical environments
            </p>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-200">
              The Synergia project bridges artificial intelligence and human perception through
              intelligent multisensory interaction, integrating medical XR, sonification, spatial
              audio, and vibroacoustic technologies to enable more intuitive guidance in
              computer-assisted medicine.
            </p>
          </div>

          <div className="mx-auto flex min-h-[22rem] w-full max-w-xl items-center justify-center rounded-2xl border border-white/20 bg-academic-navy/40 p-8 shadow-2xl sm:min-h-[24rem] lg:max-w-lg lg:p-10">
            <div className="relative min-h-52 w-full max-w-md overflow-hidden rounded-xl border border-white/10 sm:min-h-60 lg:min-h-64 lg:max-w-sm">
              <Image
                src="/images/home/synergia-sound-network-hero-medical-balanced.png"
                alt="Conceptual visualization of a surgeon, anatomical tissue, spatial sound waves, network nodes, and speaker forms"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <aside aria-label="Project funding" className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <Image src="/logos/optimized/dfg-logo.png" alt="Deutsche Forschungsgemeinschaft" width={180} height={56} className="h-12 w-auto object-contain sm:h-14" />
          <span className="hidden h-7 w-px bg-slate-300 sm:block" aria-hidden="true" />
          <p className="text-center text-sm font-medium text-academic-gray">Funded by the Deutsche Forschungsgemeinschaft (DFG)</p>
        </div>
      </aside>

      <section className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-academic-blue">The initiative</p>
            <h2 className="text-academic-navy">Project Vision</h2>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-academic-gray">
              <p>
                Synergia is an interdisciplinary research project examining how intelligent systems can communicate clinically relevant information through perceptually meaningful visual and auditory interaction. It connects expertise in computer-assisted medicine, artificial intelligence, sonification, spatial audio, human perception, and clinical research.
              </p>
              <p>
                The project addresses the challenge of supporting clinicians without adding unnecessary visual demand or cognitive burden. Its distinctive approach links fundamental perception research with realistic experimental platforms and clinical validation, allowing multisensory guidance methods to be studied systematically across controlled and applied settings.
              </p>
            </div>
            <aside className="mt-7 rounded-lg border border-blue-200 border-l-4 border-l-academic-blue bg-blue-50/70 px-5 py-5" aria-labelledby="camp-sonification-team-heading">
              <h3 id="camp-sonification-team-heading" className="mb-2 text-xl text-academic-navy">
                Coordinated by the CAMP Sonification Team
              </h3>
              <p className="text-sm leading-relaxed text-academic-gray">
                The Synergia project is scientifically coordinated through the CAMP Sonification Team at the Chair for Computer Aided Medical Procedures, Technical University of Munich. The team serves as the project’s central hub for sonification research, multisensory interaction, and experimental infrastructure.
              </p>
              <a
                href="https://www.cs.cit.tum.de/camp/projects/2016/sonification/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-academic-blue hover:text-academic-navy"
              >
                Explore the CAMP Sonification Team →
              </a>
            </aside>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/project" className="btn-primary">Explore the Project</Link>
              <Link href="/team#partners" className="btn-secondary">Meet the Consortium</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-academic-navy">Core Research Areas</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {researchAreas.map(([title, description, href]) => (
              <Link key={title} href={href} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-academic-blue">
                <h3 className="mb-3 text-lg text-academic-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-academic-gray">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <article className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden bg-academic-navy">
            <div className="relative min-h-64 overflow-hidden">
              <Image src="/images/infrastructure/sonification-ambisonics-laboratory.jpg" alt="Full-sphere loudspeaker array in the Sonification and Ambisonics Laboratory" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[55%_50%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-navy/75 via-transparent to-transparent" aria-hidden="true" />
              <p className="absolute bottom-5 left-7 text-sm font-semibold uppercase tracking-wider text-white">Featured capability</p>
            </div>
            <AmbisonicsLabVideo compact />
          </div>
          <div className="p-8 lg:p-10">
            <h2 className="mb-4 text-academic-navy">Immersive Spatial Audio</h2>
            <p className="mb-7 text-lg leading-relaxed text-academic-gray">
              A full-sphere third-order Ambisonics environment for surgical sonification, spatial auditory guidance, and realistic soundscape reproduction.
            </p>
            <Link href="/research-infrastructure/sonification-ambisonics-laboratory" className="btn-primary">Explore the laboratory</Link>
          </div>
        </article>
      </section>

      {publishedNewsEvents.length > 0 && (
        <section className="bg-academic-light">
          <div className="section-container">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="mb-3 text-academic-navy">Latest from Synergia</h2>
                <p className="max-w-3xl text-lg text-academic-gray">
                  Recent developments, events, demonstrations, and activities from the research programme.
                </p>
              </div>
              <Link href="/news-events" className="shrink-0 font-semibold text-academic-blue">View all news and events →</Link>
            </div>
            <div className={`grid gap-7 ${publishedNewsEvents.length > 1 ? 'lg:grid-cols-2' : ''}`}>
              {publishedNewsEvents.slice(0, 3).map((entry, index) => (
                <div key={entry.slug} className={index === 0 && publishedNewsEvents.length > 1 ? 'lg:col-span-2' : ''}>
                  <NewsEventCard entry={entry} featured={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="section-container">
          <h2 className="mb-4 text-academic-navy">Consortium</h2>
          <p className="mb-8 max-w-3xl text-lg text-academic-gray">
            Synergia brings together technical, perceptual, and clinical expertise from the Technical University of Munich and TU Dresden.
          </p>
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {consortiumPreview.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:border-academic-blue hover:shadow-md"
              >
                <div className="mb-7 flex h-28 w-full items-center justify-center">
                  <Image
                    src={`/logos/${partner.logo}`}
                    alt={`${partner.name} logo`}
                    width={240}
                    height={112}
                    className="h-24 w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-heading-sm text-academic-navy">{partner.name}</h3>
                <p className="text-sm font-medium text-academic-blue">{partner.primaryRole}</p>
              </a>
            ))}
          </div>
          <Link href="/team#partners" className="font-semibold text-academic-blue">Meet the team and partners →</Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-academic-light">
        <div className="section-container">
        <h2 className="mb-4 text-academic-navy">Collaborating Partners</h2>
        <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {partnerPreview.map((partner) => (
            <a key={partner.id} href={partner.website} target="_blank" rel="noopener noreferrer" className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center hover:border-academic-blue" aria-label={`Visit ${partner.name} website`}>
              <Image src={`/logos/${partner.logo}`} alt={`${partner.name} logo`} width={160} height={56} className="mb-2 h-12 w-full object-contain" />
              <span className="text-xs font-semibold leading-snug text-academic-navy">{partner.name}</span>
            </a>
          ))}
        </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/team#partners" className="btn-primary">Meet the Consortium</Link>
            <Link href="/research#publications" className="btn-secondary">Explore Research Outputs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
