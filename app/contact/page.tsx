import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className=" bg-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Let's start a <br />
                <span style={{ color: "#dfd6c7" }}>conversation.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-xl">
                Transform your business with our expert solutions. Get in touch
                to discuss how we can help you achieve your goals.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@almotix.com",
                    link: "mailto:contact@almotix.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    link: "tel:+15551234567",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "123 Business Ave, Suite 100, New York, NY 10001",
                    link: "#",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Mon - Fri: 9:00 AM - 6:00 PM",
                    link: "#",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <item.icon
                      className="w-8 h-8 mb-4"
                      style={{ color: "#dfd6c7" }}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                      {item.content}
                    </p>
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div>
              <form className="bg-gray-50 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="legal">Legal Services</option>
                      <option value="3d">3D Solutions</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="consulting">Business Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24-48 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
