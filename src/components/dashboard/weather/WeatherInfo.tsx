"use client";
import { Cloud } from "lucide-react";
import { colorTheme } from "@/lib/coloring";
export default function WeatherInfo() {
  const ct = colorTheme[0];
  return (
    <div className={`w-full md:w-1/3 bg-[#111]/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between ${ct.hoverRingWhite}`}>
      <p className="text-sm text-gray-400">
        Dengan data real-time dan teknologi canggih, kami menyediakan prakiraan cuaca yang andal untuk lokasi mana pun di seluruh dunia.
      </p>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Baru Dicari</p>
          <a href="#" className="text-sm text-gray-400 hover:text-white">Lihat semua</a>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#222]/50 rounded-xl p-3 flex flex-col items-center text-center flex-1">
            <Cloud className="w-6 h-6 mb-1" />
            <p className="text-lg font-semibold">24°</p>
            <p className="text-sm">Lahan B</p>
            <p className="text-xs text-gray-400">Berawan Sebagian</p>
          </div>
          <div className="bg-[#222]/50 rounded-xl p-3 flex flex-col items-center text-center flex-1">
            ⛈️
            <p className="text-lg font-semibold">16°</p>
            <p className="text-sm">Lahan C</p>
            <p className="text-xs text-gray-400">Hujan Petir</p>
          </div>
        </div>
      </div>
    </div>
  );
}
