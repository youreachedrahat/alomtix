import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const Aboutus = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-5xl font-bold mb-12 text-gray-900">About Us</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fadeIn">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                At Almotix, we're dedicated to transforming businesses through
                innovative solutions and expert consulting. Our team of
                professionals brings years of experience across multiple
                industries.
              </p>
              <p className="text-lg text-gray-700">
                We believe in creating lasting partnerships with our clients,
                understanding their unique challenges, and delivering tailored
                solutions that drive real results.
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scaleUp">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our Team"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
