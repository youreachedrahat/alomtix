"use client";

import {
  Aboutus,
  BusinessConsultingSection,
  Contactus,
  HeroSection,
  LegalSection,
  MarketingSection,
  SalesSection,
  ServicesSection,
  Testimonials,
  ThreeDSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <LegalSection />
      <ThreeDSection />
      <MarketingSection />
      <SalesSection />
      <BusinessConsultingSection />
      <Aboutus />
      <Testimonials />
      <Contactus />
    </div>
  );
}
