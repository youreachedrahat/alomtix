import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "scaleUp";
  className?: string;
  duration?: number | null;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = "fadeIn",
  className = "",
  duration = null,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 50 : 0,
      scale: animation === "scaleUp" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: duration || 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
