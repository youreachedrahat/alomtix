import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Almotix transformed our business operations completely. Their expertise in both technical and strategic aspects is unmatched.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content:
      "The level of professionalism and innovation they bring to the table is exceptional. Best decision we made for our company.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthX",
    content:
      "Their marketing strategies helped us achieve 300% growth in just six months. Incredible results!",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    name: "David Kim",
    role: "Founder, NextLevel",
    content:
      "The 3D visualization services exceeded our expectations. They truly understand modern business needs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    name: "Lisa Thompson",
    role: "Legal Director, LegalTech",
    content:
      "Outstanding legal consulting services. They make complex legal matters simple and actionable.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    name: "James Wilson",
    role: "Sales Manager, SalesPro",
    content:
      "Our sales team performance improved dramatically after implementing their strategies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="min-w-[300px] max-w-[300px] p-4 mx-3 bg-white rounded-2xl shadow-lg">
    <div className="flex items-center space-x-3 mb-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">
          {testimonial.name}
        </h4>
        <p className="text-xs text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3"
          style={{ color: "#dfd6c7" }}
          fill="#dfd6c7"
        />
      ))}
    </div>
    <p className="text-gray-700 text-sm line-clamp-4">{testimonial.content}</p>
  </div>
);

export const TestimonialSection = () => {
  return (
    <div className="py-16 overflow-hidden">
      <div className="space-y-6">
        {/* First Row - Left to Right */}
        <div
          className="flex whitespace-nowrap hover:pause-animation"
          style={{ animation: "scroll 30s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div
          className="flex whitespace-nowrap hover:pause-animation"
          style={{ animation: "scroll-reverse 25s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};
