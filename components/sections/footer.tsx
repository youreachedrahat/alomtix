import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
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
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
        © {new Date().getFullYear()} Almotix. All rights reserved.
      </div>
    </footer>
  );
}
