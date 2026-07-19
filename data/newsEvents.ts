export type NewsEventType =
  | 'Event'
  | 'News'
  | 'Demonstration'
  | 'Conference'
  | 'Announcement'
  | 'Media';

export type NewsEventGalleryItem = {
  image: string;
  imageAlt: string;
  caption?: string;
};

export type NewsEvent = {
  slug: string;
  title: string;
  date?: string;
  type: NewsEventType;
  excerpt: string;
  summary: string;
  image: string;
  imageAlt: string;
  location?: string;
  featured?: boolean;
  published: boolean;
  gallery?: NewsEventGalleryItem[];
  body: string[];
  externalLink?: string;
};

export const newsEvents: NewsEvent[] = [
  {
    slug: 'synergia-project-kickoff',
    title: 'Synergia Project Kickoff Meeting',
    type: 'Event',
    excerpt: 'The project kickoff established a shared framework for Synergia’s interdisciplinary research programme.',
    summary:
      'The Synergia project kickoff brought the participating research perspectives together around the programme’s scientific objectives, experimental workflow, and collaborative structure.',
    image: '/images/news-events/news-events-abstract.png',
    imageAlt: 'Abstract graphic representing connected research news, announcements, and scientific events',
    featured: true,
    published: true,
    gallery: [],
    body: [
      'The kickoff meeting established a shared scientific framework for investigating multisensory interaction in computer-assisted medicine.',
      'Discussions connected the project’s work on artificial intelligence, sonification, spatial audio, human perception, immersive experimentation, and clinical translation. The meeting also aligned the experimental progression from controlled perception studies through active navigation to realistic ophthalmic validation.',
    ],
  },
];

export const publishedNewsEvents = newsEvents
  .filter((entry) => entry.published)
  .sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  });

export function formatNewsEventDate(date?: string) {
  if (!date) return null;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
