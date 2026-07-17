import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Synergia investigates multisensory integration, surgical sonification, spatial audio, AI, and human perception in computer-assisted medicine.',
};

const researchAreas = [
  ['Multisensory Integration', 'How visual, auditory, and tactile information is combined in demanding environments.', '/research#multisensory-perception'],
  ['Surgical Sonification', 'Auditory representations of surgical and computational information.', '/research#surgical-sonification'],
  ['Spatial Audio and Ambisonics', 'Immersive sound environments for controlled experiments and interaction studies.', '/research#spatial-audio-xr'],
  ['AI and Computational Modeling', 'Context-aware analysis and modeling for computer-assisted interventions.', '/research#ai-surgery'],
  ['Human Perception and Clinical Interaction', 'Human-centred evaluation of feedback, workload, attention, and clinical use.', '/research#clinical-translation'],
] as const;

const collaboratingPartners = [
  {
    name: 'LMU University Hospital — Department of Ophthalmology',
    website: 'https://www.lmu-klinikum.de/augenklinik',
    description:
      'Clinical collaboration supporting ophthalmic research, surgeon interviews, and future experimental validation.',
    logo: '/logos/lmu_logo.jpg',
  },
  {
    name: 'SynthesEyes GmbH',
    website: 'https://syntheseyes.com/',
    description:
      'Industry collaboration supporting the translation of multisensory interaction technologies into future medical applications.',
    logo: '/logos/syntheseyes.png',
  },
  {
    name: 'SURAG Medical',
    website: 'https://www.surag-medical.com/',
    description:
      'Technology collaboration supporting vibroacoustic sensing and experimental surgical interaction research.',
    logo: '/logos/surag.png',
  },
] as const;

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
            <div>
              <Link href="/project" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
                Explore the Project
              </Link>
            </div>
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
          <img src="/logos/optimized/dfg-logo.png" alt="Deutsche Forschungsgemeinschaft" className="h-12 w-auto object-contain sm:h-14" />
          <span className="hidden h-7 w-px bg-slate-300 sm:block" aria-hidden="true" />
          <p className="text-center text-sm font-medium text-academic-gray">
            Funded by the Deutsche Forschungsgemeinschaft (DFG)
          </p>
        </div>
      </aside>

      <section className="section-container">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-academic-navy">Core Research Areas</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {researchAreas.map(([title, description, href]) => (
            <Link key={title} href={href} className="rounded-lg border border-slate-200 bg-slate-50 p-5 hover:border-academic-blue">
              <h3 className="mb-3 text-lg text-academic-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-academic-gray">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <h2 className="mb-4 text-academic-navy">Consortium</h2>
          <p className="mb-10 max-w-3xl text-lg text-academic-gray">
            The project combines technical, perceptual, and clinical expertise across its two university partners.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-7">
              <div className="mb-7 flex min-h-20 items-center gap-5 border-b border-slate-200 pb-6">
                <img src="/logos/optimized/tum-logo.png" alt="" className="h-20 w-28 flex-shrink-0 object-contain sm:h-24 sm:w-32" />
                <div>
                  <h3 className="text-heading-sm text-academic-navy">Technical University of Munich</h3>
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                  <img src="/logos/optimized/camp-logo.png" alt="" className="h-24 w-full scale-110 object-contain sm:h-28" />
                  <div>
                    <h4 className="text-base text-academic-navy">Chair for Computer Aided Medical Procedures</h4>
                    <p className="mt-1 text-sm text-academic-gray">Computer-assisted intervention, medical AI, imaging, and multimodal systems.</p>
                  </div>
                </div>
                <div className="grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                  <img src="/logos/tum-clinic-logo.jpg" alt="" className="h-24 w-full object-contain sm:h-28" />
                  <div>
                    <h4 className="text-base text-academic-navy">Department of Ophthalmology</h4>
                    <p className="mt-1 text-sm text-academic-gray">Clinical expertise and ophthalmic research contexts documented by the project.</p>
                  </div>
                </div>
                <div className="grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                  <img src="/logos/optimized/maps-logo.png" alt="" className="h-20 w-full object-contain" />
                  <div>
                    <h4 className="text-base text-academic-navy">Medical Autonomy and Precision Surgery (MAPS)</h4>
                    <p className="mt-1 text-sm text-academic-gray">Surgical robotics, precision intervention, medical imaging, and clinical translation.</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-7">
              <div className="mb-7 flex min-h-20 items-center gap-5 border-b border-slate-200 pb-6">
                <img src="/logos/optimized/tu-dresden-logo.png" alt="" className="h-20 w-32 flex-shrink-0 object-contain sm:h-24 sm:w-36" />
                <div>
                  <h3 className="text-heading-sm text-academic-navy">TU Dresden</h3>
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                  <img src="/logos/social.png" alt="" className="h-20 w-full object-contain" />
                  <div>
                    <h4 className="text-base text-academic-navy">Junior Professorship in Social Affective Touch</h4>
                    <p className="mt-1 text-sm text-academic-gray">Multisensory perception, cognition, and human-centred interaction research.</p>
                  </div>
                </div>
                <div className="grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                  <img src="/logos/optimized/ceti-logo.png" alt="" className="h-20 w-full object-contain" />
                  <div>
                    <h4 className="text-base text-academic-navy">Centre for Tactile Internet with Human-in-the-Loop (CeTI)</h4>
                    <p className="mt-1 text-sm text-academic-gray">Interdisciplinary environment for human-centred tactile and multisensory research.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="mb-4 text-academic-navy">Collaborating Partners</h2>
        <p className="mb-10 max-w-3xl text-lg text-academic-gray">
          Organizations collaborating with Synergia through clinical, industry, and technology
          partnerships outside the funded consortium.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collaboratingPartners.map((partner) => (
            <article key={partner.name} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex h-28 items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="text-heading-sm text-academic-navy">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-academic-blue"
                  >
                    {partner.name}
                  </a>
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-academic-gray">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <article className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-72 items-end bg-gradient-to-br from-academic-blue to-academic-navy p-8 text-white">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-100">Featured capability</p>
              <p className="max-w-sm text-sm leading-relaxed text-gray-200">A real laboratory photograph can replace this temporary visual without changing the surrounding layout.</p>
            </div>
          </div>
          <div className="p-8 lg:p-10">
            <h2 className="mb-4 text-academic-navy">Sonification and Ambisonics Laboratory</h2>
            <p className="mb-7 text-lg leading-relaxed text-academic-gray">
              The laboratory supports controlled multisensory, spatial-audio, sonification, XR,
              soundscape, and surgical-interaction experiments. It connects technical platform
              development with systematic studies of perception and interaction.
            </p>
            <Link href="/research-infrastructure#ambisonics-lab" className="btn-primary">Explore the Infrastructure</Link>
          </div>
        </article>
      </section>

      <section className="bg-academic-light">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-academic-blue">Research Outputs</p>
            <h2 className="mb-4 text-heading-md text-academic-navy">Publications and Scientific Resources</h2>
            <p className="mb-7 text-lg leading-relaxed text-academic-gray">
              Explore publications, preprints, software, datasets, and scientific resources emerging from the Synergia research programme.
            </p>
            <Link href="/research#publications" className="font-semibold text-academic-blue">View research outputs →</Link>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-academic-blue">Project Activity</p>
            <h2 className="mb-4 text-heading-md text-academic-navy">Events, Demonstrations, and Media</h2>
            <p className="mb-7 text-lg leading-relaxed text-academic-gray">
              Explore project events, laboratory demonstrations, scientific videos, conference activity, outreach, and documentation from the Synergia research programme.
            </p>
            <Link href="/media" className="font-semibold text-academic-blue">Open the media archive →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
