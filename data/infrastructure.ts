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
}

export const infrastructure: Infrastructure[] = [
  {
    id: 'ambisonics-lab',
    name: 'Ambisonics Laboratory',
    shortDescription: 'Immersive 3rd-order spatial audio environment',
    fullDescription:
      'State-of-the-art 3rd-order Ambisonics listening facility with 16 loudspeaker arrangement. This immersive environment enables creation of realistic OR soundscapes, testing of surgical sonification designs, and human perception studies in fully controlled acoustic conditions. Supports research in spatial audio, auditory display, and multisensory interaction.',
    capabilities: [
      '3rd-order Ambisonics (16 channel)',
      'Customizable speaker geometry',
      'Spatial audio rendering and simulation',
      'OR soundscape reproduction',
      'Human perception experiments',
      'Listening panel sessions',
      'Audio recording and analysis',
    ],
    location: 'TUM CAMP',
    image: 'placeholder-ambisonics-lab.jpg',
    featured: true,
  },
  {
    id: 'surgical-sonification-platform',
    name: 'Surgical Sonification Platform',
    shortDescription: 'Real-time sonification of surgical data streams',
    fullDescription:
      'Software and hardware platform for converting surgical scene analysis, AI output, and instrument tracking into real-time auditory signals. Integrates with surgical simulator environments and real OR recordings to develop and test sonification algorithms.',
    capabilities: [
      'Real-time audio synthesis',
      'Multi-channel audio output',
      'Integration with AI pipelines',
      'Instrument tracking sonification',
      'Proximity and confidence encoding',
      'Custom sonification design tools',
      'Evaluation frameworks',
    ],
    location: 'TUM CAMP',
    image: 'placeholder-sonification-platform.jpg',
    featured: true,
  },
  {
    id: 'or-soundscape-simulation',
    name: 'OR Soundscape Simulation Suite',
    shortDescription: 'Realistic operating room acoustic environment modeling',
    fullDescription:
      'Computational modeling and simulation of operating room acoustic environments. Enables testing of communication systems, alarm designs, and background noise scenarios. Used for designing optimized acoustic architectures for surgical environments.',
    capabilities: [
      'Acoustic environment simulation',
      'Alarm and alert design testing',
      'Communication system optimization',
      'Noise impact assessment',
      'Soundscape generation',
      'Virtual OR reproduction',
    ],
    location: 'TUM CAMP / TU Dresden CeTI',
    image: 'placeholder-or-soundscape.jpg',
    featured: false,
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
  },
];

export const getFeaturedInfrastructure = (): Infrastructure[] => {
  return infrastructure.filter((item) => item.featured);
};

export const getInfrastructureById = (id: string): Infrastructure | undefined => {
  return infrastructure.find((item) => item.id === id);
};
