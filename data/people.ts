/** Verified team and collaborator data. */

export interface TeamMember {
  id: string;
  name: string;
  title?: string;
  affiliation?: string;
  affiliations?: string[];
  group?: string;
  role?: string;
  website?: string;
  email?: string;
  image?: string; // Path to image in public/images/people/
  initials?: string; // Optional override for the generated avatar
  bio?: string;
}

export const principalInvestigators: TeamMember[] = [
  {
    id: 'fairhurst',
    name: 'Prof. Dr. Merle Fairhurst',
    title: 'Professor of Human Multisensory Perception and Neurocognitive Psychology',
    affiliation: 'CeTI, TU Dresden',
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
    title: 'Research Scientist',
    affiliation: 'CAMP, Technical University of Munich / CeTI, TU Dresden',
    group: 'Chair of Computer Aided Medical Procedures (CAMP) / Centre for Tactile Internet (CeTI)',
    role: 'Scientific Coordinator',
    website: 'https://www.cs.cit.tum.de/camp/members/sasan-matinfar-1/',
    email: 'sasan.matinfar@tum.de',
    image: 'Sasan.png',
    bio: 'Dr. Sasan Matinfar is a researcher in surgical sonification, multisensory human-AI interaction, and computer-assisted interventions. His work connects medical imaging, vibroacoustic sensing, computational modeling, spatial audio, and extended reality. Within Synergia, he serves as Scientific Coordinator and contributes to research on surgical sonification, OR soundscape modeling, vibroacoustic sensing, and immersive spatial-audio infrastructure.',
  },
];

export const researchTeam: TeamMember[] = [
  {
    id: 'veronica-ruozzi',
    name: 'Dr. Veronica Ruozzi',
    title: 'Senior Researcher',
    affiliations: [
      'Chair for Computer Aided Medical Procedures (CAMP)',
      'Technical University of Munich',
    ],
    image: 'veronica.jpeg',
    bio: 'Surgical navigation, biomechanical modeling, and computer-assisted interventions.',
  },
  {
    id: 'wenhan-sun',
    name: 'Dr. Wenhan Sun',
    title: 'Senior Researcher',
    affiliations: [
      'Chair of Social Affective Touch',
      'TU Dresden',
      'Chair for Computer Aided Medical Procedures (CAMP)',
      'Technical University of Munich',
    ],
    image: 'wenhan.jpeg',
    bio: 'Cognitive neuroscience, multisensory perception, human cognition, and affective interaction.',
  },
  {
    id: 'hannes-firzlaff',
    name: 'Hannes Firzlaff',
    title: 'Researcher',
    affiliations: [
      'Chair for Computer Aided Medical Procedures (CAMP)',
      'Technical University of Munich',
    ],
    image: 'hannes.jpeg',
    bio: 'Digital signal processing, machine learning, and intelligent computational methods.',
  },
];

export const clinicalTeam: TeamMember[] = [
  {
    id: 'peter-charbel-issa',
    name: 'Univ.-Prof. Dr. Dr. med. Peter Charbel Issa',
    title: 'Director, Department of Ophthalmology',
    affiliation: 'Department of Ophthalmology, TUM University Hospital',
    role: 'Clinical Collaborator',
    website: 'https://augenklinik.mri.tum.de/de/team/peter_charbel-issa-0',
    image: 'isa.jpg',
  },
  {
    id: 'carmen-baumann',
    name: 'PD Dr. med. Carmen Baumann',
    title: 'Senior Physician (Oberärztin)',
    affiliation: 'Department of Ophthalmology, TUM University Hospital',
    role: 'Clinical Collaborator',
    website: 'https://augenklinik.mri.tum.de/de/team/carmen_baumann',
    image: 'carmen-faceless-avatar-muted.png',
    initials: 'CB',
  },
  {
    id: 'mathias-maier',
    name: 'Prof. Dr. med. Mathias Maier',
    title: 'Senior Consultant and Deputy Director',
    affiliation: 'Department of Ophthalmology, TUM University Hospital',
    role: 'Clinical Collaborator',
    website: 'https://augenklinik.mri.tum.de/de/team/mathias_maier-0',
    image: 'maier.jpg',
  },
  {
    id: 'daniel-zapp',
    name: 'Dr. med. Daniel Zapp',
    title: 'Senior Physician, Glaucoma, Cornea, and Refractive Surgery',
    affiliation: 'Department of Ophthalmology, TUM University Hospital',
    role: 'Clinical Collaborator',
    website: 'https://augenklinik.mri.tum.de/de/team/daniel_zapp',
    image: 'daniel_zapp.jpg',
  },
  {
    id: 'andrea-ross',
    name: 'Dr. med. Andrea Ross',
    title: 'Physician and Postdoctoral Researcher',
    affiliation: 'Department of Ophthalmology and MAPS, TUM University Hospital',
    role: 'Clinical Collaborator',
    website: 'https://augenklinik.mri.tum.de/de/team/andrea_ross',
    image: 'andi.jpg',
  },
];

export const formerTeamMembers: TeamMember[] = [
  {
    id: 'luis-david-reyes-vargas',
    name: 'Luis David Reyes Vargas',
    image: 'luis.jpeg',
  },
  {
    id: 'laura-schuetz',
    name: 'Laura Schütz',
    image: 'laura.jpeg',
  },
];

export const externalCollaborators: TeamMember[] = [];

export const allTeamMembers = [
  ...principalInvestigators,
  ...coordinationTeam,
  ...researchTeam,
  ...clinicalTeam,
  ...externalCollaborators,
];
