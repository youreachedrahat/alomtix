import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#dfd6c7" }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#dfd6c7 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block transform hover:translate-x-2 transition-transform duration-300">
                  Transform
                </span>
                <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                  Your Business
                </span>
                <span
                  className="block transform hover:translate-x-2 transition-transform duration-300 delay-150"
                  style={{ color: "#fff" }}
                >
                  With Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Join us today to embark on a path towards a more successful and
                innovative future for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl"></div>

            {/* Image Grid */}
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
              <div className="col-span-8 row-span-4 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Business Strategy"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="col-span-4 row-span-6 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
                  alt="Business Team"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="col-span-8 row-span-2 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Business Meeting"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Accent Circle */}
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-[16px] border-gray-900/10 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(223, 214, 199, 0.2), rgba(223, 214, 199, 0.1))",
                backdropFilter: "blur(10px)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
