# Gently Pure

A premium landing page for **Gently Pure**, a skincare brand designed for sensitive skin. Built with React 19, Tailwind CSS 4, and Vite, featuring an earthy editorial design inspired by Kinfolk magazine and Aesop's retail aesthetic.

> Gentle by nature, pure by design.

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Key Features

The landing page includes 14 distinct sections, each crafted with scroll-reveal animations, responsive layouts, and interactive elements:

| Section | Description |
|---|---|
| **Hero** | Asymmetric split layout with oversized serif typography and product photography |
| **Products** | Two product showcases (Moisturizer & Cleanser) with hover effects and quick-view modals |
| **Comparison Table** | Side-by-side feature breakdown of both products with bundle CTA |
| **Ingredients** | Key ingredient cards with hover lift animations |
| **Daily Routine** | Three-step skincare guide with numbered steps |
| **Results Gallery** | Tabbed before/after transformation stories with customer data |
| **Philosophy** | Brand values grid with founder pull quote |
| **Brand Timeline** | Interactive milestone timeline (2019–2025) with expandable detail pop-ups |
| **Testimonials** | Auto-rotating slider with dot navigation, arrows, and progress bar |
| **FAQ** | Three-category accordion (Products, Shipping, Skin Care) |
| **Newsletter** | Email signup CTA with pill-shaped input |
| **Instagram Grid** | Edge-to-edge social proof gallery with hover overlays |
| **Footer** | Multi-column footer with navigation links |
| **Back to Top** | Floating scroll-to-top button |

Additional features include a **mobile hamburger menu** with animated slide-out drawer, **active nav indicators** via IntersectionObserver, **smooth scroll navigation** on all hash-links, and **product quick-view modals** with full detail lightboxes.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2 | UI framework |
| **TypeScript** | 5.6 | Type safety |
| **Vite** | 7.1 | Build tool and dev server |
| **Tailwind CSS** | 4.1 | Utility-first styling |
| **shadcn/ui** | Latest | Base UI components (Radix primitives) |
| **Framer Motion** | 12.x | Animation library |
| **Lucide React** | 0.453 | Icon library |
| **Wouter** | 3.3 | Client-side routing |
| **Sonner** | 2.0 | Toast notifications |
| **pnpm** | 10.4 | Package manager |

### Typography

The site uses **Fraunces** (variable serif) for display headlines and **Karla** (humanist sans-serif) for body text, loaded via Google Fonts CDN.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** 22 or higher
- **pnpm** 10 or higher (install via `npm install -g pnpm`)
- **Git** for version control

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mltpascual/GentlyPure.git
cd GentlyPure
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000). Vite provides hot module replacement (HMR) for instant feedback during development.

### 4. Build for Production

```bash
pnpm build
```

This runs `vite build` to generate optimized static assets in `dist/public/`, followed by an esbuild step for the Express server in `dist/index.js`.

### 5. Preview the Production Build

```bash
pnpm preview
```

Or run the Express server directly:

```bash
pnpm start
```

---

## Project Structure

```
gently-pure/
├── client/                         # Frontend source code
│   ├── index.html                  # HTML entry point (Google Fonts loaded here)
│   ├── public/                     # Static assets served at root
│   └── src/
│       ├── App.tsx                 # Routes and top-level layout
│       ├── main.tsx                # React entry point
│       ├── index.css               # Design tokens, custom properties, animations
│       ├── components/
│       │   ├── Navbar.tsx          # Fixed nav with active section tracking
│       │   ├── HeroSection.tsx     # Asymmetric hero with product imagery
│       │   ├── ProductsSection.tsx # Product showcases with quick-view triggers
│       │   ├── ProductModal.tsx    # Full-screen product detail lightbox
│       │   ├── ComparisonSection.tsx # Product comparison table
│       │   ├── IngredientsSection.tsx # Ingredient cards
│       │   ├── RoutineSection.tsx  # Three-step skincare routine
│       │   ├── ResultsSection.tsx  # Before/After gallery
│       │   ├── PhilosophySection.tsx # Brand values
│       │   ├── BrandTimeline.tsx   # Interactive milestone timeline
│       │   ├── TestimonialsSection.tsx # Auto-rotating testimonial slider
│       │   ├── FaqSection.tsx      # FAQ accordion
│       │   ├── NewsletterSection.tsx # Email signup CTA
│       │   ├── InstagramSection.tsx # Social proof grid
│       │   ├── Footer.tsx          # Multi-column footer
│       │   ├── BackToTop.tsx       # Floating scroll-to-top
│       │   └── ui/                 # shadcn/ui base components
│       ├── contexts/
│       │   └── ThemeContext.tsx     # Light/dark theme provider
│       ├── hooks/
│       │   ├── useScrollReveal.ts  # IntersectionObserver scroll animations
│       │   ├── useSmoothScroll.ts  # Custom smooth scroll utility
│       │   ├── useMobile.tsx       # Mobile breakpoint detection
│       │   ├── useComposition.ts   # Input composition handling
│       │   └── usePersistFn.ts     # Persistent function reference
│       ├── lib/
│       │   └── utils.ts            # Tailwind merge utility (cn helper)
│       └── pages/
│           ├── Home.tsx            # Landing page compositor
│           └── NotFound.tsx        # 404 page
├── server/
│   └── index.ts                    # Express server for production static serving
├── shared/
│   └── const.ts                    # Shared constants
├── vercel.json                     # Vercel deployment configuration
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
├── DESIGN.md                       # Comprehensive design system documentation
├── README.md                       # This file
├── DEVELOPMENT_GUIDELINES.md       # Coding standards, security, testing
├── .env.example                    # Environment variable template
├── conductor/                      # Project context artifacts
│   ├── index.md                    # Navigation hub for all context docs
│   ├── product.md                  # Product vision and goals
│   ├── product-guidelines.md       # Brand voice and communication standards
│   ├── tech-stack.md               # Technology choices and dependencies
│   ├── workflow.md                 # Development practices and quality gates
│   └── code_styleguides/
│       └── typescript.md           # TypeScript/React coding conventions
└── C4-Documentation/               # C4 architecture documentation
    ├── c4-context.md               # System context (personas, external systems)
    ├── c4-container.md             # Container diagram (SPA + infrastructure)
    └── c4-component.md             # Component relationships and dependencies
```

---

## Architecture

### Request Lifecycle (Development)

When running `pnpm dev`, Vite serves the application directly with HMR:

```
Browser → Vite Dev Server (port 3000) → React SPA → Client-side Routing (Wouter)
```

### Request Lifecycle (Production)

In production, the Express server serves the pre-built static files:

```
Browser → Express Server → Static Files (dist/public/) → index.html (SPA fallback)
```

### Component Architecture

The landing page follows a **section-based composition pattern**. Each section is a self-contained React component with its own data, styles, and animations. The `Home.tsx` page composes all sections in order:

```
Navbar → Hero → Products → Comparison → Ingredients → Routine → Results →
Philosophy → Timeline → Testimonials → FAQ → Newsletter → Instagram → Footer
```

### Custom Hooks

| Hook | Purpose |
|---|---|
| `useScrollReveal` | Attaches IntersectionObserver to a container ref, adding `.visible` class to `.reveal` children when they enter the viewport |
| `useSmoothScroll` | Returns a `scrollToSection(id)` function that smoothly scrolls to any element by ID with navbar offset compensation |
| `useMobile` | Returns a boolean indicating if the viewport is below the mobile breakpoint |

### Styling Architecture

All design tokens are defined as CSS custom properties in `client/src/index.css` using the OKLCH color space. Tailwind CSS 4's `@theme inline` block maps these tokens to utility classes. Custom brand colors (`espresso`, `sage`, `clay`, `gold`, `cream`, `stone-bg`, `sage-light`) are available as Tailwind utilities throughout the project.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Vite dev server with HMR on port 3000 |
| `pnpm build` | Build optimized static assets for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm start` | Run the Express production server |
| `pnpm check` | Run TypeScript type checking (no emit) |
| `pnpm format` | Format all files with Prettier |

---

## Deployment

### Vercel (Recommended)

This project is pre-configured for Vercel deployment. A `vercel.json` file is included with the correct build settings.

**Option A: Deploy via GitHub Integration**

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect the Vite framework and apply settings from `vercel.json`
4. Click **Deploy**

**Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the project root
vercel

# Deploy to production
vercel --prod
```

**Vercel Configuration (`vercel.json`):**

| Setting | Value |
|---|---|
| Framework | Vite |
| Build Command | `pnpm run build` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install` |
| Rewrites | All routes → `/index.html` (SPA fallback) |

### Other Platforms

Since this is a static site, it can be deployed to any static hosting provider. After running `pnpm build`, the `dist/public/` directory contains all the files needed:

**Netlify:**
```bash
# netlify.toml
[build]
  command = "pnpm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages:**
```bash
pnpm build
# Upload contents of dist/public/ to your GitHub Pages branch
```

**Any Static Host:**
```bash
pnpm build
# Upload the dist/public/ directory to your hosting provider
```

---

## Documentation

This project includes a comprehensive documentation suite for AI agent handoff and team onboarding:

| Document | Path | Purpose |
|---|---|---|
| Design System | [`DESIGN.md`](./DESIGN.md) | Visual tokens, typography, color palette, component styles |
| Dev Guidelines | [`DEVELOPMENT_GUIDELINES.md`](./DEVELOPMENT_GUIDELINES.md) | Coding standards, security, testing strategies |
| Product Context | [`conductor/product.md`](./conductor/product.md) | Product vision, features, roadmap |
| Brand Guidelines | [`conductor/product-guidelines.md`](./conductor/product-guidelines.md) | Brand voice, tone, terminology |
| Tech Stack | [`conductor/tech-stack.md`](./conductor/tech-stack.md) | Technology choices and dependencies |
| Workflow | [`conductor/workflow.md`](./conductor/workflow.md) | Git workflow, review checklist, deployment |
| Architecture | [`C4-Documentation/c4-context.md`](./C4-Documentation/c4-context.md) | C4 system context with Mermaid diagrams |
| TypeScript Guide | [`conductor/code_styleguides/typescript.md`](./conductor/code_styleguides/typescript.md) | TypeScript/React coding conventions |

---

## Design System

The complete design system is documented in [`DESIGN.md`](./DESIGN.md). Key highlights:

### Color Palette

| Color | OKLCH | Hex | Usage |
|---|---|---|---|
| Warm Stone | `oklch(0.96 0.01 85)` | `#F5F1EA` | Page background |
| Deep Espresso | `oklch(0.25 0.03 55)` | `#3B2E20` | Text, headings, dark sections |
| Sage Olive | `oklch(0.60 0.06 140)` | `#6B8F5E` | Active states, accent lines |
| Muted Gold | `oklch(0.72 0.07 75)` | `#B89B5E` | CTAs, star ratings |
| Warm Clay | `oklch(0.80 0.05 65)` | `#C4A882` | Secondary accents |

### Typography

**Fraunces** (variable serif) for headlines — warm, organic, handcrafted character. **Karla** (humanist sans) for body text — clean, friendly, approachable. Base font size is **18px** for improved readability.

### Animation

All sections use scroll-triggered reveal animations (`0.7s`, cubic-bezier easing) with staggered delays. Smooth scrolling on all hash-links uses a custom 900ms cubic ease-in-out. Hover effects include scale, shadow, and translate transitions.

---

## Customization

### Changing Colors

Edit the CSS custom properties in `client/src/index.css` under the `@theme inline` block and `:root` selector. All colors use the OKLCH color space.

### Changing Fonts

1. Update the Google Fonts link in `client/index.html`
2. Update `--font-display` and `--font-body` in `client/src/index.css`

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Use `useScrollReveal()` for scroll animations
3. Import and add the component to `client/src/pages/Home.tsx`
4. Add a nav link in `client/src/components/Navbar.tsx` if needed

### Modifying Product Data

Product information is defined inline within `ProductsSection.tsx` and `ComparisonSection.tsx`. Update the data objects directly in those files.

---

## Troubleshooting

### Dev server won't start

Ensure port 3000 is not in use. Vite will automatically find the next available port, but you can also specify one:

```bash
pnpm dev -- --port 3001
```

### Fonts not loading

Check that the Google Fonts link in `client/index.html` is correct and that your network allows connections to `fonts.googleapis.com` and `fonts.gstatic.com`.

### Build warnings about chunk size

The production build may show a warning about chunk size exceeding 500 kB. This is expected for a single-page application with many components. For optimization, consider adding code splitting with `React.lazy()` and dynamic imports.

### Images not displaying

All images are served from external CDN URLs. Ensure your network allows connections to the image hosting domains. If deploying behind a corporate firewall, you may need to whitelist these domains.

### TypeScript errors

Run the type checker to identify issues:

```bash
pnpm check
```

### Styles not applying

If Tailwind classes aren't working after changes, try restarting the dev server. Tailwind CSS 4 with the Vite plugin handles hot reloading, but occasionally a restart is needed after modifying `index.css`.

---

## License

MIT

---

*Built with care by Manus AI — February 2026*
