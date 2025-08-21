"use client";
import { Cloud } from "lucide-react";

export default function WeatherInfo() {
  return (
    <div className="w-full md:w-1/3 bg-[#111]/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <p className="text-sm text-gray-400">
        With real time data and advanced technology, we provide reliable
        forecasts for any location around the world.
      </p>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Recently Searched</p>
          <a href="#" className="text-sm text-gray-400 hover:text-white">See all </a>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#222]/50 rounded-xl p-3 flex flex-col items-center text-center flex-1">
            <Cloud className="w-6 h-6 mb-1" />
            <p className="text-lg font-semibold">24°</p>
            <p className="text-sm">Field B</p>
            <p className="text-xs text-gray-400">Partly Cloudy</p>
          </div>
          <div className="bg-[#222]/50 rounded-xl p-3 flex flex-col items-center text-center flex-1">
            ⛈️
            <p className="text-lg font-semibold">16°</p>
            <p className="text-sm">Field C</p>
            <p className="text-xs text-gray-400">Rain Thunder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
