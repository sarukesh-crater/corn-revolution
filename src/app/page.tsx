"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ScienceSection from "@/components/ScienceSection";
import BreedingSection from "@/components/BreedingSection";
import TestingSection from "@/components/TestingSection";
import HarvestSection from "@/components/HarvestSection";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <main className="relative">
      <GrainOverlay />
      <Navigation />
      <HeroSection />
      <ScienceSection />
      <BreedingSection />
      <TestingSection />
      <HarvestSection />
      <Footer />
    </main>
  );
}
