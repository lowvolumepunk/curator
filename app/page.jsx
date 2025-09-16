"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // Font cycling (first font shows 3s, then cycles every 0.5s)
  const fonts = [
    "font-sans",
    "font-serif",
    "font-mono",
    "font-extrabold",
    "font-light",
    "font-thin",
    "font-bold",
    "font-medium",
    "font-black",
    "font-extrabold italic",
    "font-semibold",
    "font-normal",
  ];
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % fonts.length);
      }, 500);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(startTimeout);
  }, [fonts.length]);

  return (
    <div className="flex flex-col items-center w-full h-full px-8 py-6 overflow-hidden">
      {/* Top Boxes */}
      <div className="flex flex-wrap gap-4 justify-center max-w-5xl">
        {/* Newest Arrivals (stacked text) */}
        <div className="w-44 h-24 bg-white text-black flex flex-col items-center justify-center rounded shadow-md transition-transform duration-300 hover:-rotate-12">
          <span className="leading-tight text-[1.25rem] font-extrabold">Newest</span>
          <span className="leading-tight text-[1.25rem] font-extrabold">Arrivals</span>
        </div>

        {/* Other Boxes */}
        {["Music","Digital Art","Physical Art","Films","Short Films","Architecture","About"].map((label, i) => (
          <a
            key={i}
            href={label === "About" ? "/about" : "#"}
            className="w-36 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:-rotate-12 px-3"
          >
            <span className="text-sm sm:text-base font-semibold leading-none whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-white text-center mt-12 max-w-3xl">
        <h1 className={`text-5xl md:text-6xl font-extrabold uppercase ${fonts[fontIndex]}`}>
          Chinese Finger Trap
        </h1>
        <p className="mt-4 text-lg italic">Curator of all things worth curating</p>
      </div>
    </div>
  );
}
