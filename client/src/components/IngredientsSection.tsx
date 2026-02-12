/*
 * DESIGN: Terrain — Earthy Editorial
 * Ingredients: Full-width lifestyle image with overlaid text blocks
 * Editorial magazine spread feel
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets, Flower2, Wheat, Leaf } from "lucide-react";

const INGREDIENTS_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/nM5eDCQrGqZp8eqtV1o3BP-img-4_1770802567000_na1fn_aW5ncmVkaWVudHMtbGlmZXN0eWxl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L25NNWVEQ1FyR3FacDhlcXRWMW8zQlAtaW1nLTRfMTc3MDgwMjU2NzAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkSE10YkdsbVpYTjBlV3hsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ADBQ2kfx9kmaBNxhmrqBU0QjnI2c5boE6XBkrIo1~gvDAv7lL1aWL9yHYMGhVAdy04YpcY75aUEmpglqlexVj7BcRd1Sfw5H~4wYgWLVQaFRQs6D5iRoRwarLNjPcZd9ACg6iozoD9Wwy6o04xJ4Ry3Pb9wqhDWXqItm44cgi1ykFofcCVGUzPSCbs3TXm6ZNq~Flkv0kaGTgMVW2EN40fNUZPRmzO9APsVLBhBma48uodSm5~GotSPp0hSMREbr0L5BsLF~xAaDrORmV7dvc~Np9VZW5Dhd2xHkX4V4grhe3Iieh~ci~g~wmKV5CtgQMj94Sn79UpVkiIgwqRDAjw__";

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
