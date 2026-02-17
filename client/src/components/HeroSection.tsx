/*
 * DESIGN: Terrain — Earthy Editorial
 * Hero: Split layout — oversized serif typography left, product image right
 * Dramatic scale contrast, asymmetric composition
 * Color: espresso text on stone-bg, sage accent
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { handleSmoothClick } from "@/hooks/useSmoothScroll";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "/images/hero-product.jpg";

export default function HeroSection() {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-cream pt-20"
    >
      {/* Main content grid */}
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1400px] grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-0 lg:px-8">
        {/* Left: Typography block */}
        <div className="flex flex-col justify-center lg:col-span-5 lg:pr-8">
          {/* Eyebrow */}
          <p
            className="reveal mb-6 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Skincare for Sensitive Skin
          </p>

          {/* Main headline — oversized serif */}
          <h1
            className="reveal reveal-delay-1 mb-6 leading-[0.9] tracking-tight text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            Gentle by
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              nature,
            </span>
            <br />
            pure by
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              design.
            </span>
          </h1>

          {/* Horizontal accent rule */}
          <div className="reveal reveal-delay-2 mb-6 h-px w-16 bg-gradient-to-r from-sage to-transparent" />

          {/* Subtext */}
          <p
            className="reveal reveal-delay-2 mb-8 max-w-sm text-base leading-relaxed text-espresso/60"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Formulated with intention. Every ingredient chosen to calm, nourish,
            and protect the skin you live in — nothing more, nothing less.
          </p>

          {/* CTA */}
          <div className="reveal reveal-delay-3 flex items-center gap-6">
            <a
              href="#products"
              onClick={handleSmoothClick}
              className="inline-block rounded-full border border-espresso bg-espresso px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-espresso"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Discover Our Range
            </a>
            <a
              href="#philosophy"
              onClick={handleSmoothClick}
              className="text-sm font-medium text-espresso/50 underline underline-offset-4 decoration-espresso/20 transition-colors duration-200 hover:text-espresso hover:decoration-espresso/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Right: Product image — asymmetric, bleeds to edge */}
        <div className="relative flex items-center justify-center lg:col-span-7">
          <div className="reveal reveal-delay-1 relative w-full">
            <img
              src={HERO_IMAGE}
              alt="Gently Pure skincare products — cleanser and moisturizer on natural stone with dried botanicals"
              className="h-[50vh] w-full object-cover lg:h-[80vh]"
              style={{ objectPosition: "center 40%" }}
            />
            {/* Subtle overlay gradient on left edge for text readability */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream/40 to-transparent lg:block hidden" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#products"
          onClick={handleSmoothClick}
          className="flex flex-col items-center gap-2 text-espresso/30 transition-colors duration-300 hover:text-espresso/60"
          aria-label="Scroll down"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
