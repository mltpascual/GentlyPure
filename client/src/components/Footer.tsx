/*
 * DESIGN: Terrain — Earthy Editorial
 * Footer: Minimal, warm, editorial
 * Espresso background, cream text, sage accents
 * Smooth scroll on all internal hash-links
 */

import { Leaf } from "lucide-react";
import { handleSmoothClick } from "@/hooks/useSmoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: "Moisturizer", href: "#products" },
    { label: "Cleanser", href: "#products" },
    { label: "Gift Sets", href: "#products" },
    { label: "Bundles", href: "#products" },
  ];

  const aboutLinks = [
    { label: "Our Story", href: "#philosophy" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Sustainability", href: "#philosophy" },
    { label: "Press", href: "#philosophy" },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "#faq" },
    { label: "Shipping", href: "#faq" },
    { label: "Returns", href: "#faq" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-espresso py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-sage" strokeWidth={1.5} />
              <span
                className="text-xl tracking-tight text-cream/90"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Gently Pure
              </span>
            </div>
            <p
              className="max-w-xs text-sm leading-relaxed text-cream/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Gentle, natural skincare formulations designed for sensitive skin.
              Because your skin deserves kindness.
            </p>
          </div>

          {/* Shop links */}
          <div className="md:col-span-2">
            <h4
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleSmoothClick}
                    className="text-sm text-cream/50 transition-colors duration-200 hover:text-cream/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About links */}
          <div className="md:col-span-2">
            <h4
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About
            </h4>
            <ul className="flex flex-col gap-2.5">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleSmoothClick}
                    className="text-sm text-cream/50 transition-colors duration-200 hover:text-cream/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="md:col-span-2">
            <h4
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Support
            </h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleSmoothClick}
                    className="text-sm text-cream/50 transition-colors duration-200 hover:text-cream/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-2">
            <h4
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Follow
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Instagram", "Pinterest", "TikTok"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-cream/50 transition-colors duration-200 hover:text-cream/80"
                    style={{ fontFamily: "var(--font-body)" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/8 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p
              className="text-xs text-cream/25"
              style={{ fontFamily: "var(--font-body)" }}
            >
              &copy; {currentYear} Gently Pure. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-cream/25 transition-colors duration-200 hover:text-cream/50"
                  style={{ fontFamily: "var(--font-body)" }}
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
