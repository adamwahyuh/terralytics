"use client";
import { Droplets, Wind } from "lucide-react";
import { colorTheme } from "@/lib/coloring";
export default function WeatherSidebar() {
  const ct = colorTheme[0];
  return (
    <div className={`bg-[#111]/50 rounded-2xl shadow-lg p-6 w-full md:w-1/4 flex flex-col gap-6 ${ct.hoverRingWhite + ct.cursorPointer}`}>
      <div>
        <h2 className="text-lg font-semibold">Kondisi Cuaca</h2>
        <p className="text-5xl font-bold mt-2">72%</p>
        <p className="text-sm text-gray-400">Optimal untuk Pertanian</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
          <div className="bg-green-500 h-2 rounded-full w-[72%]" />
        </div>
        <span className="mt-3 inline-block px-3 py-1 bg-green-600 text-xs rounded-full">
          Kondisi Ideal
        </span>
      </div>

      {/* Suhu */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">🌡️ <span>Suhu</span></div>
        <span className="text-green-400 text-sm">Optimal</span>
      </div>
      <div>
        <p className="text-xl">26°C</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-green-500 h-2 rounded-full w-[78%]" />
        </div>
      </div>

      {/* Kelembapan */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4" /> <span>Kelembapan</span>
        </div>
        <span className="text-blue-400 text-sm">Baik</span>
      </div>
      <div>
        <p className="text-xl">65%</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-blue-500 h-2 rounded-full w-[65%]" />
        </div>
      </div>

      {/* Kecepatan Angin */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4" /> <span>Kecepatan Angin</span>
        </div>
        <span className="text-yellow-400 text-sm">Sedang</span>
      </div>
      <div>
        <p className="text-xl">12 km/jam</p>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="bg-yellow-500 h-2 rounded-full w-[60%]" />
        </div>
      </div>
    </div>
  );
}
