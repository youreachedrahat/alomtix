import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { Marquee } from "../magicui/marquee";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Almotix transformed our business operations completely. Their expertise in both technical and strategic aspects is unmatched.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content:
      "The level of professionalism and innovation they bring to the table is exceptional. Best decision we made for our company.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthX",
    content:
      "Their marketing strategies helped us achieve 300% growth in just six months. Incredible results!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "David Kim",
    role: "Founder, NextLevel",
    content:
      "The 3D visualization services exceeded our expectations. They truly understand modern business needs.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Lisa Thompson",
    role: "Legal Director, LegalTech",
    content:
      "Outstanding legal consulting services. They make complex legal matters simple and actionable.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
  },
  {
    name: "James Wilson",
    role: "Sales Manager, SalesPro",
    content:
      "Our sales team performance improved dramatically after implementing their strategies.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="w-[270px] sm:min-w-[300px] sm:max-w-[300px] p-4 mx-3 bg-white rounded-2xl shadow-lg">
    <div className="flex items-center space-x-3 mb-3">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
        width={500}
        height={500}
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
    <p className="text-gray-700 text-sm line-clamp-2 sm:line-clamp-3">
      {testimonial.content}
    </p>
  </div>
);

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-0">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </Marquee>
    </div>
  );
}
