/*
 * DESIGN: Terrain — Earthy Editorial
 * FAQ Accordion: Clean, minimal accordion with smooth expand/collapse
 * Organized by category, editorial typography
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Products & Ingredients",
    items: [
      {
        question: "What makes Gently Pure different from other skincare brands?",
        answer:
          "Every Gently Pure formula is developed specifically for sensitive skin from the ground up — not adapted from existing products. We use a curated list of fewer than 15 ingredients per product, all chosen for their proven gentleness and efficacy. Our formulations are free from parabens, sulfates, synthetic fragrances, and over 1,200 known irritants.",
      },
      {
        question: "Are your products suitable for eczema or rosacea-prone skin?",
        answer:
          "Yes. All Gently Pure products are dermatologist-tested and approved for use on eczema-prone and rosacea-prone skin. Our Nourishing Moisturizer contains colloidal oat extract, which is recognized by the FDA as a skin protectant. However, we always recommend patch-testing any new product before full application.",
      },
      {
        question: "Are your products vegan and cruelty-free?",
        answer:
          "Absolutely. All Gently Pure products are 100% vegan and certified cruelty-free by Leaping Bunny. We never test on animals at any stage of product development, and we require the same commitment from our ingredient suppliers.",
      },
      {
        question: "Can I use Gently Pure products during pregnancy?",
        answer:
          "Our formulations use only gentle, naturally-derived ingredients that are generally considered safe during pregnancy. However, we always recommend consulting with your healthcare provider before introducing any new skincare products during pregnancy or breastfeeding.",
      },
    ],
  },
  {
    category: "Shipping & Returns",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping within the US takes 3–5 business days. Express shipping (1–2 business days) is available at checkout. International shipping typically takes 7–14 business days depending on your location. All orders over $50 qualify for free standard shipping.",
      },
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, return the product (even if opened) within 30 days for a full refund. We believe in our formulations and want you to feel confident trying them. Simply contact our support team to initiate a return.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we currently ship to over 30 countries worldwide. International shipping rates and delivery times vary by destination. All applicable customs duties and taxes are the responsibility of the recipient. Check our shipping page for a full list of supported countries.",
      },
    ],
  },
  {
    category: "Skin Care Guidance",
    items: [
      {
        question: "How long before I see results?",
        answer:
          "Most customers notice improved hydration and comfort within the first week. Visible improvements in redness, texture, and overall skin health typically appear within 4–8 weeks of consistent use. Skin barrier repair is a gradual process — patience and consistency are key.",
      },
      {
        question: "Can I use Gently Pure with other skincare products?",
        answer:
          "Yes. Our products are designed to integrate seamlessly into your existing routine. We recommend using the Botanical Cleanser as your first step and the Nourishing Moisturizer as your final step before sunscreen. If you use active ingredients (retinol, AHAs, etc.), apply them between cleansing and moisturizing.",
      },
      {
        question: "What order should I apply the products?",
        answer:
          "For the best results, follow this simple routine: (1) Cleanse with the Botanical Cleanser, (2) Apply any serums or treatments you use, (3) Seal everything in with the Nourishing Moisturizer, (4) Apply sunscreen in the morning. Keep it simple — your sensitive skin will thank you.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-espresso/8">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:opacity-80"
      >
        <span
          className="text-sm font-medium text-espresso/80 lg:text-base"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-espresso/40 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-5 text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useScrollReveal(0.05);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative bg-stone-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 max-w-xl">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Common Questions
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
            Frequently
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              asked questions
            </span>
          </h2>
          <div className="h-px w-12 bg-gradient-to-r from-sage to-transparent" />
        </div>

        {/* FAQ categories */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
          {faqs.map((category, catIndex) => (
            <div key={category.category} className={`reveal reveal-delay-${catIndex + 1}`}>
              {/* Category header */}
              <h3
                className="mb-6 text-espresso"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
              >
                {category.category}
              </h3>

              {/* Accordion items */}
              <div className="border-t border-espresso/8">
                {category.items.map((item, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`;
                  return (
                    <AccordionItem
                      key={key}
                      question={item.question}
                      answer={item.answer}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 text-center">
          <p
            className="mb-4 text-sm text-espresso/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-block rounded-full border border-espresso/20 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-espresso/60 transition-all duration-300 hover:border-espresso/40 hover:text-espresso"
            style={{ fontFamily: "var(--font-body)" }}
            onClick={(e) => {
              e.preventDefault();
              // Placeholder for contact functionality
              import("sonner").then(({ toast }) => {
                toast("Contact form coming soon.");
              });
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
