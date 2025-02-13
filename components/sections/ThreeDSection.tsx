import React from "react";
import { Cuboid, Layers, Wand2, Laptop } from "lucide-react";

export const ThreeDSection = () => {
  return (
    <section className="bg-gray-900">
      <div
        style={{ backgroundColor: "#dfd6c7" }}
        className="p-10 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80"
                    alt="3D Visualization main"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&q=80"
                    alt="3D Model"
                    className="w-full h-[150px] object-cover rounded-2xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1617791160523-401e69c2f55e?auto=format&fit=crop&q=80"
                    alt="3D Render"
                    className="w-full h-[150px] object-cover rounded-2xl"
                  />
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4 mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&q=80"
                    alt="3D Design"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1617791160959-bb0e5cbdb1d6?auto=format&fit=crop&q=80"
                    alt="3D Project"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  Bring your vision{" "}
                  <span style={{ color: "#dfd6c7" }}>to life.</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-xl">
                  Transform your ideas into stunning 3D visualizations with our
                  cutting-edge solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Cuboid,
                    title: "3D Modeling",
                    description: "Professional-grade 3D asset creation",
                  },
                  {
                    icon: Layers,
                    title: "Visualization",
                    description: "Photorealistic rendering and animation",
                  },
                  {
                    icon: Wand2,
                    title: "AR/VR Ready",
                    description: "Immersive experiences for any platform",
                  },
                  {
                    icon: Laptop,
                    title: "Web Integration",
                    description: "Seamless 3D web implementations",
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
                  Start Project
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
