#!/usr/bin/env node

/**
 * Placeholder Content Checklist
 * 
 * This file lists all TODO items in the codebase that need to be replaced
 * with real content before the website goes live.
 * 
 * Usage: Review each section and replace placeholders systematically.
 */

export const placeholderChecklist = {
  // ==================== TEAM & PEOPLE ====================
  people: {
    principalInvestigators: [
      {
        name: 'Prof. Dr. Merle Fairhurst',
        todos: [
          'Bio description',
          'Email verification',
          'Website link',
          'Photo upload',
        ],
      },
      {
        name: 'Prof. Dr. Nassir Navab',
        todos: [
          'Bio description',
          'Email verification',
          'Website link',
          'Photo upload',
        ],
      },
      {
        name: 'Prof. Dr. M. Ali Nasseri',
        todos: [
          'Bio description',
          'Email verification',
          'Website link',
          'Photo upload',
        ],
      },
    ],
    coordinationTeam: [
      {
        name: 'Dr. Sasan Matinfar',
        todos: [
          'Bio highlighting surgical sonification, spatial audio, vibroacoustic sensing, Ambisonics lab',
          'Website if available',
          'Photo upload',
        ],
      },
    ],
    researchTeam: 'TODO: Add all PhD students and postdocs',
    clinicalTeam: 'TODO: Add all clinical collaborators',
    externalCollaborators: 'TODO: Add all external researchers',
  },

  // ==================== LOGOS ====================
  logos: {
    required: [
      'public/logos/placeholder-dfg-logo.svg',
      'public/logos/placeholder-camp-logo.svg',
      'public/logos/placeholder-ceti-logo.svg',
      'public/logos/placeholder-maps-logo.svg',
      'public/logos/placeholder-tum-eye-logo.svg',
      'public/logos/placeholder-tu-dresden-logo.svg',
      'public/logos/placeholder-lmu-logo.svg',
    ],
  },

  // ==================== PROJECT CONTENT ====================
  projectContent: {
    motivation: 'TODO: Add scientific motivation (2-3 paragraphs)',
    objectives: [
      'TODO: Objective 1 title and description',
      'TODO: Objective 2 title and description',
      'TODO: Objective 3 title and description',
      'TODO: Objective 4 title and description',
    ],
    workPackages: [
      'TODO: WP1 description',
      'TODO: WP2 description',
      'TODO: WP3 description',
      'TODO: WP4 description',
    ],
    roadmap: [
      'TODO: Phase 1 timeline and milestones',
      'TODO: Phase 2 timeline and milestones',
      'TODO: Phase 3 timeline and milestones',
      'TODO: Phase 4 timeline and milestones',
    ],
    funding: [
      'TODO: DFG funding amount',
      'TODO: Project duration (start/end dates)',
      'TODO: DFG grant number',
    ],
  },

  // ==================== INFRASTRUCTURE MEDIA ====================
  infrastructure: {
    ambisonicsLab: [
      'TODO: Lab overview photo',
      'TODO: Speaker array setup photo',
      'TODO: Lab layout diagram',
      'TODO: Additional facility photos (5-10)',
      'TODO: Lab tour video (optional)',
      'TODO: Sonification demo audio/video',
    ],
    otherFacilities: [
      'TODO: Surgical sonification platform screenshots',
      'TODO: OR soundscape simulator photos',
      'TODO: Ophthalmic surgery simulator photos',
      'TODO: Mixed reality system photos',
      'TODO: Vibroacoustic hardware photos',
    ],
    technical: [
      'TODO: OR soundscape figures/diagrams',
      'TODO: System architecture diagrams',
      'TODO: Speaker geometry diagrams',
    ],
  },

  // ==================== PUBLICATIONS ====================
  publications: [
    'TODO: Replace 5+ placeholder publications with real papers',
    'TODO: Add publication DOI links',
    'TODO: Add PDF links where available',
    'TODO: Add abstracts for all publications',
    'TODO: Add project tags (WP1, WP2, etc.)',
    'TODO: Add topic tags',
  ],

  // ==================== NEWS & EVENTS ====================
  news: [
    'TODO: Project kickoff announcement (real date)',
    'TODO: Ambisonics lab opening announcement',
    'TODO: Workshop or event announcements',
    'TODO: Publication announcements',
    'TODO: Collaboration news',
    'TODO: Lab demonstration reports',
    'TODO: Team member achievements',
    'TODO: Add photos for news items',
  ],

  // ==================== COLLABORATORS ====================
  collaborators: {
    todos: [
      'TODO: Verify CAMP description and links',
      'TODO: Verify CeTI description and links',
      'TODO: Verify TUM MAPS description and links',
      'TODO: Verify TUM Ophthalmology description and links',
      'TODO: Verify TU Dresden description and links',
      'TODO: Verify LMU Ophthalmology description and links',
      'TODO: Add affiliated members for each institution',
      'TODO: Verify all institutional websites',
    ],
  },

  // ==================== CONTACT INFORMATION ====================
  contact: [
    'TODO: Verify Dr. Sasan Matinfar email',
    'TODO: Add CAMP contact email and address',
    'TODO: Add CeTI contact email and address',
    'TODO: Add office phone numbers if available',
    'TODO: Set up contact form backend (Formspree, Netlify, etc.)',
    'TODO: Add FAQ answers',
  ],

  // ==================== DEPLOYMENT ====================
  deployment: [
    'TODO: Verify TUM server compatibility with Next.js static export',
    'TODO: Configure NEXT_PUBLIC_SITE_URL for production',
    'TODO: Set up image compression pipeline',
    'TODO: Verify logo usage rights/permissions',
    'TODO: Test responsive design on real mobile devices',
    'TODO: Set up SSL certificate',
    'TODO: Configure web server (Apache/Nginx)',
    'TODO: Set up DNS records',
    'TODO: Test all links after deployment',
  ],

  // ==================== OPTIONAL ENHANCEMENTS ====================
  optional: [
    'TODO: Add Google Analytics tracking',
    'TODO: Add Google Search Console verification',
    'TODO: Create sitemap.xml',
    'TODO: Add robots.txt',
    'TODO: Set up 404 error page',
    'TODO: Implement newsletter signup',
    'TODO: Add breadcrumb navigation',
    'TODO: Create blog/news archive pages',
    'TODO: Add search functionality',
    'TODO: Implement multi-language support (German/English)',
  ],
};

/**
 * Quick Stats
 */
export const stats = {
  totalPages: 10,
  totalComponents: 11,
  dataFiles: 6,
  placeholderImages: 15,
  todoMarkers: 85, // Approximate count
};

/**
 * Recommended Priority Order
 */
export const replacementPriority = [
  '1. Team member names, titles, and contact info (HIGH)',
  '2. Logos for all institutions (HIGH)',
  '3. Project overview and content (HIGH)',
  '4. Ambisonics lab media and details (MEDIUM)',
  '5. Publications list (MEDIUM)',
  '6. News items (MEDIUM)',
  '7. Collaborator information (MEDIUM)',
  '8. Contact form setup (MEDIUM)',
  '9. Infrastructure photos (LOW)',
  '10. Deployment configuration (HIGH - before going live)',
];

export default placeholderChecklist;
