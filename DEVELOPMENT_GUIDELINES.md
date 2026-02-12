# Development Guidelines — Gently Pure

> A single reference for coding standards, UI/UX principles, security policies, and testing strategies. All developers and AI agents should consult this document throughout the development lifecycle.

**Project**: Gently Pure — Skincare Landing Page
**Stack**: React 19, TypeScript 5.6, Tailwind CSS 4, Vite 7, shadcn/ui
**Last Updated**: February 2026

---

## Table of Contents

- [UI/UX and Frontend](#uiux-and-frontend)
- [Code Quality and Best Practices](#code-quality-and-best-practices)
- [Security](#security)
- [Testing](#testing)

---

## UI/UX and Frontend

This section synthesizes principles from the **frontend-design**, **ui-ux-pro-max**, and **web-design-guidelines** skills. The Gently Pure project follows an earthy editorial design philosophy inspired by Kinfolk magazine and Aesop's retail aesthetic.

### Design Philosophy

The project is built as a "crafted" experience, not merely "assembled." Every design decision should reinforce the brand's identity: warmth, gentleness, and natural authenticity. When in doubt, ask: "Does this choice reinforce or dilute the design philosophy?"

### Typography System

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headlines | Fraunces (variable serif) | 400–700 | All `h1`–`h6` elements, hero text, section titles |
| Body / UI | Karla (humanist sans-serif) | 400–700 | Paragraphs, buttons, labels, navigation |

The base font size is **18px** (set on `body` in `index.css`). All spacing and sizing should use `rem` units to maintain proportional scaling. Headings are assigned `font-family: var(--font-display)` via the `@layer base` rule, so no manual font assignment is needed on heading elements.

### Color System

All colors use the **OKLCH** color space for perceptual uniformity. Custom brand tokens are defined in the `@theme inline` block of `client/src/index.css`.

| Token | OKLCH Value | Role |
|---|---|---|
| `--color-stone-bg` | `oklch(0.94 0.01 80)` | Page background alternative |
| `--color-espresso` | `oklch(0.25 0.03 55)` | Primary text, dark sections |
| `--color-sage` | `oklch(0.60 0.06 140)` | Active states, accent lines, primary |
| `--color-clay` | `oklch(0.80 0.05 65)` | Secondary accents, warm highlights |
| `--color-gold` | `oklch(0.72 0.07 75)` | CTAs, star ratings, accent |
| `--color-cream` | `oklch(0.96 0.01 85)` | Background, light surfaces |
| `--color-sage-light` | `oklch(0.92 0.03 140)` | Subtle green backgrounds |

When adding new colors, define them in the `@theme inline` block using OKLCH format. Always pair `bg-{color}` with an appropriate `text-{color}` to ensure contrast. Never hardcode hex or RGB values in component files.

### Layout Principles

The project favors **asymmetric layouts** over centered, grid-based compositions. Key principles include the following:

The hero section uses a split layout (text left, image right) with dramatic scale contrast. Product sections alternate image placement (left/right) to create visual rhythm. Generous whitespace is treated as an active design ingredient, not empty space. The `container` class auto-centers with responsive padding (16px mobile, 24px tablet, 32px desktop, max-width 1280px). For custom widths, use `max-w-*` with `mx-auto px-4` instead of the container class.

### Animation Guidelines

All scroll-triggered animations use the `.reveal` / `.visible` CSS class pattern managed by the `useScrollReveal` hook. The base transition is `0.7s` with `cubic-bezier(0.16, 1, 0.3, 1)` easing. Stagger delays are available via `.reveal-delay-1` through `.reveal-delay-4` (100ms increments). Hover effects should use `transition-all duration-300` for consistency. Smooth scrolling on hash-links uses a custom 900ms cubic ease-in-out via `useSmoothScroll`.

When adding new animations, prefer CSS transitions over JavaScript animation libraries for simple effects. Use Framer Motion only for complex orchestrated sequences. Never add animations that cannot be disabled for users who prefer reduced motion.

### Component Architecture

Components live in `client/src/components/`. Each section is self-contained with its own data, styles, and scroll-reveal logic. The composition order is defined in `client/src/pages/Home.tsx`.

When creating new components, follow these conventions. Use `useScrollReveal()` for scroll-triggered entrance animations. Add the `reveal` class to elements that should animate in. Use semantic HTML elements (`section`, `article`, `nav`, `footer`). Prefer shadcn/ui primitives from `@/components/ui/*` over custom implementations. Keep section data co-located within the component file unless shared across multiple components.

### Responsive Design

The project follows a mobile-first approach with these breakpoints:

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, hamburger nav, stacked layouts |
| Tablet | 640px–1023px | Two columns where appropriate, expanded nav |
| Desktop | 1024px+ | Full asymmetric layouts, max-width 1280px |

The `useMobile` hook returns a boolean for programmatic breakpoint detection. The mobile navigation uses a slide-out drawer with body scroll lock.

### Accessibility Standards

All interactive elements must maintain visible focus rings (enforced by the `outline-ring/50` base rule). Buttons must have descriptive text or `aria-label`. Images must have meaningful `alt` attributes. Color contrast must meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text). The FAQ accordion uses proper `aria-expanded` and `aria-controls` attributes.

### Visual Assets

There are three tiers of visual assets used in this project. AI-generated images (via `generate_image`) are reserved for visually prominent areas such as the hero, product showcases, and before/after gallery. Unsplash images from parametric memory are used for less prominent areas. Search-sourced images are a last resort. All images are served from external CDN URLs — never store images in the project directory.

---

## Code Quality and Best Practices

This section synthesizes principles from the **clean-code** and **code-reviewer** skills.

### Naming Conventions

Use intention-revealing names throughout the codebase. Component files use PascalCase (`HeroSection.tsx`). Hook files use camelCase with the `use` prefix (`useScrollReveal.ts`). CSS custom properties use kebab-case with semantic prefixes (`--color-sage`, `--font-display`). Avoid abbreviations unless universally understood (`btn` is acceptable, `cmpnt` is not).

### Function Design

Functions should do one thing and do it well. Keep functions under 20 lines where possible. Limit function arguments to 2 or fewer — use an options object for 3 or more parameters. Avoid side effects in render functions. All state updates and navigation must be wrapped in `useEffect`, never called directly in the render phase.

### Component Structure

Follow the Newspaper Metaphor: high-level concepts at the top of the file, implementation details at the bottom. A typical component file should be organized as follows: imports, then type definitions, then constants and data, then the component function, and finally helper functions.

### State Management

Stabilize references used as query inputs or effect dependencies. Use `useState` for values initialized once. Use `useMemo` for derived values. Use `useCallback` for event handlers passed to child components. Never create new objects or arrays inline as effect dependencies — this causes infinite re-render loops.

### Error Handling

Use the `ErrorBoundary` component (already in the project) to catch rendering errors gracefully. Display user-friendly error states rather than blank screens. Log errors to the console with sufficient context for debugging. Never expose internal error details to end users.

### Code Review Checklist

Before submitting any change, verify the following:

| Category | Check |
|---|---|
| **Naming** | Are all names searchable and intention-revealing? |
| **Functions** | Is each function under 20 lines and doing one thing? |
| **Components** | Does each component have a single responsibility? |
| **Styling** | Are colors using design tokens, not hardcoded values? |
| **Accessibility** | Do all interactive elements have focus states and labels? |
| **Responsiveness** | Does the layout work on mobile, tablet, and desktop? |
| **Performance** | Are expensive computations memoized? |
| **Types** | Are all props and state properly typed with TypeScript? |

### Common Pitfalls to Avoid

Nested anchor tags are a frequent issue — `<Link>` already renders an `<a>`, so never wrap it in another anchor. Every `<Select.Item>` must have a non-empty `value` prop. Use Sonner for toasts — do not add `react-toastify` or `@radix-ui/react-toast`. When using semantic color classes like `bg-background`, always pair with `text-foreground` since text color does not inherit automatically from the background semantic.

---

## Security

This section synthesizes principles from the **api-security-best-practices** and **find-bugs** skills. While this is currently a static frontend project, these guidelines apply if the project is upgraded to a full-stack application.

### Frontend Security

**Cross-Site Scripting (XSS) Prevention.** React's JSX automatically escapes rendered content, which provides baseline XSS protection. Never use `dangerouslySetInnerHTML` unless absolutely necessary, and always sanitize input with a library like DOMPurify first. Avoid injecting user-provided content into `href`, `src`, or `style` attributes without validation.

**Content Security Policy.** The `vercel.json` includes security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`). If upgrading to a full-stack app, add a `Content-Security-Policy` header that restricts script sources to trusted origins.

**Dependency Security.** Run `pnpm audit` regularly to check for known vulnerabilities in dependencies. Keep dependencies updated, especially security-critical packages. Review new dependencies before adding them — check download counts, maintenance status, and known issues.

### Input Validation (If Backend Added)

All user inputs must be validated using Zod schemas before processing. Use parameterized queries or an ORM (never string concatenation) for database operations. Validate and sanitize all request parameters, headers, and body content. Implement request size limits to prevent resource exhaustion.

### Authentication and Authorization (If Backend Added)

Use JWT tokens with short expiration times (1 hour for access tokens). Implement refresh tokens stored in the database for long-lived sessions. Never store sensitive data in JWT payloads. Use HTTPS exclusively — never transmit tokens over unencrypted connections. Implement role-based access control (RBAC) for protected operations.

### Rate Limiting (If Backend Added)

Implement rate limiting per user and per IP address. Set appropriate request quotas for each endpoint. Handle rate limit errors gracefully with clear error messages. Monitor for suspicious activity patterns.

### Security Review Checklist

| Category | Check |
|---|---|
| **XSS** | No `dangerouslySetInnerHTML` without sanitization? |
| **Dependencies** | `pnpm audit` shows no critical vulnerabilities? |
| **Headers** | Security headers configured in `vercel.json`? |
| **Secrets** | No API keys or secrets hardcoded in source code? |
| **HTTPS** | All external resources loaded over HTTPS? |
| **Images** | All image URLs from trusted CDN domains? |

---

## Testing

This section synthesizes principles from the **e2e-testing-patterns** skill.

### Testing Strategy

The project currently has no automated tests. When adding tests, follow this priority order:

**Critical User Journeys** should be tested first. These include page load and hero section rendering, navigation (smooth scroll to all sections, mobile hamburger menu), product quick-view modal (open, close, navigate between products), testimonial slider (auto-rotation, manual navigation, pause on hover), FAQ accordion (expand, collapse, keyboard navigation), and newsletter form submission.

### E2E Testing with Playwright

When implementing E2E tests, use Playwright as the testing framework. Structure tests around user journeys, not individual components. Use stable selectors — prefer `data-testid` attributes over CSS classes or DOM structure. Implement test isolation so each test can run independently. Add retry logic for flaky network-dependent assertions.

### Test File Organization

```
tests/
  e2e/
    navigation.spec.ts      # Nav links, smooth scroll, mobile menu
    products.spec.ts         # Product cards, quick-view modal
    testimonials.spec.ts     # Slider rotation, controls
    faq.spec.ts              # Accordion expand/collapse
    newsletter.spec.ts       # Form validation, submission
    accessibility.spec.ts    # Focus management, ARIA, contrast
    responsive.spec.ts       # Mobile, tablet, desktop layouts
```

### Test Best Practices

Tests should follow the F.I.R.S.T. principles: Fast, Independent, Repeatable, Self-Validating, and Timely. Each test should set up its own state and not depend on other tests. Use `beforeEach` to navigate to the page fresh. Capture screenshots and traces on failure for debugging. Run tests in CI with parallelization for speed.

### Accessibility Testing

Include automated accessibility checks in the test suite using `@axe-core/playwright`. Test keyboard navigation through all interactive elements. Verify focus management in modals (trap focus inside, restore on close). Test screen reader announcements for dynamic content changes (slider, accordion).

### Visual Regression Testing

Consider adding visual regression tests for critical sections using Playwright's screenshot comparison. Capture baseline screenshots for the hero, products, and testimonials sections. Run comparisons on each pull request to catch unintended visual changes.

---

## Quick Reference

### File Locations

| Artifact | Path | Purpose |
|---|---|---|
| Design tokens | `client/src/index.css` | Colors, fonts, animations, spacing |
| Component library | `client/src/components/ui/` | shadcn/ui base components |
| Custom components | `client/src/components/` | Section and feature components |
| Custom hooks | `client/src/hooks/` | Scroll reveal, smooth scroll, mobile detection |
| Page composition | `client/src/pages/Home.tsx` | Section ordering and layout |
| Deployment config | `vercel.json` | Build, headers, rewrites |
| Design system docs | `DESIGN.md` | Full design system reference |

### Key Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Format with Prettier |
| `pnpm audit` | Check dependency vulnerabilities |
