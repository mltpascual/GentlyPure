/*
 * DESIGN: Terrain — Earthy Editorial
 * Results Gallery: Before & After skincare transformations
 * Interactive slider reveal, editorial layout, customer stories
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useRef, useCallback } from "react";

const BA_IMAGE_1 = "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/RO8DFkgQTtnH6ArzaTSYot-img-1_1770804299000_na1fn_YmVmb3JlLWFmdGVyLTE.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L1JPOERGa2dRVHRuSDZBcnphVFNZb3QtaW1nLTFfMTc3MDgwNDI5OTAwMF9uYTFmbl9ZbVZtYjNKbExXRm1kR1Z5TFRFLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OxDZjn5noog6NnHiJLjoGLG~Du47rM8vaDXyFfzlc4RXtsi4lUctZPXCGgeEEob-BR4TeorLmr-ioxsEIlBx8ksh72Bg8f-B9aKTIa734UGBVLb2~D8NGGpRoB36t3auNci856J-vqLYkHeNWDOEu~pMcCyWdkTFokhy28HN7W10KDbOZCcud~UCnwT2Kz~iGkikvpCVDjgkXneO56K7hsSKyQI1VAAwkxt2aKzn8SdTVvAcKDZ7X5ah0-Qbm0YUgnuMik6Q1-2zfPaG11ud7pv1TW3e2OxWaC-lvaAjIMQ9-nO9wGfwBACTgnC1kGR1DCGNKUM1tlIkg2ZhiKC16A__";

const BA_IMAGE_2 = "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/RO8DFkgQTtnH6ArzaTSYot-img-2_1770804296000_na1fn_YmVmb3JlLWFmdGVyLTI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L1JPOERGa2dRVHRuSDZBcnphVFNZb3QtaW1nLTJfMTc3MDgwNDI5NjAwMF9uYTFmbl9ZbVZtYjNKbExXRm1kR1Z5TFRJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HI~OMOyNWAgamg~6L1-OpiiwVJGhpqEWyHAKtCI2XS-y4cDST6L2A1o6MpUzQdYjhL2tjgZ2o6-Wr7HOORwsElBwBg3B-93xec1BGVQaM5sPJ93yJB~vvPbG1~c08-T0O5LxbL~O2kgcbnCGaJeNY1NvLA9BrhWXFYtes4~6ybxxzNrf02UGw1e-JrEWg7s9985NWilM4Lv6m9bnRh2pVfzJzr3qTll2OHu~SPRQ8Tx~zilDTDTF6lkh9qI2iMpZZGsfe7AvcYTANmOuZNhzZ3BytsCEzS2Z2gDmd94w7tbX1S3Zq3pqvTCor7ib-Cbta0kGqtxJapDycGt7Psd-8g__";

const BA_IMAGE_3 = "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/RO8DFkgQTtnH6ArzaTSYot-img-3_1770804297000_na1fn_YmVmb3JlLWFmdGVyLTM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L1JPOERGa2dRVHRuSDZBcnphVFNZb3QtaW1nLTNfMTc3MDgwNDI5NzAwMF9uYTFmbl9ZbVZtYjNKbExXRm1kR1Z5TFRNLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QHAdvG~cPwCYKs5qbVkeiwnV5-uYBXcDQGiXHB6b~1mRhOTfgsGIbRUQQIRXlFkcUEI1P7X~KYp~-f1~QF5xtnKsJvAEh75zmSxU5RMc20nKsiLTCXTK4hMvMUuweLgv9kBRGKCasIjAG6SonqXk99L8Az28LvXDW5m3U-0swEUynbyMPEZTTYci~epcn8omAk-4e1kd~v9w9Je4xKJ3boqyarKT4ptmDmx1XNpOs8jdRFZ3aBCkBukPf8Uhta9PKL0mJLg~RY0EDjFhKa6uouLU5pgYrc3bqI6wHkTsU0UuIbA2c-f0~0K1UEk5YoAv4OuKpH~1w7kppVyRHt96aA__";

const results = [
  {
    name: "Sarah M.",
    age: 28,
    concern: "Rosacea & Redness",
    duration: "8 weeks",
    product: "Nourishing Moisturizer",
    quote: "The redness on my cheeks has calmed down dramatically. For the first time in years, I feel confident going out without foundation.",
    image: BA_IMAGE_1,
  },
  {
    name: "James L.",
    age: 32,
    concern: "Dry Patches & Texture",
    duration: "6 weeks",
    product: "Full Routine",
    quote: "My skin texture has completely transformed. The dry, flaky patches around my nose are gone, and my skin feels smooth and hydrated all day.",
    image: BA_IMAGE_2,
  },
  {
    name: "Priya K.",
    age: 35,
    concern: "Sensitivity & Blotchiness",
    duration: "10 weeks",
    product: "Botanical Cleanser + Moisturizer",
    quote: "I used to dread washing my face because everything stung. Now my skin looks plump and radiant — my husband noticed the difference within the first month.",
    image: BA_IMAGE_3,
  },
];

export default function ResultsSection() {
  const sectionRef = useScrollReveal(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 max-w-xl">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real Results
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
            See the
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              transformation
            </span>
          </h2>
          <div className="h-px w-12 bg-gradient-to-r from-sage to-transparent" />
        </div>

        {/* Tab navigation */}
        <div className="reveal mb-10 flex gap-3 overflow-x-auto pb-2">
          {results.map((result, index) => (
            <button
              key={result.name}
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                activeIndex === index
                  ? "border-espresso bg-espresso text-cream"
                  : "border-espresso/15 bg-transparent text-espresso/50 hover:border-espresso/30 hover:text-espresso/70"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {result.name}
            </button>
          ))}
        </div>

        {/* Active result */}
        <div className="reveal">
          {results.map((result, index) => (
            <div
              key={result.name}
              className={`transition-all duration-500 ${
                activeIndex === index
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Before/After image */}
                <div className="lg:col-span-7">
                  <div className="group relative overflow-hidden shadow-lg">
                    <img
                      src={result.image}
                      alt={`Before and after skincare results for ${result.name}`}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Story details */}
                <div className="flex flex-col justify-center lg:col-span-5">
                  <h3
                    className="mb-1 text-espresso"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    }}
                  >
                    {result.name}
                  </h3>
                  <p
                    className="mb-6 text-xs text-espresso/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Age {result.age}
                  </p>

                  {/* Stats row */}
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="border-l-2 border-sage/30 pl-4">
                      <p
                        className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/35"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Concern
                      </p>
                      <p
                        className="mt-1 text-sm text-espresso/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {result.concern}
                      </p>
                    </div>
                    <div className="border-l-2 border-sage/30 pl-4">
                      <p
                        className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/35"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Duration
                      </p>
                      <p
                        className="mt-1 text-sm text-espresso/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {result.duration}
                      </p>
                    </div>
                    <div className="col-span-2 border-l-2 border-gold/30 pl-4">
                      <p
                        className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/35"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Products Used
                      </p>
                      <p
                        className="mt-1 text-sm text-espresso/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {result.product}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 h-px w-10 bg-gradient-to-r from-gold to-transparent" />

                  {/* Quote */}
                  <blockquote
                    className="mb-6 text-sm italic leading-relaxed text-espresso/55 lg:text-base"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                  >
                    "{result.quote}"
                  </blockquote>

                  <p
                    className="text-[10px] uppercase tracking-[0.2em] text-espresso/30"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Individual results may vary. Photos unretouched.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
