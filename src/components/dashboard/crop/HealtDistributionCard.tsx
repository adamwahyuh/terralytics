"use client";
import { colorTheme } from "@/lib/coloring";
import { TriangleAlert, Check } from "lucide-react";

function Donut({ percent = 75 }: { percent?: number }) {
  const radius = 70; 
  const stroke = 18;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg width="170" height="170" viewBox="0 0 170 170" className="mx-auto">
      <g transform="translate(85,85)">
        {/* Background Circle */}
        <circle
          r={normalizedRadius}
          fill="transparent"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={stroke}
        />

        {/* Progress Circle */}
        <circle
          r={normalizedRadius}
          fill="transparent"
          stroke="#34D399"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90)"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />

        {/* Percentage Text */}
        <text
          x="0"
          y="6"
          textAnchor="middle"
          className="font-extrabold"
          style={{ fontSize: 22, fill: "white" }}
        >
          {percent}%
        </text>

        {/* Label Text */}
        <text
          x="0"
          y="28"
          textAnchor="middle"
          style={{ fontSize: 12, fill: "rgba(255,255,255,0.8)" }}
        >
          Healthy
        </text>
      </g>
    </svg>
  );
}

export default function HealthDistributionCard() {
  const ct = colorTheme[0];
  return (
    <aside className="space-y-4">
      {/* Main Card */}
      <div className={`rounded-2xl bg-[rgba(6,33,18,0.55)]/80 ring-1 ring-white/10 backdrop-blur-md p-5 shadow-lg ${ct.hoverRingWhite + ct.cursorPointer}`}>
        <h3 className="text-lg font-bold text-white">Distribusi Kesehatan</h3>
        <p className="text-sm text-emerald-200/70 mt-1">
          Komposisi kesehatan lahan sekarang
        </p>

        <div className="mt-4 flex items-center justify-center">
          <Donut percent={75} />
        </div>

        <ul className="mt-3 space-y-2 text-sm text-emerald-200/80">
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
              Sempurna
            </div>
            <span>75%</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
              Sepadan
            </div>
            <span>20%</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              Buruk
            </div>
            <span>5%</span>
          </li>
        </ul>
      </div>

      {/* Small Stat Pills */}
      <div className={`rounded-2xl bg-[rgba(6,33,18,0.55)]/80 ring-1 ring-white/10 backdrop-blur-md p-4 shadow-lg space-y-3 ${ct.hoverRingWhite+ct.cursorPointer}`}>
        {/* Healthy Areas */}
        <div className="flex items-center justify-between rounded-full bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3 justify-center">
            <span className=" flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400/20 text-yellow-300">
              <Check />
            </span>
            <div>
              <div className="text-sm font-semibold">Healthy Areas</div>
              <div className="text-xs text-emerald-200/70">Hectares</div>
            </div>
          </div>
          <div className="text-emerald-300 font-bold">21</div>
        </div>

        {/* Areas with Issues */}
        <div className="flex items-center justify-between rounded-full bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className=" flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400/20 text-yellow-300">
              <TriangleAlert />
            </span>
            <div>
              <div className="text-sm font-semibold">Areas with Issues</div>
              <div className="text-xs text-emerald-200/70">Hectares</div>
            </div>
          </div>
          <div className="text-yellow-300 font-bold">7</div>
        </div>

        {/* Critical Areas */}
        <div className="flex items-center justify-between rounded-full bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className=" flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400/20 text-yellow-300">
              <TriangleAlert />
            </span>
            <div>
              <div className="text-sm font-semibold">Critical Areas</div>
              <div className="text-xs text-emerald-200/70">Hectares</div>
            </div>
          </div>
          <div className="text-red-400 font-bold">1</div>
        </div>
      </div>
    </aside>
  );
}
