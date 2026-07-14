# Synergia Research Website

A modern, professional research website for the DFG-funded Synergia project: "Multisensory Integration in High-Intensity Environments — Bridging AI Analysis and Human Perception."

## Overview

This website serves three primary goals:

1. **Official DFG Project Website** - Present the funded project professionally with scientific vision, objectives, work packages, research roadmap, team, collaborators, publications, news, and contact information.

2. **Synergia Research Ecosystem** - Showcase the interdisciplinary research ecosystem connecting CAMP, CeTI, MAPS, TUM Ophthalmology, TU Dresden, and clinical partners across medicine, AI, medical imaging, XR, auditory perception, sonification, and surgical guidance.

3. **Dr. Sasan Matinfar's Flagship Project Portfolio** - Clearly demonstrate Dr. Matinfar's central role as project coordinator and research lead for surgical sonification, spatial audio infrastructure, vibroacoustic sensing, multisensory interaction, and the Ambisonics laboratory.

## Technology Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Static Generation**: Next.js static export for deployment on university servers
- **Content**: Separated from presentation using TypeScript data files, JSON, YAML, or Markdown
- **Images**: Placeholder images in public/placeholders, replaceable with real assets

## Project Structure

```
Homepage/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with Header and Footer
│   ├── page.tsx                 # Home page
│   ├── project/                 # Project overview page
│   ├── research/                # Research themes page
│   ├── infrastructure/          # Research infrastructure page
│   ├── ambisonics-lab/          # Ambisonics lab detailed page
│   ├── team/                    # Team and people page
│   ├── collaborators/           # Institutional collaborators page
│   ├── publications/            # Publications listing page
│   ├── news/                    # News and updates page
│   ├── contact/                 # Contact and inquiry page
│   └── globals.css              # Global styles and Tailwind configuration
│
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   └── sections/                # Home page sections
│       ├── Hero.tsx
│       ├── EcosystemOverview.tsx
│       ├── ResearchThemesPreview.tsx
│       ├── AmbisconicsLabHighlight.tsx
│       ├── LatestNews.tsx
│       └── CallToAction.tsx
│
├── data/                         # Content data files
│   ├── people.ts                # Team members and collaborators
│   ├── researchThemes.ts        # Research areas and themes
│   ├── infrastructure.ts        # Lab facilities and equipment
│   ├── collaborators.ts         # Institutional partners
│   ├── publications.ts          # Research publications
│   └── news.ts                  # News and announcements
│
├── public/                       # Static assets
│   ├── logos/                   # Institutional logos (placeholder)
│   ├── placeholders/            # Placeholder images
│   └── images/                  # Real images (to be added)
│
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## Getting Started

### Installation

```bash
# Clone or navigate to the project directory
cd Homepage

# Install dependencies
npm install

# Or with yarn
yarn install
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Build for static export (production)
npm run build

# Export to static HTML/CSS/JS
npm run export

# Output will be in the 'out' directory
```

## Content Structure

### Data Files

All content is organized in TypeScript/JSON data files in the `data/` directory:

#### `people.ts`
- Principal investigators
- Project coordination team
- Research team (PhD, postdocs)
- Clinical collaborators
- External collaborators

#### `researchThemes.ts`
- 8 interconnected research themes
- AI-Assisted Surgery
- Multisensory Perception
- Surgical Sonification
- Vibroacoustic Sensing
- OR Soundscape Modeling
- Spatial Audio & XR
- Human-AI Collaboration
- Clinical Translation

#### `infrastructure.ts`
- Ambisonics Laboratory
- Surgical Sonification Platform
- OR Soundscape Simulation
- Ophthalmic Surgery Simulator
- Mixed Reality Systems
- Vibroacoustic Hardware

#### `collaborators.ts`
- CAMP (TUM)
- CeTI (TU Dresden)
- TUM Ophthalmology
- MAPS (TUM)
- LMU Ophthalmology
- DFG and other partners

#### `publications.ts`
- Research papers
- Title, authors, venue, year
- DOI and PDF links
- Project and topic tags

#### `news.ts`
- News items and announcements
- Categorized (event, milestone, publication, etc.)
- Dates and author information

## Pages Overview

### Home (`/`)
- Hero section with project vision
- Ecosystem overview
- Research themes preview
- Ambisonics lab highlight
- Latest news
- Call to action

### Project (`/project`)
- Scientific motivation
- Project objectives (4 major objectives)
- Work packages (WP1-WP4)
- Research roadmap
- Funding information

### Research Themes (`/research`)
- Detailed descriptions of 8 research areas
- Integration and interconnections
- Related work packages
- Navigation to other sections

### Infrastructure (`/infrastructure`)
- Featured facilities overview
- Additional platforms and systems
- Infrastructure supporting research themes
- Link to detailed Ambisonics lab page

### Ambisonics Lab (`/ambisonics-lab`)
- Detailed lab specifications
- 3rd-order Ambisonics technical specs
- Research applications
- Lab capabilities
- Demo videos and gallery placeholders
- Usage information

### Team (`/team`)
- Principal investigators
- Project coordination team
- Research team (organized by affiliation)
- Clinical collaborators
- External collaborators

### Collaborators (`/collaborators`)
- Institutional ecosystem
- Research centers
- Universities
- Hospitals and clinical centers
- Funding partners
- Collaboration opportunities

### Publications (`/publications`)
- Publications organized by year
- Title, authors, venue
- DOI and PDF links
- Topic and project tags
- Research abstracts

### News (`/news`)
- All news items sorted chronologically
- Categorized (announcement, event, publication, milestone, collaboration)
- News tags
- Category overview statistics

### Contact (`/contact`)
- Project coordination contact
- Institutional contacts (CAMP, CeTI, etc.)
- Contact form (TODO: backend integration)
- FAQ section

## Design

### Color Palette
- **Academic Blue**: #0066cc
- **Academic Navy**: #00264d  
- **Academic Gray**: #4a5568
- **Academic Light**: #f8fafc
- **Accent Red**: #e74c3c

### Typography
- Modern system fonts for excellent performance
- Clear hierarchy with heading scales
- Excellent contrast for accessibility

### Responsive Design
- Mobile-first approach
- Optimized for phone, tablet, desktop
- Smooth navigation and animations
- Accessibility standards compliance

## Placeholder Content

The entire website is populated with realistic placeholder content marked with TODO comments where real materials are needed. This includes:

- Person names and bios
- Publication details
- News items
- Facility descriptions
- Contact information
- Project details

All placeholders include clear TODO markers so you can systematically replace them with actual content.

## Deployment

### Static Export

This project is configured for static export, ideal for deployment on university servers:

```bash
# Build and export
npm run export

# Output directory: out/
# All files are static HTML, CSS, and JavaScript
```

### University Server Deployment

1. Build the static site: `npm run export`
2. Copy the `out/` directory to your server's web root
3. No Node.js or backend required
4. Supports any standard web server (Apache, Nginx, etc.)

### Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Customization

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Create `page.tsx` with your content
3. Add navigation link in `components/Header.tsx`
4. Follow the same layout pattern as existing pages

### Adding Team Members

Edit `data/people.ts`:

```typescript
const newMember: TeamMember = {
  id: 'unique-id',
  name: 'Dr. Full Name',
  title: 'Position',
  affiliation: 'Institution',
  role: 'Research area',
  website: 'https://...',
  email: 'email@institution.edu',
  image: 'path-to-image.jpg',
  bio: 'Short biography...',
};
```

### Adding Publications

Edit `data/publications.ts`:

```typescript
const newPub: Publication = {
  id: 'unique-id',
  title: 'Paper Title',
  authors: ['Author 1', 'Author 2'],
  venue: 'Conference/Journal Name',
  year: 2024,
  doi: '10.xxxx/xxxxx',
  pdfUrl: 'https://...',
  projectTags: ['WP1', 'WP2'],
  topicTags: ['topic1', 'topic2'],
  abstract: 'Paper abstract...',
};
```

## Content Replacement Checklist

After the website skeleton is generated, systematically replace placeholders:

### Step 1: Logos
- [ ] DFG logo
- [ ] TUM logo
- [ ] TU Dresden logo
- [ ] CAMP logo
- [ ] CeTI logo
- [ ] MAPS logo
- [ ] Clinical partner logos

### Step 2: People
- [ ] Replace all team member names, titles, affiliations
- [ ] Add real biographies
- [ ] Add profile photos
- [ ] Add website and email links

### Step 3: Project Content
- [ ] Final project summary
- [ ] Scientific motivation text
- [ ] Objectives descriptions
- [ ] Work package details
- [ ] Research roadmap timeline
- [ ] DFG funding acknowledgement

### Step 4: Infrastructure Media
- [ ] Ambisonics lab photos
- [ ] Speaker setup images
- [ ] XR system photos
- [ ] Surgical simulator screenshots
- [ ] OR soundscape figures/diagrams
- [ ] Demo videos (if available)

### Step 5: Publications
- [ ] Export real publications from academic database
- [ ] Add DOI links
- [ ] Add PDF links
- [ ] Add project and topic tags
- [ ] Add abstracts

### Step 6: News
- [ ] Project kickoff announcement
- [ ] Event announcements
- [ ] Lab demonstration reports
- [ ] Publication announcements
- [ ] Collaboration news

### Step 7: Deployment
- [ ] Verify server compatibility with static export
- [ ] Configure NEXT_PUBLIC_SITE_URL
- [ ] Test all links after deployment
- [ ] Set up image compression if needed
- [ ] Verify responsive design on mobile devices
- [ ] Test form functionality or set up alternative contact method

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices with functional components
- Use Tailwind CSS for all styling
- Keep components focused and reusable
- Add comments for complex logic

### Accessibility
- Semantic HTML elements
- ARIA labels where appropriate
- Sufficient color contrast
- Keyboard navigation support
- Alt text for images

### Performance
- Optimize images
- Use Next.js image optimization
- Minimize bundle size
- Leverage static generation
- CSS is compiled and minified by Tailwind

### SEO
- Metadata in each page (title, description)
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times

## Troubleshooting

### Build fails
- Ensure all imports are correct
- Check for TypeScript errors: `npm run type-check`
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Static export not working
- Verify `next.config.js` has `output: 'export'`
- Ensure no API routes or dynamic server features are used
- Check that all pages are static (no `getServerSideProps`)

### Images not loading
- Verify images are in `public/` directory
- Use relative paths or Next.js Image component
- Check that `next.config.js` has `images: { unoptimized: true }`

## Support and Maintenance

For questions or issues:

1. Check this README for common solutions
2. Review the code comments in relevant files
3. Consult Next.js documentation: https://nextjs.org/docs
4. Contact: Dr. Sasan Matinfar (sasan.matinfar@tum.de)

## License

This website and its content are created for the Synergia DFG research project. All rights reserved.

---

**Last Updated**: 2026-06-22
**Status**: Ready for placeholder replacement
