# Codebase Concerns

**Analysis Date:** 2026-04-03

## Tech Debt

**Form Validation Not Implemented:**
- Issue: Contact form in `app/kontakt/page.tsx` has no client-side or server-side validation. Form submit is prevented but data is not validated or submitted.
- Files: `app/kontakt/page.tsx` (lines 36-82)
- Impact: Form cannot be submitted, no error messages, no integration with backend
- Fix approach: Add form state management (React Hook Form or Zod), implement validation, create API endpoint to handle submissions

**Missing RSS Client Directive:**
- Issue: `app/page.tsx` uses `"use client"` but could be optimized to server-render sections and reduce JS bundle
- Files: `app/page.tsx` (line 1)
- Impact: Unnecessary client-side hydration, larger JavaScript bundle
- Fix approach: Move non-interactive sections (layout, static content) to server components. Keep only interactive sections as client components.

**All Pages Marked as Client Components:**
- Issue: Every page and interactive component uses `"use client"`, even those without client-side interactivity
- Files: `app/kontakt/page.tsx`, `app/ueber-uns/page.tsx`, `app/leistungen/**/*.tsx`, etc.
- Impact: Larger JS bundle, slower First Contentful Paint (FCP), higher memory usage
- Fix approach: Audit each page and component. Move layout, static text, and images to Server Components. Client directive only on components with event handlers/hooks.

## Test Coverage Gaps

**No Tests Exist:**
- What's not tested: All components, utilities, and page logic lack unit/integration/E2E tests
- Files: All TypeScript files in `components/` and `app/` have no corresponding test files
- Risk: Refactoring animations or UI logic may break production without warning. Build passes with undetected regressions.
- Priority: High — should add tests before scaling features

**No Test Framework Configured:**
- Issue: No Jest, Vitest, or Playwright configured in `package.json`
- Impact: Cannot verify component behavior, animations, or user flows
- Fix approach: Install testing framework (Vitest recommended for Next.js), add unit tests for components, add E2E tests for critical flows

## Performance Bottlenecks

**Heavy Three.js Usage Without Optimization:**
- Problem: `components/ui/glsl-hills.tsx` creates a full WebGL context with complex shaders on every render
- Files: `components/ui/glsl-hills.tsx`
- Cause: No memo wrapper, no lazy loading, creates THREE scene on mount without resize handling
- Improvement path: Add React.memo, implement lazy loading with Suspense, add window resize listener to clean up properly

**Excessive Framer Motion Animations:**
- Problem: Multiple components use infinite animations (rotate, pulse, pulse animations) that run continuously
- Files: `components/ui/orbiting-skills.tsx` (lines 260-276), `components/ui/animated-state-icons.tsx` (lines 41-52), `components/ui/pulse-beams.tsx`
- Cause: Animations use `repeat: Infinity` without pausing on visibility change
- Improvement path: Implement `useInView` or Intersection Observer to pause animations when off-screen, reduce CPU usage

**OrbitingSkills Component Runs Continuous RAF Loop:**
- Problem: `components/ui/orbiting-skills.tsx` uses `requestAnimationFrame` in a loop updating state every frame
- Files: `components/ui/orbiting-skills.tsx` (lines 260-276)
- Cause: Polling state updates via `setTime(prevTime => prevTime + deltaTime)` triggers re-renders every 16ms
- Improvement path: Use CSS animations or Framer Motion's GPU-accelerated animations instead of RAF + state

**Large SVG Gradients Recalculated on Hover:**
- Problem: `components/ui/hover-footer.tsx` recalculates SVG mask position and gradient on every mouse move
- Files: `components/ui/hover-footer.tsx` (lines 30-40, 62-70)
- Cause: `onMouseMove` updates state directly, causing re-renders on every pixel movement
- Improvement path: Debounce or throttle mouse move events, use CSS filters instead of dynamic SVG gradients

## Fragile Areas

**SVG Gradient Coordinates Hardcoded:**
- Files: `components/ui/pulse-beams.tsx` (lines 40-65), `components/ui/hover-footer.tsx` (lines 42-71)
- Why fragile: SVG viewBox values (0 0 300 100) and path coordinates are tightly coupled. Changing viewBox breaks all paths.
- Safe modification: Extract viewBox dimensions and coordinates to constants, use relative positioning
- Test coverage: No tests for gradient rendering or coordinate calculation

**useMediaQuery Hook Dependency Array Issue:**
- Files: `hooks/use-media-query.ts` (line 14)
- Why fragile: Dependency array includes `matches`, creating infinite loop when media query changes
- Problem: Effect re-runs on every `matches` change, triggers new listener setup, breaks cleanup
- Safe modification: Remove `matches` from dependencies (only `[query]`), use closure to access current value
- Test coverage: No tests for media query hook behavior

**PricingSectionWrapper Confetti Positioning:**
- Files: `components/ui/pricing-section.tsx` (lines 44-62)
- Why fragile: Confetti position calculated from `switchRef.current.getBoundingClientRect()`. If switch unmounts or rerenders, ref may be null
- Problem: No null check before using rect values, coordinates assume window exists (SSR unsafe)
- Safe modification: Add null checks, use try-catch, defer positioning to useEffect
- Test coverage: No tests for confetti trigger or positioning

**FlipCard 3D Transform CSS:**
- Files: `components/ui/flip-card.tsx` (lines 25-27, 61)
- Why fragile: Hardcoded `backfaceVisibility: "hidden"` and `transform: "rotateY(180deg)"` via inline styles. CSS-in-JS serialization may fail in some browsers.
- Problem: No fallback, no browser compatibility check
- Safe modification: Move to Tailwind class-based styling where possible, add vendor prefixes via PostCSS
- Test coverage: No tests for flip behavior across browsers

## Security Considerations

**Form Data Not Validated or Encrypted:**
- Risk: Contact form accepts arbitrary input with no server validation, could inject scripts or spam
- Files: `app/kontakt/page.tsx` (form inputs)
- Current mitigation: None — form is non-functional (submit prevented but no submission logic)
- Recommendations: (1) Add Zod validation on client and server, (2) implement CSRF protection, (3) rate-limit submissions, (4) sanitize input before storage

**No Rate Limiting on Potential Endpoints:**
- Risk: If contact form endpoint is created, could be abused for spam or DDoS
- Files: No API routes created yet
- Current mitigation: None
- Recommendations: (1) Add rate limiting middleware, (2) implement CAPTCHA, (3) log submission attempts

**Hardcoded Brand Colors and API Keys Not in Env:**
- Risk: If third-party API keys are added (e.g., Stripe, SendGrid), hardcoding them is a security breach
- Files: All components use hardcoded hex colors (currently safe but pattern is dangerous)
- Current mitigation: None
- Recommendations: (1) Use environment variables for any secrets, (2) add `.env.local` to `.gitignore` (already done), (3) document required env vars

## Missing Critical Features

**Contact Form Non-Functional:**
- Problem: Form has no submit handler, validation, or backend integration
- Blocks: Cannot capture lead information, no customer contact possible
- Files: `app/kontakt/page.tsx`

**No Email Notifications:**
- Problem: No email service integrated (no Nodemailer, SendGrid, Resend, etc.)
- Blocks: Cannot notify business of new inquiries
- Impact: High — contact form is unusable without email integration

**No Analytics or Tracking:**
- Problem: No Google Analytics, Segment, or custom event tracking
- Blocks: Cannot measure conversion rates, user behavior, or ROI
- Impact: Medium — business cannot optimize landing page effectiveness

**No Content Management:**
- Problem: All copy is hardcoded in components/pages
- Blocks: Cannot update pricing, services, or process without code changes
- Impact: Medium — poor DX for content updates

## Scaling Limits

**Three.js Renderer Not Responsive:**
- Current capacity: Fixed 858x434 viewBox in `components/ui/glsl-hills.tsx`
- Limit: Mobile devices with different aspect ratios may see stretched or clipped rendering
- Scaling path: Implement responsive canvas sizing, detect device pixel ratio, adjust shader complexity for mobile

**No Image Optimization:**
- Current capacity: All images likely loaded at full resolution without optimization
- Limit: High-resolution images slow down page load on slow connections
- Scaling path: Use `next/image` for all images, implement srcSet and sizes attributes, add blur placeholders

**No Caching Strategy:**
- Current capacity: Every page load fetches all CSS, JS, fonts from origin
- Limit: Slow for users far from server, no CDN caching
- Scaling path: Enable Next.js static exports for Vercel, add revalidate times for dynamic pages

**No Database or Backend:**
- Current capacity: Purely static frontend
- Limit: Cannot store leads, cannot personalize, cannot scale to multi-tenant
- Scaling path: Add API routes, connect to Supabase or Vercel Postgres, implement authentication

## Dependencies at Risk

**Framer Motion v12.35.1:**
- Risk: Complex animation library with frequent breaking changes, large bundle size
- Impact: If updated, animations may break; on older browsers, may not work
- Migration plan: Lock to current minor version, test before major upgrades, consider using native CSS animations for simple cases

**Three.js v0.183.2:**
- Risk: Heavy dependency (700KB+), requires careful configuration
- Impact: Large JS bundle, may cause performance issues on low-end devices
- Migration plan: Consider lightweight alternatives (Babylon.js, Cesium.js), or use only for hero section

**canvas-confetti v1.9.4:**
- Risk: Older library (v1), may have unpatched security issues or bugs
- Impact: Confetti animations may fail, takes ~30KB of bundle
- Migration plan: Check for v2 updates, consider React confetti wrappers with better types

**@number-flow/react v0.6.0:**
- Risk: Small community, potential maintenance issues
- Impact: Number animations may break in future React versions
- Migration plan: Monitor GitHub issues, have fallback number display ready

## Hydration Risks

**All Pages Marked "use client":**
- Issue: Full client-side hydration required for entire app
- Risk: Mismatch between server-rendered and client-rendered HTML causes hydration errors
- Files: All `.tsx` page files
- Safe approach: Use Server Components for layout and static content, client components only for interactivity

## Browser Compatibility

**CSS Backface Visibility Not Vendor-Prefixed:**
- Files: `components/ui/flip-card.tsx` (inline style)
- Risk: Safari versions < 12 may not support `backfaceVisibility`
- Fix: Add `-webkit-` prefix or use Tailwind backface utilities

**WebGL Shader Code Hardcoded:**
- Files: `components/ui/glsl-hills.tsx`
- Risk: Complex GLSL shaders may fail on older GPUs or browsers without WebGL 2.0 support
- Fix: Add fallback canvas or static SVG, detect WebGL support before rendering

---

*Concerns audit: 2026-04-03*
