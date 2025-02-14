"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@heroui/navbar";
import { Button } from "@heroui/button";

const services = [
  { name: "Legal Services", section: "legal" },
  { name: "3D Solutions", section: "3d" },
  { name: "Marketing", section: "marketing" },
  { name: "Sales", section: "sales" },
  { name: "Business Consulting", section: "consulting" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      // className="fixed top-0 left-0 right-0 z-40 px-4 py-4"
      className={`fixed top-0 left-0 right-0 z-40 px-4 py-1 mt-3 max-w-full md:max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20"
          : "bg-white/5 backdrop-blur-sm"
      }`}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            className={`flex justify-start items-center gap-1 text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-gray-900"
            }`}
            href="/"
          >
            ALMOTIX
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
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
                <Button
                  key={service.section}
                  onPress={() => scrollToSection(service.section)}
                  variant="ghost"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/50 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200 border-none"
                >
                  {service.name}
                </Button>
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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden justify-end"
        />
      </NavbarContent>
      {/* </div> */}

      {/* Mobile Menu */}

      <NavbarMenu className="py-10">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="w-full px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          Home
        </Link>
        <Button
          onPress={() => scrollToSection("services")}
          variant="ghost"
          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200 flex items-center justify-start border-none"
        >
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <div className="border-l-2 border-gray-700 ml-4">
          {services.map((service) => (
            <NavbarMenuItem key={service.name}>
              <Button
                className="data-[active=true]:text-primary data-[active=true]:font-medium justify-start border-none  px-8 py-2 "
                // className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/20 rounded-lg transition-colors duration-200"

                variant="ghost"
                onPress={() => scrollToSection(service.section)}
              >
                {service.name}
              </Button>
            </NavbarMenuItem>
          ))}
        </div>
        <Button
          onPress={() => scrollToSection("about")}
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200 border-none"
        >
          About Us
        </Button>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="w-full px-4 py-2 text-gray-800 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          Contact Us
        </Link>
      </NavbarMenu>
    </NextUINavbar>
  );
};
