"use client";

import { useState } from "react";
import { TriangleAlert } from "lucide-react";

type Marker = {
  id: string;
  left: string;
  top: string;
  color: string;
  label?: string;
};

const DEFAULT_MARKERS: Marker[] = [
  { id: "m1", left: "50%", top: "18%", color: "red", label: "A" },
  { id: "m2", left: "28%", top: "42%", color: "yellow", label: "B" },
  { id: "m3", left: "74%", top: "46%", color: "white", label: "C" },
  { id: "m4", left: "18%", top: "12%", color: "white", label: "D" },
  { id: "m5", left: "82%", top: "72%", color: "white", label: "E" },
];

export default function HeatmapCard() {
  const [markers] = useState(DEFAULT_MARKERS);

  return (
    <div className="rounded-2xl bg-[rgba(8,26,18,0.55)]/70 ring-1 ring-white/6 backdrop-blur-md p-4 shadow-xl h-[560px]">
      {/* small top label */}
      <div className="flex justify-end mb-2">
        <div className="text-xs bg-black/40 px-3 py-1 rounded-full text-emerald-100">
          Field View: 28 Hectares
        </div>
      </div>

      {/* map area */}
      <div className="relative h-full rounded-lg overflow-hidden border border-white/6">
        {/* heatmap overlay (CSS gradients to simulate heat) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(300px 160px at 50% 20%, rgba(255,60,0,0.55), transparent 15%), radial-gradient(220px 140px at 52% 70%, rgba(255,60,0,0.45), transparent 12%), linear-gradient(rgba(10,30,20,0.2), rgba(10,30,20,0.2))",
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />

        <img
          src="/img/weirdSawah.png"
          alt="field map"
          className="w-full h-full object-cover"
        />

        <div className="absolute left-4 bottom-4 bg-black/60 rounded-md p-3 text-sm text-emerald-100/90">
          <div className="font-semibold mb-1">Field Health</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            Excellent (80%+)
          </div>
          <div className="flex items-center gap-2 text-xs mt-1">
            <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
            Fair (60-79%)
          </div>
          <div className="flex items-center gap-2 text-xs mt-1">
            <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
            Poor (&lt;60%)
          </div>
        </div>

        {/* markers */}
        {markers.map((m) => (
          <div
            key={m.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: m.left, top: m.top }}
            title={m.label}
          >
            <div
              className={`h-6 w-6 rounded-full ring-2 ring-white/60 flex items-center justify-center`}
              style={{
                backgroundColor:
                  m.color === "red" ? "#E11D48" : m.color === "yellow" ? "#F59E0B" : "green",
              }}
            >
              <span className="text-xs font-bold text-black">{m.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
