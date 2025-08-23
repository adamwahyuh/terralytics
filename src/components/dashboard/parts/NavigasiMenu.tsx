"use client";

import { useState } from "react";
import { colorTheme } from "@/lib/coloring";
import CropAnalysis from "../CropAnalysis";
import Weather from "../weather/Weather";
import YieldDashboard from "../yield/Yield";
import SmartIrrigation from "../smart/SmartIrrigation";
import clsx from "clsx"; 

export default function NavigasiMenu() {
  const color = colorTheme[0];
  const [activeTab, setActiveTab] = useState("crop");

  const tabs = [
    { key: "crop", label: "Analisis Tanaman" },
    { key: "weather", label: "Cuaca" },
    { key: "yield", label: "Optimasi Hasil Panen" },
    { key: "irrigation", label: "Irigasi Pintar" },
  ];

  return (
    <div className="w-full text-white">
      {/* Navigasi Tab */}
      <div
        className={clsx(
          "flex gap-3 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-3xl",
          `bg-${color.primaryColor}`,
          "overflow-x-auto scrollbar-hide" 
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={clsx(
              "flex-shrink-0 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300",
              "cursor-pointer",
              activeTab === tab.key
                ? `${color.gradientGreenYellow} text-black`
                : "hover:bg-black/20"
            )}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Render Bagian Konten */}
      <div className="">
        {activeTab === "crop" && <CropAnalysis />}
        {activeTab === "weather" && <Weather />}
        {activeTab === "yield" && <YieldDashboard />}
        {activeTab === "irrigation" && <SmartIrrigation />}
      </div>
    </div>
  );
}
