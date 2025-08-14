import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: number;
  unit?: string;
  max: number;
  statusText: string;
}

import { colorTheme } from "@/lib/coloring";
import { col } from "framer-motion/client";

export default function StatCard({
  icon,
  title,
  value,
  unit,
  max,
  statusText,
}: StatCardProps) {
  const percentage = (value / max) * 100;

  const color = colorTheme[0];

  return (
    <div className={`backdrop-blur-sm ${color.cardColorGreenGradient} rounded-2xl p-5 text-white shadow-lg flex flex-col gap-4 w-full md:w-60  ${ color.hoverAnimationScale + color.cursorPointer}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="bg-green-900/50 p-2 rounded-full">{icon}</div>
        <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Live
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Value */}
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold">{value}</span>
        {unit && (
          <span className="text-sm mb-1">
            / {max}
            {unit}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-400"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Status */}
      <p className="text-sm">{statusText}</p>
    </div>
  );
}
