/**
 * Research themes and areas
 * These are the core research directions of the Synergia project
 */

export interface ResearchTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo' | 'pink' | 'cyan';
  icon: string; // emoji or icon identifier
  relatedWorkPackages?: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    id: 'ai-surgery',
    title: 'AI-Assisted Surgery',
    subtitle: 'Real-time surgical analysis and guidance',
    description:
      'Developing AI-assisted methods for real-time surgical scene analysis, instrument tracking, and anatomical awareness in ophthalmic and microsurgical workflows. The aim is to provide timely guidance without adding visual overload to the surgeon.',
    color: 'blue',
    icon: '🤖',
    relatedWorkPackages: ['WP1', 'WP2'],
  },
  {
    id: 'multisensory-perception',
    title: 'Human Multisensory Perception',
    subtitle: 'Understanding perception in complex environments',
    description:
      'Investigating how surgeons integrate visual, auditory, and tactile information during high-intensity procedures. The work examines perceptual thresholds, attentional demands, and cognitive workload to inform the design of effective multimodal feedback.',
    color: 'purple',
    icon: '👁️',
    relatedWorkPackages: ['WP2', 'WP3'],
  },
  {
    id: 'surgical-sonification',
    title: 'Surgical Sonification',
    subtitle: 'Auditory representation of surgical data',
    description:
      'Converting surgical and AI-derived information into meaningful auditory signals that support perception and decision-making during intervention. Sonification is designed to communicate state and proximity in a way that fits naturally into surgical workflow.',
    color: 'green',
    icon: '🔊',
    relatedWorkPackages: ['WP1', 'WP2', 'WP4'],
  },
  {
    id: 'vibroacoustic-sensing',
    title: 'Vibroacoustic Sensing',
    subtitle: 'Tactile feedback and sensory integration',
    description:
      'Designing vibroacoustic and tactile feedback mechanisms that communicate surgical information through non-visual channels. These systems aim to support awareness of instrument state, proximity, and alerts without increasing visual or auditory burden.',
    color: 'red',
    icon: '📳',
    relatedWorkPackages: ['WP3', 'WP4'],
  },
  {
    id: 'soundscape-modeling',
    title: 'OR Soundscape Modeling',
    subtitle: 'Acoustic environment design for surgery',
    description:
      'Modeling and optimizing the acoustic environment of operating rooms to improve information transfer and reduce interference. The work considers alarms, speech, and background noise as part of a broader surgical soundscape design problem.',
    color: 'yellow',
    icon: '🎛️',
    relatedWorkPackages: ['WP2', 'WP4'],
  },
  {
    id: 'spatial-audio-xr',
    title: 'Spatial Audio & XR',
    subtitle: 'Immersive 3D audio and extended reality',
    description:
      'Implementing immersive spatial audio and extended-reality environments for surgical visualization, training, and evaluation. The Ambisonics laboratory enables realistic OR soundscape simulation and the study of spatially structured feedback.',
    color: 'indigo',
    icon: '🎧',
    relatedWorkPackages: ['WP1', 'WP3', 'WP4'],
  },
  {
    id: 'human-ai-collaboration',
    title: 'Human-AI Collaboration',
    subtitle: 'Designing effective surgeon-AI interaction',
    description:
      'Exploring how AI systems and surgeons can collaborate effectively during intervention. The research focuses on interaction paradigms that preserve surgeon control while delivering timely, context-aware support.',
    color: 'pink',
    icon: '🤝',
    relatedWorkPackages: ['WP1', 'WP2', 'WP3'],
  },
  {
    id: 'clinical-translation',
    title: 'Clinical Translation',
    subtitle: 'From research to OR deployment',
    description:
      'Conducting clinical studies and validation experiments to ensure the research translates into real surgical practice. The work is guided by close collaboration with ophthalmologists and surgeons to evaluate relevance, usability, and feasibility.',
    color: 'cyan',
    icon: '🏥',
    relatedWorkPackages: ['WP2', 'WP3', 'WP4'],
  },
];

export const getThemeById = (id: string): ResearchTheme | undefined => {
  return researchThemes.find((theme) => theme.id === id);
};

export const getThemesByColor = (color: string): ResearchTheme[] => {
  return researchThemes.filter((theme) => theme.color === color);
};
