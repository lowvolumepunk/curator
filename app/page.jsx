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
    <>
      {/* Top Boxes */}
      <div className="flex gap-4 p-6">
        {/* Newest Arrivals (stacked text) */}
        <div className="w-48 h-24 bg-white text-black flex flex-col items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12">
          <span className="leading-tight text-[1.35rem] font-extrabold">Newest</span>
          <span className="leading-tight text-[1.35rem] font-extrabold">Arrivals</span>
        </div>

        {/* Other Boxes */}
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-base font-semibold leading-none whitespace-nowrap">Music</span>
        </div>
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-sm font-semibold leading-none whitespace-nowrap">Digital Art</span>
        </div>
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-sm font-semibold leading-none whitespace-nowrap">Physical Art</span>
        </div>
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-base font-semibold leading-none whitespace-nowrap">Films</span>
        </div>
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-sm font-semibold leading-none whitespace-nowrap">Short Films</span>
        </div>
        <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
          <span className="text-sm font-semibold leading-none whitespace-nowrap">Architecture</span>
        </div>

        {/* About Box */}
        <a
          href="/about"
          className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3"
        >
          <span className="text-base font-semibold leading-none whitespace-nowrap">About</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="text-white text-center mt-10 max-w-2xl">
        <h1 className={`text-5xl font-extrabold uppercase ${fonts[fontIndex]}`}>
          Chinese Finger Trap
        </h1>
        <p className="mt-4 text-lg italic">Curator of all things worth curating</p>
      </div>
    </>
  );
}
