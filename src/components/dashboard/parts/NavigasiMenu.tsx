"use client";

import { useState } from "react";
import { colorTheme } from "@/lib/coloring";
import CropAnalysis from "../CropAnalysis";

export default function NavigasiMenu() {
    const color = colorTheme[0];
    const [activeTab, setActiveTab] = useState("crop"); 

    return (
        <div className="w-full text-white">
            {/* Navigation Tabs */}
            <div className={`flex justify-center gap-4 backdrop-blur-3xl px-6 py-3 bg-${color.primaryColor} `}>
                <button
                    className={`px-4 py-2 rounded-md transition-all duration-300  cursor-pointer ${
                        activeTab === "crop" ? `${color.gradientGreenYellow} + text-black` : "hover:bg-black/20"
                    }`}
                    onClick={() => setActiveTab("crop")}
                >
                    Crop Analysis
                </button>
                <button
                    className={`px-4 py-2 rounded-md transition-all duration-300  cursor-pointer ${
                        activeTab === "weather" ? `${color.gradientGreenYellow} + text-black` : "hover:bg-black/20"
                    }`}
                    onClick={() => setActiveTab("weather")}
                >
                    Weather
                </button>
                <button
                    className={`px-4 py-2 rounded-md transition-all  duration-300 cursor-pointer ${
                        activeTab === "yield" ? `${color.gradientGreenYellow} + text-black` : "hover:bg-black/20"
                    }`}
                    onClick={() => setActiveTab("yield")}
                >
                    Yield Optimization
                </button>
                <button
                    className={`px-4 py-2 rounded-md transition-all duration-300  cursor-pointer ${
                        activeTab === "irrigation" ? `${color.gradientGreenYellow}` : "hover:bg-black/20"
                    }`}
                    onClick={() => setActiveTab("irrigation")}
                >
                    Smart Irrigation
                </button>
            </div>

            {/* Render Section */}
            <div className="">
                {activeTab === "crop" && <CropAnalysis />}
                {activeTab === "weather" && <div>Weather Component Here</div>}
                {activeTab === "yield" && <div>Yield Optimization Component Here</div>}
                {activeTab === "irrigation" && <div>Smart Irrigation Component Here</div>}
            </div>
        </div>
    );
}
