import Image from 'next/image';
import { ambisonicsResearchCapabilities, ambisonicsSpecifications, ambisonicsTechnicalImplementation } from '@/data/infrastructure';
import ExpandableImage from './ExpandableImage';

export default function AmbisonicsLaboratory({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="ambisonics-lab" className="scroll-mt-28">
      <div className="section-container">
        <div className="max-w-5xl">
          {showHeading && <h2 className="mb-5 text-academic-navy">Sonification and Ambisonics Laboratory</h2>}
          <p className="mb-10 text-lg leading-relaxed text-academic-gray">The Sonification and Ambisonics Laboratory provides a full-sphere spatial audio environment for research on surgical sonification, immersive auditory scene rendering, and human perception. Its third-order Ambisonics system uses 16 independently driven loudspeakers arranged around a central listening area, enabling controlled reproduction of spatially complex sound fields.</p>
        </div>

        <figure className="mb-14">
          <div className="overflow-hidden rounded-xl bg-slate-100">
            <Image src="/images/infrastructure/sonification-ambisonics-laboratory.jpg" alt="Full-sphere Ambisonics laboratory showing the aluminium frame and surrounding loudspeaker array" width={1280} height={960} sizes="(min-width: 1280px) 1152px, 100vw" className="h-auto w-full" />
          </div>
          <figcaption className="mt-3 text-sm text-academic-gray">The 16-channel full-sphere Ambisonics array installed at the Sonification and Ambisonics Laboratory.</figcaption>
        </figure>

        <div className="mb-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <section aria-labelledby="lab-specifications">
            <h3 id="lab-specifications" className="mb-6 text-heading-sm text-academic-navy">Key Specifications</h3>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {ambisonicsSpecifications.map(([term, value]) => (
                <div key={term} className="bg-white p-5">
                  <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-academic-blue">{term}</dt>
                  <dd className="text-sm font-medium leading-relaxed text-academic-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="lab-capabilities">
            <h3 id="lab-capabilities" className="mb-6 text-heading-sm text-academic-navy">Research Capabilities</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {ambisonicsResearchCapabilities.map((capability) => (
                <li key={capability} className="flex gap-3 rounded-lg bg-academic-light px-4 py-3 text-sm font-medium text-academic-navy"><span className="text-academic-blue" aria-hidden="true">●</span>{capability}</li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="array-geometry" className="mb-12">
          <h3 id="array-geometry" className="mb-4 text-heading-md text-academic-navy">Full-Sphere Array Geometry</h3>
          <p className="mb-8 max-w-4xl leading-relaxed text-academic-gray">The array is organized in three vertical layers around a fixed central listening position: four lower, eight middle, and four upper loudspeakers. All loudspeakers are oriented toward the central sweet spot, supporting seated or standing listeners at an approximate ear height of 1.1 metres.</p>
          <figure>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 sm:p-4">
              <ExpandableImage src="/images/infrastructure/full-sphere-ambisonics-array-cad.png" alt="CAD drawing showing top, side, and perspective views of the three-layer full-sphere Ambisonics loudspeaker array" width={2648} height={2088} />
            </div>
            <figcaption className="mt-3 text-sm text-academic-gray">Custom aluminium frame and three-layer loudspeaker geometry used for the 16-channel full-sphere array.</figcaption>
          </figure>
        </section>

        <details className="rounded-xl border border-slate-200 bg-academic-light p-6">
          <summary className="cursor-pointer font-semibold text-academic-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-academic-blue">Technical Implementation</summary>
          <ul className="mt-6 grid gap-3 text-sm text-academic-gray sm:grid-cols-2">
            {ambisonicsTechnicalImplementation.map((detail) => <li key={detail} className="flex gap-3"><span className="text-academic-blue" aria-hidden="true">•</span>{detail}</li>)}
          </ul>
        </details>
      </div>
    </section>
  );
}
