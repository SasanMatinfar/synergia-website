export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  kind: 'research-theme' | 'enabling-technology';
  relatedWorkPackages?: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    id: 'ai-surgery',
    title: 'AI-Assisted Surgical Guidance',
    description:
      'Investigating how computational analysis, tracking, and anatomical awareness can support surgical guidance while respecting clinicians’ limited visual attention.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP1', 'WP6'],
  },
  {
    id: 'surgical-sonification',
    title: 'Computational Sonification',
    description:
      'Studying how surgical and model-derived information can be translated into structured auditory signals that complement conventional visual displays.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP2', 'WP3'],
  },
  {
    id: 'soundscape-modeling',
    title: 'Operating Room Soundscapes',
    description:
      'Modeling realistic spatial operating-room sound environments to examine auditory scenes, information demands, and interference under ecologically meaningful conditions.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP2'],
  },
  {
    id: 'multisensory-perception',
    title: 'Human Multisensory Perception',
    description:
      'Examining how visual and auditory information influence detection, discrimination, navigation, cognitive load, and fatigue in controlled and active tasks.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP4', 'WP5'],
  },
  {
    id: 'expertise-training',
    title: 'Expertise and Training',
    description:
      'Investigating how experience, learning, and training shape the use of multisensory guidance and performance in demanding surgical tasks.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP5'],
  },
  {
    id: 'clinical-translation',
    title: 'Clinical Translation',
    description:
      'Evaluating optimized multisensory guidance in realistic ophthalmic experiments, with attention to clinical usability, performance, and translational potential.',
    kind: 'research-theme',
    relatedWorkPackages: ['WP6'],
  },
  {
    id: 'vibroacoustic-sensing',
    title: 'Vibroacoustic Interaction & Sensing',
    description:
      'Capturing and interpreting vibroacoustic signals generated during surgical interaction as a basis for experimental sensing and feedback methods.',
    kind: 'enabling-technology',
  },
  {
    id: 'medical-xr',
    title: 'Medical XR',
    description:
      'Creating controlled immersive environments for surgical simulation, interaction studies, and repeatable experimental evaluation.',
    kind: 'enabling-technology',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description:
      'Supporting analysis and context-aware guidance within experimental computer-assisted surgical workflows.',
    kind: 'enabling-technology',
  },
  {
    id: 'spatial-audio-xr',
    title: 'Spatial Audio',
    description:
      'Reproducing and designing spatially structured sound for operating-room simulation and perceptual experiments.',
    kind: 'enabling-technology',
  },
  {
    id: 'physics-based-modeling',
    title: 'Physics-based Modeling',
    description:
      'Connecting computational models of surgical interaction with interpretable auditory representations and experimental simulations.',
    kind: 'enabling-technology',
  },
];

export const getThemeById = (id: string): ResearchTheme | undefined =>
  researchThemes.find((theme) => theme.id === id);
