"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CircularReveal = () => {
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealing(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-white z-50 flex items-center justify-center pointer-events-none"
        initial={false}
        animate={isRevealing ? { background: "rgba(255, 255, 255, 0)" } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-white"
          initial={false}
          animate={
            isRevealing
              ? { clipPath: "circle(0% at center)" }
              : { clipPath: "circle(150% at center)" }
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="relative z-10"
          animate={isRevealing ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin">
            <div className="absolute inset-0 rounded-full border-4 border-t-0 border-r-0 border-[#dfd6c7]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#dfd6c7]">
            A
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CircularReveal;
