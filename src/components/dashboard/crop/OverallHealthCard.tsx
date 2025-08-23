"use client";
import { colorTheme } from "@/lib/coloring";
export default function OverallHealthCard() {
  const ct = colorTheme[0];
  
  return (
    <div className={`rounded-2xl bg-[rgba(6,33,18,0.55)]/80 ring-1 ring-white/6 backdrop-blur-md p-5 shadow-lg ${ct.hoverRingWhite+ct.cursorPointer}`}>
      <h4 className="text-lg font-semibold text-emerald-100">Keselurahan Kesehatan</h4>
      <p className="text-sm text-emerald-200/70 mt-1">Analisi Ladang</p>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex flex-col items-start">
          <div className="text-4xl font-extrabold text-emerald-300">82%</div>
          <div className="text-sm text-emerald-200/70 mt-1">Skor Kesehatan Ladang</div>
        </div>

        {/* legend small */}
        <div className="ml-auto text-sm text-emerald-200/80">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span>Sempurna</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
            <span>Sepadan</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
            <span>Buruk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
