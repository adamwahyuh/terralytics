"use client";

import FaqBox from "@/components/faq/FaqBox";
import { colorTheme } from "@/lib/coloring";

export default function FAQ() {
    const color = colorTheme[0];
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-5"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
        {/* Box FAQ */}
        <div className={` ${color.cardColorGreenGradient} backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 md:p-20`}>
        <div className="text-center mb-10 ">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className=" text-green-500 mt-3 max-w-2xl mx-auto">
            Find your answer Here!
          </p>
        </div>
        
          <FaqBox />
        </div>
      </div>
  );
}
