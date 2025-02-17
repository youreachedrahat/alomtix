import React from "react";
import {
  Building2,
  Briefcase,
  BarChart3,
  MessageSquare,
  Boxes,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Legal Consulting",
      description: "Expert legal guidance for your business needs",
    },
    {
      icon: Boxes,
      title: "3D Solutions",
      description: "Cutting-edge 3D visualization and modeling",
    },
    {
      icon: BarChart3,
      title: "Marketing Strategy",
      description: "Data-driven marketing solutions",
    },
    {
      icon: Briefcase,
      title: "Sales Optimization",
      description: "Enhance your sales performance",
    },
    {
      icon: MessageSquare,
      title: "Business Consulting",
      description: "Strategic business growth planning",
    },
  ];

  return (
    <section className="p-10 md:py-32 md:px-4 bg-gray-50 rounded-t-[2rem] md:rounded-t-[5rem] overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <h2 className="text-7xl md:text-9xl font-medium mb-16 text-gray-900 relative">
            <AnimateOnScroll animation="slideUp" duration={0.7}>
              Our <br />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slideUp" duration={1}>
              <span className="font-thin italic">&nbsp; Services</span>
            </AnimateOnScroll>
            <div className="absolute -right-20 top-0 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              className={`service-card transition-all  border duration-700 ${
                index === 4 ? "md:col-span-2" : ""
              }`}
              animation="fadeIn"
              duration={1}
            >
              <div className="main-content relative z-10">
                <service.icon
                  style={{ color: "#dfd6c7" }}
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              {/* <div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
                style={{
                  transform: `rotate(${index * 45}deg)`,
                }}
              ></div> */}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl"></div>
    </section>
  );
};
