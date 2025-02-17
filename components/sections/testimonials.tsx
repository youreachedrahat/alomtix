import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { TestimonialMarquee } from "./testimonialMarquee";

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-900 w-full">
      <div>
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="slideUp">
            <h2 className="text-5xl font-bold mb-12 text-center text-white">
              What Our Clients Say
            </h2>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="fadeIn">
          <TestimonialMarquee />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
