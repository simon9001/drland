import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import IndustriesCarousel from "./components/IndustriesCarousel";
import ProcessTimeline from "./components/ProcessTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ConsultationCTA from "./components/ConsultationCTA";
import TestimonialsSection from "./components/TestimonialsSection";

export const metadata: Metadata = {
  title: "HIDRACORE — Engineering Water & Energy Infrastructure For The Future",
  description:
    "Integrated water and energy infrastructure solutions: solar power, borehole systems, water treatment, irrigation, pool construction and engineering consultancy.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <IndustriesCarousel />
      <ProcessTimeline />
      <ProjectsShowcase />
      <ConsultationCTA />
      <TestimonialsSection />
    </>
  );
}
