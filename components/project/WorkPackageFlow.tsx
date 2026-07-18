import { workPackages } from '@/data/project';

export default function WorkPackageFlow() {
  return (
    <ol className="mx-auto max-w-4xl">
      {workPackages.map((workPackage, index) => (
        <li key={workPackage.number} className="relative pb-8 last:pb-0">
          {index < workPackages.length - 1 && <span className="absolute left-6 top-12 h-[calc(100%-2rem)] w-px bg-blue-200" aria-hidden="true" />}
          <article className="relative grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[3rem_1fr_auto] sm:items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-academic-navy text-sm font-bold text-white">{workPackage.number}</span>
            <h3 className="text-heading-sm text-academic-navy">{workPackage.flowTitle}</h3>
            <span className="w-fit rounded-full bg-academic-light px-3 py-1 text-xs font-semibold text-academic-blue">{workPackage.phase}</span>
          </article>
        </li>
      ))}
    </ol>
  );
}
