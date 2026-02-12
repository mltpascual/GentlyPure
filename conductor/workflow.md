# Workflow — Gently Pure

## Development Methodology

The project follows an iterative, design-first approach. Each feature begins with a design decision (documented in `DESIGN.md`), followed by implementation, visual verification, and checkpoint creation. The workflow prioritizes visual quality and brand consistency over speed.

### Feature Development Cycle

1. **Design Decision**: Define the visual approach, referencing `DESIGN.md` for tokens and patterns
2. **Implementation**: Build the component with proper TypeScript types and accessibility
3. **Visual Verification**: Preview in the browser across breakpoints (mobile, tablet, desktop)
4. **Integration**: Add the component to `Home.tsx` in the correct section order
5. **Checkpoint**: Save a versioned checkpoint after successful verification

## Git Workflow

### Branch Strategy

| Branch | Purpose | Protection |
|---|---|---|
| `main` | Production-ready code | Protected, requires review |
| `feature/*` | New features and sections | Merge to main via PR |
| `fix/*` | Bug fixes and visual corrections | Merge to main via PR |
| `docs/*` | Documentation updates | Merge to main via PR |

### Commit Conventions

Follow the Conventional Commits specification:

| Prefix | Usage | Example |
|---|---|---|
| `feat:` | New feature or section | `feat: add brand story timeline with interactive pop-ups` |
| `fix:` | Bug fix or visual correction | `fix: correct nav indicator alignment on mobile` |
| `style:` | Visual/CSS changes only | `style: bump base font size to 18px` |
| `docs:` | Documentation changes | `docs: update DESIGN.md with comparison table section` |
| `refactor:` | Code restructuring, no behavior change | `refactor: extract smooth scroll into reusable hook` |
| `chore:` | Build, config, or dependency changes | `chore: add vercel.json deployment config` |

### Commit Message Format

```
<type>: <short description>

<optional body explaining why, not what>
```

Keep the subject line under 72 characters. Use the imperative mood ("add feature" not "added feature").

## Code Review Requirements

### Review Checklist

Before merging any change, verify the following:

| Category | Requirement |
|---|---|
| **Visual** | Matches the design system in `DESIGN.md` |
| **Responsive** | Works on mobile (< 640px), tablet (640–1023px), and desktop (1024px+) |
| **Accessibility** | Focus states, ARIA labels, keyboard navigation |
| **Typography** | Correct font family (Fraunces for headings, Karla for body) |
| **Colors** | Uses design tokens, not hardcoded values |
| **Animation** | Uses `.reveal` pattern or Framer Motion, consistent easing |
| **Performance** | No unnecessary re-renders, memoized where needed |
| **TypeScript** | No `any` types, proper interface definitions |

## Testing Requirements

### Current State

The project does not yet have automated tests. When tests are added, follow these priorities:

| Priority | Test Type | Coverage Target |
|---|---|---|
| 1 | E2E (Playwright) | Critical user journeys: navigation, modal, slider |
| 2 | Visual Regression | Hero, products, testimonials screenshots |
| 3 | Accessibility | axe-core automated checks on all sections |
| 4 | Unit Tests | Custom hooks (useScrollReveal, useSmoothScroll) |

### Manual Testing Protocol

Until automated tests are in place, manually verify:

1. All navigation links scroll smoothly to correct sections
2. Mobile hamburger menu opens, closes, and navigates correctly
3. Product modal opens, displays correct data, and closes via all methods (X, overlay, Escape)
4. Testimonial slider auto-rotates, pauses on hover, and responds to controls
5. FAQ accordion expands and collapses correctly
6. Timeline pop-ups open, close, and switch between milestones
7. Back to Top button appears after scrolling and returns to top
8. Newsletter form validates email input
9. All images load from CDN without broken links

## Quality Gates

### Pre-Commit

| Check | Command | Requirement |
|---|---|---|
| TypeScript | `pnpm check` | Zero errors |
| Formatting | `pnpm format` | All files formatted |
| Build | `pnpm build` | Successful build |

### Pre-Deploy

| Check | Requirement |
|---|---|
| Visual review | All sections verified in browser |
| Mobile testing | Responsive layout confirmed |
| Performance | Lighthouse score > 90 |
| Accessibility | No critical WCAG violations |
| Image URLs | All images load from CDN |

## Deployment Procedure

### Vercel Deployment

1. Push code to the `main` branch on GitHub
2. Vercel auto-detects the `vercel.json` configuration
3. Build runs: `cd client && pnpm install && pnpm run build`
4. Output directory: `client/dist`
5. SPA rewrites and security headers applied automatically

### Rollback

If a deployment introduces issues, use Vercel's instant rollback feature to revert to the previous deployment. Alternatively, revert the Git commit and push to trigger a new deployment.

## File Organization Conventions

| Directory | Convention | Example |
|---|---|---|
| `client/src/components/` | PascalCase, one component per file | `HeroSection.tsx` |
| `client/src/hooks/` | camelCase with `use` prefix | `useScrollReveal.ts` |
| `client/src/pages/` | PascalCase, page-level components | `Home.tsx` |
| `client/src/components/ui/` | shadcn/ui components, lowercase | `button.tsx` |
| `conductor/` | kebab-case markdown files | `product-guidelines.md` |
| `C4-Documentation/` | kebab-case with `c4-` prefix | `c4-context.md` |
