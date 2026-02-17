/*
 * DESIGN: Terrain — Earthy Editorial
 * Instagram Gallery: Edge-to-edge grid of customer lifestyle photos
 * Hover reveals Instagram handle overlay with subtle scale animation
 * Warm, earthy tones consistent with brand identity
 */

import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/images/insta-1.jpg",
    handle: "@sarah.glows",
    caption: "Morning routine with Gently Pure",
    likes: 847,
  },
  {
    src: "/images/insta-2.jpg",
    handle: "@gentlypure",
    caption: "The essentials, laid bare",
    likes: 1243,
  },
  {
    src: "/images/insta-3.jpg",
    handle: "@emma.skincare",
    caption: "Self-care Sunday essentials",
    likes: 612,
  },
  {
    src: "/images/insta-4.jpg",
    handle: "@gentlypure",
    caption: "Pure ingredients, pure results",
    likes: 956,
  },
  {
    src: "/images/insta-5.jpg",
    handle: "@priya.naturalskin",
    caption: "Garden vibes & gentle skincare",
    likes: 731,
  },
];

export default function InstagramSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Section header */}
      <div className="bg-warmWhite px-6 py-16 text-center lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-espresso/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Follow Along
          </p>
          <h2
            className="mb-3 text-3xl tracking-tight text-espresso md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Join our <em className="font-normal italic">community</em>
          </h2>
          <p
            className="mx-auto max-w-md text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real people, real skin, real results. Tag{" "}
            <span className="font-medium text-espresso/70">@gentlypure</span>{" "}
            to be featured.
          </p>
        </motion.div>
      </div>

      {/* Photo grid — edge-to-edge, no gaps on desktop */}
      <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-3 md:grid-cols-5 md:gap-0">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-espresso/60 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Instagram
                className="mb-3 h-6 w-6 text-cream/90"
                strokeWidth={1.5}
              />
              <p
                className="mb-1 text-sm font-medium text-cream/95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.handle}
              </p>
              <p
                className="mb-3 max-w-[80%] text-center text-xs text-cream/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.caption}
              </p>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-cream/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span
                  className="text-xs text-cream/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.likes.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA bar */}
      <div className="bg-warmWhite py-8 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-espresso/50 transition-colors duration-200 hover:text-espresso/80"
          style={{ fontFamily: "var(--font-body)" }}
          onClick={(e) => e.preventDefault()}
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} />
          Follow @gentlypure on Instagram
        </a>
      </div>
    </section>
  );
}
