/*
 * Smooth scroll utility for hash-link navigation.
 * Uses a custom easing function for a polished, buttery-smooth feel
 * with navbar offset compensation.
 */

import type React from "react";

const NAVBAR_HEIGHT = 72; // px — matches the fixed navbar height
const SCROLL_DURATION = 900; // ms

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const smoothScrollTo = (targetId: string): void => {
  const id = targetId.replace(/^#/, "");

  // Scroll to top for empty hash or "#"
  if (!id) {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateToTop = (currentTime: number): void => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - eased));

      if (progress < 1) {
        requestAnimationFrame(animateToTop);
      }
    };

    requestAnimationFrame(animateToTop);
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  const start = window.scrollY;
  const distance = targetPosition - start;
  const startTime = performance.now();

  const animate = (currentTime: number): void => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export const handleSmoothClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(href);
    // Update URL hash without jumping
    window.history.pushState(null, "", href);
  }
};
