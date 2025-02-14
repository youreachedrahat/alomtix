import {
  Code,
  Hourglass,
  Rocket,
  Scale,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Almotix",
  description: "Transforming Businessess.",

  links: {
    github: "https://github.com/youreachedrahat",
  },
};

export const SERVICES = {
  exampleProps: {
    id: "feature-section",
    title: "Empower Your Business with",
    titleHighlight: "Next-Gen Technology",
    subtitle: "Innovative solutions tailored to your needs",
    images: [
      {
        link: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        height: 200,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        height: 400,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
        height: 600,
        width: 200,
      },
    ],
    features: [
      {
        icon: ShieldCheck,
        title: "Secure by Design",
        description:
          "Built-in security ensures your data is protected at all times.",
      },
      {
        icon: Rocket,
        title: "Blazing Fast Performance",
        description:
          "Optimized for speed and efficiency to enhance user experience.",
      },
      {
        icon: Code,
        title: "Developer Friendly",
        description:
          "Clean, modular, and well-documented code for easy customization.",
      },
      {
        icon: Rocket,
        title: "Blazing Fast Performance",
        description:
          "Optimized for speed and efficiency to enhance user experience.",
      },
    ],
    primaryButtonText: "Get Started",
    secondaryButtonText: "Learn More",
    isReversed: false,
    isDarkBackground: true,
  },
  legalSection: {
    id: "legal",
    title: "Top legal talent,",
    titleHighlight: "on demand.",
    subtitle:
      "Access world-class legal expertise tailored to your business needs, when you need it most.",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        height: 192,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        height: 256,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        height: 256,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        height: 192,
        width: 384,
      },
    ],
    features: [
      {
        icon: Scale,
        title: "Expert Counsel",
        description: "Specialized legal advice from industry veterans",
      },
      {
        icon: Shield,
        title: "Risk Management",
        description: "Proactive legal protection for your business",
      },
      {
        icon: Users,
        title: "Dedicated Team",
        description: "Your personal legal department",
      },
      {
        icon: Hourglass,
        title: "Quick Response",
        description: "24/7 access to legal support",
      },
    ],
    primaryButtonText: "Schedule Consultation",
    secondaryButtonText: "View Services",
    isReversed: false,
    isDarkBackground: true,
  },
};
