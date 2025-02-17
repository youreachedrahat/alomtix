import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    content:
      "Almotix has been instrumental in our company's growth. Their innovative solutions have truly transformed our business.",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, InnovateCo",
    content:
      "The team at Almotix is exceptional. Their expertise and dedication have helped us achieve our marketing goals beyond expectations.",
  },
  {
    name: "Mike Johnson",
    position: "CTO, FutureTech",
    content:
      "Almotix's 3D solutions have revolutionized our product development process. We couldn't be happier with the results.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-5xl font-bold mb-12 text-center text-white">
            What Our Clients Say
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animation="fadeIn">
              <div className="bg-white p-6 rounded-lg shadow-md shadow-white">
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
