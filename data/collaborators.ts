/**
 * Institutional collaborators and partners
 */

export interface Collaborator {
  id: string;
  name: string;
  abbreviation: string;
  type: 'university' | 'institution' | 'hospital' | 'research_center' | 'clinical';
  website: string;
  logo?: string; // Path to logo in public/logos/
  description: string;
  primaryRole: string;
  affiliatedMembers?: string[];
}

export const collaborators: Collaborator[] = [
  {
    id: 'tum-camp',
    name: 'Computer Aided Medical Procedures',
    abbreviation: 'CAMP',
    type: 'research_center',
    website: 'https://camp.in.tum.de',
    logo: 'optimized/camp-logo.png',
    description:
      'TODO: Add CAMP description. Leading lab in surgical imaging and AI-assisted interventions at TUM.',
    primaryRole: 'Project coordination, AI-assisted surgery, surgical imaging',
    affiliatedMembers: ['Nassir Navab', 'Merle Fairhurst', 'Sasan Matinfar'],
  },
  {
    id: 'tum-ophthalmology',
    name: 'Department of Ophthalmology',
    abbreviation: 'TUM Ophthalmology',
    type: 'hospital',
    website: 'https://www.med.tum.de/en/eye-clinic',
    logo: 'tum-clinic-logo.jpg',
    description:
      'TODO: Add TUM Ophthalmology description. Clinical partner providing surgical expertise and testing environments.',
    primaryRole: 'Clinical requirements, surgical testing, ophthalmic expertise',
    affiliatedMembers: ['M. Ali Nasseri'],
  },
  {
    id: 'ceti-dresden',
    name: 'Centre for Tactile Internet with Human-in-the-Loop',
    abbreviation: 'CeTI',
    type: 'research_center',
    website: 'https://www.tu-dresden.de/ing/forschung/ceti',
    logo: 'optimized/ceti-logo.png',
    description:
      'TODO: Add CeTI description. World-leading center for multisensory perception and human-machine interfaces.',
    primaryRole: 'Multisensory perception, auditory research, haptic systems',
    affiliatedMembers: ['TODO: CeTI lead'],
  },
  {
    id: 'tum-maps',
    name: 'Medical and Molecular Imaging Unit',
    abbreviation: 'MAPS',
    type: 'research_center',
    website: 'https://www.med.tum.de/en/klinik-fuer-radiologie',
    logo: 'optimized/maps-logo.png',
    description:
      'TODO: Add MAPS description. Expertise in medical imaging, surgical visualization, and surgical guidance.',
    primaryRole: 'Clinical integration, surgical visualization, imaging infrastructure',
    affiliatedMembers: ['TODO: MAPS lead'],
  },
  {
    id: 'tu-dresden',
    name: 'Technische Universität Dresden',
    abbreviation: 'TU Dresden',
    type: 'university',
    website: 'https://www.tu-dresden.de',
    logo: 'optimized/tu-dresden-logo.png',
    description:
      'TODO: Add TU Dresden description. Partner through CeTI for auditory perception and multisensory research.',
    primaryRole: 'Auditory perception research, sonification design',
  },
  {
    id: 'lmu-ophthalmology',
    name: 'Ludwig Maximilian University Ophthalmology',
    abbreviation: 'LMU Ophthalmology',
    type: 'hospital',
    website: 'https://www.med.uni-muenchen.de/en/index.html',
    logo: 'lmu_logo.jpg',
    description:
      'TODO: Add LMU Ophthalmology description. Clinical collaborator for surgical testing and validation.',
    primaryRole: 'Clinical validation, ophthalmic surgical testing',
  },
  {
    id: 'dfg',
    name: 'Deutsche Forschungsgemeinschaft',
    abbreviation: 'DFG',
    type: 'institution',
    website: 'https://www.dfg.de',
    logo: 'optimized/dfg-logo.png',
    description: 'German Research Foundation funding the Synergia project.',
    primaryRole: 'Project funding (Synergia program)',
  },
];

export const getCollaboratorsByType = (type: Collaborator['type']): Collaborator[] => {
  return collaborators.filter((col) => col.type === type);
};

export const getCollaboratorById = (id: string): Collaborator | undefined => {
  return collaborators.find((col) => col.id === id);
};
