# Architecture

**Analysis Date:** 2025-04-03

## Pattern Overview

**Overall:** Next.js App Router with Component-Driven Section Architecture

**Key Characteristics:**
- Client-side rendered pages composed of reusable section components
- Page-level composition over component scaffolding (pages import and arrange sections)
- Animation-first design philosophy using Framer Motion
- Minimal server-side logic (purely static/marketing site)
- Path-based routing with dynamic section imports

## Layers

**Routing Layer (App Router):**
- Purpose: Next.js 14 App Router handles URL-based navigation and page composition
- Location: `app/` directory with `layout.tsx` and multiple `page.tsx` files
- Contains: Route definitions, layout wrappers, page entry points
- Depends on: React, Next.js runtime
- Used by: Browser navigation, internal links

**Page Layer:**
- Purpose: Compose full page experiences by orchestrating sections and components
- Location: `app/*.tsx` and `app/*/page.tsx` files
- Contains: Page-level component imports, layout structure, metadata (via layout.tsx)
- Depends on: Section components, UI components
- Used by: Router layer

**Section Layer:**
- Purpose: Self-contained, reusable page sections (Hero, Services, Process, Stack, Pricing, Footer, UseCases)
- Location: `components/sections/` directory
- Contains: Large visual blocks with animation, data organization, grid layouts
- Depends on: UI components, animation libraries (Framer Motion)
- Used by: Page components

**UI Component Layer:**
- Purpose: Atomic and composite UI elements with animation and interactivity
- Location: `components/ui/` directory
- Contains: Buttons, cards, animated components (PulseBeams, OrbitingSkills, FlipCard, GlslHills, etc.)
- Depends on: Three.js (for 3D), Framer Motion (for animation), Lucide icons, Radix UI primitives
- Used by: Section components, pages

**Layout Components:**
- Purpose: Common layout wrappers for different page templates
- Location: `components/layout/SubpageLayout.tsx`
- Contains: Navigation, footer, padding/spacing
- Depends on: Navbar, FooterSection, TypeScript
- Used by: Subpages (leistungen/, kontakt/, etc.)

**Utilities & Hooks:**
- Purpose: Shared helper functions and React hooks
- Location: `lib/utils.ts`, `hooks/use-media-query.ts`
- Contains: Tailwind merging (cn), responsive media query hook
- Depends on: clsx, tailwind-merge, React
- Used by: Components throughout the codebase

## Data Flow

**Static Content Flow:**

1. **Page Request** → Browser requests a route (e.g., `/leistungen/automate`)
2. **Route Matching** → Next.js App Router matches the URL to `app/leistungen/automate/page.tsx`
3. **Layout Composition** → `layout.tsx` wraps the page with global styles and grain overlay
4. **Page Load** → Page component (e.g., AutomateServicePage) loads with SubpageLayout
5. **Section Rendering** → Page imports and renders section components in vertical sequence
6. **Component Instantiation** → Sections import UI components and iterate over data arrays
7. **Animation Initialization** → Framer Motion triggers on mount/scroll with `whileInView`
8. **Browser Render** → React renders to DOM, animations play on user interaction/scroll

**Navigation Flow:**

- Navbar (TubelightNavbar) sits at fixed top, persists across all pages
- Links in navbar use Next.js `<Link>` component for client-side navigation
- Anchor links (#leistungen, #technologie) trigger scroll behavior
- CTA buttons link to `/kontakt` or scroll to section

**State Management:**

- No global state management (Redux, Zustand, Context) — all state is local component state
- Component state: hover state (navbar activeIndex, FlipCard isFlipped), media query matches
- No data fetching — all content is hardcoded in component files (services array, stats array, etc.)

## Key Abstractions

**Section Component Pattern:**

Each section is a self-contained functional component with a specific visual role. Example pattern from `ServicesSection.tsx`:

```typescript
export function ServicesSection() {
  const services = [...] // local data
  const stats = [...]    // local data
  
  return (
    <section id="leistungen">
      <motion.div animate={{...}}>
        {/* Title */}
      </motion.div>
      <div className="grid">
        {services.map(service => <FlipCard {...service} />)}
      </div>
    </section>
  )
}
```

Pattern: data → render metadata → render grid of subcomponents

**Animated Card Component:**

FlipCard and GlowCard (spotlight-card) represent reusable "container with animation" pattern:

```typescript
// Props: title, subtitle, description, features, color
// State: isFlipped (FlipCard) or glow effect (GlowCard)
// Animation: Framer Motion transforms on interaction/mount
```

**Navbar Pattern:**

TubelightNavbar accepts configuration (items, logo, ctaButton) and manages internal activeIndex state. Reused across main page and SubpageLayout with different navigation targets.

**Three.js Integration:**

GLSLHills is a Three.js canvas component with GLSL shaders for procedural animation. Loaded dynamically with `next/dynamic` and `ssr: false` to avoid server-side rendering errors.

## Entry Points

**Root Page (Home):**
- Location: `app/page.tsx`
- Triggers: Navigation to `/` (root domain)
- Responsibilities: Import and arrange all major sections (Hero, Services, UseCases, Process, Stack, Pricing, Footer) into a single landing page

**Subpages:**
- Location: `app/leistungen/page.tsx`, `app/leistungen/[service]/page.tsx`, `app/kontakt/page.tsx`, `app/ueber-uns/page.tsx`, `app/use-cases/page.tsx`
- Triggers: Navigation to `/leistungen`, `/leistungen/automate`, `/kontakt`, etc.
- Responsibilities: Render service detail pages or info pages using SubpageLayout wrapper

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: On every page load (wraps all routes)
- Responsibilities: Set global metadata, inject grain overlay SVG, render children

## Error Handling

**Strategy:** No explicit error handling — this is a static marketing site with no server operations

**Patterns:**
- No try-catch blocks in components (no async operations at component level)
- No error boundaries defined
- Browser console errors only (TypeScript compilation catches type errors)

## Cross-Cutting Concerns

**Styling:** Tailwind CSS (utility-first) with custom color extensions (`vanta-blue`, `vanta-purple`, `vanta-cyan`)

**Animation:** Framer Motion (motion components) with spring/easing transitions; all interactive elements use `whileInView` for scroll-triggered animation

**Responsiveness:** Tailwind breakpoints (md, lg) applied directly in JSX; custom `useMediaQuery` hook for runtime media detection

**Icons:** Lucide React for icon library (ChevronDown, ArrowRight, Bot, Code, Cloud, etc.)

**Typography:** Custom font families in Tailwind config (`display`, `mono-dm`, `body`) imported via CSS

---

*Architecture analysis: 2025-04-03*
