"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // Simple font cycle (no delay, no bold/italic swaps)
  const fonts = [
    "font-sans",
    "font-serif",
    "font-mono",
  ];
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 500); // every 0.5s
    return () => clearInterval(interval);
  }, [fonts.length]);

  return (
    <div className="flex flex-col items-center w-full h-full px-8 py-6 overflow-hidden">
      {/* Top Tabs */}
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
        {/* Newest Arrivals */}
        <div className="w-48 h-24 bg-white text-black flex flex-col items-center justify-center rounded shadow-md transition-transform duration-300 hover:-rotate-12">
          <span className="leading-tight text-[1.25rem] font-extrabold">Newest</span>
          <span className="leading-tight text-[1.25rem] font-extrabold">Arrivals</span>
        </div>

        {/* Other Tabs */}
        {["Music", "Art", "Film", "About"].map((label, i) => (
          <a
            key={i}
            href={label === "About" ? "/about" : "#"}
            className="w-36 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:-rotate-12 px-3"
          >
            <span className="text-base font-semibold leading-none whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-white text-center mt-12 max-w-3xl">
        <h1 className={`text-5xl md:text-6xl uppercase ${fonts[fontIndex]}`}>
          Chinese Finger Trap
        </h1>
        <p className="mt-4 text-lg italic">a gallery of things we love</p>
      </div>
    </div>
  );
}
