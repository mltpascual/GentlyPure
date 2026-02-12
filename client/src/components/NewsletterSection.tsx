/*
 * DESIGN: Terrain — Earthy Editorial
 * Newsletter: Simple, elegant CTA with email capture
 * Sage-light background, centered editorial layout
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const sectionRef = useScrollReveal(0.1);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Gently Pure community.");
      setEmail("");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-sage-light py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="reveal mx-auto max-w-xl text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Stay Connected
          </p>
          <h2
            className="mb-4 text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Join the{" "}
            <span className="italic" style={{ fontWeight: 300 }}>
              gentle movement
            </span>
          </h2>
          <p
            className="mb-10 text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Be the first to know about new products, skincare tips for sensitive
            skin, and exclusive offers. No spam — just gentle care for your
            inbox.
          </p>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 rounded-full border border-espresso/15 bg-cream px-5 py-3.5 text-sm text-espresso placeholder:text-espresso/30 outline-none transition-colors duration-200 focus:border-sage"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              className="rounded-full border border-espresso bg-espresso px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-espresso"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Subscribe
            </button>
          </form>

          <p
            className="reveal reveal-delay-2 mt-4 text-[11px] text-espresso/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
