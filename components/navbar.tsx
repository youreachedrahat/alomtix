"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Legal Services", section: "legal" },
  { name: "3D Solutions", section: "3d" },
  { name: "Marketing", section: "marketing" },
  { name: "Sales", section: "sales" },
  { name: "Business Consulting", section: "consulting" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("id", sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
      <nav
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20"
            : "bg-white/5 backdrop-blur-sm"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-gray-900"
              }`}
            >
              ALMOTIX
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  onClick={() => scrollToSection("services")}
                  className={`flex items-center space-x-1 transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                </button>

                <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-lg rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {services.map((service) => (
                    <button
                      key={service.section}
                      onClick={() => scrollToSection(service.section)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/50 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-800 hover:text-gray-900"
                }`}
              >
                About Us
              </button>

              <Link
                href="/contact"
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-900/90 text-white hover:bg-gray-800"
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="py-2 space-y-2">
              <div className="relative">
                <button
                  onClick={() => scrollToSection("services")}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200 flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service) => (
                    <button
                      key={service.section}
                      onClick={() => scrollToSection(service.section)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/20 rounded-lg transition-colors duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                About Us
              </button>
              <Link
                href="/contact"
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
