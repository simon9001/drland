import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import WhyUsSection from "./components/WhyUsSection";
import IndustriesCarousel from "./components/IndustriesCarousel";
import ProcessTimeline from "./components/ProcessTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ConsultationCTA from "./components/ConsultationCTA";
// import TestimonialsSection from "./components/TestimonialsSection";

export const metadata: Metadata = {
  title: "HIDRACORE Engineering — Water, Energy & Infrastructure Consultancy",
  description:
    "Full-service engineering contractor for solar power, borehole drilling, water treatment, irrigation, swimming pools and engineering consultancy. We assess, design, supply and install.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyUsSection />
      <IndustriesCarousel />
      <ProcessTimeline />
      <ProjectsShowcase />
      <ConsultationCTA />
      {/* <TestimonialsSection /> */}
    </>
  );
}
