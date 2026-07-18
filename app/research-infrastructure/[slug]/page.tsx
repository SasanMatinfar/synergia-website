import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import AmbisonicsLaboratory from '@/components/infrastructure/AmbisonicsLaboratory';
import { getCollaboratorById } from '@/data/collaborators';
import { infrastructure, infrastructureOverview } from '@/data/infrastructure';

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return infrastructureOverview.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = infrastructureOverview.find((candidate) => candidate.slug === slug);
  return entry ? { title: entry.title, description: entry.description } : {};
}

export default async function InfrastructureDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const entry = infrastructureOverview.find((candidate) => candidate.slug === slug);
  if (!entry) notFound();

  if (entry.slug === 'sonification-ambisonics-laboratory') {
    return (
      <>
        <PageHero title={entry.title} />
        <AmbisonicsLaboratory showHeading={false} />
        <div className="section-container pt-0"><Link href="/research-infrastructure" className="font-semibold text-academic-blue">← Back to Infrastructure</Link></div>
      </>
    );
  }

  const item = infrastructure.find((candidate) => candidate.id === entry.itemId);
  if (!item) notFound();
  const collaborator = item.industrialCollaboration ? getCollaboratorById(item.industrialCollaboration.collaboratorId) : undefined;

  return (
    <>
      <PageHero title={entry.title} description={entry.description} />
      <section className="section-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <article>
            <p className="mb-5 text-lg font-semibold text-academic-blue">{item.shortDescription}</p>
            <p className="mb-8 leading-relaxed text-academic-gray">{item.fullDescription}</p>
            <h2 className="mb-5 text-heading-sm text-academic-navy">Research Capabilities</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {item.capabilities.map((capability) => <li key={capability} className="rounded-lg bg-academic-light px-4 py-3 text-sm text-academic-navy">{capability}</li>)}
            </ul>
          </article>
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-academic-blue">Infrastructure Location</p>
            <p className="font-medium text-academic-navy">{item.location}</p>
            {collaborator && item.industrialCollaboration && (
              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-academic-blue">Industrial Technology Partner</p>
                {collaborator.logo && <Image src={`/logos/${collaborator.logo}`} alt={`${collaborator.name} logo`} width={160} height={64} className="mb-4 max-h-14 w-auto max-w-40 object-contain" />}
                <a href={collaborator.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-academic-navy hover:text-academic-blue">{collaborator.name}</a>
                <p className="mt-3 text-sm leading-relaxed text-academic-gray">{item.industrialCollaboration.description}</p>
              </div>
            )}
          </aside>
        </div>
        <Link href="/research-infrastructure" className="mt-12 inline-block font-semibold text-academic-blue">← Back to Infrastructure</Link>
      </section>
    </>
  );
}
