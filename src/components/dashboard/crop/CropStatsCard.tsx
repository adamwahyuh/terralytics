"use client";
import { colorTheme } from "@/lib/coloring";

export default function CropStatsCard() {
  const ct = colorTheme[0];
  return (
    <div className={`rounded-2xl bg-[rgba(6,33,18,0.55)]/80 ring-1 ring-white/6 backdrop-blur-md p-5 shadow-lg ${ct.hoverRingWhite + ct.cursorPointer}`}>
      <h3 className="text-xl font-bold text-white">Analisis Tanaman</h3>
      <p className="mt-2 text-sm text-emerald-200/80">
        Pemantauan real-time dan wawasan berbasis AI untuk lahan Anda
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Total Lahan</div>
          <div className="text-lg font-semibold text-emerald-300">8</div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Peringatan Aktif</div>
          <div className="text-lg font-semibold text-yellow-300">3</div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Cakupan</div>
          <div className="text-lg font-semibold text-sky-300">28 ha</div>
        </div>
      </div>
    </div>
  );
}
