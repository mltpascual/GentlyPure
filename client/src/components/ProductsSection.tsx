/*
 * DESIGN: Terrain — Earthy Editorial
 * Products: Staggered layout with large product images
 * Enhanced hover animations, shadow transitions, quick-view modal trigger
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";
import { Eye } from "lucide-react";

const MOISTURIZER_IMAGE = "/images/moisturizer-detail.jpg";

const CLEANSER_IMAGE = "/images/cleanser-detail.jpg";

export const products = [
  {
    name: "Nourishing Moisturizer",
    tagline: "Deep hydration, zero irritation",
    description:
      "A rich, velvety cream that envelops skin in lasting moisture. Formulated with oat extract and chamomile to soothe and strengthen the skin barrier — ideal for daily use on sensitive, reactive skin.",
    longDescription:
      "Our Nourishing Moisturizer is the cornerstone of the Gently Pure collection. Developed over two years with dermatologists specializing in sensitive skin, this cream delivers deep, lasting hydration without any of the common irritants found in conventional moisturizers. The formula centers on colloidal oat extract — clinically proven to strengthen the skin barrier — paired with chamomile flower extract for its powerful anti-inflammatory properties. Shea butter provides a rich, velvety texture that absorbs quickly without leaving a greasy residue, while vitamin E acts as a potent antioxidant shield. Suitable for all skin types, especially those prone to redness, dryness, and reactivity.",
    ingredients: ["Oat Extract", "Chamomile", "Shea Butter", "Vitamin E"],
    howToUse: "Apply a pea-sized amount to clean, slightly damp skin. Gently press into face and neck using upward motions. Use morning and evening for best results. Allow one minute to absorb before applying sunscreen or makeup.",
    size: "50ml / 1.7 fl oz",
    price: "$42",
    image: MOISTURIZER_IMAGE,
    imageAlt: "Gently Pure Nourishing Moisturizer jar on ceramic plate with cream swatch",
  },
  {
    name: "Botanical Cleanser",
    tagline: "Purify without stripping",
    description:
      "A silky gel-to-milk cleanser that dissolves impurities while preserving your skin's natural oils. Sage and eucalyptus gently clarify, leaving skin feeling clean, calm, and never tight.",
    longDescription:
      "The Botanical Cleanser transforms from a lightweight gel into a nourishing milk upon contact with water, gently lifting away makeup, sunscreen, and daily impurities without disrupting the skin's delicate moisture barrier. Sage extract provides natural antibacterial properties, while eucalyptus soothes and refreshes. Aloe vera ensures the skin stays hydrated throughout the cleansing process, and green tea extract delivers a dose of protective antioxidants. The pH-balanced formula is designed to work in harmony with your skin's natural chemistry, leaving it feeling clean, calm, and perfectly balanced — never tight or stripped.",
    ingredients: ["Sage Extract", "Eucalyptus", "Aloe Vera", "Green Tea"],
    howToUse: "Dispense a small amount onto damp hands. Massage gently onto face in circular motions for 30 seconds. Rinse with lukewarm water and pat dry. Use morning and evening as the first step in your routine.",
    size: "120ml / 4 fl oz",
    price: "$36",
    image: CLEANSER_IMAGE,
    imageAlt: "Gently Pure Botanical Cleanser bottle on stone slab with eucalyptus leaves",
  },
];

export default function ProductsSection() {
  const sectionRef = useScrollReveal(0.05);
  const [modalProduct, setModalProduct] = useState<typeof products[0] | null>(null);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative bg-stone-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-20 max-w-xl">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The Collection
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
            Essentials for
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              everyday skin health
            </span>
          </h2>
          <div className="h-px w-12 bg-gradient-to-r from-sage to-transparent" />
        </div>

        {/* Products */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`reveal grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image — with enhanced hover */}
              <div
                className={`relative lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl"
                  onClick={() => setModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-all duration-500 group-hover:bg-espresso/20">
                    <div className="flex items-center gap-2 rounded-full bg-cream/90 px-5 py-2.5 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <Eye className="h-4 w-4 text-espresso" strokeWidth={1.5} />
                      <span
                        className="text-xs font-medium uppercase tracking-[0.15em] text-espresso"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Quick View
                      </span>
                    </div>
                  </div>
                  {/* Price tag */}
                  <div
                    className="absolute bottom-6 right-6 rounded-sm bg-cream/90 px-5 py-3 shadow-md backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-[-4px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span className="text-2xl font-light text-espresso">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div
                className={`flex flex-col justify-center lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-4"
                }`}
              >
                <p
                  className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sage"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {product.tagline}
                </p>
                <h3
                  className="mb-5 text-espresso"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                  }}
                >
                  {product.name}
                </h3>
                <div className="mb-5 h-px w-10 bg-gradient-to-r from-gold to-transparent" />
                <p
                  className="mb-8 text-sm leading-relaxed text-espresso/60 lg:text-base"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {product.description}
                </p>

                {/* Key ingredients */}
                <div className="mb-8">
                  <p
                    className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-espresso/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Key Ingredients
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="border border-espresso/10 bg-cream/60 px-3 py-1.5 text-xs font-medium text-espresso/60 transition-colors duration-200 hover:border-sage/30 hover:text-espresso/80"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-block w-fit rounded-full border border-espresso bg-espresso px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-espresso"
                    style={{ fontFamily: "var(--font-body)" }}
                    onClick={(e) => {
                      e.preventDefault();
                      toast("Coming soon — shop launching shortly.");
                    }}
                  >
                    Add to Cart
                  </a>
                  <button
                    className="text-xs font-medium uppercase tracking-[0.15em] text-espresso/40 transition-colors duration-200 hover:text-espresso/80"
                    style={{ fontFamily: "var(--font-body)" }}
                    onClick={() => setModalProduct(product)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick-View Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
}
