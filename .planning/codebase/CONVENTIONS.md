# Coding Conventions

**Analysis Date:** 2025-04-03

## Naming Patterns

**Files:**
- PascalCase for React components: `HeroSection.tsx`, `FlipCard.tsx`, `OrbitingSkills.tsx`
- kebab-case for utility files and hooks: `use-media-query.ts`, `utils.ts`, `glsl-hills.tsx`
- kebab-case for sections: `hero-section.tsx`
- Index files not used; components exported directly from their files

**Directories:**
- Feature-based structure: `components/sections/`, `components/ui/`, `components/layout/`, `hooks/`, `lib/`
- PascalCase for section components: `sections/HeroSection.tsx`
- lowercase for utility directories: `lib/`, `hooks/`

**Functions:**
- camelCase for all function names and React components
- Export main component as `default` or named export with PascalCase
- Memoized components use `React.forwardRef` for refs: `React.forwardRef<HTMLButtonElement, ButtonProps>()`
- Export custom hooks with `use` prefix: `useMediaQuery()`, `useHovered()`

**Variables:**
- camelCase for local variables and parameters
- UPPER_SNAKE_CASE for constants (used minimally, prefer semantic names)
- Boolean variables prefix with `is`, `has`, `should`: `isFlipped`, `isHovered`, `isPaused`
- Data constants in PascalCase: `skillsConfig`, `services`, `stats`

**Types:**
- Interface names use PascalCase with `Props` suffix: `ButtonProps`, `FlipCardProps`, `SubpageLayoutProps`
- Type definitions near component usage
- Record types use angle brackets: `Record<IconType, { component: () => React.JSX.Element; color: string }>`

## Code Style

**Formatting:**
- Prettier via `npm run lint` (configured in `tsconfig.json`)
- No explicit Prettier config file; uses Next.js defaults
- 2-space indentation (standard Next.js)
- Line wrapping at natural boundaries, especially for JSX props

**Linting:**
- ESLint configured with `extends: ["next/core-web-vitals", "next/typescript"]`
- Config: `.eslintrc.json` (minimal, extends Next.js presets)
- Run with: `npm run lint`
- No TypeScript errors enforced; `strict: true` in `tsconfig.json`

**TypeScript:**
- `strict: true` mode enabled
- Path alias configured: `@/*` → root directory
- Types explicitly defined for component props using `interface`
- No `any` types in application code; unused parameters ignored via React patterns

## Import Organization

**Order:**
1. React and Next.js imports: `import React from "react"`, `import dynamic from "next/dynamic"`
2. Third-party libraries: `import { motion } from "framer-motion"`, `import { ChevronDown } from "lucide-react"`
3. Local components and utilities: `import { HeroSection } from "@/components/sections/HeroSection"`
4. Conditional/dynamic imports: `const GLSLHills = dynamic(...)`

**Path Aliases:**
- `@/*` resolves to project root (`./*`)
- Consistently used for all local imports
- Example: `@/components/ui/button`, `@/lib/utils`, `@/hooks/use-media-query`

**Barrel Files:**
- Not used; components imported directly from files
- Sections imported individually: `import { HeroSection }`, `import { ServicesSection }`

## Error Handling

**Patterns:**
- No explicit error boundaries defined; relies on React default error handling
- Canvas/WebGL operations wrapped in `useEffect` with no error handling: `canvasRef.current!` with non-null assertion
- Form submissions prevent default but don't validate: `onSubmit={(e) => e.preventDefault()}`
- Dynamic imports don't handle errors: `dynamic(..., { ssr: false })`

**Best Practice to Follow:**
- Add try-catch in complex operations (e.g., canvas rendering, form submission)
- Provide fallback UI for failed dynamic imports
- Validate form inputs before processing

## Logging

**Framework:** No logging framework used
- No `console.log` in production code
- No observability/analytics integration currently
- Use standard `console` only for development debugging (should be removed)

## Comments

**When to Comment:**
- Function descriptions for exported APIs
- Complex algorithms (e.g., GLSL shader logic, Three.js setup)
- Non-obvious variable purposes
- Section dividers in longer files

**Documentation:**
- No JSDoc/TSDoc comments used
- Component purposes evident from names and props
- Complex Three.js shader commented inline with GLSL logic

**Example from codebase:**
```typescript
// Simple export without documentation
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Inline comments for complex logic
const Plane = {
  // ... GLSL shader implementation
  vertexShader: `...`, // Perlin noise + rotation transformation
};
```

## Component Design

**Size Guidelines:**
- Components typically 100-350 lines
- `HeroSection.tsx`: 98 lines
- `OrbitingSkills.tsx`: 347 lines
- `GLSLHills.tsx`: 222 lines

**Function Parameters:**
- Props passed via single object destructuring: `function FlipCard({ title, subtitle, description, features, color }: FlipCardProps)`
- Type annotations on props interface, not individual parameters
- Optional props not explicitly marked; interface defines all required

**Return Values:**
- All components return JSX.Element
- Use TypeScript inference for function return types
- No explicit return type annotations on component functions

**React Patterns:**
- All client components marked with `"use client"` directive
- `useState` for local state: `const [isFlipped, setIsFlipped] = useState(false)`
- `useEffect` for side effects and animations
- `memo()` used for expensive components: `memo(({ config, angle }: OrbitingSkillProps) => ...)`
- `dynamic()` for client-only imports: `const GLSLHills = dynamic(..., { ssr: false })`

## Module Design

**Exports:**
- Named exports for utilities: `export function cn(...)`
- Default exports for pages: `export default function Home()`
- Named exports for components: `export function HeroSection()`
- Mixed approach: components can have both default and named exports
- Example: `export { Button, buttonVariants }` and `export default function GLSLHills()`

**Props Interface Pattern:**
```typescript
interface ComponentProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
}

export function Component({ title, subtitle, description, features, color }: ComponentProps) {
  // Implementation
}
```

**Variant System:**
- Use `class-variance-authority` (CVA) for component variants
- Define variants object with style mappings: `buttonVariants = cva(..., { variants: { variant: {}, size: {} } })`
- Export both component and `variantsFunction`: `export { Button, buttonVariants }`

## Styling

**Framework:** Tailwind CSS v3
- Configured in `tailwind.config.ts`
- Colors extended with custom Vanta palette: `vanta-bg`, `vanta-blue`, `vanta-purple`, `vanta-cyan`
- Font families configured: `display` (Cormorant Garamond), `mono-dm` (DM Mono), `body` (Inter)
- Custom animations defined: `spin-slow`, `spin-slower`, `pulse-slow`

**Utility Usage:**
- Inline Tailwind classes in JSX: `className="px-6 py-3 rounded-lg bg-white/[0.04]"`
- Opacity colors via slash syntax: `bg-white/[0.04]`, `text-white/50`, `border-white/[0.08]`
- Gradient backgrounds via `bg-gradient-to-*`: `bg-gradient-to-r from-vanta-blue to-vanta-purple`

**Color System:**
- CSS variables for theme colors: `--background`, `--foreground`
- Vanta colors hard-coded as hex: `#3ca2fa` (blue), `#9333EA` (purple), `#06B6D4` (cyan)
- Opacity applied via Tailwind: `text-white/60` = `color: white with 60% opacity`

## Data Flow

**Constants & Configuration:**
- Array of objects for section data: `const services = [{ title, subtitle, description, features, color }, ...]`
- Configuration objects for component behavior: `const skillsConfig: SkillConfig[] = [...]`
- Placed near component definition for readability

**Props Pattern:**
- Pass arrays of data as single prop: `services.map(service => <FlipCard {...service} />)`
- Spread operator used to pass multiple props: `<FlipCard {...service} />`

## Animation Patterns

**Framer Motion:**
- Motion containers for section entry: `<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} />`
- Staggered animations with `delay` prop: `transition={{ duration: 0.8, delay: 0.2 }}`
- Viewport-triggered animations: `whileInView` instead of `animate`
- CSS transforms for complex 3D: `style={{ transformStyle: "preserve-3d" }}`

**Three.js Integration:**
- WebGL renderer initialized in `useEffect` with full setup
- Animation loop via `requestAnimationFrame()`
- Cleanup with `window.removeEventListener()` in effect cleanup function
- No error handling for renderer failures

---

*Convention analysis: 2025-04-03*
