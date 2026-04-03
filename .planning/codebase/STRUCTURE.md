# Codebase Structure

**Analysis Date:** 2025-04-03

## Directory Layout

```
TXC-Systems/
├── app/                          # Next.js App Router routes
│   ├── layout.tsx                # Root layout with global styles
│   ├── page.tsx                  # Home page (/)
│   ├── kontakt/
│   │   └── page.tsx              # Contact page
│   ├── leistungen/
│   │   ├── page.tsx              # Services overview
│   │   ├── automate/
│   │   │   └── page.tsx          # AI & Automation service detail
│   │   ├── scale/
│   │   │   └── page.tsx          # Custom Software service detail
│   │   └── enterprise/
│   │       └── page.tsx          # Cloud & Consulting service detail
│   ├── ueber-uns/
│   │   └── page.tsx              # About page
│   ├── use-cases/
│   │   └── page.tsx              # Use cases showcase
│   └── globals.css               # Global styles and CSS imports
│
├── components/                   # Reusable React components
│   ├── sections/                 # Page section components
│   │   ├── HeroSection.tsx       # Hero with GLSL background
│   │   ├── ServicesSection.tsx   # Services cards grid
│   │   ├── UseCasesSection.tsx   # Use cases showcase
│   │   ├── ProcessSection.tsx    # Process/workflow visualization
│   │   ├── StackSection.tsx      # Technology stack display
│   │   ├── PricingSectionWrapper.tsx  # Pricing packages
│   │   └── FooterSection.tsx     # Footer with links
│   │
│   ├── ui/                       # UI components and animated elements
│   │   ├── tubelight-navbar.tsx  # Navbar with glow effect
│   │   ├── flip-card.tsx         # 3D flip animation card
│   │   ├── spotlight-card.tsx    # Glowing card container
│   │   ├── glsl-hills.tsx        # Three.js GLSL procedural hills
│   │   ├── pulse-beams.tsx       # Animated beam effects
│   │   ├── orbiting-skills.tsx   # Circular orbiting animation
│   │   ├── animated-glowing-search-bar.tsx  # Search component
│   │   ├── animated-state-icons.tsx  # Icon animation
│   │   ├── neon-button.tsx       # Button with neon glow
│   │   ├── button.tsx            # Base button component
│   │   ├── label.tsx             # Form label (from Radix)
│   │   ├── switch.tsx            # Toggle switch (from Radix)
│   │   ├── hover-footer.tsx      # Footer interactive element
│   │   └── pricing-section.tsx   # Pricing table component
│   │
│   └── layout/
│       └── SubpageLayout.tsx     # Reusable layout for subpages
│
├── lib/
│   └── utils.ts                  # Tailwind cn() helper function
│
├── hooks/
│   └── use-media-query.ts        # Media query React hook
│
├── 21stdevcomponents/            # External component reference/templates
│   └── prompts.txt               # Design system prompts
│
├── .next/                        # Next.js build output (generated)
├── .git/                         # Git repository
├── public/                       # Static assets (if needed)
│
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── .eslintrc.json                # ESLint configuration
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Lockfile
│
├── README.md                     # Project documentation
├── HANDOFF.md                    # Session handoff notes
├── CLAUDE.md                     # Claude development guidelines
└── .planning/codebase/           # Codebase analysis documents
    ├── ARCHITECTURE.md           # Architecture overview
    └── STRUCTURE.md              # This file
```

## Directory Purposes

**app/**
- Purpose: All Next.js routes and page templates
- Contains: Layout wrappers, page entry points, metadata configuration
- Key files: `layout.tsx` (root), `page.tsx` (home), service pages under `leistungen/`
- Pattern: One `page.tsx` per route, optional `layout.tsx` for route-specific wrappers

**components/sections/**
- Purpose: Large, reusable visual sections that make up a page
- Contains: HeroSection, ServicesSection, ProcessSection, etc. — each with ~100-250 lines
- Key files: All `*Section.tsx` files
- Pattern: Import data, animate with Framer Motion, map over data arrays, delegate to UI components

**components/ui/**
- Purpose: Atomic and composite UI components with animations and interactivity
- Contains: Buttons, cards, animated effects (3D, glow, orbiting), form elements
- Key files: `tubelight-navbar.tsx`, `flip-card.tsx`, `glsl-hills.tsx`, `pulse-beams.tsx`, `orbiting-skills.tsx`
- Pattern: Accept props for data/styling, manage internal state, export as named functions

**components/layout/**
- Purpose: Reusable layout templates
- Contains: SubpageLayout (navbar + footer + padding wrapper)
- Key files: `SubpageLayout.tsx`
- Pattern: Accept children prop, wrap with consistent structure

**lib/**
- Purpose: Utility functions and helpers
- Contains: Tailwind CSS merge helper (`cn`)
- Key files: `utils.ts`
- Pattern: Pure functions, no state or side effects

**hooks/**
- Purpose: Custom React hooks
- Contains: Media query detection
- Key files: `use-media-query.ts`
- Pattern: Return computed values, use useEffect for subscriptions

**21stdevcomponents/**
- Purpose: External design system reference
- Contains: Prompt templates for component design
- Not code — reference documentation

## Key File Locations

**Entry Points:**
- `app/page.tsx` - Home/landing page (composes all major sections)
- `app/layout.tsx` - Root layout with global metadata and styling
- `app/leistungen/page.tsx` - Services overview page
- `app/leistungen/[service]/page.tsx` - Individual service detail pages

**Configuration:**
- `next.config.mjs` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript with `@/*` path alias pointing to project root
- `tailwind.config.ts` - Tailwind with custom colors (`vanta-blue`, `vanta-purple`, `vanta-cyan`) and fonts
- `postcss.config.mjs` - PostCSS setup for Tailwind
- `.eslintrc.json` - ESLint configuration
- `package.json` - Dependencies and scripts (dev, build, start, lint)

**Core Logic:**
- `components/sections/` - All page content sections
- `components/ui/tubelight-navbar.tsx` - Navigation (used on all pages)
- `components/ui/glsl-hills.tsx` - 3D background (hero section)
- `lib/utils.ts` - Tailwind classname merging

**Styling:**
- `app/globals.css` - Global CSS imports and font definitions
- `tailwind.config.ts` - Design tokens and theme extensions
- `components/ui/*` - Inline Tailwind utility classes

**Utilities:**
- `lib/utils.ts` - `cn()` function for conditional Tailwind classes
- `hooks/use-media-query.ts` - Responsive breakpoint detection

## Naming Conventions

**Files:**
- Components: PascalCase (`HeroSection.tsx`, `FlipCard.tsx`, `TubelightNavbar.tsx`)
- Utilities: camelCase (`utils.ts`, `use-media-query.ts`)
- Pages: lowercase (`page.tsx`, `layout.tsx`)
- Directories: lowercase with hyphens for multi-word (`components/sections/`, `components/ui/`)

**Directories:**
- Feature/domain grouping: `sections/`, `ui/`, `layout/`
- Route structure mirrors feature hierarchy: `app/leistungen/automate/`, `app/leistungen/scale/`

**Functions & Components:**
- Exported components: PascalCase (`HeroSection`, `FlipCard`)
- Hooks: camelCase with `use` prefix (`useMediaQuery`)
- Utilities: camelCase (`cn`)
- Constants in components: UPPER_SNAKE_CASE or camelCase arrays (`services`, `navItems`)

## Where to Add New Code

**New Feature (Multi-Section Page):**
- Primary code: `app/new-feature/page.tsx` (imports sections)
- Sections: `components/sections/NewFeatureSection.tsx` (or multiple sections)
- Layout: Use `SubpageLayout` wrapper from `components/layout/SubpageLayout.tsx`

**New Component/Module:**
- Animation components: `components/ui/[component-name].tsx`
- Section-specific components: `components/sections/[section-name].tsx`
- Layout wrappers: `components/layout/[layout-name].tsx`

**New Animation or Interactive Element:**
- Place in `components/ui/` (lowercase with hyphens: `animated-feature-name.tsx`)
- Use Framer Motion for animations (`motion.div`, `motion.span`, etc.)
- Accept color/styling props for reusability

**Utilities:**
- Shared helpers: `lib/utils.ts` (extend if single file stays <200 lines)
- Custom hooks: `hooks/[hook-name].ts` (one file per hook)

**New Section for Existing Page:**
- Create `components/sections/[NewSection].tsx`
- Import and add to page in `app/[route]/page.tsx`
- Follow pattern: data array → animate title → map over data → render components

## Special Directories

**Next.js Generated:**
- `.next/` - Build artifacts and compilation output (not committed, generated by `npm run build`)
- Committed: No
- Generated: Yes (by Next.js build process)

**Configuration:**
- `.vercel/` - Vercel deployment configuration
- Committed: Yes (lightweight config only)

**Version Control:**
- `.git/` - Git repository metadata

**Dependencies:**
- `node_modules/` - Installed packages (not committed, use package-lock.json to restore)
- Committed: No

## Path Alias Configuration

Single path alias configured in `tsconfig.json`:
```json
"paths": {
  "@/*": ["./*"]
}
```

This allows imports like `import { HeroSection } from "@/components/sections/HeroSection"` from anywhere in the project (instead of relative paths like `../../../components/sections/HeroSection`).

---

*Structure analysis: 2025-04-03*
