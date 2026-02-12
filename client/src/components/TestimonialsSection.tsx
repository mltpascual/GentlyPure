/*
 * DESIGN: Terrain — Earthy Editorial
 * Testimonials: Auto-rotating slider with large editorial quotes
 * Warm tones, serif italic quotes, dot navigation, smooth crossfade
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "After years of trying everything, Gently Pure is the first line that hasn't irritated my rosacea-prone skin. The moisturizer is like a warm hug for my face.",
    author: "Sarah M.",
    detail: "Sensitive & Rosacea-Prone Skin",
    stars: 5,
    product: "Nourishing Moisturizer",
  },
  {
    quote:
      "I love that I can actually read and understand every ingredient on the label. My skin has never looked calmer or more radiant.",
    author: "James L.",
    detail: "Eczema-Prone Skin",
    stars: 5,
    product: "Full Routine",
  },
  {
    quote:
      "The cleanser is a revelation — it actually cleans without that tight, stripped feeling. I've recommended it to everyone in my family.",
    author: "Priya K.",
    detail: "Combination Sensitive Skin",
    stars: 5,
    product: "Botanical Cleanser",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function TestimonialsSection() {
  const sectionRef = useScrollReveal(0.01);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir?: "left" | "right") => {
      if (isAnimating || index === active) return;
      setDirection(dir || (index > active ? "right" : "left"));
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [active, isAnimating]
  );

  const goNext = useCallback(() => {
    const next = (active + 1) % testimonials.length;
    goTo(next, "right");
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    const prev = (active - 1 + testimonials.length) % testimonials.length;
    goTo(prev, "left");
  }, [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, isPaused]);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-espresso py-24 lg:py-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 lg:mb-20" style={{ willChange: 'opacity, transform' }}>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Kind Words
          </p>
          <h2
            className="text-cream/90"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Trusted by
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              sensitive souls
            </span>
          </h2>
          <div className="mt-4 h-px w-12 bg-gradient-to-r from-gold to-transparent" />
        </div>

        {/* Slider */}
        <div className="reveal relative" style={{ willChange: 'opacity, transform' }}>
          {/* Large quote mark */}
          <div
            className="absolute -top-4 left-0 text-cream/[0.06] select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12rem",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-[280px] md:min-h-[220px]">
            <div
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `translateX(${direction === "right" ? "30px" : "-30px"})`
                  : "translateX(0)",
              }}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="mb-8 max-w-3xl text-cream/80"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Author avatar placeholder */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                    color: "var(--color-gold)",
                  }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-medium text-cream/90"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-xs text-cream/45"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.detail}
                  </p>
                  <p
                    className="mt-0.5 text-xs text-gold/60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Using: {t.product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            {/* Dot navigation */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group relative flex h-8 w-8 items-center justify-center"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      backgroundColor:
                        i === active
                          ? "var(--color-gold)"
                          : "rgba(245, 241, 234, 0.2)",
                      borderRadius: i === active ? "4px" : "50%",
                    }}
                  />
                </button>
              ))}

              {/* Progress bar */}
              <div className="ml-2 h-px w-16 overflow-hidden bg-cream/10">
                <div
                  className="h-full bg-gold/50"
                  style={{
                    animation: isPaused
                      ? "none"
                      : `testimonialProgress ${AUTOPLAY_INTERVAL}ms linear`,
                    animationIterationCount: "infinite",
                  }}
                />
              </div>
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/50 transition-all duration-200 hover:border-cream/30 hover:text-cream/80"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/50 transition-all duration-200 hover:border-cream/30 hover:text-cream/80"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Counter */}
              <span
                className="ml-3 text-xs text-cream/30"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animation for progress bar */}
      <style>{`
        @keyframes testimonialProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
