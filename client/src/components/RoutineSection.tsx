/*
 * DESIGN: Terrain — Earthy Editorial
 * Routine: A simple 3-step routine guide
 * Numbered steps with editorial typography
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Cleanse",
    time: "Morning & Evening",
    description:
      "Apply a small amount of the Botanical Cleanser to damp skin. Massage gently in circular motions for 30 seconds, then rinse with lukewarm water. Pat dry — never rub.",
  },
  {
    number: "02",
    title: "Nourish",
    time: "Morning & Evening",
    description:
      "While skin is still slightly damp, warm a pea-sized amount of the Nourishing Moisturizer between your fingertips. Press gently into skin, working outward from the center of your face.",
  },
  {
    number: "03",
    title: "Protect",
    time: "Morning",
    description:
      "Allow the moisturizer to absorb for one minute before applying sunscreen. Your skin barrier is now strengthened and ready to face the day with confidence.",
  },
];

export default function RoutineSection() {
  const sectionRef = useScrollReveal(0.05);

  return (
    <section ref={sectionRef} className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 text-center lg:mb-20">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Your Ritual
          </p>
          <h2
            className="mx-auto max-w-md text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            A simple{" "}
            <span className="italic" style={{ fontWeight: 300 }}>
              daily routine
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-sage to-transparent" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${index + 1} relative border-t border-espresso/8 px-6 py-10 md:border-l md:border-t-0 md:px-10 md:py-0 ${
                index === 0 ? "md:border-l-0" : ""
              }`}
            >
              {/* Large number */}
              <span
                className="mb-4 block text-espresso/8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "4rem",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>

              {/* Title */}
              <h3
                className="mb-2 text-xl text-espresso"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {step.title}
              </h3>

              {/* Time */}
              <p
                className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-sage"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.time}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-espresso/50"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
