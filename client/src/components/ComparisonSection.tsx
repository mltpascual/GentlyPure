/*
 * DESIGN: Terrain — Earthy Editorial
 * Comparison Table: Side-by-side breakdown of Moisturizer vs Cleanser
 * Editorial layout with warm tones, asymmetric accents
 * Responsive: stacked cards on mobile, table on desktop
 */

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, X, Droplets, Sparkles } from "lucide-react";

interface ComparisonRow {
  label: string;
  moisturizer: string | boolean;
  cleanser: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { label: "Price", moisturizer: "$42", cleanser: "$36" },
  { label: "Size", moisturizer: "50ml / 1.7 fl oz", cleanser: "120ml / 4 fl oz" },
  { label: "Skin Type", moisturizer: "Dry & Sensitive", cleanser: "All Sensitive Types" },
  { label: "Primary Benefit", moisturizer: "Deep Hydration", cleanser: "Gentle Cleansing" },
  { label: "Texture", moisturizer: "Rich Cream", cleanser: "Gel-to-Milk" },
  { label: "Key Ingredient", moisturizer: "Oat Extract", cleanser: "Sage Extract" },
  { label: "Fragrance Free", moisturizer: true, cleanser: true },
  { label: "Dermatologist Tested", moisturizer: true, cleanser: true },
  { label: "Vegan & Cruelty-Free", moisturizer: true, cleanser: true },
  { label: "Best For Morning", moisturizer: true, cleanser: true },
  { label: "Best For Evening", moisturizer: true, cleanser: true },
  { label: "Barrier Repair", moisturizer: true, cleanser: false },
  { label: "Makeup Removal", moisturizer: false, cleanser: true },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-sage" strokeWidth={2} />
    ) : (
      <X className="mx-auto h-4 w-4 text-espresso/20" strokeWidth={2} />
    );
  }
  return (
    <span
      className="text-sm text-espresso/80"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {value}
    </span>
  );
}

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="compare"
      className="relative bg-warmWhite py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Find Your Match
          </p>
          <h2
            className="mb-4 text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Compare our{" "}
            <em className="font-normal italic" style={{ fontWeight: 300 }}>
              essentials
            </em>
          </h2>
          <p
            className="max-w-lg text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not sure which product is right for you? Here's a detailed
            side-by-side comparison to help you choose — or discover why both
            belong in your routine.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border border-espresso/8"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-espresso/8 bg-cream">
            {/* Empty cell */}
            <div className="p-5 lg:p-6" />

            {/* Moisturizer header */}
            <div className="flex flex-col items-center border-l border-espresso/8 bg-sage/5 p-5 text-center lg:p-6">
              <Droplets
                className="mb-2 h-5 w-5 text-sage"
                strokeWidth={1.5}
              />
              <h3
                className="text-sm font-medium text-espresso lg:text-base"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Nourishing
              </h3>
              <p
                className="text-xs text-espresso/40 lg:text-sm"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Moisturizer
              </p>
            </div>

            {/* Cleanser header */}
            <div className="flex flex-col items-center border-l border-espresso/8 p-5 text-center lg:p-6">
              <Sparkles
                className="mb-2 h-5 w-5 text-clay"
                strokeWidth={1.5}
              />
              <h3
                className="text-sm font-medium text-espresso lg:text-base"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Botanical
              </h3>
              <p
                className="text-xs text-espresso/40 lg:text-sm"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Cleanser
              </p>
            </div>
          </div>

          {/* Table rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.label}
              className={`grid grid-cols-3 border-b border-espresso/5 last:border-b-0 ${
                index % 2 === 0 ? "bg-warmWhite" : "bg-cream/50"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Label */}
              <div className="flex items-center p-4 lg:p-5">
                <span
                  className="text-xs font-medium uppercase tracking-wide text-espresso/60 lg:text-sm lg:tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.label}
                </span>
              </div>

              {/* Moisturizer value */}
              <div className="flex items-center justify-center border-l border-espresso/5 bg-sage/[0.03] p-4 text-center lg:p-5">
                <CellValue value={row.moisturizer} />
              </div>

              {/* Cleanser value */}
              <div className="flex items-center justify-center border-l border-espresso/5 p-4 text-center lg:p-5">
                <CellValue value={row.cleanser} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#products"
            className="rounded-full bg-espresso px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:bg-espresso/90"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shop Both — Save 15%
          </a>
          <p
            className="text-xs text-espresso/35"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bundle & save on the complete routine
          </p>
        </motion.div>
      </div>
    </section>
  );
}
