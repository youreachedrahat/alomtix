import React from "react";
import { BarChart3, Target, Megaphone, LineChart } from "lucide-react";

export const MarketingSection = () => {
  return (
    <section id="marketing" style={{ backgroundColor: "#dfd6c7" }}>
      <div className="bg-gray-900 p-10 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  Data-driven{" "}
                  <span style={{ color: "#dfd6c7" }}>marketing.</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-xl">
                  Transform your marketing strategy with actionable insights and
                  proven methodologies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Deep insights into your market performance",
                  },
                  {
                    icon: Target,
                    title: "Targeting",
                    description: "Precise audience segmentation and targeting",
                  },
                  {
                    icon: Megaphone,
                    title: "Campaigns",
                    description: "Strategic campaign planning and execution",
                  },
                  {
                    icon: LineChart,
                    title: "Growth",
                    description:
                      "Sustainable growth strategies and optimization",
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

            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
              <div className="col-span-2 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Marketing Analytics"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-1 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Marketing Strategy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-1 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Business Growth"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Marketing Performance"
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
