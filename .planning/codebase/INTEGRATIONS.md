# External Integrations

**Analysis Date:** 2026-04-03

## APIs & External Services

**Not Detected:**
- No API integrations currently configured
- Application is frontend-only (no backend API calls)
- No third-party API clients (Stripe, OpenAI, etc.)
- No AI model integrations configured

## Data Storage

**Databases:**
- Not applicable - Application is static/frontend-only
- No database connections configured
- No ORM/query builders present

**File Storage:**
- Local filesystem only - Static assets in `public/` directory (if created)
- No cloud storage integrations (S3, Azure Blob, etc.)

**Caching:**
- None configured - Next.js default caching behavior for static/dynamic routes
- No Redis or external cache services

## Authentication & Identity

**Auth Provider:**
- None - Application requires no authentication
- Entirely public/marketing website
- No login, user accounts, or protected routes

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service (Sentry, Rollbar, etc.)
- No error boundary implementations visible
- Development relies on browser console and Next.js dev overlay

**Logs:**
- Console logging only
- No structured logging service (Datadog, CloudWatch, etc.)
- Vercel platform provides build/deployment logs

**Analytics:**
- Not detected - No analytics tracking configured
- No Google Analytics, Mixpanel, or similar integrations
- Future consideration: analytics could be added via `next/script` with `@next/third-parties`

## CI/CD & Deployment

**Hosting:**
- Vercel platform (vanta-studio.vercel.app)
  - Project: `vanta-studio`
  - Auto-deploys from git (likely GitHub)
  - Edge caching and CDN included

**CI Pipeline:**
- Vercel-managed CI/CD
- Automatic preview deployments on pull requests
- Production deployments on main branch commits
- Build validation includes linting and type checking (via `npm run lint`)

**Git Integration:**
- GitHub repository: `github.com/btaxacher/vanta-studio`
- Vercel connected for automatic deployments

## Environment Configuration

**Required env vars:**
- None - Application is completely static
- All configuration is compile-time or hardcoded

**Optional env vars for future use:**
- `NEXT_PUBLIC_ANALYTICS_ID` - If analytics added
- `NEXT_PUBLIC_API_URL` - If backend API integration added

**Secrets location:**
- No secrets management needed currently
- When needed: use Vercel's Environment Variables panel (not in git)

## Webhooks & Callbacks

**Incoming:**
- None configured

**Outgoing:**
- None configured

## Third-Party Services at Content Level

**Icon Library:**
- Lucide React SVGs - Embedded, no external requests

**Fonts:**
- Custom fonts likely from `app/fonts/` directory
- No external CDN dependencies detected
- Consider: migrate to `next/font` for automatic optimization

**Images & Assets:**
- Static assets served from application
- Next.js `next/image` component can be used for optimization

## Future Integration Points

**Potential integrations** (if feature requirements expand):

1. **Contact Form Backend:**
   - Email service (Resend, SendGrid, etc.)
   - Form submission handler in `app/api/contact/route.ts`

2. **Analytics:**
   - Google Analytics via `next/script` and `@next/third-parties`
   - Vercel Web Analytics (simple, privacy-friendly)

3. **CMS:**
   - Contentful, Sanity, or Prismic for dynamic content management
   - API route handler for content fetching

4. **Payment Processing:**
   - Stripe for package upgrades or additional services
   - Webhook handler for payment events

5. **Database:**
   - PostgreSQL (Supabase) for storing inquiries, user data, or content
   - Prisma as ORM for type-safe queries

---

*Integration audit: 2026-04-03*
