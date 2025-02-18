import type React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}
interface FeatureImage {
  link: string;
  alt: string;
  height: number;
  width: number;
}
export interface FlexibleSectionProps {
  id: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  images: FeatureImage[];
  features: FeatureCard[];
  primaryButtonText: string;
  secondaryButtonText: string;
  isReversed: boolean;
  isDarkBackground: boolean;
}

export const FlexibleSection: React.FC<FlexibleSectionProps> = (props) => {
  const {
    id,
    title,
    titleHighlight,
    subtitle,
    images,
    features,
    primaryButtonText,
    secondaryButtonText,
    isReversed,
    isDarkBackground,
  } = props;
  const upBgColor = isDarkBackground ? "bg-[#dfd6c7]" : "bg-gray-900";
  const bgColor = !isDarkBackground ? "bg-gray-900" : "bg-[#dfd6c7]";
  const textColor = isDarkBackground ? "text-white" : "text-gray-900";
  const highlightColor = isDarkBackground ? "#dfd6c7" : "#fff";
  const cardBgColor = isDarkBackground
    ? "bg-gray-800/50 hover:bg-gray-800"
    : "bg-white hover:bg-gray-100";
  const cardTextColor = isDarkBackground ? "text-white" : "text-gray-900";
  const cardDescriptionColor = isDarkBackground
    ? "text-gray-400"
    : "text-gray-600";
  const buttonBgColor = isDarkBackground ? "bg-white" : "bg-gray-900";
  const buttonTextColor = isDarkBackground ? "text-gray-900" : "text-white";

  return (
    <section
      id={id}
      className={`${
        isDarkBackground ? "bg-gray-900" : "bg-[#dfd6c7]"
      } px-10 py-20 md:py-32 md:px-4 rounded-t-[2rem] md:rounded-t-[5rem]`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}
        >
          <div className={`space-y-8 ${isReversed ? "lg:col-start-2" : ""}`}>
            <AnimateOnScroll animation="slideUp" className="space-y-8">
              <div>
                <AnimateOnScroll animation="slideUp">
                  <h2 className={`text-5xl font-bold ${textColor} mb-4`}>
                    {title}{" "}
                    <span style={{ color: highlightColor }}>
                      {titleHighlight}
                    </span>
                  </h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slideUp">
                  <p
                    className={`text-base md:text-xl ${isDarkBackground ? "text-gray-300" : "text-gray-700"} max-w-xl`}
                  >
                    {subtitle}
                  </p>
                </AnimateOnScroll>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <AnimateOnScroll key={index} animation="fadeIn">
                    <div
                      className={`p-4 sm:p-6 rounded-2xl ${cardBgColor} transition-colors`}
                    >
                      <feature.icon
                        className={`w-7 h-7 mb-3 sm:w-8 sm:h-8 sm:mb-4 ${cardTextColor}`}
                      />
                      <h3
                        className={`text-base sm:text-lg font-semibold ${cardTextColor} mb-2 `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`${cardDescriptionColor} text-xs sm:text-sm`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  className={`px-8 py-3 rounded-full ${buttonBgColor} ${buttonTextColor} font-semibold hover:opacity-90 transition-colors w-full sm:w-auto`}
                >
                  {primaryButtonText}
                </button>
                <button
                  className={`px-8 py-3 rounded-full border-2 ${isDarkBackground ? "border-white text-white hover:bg-white/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} font-semibold transition-colors w-full sm:w-auto`}
                >
                  {secondaryButtonText}
                </button>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="scaleUp">
            <div className={`${isReversed ? "lg:col-start-1" : ""}`}>
              <ImageGrid images={images} isDarkBackground={isDarkBackground} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

// -------------------

const ImageGrid: React.FC<{
  images: FeatureImage[];
  isDarkBackground: boolean;
}> = ({ images, isDarkBackground }) => {
  const gridClasses = getGridClasses(images.length);

  return (
    <div className={`grid grid-cols-6 gird-rows-6 gap-4`}>
      {images.map((img, index) => (
        <div key={index} className={`${gridClasses[index] || ""}`}>
          <Image
            src={img.link || "/placeholder.svg"}
            alt={img.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

const getGridClasses = (length: any) => {
  switch (length) {
    case 3:
      return [
        "col-span-3 row-span-5 row-start-2",
        "col-span-3 row-span-3 ",
        "col-span-3 row-span-5 row-start-3",
      ];
    case 4:
      return [
        "col-span-2 row-span-4 row-start-2",
        "col-span-1 row-span-6",
        "col-span-3 row-span-1 ",
        "col-span-2 row-span-2",
      ];
    case 5:
      return [
        "col-span-2 row-span-1",
        "col-span-3 row-span-1",
        "col-span-1 row-span-4",
        "col-span-4 row-span-3",
        "col-span-1 row-span-3",
      ];
    case 6:
      return [
        "col-span-4 row-span-4",
        "col-span-2 row-span-2",
        "col-span-2 row-span-2",
        "col-span-1 row-span-2",
        "col-span-3 row-span-2",
        "col-span-2 row-span-2",
      ];
    default:
      return Array(length).fill("col-span-1 row-span-1");
  }
};
