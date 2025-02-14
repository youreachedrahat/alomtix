"use client";
import type React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface FeatureImage {
  link: string;
  height: number;
  width: number;
}
interface MasonryGridProps {
  images: FeatureImage[];
  className?: string;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  images,
  className = "",
}) => {
  // Breakpoint object for responsive columns
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Randomize image sizes
  const getRandomSize = () => {
    const sizes = [
      { width: 600, height: 400 }, // landscape
      { width: 400, height: 600 }, // portrait
      { width: 600, height: 600 }, // square
      { width: 200, height: 600 }, // square
      { width: 600, height: 200 }, // square
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className={className}>
      <Masonry
        breakpointCols={2}
        className="flex -ml-4 "
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image, index) => {
          const size = getRandomSize();
          console.log(size);
          return (
            <Image
              key={index}
              src={image.link || "/placeholder.svg"}
              alt={`Grid image ${index + 1}`}
              width={size.width}
              height={size.height}
              className={`mb-4 rounded-2xl object-cover hover:scale-105 transition-transform duration-300 w-[${size.width}px] h-[${size.height}px]`}
            />
          );
        })}
      </Masonry>
    </div>
  );
};
