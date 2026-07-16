import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PlaceholderNotice from '@/components/PlaceholderNotice';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Project videos, scientific demonstrations, events, photographs, press, and news from Synergia.',
};

const sections = [
  ['videos', 'Project Videos', 'Interviews, project overviews, and documentary material.'],
  ['demonstrations', 'Scientific Demonstrations', 'Recorded prototypes, experimental systems, and research demonstrations.'],
  ['audio', 'Sonification and Audio Examples', 'Curated auditory examples with descriptions, listening guidance, and accessibility alternatives.'],
  ['events', 'Workshops and Events', 'Kickoff meetings, workshops, laboratory visits, and consortium events.'],
  ['conferences', 'Conference Presentations', 'Talks, posters, demonstrations, and other scientific presentations.'],
  ['photographs', 'Laboratory and Experiment Photographs', 'Documentary photography of facilities, experimental setups, and project activity.'],
  ['press', 'Press and Outreach', 'Verified press coverage, public engagement, and institutional communication.'],
];

export default function MediaPage() {
  return (
    <>
      <PageHero title="Media" description="A structured visual and audiovisual record of the project’s scientific activity, experimental environments, events, and public engagement." />
      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map(([id, title, description]) => (
            <article id={id} key={id} className="scroll-mt-28 rounded-lg border border-slate-200 bg-slate-50 p-7">
              <h2 className="mb-3 text-heading-sm text-academic-navy">{title}</h2>
              <p className="mb-5 text-academic-gray">{description}</p>
              <PlaceholderNotice>No verified media assets or entries have been supplied for this category.</PlaceholderNotice>
            </article>
          ))}
        </div>
      </section>
      <section id="kickoff" className="scroll-mt-28 bg-academic-light">
        <div className="section-container">
          <h2 className="mb-4 text-academic-navy">Kickoff Meeting</h2>
          <p className="mb-7 max-w-3xl text-lg text-academic-gray">The kickoff meeting will be represented as an event record capable of containing an overview, date, venue, participants, programme, photograph collection, and multiple videos.</p>
          <PlaceholderNotice>The previous kickoff entry contained a placeholder date and unverified text. Verified event information and media are required.</PlaceholderNotice>
        </div>
      </section>
      <section id="news" className="section-container scroll-mt-28">
        <h2 className="mb-4 text-academic-navy">News Archive</h2>
        <p className="mb-7 max-w-3xl text-lg text-academic-gray">Future entries can be classified as project updates, events, publications, milestones, collaborations, press, or outreach.</p>
        <PlaceholderNotice>All previous news records were explicitly marked as placeholders and have not been republished as factual project news.</PlaceholderNotice>
      </section>
    </>
  );
}
