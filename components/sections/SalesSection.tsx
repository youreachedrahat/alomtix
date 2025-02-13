import React from "react";
import { Briefcase, TrendingUp, Users2, BadgeDollarSign } from "lucide-react";

export const SalesSection = () => {
  return (
    <section className="bg-gray-900">
      <div
        style={{ backgroundColor: "#dfd6c7" }}
        className="p-10 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
                <div className="col-span-3 row-span-6">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Sales Team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="col-span-3 row-span-3">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Business Meeting"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="col-span-3 row-span-3">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                      alt="Sales Strategy"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                      alt="Business Growth"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  Accelerate your{" "}
                  <span style={{ color: "#dfd6c7" }}>sales.</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-xl">
                  Optimize your sales process and drive revenue growth with our
                  comprehensive solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Briefcase,
                    title: "Sales Strategy",
                    description: "Customized strategies for your market",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance",
                    description: "Track and improve sales metrics",
                  },
                  {
                    icon: Users2,
                    title: "Team Training",
                    description: "Expert sales team development",
                  },
                  {
                    icon: BadgeDollarSign,
                    title: "Revenue Growth",
                    description: "Maximize your revenue potential",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white hover:bg-gray-100 transition-colors"
                  >
                    <feature.icon className="w-8 h-8 mb-4 text-gray-900" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  Boost Sales
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
