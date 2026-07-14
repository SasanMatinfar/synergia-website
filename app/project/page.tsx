import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Overview - Synergia',
  description:
    'High-level overview of the Synergia project, its structure, objectives, work packages, and roadmap.',
};

/**
 * Project overview page
 * Describes the project in detail, including motivation, objectives, and roadmap
 */
export default function ProjectPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">The Synergia Project</h1>
          <p className="text-2xl text-blue-100 leading-relaxed">
            A high-level overview of the project structure, objectives, and work packages
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6 text-academic-gray">
            This page provides the high-level overview of the Synergia project. The dedicated scientific work page offers a deeper look at the individual research directions and work packages behind the project.
          </div>

          {/* Scientific Motivation */}
          <div className="mb-16">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-6">
              Scientific Motivation
            </h2>
            <div className="bg-academic-light rounded-lg p-8 border-l-4 border-academic-blue">
              <p className="text-lg text-academic-gray leading-relaxed">
                Modern operating rooms generate an abundance of information from imaging systems,
                tracking data, monitoring streams, and AI-based analysis. Yet surgeons must interpret
                that information under time pressure, with limited visual bandwidth and high cognitive
                load. The Synergia project addresses this challenge by developing multimodal feedback
                strategies that make complex surgical information available through sound, touch, and
                spatial audio rather than relying solely on visual displays.
              </p>
              <p className="mt-4 text-academic-gray leading-relaxed">
                The project focuses on high-intensity surgical settings, particularly ophthalmic and
                microsurgical workflows, where precision, situational awareness, and efficient human-AI
                collaboration are essential. By connecting AI analysis with human perception, Synergia
                aims to improve guidance, reduce cognitive overload, and support safer and more
                intuitive surgical interaction.
              </p>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="mb-16">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-6">
              Project Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Develop multimodal surgical feedback',
                  description:
                    'Design and evaluate auditory, vibroacoustic, and spatial-audio interfaces that convey surgical state, anatomical proximity, and AI confidence in real time.',
                },
                {
                  title: 'Understand perceptual integration',
                  description:
                    'Quantify how surgeons integrate visual, auditory, and tactile information under workload, and identify which feedback designs support attention and decision-making.',
                },
                {
                  title: 'Link AI analysis to human-centered interaction',
                  description:
                    'Create a real-time sensing and sonification pipeline that translates surgical scene analysis into meaningful, low-overhead cues for the operating team.',
                },
                {
                  title: 'Validate the approach in clinical contexts',
                  description:
                    'Test the system in realistic simulation and clinical environments to establish feasibility, usability, and translational relevance for future surgical deployment.',
                },
              ].map((objective, idx) => (
                <div key={idx} className="card p-6">
                  <h3 className="text-heading-sm font-bold text-academic-blue mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-academic-gray">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Packages */}
          <div className="mb-16">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-6">
              Work Packages
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'WP1: AI-Assisted Surgical Analysis',
                  description:
                    'Develops methods for real-time analysis of surgical scenes, instrument motion, and anatomical context, providing a foundation for context-aware and low-overhead guidance.',
                },
                {
                  title: 'WP2: Multisensory Perception and Sonification',
                  description:
                    'Investigates how surgeons perceive auditory and multimodal cues in high-intensity settings and translates this understanding into sonification strategies suited to surgical workflow.',
                },
                {
                  title: 'WP3: Vibroacoustic Sensing and Haptic Feedback',
                  description:
                    'Explores tactile and vibroacoustic channels for communicating surgical state and system alerts without increasing visual or auditory burden.',
                },
                {
                  title: 'WP4: Infrastructure and Clinical Translation',
                  description:
                    'Combines the Ambisonics laboratory, simulation facilities, and surgical partnerships to test the system in realistic environments and prepare it for clinical adoption.',
                },
              ].map((wp, idx) => (
                <div key={idx} className="bg-academic-light rounded-lg p-6 border-l-4 border-academic-blue">
                  <h3 className="text-heading-sm font-bold text-academic-navy mb-2">
                    {wp.title}
                  </h3>
                  <p className="text-academic-gray">{wp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Roadmap */}
          <div className="mb-16">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-6">
              Research Roadmap
            </h2>
            <div className="bg-academic-light rounded-lg p-8">
              <p className="text-academic-gray mb-6">
                The project is structured around a phased progression from method development to clinical evaluation and translational integration.
              </p>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Phase 1: Foundation',
                    description: 'Establish the research framework, define surgical use cases, and build the initial sensing and feedback pipeline.',
                  },
                  {
                    phase: 'Phase 2: Development',
                    description: 'Implement multimodal sonification and haptic feedback concepts and test them in controlled simulation and laboratory environments.',
                  },
                  {
                    phase: 'Phase 3: Evaluation',
                    description: 'Assess perceptual effectiveness, usability, and cognitive impact through human-subject studies and expert review.',
                  },
                  {
                    phase: 'Phase 4: Translation',
                    description: 'Validate the system in clinically relevant workflows and prepare evidence for future deployment in surgical practice.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-academic-blue text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-academic-navy">{item.phase}</h4>
                      <p className="text-sm text-academic-gray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
