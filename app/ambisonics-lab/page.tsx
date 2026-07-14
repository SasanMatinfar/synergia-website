import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ambisonics Laboratory - Synergia',
  description:
    'Learn about the state-of-the-art 3rd-order Ambisonics laboratory at the heart of the Synergia project.',
};

/**
 * Ambisonics lab dedicated page
 * Highlights the flagship research facility
 */
export default function AmbisconicsLabPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Ambisonics Laboratory</h1>
          <p className="text-2xl text-blue-100">
            Immersive 3rd-Order Spatial Audio Research Environment
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-academic-light rounded-lg p-12 text-center mb-12">
            <div className="text-6xl mb-6">🎧</div>
            <h2 className="text-heading-md font-bold text-academic-navy mb-4">
              TODO: Ambisonics Lab Photo Gallery
            </h2>
            <p className="text-academic-gray">
              Replace with actual photos of the 16-speaker array, lab layout, and research setups
            </p>
          </div>

          <div className="prose prose-lg text-academic-gray">
            <h3 className="text-heading-md font-bold text-academic-navy">
              About the Laboratory
            </h3>
            <p className="text-lg leading-relaxed">
              The Synergia Ambisonics Laboratory represents a significant investment in cutting-edge
              audio research infrastructure. Our facility provides an immersive spatial audio
              environment where researchers can create, test, and evaluate multisensory surgical
              experiences.
            </p>

            <h3 className="text-heading-md font-bold text-academic-navy mt-12 mb-4">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              {[
                { label: 'Ambisonics Order', value: '3rd Order' },
                { label: 'Number of Channels', value: '16 (ACN format)' },
                { label: 'Loudspeaker Geometry', value: 'Optimized tetrahedral array' },
                { label: 'Frequency Response', value: 'TODO: 20Hz - 20kHz' },
                { label: 'Room Size', value: 'TODO: X m × Y m × Z m' },
                { label: 'Acoustic Treatment', value: 'Professional studio-grade' },
              ].map((spec, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-bold text-academic-navy text-sm">{spec.label}</h4>
                  <p className="text-academic-gray mt-1">{spec.value}</p>
                </div>
              ))}
            </div>

            <h3 className="text-heading-md font-bold text-academic-navy mt-12 mb-4">
              Research Applications
            </h3>
          </div>
        </div>
      </section>

      {/* Research applications */}
      <section className="section-container bg-academic-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'OR Soundscape Reproduction',
                icon: '🏥',
                description:
                  'Create realistic operating room acoustic environments for surgical training and perception studies. Test how different soundscape designs affect surgeon performance and workload.',
                applications: [
                  'Acoustic simulation',
                  'Alarm design evaluation',
                  'Background noise studies',
                  'Communication testing',
                ],
              },
              {
                title: 'Surgical Sonification',
                icon: '🔊',
                description:
                  'Develop and evaluate auditory representations of surgical data. Use spatial audio to present instrument position, anatomical proximity, and AI confidence in an intuitive, multidimensional way.',
                applications: [
                  'Sonification design',
                  'Perceptual evaluation',
                  'Workload assessment',
                  'Preference testing',
                ],
              },
              {
                title: 'Auditory Perception Studies',
                icon: '👂',
                description:
                  'Conduct controlled experiments investigating how humans perceive spatial auditory information under varying conditions. Study attention, workload, and decision-making with multisensory feedback.',
                applications: [
                  'Listening panel sessions',
                  'Psychoacoustic testing',
                  'Cognitive workload studies',
                  'Perceptual threshold measurement',
                ],
              },
              {
                title: 'Immersive Training Environments',
                icon: '🎮',
                description:
                  'Create fully immersive surgical training environments that combine visual (AR/VR) with spatial audio. Provide trainees with realistic multisensory surgical experiences.',
                applications: [
                  'Surgical simulation',
                  'Spatial audio training',
                  'Human-AI interaction practice',
                  'Decision-making scenarios',
                ],
              },
            ].map((app, idx) => (
              <div key={idx} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h4 className="text-heading-sm font-bold text-academic-navy mb-3">
                  {app.title}
                </h4>
                <p className="text-academic-gray mb-4 text-sm">{app.description}</p>
                <div>
                  <p className="text-xs font-semibold text-academic-blue mb-2">Applications:</p>
                  <ul className="text-xs text-academic-gray space-y-1">
                    {app.applications.map((appl, i) => (
                      <li key={i}>• {appl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-8 text-center">
            Laboratory Capabilities
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Spatial Audio Rendering',
                description:
                  'Real-time encoding/decoding of Ambisonics streams with support for dynamic scene updates and moving sound sources',
              },
              {
                title: 'Multi-Channel Recording',
                description:
                  'Capture 3rd-order Ambisonics recordings of real operating rooms and other acoustic environments for research and simulation',
              },
              {
                title: 'Interactive Audio Processing',
                description:
                  'Custom software for sonification, audio effects, and immersive soundscape design integrated with research instruments',
              },
              {
                title: 'Measurement and Analysis',
                description:
                  'Acoustic characterization, perceptual metrics evaluation, and human response assessment with professional instrumentation',
              },
              {
                title: 'Integration with XR Systems',
                description:
                  'Seamless integration with AR/VR platforms for immersive surgical visualization and training scenarios',
              },
              {
                title: 'Data Collection & Analysis',
                description:
                  'Synchronized recording of audio, behavioral, and physiological data for comprehensive multisensory research',
              },
            ].map((cap, idx) => (
              <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="w-8 h-8 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-academic-navy">{cap.title}</h4>
                  <p className="text-academic-gray text-sm mt-1">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo & Video section */}
      <section className="section-container bg-academic-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-8 text-center">
            Lab Demonstrations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-academic-blue to-academic-navy flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-5xl mb-3">🎥</div>
                  <p className="font-semibold">TODO: Lab Tour Video</p>
                  <p className="text-sm opacity-75 mt-1">Embed video demonstrating lab setup</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-academic-navy mb-2">Complete Lab Tour</h4>
                <p className="text-sm text-academic-gray">
                  Virtual walkthrough of the Ambisonics laboratory, speaker array, and research equipment
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-academic-blue to-academic-navy flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-5xl mb-3">🎵</div>
                  <p className="font-semibold">TODO: Sonification Demo</p>
                  <p className="text-sm opacity-75 mt-1">Audio demo of surgical sonification</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-academic-navy mb-2">Sonification Demo</h4>
                <p className="text-sm text-academic-gray">
                  Listen to examples of how surgical information is translated into spatial auditory signals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Collaboration */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-lg font-bold text-academic-navy mb-8 text-center">
            Using the Lab
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="card p-6">
              <h4 className="text-heading-sm font-bold text-academic-navy mb-3">For Synergia Team</h4>
              <p className="text-academic-gray text-sm mb-4">
                Lab access is fully integrated into the Synergia project research program with
                dedicated time slots and coordination through the project office.
              </p>
              <p className="text-sm">
                <strong>Contact:</strong>{' '}
                <a href="mailto:sasan.matinfar@tum.de" className="text-academic-blue hover:text-academic-navy">
                  Dr. Sasan Matinfar
                </a>
              </p>
            </div>

            <div className="card p-6">
              <h4 className="text-heading-sm font-bold text-academic-navy mb-3">For External Collaborators</h4>
              <p className="text-academic-gray text-sm mb-4">
                We welcome collaboration requests from researchers and institutions interested in
                multisensory research, surgical innovation, or spatial audio applications.
              </p>
              <Link href="/contact" className="text-academic-blue font-semibold hover:text-academic-navy">
                Request collaboration →
              </Link>
            </div>
          </div>

          <div className="bg-academic-light rounded-lg p-8 text-center">
            <h3 className="text-heading-sm font-bold text-academic-navy mb-3">
              Join Our Research Community
            </h3>
            <p className="text-academic-gray mb-6">
              We're always looking for collaborators in perception research, surgical AI, audio engineering,
              and human factors. Get in touch to discuss potential partnerships.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
