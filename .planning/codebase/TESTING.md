# Testing Patterns

**Analysis Date:** 2025-04-03

## Test Framework

**Status:** No testing framework configured

**Detection:**
- No `jest.config.*`, `vitest.config.*`, or Playwright config files present
- No test scripts in `package.json` (only `dev`, `build`, `start`, `lint`)
- No test dependencies in `package.json` (no `jest`, `vitest`, `@testing-library`, `playwright`)
- No test files found in codebase (`.test.ts`, `.spec.ts` not present in `app/`, `components/`, `hooks/`, `lib/`)

**Run Commands:**
Not configured. Recommended setup:
```bash
npm run test              # Would run test suite (not yet defined)
npm run test:watch       # Would run in watch mode
npm run test:coverage    # Would generate coverage report
```

## Test File Organization

**Current Status:** No test files present

**Recommended Structure:**
- **Location:** Co-located with components
  - `components/ui/button.tsx` → `components/ui/button.test.tsx`
  - `hooks/use-media-query.ts` → `hooks/use-media-query.test.ts`
  - `lib/utils.ts` → `lib/utils.test.ts`

**Naming Convention:**
- `.test.ts` or `.test.tsx` suffix for test files
- Keep test files in same directory as source

## Test Framework Recommendation

**Suggested Setup (for this codebase):**

For a Next.js 14 frontend project with:
- React components
- Framer Motion animations
- Tailwind styling
- Three.js rendering

**Recommended combination:**
1. **Vitest** (faster than Jest for this stack)
   ```bash
   npm install -D vitest @vitest/ui happy-dom
   ```

2. **React Testing Library** (for component testing)
   ```bash
   npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

3. **Playwright** (for E2E testing, animations, visual regression)
   ```bash
   npm install -D @playwright/test
   ```

## Testing Patterns to Implement

### Unit Tests

**For utilities (`lib/utils.ts`):**
```typescript
import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges tailwind classes correctly', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('combines class values', () => {
    expect(cn('text-white', 'bg-black')).toContain('text-white');
  });
});
```

**For hooks (`hooks/use-media-query.ts`):**
```typescript
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from '@/hooks/use-media-query';

describe('useMediaQuery', () => {
  it('returns initial false value', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });

  it('updates on media query change', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 640px)'));
    // Mock matchMedia change and verify state update
  });
});
```

**For components:**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Button variant="solid">Solid Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[#3ca2fa]');
  });
});
```

### Integration Tests

**For page navigation and layout:**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders all major sections', () => {
    render(<Home />);
    expect(screen.getByText(/Geschäftsprozesse/)).toBeInTheDocument();
    // Check for sections
  });
});
```

**For form interactions:**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import KontaktPage from '@/app/kontakt/page';

describe('Kontakt form', () => {
  it('submits form with user input', async () => {
    const user = userEvent.setup();
    render(<KontaktPage />);
    
    const nameInput = screen.getByPlaceholderText('Ihr Name');
    await user.type(nameInput, 'Test User');
    expect(nameInput).toHaveValue('Test User');
  });
});
```

### E2E Tests

**Critical user flows with Playwright:**
```typescript
import { test, expect } from '@playwright/test';

test('user can navigate to contact page and fill form', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Erstberatung sichern');
  
  await expect(page).toHaveURL('/kontakt');
  
  // Fill form
  await page.fill('input[placeholder="Ihr Name"]', 'John Doe');
  await page.fill('input[placeholder="ihre@email.de"]', 'john@example.com');
  
  // Verify form submission button exists
  await expect(page.locator('button:has-text("NACHRICHT SENDEN")')).toBeVisible();
});

test('hero section animations load', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Wait for animation elements
  await expect(page.locator('text=Geschäftsprozesse')).toBeVisible();
  
  // Check scroll indicator appears
  await expect(page.locator('svg:has(path[d*="ChevronDown"])')).toBeVisible();
});
```

## Mocking Patterns

**Mock third-party libraries:**
```typescript
import { vi } from 'vitest';

// Mock Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock Three.js (heavy rendering library)
vi.mock('three', () => ({
  WebGLRenderer: vi.fn(() => ({
    setSize: vi.fn(),
    render: vi.fn(),
    setClearColor: vi.fn(),
    domElement: document.createElement('canvas'),
  })),
  Scene: vi.fn(),
  PerspectiveCamera: vi.fn(),
  // ... other mocks
}));

// Mock dynamic imports
vi.mock('next/dynamic', () => ({
  default: vi.fn((loader) => {
    const Component = vi.fn(() => <div>Mocked Component</div>);
    Component.displayName = 'DynamicComponent';
    return Component;
  }),
}));
```

**Mock hooks:**
```typescript
import { vi } from 'vitest';

// Mock window.matchMedia for useMediaQuery
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

## What to Test

**Priority Areas:**

1. **Utilities** (highest priority):
   - `lib/utils.ts` - `cn()` merge logic
   - Input validation and transformations

2. **Hooks** (medium priority):
   - `useMediaQuery()` - responsive behavior
   - Any custom hooks for state management

3. **Components** (medium priority):
   - Reusable UI components: `Button`, `FlipCard`, `Label`, `Switch`
   - Section layouts for visual regression

4. **Pages** (low priority for unit, high for E2E):
   - Navigation and routing
   - Form submissions
   - Critical user flows

## What NOT to Test

**Skip testing:**
- Complex Three.js/WebGL rendering (`glsl-hills.tsx`) - requires visual regression testing or snapshot tests
- CSS/Tailwind styling details (test classes exist, not exact pixels)
- Framer Motion animations (test DOM presence, not animation timing)
- Simple wrapper components (`SubpageLayout`) - test integration instead

## Coverage Requirements

**Recommended Targets:**
- Utilities: 100% coverage required
- Hooks: 80%+ coverage
- Components: 70%+ coverage (focus on logic, not render details)
- Pages: 60%+ coverage (E2E tests preferred)

**View Coverage:**
```bash
# After setting up test framework
npm run test:coverage
# Generates coverage report in ./coverage directory
# View with: open coverage/lcov-report/index.html
```

## Test Configuration Starter

**`vitest.config.ts`:**
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'vitest.setup.ts',
        '.next/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

**`vitest.setup.ts`:**
```typescript
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => cleanup());

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

**`playwright.config.ts`:**
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Current Testing Gaps

**Critical Gaps:**
- No unit test framework configured
- No test files for utilities (`cn()` merging logic untested)
- No hook tests (especially `useMediaQuery` edge cases)
- No component tests for interaction state (e.g., `FlipCard` flip logic, `OrbitingSkills` hover)
- No form validation tests (contact form `onSubmit` currently does nothing)
- No E2E tests for critical flows (navigation, form submission)

**Recommendations for Next Phase:**
1. Set up Vitest with React Testing Library
2. Add tests for utilities first (100% coverage)
3. Add tests for custom hooks (80%+ coverage)
4. Add E2E tests for critical user flows with Playwright
5. Establish CI pipeline to run tests on every commit

---

*Testing analysis: 2025-04-03*
