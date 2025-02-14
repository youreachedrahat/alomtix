import {
  BadgeDollarSign,
  BarChart,
  BarChart3,
  Briefcase,
  Code,
  Cuboid,
  Hourglass,
  Laptop,
  Layers,
  LightbulbIcon,
  LineChart,
  Megaphone,
  Puzzle,
  Rocket,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Users2,
  Wand2,
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
  legalSection: {
    id: "legal",
    title: "Top legal talent,",
    titleHighlight: "on demand.",
    subtitle:
      "Access world-class legal expertise tailored to your business needs, when you need it most.",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "image",
        height: 192,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "image",
        height: 256,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "image",
        height: 256,
        width: 384,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "image",
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
  threeDSection: {
    id: "3d",
    title: "Bring your vision",
    titleHighlight: "to life.",
    backgroundColor: "#dfd6c7",

    subtitle:
      "Transform your ideas into stunning 3D visualizations with our cutting-edge solutions.",
    features: [
      {
        icon: Cuboid,
        title: "3D Modeling",
        description: "Professional-grade 3D asset creation",
      },
      {
        icon: Layers,
        title: "Visualization",
        description: "Photorealistic rendering and animation",
      },
      {
        icon: Wand2,
        title: "AR/VR Ready",
        description: "Immersive experiences for any platform",
      },
      {
        icon: Laptop,
        title: "Web Integration",
        description: "Seamless 3D web implementations",
      },
    ],
    primaryButtonText: "Start Project",
    secondaryButtonText: "View Portfolio",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "3D Visualization main",
        width: 80,
        height: 80,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "3D Model",
        width: 150,
        height: 150,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "3D Render",
        width: 150,
        height: 150,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "3D Design",
        width: 150,
        height: 40,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "3D Project",
        width: 150,
        height: 40,
      },
    ],
    isReversed: true,
    isDarkBackground: false,
  },
  marketingSection: {
    id: "marketing",
    title: "Data-driven Marketing",
    titleHighlight: "for Maximum Impact",
    subtitle: "Leverage insights to optimize your campaigns and drive growth.",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Marketing Analytics",
        height: 200,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Digital Marketing",
        height: 400,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Growth Strategies",
        height: 600,
        width: 200,
      },
    ],
    features: [
      {
        icon: BarChart3,
        title: "Analytics",
        description: "Deep insights into your market performance.",
      },
      {
        icon: Target,
        title: "Targeting",
        description: "Precision audience segmentation for higher conversion.",
      },
      {
        icon: Megaphone,
        title: "Campaigns",
        description: "Data-driven campaign execution with measurable results.",
      },
      {
        icon: LineChart,
        title: "Growth",
        description: "Sustainable growth strategies powered by analytics.",
      },
    ],
    primaryButtonText: "Get Started",
    secondaryButtonText: "Learn More",
    isReversed: false,
    isDarkBackground: true,
  },

  salesSection: {
    id: "sales",
    title: "Accelerate your",
    titleHighlight: "sales.",
    subtitle:
      "Optimize your sales process and drive revenue growth with our comprehensive solutions.",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Sales Team",
        height: 600,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Business Meeting",
        height: 300,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Sales Strategy",
        height: 200,
        width: 200,
      },
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Business Growth",
        height: 200,
        width: 200,
      },
    ],
    features: [
      {
        icon: Briefcase,
        title: "Sales Strategy",
        description: "Customized strategies for your market.",
      },
      {
        icon: TrendingUp,
        title: "Performance",
        description: "Track and improve sales metrics.",
      },
      {
        icon: Users2,
        title: "Team Training",
        description: "Expert sales team development.",
      },
      {
        icon: BadgeDollarSign,
        title: "Revenue Growth",
        description: "Maximize your revenue potential.",
      },
    ],
    primaryButtonText: "Boost Sales",
    secondaryButtonText: "Learn More",
    isReversed: false,
    isDarkBackground: false,
  },
  businessConsultingSection: {
    id: "consulting",
    title: "Strategic",
    titleHighlight: "Solutions.",
    subtitle:
      "Transform your business with expert consulting and innovative strategies tailored to your goals.",
    images: [
      {
        link: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        alt: "Business Consulting",
        height: 400,
        width: 600,
      },
      {
        link: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
        alt: "Strategy Meeting",
        height: 600,
        width: 400,
      },
      {
        link: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        alt: "Business Growth",
        height: 200,
        width: 600,
      },
    ],
    features: [
      {
        icon: LightbulbIcon,
        title: "Strategic Planning",
        description: "Develop comprehensive business strategies.",
      },
      {
        icon: TrendingUp,
        title: "Growth Advisory",
        description: "Scale your business effectively.",
      },
      {
        icon: Puzzle,
        title: "Process Optimization",
        description: "Streamline operations for efficiency.",
      },
      {
        icon: BarChart,
        title: "Performance Analysis",
        description: "Data-driven business insights.",
      },
    ],
    primaryButtonText: "Get Started",
    secondaryButtonText: "Learn More",
    isReversed: false,
    isDarkBackground: true,
  },
};
