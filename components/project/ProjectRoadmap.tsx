import { projectRoadmap } from '@/data/project';

export default function ProjectRoadmap() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projectRoadmap.map((period, index) => (
        <article key={period.year} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <span className="absolute inset-x-0 top-0 h-1 bg-academic-blue" aria-hidden="true" />
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-academic-blue">{period.year}</p>
          <h3 className="mb-5 text-heading-sm text-academic-navy">{period.focus}</h3>
          <ul className="space-y-3 text-sm text-academic-gray">
            {period.milestones.map((milestone) => (
              <li key={milestone} className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-academic-blue" aria-hidden="true" />{milestone}</li>
            ))}
          </ul>
          <span className="absolute bottom-3 right-4 text-5xl font-bold text-slate-100" aria-hidden="true">{index + 1}</span>
        </article>
      ))}
    </div>
  );
}
