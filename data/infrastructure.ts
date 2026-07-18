/**
 * Research infrastructure and facilities
 */

export interface Infrastructure {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  location: string;
  image?: string;
  featured?: boolean;
  industrialCollaboration?: {
    collaboratorId: 'syntheseyes' | 'surag-medical';
    description: string;
  };
}

export interface InfrastructureOverview {
  id: string;
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  itemId: string;
  image?: string;
  imageAlt?: string;
  visualLabel: string;
  partnerId?: 'syntheseyes' | 'surag-medical';
}

export const infrastructureOverview: InfrastructureOverview[] = [
  {
    id: 'ambisonics-lab',
    slug: 'sonification-ambisonics-laboratory',
    title: 'Sonification and Ambisonics Laboratory',
    description: 'A full-sphere environment for surgical sonification, spatial auditory guidance, and controlled perception research.',
    highlights: ['Third-order Ambisonics', '16-channel full-sphere array', 'Real-time sonification', 'Perceptual audio evaluation'],
    itemId: 'ambisonics-lab',
    image: '/images/infrastructure/sonification-ambisonics-laboratory.jpg',
    imageAlt: 'Full-sphere loudspeaker array in the Sonification and Ambisonics Laboratory',
    visualLabel: 'Spatial Audio',
  },
  {
    id: 'xr',
    slug: 'xr-immersive-environments',
    title: 'XR and Immersive Environments',
    description: 'Interactive visual and auditory environments for multimodal surgical simulation and interface evaluation.',
    highlights: ['Medical XR', 'Surgical simulation', 'Interactive guidance', 'Spatial audio integration'],
    itemId: 'xr-systems',
    image: '/images/infrastructure/syntheseyes-xr-simulation.png',
    imageAlt: 'SynthesEyes retinal digital-twin simulation visualization',
    visualLabel: 'XR',
    partnerId: 'syntheseyes',
  },
  {
    id: 'vibroacoustic',
    slug: 'vibroacoustic-sensing',
    title: 'Vibroacoustic Sensing',
    description: 'Experimental sensing platforms for investigating interaction-generated signals and intelligent surgical guidance.',
    highlights: ['Signal capture', 'Sensor integration', 'Vibration analysis', 'Event characterization'],
    itemId: 'vibroacoustic-hardware',
    image: '/images/infrastructure/surag-vibroacoustic-sensing.png',
    imageAlt: 'SURAG vibroacoustic sensor attached to a surgical instrument',
    visualLabel: 'Vibroacoustics',
    partnerId: 'surag-medical',
  },
  {
    id: 'clinical-setups',
    slug: 'surgical-clinical-recording-setups',
    title: 'Surgical and Clinical Recording Setups',
    description: 'Clinically informed environments for ophthalmic simulation, tracking, performance measurement, and validation.',
    highlights: ['Ophthalmic simulation', 'Instrument tracking', 'Performance measurement', 'Clinical evaluation'],
    itemId: 'ophthalmic-simulation',
    image: '/images/infrastructure/clinical-recording-setup.png',
    imageAlt: 'Stereo microphones and multichannel audio recorder used for clinical research recordings',
    visualLabel: 'Clinical Research',
  },
];

export const infrastructure: Infrastructure[] = [
  {
    id: 'ambisonics-lab',
    name: 'Ambisonics Laboratory',
    shortDescription: 'Integrated environment for sonification, spatial audio, and auditory perception research',
    fullDescription:
      'The laboratory combines a 16-loudspeaker, third-order Ambisonics array with real-time sonification and spatial-audio software. It supports controlled reproduction of operating-room soundscapes, binaural and loudspeaker-based rendering, computational auditory-display design, and perceptual evaluation of multisensory interaction.',
    capabilities: [
      'Third-order Ambisonics loudspeaker array (16 channels)',
      'Spatial audio and binaural rendering',
      'Real-time sonification',
      'OR soundscape reproduction',
      'Perceptual audio evaluation',
      'Immersive auditory interaction',
      'Computational auditory displays',
      'Audio recording and analysis',
    ],
    location: 'TUM CAMP',
    image: 'placeholder-ambisonics-lab.jpg',
    featured: true,
  },
  {
    id: 'ophthalmic-simulation',
    name: 'Ophthalmic Surgery Simulator',
    shortDescription: 'High-fidelity surgical training and research platform',
    fullDescription:
      'Advanced simulator for ophthalmologic procedures (cataract surgery, vitreoretinal procedures). Provides realistic visual feedback, instrument tracking, and integration points for testing AI analysis algorithms and sonification feedback.',
    capabilities: [
      'Cataract surgery simulation',
      'Vitreoretinal procedure training',
      'Instrument position tracking',
      'Haptic feedback integration',
      'AI algorithm testing',
      'Performance metrics collection',
      'Multi-modal feedback integration',
    ],
    location: 'TUM MAPS / TUM Ophthalmology',
    image: 'placeholder-ophthalmic-sim.jpg',
    featured: true,
  },
  {
    id: 'xr-systems',
    name: 'Mixed Reality & XR Systems',
    shortDescription: 'Augmented and virtual reality surgical visualization',
    fullDescription:
      'Integrated AR/VR systems for surgical visualization and training. Combines visual display with spatial audio via Ambisonics for immersive surgical environments. Used for developing and testing multimodal surgical interfaces.',
    capabilities: [
      'AR surgical overlays',
      'VR surgical training',
      'Spatial audio integration',
      '3D anatomical visualization',
      'Real-time image guidance',
      'Tracking and registration',
      'Haptic integration',
    ],
    location: 'TUM CAMP / TUM MAPS',
    image: 'placeholder-xr-systems.jpg',
    featured: false,
    industrialCollaboration: {
      collaboratorId: 'syntheseyes',
      description: 'The project benefits from SynthesEyes’ ophthalmic surgical simulation technology, which provides realistic virtual environments for developing and evaluating multisensory guidance methods.',
    },
  },
  {
    id: 'vibroacoustic-hardware',
    name: 'Vibroacoustic Sensing Hardware',
    shortDescription: 'Sensors and systems for capturing interaction-generated vibrations',
    fullDescription:
      'Experimental vibroacoustic sensing systems capture structural vibrations and interaction signals for analysis in surgical workflows. The platform supports studies of how these signals can complement visual and auditory information.',
    capabilities: [
      'Vibroacoustic signal capture',
      'Vibration analysis',
      'Sensor integration',
      'Interaction-event characterization',
      'Performance characterization',
    ],
    location: 'TUM CAMP',
    image: 'placeholder-vibroacoustic.jpg',
    featured: false,
    industrialCollaboration: {
      collaboratorId: 'surag-medical',
      description: 'Collaboration with SURAG Medical contributes vibroacoustic sensing hardware, technical expertise, and knowledge exchange for research into multimodal surgical sensing and intelligent guidance.',
    },
  },
];

export const ambisonicsSpecifications = [
  ['Ambisonics order', 'Third order'],
  ['Loudspeaker array', '16 × Genelec 8030C'],
  ['Spatial coverage', 'Full sphere'],
  ['Sweet spot', 'Approximately 1 m diameter'],
  ['Listening position', 'Fixed central position, seated or standing'],
  ['Rendering framework', 'Max/MSP with IRCAM SPAT5'],
  ['Audio interface', 'MOTU 16A'],
] as const;

export const ambisonicsResearchCapabilities = [
  'Real-time surgical sonification',
  'Spatial auditory guidance',
  'Operating-room soundscape reproduction',
  'Perceptual evaluation of auditory displays',
  'Multisensory XR experiments',
  'Binaural and loudspeaker-based rendering',
  'Studies of localization, targeting, and context awareness',
] as const;

export const ambisonicsTechnicalImplementation = [
  '16 independently driven analog output channels',
  'Balanced XLR signal paths',
  'MOTU 16A interface',
  'Max/MSP implementation',
  'IRCAM SPAT5 spatial rendering',
  'Custom adaptable aluminium frame',
  'Four lower, eight middle, and four upper loudspeakers',
  'Approximate 45-degree inclination of upper and lower loudspeaker layers',
  'Fixed central listening position',
  'Geometry specified using three-dimensional loudspeaker coordinates',
] as const;

export const getFeaturedInfrastructure = (): Infrastructure[] => {
  return infrastructure.filter((item) => item.featured);
};

export const getInfrastructureById = (id: string): Infrastructure | undefined => {
  return infrastructure.find((item) => item.id === id);
};
