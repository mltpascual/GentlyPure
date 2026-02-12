# TypeScript & React Style Guide — Gently Pure

## General Principles

Write code that reads like well-edited prose. Favor clarity over cleverness. Every function, component, and variable should reveal its intent through its name alone.

## Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | `HeroSection`, `ProductModal` |
| Hooks | camelCase with `use` prefix | `useScrollReveal`, `useSmoothScroll` |
| Utility functions | camelCase | `smoothScrollTo`, `cn` |
| Constants | UPPER_SNAKE_CASE or camelCase | `NAV_LINKS`, `products` |
| CSS variables | kebab-case with prefix | `--color-sage`, `--font-display` |
| File names (components) | PascalCase.tsx | `BrandTimeline.tsx` |
| File names (hooks) | camelCase.ts | `useScrollReveal.ts` |
| File names (utilities) | camelCase.ts | `utils.ts` |

## Component Structure

Organize component files in this order:

```typescript
// 1. Imports (external libraries first, then internal)
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Droplets } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// 2. Type definitions
interface Product {
  name: string;
  price: string;
  description: string;
}

// 3. Constants and static data
const products: Product[] = [
  { name: "Nourishing Moisturizer", price: "$38.00", description: "..." },
];

// 4. Component function
export default function ProductsSection() {
  // Hooks first
  const sectionRef = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Event handlers
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  // Render
  return (
    <section ref={sectionRef}>
      {/* JSX */}
    </section>
  );
}

// 5. Helper functions (if any)
```

## TypeScript Practices

Never use `any` — use `unknown` if the type is truly unknown, then narrow with type guards. Define interfaces for all component props and data structures. Use `const` assertions for static data arrays to get literal types. Prefer `interface` over `type` for object shapes (interfaces are extendable). Use union types for finite sets of values (`type Theme = "light" | "dark"`).

## React Patterns

### State Management

```typescript
// Good: Initialize once with useState
const [date] = useState(() => new Date());

// Good: Memoize complex derived values
const filteredProducts = useMemo(() => 
  products.filter(p => p.category === selected), 
  [selected]
);

// Bad: New object reference every render
const { data } = useQuery({ ids: [1, 2, 3] }); // Infinite loop!
```

### Event Handlers

```typescript
// Good: Inline for simple handlers
<button onClick={() => setOpen(true)}>Open</button>

// Good: Named function for complex logic
const handleSubmit = useCallback((e: React.FormEvent) => {
  e.preventDefault();
  // complex logic
}, [dependencies]);
```

### Refs and Effects

```typescript
// Good: Cleanup in useEffect
useEffect(() => {
  const observer = new IntersectionObserver(callback, options);
  elements.forEach(el => observer.observe(el));
  return () => observer.disconnect(); // Always cleanup
}, []);
```

## Styling Conventions

Use Tailwind utility classes as the primary styling method. Use the `cn()` utility from `@/lib/utils` for conditional classes. Never use inline `style` attributes except for dynamic values that cannot be expressed in Tailwind. Always use design tokens (`text-espresso`, `bg-cream`) instead of raw color values.

```typescript
// Good: Using cn() for conditional styles
<div className={cn(
  "px-6 py-4 transition-all duration-300",
  isActive && "bg-sage text-white",
  !isActive && "bg-cream text-espresso"
)} />

// Bad: Hardcoded colors
<div style={{ backgroundColor: "#3d2e1f" }} />
```

## Import Conventions

```typescript
// External libraries
import { useState } from "react";
import { motion } from "framer-motion";

// Internal components (use @ alias)
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

// Internal hooks and utilities
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
```

Always use the `@/` path alias for internal imports. Group imports by category with a blank line between groups.
