/*
 * DESIGN: Terrain — Earthy Editorial
 * Product Quick-View Modal: Large image lightbox with full product details
 * Smooth entrance/exit animations, editorial layout inside modal
 */

import { useEffect, useRef, useCallback } from "react";
import { X, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import type { products } from "@/components/ProductsSection";

type Product = (typeof products)[number];

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  // Close on overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  if (!product) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      style={{ animation: "modalOverlayIn 0.3s ease-out forwards" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
        style={{ animation: "modalFadeIn 0.3s ease-out forwards" }}
      />

      {/* Modal content */}
      <div
        ref={contentRef}
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden bg-cream shadow-2xl lg:flex-row"
        style={{ animation: "modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-espresso/60 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-cream hover:text-espresso hover:shadow-md"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Image side */}
        <div className="relative w-full shrink-0 lg:w-1/2">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />
          {/* Price overlay */}
          <div
            className="absolute bottom-4 left-4 rounded-sm bg-cream/90 px-4 py-2 shadow-md backdrop-blur-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-2xl font-light text-espresso">{product.price}</span>
          </div>
        </div>

        {/* Details side */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <p
            className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.tagline}
          </p>
          <h2
            className="mb-2 text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
            }}
          >
            {product.name}
          </h2>
          <p
            className="mb-5 text-sm text-espresso/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.size}
          </p>
          <div className="mb-6 h-px w-10 bg-gradient-to-r from-gold to-transparent" />

          {/* Long description */}
          <p
            className="mb-6 text-sm leading-relaxed text-espresso/60"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            {product.longDescription}
          </p>

          {/* How to use */}
          <div className="mb-6">
            <h4
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-espresso/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How to Use
            </h4>
            <p
              className="text-sm leading-relaxed text-espresso/55"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {product.howToUse}
            </p>
          </div>

          {/* Key Ingredients */}
          <div className="mb-8">
            <h4
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-espresso/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="border border-espresso/10 bg-stone-bg/50 px-3 py-1.5 text-xs font-medium text-espresso/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Spacer to push CTA to bottom */}
          <div className="mt-auto" />

          {/* CTA row */}
          <div className="flex items-center gap-4 border-t border-espresso/8 pt-6">
            <button
              className="flex-1 rounded-full border border-espresso bg-espresso px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-espresso"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => {
                toast("Coming soon — shop launching shortly.");
              }}
            >
              Add to Cart — {product.price}
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes modalOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
