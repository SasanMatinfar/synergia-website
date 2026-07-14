/**
 * Publications data structure
 * TODO: Replace with real publications, DOIs, and links
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  projectTags?: string[]; // e.g., ['WP1', 'AI-Surgery']
  topicTags?: string[]; // e.g., ['sonification', 'surgical-AI']
  abstract?: string;
  keywords?: string[];
}

export const publications: Publication[] = [
  {
    id: 'pub-2024-sonification',
    title: 'TODO: Surgical Sonification in High-Intensity Environments: Design Principles and Human Perception',
    authors: [
      'TODO: Sasan Matinfar',
      'TODO: Co-author 1',
      'TODO: Co-author 2',
      'TODO: Co-author 3',
    ],
    venue: 'TODO: Conference/Journal Name',
    year: 2024,
    doi: 'TODO: 10.xxxx/xxxxx',
    pdfUrl: 'TODO: link-to-pdf',
    projectTags: ['WP2', 'WP4'],
    topicTags: ['sonification', 'surgical-feedback', 'multisensory'],
    abstract:
      'TODO: Add abstract describing surgical sonification research from Synergia project.',
    keywords: ['sonification', 'surgery', 'human perception', 'auditory display'],
  },
  {
    id: 'pub-2024-ai-surgery',
    title: 'TODO: Deep Learning for Real-Time Surgical Scene Understanding in Ophthalmic Surgery',
    authors: [
      'TODO: Author 1',
      'TODO: Author 2',
      'TODO: Nassir Navab',
      'TODO: Author 4',
    ],
    venue: 'TODO: Conference/Journal Name',
    year: 2024,
    doi: 'TODO: 10.xxxx/xxxxx',
    projectTags: ['WP1', 'WP2'],
    topicTags: ['AI', 'surgical-imaging', 'deep-learning'],
    abstract: 'TODO: Add abstract describing AI research for surgical scene analysis.',
  },
  {
    id: 'pub-2024-multisensory',
    title: 'TODO: Multisensory Integration in Surgical Guidance: A Systematic Review',
    authors: ['TODO: Author 1', 'TODO: Merle Fairhurst', 'TODO: Author 3'],
    venue: 'TODO: Medical Journal',
    year: 2024,
    doi: 'TODO: 10.xxxx/xxxxx',
    projectTags: ['WP2', 'WP3'],
    topicTags: ['multisensory', 'surgical-guidance'],
    abstract: 'TODO: Add abstract about multisensory feedback in surgery.',
  },
  {
    id: 'pub-2023-ambisonics',
    title: 'TODO: Immersive Spatial Audio for Surgical Training: Design and Evaluation',
    authors: ['TODO: Sasan Matinfar', 'TODO: Co-author 1', 'TODO: Co-author 2'],
    venue: 'TODO: Conference Name',
    year: 2023,
    doi: 'TODO: 10.xxxx/xxxxx',
    projectTags: ['WP4'],
    topicTags: ['spatial-audio', 'ambisonics', 'training'],
    abstract: 'TODO: Add abstract about Ambisonics lab and surgical training research.',
  },
  {
    id: 'pub-2023-perception',
    title: 'TODO: Surgeon Workload and Information Processing in High-Intensity Environments',
    authors: ['TODO: Author 1', 'TODO: Author 2'],
    venue: 'TODO: Workshop Name',
    year: 2023,
    doi: 'TODO: 10.xxxx/xxxxx',
    projectTags: ['WP2', 'WP3'],
    topicTags: ['human-perception', 'cognitive-workload'],
    abstract: 'TODO: Add abstract about human factors in surgery.',
  },
];

export const getPublicationsByYear = (year: number): Publication[] => {
  return publications.filter((pub) => pub.year === year).sort((a, b) => b.year - a.year);
};

export const getAllPublicationsByYear = (): { [year: number]: Publication[] } => {
  const grouped: { [year: number]: Publication[] } = {};
  publications.forEach((pub) => {
    if (!grouped[pub.year]) {
      grouped[pub.year] = [];
    }
    grouped[pub.year].push(pub);
  });
  return grouped;
};

export const getPublicationsByTag = (tag: string): Publication[] => {
  return publications.filter(
    (pub) =>
      pub.projectTags?.includes(tag) ||
      pub.topicTags?.includes(tag)
  );
};

export const getLatestPublications = (count: number = 5): Publication[] => {
  return [...publications]
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return 0;
    })
    .slice(0, count);
};
