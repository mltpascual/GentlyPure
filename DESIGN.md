# Design System: Gently Pure

**Project:** Gently Pure — Skincare for Sensitive Skin
**Design Movement:** Terrain — Earthy Editorial
**Inspiration:** Kinfolk magazine, Aesop retail, editorial beauty campaigns
**Last Updated:** February 2026

---

## 1. Visual Theme & Atmosphere

The Gently Pure design language is rooted in an **earthy editorial aesthetic** — warm, grounded, and intentionally restrained. The overall atmosphere evokes the feeling of flipping through a high-end lifestyle magazine: generous whitespace, oversized serif typography, and muted earth tones that communicate trust, calm, and craftsmanship.

The interface avoids the clinical sterility common in skincare brands, instead opting for a **warm, lived-in quality** that mirrors the brand's philosophy of gentle, natural care. Every design decision reinforces the idea that less is more — fewer ingredients, fewer distractions, fewer visual gimmicks.

**Mood Keywords:** Warm, Grounded, Editorial, Unhurried, Crafted, Organic, Serene

---

## 2. Color Palette & Roles

### Primary Brand Colors

| Color Name | OKLCH Value | Hex Approx. | Role |
|---|---|---|---|
| **Warm Stone** (Background) | `oklch(0.96 0.01 85)` | `#F5F1EA` | Page background — a warm off-white with subtle yellow undertone, never cold or sterile |
| **Deep Espresso** (Foreground) | `oklch(0.25 0.03 55)` | `#3B2E20` | Primary text and headings — a rich, dark brown that is softer than pure black |
| **Sage Olive** (Primary) | `oklch(0.60 0.06 140)` | `#6B8F5E` | Primary actions, active nav indicators, accent lines — a muted botanical green |
| **Warm Clay** | `oklch(0.80 0.05 65)` | `#C4A882` | Secondary accents, dividers, subtle backgrounds |
| **Muted Gold** (Accent) | `oklch(0.72 0.07 75)` | `#B89B5E` | CTAs, star ratings, highlight accents — warm and inviting without being flashy |
| **Soft Cream** | `oklch(0.96 0.01 85)` | `#F5F1EA` | Card backgrounds, light overlays, text on dark backgrounds |
| **Light Sage** | `oklch(0.92 0.03 140)` | `#D8E4D0` | Subtle tag backgrounds, hover states on light sections |

### Functional Color Assignments

- **Dark sections** (Testimonials): Use `espresso` background with `cream` text at varying opacities (90%, 70%, 45%) for hierarchy
- **Light sections** (Products, FAQ): Use `stone-bg` or `cream` backgrounds with `espresso` text
- **Interactive elements**: `sage` for active states, `gold` for primary CTAs
- **Borders & dividers**: `oklch(0.88 0.02 75)` — a warm, barely-visible separator

### Opacity System on Dark Backgrounds

| Opacity | Use Case |
|---|---|
| `cream/90` | Primary headings on dark |
| `cream/80` | Body text on dark |
| `cream/70` | Secondary text on dark |
| `cream/45` | Tertiary/meta text on dark |
| `cream/15` | Dividers on dark |
| `cream/10` | Subtle borders on dark |

---

## 3. Typography Rules

### Font Pairing

| Role | Font | Weight(s) | Character |
|---|---|---|---|
| **Display / Headlines** | Fraunces (Variable Serif) | 300 (Light), 400 (Regular) | Warm, organic, slightly quirky serifs with optical sizing. Evokes handcrafted quality. |
| **Body / UI** | Karla (Humanist Sans) | 400, 500, 600 | Clean and readable with a friendly, approachable character. Never cold or corporate. |

### Base Font Size

The global base font size is set to **18px** (bumped from the browser default of 16px) for improved readability. All `rem`-based sizes scale proportionally from this base.

### Typography Scale

Headlines use a fluid `clamp()` scale for responsive sizing:

| Element | Size | Weight | Style |
|---|---|---|---|
| Hero headline | `clamp(2.5rem, 6vw, 5rem)` | 400 | Normal, with italic on emphasis words |
| Section headline | `clamp(2rem, 4vw, 3.5rem)` | 400 | Normal, with italic `fontWeight: 300` on secondary lines |
| Subsection label | `0.75rem` (xs) | 500–600 | Uppercase, `letter-spacing: 0.25em` |
| Body text | `clamp(1rem, 1.2vw, 1.1rem)` | 400 | Normal, `line-height: 1.7` |
| Small/meta text | `0.75rem–0.875rem` | 400–500 | Normal |

### Typography Conventions

- **Section labels** always appear above headlines as uppercase, widely-tracked small text in `sage` or `muted` color
- **Italic** is reserved for emphasis words within headlines (e.g., "nature," "sensitive souls," "transformation")
- **Line breaks** in headlines are intentional — they create dramatic, staggered compositions
- **Gold horizontal rules** (`h-px w-12 bg-gradient-to-r from-gold to-transparent`) appear below section headers as signature dividers

---

## 4. Component Stylings

### Buttons

| Variant | Shape | Background | Text | Behavior |
|---|---|---|---|---|
| **Primary CTA** | Pill-shaped (`rounded-full`) | `espresso` | `cream`, uppercase, tracked `0.15em` | Hover: scale to 105%, subtle shadow lift |
| **Secondary CTA** | Pill-shaped (`rounded-full`) | `transparent` | `espresso`, uppercase, tracked `0.15em` | Border: `espresso`, Hover: fill `espresso`, text `cream` |
| **Ghost / Nav** | No border | `transparent` | `espresso/70` | Hover: `espresso` full opacity |
| **Shop Now (Nav)** | Pill-shaped (`rounded-full`) | `espresso` | `cream` | Fixed in navbar top-right |

### Cards / Containers

- **Product cards**: No visible border. Image fills top portion. Content below with generous padding (`p-6` to `p-8`). Hover: image scales to 105% with shadow transition and "Quick View" overlay.
- **Ingredient cards**: Transparent background. Gently rounded corners (`rounded-lg`, ~0.5rem). Hover: lift with shadow (`shadow-lg`) and translate up 4px.
- **FAQ items**: No background. Bottom border only (`border-b border-clay/30`). Expand/collapse with smooth height animation.
- **Timeline cards**: Subtle background on hover. Expandable with interactive pop-up detail panels containing quotes, stats, and highlights.
- **Comparison table**: Clean rows with alternating subtle backgrounds, check/cross icons for boolean features.

### Inputs / Forms

- **Email input**: Pill-shaped (`rounded-full`), `espresso` background, `cream` text, `cream/30` placeholder
- **Focus state**: Ring in `sage` color
- **Submit button**: Pill-shaped, `gold` background, `espresso` text

### Navigation

- **Desktop**: Horizontal top bar, fixed on scroll with `backdrop-blur-md` and semi-transparent background
- **Active indicator**: Small `sage` dot below the active nav link, animated with spring transition via IntersectionObserver
- **Mobile**: Hamburger icon (animated to X) triggers full-height slide-out drawer from right with staggered link animations and body scroll lock

### Modals / Overlays

- **Product Quick View**: Full-screen overlay with `bg-espresso/80` backdrop. Content card with two-column layout (image left, details right). Close via X, overlay click, or Escape key.
- **Timeline pop-ups**: Inline expansion below the milestone card with founder/team quote, 3-stat grid, and 3 highlight bullets. Only one open at a time.

---

## 5. Layout Principles

### Spacing System

The design uses generous, editorial-level spacing:

| Context | Vertical Padding | Horizontal Max-Width |
|---|---|---|
| Hero section | `py-20 lg:py-0` (full viewport height) | Split 45%/55% asymmetric |
| Content sections | `py-24 lg:py-32` | `max-w-[1400px]` centered |
| Between elements | `mb-16 lg:mb-20` for section headers | `px-6 lg:px-8` |
| Card gaps | `gap-8 lg:gap-12` | Varies by grid |

### Grid & Layout Patterns

- **Hero**: Asymmetric split — text left (45%), image right (55%). Text vertically centered.
- **Products**: Full-width alternating rows. Each product is a two-column layout (image/content) that flips direction.
- **Comparison**: Full-width table with product columns and feature rows, bundle CTA below.
- **Ingredients**: Left column image (40%), right column card grid (60%).
- **Routine**: Three numbered steps in a row with large step numbers.
- **Results**: Tabbed before/after gallery with customer stories and transformation stats.
- **Philosophy**: Brand values grid with pull quote and founder attribution.
- **Timeline**: Alternating left/right milestone cards (2019–2025) connected by a vertical center line with interactive pop-ups.
- **Testimonials**: Single centered slider with large italic quote, dot navigation, arrow controls, and progress bar.
- **FAQ**: Three-column category layout (Products, Shipping, Skin Care) on desktop, single column on mobile.
- **Newsletter**: Centered CTA with email input and subscribe button.
- **Instagram**: Edge-to-edge 5-column grid (no container padding), responsive to 2 columns on mobile.

### Whitespace Philosophy

Whitespace is treated as an **active design ingredient**, not empty space. Sections breathe with `py-24` to `py-32` vertical padding. Headlines are given room to land with `mb-16` to `mb-20` gaps before content. This unhurried pacing mirrors the brand's philosophy of gentle, intentional care.

---

## 6. Animation & Interaction

### Scroll Reveal

All sections use a custom `useScrollReveal` hook with IntersectionObserver:

- **Entry**: `opacity: 0` → `opacity: 1`, `translateY(24px)` → `translateY(0)`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` — a smooth, slightly bouncy deceleration
- **Duration**: `0.7s`
- **Stagger**: Child elements use `reveal-delay-1` through `reveal-delay-4` (100ms increments)

### Smooth Scrolling

All hash-link navigation uses a custom JS scroll utility (`useSmoothScroll` hook):

- **Duration**: 900ms
- **Easing**: Cubic ease-in-out
- **Offset**: Compensates for fixed navbar height (72px)
- **Applied to**: Navbar links (desktop and mobile), Hero CTAs, Footer links

### Hover Interactions

| Element | Hover Effect |
|---|---|
| Product images | Scale 105%, shadow lift, "Quick View" overlay fades in |
| Ingredient cards | Translate up 4px, shadow-lg appears |
| Buttons (primary) | Scale 105%, subtle shadow |
| Nav links | Opacity from 70% to 100% |
| Instagram grid items | Dark overlay with handle, caption, and like count |
| Timeline milestones | Background lightens, cursor pointer |
| Comparison table rows | Subtle background highlight |

### Testimonial Slider

- **Auto-rotation**: 5-second interval, pauses on hover
- **Transition**: 300ms fade + 30px horizontal slide (direction-aware)
- **Controls**: Dot navigation (active dot stretches to pill shape), left/right arrows, progress bar
- **Counter**: "01 / 03" format in bottom-right

### Back to Top

- **Trigger**: Appears after scrolling 500px
- **Animation**: Fade in with slight upward slide
- **Style**: Circular button, `espresso` background, `cream` arrow icon

---

## 7. Iconography

- **Icon library**: Lucide React
- **Icon style**: Thin stroke (strokeWidth 1.5–2), consistent with the editorial aesthetic
- **Icon sizing**: `h-4 w-4` for inline, `h-5 w-5` for cards, `h-6 w-6` for section features
- **Star ratings**: Filled gold (`fill-gold text-gold strokeWidth={0}`)
- **Navigation arrows**: `ChevronLeft`, `ChevronRight` in circular bordered containers
- **Feature checks**: `Check` (sage) and `X` (muted) for comparison table

---

## 8. Image Treatment

### Product Photography

- **Style**: Warm-toned, natural lighting, flat-lay or angled compositions
- **Background**: Warm stone/terracotta textures with botanical elements (dried flowers, wheat, herbs)
- **Treatment**: No filters, no heavy post-processing — authentic and editorial
- **Source**: AI-generated via image generation tools, hosted on CDN

### Before/After Gallery

- **Format**: Side-by-side split images within rounded containers
- **Labels**: "Before" / "After" badges in top corners
- **Context**: Accompanied by customer story with concern, duration, and product used

### Instagram Grid

- **Format**: Edge-to-edge, no gaps between images
- **Hover**: Dark overlay with Instagram-style metadata (handle, caption, likes)
- **Aspect ratio**: Square (1:1) via `aspect-square` class
- **Source**: AI-generated lifestyle photos

---

## 9. Responsive Behavior

| Breakpoint | Layout Adjustments |
|---|---|
| **Mobile** (< 640px) | Single column layouts, hamburger menu, stacked product cards, 2-column Instagram grid |
| **Tablet** (640–1024px) | Two-column grids, condensed spacing, side-by-side products |
| **Desktop** (> 1024px) | Full asymmetric layouts, 5-column Instagram grid, alternating timeline, three-column FAQ |

### Mobile-Specific Patterns

- Navbar collapses to hamburger with animated slide-out drawer (body scroll lock, overlay backdrop)
- Hero becomes stacked (text above, image below)
- Product cards stack vertically
- Comparison table scrolls horizontally on small screens
- Timeline becomes single-column with left-aligned dots
- FAQ categories stack vertically
- Testimonial slider maintains full functionality with touch-friendly controls

---

## 10. Page Section Order

The landing page sections flow in this intentional order:

| # | Section | Component | Purpose |
|---|---|---|---|
| 1 | Navigation | `Navbar.tsx` | Fixed top nav with active section tracking |
| 2 | Hero | `HeroSection.tsx` | Brand introduction with product imagery |
| 3 | Products | `ProductsSection.tsx` | Two product showcases with quick-view modals |
| 4 | Comparison | `ComparisonSection.tsx` | Side-by-side product feature table |
| 5 | Ingredients | `IngredientsSection.tsx` | Key ingredient cards with hover effects |
| 6 | Routine | `RoutineSection.tsx` | Three-step daily skincare guide |
| 7 | Results | `ResultsSection.tsx` | Before/After transformation gallery |
| 8 | Philosophy | `PhilosophySection.tsx` | Brand values with pull quote |
| 9 | Timeline | `BrandTimeline.tsx` | Interactive milestone timeline (2019–2025) |
| 10 | Testimonials | `TestimonialsSection.tsx` | Auto-rotating customer review slider |
| 11 | FAQ | `FaqSection.tsx` | Three-category accordion |
| 12 | Newsletter | `NewsletterSection.tsx` | Email signup CTA |
| 13 | Instagram | `InstagramSection.tsx` | Social proof photo grid |
| 14 | Footer | `Footer.tsx` | Multi-column footer with links |
| — | Back to Top | `BackToTop.tsx` | Floating scroll-to-top button |

---

## 11. File Architecture

```
gently-pure/
├── client/
│   ├── index.html                  — HTML entry point with Google Fonts
│   ├── public/                     — Static assets (served at root)
│   └── src/
│       ├── components/
│       │   ├── Navbar.tsx              — Fixed top nav with active section tracking
│       │   ├── HeroSection.tsx         — Asymmetric hero with product imagery
│       │   ├── ProductsSection.tsx     — Two product showcases with quick-view
│       │   ├── ProductModal.tsx        — Full-screen product detail lightbox
│       │   ├── ComparisonSection.tsx   — Side-by-side product comparison table
│       │   ├── IngredientsSection.tsx  — Ingredient cards with hover effects
│       │   ├── RoutineSection.tsx      — Three-step daily routine guide
│       │   ├── ResultsSection.tsx      — Before/After transformation gallery
│       │   ├── PhilosophySection.tsx   — Brand values with pull quote
│       │   ├── BrandTimeline.tsx       — Interactive milestone timeline with pop-ups
│       │   ├── TestimonialsSection.tsx — Auto-rotating testimonial slider
│       │   ├── FaqSection.tsx          — Three-category FAQ accordion
│       │   ├── NewsletterSection.tsx   — Email signup CTA
│       │   ├── InstagramSection.tsx    — Social proof photo grid
│       │   ├── Footer.tsx              — Multi-column footer with links
│       │   ├── BackToTop.tsx           — Floating scroll-to-top button
│       │   └── ui/                     — shadcn/ui base components
│       ├── contexts/
│       │   └── ThemeContext.tsx         — Light/dark theme provider
│       ├── hooks/
│       │   ├── useScrollReveal.ts      — IntersectionObserver scroll animation
│       │   ├── useSmoothScroll.ts      — Custom JS smooth scroll utility
│       │   ├── useMobile.tsx           — Mobile breakpoint detection
│       │   ├── useComposition.ts       — Input composition handling
│       │   └── usePersistFn.ts         — Persistent function reference
│       ├── lib/
│       │   └── utils.ts                — Tailwind merge utility
│       ├── pages/
│       │   ├── Home.tsx                — Page compositor for all sections
│       │   └── NotFound.tsx            — 404 page
│       ├── App.tsx                     — Routes & top-level layout
│       ├── main.tsx                    — React entry point
│       └── index.css                   — Design tokens, animations, base styles
├── server/
│   └── index.ts                    — Express server for production static serving
├── shared/
│   └── const.ts                    — Shared constants
├── vercel.json                     — Vercel deployment configuration
├── package.json                    — Dependencies and scripts
├── tsconfig.json                   — TypeScript configuration
├── vite.config.ts                  — Vite build configuration
├── DESIGN.md                       — This design system document
├── README.md                       — Project documentation
├── DEVELOPMENT_GUIDELINES.md       — Coding standards, security, testing
├── conductor/                      — Project context artifacts
│   ├── index.md                    — Navigation hub
│   ├── product.md                  — Product vision and goals
│   ├── product-guidelines.md       — Brand voice and communication
│   ├── tech-stack.md               — Technology choices
│   ├── workflow.md                 — Development practices
│   └── code_styleguides/
│       └── typescript.md           — TypeScript/React conventions
└── C4-Documentation/               — Architecture documentation
    ├── c4-context.md               — System context (personas, external systems)
    ├── c4-container.md             — Container diagram (SPA + infrastructure)
    └── c4-component.md             — Component relationships and dependencies
```

---

## 12. Design Principles Summary

1. **Warmth over sterility** — Every color, texture, and font choice should feel warm and human, never clinical
2. **Editorial restraint** — Let content breathe. When in doubt, add more whitespace, not more decoration
3. **Asymmetry with purpose** — Break grid symmetry intentionally to create visual interest and hierarchy
4. **Typography as hero** — Oversized Fraunces serifs are the primary visual element; imagery supports, not competes
5. **Gentle motion** — Animations should feel like a slow exhale, not a snap. Ease-out curves, 0.5–0.9s durations
6. **Consistency in restraint** — The same small set of colors, weights, and spacing values repeated throughout creates cohesion
7. **Pill-shaped interactions** — All buttons and inputs use `rounded-full` for a soft, approachable feel
8. **Progressive disclosure** — Timeline pop-ups, FAQ accordions, and product modals reveal detail on demand without overwhelming
