import Link from "next/link";
import React from "react";

export const Contactus = () => {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#dfd6c7" }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Let&apos;s work together to achieve your goals
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};
