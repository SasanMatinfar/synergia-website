/** Verified consortium institutions and collaborating partners. */

export interface Collaborator {
  id: string;
  name: string;
  abbreviation: string;
  type: 'university' | 'hospital' | 'research_center' | 'clinical' | 'industry';
  website: string;
  logo?: string; // Path to logo in public/logos/
  description: string;
  primaryRole: string;
  affiliatedMembers?: string[];
  relationship: 'consortium' | 'collaborating_partner';
  parentId?: string;
  groupLabel?: string;
  partnerCategory?: string;
  sortOrder: number;
}

export const collaboratingPartnerCategories = [
  { id: 'clinical', title: 'Clinical Collaborators', sortOrder: 1 },
  { id: 'industry', title: 'Industry Partners', sortOrder: 2 },
] as const;

export const collaborators: Collaborator[] = [
  {
    id: 'tum',
    name: 'Technical University of Munich',
    abbreviation: 'TUM',
    type: 'university',
    website: 'https://www.tum.de/',
    logo: 'optimized/tum-logo.png',
    description: 'Lead university institution for the project’s medical computing, surgical technology, and clinical research activities.',
    primaryRole: 'Lead institution',
    relationship: 'consortium',
    sortOrder: 1,
  },
  {
    id: 'tum-camp',
    name: 'Chair for Computer Aided Medical Procedures (CAMP)',
    abbreviation: 'CAMP',
    type: 'research_center',
    website: 'https://camp.in.tum.de',
    logo: 'optimized/camp-logo.png',
    description: 'Project coordination, AI-assisted surgery, and multimodal medical computing.',
    primaryRole: 'Project coordination, AI-assisted surgery, surgical imaging',
    affiliatedMembers: ['Nassir Navab', 'Sasan Matinfar'],
    relationship: 'consortium',
    parentId: 'tum',
    sortOrder: 1,
  },
  {
    id: 'tum-ophthalmology',
    name: 'Department of Ophthalmology',
    abbreviation: 'TUM Ophthalmology',
    type: 'hospital',
    website: 'https://www.med.tum.de/en/eye-clinic',
    logo: 'tum-clinic-logo.jpg',
    description: 'Clinical collaboration supporting ophthalmic research and experimental validation.',
    primaryRole: 'Clinical partner',
    affiliatedMembers: ['M. Ali Nasseri'],
    relationship: 'consortium',
    parentId: 'tum',
    sortOrder: 3,
  },
  {
    id: 'ceti-dresden',
    name: 'Centre for Tactile Internet with Human-in-the-Loop (CeTI)',
    abbreviation: 'CeTI',
    type: 'research_center',
    website: 'https://www.tu-dresden.de/ing/forschung/ceti',
    logo: 'optimized/ceti-logo.png',
    description: 'Multisensory perception and human-centred interaction.',
    primaryRole: 'Multisensory perception and human-centred interaction',
    affiliatedMembers: ['Merle Fairhurst'],
    relationship: 'consortium',
    parentId: 'tu-dresden',
    sortOrder: 1,
  },
  {
    id: 'tum-maps',
    name: 'Medical Autonomy and Precision Surgery (MAPS)',
    abbreviation: 'MAPS',
    type: 'research_center',
    website: 'https://augenklinik.mri.tum.de/de/Forschung-und-Lehre/MAPS',
    logo: 'optimized/maps-logo.png',
    description: 'Surgical robotics, precision intervention, and clinical translation.',
    primaryRole: 'Surgical robotics, precision intervention, clinical translation',
    affiliatedMembers: ['M. Ali Nasseri'],
    relationship: 'consortium',
    parentId: 'tum',
    sortOrder: 2,
  },
  {
    id: 'tu-dresden',
    name: 'Technische Universität Dresden',
    abbreviation: 'TU Dresden',
    type: 'university',
    website: 'https://www.tu-dresden.de',
    logo: 'optimized/tu-dresden-logo.png',
    description: 'University partner contributing research in multisensory perception and human-centred interaction.',
    primaryRole: 'University partner',
    relationship: 'consortium',
    sortOrder: 2,
  },
  {
    id: 'social-affective-touch',
    name: 'Junior Professorship in Social Affective Touch',
    abbreviation: 'Social Affective Touch',
    type: 'research_center',
    website: 'https://tu-dresden.de/ing/elektrotechnik/ias/socialtouch',
    logo: 'social.png',
    description: 'Research in human perception, cognition, and multisensory interaction.',
    primaryRole: 'Human multisensory perception and cognition',
    affiliatedMembers: ['Merle Fairhurst'],
    relationship: 'consortium',
    parentId: 'tu-dresden',
    sortOrder: 2,
  },
  {
    id: 'lmu-ophthalmology',
    name: 'LMU University Hospital – Department of Ophthalmology',
    abbreviation: 'LMU Ophthalmology',
    type: 'hospital',
    website: 'https://www.lmu-klinikum.de/augenklinik',
    logo: 'lmu_logo.jpg',
    description: 'Clinical collaboration supporting surgeon engagement and ophthalmic validation.',
    primaryRole: 'Clinical collaboration',
    relationship: 'collaborating_partner',
    partnerCategory: 'clinical',
    sortOrder: 1,
  },
  {
    id: 'syntheseyes',
    name: 'SynthesEyes GmbH',
    abbreviation: 'SynthesEyes',
    type: 'industry',
    website: 'https://syntheseyes.com/',
    logo: 'syntheseyes.png',
    description: 'Industry collaboration supporting translation of multisensory medical technologies.',
    primaryRole: 'Industry collaboration',
    relationship: 'collaborating_partner',
    partnerCategory: 'industry',
    sortOrder: 1,
  },
  {
    id: 'surag-medical',
    name: 'SURAG Medical',
    abbreviation: 'SURAG',
    type: 'industry',
    website: 'https://www.surag-medical.com/',
    logo: 'surag.png',
    description: 'Technology collaboration supporting vibroacoustic sensing and surgical interaction research.',
    primaryRole: 'Technology collaboration',
    relationship: 'collaborating_partner',
    partnerCategory: 'industry',
    sortOrder: 2,
  },
];

export const getCollaboratorsByType = (type: Collaborator['type']): Collaborator[] => {
  return collaborators.filter((col) => col.type === type);
};

export const getCollaboratorById = (id: string): Collaborator | undefined => {
  return collaborators.find((col) => col.id === id);
};
