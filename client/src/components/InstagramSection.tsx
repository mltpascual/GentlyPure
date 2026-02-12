/*
 * DESIGN: Terrain — Earthy Editorial
 * Instagram Gallery: Edge-to-edge grid of customer lifestyle photos
 * Hover reveals Instagram handle overlay with subtle scale animation
 * Warm, earthy tones consistent with brand identity
 */

import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/tBQX8pFKJwU5XQJZNmPWpR-img-1_1770806818000_na1fn_aW5zdGEtMQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L3RCUVg4cEZLSndVNVhRSlpObVBXcFItaW1nLTFfMTc3MDgwNjgxODAwMF9uYTFmbl9hVzV6ZEdFdE1RLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n6CqwzZYg3BfwVVLGGutwDbXIFz0JpqWHGf92XElrrNJC3aCXoM~u4wrZM8enaFRX1mg-WCvfuxQBGXhAcIi6kIuEvcHHMJpKOo22naIJvE1n4TYYUwfhmVCKtyu~VKtVnwBwLiMq8OvsShmbMznBuYtqrAUOAuGZhRytLHye2U4seP6MAUKmsOdWIRkf5IHGwJKxY~NWiMzJYp1-GmmaAH733NupEAT3NzdG~8aS32LrcnsHpQIftgSJta3XN9ynuTYVTjoLA3OLGoaq-LAW2U1uDtoEDW-lU7FDYmjOduI6ruKAzV47ChlpEPrCxYet6hQZ8oGFMlLeTEnQRvHgA__",
    handle: "@sarah.glows",
    caption: "Morning routine with Gently Pure",
    likes: 847,
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/tBQX8pFKJwU5XQJZNmPWpR-img-2_1770806821000_na1fn_aW5zdGEtMg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L3RCUVg4cEZLSndVNVhRSlpObVBXcFItaW1nLTJfMTc3MDgwNjgyMTAwMF9uYTFmbl9hVzV6ZEdFdE1nLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rydSXNpF59RnQZcUCvNjZCpdGVEocjCUFyvb6YApRF0Nswu~bpY80oaCn4A0VGTaoa37rTjzTGCecUh1nXNcGwvTf1BFIJ8kcJwwNTaeUUOHEOkly3wWOnSfOApFfubY6Dw3aFux6fClF8T0WM46rGKIZPBc1-A3-u2sXYmb3m2xtI-WPiMSYhv8vLOAaWNdtTmLgxFgCRNIw0sVnlz49iOkSLfIm6aeXoZa7Gdl28B3Z1DKf16XdFkFY-L2LKWNY~XkX1eQ5TePUcNRiAON6jelsuhPx9Ad6rGL7vgswngEUN8GAAxy8v-0Qrg2w7QA9fujEEGVTB7rnT~ENrOsXw__",
    handle: "@gentlypure",
    caption: "The essentials, laid bare",
    likes: 1243,
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/tBQX8pFKJwU5XQJZNmPWpR-img-3_1770806816000_na1fn_aW5zdGEtMw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L3RCUVg4cEZLSndVNVhRSlpObVBXcFItaW1nLTNfMTc3MDgwNjgxNjAwMF9uYTFmbl9hVzV6ZEdFdE13LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bb~2r8MEh6QQCcTVvc1KSUD9574-M4ofEEO5foYMM0n1Pdl2apNUceXXljb1ipMXm~qGcpc6afxqTeI1fMG6CbqlUD3Rpg7SlhCFWE3dnOAawN~uNa3tHsk9BAOIwWbe2FW5UXGMdyLjCvLaUGDRoSmzLWYTNvGULHwBY4FmQXLOWC~2AUjq6ce~psIG5UGPgogCB5rq911xVnR5M4Je-o2YDQZ7jBVMociRYjhSVfUVtOnhOg6t4SGMeCBdwBOJ4SAcIt7uk10TGva5sJV~v0JnreBB2iKLJg~ObfbLrWi2ey4qz7MaHAULUIuD102tFTNuqf5o6ExYhc9h~7Z0YA__",
    handle: "@emma.skincare",
    caption: "Self-care Sunday essentials",
    likes: 612,
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/tBQX8pFKJwU5XQJZNmPWpR-img-4_1770806826000_na1fn_aW5zdGEtNA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L3RCUVg4cEZLSndVNVhRSlpObVBXcFItaW1nLTRfMTc3MDgwNjgyNjAwMF9uYTFmbl9hVzV6ZEdFdE5BLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lrm8EqMYN1qx8ZAc8yWHxAtGyov8GbJdN2LZ44ZGJOHdUDU18S1hj3KKfNqGOwJvOF~pgSwR-X2rDp3RLRWIbzM0ndYnjk0IRhs4hUjNbCg1jq-QQghkIbRqXRH8WBIasgh~CZJsR~CguM0YMQ~sGCM~e7-8ALG6V1Z7yvm~QaYa04QmodBnzeBjwGNQxqPGQrKI~bkJpsNo3nrN2l0hz-My0QLKLeJd09m4sLKCh9BtoavUZk0pmQtrZ6SaGmKIOOgvK7y97ubeLa4lsYKCgdYfpJg3RDnJr3oEAevYLwNf3ZbaQ5hD6kTtbJ5zE25cvvk3Ey1QxEcaBAEUKiMgHA__",
    handle: "@gentlypure",
    caption: "Pure ingredients, pure results",
    likes: 956,
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/moF8zE2YrmVU4QvVTKERho/sandbox/tBQX8pFKJwU5XQJZNmPWpR-img-5_1770806824000_na1fn_aW5zdGEtNQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbW9GOHpFMllybVZVNFF2VlRLRVJoby9zYW5kYm94L3RCUVg4cEZLSndVNVhRSlpObVBXcFItaW1nLTVfMTc3MDgwNjgyNDAwMF9uYTFmbl9hVzV6ZEdFdE5RLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KkCRDN5JAhziQUU~BlcqcVjkBwTkoN9MJD6QvOQDB20uj0pDsYfYYyyRyLr5uVhyvP1ftX7RBX3pbG1Pnmn92j0Gos8ZIMkp9gQI1XGUL2hpe0BHBH9Nexn0q1zvmnlvcNm09nKVKHk0Q4GVWU-t1DBbgE05n-iQGDuTXDuywAddpVczH4RX7vjRgC6KR91V8XfR-3-W8kdVPjmC28FuuUhj9KT1rJgujLDcQJPqzFeYRjW7qBqPESZaRjBh~SMtQotER6HvgUYVWq0ncoJHYlX~gtfUwKW2MiMdS9dtUsJtkHz8H1Fy91DkoIbTWUJpU3MWVyrqDVVutvQK~ZPJ-w__",
    handle: "@priya.naturalskin",
    caption: "Garden vibes & gentle skincare",
    likes: 731,
  },
];

export default function InstagramSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Section header */}
      <div className="bg-warmWhite px-6 py-16 text-center lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-espresso/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Follow Along
          </p>
          <h2
            className="mb-3 text-3xl tracking-tight text-espresso md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Join our <em className="font-normal italic">community</em>
          </h2>
          <p
            className="mx-auto max-w-md text-sm leading-relaxed text-espresso/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real people, real skin, real results. Tag{" "}
            <span className="font-medium text-espresso/70">@gentlypure</span>{" "}
            to be featured.
          </p>
        </motion.div>
      </div>

      {/* Photo grid — edge-to-edge, no gaps on desktop */}
      <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-3 md:grid-cols-5 md:gap-0">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-espresso/60 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Instagram
                className="mb-3 h-6 w-6 text-cream/90"
                strokeWidth={1.5}
              />
              <p
                className="mb-1 text-sm font-medium text-cream/95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.handle}
              </p>
              <p
                className="mb-3 max-w-[80%] text-center text-xs text-cream/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.caption}
              </p>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-cream/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span
                  className="text-xs text-cream/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.likes.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA bar */}
      <div className="bg-warmWhite py-8 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-espresso/50 transition-colors duration-200 hover:text-espresso/80"
          style={{ fontFamily: "var(--font-body)" }}
          onClick={(e) => e.preventDefault()}
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} />
          Follow @gentlypure on Instagram
        </a>
      </div>
    </section>
  );
}
