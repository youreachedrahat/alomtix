import React from "react";
import { Scale, Shield, Users, Hourglass } from "lucide-react";

export const LegalSection = () => {
  return (
    <section id="legal" className="bg-gray-50">
      <div className="bg-gray-900 p-10 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  Top legal talent,{" "}
                  <span style={{ color: "#dfd6c7" }}>on demand.</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-xl">
                  Access world-class legal expertise tailored to your business
                  needs, when you need it most.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Scale,
                    title: "Expert Counsel",
                    description:
                      "Specialized legal advice from industry veterans",
                  },
                  {
                    icon: Shield,
                    title: "Risk Management",
                    description: "Proactive legal protection for your business",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Team",
                    description: "Your personal legal department",
                  },
                  {
                    icon: Hourglass,
                    title: "Quick Response",
                    description: "24/7 access to legal support",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <feature.icon
                      className="w-8 h-8 mb-4"
                      style={{ color: "#dfd6c7" }}
                    />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                  View Services
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Legal document"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Legal office"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Legal consultation"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Business meeting"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
