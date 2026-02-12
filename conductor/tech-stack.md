# Tech Stack — Gently Pure

## Primary Technologies

| Category | Technology | Version | Purpose |
|---|---|---|---|
| Language | TypeScript | 5.6.3 | Type-safe JavaScript for all source code |
| UI Framework | React | 19.2.1 | Component-based UI rendering |
| Build Tool | Vite | 7.1.7 | Fast development server and production bundler |
| CSS Framework | Tailwind CSS | 4.1.14 | Utility-first styling with OKLCH color tokens |
| Component Library | shadcn/ui | Latest | Pre-built accessible UI primitives (Radix-based) |
| Animation | Framer Motion | 12.23.22 | Complex orchestrated animations |
| Routing | Wouter | 3.3.5 | Lightweight client-side routing |
| Package Manager | pnpm | 10.4.1 | Fast, disk-efficient dependency management |

## Key Dependencies

### UI and Interaction

| Package | Version | Purpose |
|---|---|---|
| `framer-motion` | 12.23.22 | Timeline pop-ups, mobile drawer, modal animations |
| `lucide-react` | 0.453.0 | Icon library (Leaf, Droplets, Sun, ArrowUp, etc.) |
| `class-variance-authority` | 0.7.1 | Component variant management for shadcn/ui |
| `clsx` | 2.1.1 | Conditional className composition |
| `tailwind-merge` | 3.3.1 | Intelligent Tailwind class merging |
| `sonner` | 2.0.7 | Toast notifications |

### Radix UI Primitives (via shadcn/ui)

The project uses Radix UI primitives for accessible interactive components including Accordion (FAQ section), Dialog (product modal), Tooltip, Tabs, and Separator.

### Development Tools

| Package | Version | Purpose |
|---|---|---|
| `@vitejs/plugin-react` | 5.0.4 | React Fast Refresh for Vite |
| `@tailwindcss/vite` | 4.1.3 | Tailwind CSS Vite integration |
| `@tailwindcss/typography` | 0.5.15 | Prose styling plugin |
| `tw-animate-css` | 1.4.0 | Animation utilities for Tailwind |
| `prettier` | 3.6.2 | Code formatting |
| `esbuild` | 0.25.0 | Server-side TypeScript bundling |

## Infrastructure

| Component | Technology | Notes |
|---|---|---|
| Hosting | Vercel | Static site deployment via `vercel.json` |
| CDN | Vercel Edge Network | Automatic with Vercel deployment |
| Analytics | Umami | Privacy-focused, self-hosted analytics |
| Image Hosting | External CDN | All images served from CDN URLs, not bundled |
| DNS | Configurable | Custom domain support via Vercel dashboard |

## Development Environment

| Tool | Version | Purpose |
|---|---|---|
| Node.js | 22.13.0 | JavaScript runtime |
| pnpm | 10.4.1 | Package management |
| TypeScript | 5.6.3 | Type checking |
| Vite | 7.1.7 | Dev server (port 3000) with HMR |

## Build Configuration

The project builds as a static site. The Vite build outputs to `dist/public/` which is served by Vercel or any static file server. The `vercel.json` configures SPA rewrites, security headers, and static asset caching.

| Command | Purpose |
|---|---|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Production build (Vite + esbuild) |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Prettier code formatting |

## Fonts (External)

| Font | Source | Weight Range | Usage |
|---|---|---|---|
| Fraunces | Google Fonts | 400–700 | Display headings, section titles |
| Karla | Google Fonts | 400–700 | Body text, UI elements, navigation |

Fonts are loaded via `<link>` tags in `client/index.html` with `font-display: swap` for performance.

## Future Technology Considerations

| Feature | Technology | When |
|---|---|---|
| E-commerce | Stripe + backend upgrade | Phase 2 |
| Authentication | Manus OAuth | Phase 3 |
| Database | PostgreSQL via Manus | Phase 3 |
| CMS / Blog | Markdown + MDX | Phase 4 |
