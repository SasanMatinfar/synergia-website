# Synergia Website - Content Replacement Guide

This guide walks you through replacing placeholder content with real materials for the Synergia research website.

## Table of Contents

1. [Step 1: Logos](#step-1-logos)
2. [Step 2: People](#step-2-people)
3. [Step 3: Project Content](#step-3-project-content)
4. [Step 4: Infrastructure Media](#step-4-infrastructure-media)
5. [Step 5: Publications](#step-5-publications)
6. [Step 6: News](#step-6-news)
7. [Step 7: Deployment](#step-7-deployment)

---

## Step 1: Logos

**Current Status**: Placeholder image paths defined, but files need to be added

### What You'll Provide

For each organization, provide a logo in one of these formats:
- PNG (recommended, with transparent background)
- SVG (vector format, best for scaling)
- JPG (acceptable)

Recommended specifications:
- Size: 400x300 pixels minimum
- Format: Square or rectangular
- Background: Transparent PNG or SVG preferred
- Resolution: 72 DPI for web (300 DPI for printing if needed)

### Where to Place Logos

Create these directories if they don't exist:

```
public/logos/
├── placeholder-camp-logo.svg       → tum-camp logo
├── placeholder-ceti-logo.svg       → ceti-dresden logo
├── placeholder-maps-logo.svg       → maps-tum logo
├── placeholder-tum-eye-logo.svg    → ophthalmology logo
├── placeholder-tu-dresden-logo.svg → tu-dresden logo
├── placeholder-lmu-logo.svg        → lmu-muenchen logo
├── placeholder-dfg-logo.svg        → dfg logo
└── [other logos]
```

### How to Update

1. Obtain logos from each organization's official website or brand guidelines
2. Save files to `public/logos/` with the placeholder filenames shown above
3. No code changes needed - images will automatically load with correct filenames
4. Test by visiting each page to verify logos display correctly

### Required Logos

- [ ] DFG (Deutsche Forschungsgemeinschaft)
- [ ] TUM (Technical University of Munich)
- [ ] TU Dresden (Technische Universität Dresden)
- [ ] CAMP logo (TUM)
- [ ] CeTI logo (TU Dresden)
- [ ] MAPS logo (TUM)
- [ ] TUM Ophthalmology clinic logo
- [ ] LMU Ophthalmology logo (if available)

---

## Step 2: People

**Current Status**: Placeholder structure with all fields marked TODO

### What You'll Provide for Each Person

1. **Full Name**: First and last name
2. **Title**: Position (e.g., "Professor", "Dr.", "PhD Researcher")
3. **Affiliation**: Institution (e.g., "TUM CAMP", "TU Dresden CeTI")
4. **Role**: Their role in the project
5. **Email**: Contact email address
6. **Website**: Personal or institutional website (optional)
7. **Bio**: 2-3 sentence biography
8. **Photo**: Professional headshot (passport style photo)

### Photo Specifications

- Format: JPG or PNG
- Size: 400x400 pixels (square)
- Resolution: 72 DPI for web
- Aspect ratio: 1:1 (square)
- Filename: descriptive name (e.g., `sasan-matinfar.jpg`)

### Files to Update

Edit `data/people.ts`:

**Principal Investigators** (3 people):
- Prof. Dr. Merle Fairhurst (TUM CAMP)
- Prof. Dr. Nassir Navab (TUM CAMP)
- Prof. Dr. M. Ali Nasseri (TUM Ophthalmology)

**Project Coordination** (1 person):
- Dr. Sasan Matinfar (TUM CAMP) - Project Coordinator

**Research Team** (adjust count as needed):
- PhD students (names, affiliations, research focus)
- Postdocs (names, affiliations, research focus)

**Clinical Team** (adjust count as needed):
- Surgeons/Clinicians (names, affiliations)

**External Collaborators** (adjust count as needed):
- External researchers (names, affiliations, institutions)

### How to Update

1. Edit `data/people.ts`
2. Replace TODO placeholders with real names, titles, affiliations
3. Add biographies (2-3 sentences max)
4. Add email addresses and websites
5. Save profile photos to `public/images/people/` with descriptive filenames
6. Update the `image` property with the filename

**Example:**

```typescript
{
  id: 'fairhurst',
  name: 'Prof. Dr. Merle Fairhurst',
  title: 'Professor',
  affiliation: 'TUM CAMP',
  role: 'Principal Investigator',
  website: 'https://camp.in.tum.de/person/merle-fairhurst',
  email: 'merle.fairhurst@tum.de',
  image: 'fairhurst.jpg',
  bio: 'Prof. Fairhurst leads research in [area]. Her work focuses on [description]...',
}
```

### Required Updates

- [ ] All principal investigator details
- [ ] Project coordinator details (Dr. Sasan Matinfar)
- [ ] All PhD researcher names and info
- [ ] All postdoc names and info
- [ ] All clinical collaborator details
- [ ] All external collaborator details
- [ ] All profile photos

---

## Step 3: Project Content

**Current Status**: Placeholder text in `app/project/page.tsx`

### What You'll Provide

For the Project Overview page (`/project`):

1. **Scientific Motivation** (2-3 paragraphs)
   - Why this research matters
   - The problem being addressed
   - Why multisensory feedback is needed

2. **Project Objectives** (4 main objectives)
   - Objective 1: Title and description
   - Objective 2: Title and description
   - Objective 3: Title and description
   - Objective 4: Title and description

3. **Work Package Details** (WP1-WP4)
   - WP1 title and full description
   - WP2 title and full description
   - WP3 title and full description
   - WP4 title and full description

4. **Research Roadmap**
   - Phase 1: Foundation (timeline, milestones)
   - Phase 2: Development (timeline, milestones)
   - Phase 3: Evaluation (timeline, milestones)
   - Phase 4: Translation (timeline, milestones)

5. **Funding Information**
   - DFG funding amount
   - Project duration (start/end dates)
   - DFG grant number
   - Optional: DFG reference link

### How to Update

Edit `app/project/page.tsx`:

1. Replace "TODO: Add scientific motivation" with your motivation text
2. For each objective, replace the TODO with title and description
3. Fill in each work package description
4. Update the research roadmap phases with real timeline and milestones
5. Add real funding information

**Example:**

```typescript
<p className="text-academic-gray leading-relaxed">
  Modern operating rooms present a paradox: they generate enormous amounts of real-time 
  data (from imaging, tracking, monitoring systems, and AI analysis) that could inform 
  surgeon decision-making, yet surgeons cannot process all this information without 
  cognitive overload. This project addresses how multisensory feedback—particularly 
  through innovative sonification and spatial audio—can present complex information 
  intuitively and naturally within surgical workflow.
</p>
```

### Required Updates

- [ ] Scientific motivation text (2-3 paragraphs)
- [ ] 4 Project objectives with descriptions
- [ ] 4 Work package descriptions
- [ ] 4 Research phases with timeline and milestones
- [ ] DFG funding amount
- [ ] Project duration dates
- [ ] DFG grant reference number

---

## Step 4: Infrastructure Media

**Current Status**: Placeholder image/video sections in pages

### What You'll Provide

**Ambisonics Lab** (`/ambisonics-lab`):
- Photo gallery (5-10 high-quality photos)
- Speaker array setup photo
- Lab layout/floor plan (optional)
- Lab tour video (if available)
- Sonification demo audio clip (if available)

**Other Infrastructure** (across infrastructure pages):
- Surgical sonification platform screenshots or photos
- OR soundscape simulation interface screenshots
- Ophthalmic surgery simulator photos
- Mixed reality system in use photos
- Vibroacoustic hardware photos/diagrams

### Photo Specifications

- Format: JPG or PNG
- Resolution: 1920x1080 pixels minimum for full-size images
- File size: Compressed to < 500KB each
- Orientation: Landscape preferred, but portrait acceptable
- Quality: Professional photography or high-quality documentation

### Video Specifications

- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (1080p) or 1280x720 (720p)
- Duration: 2-5 minutes recommended for lab tour
- File size: < 50MB
- Framerate: 24fps or 30fps

### Audio Specifications

- Format: MP3 or WAV
- Bitrate: 192kbps minimum
- Duration: 10-30 seconds for demo clips
- File size: < 5MB

### Where to Place Media

```
public/images/
├── ambisonics-lab/
│   ├── lab-overview.jpg
│   ├── speaker-array.jpg
│   └── [other lab photos]
├── sonification/
│   ├── platform-screenshot.png
│   └── [other screenshots]
├── ophthalmic-sim/
│   └── [simulator photos]
└── [other infrastructure categories]

public/videos/
├── ambisonics-lab-tour.mp4
└── [other videos]

public/audio/
├── sonification-demo.mp3
└── [other audio]
```

### How to Update

The website uses image placeholders with TODO markers. To replace them:

1. Collect high-quality photos of each facility
2. Compress/optimize images for web
3. Save to appropriate `public/` subdirectory
4. Search for "TODO:" in each page's file
5. Replace placeholder images with your filenames
6. Test that images load correctly

**Example replacement in code:**

```typescript
// BEFORE:
<div className="aspect-square bg-gradient-to-br from-academic-blue to-academic-navy rounded-lg overflow-hidden shadow-xl">
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center text-white">
      <div className="text-6xl mb-4">🎧</div>
      <p className="text-lg font-semibold">TODO: Ambisonics Lab Photo</p>
    </div>
  </div>
</div>

// AFTER: (requires Next.js Image component integration)
<Image
  src="/images/ambisonics-lab/lab-overview.jpg"
  alt="Ambisonics Laboratory with 16-speaker array"
  width={1200}
  height={800}
  className="rounded-lg shadow-xl"
/>
```

### Required Media

- [ ] Ambisonics lab photos (5+ high-quality images)
- [ ] Speaker array setup photo
- [ ] Lab tour video (if available)
- [ ] Sonification demo audio or video
- [ ] Surgical simulator photos
- [ ] XR system setup photos
- [ ] Research in progress photos
- [ ] Any event/meeting photos for news

---

## Step 5: Publications

**Current Status**: Placeholder publications in `data/publications.ts`

### What You'll Provide

For each publication, collect:

1. **Title**: Full publication title
2. **Authors**: List of all authors
3. **Venue**: Conference name, journal name, or workshop name
4. **Year**: Publication year
5. **DOI**: Digital Object Identifier (DOI) if available
6. **PDF URL**: Link to published PDF (if available/allowed)
7. **Abstract**: Paper abstract or summary (100-200 words)
8. **Keywords**: List of 5-10 keywords
9. **Project Tags**: Which work packages (WP1, WP2, etc.)
10. **Topic Tags**: Research areas (e.g., "sonification", "AI-surgery")

### File to Update

Edit `data/publications.ts`:

```typescript
{
  id: 'pub-2024-unique-id',
  title: 'Full Publication Title Here',
  authors: ['Author One', 'Author Two', 'Author Three'],
  venue: 'Conference Name 2024 or Journal Name',
  year: 2024,
  doi: '10.1234/example',
  pdfUrl: 'https://example.com/paper.pdf',
  projectTags: ['WP1', 'WP2'],
  topicTags: ['sonification', 'surgical-feedback'],
  abstract: 'Abstract text...',
  keywords: ['keyword1', 'keyword2', ...],
}
```

### How to Update

1. Collect all publications related to Synergia project
2. Gather publication details (DOI, venue, authors)
3. Edit `data/publications.ts`
4. Replace or add to placeholder publication objects
5. Ensure all required fields are complete
6. Test that DOI links work
7. Verify PDF links are accessible (if included)

### Source for Publications

- [ ] Papers by principal investigators
- [ ] Papers by PhD students/postdocs working on Synergia
- [ ] Papers in collaboration with clinical partners
- [ ] Related work by external collaborators
- [ ] Conference proceedings and workshop papers
- [ ] Journal articles
- [ ] Preprints (if applicable)

### Required Updates

- [ ] At least 5 placeholder publications replaced with real papers
- [ ] All author names correct
- [ ] Venues and years verified
- [ ] DOI links (or URLs) included where available
- [ ] Project and topic tags assigned
- [ ] Abstracts included (at minimum for recent publications)

---

## Step 6: News

**Current Status**: Placeholder news items in `data/news.ts`

### What You'll Provide

For each news item, provide:

1. **Title**: News headline
2. **Date**: Publication date
3. **Category**: One of: announcement, event, publication, milestone, collaboration
4. **Summary**: Short summary (1-2 sentences)
5. **Content**: Full article text (optional, can be markdown)
6. **Image**: Photo for news item (optional)
7. **Author**: Person who wrote the update (optional)
8. **Tags**: Relevant tags (e.g., "ambisonics", "workshop", "clinical")

### File to Update

Edit `data/news.ts`:

```typescript
{
  id: 'news-kickoff-2024',
  title: 'Synergia Project Official Kickoff Meeting',
  date: new Date('2024-01-15'),
  category: 'milestone',
  summary: 'The project team gathered for the official kickoff meeting to discuss objectives and timeline.',
  content: 'Full article content here...',
  image: 'placeholder-kickoff.jpg',
  author: 'Project Team',
  tags: ['project', 'kickoff', 'dfg'],
}
```

### News Categories

- **announcement**: General announcements and updates
- **event**: Upcoming or past events, workshops, conferences
- **publication**: New publication releases
- **milestone**: Major project milestones or achievements
- **collaboration**: New partnerships or collaboration updates

### How to Update

1. Collect news items from project timeline
2. Write article summaries and full content
3. Gather photos if available
4. Edit `data/news.ts`
5. Add new news items or replace placeholders
6. Use ISO date format: `new Date('YYYY-MM-DD')`
7. Assign appropriate category and tags

### Example News Items to Add

- [ ] Project kickoff announcement and dates
- [ ] Ambisonics lab official opening
- [ ] First milestone completion
- [ ] Publication announcement (for major papers)
- [ ] Workshop or event announcements
- [ ] Collaboration announcements
- [ ] Lab demonstrations or open house
- [ ] Conference presentations
- [ ] Team member achievements

### News Photo Specifications

- Format: JPG or PNG
- Size: 1920x1080 pixels or larger
- File size: < 500KB
- Store in `public/images/news/` subdirectory

### Required Updates

- [ ] Project kickoff announcement (with real date)
- [ ] At least 3-5 real news items added
- [ ] Ambisonics lab opening announcement (if completed)
- [ ] Any major milestone announcements
- [ ] Recent publication announcements
- [ ] Upcoming event announcements

---

## Step 7: Deployment

**Current Status**: Configured for static export, ready for deployment

### Pre-Deployment Checklist

Before deploying to your production server:

- [ ] All TODO placeholders replaced with real content
- [ ] All images and media files optimized
- [ ] Links tested and working
- [ ] Mobile responsive design verified on device
- [ ] All pages accessible and loading correctly
- [ ] Build completes without errors: `npm run build`
- [ ] Static export works: `npm run export`
- [ ] No console errors or warnings

### Environment Configuration

1. Create `.env.production.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

2. Replace with your actual domain/URL

### Building for Production

```bash
# Build and export to static files
npm run export

# Output directory: out/
# All files are static HTML, CSS, JavaScript, and images
```

### Deployment Options

#### Option 1: University Server (Recommended)

1. SSH into your web server
2. Navigate to your web root directory
3. Upload the `out/` directory contents:
   ```bash
   scp -r out/* user@server:/var/www/synergia/
   ```
4. Ensure proper file permissions: `chmod 755 -R /var/www/synergia/`
5. Test in browser

#### Option 2: Vercel (Easiest)

1. Push code to GitHub
2. Connect repository to Vercel: https://vercel.com
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
4. Deploy automatically on push

#### Option 3: AWS S3 + CloudFront

1. Create S3 bucket
2. Upload `out/` contents to S3
3. Configure CloudFront CDN
4. Point domain to CloudFront distribution

#### Option 4: Traditional Hosting

1. Build static files: `npm run export`
2. Upload `out/` contents via FTP/SFTP
3. Configure web server (Apache/Nginx) to serve from upload directory
4. Enable gzip compression and caching headers

### Post-Deployment Testing

After deployment:

- [ ] Home page loads correctly
- [ ] Navigation links work
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Responsive design on mobile (use browser DevTools)
- [ ] No console errors
- [ ] Page load speed acceptable (test with Google PageSpeed)
- [ ] Meta tags/SEO working (check page source)
- [ ] Forms functional or alternative contact method working

### Image Optimization

For better performance:

1. Compress images before uploading:
   ```bash
   # Using ImageMagick (install with: brew install imagemagick)
   convert input.jpg -resize 1920x1080 -quality 85 output.jpg
   ```

2. Or use online tools like TinyPNG or Squoosh

3. Consider using WebP format for modern browsers

### Performance Optimization

1. Enable gzip compression on server
2. Enable HTTP caching headers
3. Use a CDN for images (Cloudflare, AWS CloudFront)
4. Monitor page load times with Google PageSpeed Insights
5. Test Core Web Vitals with Google Search Console

### Ongoing Maintenance

After deployment:

- [ ] Set up 404 error page
- [ ] Configure SSL/HTTPS certificate (if not automatic)
- [ ] Set up Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Regular backups of database (if needed)
- [ ] Monitor error logs
- [ ] Update content regularly
- [ ] Test forms periodically

### Contact Form Setup (Optional)

The current contact form is non-functional (placeholder). To enable it:

**Option 1: Formspree** (Free tier available)
1. Sign up at https://formspree.io
2. Create new form
3. Update form action in `app/contact/page.tsx`

**Option 2: Netlify Forms**
1. Deploy to Netlify
2. Forms work automatically

**Option 3: EmailJS** (Client-side)
1. Sign up at https://emailjs.com
2. Set up account credentials
3. Add JavaScript integration

**Option 4: Custom Backend** (Most control)
1. Create Node.js/Express backend
2. Set up email service (SendGrid, AWS SES, etc.)
3. Connect form to backend API

---

## Deployment Checklist Summary

### Content
- [ ] Team members updated
- [ ] Project information finalized
- [ ] Publications list complete
- [ ] News items added
- [ ] All contact information verified

### Media
- [ ] All logos in place
- [ ] All photos optimized and uploaded
- [ ] Videos compressed (if included)
- [ ] Audio files included (if applicable)

### Technical
- [ ] Environment variables configured
- [ ] Static export builds without errors
- [ ] All links tested
- [ ] Mobile responsiveness verified
- [ ] Performance acceptable

### Deployment
- [ ] Server/hosting selected
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Files uploaded
- [ ] Testing complete

### Post-Launch
- [ ] DNS verified working
- [ ] Google Search Console set up
- [ ] Analytics configured (optional)
- [ ] Backups established
- [ ] Monitoring set up

---

## Questions?

For technical questions about the website:
- Contact: Dr. Sasan Matinfar (sasan.matinfar@tum.de)
- Documentation: See README.md for technical details

For content questions:
- Coordinate with project team members
- Refer to project documentation and funding agreement

---

**Last Updated**: 2026-06-22
**Status**: Ready for systematic content replacement
