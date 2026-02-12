/*
 * DESIGN: Terrain — Earthy Editorial with Bold Asymmetry
 * Home page: Composes all landing page sections
 * Fraunces (display) + Karla (body)
 * Colors: cream, espresso, sage, clay, gold
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import IngredientsSection from "@/components/IngredientsSection";
import RoutineSection from "@/components/RoutineSection";
import ResultsSection from "@/components/ResultsSection";
import PhilosophySection from "@/components/PhilosophySection";
import BrandTimeline from "@/components/BrandTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import NewsletterSection from "@/components/NewsletterSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ComparisonSection />
      <IngredientsSection />
      <RoutineSection />
      <ResultsSection />
      <PhilosophySection />
      <BrandTimeline />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
      <InstagramSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
