/**
 * Team and collaborator data
 * TODO: Replace with real names, titles, affiliations, and information
 */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  group?: string;
  role: string; // E.g., "Principal Investigator", "Postdoc", "PhD Student"
  website?: string;
  email?: string;
  image?: string; // Path to image in public/images/people/
  bio?: string;
}

export const principalInvestigators: TeamMember[] = [
  {
    id: 'fairhurst',
    name: 'Prof. Dr. Merle Fairhurst',
    title: 'Professor of Human Multisensory Perception and Neurocognitive Psychology',
    affiliation: 'Technical University of Dresden',
    group: 'Centre for Tactile Internet with Human-in-the-Loop (CeTI)',
    role: 'Principal Investigator',
    website: 'https://tu-dresden.de/ing/elektrotechnik/ias/socialtouch',
    image: 'cropped/Merle.jpg',
    bio: 'Prof. Dr. Merle Fairhurst is Professor of Social Affective Touch and a leading researcher in human multisensory perception, cognition, and human-centered technology. Her research focuses on how humans perceive, integrate, and respond to complex sensory information in dynamic real-world environments, with particular emphasis on the interaction between perception, behavior, and emerging technologies. A multilingual researcher with extensive international experience, she has published more than 30 peer-reviewed journal articles and book chapters, receiving over 2,000 citations in leading journals including Journal of Neuroscience, Psychological Science, Cerebral Cortex, Scientific Reports, and NeuroImage. Her work combines psychophysical, physiological, and neuroimaging methods with advanced computational modeling approaches to investigate socially rich and dynamically evolving multisensory events. Through strong interdisciplinary collaborations with computer scientists, engineers, mathematicians, and philosophers, she advances both fundamental understanding of human perception and the development of intelligent systems that effectively support human performance in complex environments. Within the Synergia project, Prof. Fairhurst contributes expertise in multisensory perception, cognitive processing, and human behavior, helping to establish the scientific foundations for designing and evaluating multisensory feedback in high-intensity environments such as surgery.',
  },
  {
    id: 'navab',
    name: 'Prof. Dr. Nassir Navab',
    title: 'Professor of AI, Medical Imaging, Medical XR, and Robotics',
    affiliation: 'Technical University of Munich',
    group: 'Chair of Computer Aided Medical Procedures (CAMP)',
    role: 'Principal Investigator',
    website: 'https://www.professoren.tum.de/en/navab-nassir',
    image: 'cropped/Nassir.jpg',
    bio: 'Prof. Dr. Nassir Navab is Professor of Computer-Aided Medical Procedures at the Technical University of Munich and a leading pioneer in computer-assisted interventions, medical augmented reality, surgical navigation, and medical sonification. His research focuses on developing intelligent technologies that enhance the quality, safety, and precision of medical interventions by bridging the fields of medicine, computer science, artificial intelligence, and engineering. After studying mathematics, physics, computer engineering, and systems control, Prof. Navab completed his doctoral research at INRIA and Université Paris-Sud (Paris XI). He subsequently conducted postdoctoral research at the MIT Media Laboratory in Cambridge, USA. Prior to joining the Technical University of Munich as a full professor in 2003, he was a Distinguished Member of Technical Staff at Siemens Corporate Research in Princeton, USA. Prof. Navab has played a major role in shaping the field of medical image computing and computer-assisted intervention. He served on the board of MICCAI, the leading international society and conference in the field, and is a member of the editorial boards of several major journals, including IEEE Transactions on Medical Imaging (TMI), Medical Image Analysis (MedIA), and Medical Physics. He has authored hundreds of scientific publications and holds more than 60 international patents. His group is internationally recognized for pioneering contributions to medical sonification and auditory feedback for image-guided interventions, introducing novel approaches that transform complex medical data into intuitive auditory representations to improve surgical guidance, decision-making, and human-AI interaction. Within the Synergia project, Prof. Navab contributes expertise in AI-assisted surgery, medical imaging, augmented reality, human-centered surgical systems, and the design of advanced multimodal feedback technologies.',
  },
  {
    id: 'nasseri',
    name: 'Prof. Dr. M. Ali Nasseri',
    title: 'Professor of Medical Robotics',
    affiliation: 'Technical University of Munich',
    group: 'Medical Autonomy and Precision Surgery (MAPS)',
    role: 'Principal Investigator',
    website: 'https://www.professoren.tum.de/ausserplanmaessige-professoren/alphabetisch/n/nasseri-mohammad-ali',
    image: 'cropped/Ali.jpg',
    bio: 'Prof. Dr. M. Ali Nasseri is Professor of Surgical Robotics at the Technical University of Munich and Founding Director of the Medical Autonomy and Precision Surgery (MAPS) research group within the School of Medicine and Health. His research focuses on surgical robotics and surgical intelligence, with particular emphasis on surgical mechatronics, medical imaging, medical visualization, artificial intelligence, and autonomous systems for precision surgery. In 2024, Prof. Nasseri was appointed Professor of Surgical Robotics at TUM while also holding an Adjunct Professorship in the Department of Biomedical Engineering at the University of Alberta, Canada. His work aims to advance the next generation of intelligent surgical systems by integrating robotics, AI-driven decision support, real-time imaging, and advanced sensing technologies into clinical workflows. Prof. Nasseri has been actively involved in the development of image-guided and robot-assisted surgical technologies, particularly in ophthalmic microsurgery and precision intervention. He has also contributed to early research on medical sonification and multimodal feedback, exploring how auditory information can complement visual guidance and improve human interaction with complex surgical systems. Within the Synergia project, Prof. Nasseri contributes expertise in surgical robotics, medical AI, ophthalmic surgery, clinical translation, and the integration of advanced sensing and feedback technologies into future human-centered surgical environments.',
  },
];

export const coordinationTeam: TeamMember[] = [
  {
    id: 'matinfar',
    name: 'Dr. Sasan Matinfar',
    title: 'Research Scientist & Project Coordinator',
    affiliation: 'Technical University of Munich (TUM) & Technical University of Dresden (TU Dresden)',
    group: 'Chair of Computer Aided Medical Procedures (CAMP) / Centre for Tactile Internet (CeTI)',
    role: '',
    website: 'https://www.cs.cit.tum.de/camp/members/sasan-matinfar-1/',
    email: 'sasan.matinfar@tum.de',
    image: 'Sasan.png',
    bio: 'Dr. Sasan Matinfar is a researcher in surgical sonification, multisensory human-AI interaction, and computer-assisted interventions. His work focuses on transforming complex medical data and tissue interaction signals into meaningful auditory and multisensory feedback that can support surgical perception, decision-making, and guidance in image-guided interventions. His research combines medical imaging, vibroacoustic sensing, computational modeling, spatial audio, and extended reality technologies to develop human-centered surgical systems that bridge AI analysis and human perception. He has contributed to pioneering work in medical sonification, including interactive auditory representations of medical imaging data, tissue-inspired sound models, and immersive auditory environments for surgical training and decision support. Dr. Matinfar is affiliated with the Centre for Tactile Internet with Human-in-the-Loop (CeTI) at TU Dresden and the Chair of Computer Aided Medical Procedures (CAMP) at the Technical University of Munich. Within the Synergia project, he serves as Project Coordinator and leads research on surgical sonification, OR soundscape modeling, vibroacoustic sensing, and immersive spatial audio infrastructures, including the Ambisonics Laboratory.',
  },
];

export const researchTeam: TeamMember[] = [
  {
    id: 'veronica-zuozzi',
    name: 'Dr. Veronica Zuozzi',
    title: 'Researcher',
    affiliation: 'TUM CAMP',
    role: 'Surgical Sonification & Human-AI Interaction',
    bio: 'TODO: Add biography',
  },
  {
    id: 'wenhan-sun',
    name: 'Wenhan Sun',
    title: 'Researcher',
    affiliation: 'TUM CAMP',
    role: 'Medical Imaging & Multimodal Feedback',
    bio: 'TODO: Add biography',
  },
  {
    id: 'hannes-firzlaff',
    name: 'Hannes Firzlaff',
    title: 'Researcher',
    affiliation: 'TU Dresden CeTI',
    role: 'Perception & Auditory Interface Design',
    bio: 'TODO: Add biography',
  },
];

export const clinicalTeam: TeamMember[] = [
  {
    id: 'clinical-1',
    name: 'TODO: Clinical Collaborator Name 1',
    title: 'Surgeon/Clinician',
    affiliation: 'TUM Ophthalmology',
    role: 'Clinical Collaboration & Requirements',
    bio: 'TODO: Add biography',
  },
  {
    id: 'clinical-2',
    name: 'TODO: Clinical Collaborator Name 2',
    title: 'Surgeon/Clinician',
    affiliation: 'LMU Ophthalmology',
    role: 'Surgical Requirements & Testing',
    bio: 'TODO: Add biography',
  },
];

export const externalCollaborators: TeamMember[] = [
  {
    id: 'ext-1',
    name: 'TODO: External Collaborator Name 1',
    title: 'Researcher',
    affiliation: 'TODO: Institution',
    role: 'Auditory Perception Research',
    website: 'https://TODO.example.com',
    bio: 'TODO: Add biography',
  },
  {
    id: 'ext-2',
    name: 'TODO: External Collaborator Name 2',
    title: 'Researcher',
    affiliation: 'TODO: Institution',
    role: 'Human Factors & XR',
    website: 'https://TODO.example.com',
    bio: 'TODO: Add biography',
  },
];

export const allTeamMembers = [
  ...principalInvestigators,
  ...coordinationTeam,
  ...researchTeam,
  ...clinicalTeam,
  ...externalCollaborators,
];
