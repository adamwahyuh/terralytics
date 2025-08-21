"use client";

export default function WeatherMain() {
  return (
    <div className="flex-1 bg-[#111]/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <p className="text-sm text-gray-400">Current Location ( Friday, August 8 )</p>
      <p className="text-7xl font-bold">28°</p>
      <div className="flex gap-4 text-gray-400">
        <span>H 29°</span>
        <span>L 20°</span>
      </div>
      <p className="text-2xl mt-4">Partly cloudy with mild breeze</p>
    </div>
  );
}
