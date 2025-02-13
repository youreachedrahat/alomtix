"use client";

import {
  BusinessConsultingSection,
  HeroSection,
  LegalSection,
  MarketingSection,
  SalesSection,
  ServicesSection,
  TestimonialSection,
  ThreeDSection,
} from "@/components/sections";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function HomePage() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection />

      <ServicesSection />

      <LegalSection />
      <ThreeDSection />
      <MarketingSection />
      <SalesSection />
      <BusinessConsultingSection />

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 fade-up">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-right">
              <p className="text-lg text-gray-700 mb-6">
                At Almotix, we&apos;re dedicated to transforming businesses
                through innovative solutions and expert consulting. Our team of
                professionals brings years of experience across multiple
                industries.
              </p>
              <p className="text-lg text-gray-700">
                We believe in creating lasting partnerships with our clients,
                understanding their unique challenges, and delivering tailored
                solutions that drive real results.
              </p>
            </div>
            <div className="fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 fade-up">
              Why Choose Almotix?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="fade-in-right">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="fade-in-left">
                <div className="space-y-4 stagger-children">
                  {[
                    "Expert team with proven track record",
                    "Tailored solutions for your unique needs",
                    "Innovative approaches to complex challenges",
                    "Commitment to client success",
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        style={{ backgroundColor: "#dfd6c7" }}
                        className="w-2 h-2 rounded-full"
                      ></div>
                      <p className="text-lg text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Marquee */}
        </div>
        <div className="scale-up">
          <TestimonialSection />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ backgroundColor: "#dfd6c7" }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let&apos;s work together to achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
