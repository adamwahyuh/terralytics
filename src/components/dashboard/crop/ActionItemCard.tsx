"use client";
import { colorTheme } from "@/lib/coloring";

interface ActionItemCardProps {
  title: string;
  description: string;
  actionText: string;
  severity: "High" | "Medium" | "Low";
}

export default function ActionItemCard({
  title,
  description,
  actionText,
  severity,
}: ActionItemCardProps) {
  const colors =
    severity === "High"
      ? { bg: "bg-red-600/20", text: "text-red-400", badge: "bg-red-600" }
      : severity === "Medium"
      ? { bg: "bg-yellow-600/20", text: "text-yellow-400", badge: "bg-yellow-600" }
      : { bg: "bg-emerald-600/20", text: "text-emerald-400", badge: "bg-emerald-600" };

  const ct= colorTheme[0];
  return (
    <div className={`rounded-xl ${colors.bg} p-4 flex justify-between items-start ${ct.hoverRingWhite + ct.cursorPointer} `}>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-300/80">{description}</div>
        <div className="text-xs text-emerald-400 mt-2">{actionText}</div>
      </div>
      <span className={`px-3 py-1 text-xs rounded-full text-white ${colors.badge}`}>
        {severity}
      </span>
    </div>
  );
}
