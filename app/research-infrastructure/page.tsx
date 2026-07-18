import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { infrastructure } from '@/data/infrastructure';

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Scientific capabilities for spatial audio, XR, surgical simulation, sensing, and multimodal interaction.',
};

const capabilityGroups = [
  { id: 'ambisonics-lab', title: 'Sonification and Ambisonics Laboratory', itemIds: ['ambisonics-lab'], intro: 'A controlled environment for spatial-audio rendering, auditory-display design, soundscape simulation, and perception studies.' },
  { id: 'spatial-audio', title: 'Spatial Audio System', itemIds: ['surgical-sonification-platform', 'or-soundscape-simulation'], intro: 'Platforms for mapping computational and surgical information to auditory signals and reproducible acoustic scenes.' },
  { id: 'xr', title: 'XR and Immersive Environments', itemIds: ['xr-systems'], intro: 'Visual and auditory environments for prototyping and evaluating multimodal interfaces.' },
  { id: 'clinical-setups', title: 'Surgical and Clinical Recording Setups', itemIds: ['ophthalmic-simulation'], intro: 'Clinically informed simulation contexts for instrument tracking, performance measurement, and feedback studies.' },
  { id: 'vibroacoustic', title: 'Vibroacoustic Sensing', itemIds: ['vibroacoustic-hardware'], intro: 'Experimental sensing and feedback channels for investigating non-visual information transfer.' },
];

export default function ResearchInfrastructurePage() {
  return (
    <>
      <PageHero title="Infrastructure" description="Experimental environments and technical platforms supporting controlled studies, system development, and clinically informed evaluation." />
      {capabilityGroups.map((group, index) => {
        const items = group.itemIds.map((id) => infrastructure.find((item) => item.id === id)).filter((item): item is (typeof infrastructure)[number] => Boolean(item));
        if (items.length === 0) return null;
        const isSingleItem = items.length === 1;
        return (
          <section id={group.id} key={group.id} className={`scroll-mt-28 ${index % 2 ? 'bg-academic-light' : ''}`}>
            <div className="section-container">
              <h2 className="mb-4 text-academic-navy">{group.title}</h2>
              <p className="mb-8 max-w-4xl text-lg text-academic-gray">{group.intro}</p>
              <div className="grid gap-6 lg:grid-cols-2">
                {items.map((item) => (
                  <article key={item.id} className="card p-7">
                    {!isSingleItem && <h3 className="mb-2 text-heading-sm text-academic-navy">{item.name}</h3>}
                    <p className="mb-4 font-semibold text-academic-blue">{item.shortDescription}</p>
                    <p className="mb-6 text-sm leading-relaxed text-academic-gray">{item.fullDescription}</p>
                    <h4 className="mb-3 text-base text-academic-navy">Supported activities</h4>
                    <ul className="space-y-2 text-sm text-academic-gray">
                      {item.capabilities.map((capability) => <li key={capability}>• {capability}</li>)}
                    </ul>
                    <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-academic-gray"><strong>Location:</strong> {item.location}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
