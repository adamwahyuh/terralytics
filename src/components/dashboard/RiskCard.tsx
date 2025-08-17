// components/dashboard/RiskCard.tsx
"use client";

import { CheckCircle2, TriangleAlert, Wheat } from "lucide-react";

type Props = {
  tone: "good" | "warn" | "bad";
  title: string;
  subtitleTop: string;
  subtitleBottom: string;
};

const toneStyles: Record<Props["tone"], string> = {
  good:
    "from-green-700/70 to-emerald-800/70 ring-green-300/20",
  warn:
    "from-amber-700/70 to-yellow-800/70 ring-amber-300/20",
  bad:
    "from-rose-700/70 to-red-800/70 ring-rose-300/20",
};

const Icons = {
  good: CheckCircle2,
  warn: Wheat,
  bad: TriangleAlert,
};

export default function RiskCard({
  tone,
  title,
  subtitleTop,
  subtitleBottom,
}: Props) {
  const Icon = Icons[tone];
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br p-6 shadow-xl ring-1 backdrop-blur ${toneStyles[tone]}`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-black/20 ring-1 ring-white/10">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="text-xl font-extrabold">{title}</h4>
      </div>
      <p className="text-xs text-white/80">{subtitleTop}</p>
      <p className="text-xs text-white/70">{subtitleBottom}</p>
    </div>
  );
}
