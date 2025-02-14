"use client";

import {
  Aboutus,
  Contactus,
  HeroSection,
  ServicesSection,
  Testimonials,
  FlexibleSection,
} from "@/components/sections";
import { SERVICES } from "@/config/site";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <ServicesSection />
      <FlexibleSection {...SERVICES.legalSection} />
      <FlexibleSection {...SERVICES.threeDSection} />
      <FlexibleSection {...SERVICES.marketingSection} />
      <FlexibleSection {...SERVICES.salesSection} />
      <FlexibleSection {...SERVICES.businessConsultingSection} />

      <Aboutus />
      <Testimonials />
      <Contactus />
    </div>
  );
}
