# Technology Stack

**Analysis Date:** 2026-04-03

## Languages

**Primary:**
- TypeScript 5.x - Application code and type definitions
- JavaScript (JSX/TSX) - React component logic

**Secondary:**
- CSS - Styling via Tailwind CSS
- HTML - Semantic markup in layout files

## Runtime

**Environment:**
- Node.js (implied by Next.js 14)
- Browser runtime for client-side React components

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 14.2.35 - Full-stack React framework with App Router
  - App Router (file-based routing in `app/` directory)
  - Server Components as default, Client Components with `'use client'` directive
  - Static generation and streaming

**UI & Components:**
- React 18.x - UI component library and rendering engine
- React DOM 18.x - DOM rendering for browser

**Styling:**
- Tailwind CSS 3.4.1 - Utility-first CSS framework
- PostCSS 8.x - CSS transformation pipeline

**Animation & Graphics:**
- Framer Motion 12.35.1 - React animation library for motion and transitions
- Three.js 0.183.2 - 3D graphics library (GLSL Hills animation in hero section)
- canvas-confetti 1.9.4 - Confetti animation effects

**UI Component Libraries:**
- Radix UI 2.x - Headless component primitives
  - @radix-ui/react-slot - Slot composition
  - @radix-ui/react-label - Form labels
  - @radix-ui/react-switch - Toggle switches
- Lucide React 0.577.0 - Icon library (700+ customizable SVG icons)
- class-variance-authority 0.7.1 - Type-safe component variants
- clsx 2.1.1 - Conditional class name utility
- tailwind-merge 3.5.0 - Merge Tailwind CSS classes with deduplication

**Advanced Number Input:**
- @number-flow/react 0.6.0 - Animated number counter component

## Build & Development

**Build Tool:**
- Next.js built-in build system (Webpack via turbopack in v14)

**Linting:**
- ESLint 8.x - JavaScript/TypeScript linting
  - Config: `next/core-web-vitals` and `next/typescript` rules

**Type Checking:**
- TypeScript 5.x - Strict mode enabled
  - Target: ES Next
  - Module resolution: bundler (for monorepos)

## Configuration Files

**TypeScript:**
- `tsconfig.json` - Compiler options with strict mode, path aliases (@/*)

**Next.js:**
- `next.config.mjs` - Minimal configuration (default settings)

**Styling:**
- `tailwind.config.ts - Custom theme with:
  - Custom color palette (vanta-bg, vanta-blue, vanta-purple, vanta-cyan)
  - Custom font families (Cormorant Garamond display, DM Mono, Inter body)
  - Custom animations (spin-slow, spin-slower, pulse-slow)
- `postcss.config.mjs` - PostCSS pipeline with Tailwind CSS

**Linting:**
- `.eslintrc.json` - ESLint configuration extending Next.js defaults

## Platform Requirements

**Development:**
- Node.js 18+ (inferred from Next.js 14 requirements)
- npm 7+
- Modern browser with ES2020+ support for development

**Production:**
- Vercel deployment platform (configured in `.vercel/project.json`)
- Edge Runtime support available
- Node.js runtime (default for Next.js)

## Key Dependencies Analysis

**Critical (Framework):**
- `next` 14.2.35 - Core framework, non-negotiable
- `react` 18.x - Required by Next.js
- `react-dom` 18.x - Required by Next.js

**UI/UX:**
- `framer-motion` 12.35.1 - Motion animations (critical for interactive sections)
- `three` 0.183.2 - 3D graphics (hero section animations)
- `lucide-react` 0.577.0 - Icon system throughout UI

**Styling/Layout:**
- `tailwindcss` 3.4.1 - Core styling framework
- `class-variance-authority` 0.7.1 - Component variant system for semantic components

**Utilities:**
- `clsx` + `tailwind-merge` - Essential for dynamic class composition
- `@radix-ui/react-*` - Primitive components for accessibility and composability

**Animation/Effects:**
- `canvas-confetti` 1.9.4 - Optional celebratory animations
- `@number-flow/react` 0.6.0 - Number animation for metrics/counters

## Environment Configuration

**Required env vars:**
- None hardcoded - Application is static/frontend-only (no backend secrets)

**Optional configurations:**
- `NEXT_PUBLIC_*` - Public environment variables (if added in future)

**Secrets location:**
- No `.env` file present - Application requires no backend integration currently

## Deployment Configuration

**Hosting:**
- Vercel (vanta-studio.vercel.app)
  - Project ID: `prj_EEmD8lhCessxN8lb7IXQF50JUl5E`
  - Organization: `team_by9YE92p8cCFkpAeLzy7vzl3`
  - Project Name: `vanta-studio`

**Build Output:**
- Next.js default standalone output
- Static files generated during build
- Dynamic routes rendered on-demand or static pre-rendered

## Scripts

```bash
npm run dev        # Start Next.js dev server on localhost:3000
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint and TypeScript checks
```

## Type Safety

**TypeScript Configuration:**
- Strict mode: enabled (`"strict": true`)
- No implicit any: enabled
- Path aliases: `@/*` maps to project root
- DOM types included for browser APIs
- Isolated modules: enabled for better build performance

---

*Stack analysis: 2026-04-03*
