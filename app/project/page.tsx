import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ProjectRoadmap from '@/components/project/ProjectRoadmap';
import WorkPackageFlow from '@/components/project/WorkPackageFlow';
import { workPackages } from '@/data/project';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Vision, scientific objectives, experimental workflow, work packages, and roadmap of Synergia.',
};

export default function ProjectPage() {
  return (
    <>
      <PageHero title="The Synergia Project" description="An interdisciplinary initiative connecting intelligent medical systems with human multisensory perception." />

      <section className="section-container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-academic-blue">Why Synergia</p>
            <h2 className="mb-5 text-academic-navy">A demanding information environment</h2>
            <div className="space-y-4 text-lg leading-relaxed text-academic-gray">
              <p>Modern operating rooms generate information from imaging, tracking, monitoring, and AI-based analysis. Clinicians must interpret these streams under time pressure, with limited visual bandwidth and high cognitive demands.</p>
              <p>Synergia studies how sound, spatial audio, and other computationally mediated signals can complement visual guidance in realistic ophthalmic and microsurgical scenarios.</p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-academic-light p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-academic-blue">Project Vision</p>
            <h2 className="mb-5 text-academic-navy">Connecting computation and perception</h2>
            <p className="text-lg leading-relaxed text-academic-gray">The project aims to establish scientifically grounded ways for intelligent medical systems to communicate with clinicians through perceptually meaningful audiovisual information, from controlled laboratory studies to realistic clinical validation.</p>
          </div>
        </div>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-academic-navy">Scientific Objectives</h2>
            <p className="text-lg leading-relaxed text-academic-gray">Six interconnected objectives define the project’s scientific framework, guiding the development, evaluation, and clinical translation of multisensory interaction for computer-assisted medicine.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workPackages.map((workPackage, index) => (
              <article key={workPackage.number} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="mb-5 inline-flex rounded-full bg-academic-blue px-3 py-1 text-xs font-bold text-white">Objective {index + 1}</span>
                <h3 className="mb-4 text-heading-sm text-academic-navy">{workPackage.objectiveTitle}</h3>
                <p className="text-sm leading-relaxed text-academic-gray">{workPackage.objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-4 text-academic-navy">Project Workflow</h2>
          <p className="text-lg leading-relaxed text-academic-gray">The experimental programme advances from passive perception studies to active navigation and, finally, realistic ophthalmic validation.</p>
        </div>
        <figure>
          <div className="overflow-x-auto pb-3" tabIndex={0} aria-label="Scrollable project workflow infographic">
            <Image
              src="/images/project/synergia-project-workflow.png"
              alt="Synergia project workflow showing three experimental stages: passive laboratory perception studies, active XR-based surgical navigation studies, and clinical pig-eye ophthalmic validation, together with common surgical tasks and evaluation dimensions."
              width={1536}
              height={620}
              sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 6rem), 900px"
              className="h-auto min-w-[900px] max-w-none md:min-w-0 md:max-w-full"
            />
          </div>
          <figcaption className="sr-only">Experimental progression from controlled perception studies through active navigation to realistic ophthalmic validation.</figcaption>
        </figure>
      </section>

      <section className="bg-academic-light">
        <div className="section-container">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-academic-navy">Work Package Flow</h2>
            <p className="text-lg leading-relaxed text-academic-gray">WP1 establishes the experimental foundation. WP2 and WP3 develop auditory environments and sonification methods; WP4 and WP5 evaluate human performance, expertise, and learning; WP6 brings the optimized approach into clinical validation.</p>
          </div>
          <WorkPackageFlow />
        </div>
      </section>

      <section className="section-container">
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-4 text-academic-navy">Project Roadmap</h2>
          <p className="text-lg leading-relaxed text-academic-gray">A three-year progression from experimental platforms and models to human studies, clinical validation, and reusable research outputs.</p>
        </div>
        <ProjectRoadmap />
      </section>

      <section className="bg-academic-light">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-academic-navy">Expected Impact</h2>
            <p className="leading-relaxed text-academic-gray">Synergia aims to advance understanding of multisensory human performance while developing methods for more interpretable and human-centred computer-assisted interventions.</p>
          </div>
          <div>
            <h2 className="mb-5 text-academic-navy">Funding and Institutional Partnership</h2>
            <p className="leading-relaxed text-academic-gray">Synergia is funded by the Deutsche Forschungsgemeinschaft and conducted jointly by the Technical University of Munich and TU Dresden, together with clinical and technology collaborators.</p>
          </div>
        </div>
      </section>
    </>
  );
}
