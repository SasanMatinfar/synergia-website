import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PlaceholderNotice from '@/components/PlaceholderNotice';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Motivation, vision, objectives, work packages, methodology, and expected impact of Synergia.',
};

const objectives = [
  ['Develop multimodal surgical feedback', 'Design and evaluate auditory, vibroacoustic, and spatial-audio interfaces that convey surgical state, anatomical proximity, and AI confidence in real time.'],
  ['Understand perceptual integration', 'Quantify how visual, auditory, and tactile information is integrated under workload and identify feedback designs that support attention and decision-making.'],
  ['Connect AI analysis with human-centred interaction', 'Translate surgical scene analysis into meaningful, low-overhead cues for the operating team.'],
  ['Evaluate clinically relevant use cases', 'Study feasibility and usability in controlled simulation and clinically relevant environments.'],
];

const workPackages = [
  ['WP1', 'AI-Assisted Surgical Analysis', 'Real-time analysis of surgical scenes, instrument motion, and anatomical context.'],
  ['WP2', 'Multisensory Perception and Sonification', 'Perception studies and auditory feedback strategies suited to high-intensity workflows.'],
  ['WP3', 'Vibroacoustic Sensing and Haptic Feedback', 'Non-visual communication of surgical state, interaction, and system alerts.'],
  ['WP4', 'Infrastructure and Clinical Translation', 'Integrated laboratory, simulation, and clinical evaluation environments.'],
];

export default function ProjectPage() {
  return (
    <>
      <PageHero title="The Synergia Project" description="A long-term interdisciplinary initiative connecting intelligent medical systems with human multisensory perception." />
      <section className="section-container space-y-16">
        <div className="max-w-4xl">
          <h2 className="mb-5 text-academic-navy">Motivation</h2>
          <div className="space-y-4 text-lg leading-relaxed text-academic-gray">
            <p>Modern operating rooms generate information from imaging systems, tracking data, monitoring streams, and AI-based analysis. Surgeons must interpret this information under time pressure, with limited visual bandwidth and high cognitive load.</p>
            <p>Synergia investigates feedback strategies that make complex information available through sound, touch, and spatial audio rather than relying solely on visual displays. Ophthalmic and microsurgical workflows provide important contexts for studying precision, situational awareness, and human–AI collaboration.</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-academic-navy">Vision</h2>
            <p className="text-lg leading-relaxed text-academic-gray">To establish scientifically grounded approaches for connecting computational analysis with the perceptual capabilities of clinicians in demanding medical environments.</p>
          </div>
          <div>
            <h2 className="mb-5 text-academic-navy">Research Questions</h2>
            <ul className="space-y-3 text-academic-gray">
              <li>How can complex surgical information be represented across sensory channels?</li>
              <li>How do workload, attention, and context affect multisensory integration?</li>
              <li>How should AI-derived guidance communicate uncertainty without disrupting clinical work?</li>
              <li>Which evaluation methods support responsible translation into practice?</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-7 text-academic-navy">Objectives</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {objectives.map(([title, description]) => (
              <article key={title} className="card p-6">
                <h3 className="mb-3 text-heading-sm text-academic-blue">{title}</h3>
                <p className="text-academic-gray">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-7 text-academic-navy">Work Packages</h2>
          <div className="space-y-5">
            {workPackages.map(([number, title, description]) => (
              <article key={number} className="grid gap-3 rounded-lg border-l-4 border-academic-blue bg-academic-light p-6 md:grid-cols-[5rem_1fr]">
                <strong className="text-academic-blue">{number}</strong>
                <div><h3 className="mb-2 text-heading-sm text-academic-navy">{title}</h3><p className="text-academic-gray">{description}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-academic-navy">Methodology</h2>
            <p className="text-academic-gray leading-relaxed">The programme combines computational method development, controlled perception experiments, multimodal interface prototyping, simulation studies, expert assessment, and clinically informed evaluation. Detailed protocols will be documented with the corresponding research outputs.</p>
          </div>
          <div>
            <h2 className="mb-5 text-academic-navy">Expected Impact</h2>
            <p className="text-academic-gray leading-relaxed">The project aims to advance fundamental knowledge of multisensory integration while developing methods relevant to safer, more interpretable, and more human-centred computer-assisted interventions.</p>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-academic-navy">Timeline and Milestones</h2>
          <PlaceholderNotice>Verified project dates, milestone names, deliverables, grant number, and funding amount are required before a public timeline can be published.</PlaceholderNotice>
        </div>

        <div>
          <h2 className="mb-5 text-academic-navy">Funding and Institutional Partnership</h2>
          <p className="text-academic-gray leading-relaxed">Synergia is presented as a Deutsche Forschungsgemeinschaft-funded initiative involving the Technical University of Munich, TU Dresden, clinical partners, and external collaborators. The formal grant wording and complete institutional list require final consortium verification.</p>
        </div>
      </section>
    </>
  );
}
