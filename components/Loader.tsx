"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center will-change-transform ${
        isExiting ? "circular-reveal" : ""
      }`}
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-200 rounded-full will-change-transform">
          <div
            className="absolute inset-0 rounded-full border-4 border-t-0 border-r-0 animate-spin will-change-transform"
            style={{ borderColor: "#dfd6c7" }}
          ></div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
          style={{ color: "#dfd6c7" }}
        >
          A
        </div>
      </div>
    </div>
  );
};

export default Loader;
