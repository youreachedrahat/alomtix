import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const Contactus = () => {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#dfd6c7" }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeIn">
          <p className="text-xl text-gray-700 mb-8">
            Let's work together to achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
