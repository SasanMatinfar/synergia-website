export interface WorkPackage {
  number: `WP${number}`;
  title: string;
  objectiveTitle: string;
  flowTitle: string;
  phase: string;
  objective: string;
}

export const workPackages: WorkPackage[] = [
  {
    number: 'WP1',
    title: 'Experimental Platforms for Multisensory Research',
    objectiveTitle: 'Establish Experimental Platforms for Multisensory Research',
    flowTitle: 'Experimental Platforms',
    phase: 'Foundation',
    objective: 'Establish realistic experimental environments that enable the systematic investigation of multisensory perception and AI-assisted guidance in complex surgical tasks.',
  },
  {
    number: 'WP2',
    title: 'Operating Room Soundscapes',
    objectiveTitle: 'Characterize Operating Room Soundscapes',
    flowTitle: 'OR Soundscapes',
    phase: 'Technology development',
    objective: 'Model and analyze realistic auditory operating-room environments to establish ecologically valid foundations for multisensory interaction research.',
  },
  {
    number: 'WP3',
    title: 'Intelligent Sonification',
    objectiveTitle: 'Advance Intelligent Sonification',
    flowTitle: 'Intelligent Sonification',
    phase: 'Technology development',
    objective: 'Investigate perceptually meaningful sonification strategies that communicate clinically relevant information beyond conventional visual interfaces.',
  },
  {
    number: 'WP4',
    title: 'Multisensory Human Performance',
    objectiveTitle: 'Understand Multisensory Human Performance',
    flowTitle: 'Human Evaluation',
    phase: 'Human evaluation',
    objective: 'Investigate how audiovisual information influences perception, spatial navigation, cognitive load, and human performance in high-intensity environments.',
  },
  {
    number: 'WP5',
    title: 'Expertise and Learning',
    objectiveTitle: 'Understand Expertise and Learning',
    flowTitle: 'Expertise & Training',
    phase: 'Human evaluation',
    objective: 'Determine how expertise and training shape multisensory perception, interaction, and performance during complex surgical tasks.',
  },
  {
    number: 'WP6',
    title: 'Clinical Translation',
    objectiveTitle: 'Validate Clinical Translation',
    flowTitle: 'Clinical Validation',
    phase: 'Clinical validation',
    objective: 'Evaluate optimized multisensory guidance in realistic ophthalmic surgical settings to establish its effectiveness and translational potential.',
  },
];

export const projectRoadmap = [
  {
    year: 'Year 1',
    focus: 'Build and model',
    milestones: ['Experimental Platforms', 'OR Soundscapes', 'Sonification Framework'],
  },
  {
    year: 'Year 2',
    focus: 'Study and optimize',
    milestones: ['Perception Studies', 'Navigation Studies', 'Optimization'],
  },
  {
    year: 'Year 3',
    focus: 'Translate and release',
    milestones: ['Expertise', 'Training', 'Clinical Validation', 'Open-source Software'],
  },
] as const;
