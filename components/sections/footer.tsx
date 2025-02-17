"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="max-sm:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">Almotix</h3>
          <p className="text-sm">
            Transforming businesses through innovative solutions and expert
            consulting.
          </p>
        </div>
        {["Services", "Company", "Resources"].map((title, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    style={{ color: "#dfd6c7" }}
                    className="text-sm hover:opacity-80 transition-opacity"
                  >
                    {title} Link {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto mt-8 pt-8 border-t border-gray-800 overflow-hidden text-5xl text-gray-500">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
          className="whitespace-nowrap"
        >
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ALMOTIX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>
    </footer>
  );
}
