"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
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
      <div className="bg-[#dfd6c7]">
        <AnimateOnScroll animation="slideUp" duration={1}>
          <ServicesSection />
        </AnimateOnScroll>
      </div>
      <div className="bg-bg-gray-50">
        <AnimateOnScroll animation="slideUp" duration={1}>
          <FlexibleSection {...SERVICES.legalSection} />
        </AnimateOnScroll>
      </div>
      <div
        className={
          SERVICES.threeDSection.isDarkBackground
            ? "bg-[#dfd6c7]"
            : "bg-gray-900"
        }
      >
        <AnimateOnScroll animation="slideUp" duration={1}>
          <FlexibleSection {...SERVICES.threeDSection} />
        </AnimateOnScroll>{" "}
      </div>
      <div
        className={
          SERVICES.marketingSection.isDarkBackground
            ? "bg-[#dfd6c7]"
            : "bg-gray-900"
        }
      >
        <AnimateOnScroll animation="slideUp" duration={1}>
          <FlexibleSection {...SERVICES.marketingSection} />
        </AnimateOnScroll>{" "}
      </div>
      <div
        className={
          SERVICES.salesSection.isDarkBackground
            ? "bg-[#dfd6c7]"
            : "bg-gray-900"
        }
      >
        <AnimateOnScroll animation="slideUp" duration={1}>
          <FlexibleSection {...SERVICES.salesSection} />
        </AnimateOnScroll>{" "}
      </div>
      <div
        className={
          SERVICES.businessConsultingSection.isDarkBackground
            ? "bg-[#dfd6c7]"
            : "bg-gray-900"
        }
      >
        <AnimateOnScroll animation="slideUp" duration={1}>
          <FlexibleSection {...SERVICES.businessConsultingSection} />
        </AnimateOnScroll>{" "}
      </div>

      <Aboutus />
      <Testimonials />
      <Contactus />
    </div>
  );
}
