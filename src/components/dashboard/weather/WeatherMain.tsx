"use client";
import { colorTheme } from "@/lib/coloring";
export default function WeatherMain() {
  const ct = colorTheme[0];
  return (
    <div className={`flex-1 bg-[#111]/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between ${ct.hoverRingWhite}`}>
      <p className="text-sm text-gray-400">Lokasi Saat Ini ( Jumat, 8 Agustus )</p>
      <p className="text-7xl font-bold">28°</p>
      <div className="flex gap-4 text-gray-400">
        <span>Tinggi 29°</span>
        <span>Rendah 20°</span>
      </div>
      <p className="text-2xl mt-4">Berawan sebagian dengan angin sepoi-sepoi</p>
    </div>
  );
}
