/** Publications and preprints verified against their linked records. */

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
    id: 'reyes-vargas-2026-ioct-sonification',
    title: 'Physics-Based iOCT Sonification for Real-time Interaction Awareness in Subretinal Injection',
    authors: [
      'Luis D. Reyes Vargas',
      'Veronica Ruozzi',
      'Andrea K. M. Ross',
      'Shervin Dehghani',
      'Michael Sommersperger',
      'Koorosh Faridpooya',
      'Mohammad Ali Nasseri',
      'Merle Fairhurst',
      'Nassir Navab',
      'Sasan Matinfar',
    ],
    venue: 'arXiv preprint arXiv:2605.14500',
    year: 2026,
    doi: '10.48550/arXiv.2605.14500',
    pdfUrl: 'https://arxiv.org/pdf/2605.14500',
    topicTags: ['Sonification', 'Human–Computer Interaction', 'Image and Video Processing'],
    abstract:
      'This preprint presents a real-time, physics-inspired sonification framework that maps segmented intraoperative OCT anatomy, needle motion, and retinal deformation to auditory feedback for subretinal injection guidance. A controlled study with 34 participants and an evaluation by four experts examined event identification and clinical relevance.',
    keywords: ['iOCT', 'sonification', 'subretinal injection', 'surgical guidance', 'auditory feedback'],
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
