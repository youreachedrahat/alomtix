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
import { FlexibleSection } from "@/components/sections/servicesComponent";
import { SERVICES } from "@/config/site";

import { ShieldCheck, Rocket, Code } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <ServicesSection />
      <FlexibleSection {...SERVICES.legalSection} />
      {/* <LegalSection /> */}
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
