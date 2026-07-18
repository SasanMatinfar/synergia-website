import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getCollaboratorById } from '@/data/collaborators';
import { infrastructureOverview, type InfrastructureOverview } from '@/data/infrastructure';

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Research laboratories and experimental platforms supporting Synergia.',
};

function InfrastructureCard({ entry, featured = false }: { entry: InfrastructureOverview; featured?: boolean }) {
  const partner = entry.partnerId ? getCollaboratorById(entry.partnerId) : undefined;

  return (
    <article id={entry.id} className={`scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${featured ? 'lg:grid lg:grid-cols-[1.3fr_0.7fr]' : 'flex h-full flex-col'}`}>
      <div className={`relative overflow-hidden bg-gradient-to-br from-academic-navy via-academic-blue to-slate-500 ${featured ? 'h-72 sm:h-80 lg:h-auto lg:min-h-[28rem]' : 'h-52'}`}>
        {entry.image ? (
          <Image src={entry.image} alt={entry.imageAlt ?? `${entry.title} research environment`} fill sizes={featured ? '(min-width: 1024px) 65vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'} className="object-cover object-center" />
        ) : (
          <div className="absolute inset-0 flex items-end p-7" aria-hidden="true">
            <span className="text-3xl font-semibold tracking-tight text-white/90">{entry.visualLabel}</span>
            <span className="absolute right-8 top-7 h-24 w-24 rounded-full border border-white/20" />
            <span className="absolute right-20 top-20 h-32 w-32 rounded-full border border-white/10" />
          </div>
        )}
        {partner?.logo && (
          <div className="absolute bottom-4 right-4 flex h-14 w-36 items-center justify-center rounded-lg bg-white/95 px-3 py-2 shadow-md" aria-label={`Technology contributed through collaboration with ${partner.name}`}>
            <Image src={`/logos/${partner.logo}`} alt={`${partner.name} logo`} width={128} height={48} className="max-h-10 w-auto max-w-28 object-contain" />
          </div>
        )}
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'p-8 lg:justify-center lg:p-10' : 'p-6'}`}>
        <h2 className={`mb-3 text-academic-navy ${featured ? 'text-heading-md' : 'text-heading-sm'}`}>{entry.title}</h2>
        <p className="mb-5 text-sm leading-relaxed text-academic-gray">{entry.description}</p>
        <ul className={`mb-7 grid gap-2 text-sm text-academic-navy ${featured ? 'sm:grid-cols-2' : ''}`}>
          {entry.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="text-academic-blue" aria-hidden="true">•</span>{highlight}</li>)}
        </ul>
        <div className="mt-auto">
          <Link href={`/research-infrastructure/${entry.slug}`} className="btn-primary" aria-label={`Explore ${entry.title}`}>Explore Laboratory</Link>
        </div>
      </div>
    </article>
  );
}

export default function ResearchInfrastructurePage() {
  const [flagship, ...supportingInfrastructure] = infrastructureOverview;

  return (
    <>
      <PageHero title="Infrastructure" description="Research laboratories and experimental platforms supporting sonification, immersive interaction, multimodal sensing, and clinical evaluation." />
      <section className="section-container">
        <div className="mb-8">
          <InfrastructureCard entry={flagship} featured />
        </div>
        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {supportingInfrastructure.map((entry) => <InfrastructureCard key={entry.id} entry={entry} />)}
        </div>
      </section>
    </>
  );
}
