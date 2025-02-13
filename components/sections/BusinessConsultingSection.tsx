import React from "react";
import { LightbulbIcon, TrendingUp, Puzzle, BarChart } from "lucide-react";

export const BusinessConsultingSection = () => {
  return (
    <section id="consulting" style={{ backgroundColor: "#dfd6c7" }}>
      <div className="bg-gray-900 p-10 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  Strategic <span style={{ color: "#dfd6c7" }}>solutions.</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-xl">
                  Transform your business with expert consulting and innovative
                  strategies tailored to your goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: LightbulbIcon,
                    title: "Strategic Planning",
                    description: "Develop comprehensive business strategies",
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth Advisory",
                    description: "Scale your business effectively",
                  },
                  {
                    icon: Puzzle,
                    title: "Process Optimization",
                    description: "Streamline operations for efficiency",
                  },
                  {
                    icon: BarChart,
                    title: "Performance Analysis",
                    description: "Data-driven business insights",
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
                  Get Started
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
              <div className="col-span-8 row-span-4">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Business Consulting"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-4 row-span-6">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Strategy Meeting"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-8 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Business Growth"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
