import Link from 'next/link';

/**
 * Ambisonics Lab highlight section
 * Features the flagship lab infrastructure
 */
export default function AmbisconicsLabHighlight() {
  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-academic-blue to-academic-navy rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎧</div>
                  <p className="text-lg font-semibold">TODO: Ambisonics Lab Photo</p>
                  <p className="text-sm mt-2 opacity-75">
                    Replace with actual lab photo (16-speaker array)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold text-academic-navy mb-6">
              Ambisonics Laboratory
            </h2>

            <p className="text-lg text-academic-gray mb-6 leading-relaxed">
              Our flagship research facility features a state-of-the-art 3rd-order Ambisonics
              laboratory with a 16-loudspeaker configuration. This immersive spatial audio
              environment enables unprecedented research into surgical sonification, auditory
              perception, and multisensory integration.
            </p>

            {/* Key capabilities */}
            <div className="space-y-4 mb-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-academic-navy">3rd-Order Ambisonics</h4>
                  <p className="text-academic-gray text-sm">16-channel spatial audio capture and playback</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-academic-navy">OR Soundscape Simulation</h4>
                  <p className="text-academic-gray text-sm">Reproduce realistic surgical environments</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-academic-navy">Perception Studies</h4>
                  <p className="text-academic-gray text-sm">Investigate multisensory interaction and workload</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-academic-navy">Sonification Design</h4>
                  <p className="text-academic-gray text-sm">Develop and evaluate surgical auditory displays</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link href="/ambisonics-lab" className="btn-primary">
              Learn More About the Lab
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
