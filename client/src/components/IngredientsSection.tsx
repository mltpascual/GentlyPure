/*
 * DESIGN: Terrain — Earthy Editorial
 * Ingredients: Full-width lifestyle image with overlaid text blocks
 * Editorial magazine spread feel
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets, Flower2, Wheat, Leaf } from "lucide-react";

const INGREDIENTS_IMAGE = "/images/ingredients-lifestyle.jpg";

const ingredients = [
  {
    icon: Flower2,
    name: "Chamomile",
    benefit: "Calms inflammation and redness, soothes reactive skin with gentle anti-inflammatory properties.",
  },
  {
    icon: Wheat,
    name: "Oat Extract",
    benefit: "Strengthens the skin barrier and locks in moisture, providing lasting comfort for dry, sensitive skin.",
  },
  {
    icon: Droplets,
    name: "Aloe Vera",
    benefit: "Deeply hydrates and cools irritated skin, accelerating the natural healing process.",
  },
  {
    icon: Leaf,
    name: "Green Tea",
    benefit: "Rich in antioxidants that protect against environmental stress and premature aging.",
  },
];

export default function IngredientsSection() {
  const sectionRef = useScrollReveal(0.05);

  return (
    <section ref={sectionRef} id="ingredients" className="relative bg-cream">
      {/* Full-width image band */}
      <div className="reveal relative h-[40vh] w-full overflow-hidden lg:h-[50vh]">
        <img
          src={INGREDIENTS_IMAGE}
          alt="Natural skincare ingredients — aloe vera, chamomile, oats, and honey on a wooden board"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-8 lg:pb-32">
        {/* Section header */}
        <div className="reveal -mt-16 relative z-10 mb-16 max-w-2xl lg:-mt-24">
          <div className="bg-transparent p-6 lg:p-0">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What Goes In
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
              Nature's most
              <br />
              <span className="italic" style={{ fontWeight: 300 }}>
                trusted ingredients
              </span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-sage to-transparent" />
          </div>
        </div>

        {/* Ingredient cards — asymmetric grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ingredients.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`reveal reveal-delay-${index + 1} group border border-espresso/8 bg-stone-bg/50 p-6 transition-all duration-500 hover:border-sage/20 hover:bg-cream hover:shadow-lg hover:-translate-y-1 lg:p-8 ${
                  index % 2 === 1 ? "lg:mt-8" : ""
                }`}
              >
                <Icon
                  className="mb-5 h-6 w-6 text-sage transition-all duration-500 group-hover:text-espresso group-hover:scale-110"
                  strokeWidth={1.2}
                />
                <h3
                  className="mb-3 text-lg text-espresso"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-relaxed text-espresso/50"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.benefit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
