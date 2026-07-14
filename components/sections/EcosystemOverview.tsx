/**
 * Ecosystem overview section
 * Shows interconnection between research areas and institutions
 */
export default function EcosystemOverview() {
  const ecosystemElements = [
    { icon: '🤖', label: 'AI & Imaging' },
    { icon: '👁️', label: 'Perception' },
    { icon: '🔊', label: 'Sonification' },
    { icon: '🎧', label: 'Spatial Audio' },
    { icon: '📳', label: 'Haptics' },
    { icon: '🏥', label: 'Clinical' },
  ];

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-academic-navy">
          Involving Institutes
        </h2>
        <p className="text-center text-academic-gray mb-10 text-lg max-w-3xl mx-auto">
          Synergia brings together clinical, engineering, and perception research expertise across leading institutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-academic-navy mb-3">Technical University of Munich</h3>
            <p className="text-sm text-academic-gray leading-relaxed">
              CAMP, the Department of Ophthalmology at Rechts der Isar Hospital, and MAPS contribute expertise in surgical AI, imaging, robotics, and clinical translation.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-academic-navy mb-3">TU Dresden</h3>
            <p className="text-sm text-academic-gray leading-relaxed">
              CeTI and related perception research groups contribute auditory perception, multisensory integration, and human-centered interaction research.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-academic-gray">
            <span>TUM</span>
            <span>•</span>
            <span>Rechts der Isar Hospital</span>
            <span>•</span>
            <span>CeTI</span>
            <span>•</span>
            <span>TU Dresden</span>
            <span>•</span>
            <span>DFG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
