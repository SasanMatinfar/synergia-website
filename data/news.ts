/**
 * News and updates
 * TODO: Replace with real news items, photos, and dates
 */

export interface NewsItem {
  id: string;
  title: string;
  date: Date;
  category: 'announcement' | 'event' | 'publication' | 'milestone' | 'collaboration';
  summary: string;
  content?: string;
  image?: string;
  author?: string;
  tags?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-kickoff',
    title: 'TODO: Synergia Project Officially Launched',
    date: new Date('2024-01-15'),
    category: 'milestone',
    summary:
      'TODO: Kickoff meeting held. Add information about project start, participants, and initial objectives.',
    content: `TODO: Full news article about project kickoff.

Include:
- Project start date and duration
- Funding amount
- Key participants from all institutions
- Project vision summary
- Links to press releases`,
    image: 'placeholder-kickoff.jpg',
    author: 'TODO: Project Team',
    tags: ['project', 'dfg', 'kickoff'],
  },
  {
    id: 'news-ambisonics-setup',
    title: 'TODO: State-of-the-Art Ambisonics Laboratory Now Operational',
    date: new Date('2024-02-20'),
    category: 'milestone',
    summary:
      'TODO: Ambisonics lab completion. Add details about the 16-speaker system, capabilities, and first research directions.',
    content: `TODO: Full article about Ambisonics lab setup.

Include:
- Lab location and specifications
- Speaker array details
- Acoustic design principles
- Initial research applications
- Photos or technical specifications`,
    image: 'placeholder-ambisonics-lab.jpg',
    author: 'TODO: Sasan Matinfar',
    tags: ['infrastructure', 'ambisonics', 'spatial-audio'],
  },
  {
    id: 'news-workshop',
    title: 'TODO: International Workshop on Surgical Sonification',
    date: new Date('2024-03-10'),
    category: 'event',
    summary:
      'TODO: Workshop announcement. Add event details, speakers, and registration information.',
    content: `TODO: Full event announcement.

Include:
- Event date, time, location
- Invited speakers
- Workshop topics and schedule
- Registration link
- Contact information`,
    image: 'placeholder-workshop.jpg',
    tags: ['event', 'sonification', 'workshop'],
  },
  {
    id: 'news-publication',
    title: 'TODO: New Publication on AI-Assisted Surgical Guidance',
    date: new Date('2024-03-25'),
    category: 'publication',
    summary:
      'TODO: Publication announcement. Add journal/conference name, authors, and brief description.',
    content: `TODO: Publication announcement with:
- Full citation
- DOI link
- Link to PDF if open access
- Brief research summary
- Related work package`,
    author: 'TODO: Research Team',
    tags: ['publication', 'ai-surgery', 'peer-reviewed'],
  },
  {
    id: 'news-collaboration',
    title: 'TODO: New Clinical Partnership Announced',
    date: new Date('2024-02-05'),
    category: 'collaboration',
    summary:
      'TODO: Collaboration news. Add details about new partnering institution or researcher group.',
    content: `TODO: Collaboration announcement including:
- Partner institution/researcher
- Research focus areas
- Expected outcomes
- Timeline`,
    tags: ['collaboration', 'clinical', 'partnership'],
  },
  {
    id: 'news-demo',
    title: 'TODO: First Ambisonics Lab Demonstration Session',
    date: new Date('2024-01-30'),
    category: 'event',
    summary:
      'TODO: Demo event description. Add information about participants, sonification demos, and feedback.',
    content: `TODO: Full report on demonstration session.

Include:
- Participants and institutions
- Demonstrations presented
- Feedback and discussions
- Photos from the event
- Next steps`,
    image: 'placeholder-demo.jpg',
    tags: ['event', 'ambisonics', 'demonstration'],
  },
];

export const getNewsByCategory = (
  category: NewsItem['category']
): NewsItem[] => {
  return [...newsItems]
    .filter((item) => item.category === category)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getLatestNews = (count: number = 3): NewsItem[] => {
  return [...newsItems]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, count);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find((item) => item.id === id);
};

export const getNewsByTag = (tag: string): NewsItem[] => {
  return newsItems.filter((item) => item.tags?.includes(tag)) || [];
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  newsItems.forEach((item) => {
    item.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
