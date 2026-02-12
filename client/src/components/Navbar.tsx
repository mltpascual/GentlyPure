/*
 * DESIGN: Terrain — Earthy Editorial
 * Navbar: Floating, minimal, warm stone tones
 * Font: Fraunces for brand, Karla for links
 * Behavior: Transparent on top, solid on scroll
 * Active section indicator via IntersectionObserver
 * Mobile: Full-screen slide-out drawer with staggered animations
 * Smooth scroll on all hash-links with navbar offset
 */

import { useEffect, useState, useCallback } from "react";
import { Leaf, X } from "lucide-react";
import { handleSmoothClick, smoothScrollTo } from "@/hooks/useSmoothScroll";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track scroll position for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleMobileLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeMobile();
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        setTimeout(() => {
          smoothScrollTo(href);
          window.history.pushState(null, "", href);
        }, 300);
      }
    },
    [closeMobile]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.88_0.02_75)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
          {/* Brand */}
          <a
            href="#"
            onClick={handleSmoothClick}
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
          >
            <Leaf className="h-5 w-5 text-sage" strokeWidth={1.5} />
            <span
              className="text-xl tracking-tight text-espresso"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Gently Pure
            </span>
          </a>

          {/* Desktop links with active indicator */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={handleSmoothClick}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-espresso"
                        : "text-espresso/50 hover:text-espresso/80"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                  {/* Active indicator dot */}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sage transition-all duration-400 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#products"
            onClick={handleSmoothClick}
            className="hidden rounded-full border border-espresso/20 bg-espresso px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-all duration-200 hover:bg-espresso/90 lg:block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shop Now
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] text-espresso lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out ${
                  mobileOpen ? "top-[11px] rotate-45" : "top-[5px] rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileOpen ? "w-0 opacity-0" : "w-4 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out ${
                  mobileOpen ? "top-[11px] -rotate-45" : "top-[17px] rotate-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile slide-out drawer overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
      />

      {/* Mobile slide-out drawer */}
      <div
        className={`fixed right-0 top-0 z-[56] flex h-full w-[85%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-espresso/8 px-6 py-5">
          <a
            href="#"
            onClick={(e) => {
              handleMobileLink(e);
            }}
            className="flex items-center gap-2"
          >
            <Leaf className="h-5 w-5 text-sage" strokeWidth={1.5} />
            <span
              className="text-lg tracking-tight text-espresso"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Gently Pure
            </span>
          </a>
          <button
            onClick={closeMobile}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-bg text-espresso/60 transition-colors duration-200 hover:text-espresso"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer links with staggered animation + active indicator */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleMobileLink}
                    className={`block border-b border-espresso/5 py-4 text-lg transition-all duration-200 hover:pl-2 ${
                      isActive
                        ? "text-espresso border-sage/30 pl-1"
                        : "text-espresso/50 hover:text-espresso"
                    }`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: isActive ? 500 : 400,
                      opacity: mobileOpen ? 1 : 0,
                      transform: mobileOpen ? "translateX(0)" : "translateX(24px)",
                      transition: `opacity 0.4s ease ${0.1 + index * 0.06}s, transform 0.4s ease ${0.1 + index * 0.06}s, color 0.2s, padding 0.2s`,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      {isActive && (
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
                      )}
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer CTA */}
        <div
          className="border-t border-espresso/8 px-6 py-6"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s",
          }}
        >
          <a
            href="#products"
            onClick={handleMobileLink}
            className="block rounded-full border border-espresso bg-espresso px-5 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-espresso"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shop Now
          </a>
          <p
            className="mt-4 text-center text-xs text-espresso/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Skincare for sensitive skin
          </p>
        </div>
      </div>
    </>
  );
}
