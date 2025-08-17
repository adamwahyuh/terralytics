// components/dashboard/MetricCard.tsx
"use client";

import {
  Leaf,
  Thermometer,
  Droplets,
  Activity,
  Radio,
} from "lucide-react";
import LiveBadge from "./parts/LiveBadge";
import ProgressBar from "./parts/ProgressBar";
import React from "react";

type IconKey = "sprout" | "droplet" | "thermo" | "humidity" | "activity";

const ICONS: Record<IconKey, React.ReactNode> = {
  sprout: <Leaf className="h-4 w-4" />,
  droplet: <Droplets className="h-4 w-4" />,
  thermo: <Thermometer className="h-4 w-4" />,
  humidity: <Droplets className="h-4 w-4" />,
  activity: <Activity className="h-4 w-4" />,
};

type Props = {
  icon: IconKey;
  title: string;
  valueLabel: string; // e.g., "24°C", "88%"
  value: number; // numeric for progress
  max: number; // 100 or 50, etc.
  footerLabel?: string;
  live?: boolean;
};

export default function MetricCard({
  icon,
  title,
  valueLabel,
  value,
  max,
  footerLabel,
  live,
}: Props) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <article className="relative rounded-2xl bg-gradient-to-br from-emerald-800/60 to-emerald-900/60 p-4 shadow-xl ring-1 ring-white/10 backdrop-blur">
      {/* top row */}
      <div className="mb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-md bg-emerald-900/60 px-2 py-1 ring-1 ring-white/10">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-700/60">
            {ICONS[icon]}
          </span>
          <span className="text-[13px] font-semibold text-emerald-100">
            {title}
          </span>
        </div>
        {live ? <LiveBadge /> : null}
      </div>

      {/* value */}
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-extrabold">{valueLabel}</div>
        <div className="text-xs text-emerald-100/70">
          {max === 100 ? "/100%" : `/${max}${icon === "thermo" ? "°C" : ""}`}
        </div>
      </div>

      {/* progress */}
      <div className="mt-3">
        <ProgressBar percent={percent} />
      </div>

      {/* footer note */}
      {footerLabel && (
        <p className="mt-2 text-xs text-emerald-100/80">{footerLabel}</p>
      )}

      {/* subtle corner signal icon */}
      <Radio className="absolute right-3 top-3 h-3.5 w-3.5 opacity-0" />
    </article>
  );
}
