import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const socialLinks = [
    { name: "Twitter", icon: Twitter },
    { name: "LinkedIn", icon: Linkedin },
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@almotix.com",
      link: "mailto:contact@almotix.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 1234567890",
      link: "tel:+11234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Business Ave, Suite 100, New York, NY 10001",
      link: "https://maps.google.com/?q=123+Business+Ave,+Suite+100,+New+York,+NY+10001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Let&apos;s start a{" "}
              <span className="text-primary">conversation.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-xl">
              Transform your business with our expert solutions. Get in touch to
              discuss how we can help you achieve your goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                    {item.content}
                  </p>
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((platform) => (
                  <Button
                    key={platform.name}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  >
                    <platform.icon className="w-5 h-5" />
                    <span className="sr-only">{platform.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <Select>
                  <SelectTrigger className="w-full rounded-md">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service Interest</SelectLabel>
                      <SelectItem value="legal">Legal Services</SelectItem>
                      <SelectItem value="3d">3D Solutions</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="consulting">
                        Business Consulting
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll get back to you within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
