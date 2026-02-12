/*
 * DESIGN: Terrain — Earthy Editorial
 * Brand Timeline: Vertical timeline with interactive pop-ups
 * Click any milestone to reveal expanded details, stats, and quotes
 * Alternating left/right layout on desktop, linear on mobile
 * Warm earthy tones, Fraunces serif headings, Karla body
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Award,
  Users,
  Globe,
  Sprout,
  X,
  ChevronRight,
  Quote,
} from "lucide-react";

interface MilestoneDetail {
  quote?: string;
  quoteAuthor?: string;
  stats?: { label: string; value: string }[];
  highlights?: string[];
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  accentBg: string;
  details: MilestoneDetail;
}

const milestones: Milestone[] = [
  {
    year: "2019",
    title: "The Seed Was Planted",
    description:
      "After years of struggling with sensitive skin and harsh products, our founder began experimenting with gentle, plant-based formulations in a small kitchen studio. The mission was simple: skincare that never compromises.",
    icon: Sprout,
    accent: "bg-sage/15 text-sage",
    accentBg: "sage",
    details: {
      quote:
        "I couldn't find a single product that didn't leave my skin red and irritated. So I decided to make my own.",
      quoteAuthor: "Emma Chen, Founder",
      stats: [
        { label: "Ingredients tested", value: "200+" },
        { label: "Months of research", value: "8" },
        { label: "Kitchen prototypes", value: "23" },
      ],
      highlights: [
        "Partnered with a cosmetic chemist specializing in sensitive skin",
        "Established the 'No Compromise' ingredient policy — every ingredient must have clinical backing",
        "Began sourcing organic chamomile and oat extract from certified farms",
      ],
    },
  },
  {
    year: "2020",
    title: "First Formulation Approved",
    description:
      "After 14 months of development and 47 iterations, our Nourishing Moisturizer received dermatologist approval. Every ingredient was chosen for its proven gentleness — nothing more, nothing less.",
    icon: FlaskConical,
    accent: "bg-gold/15 text-gold",
    accentBg: "gold",
    details: {
      quote:
        "Iteration 47 was the one. When the dermatologist said 'this is genuinely gentle,' we knew we had it.",
      quoteAuthor: "Dr. Sarah Kim, Lead Formulator",
      stats: [
        { label: "Formula iterations", value: "47" },
        { label: "Clinical trials", value: "3" },
        { label: "Dermatologists consulted", value: "5" },
      ],
      highlights: [
        "Passed all patch testing with zero irritation reports across 120 participants",
        "Achieved pH balance of 5.5, matching the skin's natural acid mantle",
        "Removed 12 common allergens found in mainstream moisturizers",
      ],
    },
  },
  {
    year: "2021",
    title: "Official Launch",
    description:
      "Gently Pure launched with two core products and a promise: skincare for sensitive skin that actually works. Within three months, we earned the Leaping Bunny cruelty-free certification.",
    icon: Award,
    accent: "bg-clay/15 text-clay",
    accentBg: "clay",
    details: {
      quote:
        "We didn't want to launch with 20 products. Two perfect ones felt more honest than a shelf full of compromises.",
      quoteAuthor: "Emma Chen, Founder",
      stats: [
        { label: "Products at launch", value: "2" },
        { label: "First-month customers", value: "1,200" },
        { label: "5-star reviews", value: "94%" },
      ],
      highlights: [
        "Leaping Bunny cruelty-free certification earned in just 3 months",
        "Featured in 'Clean Beauty Brands to Watch' by Allure Magazine",
        "Sold out initial production run within 6 weeks",
      ],
    },
  },
  {
    year: "2022",
    title: "10,000 Gentle Souls",
    description:
      "Our community grew to 10,000 loyal customers. Real stories of calmed rosacea, soothed eczema, and renewed confidence became the heart of everything we do.",
    icon: Users,
    accent: "bg-sage/15 text-sage",
    accentBg: "sage",
    details: {
      quote:
        "For the first time in years, I looked in the mirror and didn't see redness. I saw me.",
      quoteAuthor: "Maria L., Customer since 2021",
      stats: [
        { label: "Community members", value: "10,000+" },
        { label: "Customer stories shared", value: "2,400" },
        { label: "Repeat purchase rate", value: "78%" },
      ],
      highlights: [
        "Launched the 'Gentle Souls' community forum for sensitive skin support",
        "Introduced the subscription program with 15% savings",
        "Partnered with the National Eczema Association for awareness campaigns",
      ],
    },
  },
  {
    year: "2023",
    title: "Sustainability Pledge",
    description:
      "We transitioned to 100% recyclable glass packaging and FSC-certified paper. Our carbon-neutral shipping program launched, offsetting every delivery through verified reforestation projects.",
    icon: Leaf,
    accent: "bg-gold/15 text-gold",
    accentBg: "gold",
    details: {
      quote:
        "Being gentle to skin means being gentle to the planet. You can't separate the two.",
      quoteAuthor: "Emma Chen, Founder",
      stats: [
        { label: "Plastic eliminated", value: "12 tons" },
        { label: "Trees planted", value: "5,000+" },
        { label: "Carbon offset", value: "100%" },
      ],
      highlights: [
        "Switched to 100% recyclable amber glass bottles and FSC-certified packaging",
        "Launched carbon-neutral shipping via verified reforestation projects",
        "Achieved B Corp certification pending status",
      ],
    },
  },
  {
    year: "2025",
    title: "Looking Ahead",
    description:
      "Our refill program launches this year, reducing packaging waste by 60%. New formulations are in development — always guided by the same principle: gentle by nature, pure by design.",
    icon: Globe,
    accent: "bg-clay/15 text-clay",
    accentBg: "clay",
    details: {
      quote:
        "The future of skincare isn't about more products. It's about better ones, made with less.",
      quoteAuthor: "Emma Chen, Founder",
      stats: [
        { label: "Waste reduction target", value: "60%" },
        { label: "New formulations in R&D", value: "4" },
        { label: "Refill stations planned", value: "50+" },
      ],
      highlights: [
        "Refill program launching in partnership with 50+ retail locations",
        "Developing a gentle SPF and a calming serum for ultra-sensitive skin",
        "Expanding to international markets with localized formulations",
      ],
    },
  },
];

/* ─── Pop-up detail panel ─── */
function MilestonePopup({
  milestone,
  onClose,
  align,
}: {
  milestone: Milestone;
  onClose: () => void;
  align: "left" | "right";
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const Icon = milestone.icon;

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mt-4 overflow-hidden rounded-xl border border-espresso/8 bg-white shadow-xl shadow-espresso/5 ${
        align === "right" ? "lg:text-left" : ""
      }`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Top accent bar */}
      <div
        className={`h-1 w-full ${
          milestone.accentBg === "sage"
            ? "bg-sage"
            : milestone.accentBg === "gold"
              ? "bg-gold"
              : "bg-clay"
        }`}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-espresso/5 text-espresso/40 transition-colors hover:bg-espresso/10 hover:text-espresso/70"
        aria-label="Close details"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${milestone.accent}`}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-sage">
              {milestone.year}
            </span>
            <h4
              className="text-sm text-espresso"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {milestone.title}
            </h4>
          </div>
        </div>

        {/* Quote */}
        {milestone.details.quote && (
          <div className="mb-5 rounded-lg bg-cream/60 p-4">
            <Quote className="mb-2 h-4 w-4 text-gold/50" strokeWidth={1.5} />
            <p
              className="text-sm italic leading-relaxed text-espresso/70"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              "{milestone.details.quote}"
            </p>
            {milestone.details.quoteAuthor && (
              <p className="mt-2 text-xs text-espresso/40">
                — {milestone.details.quoteAuthor}
              </p>
            )}
          </div>
        )}

        {/* Stats row */}
        {milestone.details.stats && (
          <div className="mb-5 grid grid-cols-3 gap-3">
            {milestone.details.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-espresso/6 bg-warmWhite p-3 text-center"
              >
                <p
                  className="text-lg text-espresso"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-espresso/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        {milestone.details.highlights && (
          <div>
            <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
              Key Highlights
            </p>
            <ul className="space-y-2">
              {milestone.details.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-espresso/55"
                >
                  <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-sage" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Timeline card (clickable) ─── */
function TimelineCard({
  milestone,
  icon: _Icon,
  align,
  isExpanded,
  onToggle,
}: {
  milestone: Milestone;
  icon: React.ElementType;
  align: "left" | "right";
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`pb-12 lg:pb-16 ${align === "right" ? "lg:text-right" : "lg:text-left"}`}
    >
      {/* Clickable card area */}
      <div
        onClick={onToggle}
        className={`group cursor-pointer rounded-lg p-3 -m-3 transition-all duration-300 ${
          isExpanded
            ? "bg-espresso/[0.03]"
            : "hover:bg-espresso/[0.02]"
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isExpanded}
      >
        {/* Year badge */}
        <span
          className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-sage"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {milestone.year}
        </span>

        {/* Title */}
        <h3
          className="mb-3 text-espresso transition-colors group-hover:text-espresso/80"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
            lineHeight: 1.2,
          }}
        >
          {milestone.title}
        </h3>

        {/* Description */}
        <p
          className="max-w-md text-sm leading-relaxed text-espresso/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {milestone.description}
        </p>

        {/* "Read more" hint */}
        <div
          className={`mt-3 flex items-center gap-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
            isExpanded
              ? "text-sage"
              : "text-espresso/30 group-hover:text-sage"
          } ${align === "right" ? "lg:justify-end" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>{isExpanded ? "Close details" : "Read more"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronRight className="h-3 w-3" />
          </motion.div>
        </div>
      </div>

      {/* Expandable pop-up */}
      <AnimatePresence>
        {isExpanded && (
          <MilestonePopup
            milestone={milestone}
            onClose={onToggle}
            align={align}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Timeline item (row with center line) ─── */
function TimelineItem({
  milestone,
  index,
  isVisible,
  isExpanded,
  onToggle,
}: {
  milestone: Milestone;
  index: number;
  isVisible: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isEven = index % 2 === 0;
  const Icon = milestone.icon;

  return (
    <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
      {/* Left content (even items) or empty space (odd items) */}
      <div
        className={`lg:pr-12 lg:text-right ${isEven ? "" : "lg:order-1 hidden lg:block"}`}
      >
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TimelineCard
              milestone={milestone}
              icon={Icon}
              align="right"
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </motion.div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col items-center lg:relative lg:left-auto">
        {/* Dot — clickable */}
        <motion.button
          onClick={onToggle}
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isExpanded
              ? `border-transparent ${milestone.accent} ring-2 ring-offset-2 ring-sage/30`
              : `border-cream ${milestone.accent} hover:scale-110`
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.1 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-label={`View details for ${milestone.title}`}
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </motion.button>
        {/* Vertical line */}
        {index < milestones.length - 1 && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-espresso/15 to-espresso/5"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.12,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Right content (odd items) or empty space (even items) */}
      <div
        className={`pl-14 lg:pl-12 ${isEven ? "hidden lg:block lg:order-3" : "lg:order-3"}`}
      >
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TimelineCard
              milestone={milestone}
              icon={Icon}
              align="left"
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </motion.div>
        )}
        {/* Mobile: show even items on right too */}
        {isEven && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TimelineCard
              milestone={milestone}
              icon={Icon}
              align="left"
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function BrandTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
      { threshold: 0.02 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative bg-warmWhite py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Journey
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
            A story built on{" "}
            <em className="font-normal italic" style={{ fontWeight: 300 }}>
              gentleness
            </em>
          </h2>
          <p
            className="mx-auto max-w-lg text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From a small kitchen studio to thousands of happy, sensitive souls —
            every step has been guided by one belief: your skin deserves better.
          </p>
          <p
            className="mx-auto mt-3 max-w-sm text-xs text-espresso/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Click any milestone to explore the full story
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.year}
              milestone={milestone}
              index={index}
              isVisible={isVisible}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
