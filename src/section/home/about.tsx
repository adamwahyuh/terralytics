"use client";


import LogoType from "@/components/LogoType";

import { colorTheme } from "@/lib/coloring";
import { Play } from "lucide-react";

export default function AboutSection() {
  const color = colorTheme[0];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <LogoType />
        <h2 className="text-2xl font-semibold mt-2">
          Smart Farming Revolution
        </h2>
        <p className="mt-2 text-sm md:text-base max-w-xl">
          Transforming Agriculture with Artificial Intelligence & Big Data Analytics
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            className={`bg-white/20 border border-white text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition ${color.cursorPointer}`}
          >
            <span>98% Accuracy in Crop Prediction</span>
          </button>
          <button
            className={`${color.gradientGreenYellow} ${color.cursorPointer} text-white px-6 py-2 rounded-full hover:opacity-90 transition flex gap-2 items-center`}
          >
            <Play />
            Start AI Analysis
          </button>
        </div>
      </div>


    </div>
  );
}
