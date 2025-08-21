"use client";
import { Droplets, Wind } from "lucide-react";

export default function WeatherSidebar() {
  return (
    <div className="bg-[#111]/50 rounded-2xl shadow-lg p-6 w-full md:w-1/4 flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold">Weather Conditions</h2>
        <p className="text-5xl font-bold mt-2">72%</p>
        <p className="text-sm text-gray-400">Farming Optimal</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
          <div className="bg-green-500 h-2 rounded-full w-[72%]" />
        </div>
        <span className="mt-3 inline-block px-3 py-1 bg-green-600 text-xs rounded-full">
          Ideal Conditions
        </span>
      </div>

      {/* Temperature */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">🌡️ <span>Temperature</span></div>
        <span className="text-green-400 text-sm">Optimal</span>
      </div>
      <div>
        <p className="text-xl">26°C</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-green-500 h-2 rounded-full w-[78%]" />
        </div>
      </div>

      {/* Humidity */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4" /> <span>Humidity</span>
        </div>
        <span className="text-blue-400 text-sm">Good</span>
      </div>
      <div>
        <p className="text-xl">65%</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-blue-500 h-2 rounded-full w-[65%]" />
        </div>
      </div>

      {/* Wind Speed */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4" /> <span>Wind Speed</span>
        </div>
        <span className="text-yellow-400 text-sm">Moderate</span>
      </div>
      <div>
        <p className="text-xl">12 km/h</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-yellow-500 h-2 rounded-full w-[60%]" />
        </div>
      </div>
    </div>
  );
}
