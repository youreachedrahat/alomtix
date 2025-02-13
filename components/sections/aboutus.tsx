import React from "react";

export const Aboutus = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="">
            <p className="text-lg text-gray-700 mb-6">
              At Almotix, we&apos;re dedicated to transforming businesses
              through innovative solutions and expert consulting. Our team of
              professionals brings years of experience across multiple
              industries.
            </p>
            <p className="text-lg text-gray-700">
              We believe in creating lasting partnerships with our clients,
              understanding their unique challenges, and delivering tailored
              solutions that drive real results.
            </p>
          </div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
