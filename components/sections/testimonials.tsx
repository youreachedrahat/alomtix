import React from "react";
import { TestimonialSection } from "./TestimonialSection";

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 ">
            Why Choose Almotix?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="">
              <div className="space-y-4">
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
      <div className="">
        <TestimonialSection />
      </div>
    </section>
  );
};
