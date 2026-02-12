/*
 * DESIGN: Terrain — Earthy Editorial
 * Philosophy: Large pull quote with editorial layout
 * Texture background, bold serif typography, values grid
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Sparkles, Heart, Recycle } from "lucide-react";

const TEXTURE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/nM5eDCQrGqZp8eqtV1o3BP-img-5_1770802567000_na1fn_dGV4dHVyZS1iYWNrZ3JvdW5k.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L25NNWVEQ1FyR3FacDhlcXRWMW8zQlAtaW1nLTVfMTc3MDgwMjU2NzAwMF9uYTFmbl9kR1Y0ZEhWeVpTMWlZV05yWjNKdmRXNWsuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Cesv~FbyfhDMdr6SlJ092OcQvssej0gAQtYnYmHLHSf8xqsOnKVMUCihMuiStBG180A9bYOTrC~Cz2CxZOxf7m1qG7A7ynrE1FZMe0wknrCccUjcnmh7sbXbjARxkARY4emv8WcOR-Q~AIp318W-6ckOsMUhh-ZkDVGsUHDiRBn~mryW6HPfjspP1BBwymOXexvd3lHvJyWSEcCfCW6fqIeO7wP0zynR6zh3hWQ0H5tTVxoeB81jzDxAwAiHhgsQz4i7KNhJ2T2rBHCqpKVm6S5AxTQRsUQGfnsnI~dTUVeSHrwqy9rqEWJzeJwO2h9jt4QiEcZb1Sd-Irgmlp9UIg__";

const values = [
  {
    icon: ShieldCheck,
    title: "Dermatologist Tested",
    text: "Every formula is tested and approved by board-certified dermatologists for sensitive skin safety.",
  },
  {
    icon: Sparkles,
    title: "Clean Formulations",
    text: "Free from parabens, sulfates, synthetic fragrances, and over 1,200 known irritants.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    text: "Never tested on animals. Certified cruelty-free by Leaping Bunny.",
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    text: "Recyclable glass bottles and FSC-certified paper. Refill program coming soon.",
  },
];

export default function PhilosophySection() {
  const sectionRef = useScrollReveal(0.05);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Texture background */}
      <div className="absolute inset-0 z-0">
        <img
          src={TEXTURE_BG}
          alt=""
          className="h-full w-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cream/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Pull quote — editorial centerpiece */}
        <div className="reveal mb-20 lg:mb-28">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-sage"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Philosophy
          </p>
          <blockquote
            className="max-w-4xl text-espresso"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              lineHeight: 1.3,
              fontStyle: "italic",
            }}
          >
            "We believe skincare should be an act of kindness — to your skin, to
            the earth, and to the future. Every ingredient we choose is a promise
            that less can be more."
          </blockquote>
          <div className="mt-8 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
          <p
            className="mt-4 text-sm text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            — The Gently Pure Team
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-px bg-espresso/8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`reveal reveal-delay-${index + 1} bg-cream p-8 transition-colors duration-300 hover:bg-stone-bg/50 lg:p-10`}
              >
                <Icon
                  className="mb-5 h-5 w-5 text-sage"
                  strokeWidth={1.2}
                />
                <h3
                  className="mb-3 text-base text-espresso"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-espresso/50"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
