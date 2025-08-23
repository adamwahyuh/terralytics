"use client";

import React from "react";
import { colorTheme } from "@/lib/coloring";

interface IndicatorCardProps {
  title: string;
  subtitle: string;
  value: number;
  color: "blue-400" | "green-400" | "amber-400"; 
  icon: React.ReactNode;
}

// Mapping warna supaya Tailwind tetap compile
const colorClasses: Record<
  IndicatorCardProps["color"],
  { bg: string; bgSoft: string; text: string }
> = {
  "blue-400": {
    bg: "bg-blue-400",
    bgSoft: "bg-blue-400/20",
    text: "text-blue-400",
  },
  "green-400": {
    bg: "bg-green-400",
    bgSoft: "bg-green-400/20",
    text: "text-green-400",
  },
  "amber-400": {
    bg: "bg-amber-400",
    bgSoft: "bg-amber-400/20",
    text: "text-amber-400",
  },
};

export default function IndicatorCard({
  title,
  subtitle,
  value,
  color,
  icon,
}: IndicatorCardProps) {
  const classes = colorClasses[color];
  const ct = colorTheme[0];

  return (
    <div className={`rounded-xl bg-[rgba(6,33,18,0.55)] ring-1 ring-white/10 hover:ring-3 ${ct.hoverRingWhite + ct.cursorPointer}  backdrop-blur-md p-4 shadow-lg space-y-2`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center ${classes.bgSoft} ${classes.text}`}
          >
            {icon}
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-gray-300/70">{subtitle}</div>
          </div>
        </div>
        <div className={`${classes.text} font-bold`}>{value}%</div>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <div className={`h-2 ${classes.bg}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
