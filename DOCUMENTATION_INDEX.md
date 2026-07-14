# 📚 SYNERGIA WEBSITE - DOCUMENTATION INDEX

This is your complete guide to the Synergia research website project. All files are organized for easy navigation and understanding.

---

## 🚀 START HERE

### For Quick Start (5 minutes)
→ Read: **[GETTING_STARTED.md](./GETTING_STARTED.md)**
- What's been built
- How to run it immediately
- Next steps overview

### For Complete Overview
→ Read: **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)**
- Full project specifications
- What's been delivered
- Design highlights
- Content replacement checklist

---

## 📖 DOCUMENTATION FILES

### 1. **README.md** (Technical Documentation)
   - Complete project overview
   - Technology stack details
   - Project structure explanation
   - Installation & build instructions
   - Customization guidelines
   - Troubleshooting section
   
   **Use when:** Setting up development environment, understanding architecture

### 2. **GETTING_STARTED.md** (Quick Start Guide)
   - What's been delivered
   - Getting started in 3 steps
   - Next steps checklist
   - Ready to begin content replacement?
   
   **Use when:** First time viewing the project, want quick orientation

### 3. **PROJECT_SUMMARY.md** (Executive Summary)
   - All project specifications met
   - Design highlights
   - Feature overview
   - Content replacement checklist
   
   **Use when:** Reviewing what's been accomplished, planning next steps

### 4. **CONTENT_GUIDE.md** (Content Replacement Instructions)
   - Step-by-step content replacement (7 steps)
   - What to provide for each section
   - File specifications and formats
   - How to update each data file
   - Deployment instructions
   
   **Use when:** Systematically replacing placeholder content

### 5. **PLACEHOLDER_CHECKLIST.ts** (TODO Tracking)
   - Complete list of all placeholder items
   - Organized by category
   - Tracking status
   - Priority recommendations
   
   **Use when:** Tracking progress, finding specific TODOs to replace

---

## 🗂️ PROJECT STRUCTURE

```
Homepage/
│
├── 📄 Documentation Files (This Index)
│   ├── README.md                    ← Technical documentation
│   ├── GETTING_STARTED.md          ← Quick start guide
│   ├── PROJECT_SUMMARY.md          ← Executive summary
│   ├── CONTENT_GUIDE.md            ← Step-by-step content guide
│   ├── PLACEHOLDER_CHECKLIST.ts    ← TODO tracking
│   └── DOCUMENTATION_INDEX.md      ← This file
│
├── 📦 Configuration Files
│   ├── package.json                ← Dependencies and scripts
│   ├── tsconfig.json               ← TypeScript configuration
│   ├── next.config.js              ← Next.js configuration
│   ├── tailwind.config.ts          ← Tailwind CSS configuration
│   ├── postcss.config.js           ← PostCSS configuration
│   └── .gitignore                  ← Git ignore rules
│
├── 🚀 Setup Files
│   └── setup.sh                    ← Automated setup script
│
├── 📄 App Directory (10 Pages)
│   ├── layout.tsx                  ← Root layout (Header, Footer)
│   ├── page.tsx                    ← Home page
│   ├── globals.css                 ← Global styles
│   ├── project/page.tsx            ← Project overview page
│   ├── research/page.tsx           ← Research themes page
│   ├── infrastructure/page.tsx     ← Infrastructure page
│   ├── ambisonics-lab/page.tsx    ← Ambisonics lab page
│   ├── team/page.tsx               ← Team page
│   ├── collaborators/page.tsx      ← Collaborators page
│   ├── publications/page.tsx       ← Publications page
│   ├── news/page.tsx               ← News page
│   └── contact/page.tsx            ← Contact page
│
├── 🧩 Components Directory (8 Components)
│   ├── Header.tsx                  ← Navigation header
│   ├── Footer.tsx                  ← Site footer
│   └── sections/                   ← Home page sections
│       ├── Hero.tsx
│       ├── EcosystemOverview.tsx
│       ├── ResearchThemesPreview.tsx
│       ├── AmbisconicsLabHighlight.tsx
│       ├── LatestNews.tsx
│       └── CallToAction.tsx
│
├── 💾 Data Directory (6 Data Files)
│   ├── people.ts                   ← Team members (structure + placeholders)
│   ├── researchThemes.ts           ← 8 research areas
│   ├── infrastructure.ts           ← 6 research facilities
│   ├── collaborators.ts            ← Institutional partners
│   ├── publications.ts             ← Publications (structure + placeholders)
│   └── news.ts                     ← News items (structure + placeholders)
│
└── 📷 Public Directory (Assets)
    ├── logos/                      ← [TODO: Add institution logos]
    ├── placeholders/               ← Placeholder image directory
    └── images/
        ├── people/                 ← [TODO: Add profile photos]
        ├── infrastructure/         ← [TODO: Add facility photos]
        └── news/                   ← [TODO: Add news images]
```

---

## 📋 QUICK NAVIGATION BY TASK

### I want to...

**...run the website immediately**
1. Run: `npm install`
2. Run: `npm run dev`
3. Open: `http://localhost:3000`
→ Read: [README.md](./README.md) - Installation section

**...understand what's been built**
→ Read: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

**...get started quickly**
→ Read: [GETTING_STARTED.md](./GETTING_STARTED.md)

**...replace placeholder content**
→ Read: [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Step-by-step instructions

**...track what needs to be done**
→ Read: [PLACEHOLDER_CHECKLIST.ts](./PLACEHOLDER_CHECKLIST.ts)

**...understand the technical architecture**
→ Read: [README.md](./README.md) - Project Structure section

**...deploy to production**
→ Read: [README.md](./README.md) - Deployment section
→ Read: [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Step 7

**...make design changes**
→ Edit: `tailwind.config.ts` for colors and sizing
→ Edit: `app/globals.css` for global styles
→ Edit: Individual component files for component styles

**...add new pages**
→ Read: [README.md](./README.md) - Customization section

**...add new team members**
→ Edit: `data/people.ts` and follow the template

**...add new publications**
→ Edit: `data/publications.ts` and follow the template

**...add news items**
→ Edit: `data/news.ts` and follow the template

---

## 📊 FILE PURPOSES AT A GLANCE

| File | Purpose | When to Edit |
|------|---------|--------------|
| **app/page.tsx** | Home page content | Change hero, ecosystem, news preview |
| **app/project/page.tsx** | Project overview | Add scientific motivation, objectives |
| **app/research/page.tsx** | Research themes | Modify research area descriptions |
| **app/team/page.tsx** | Team directory | Add people from data/people.ts |
| **data/people.ts** | Team member data | Add/update team members |
| **data/publications.ts** | Publication data | Add/update publications |
| **data/news.ts** | News items | Add/update news |
| **data/infrastructure.ts** | Facility descriptions | Add/update facilities |
| **components/Header.tsx** | Navigation | Add/remove menu items |
| **tailwind.config.ts** | Colors and styles | Change color palette, spacing |
| **next.config.js** | Build settings | Change export settings, URLs |

---

## 🎯 CONTENT REPLACEMENT WORKFLOW

### The 7-Step Process

1. **Logos** → Provide logo files
2. **People** → Provide team member information
3. **Project Content** → Provide project details
4. **Infrastructure Media** → Provide photos/videos
5. **Publications** → Provide bibliography
6. **News** → Provide news items
7. **Deployment** → Set up production environment

**Read:** [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on each step.

---

## 💻 COMMON COMMANDS

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run type-check   # Check TypeScript

# Production
npm run build        # Build for export
npm run export       # Export to static files
npm start            # Start production server (if needed)

# Linting
npm run lint         # Run ESLint
```

---

## 📞 SUPPORT RESOURCES

### If you need to...

**Fix a build error**
→ See [README.md](./README.md) - Troubleshooting section

**Add a new feature**
→ See [README.md](./README.md) - Customization section

**Change the design**
→ See [tailwind.config.ts](./tailwind.config.ts) and `app/globals.css`

**Deploy the website**
→ See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Step 7
→ See [README.md](./README.md) - Deployment section

**Understand the data structure**
→ Open any file in `data/` directory - they have detailed comments

**Find a TODO item**
→ Search for "TODO" in the codebase
→ Or check [PLACEHOLDER_CHECKLIST.ts](./PLACEHOLDER_CHECKLIST.ts)

---

## ✅ VERIFICATION CHECKLIST

Before deploying, verify:

- [ ] Reviewed [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
- [ ] Ran `npm install && npm run dev` successfully
- [ ] Website loads on http://localhost:3000
- [ ] All pages are accessible
- [ ] Reviewed [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for replacement steps
- [ ] Understand the 7-step content replacement workflow
- [ ] Ready to provide materials for Step 1: Logos

---

## 📈 PROJECT PROGRESS

**Current Status:**
- ✅ Website skeleton: **COMPLETE** (100%)
- ✅ Design system: **COMPLETE** (100%)
- ✅ Components: **COMPLETE** (100%)
- ✅ Data structures: **COMPLETE** (100%)
- ⏳ Content replacement: **READY** (waiting for your materials)

**Next Phase:** Systematic content replacement following CONTENT_GUIDE.md

---

## 🎓 LEARNING THE CODEBASE

### For Beginners
1. Start with [GETTING_STARTED.md](./GETTING_STARTED.md)
2. Run the project locally
3. Review page files in `app/`
4. Look at data files in `data/`

### For Intermediate Users
1. Review component structure in `components/`
2. Understand the Next.js layout system
3. Learn Tailwind CSS configuration
4. Add new content to data files

### For Advanced Users
1. Study `next.config.js` for build settings
2. Review TypeScript interfaces in `data/` files
3. Customize components and styling
4. Set up custom deployment pipeline

---

## 🔗 EXTERNAL RESOURCES

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **TypeScript Documentation**: https://www.typescriptlang.org/docs
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **DFG Website**: https://www.dfg.de

---

## 📝 NOTES

- All placeholder content is marked with TODO comments
- Remove TODO comments as you replace content
- Keep the structure and naming conventions consistent
- Use the provided data interfaces as templates
- Test locally before deploying

---

## 🎉 YOU'RE READY!

Everything is set up and ready to go. The website is fully functional and waiting for your real content.

**Next Step:** Follow [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) to systematically replace placeholder content with real materials.

---

**Documentation Version:** 1.0  
**Last Updated:** 2026-06-22  
**Status:** Complete and Ready for Use

---

*Questions? Review the relevant documentation file above, or start with [GETTING_STARTED.md](./GETTING_STARTED.md).*
