"use client";

interface IndicatorCardProps {
  title: string;
  subtitle: string;
  value: number;
  color: string; 
  icon: React.ReactNode;
}

export default function IndicatorCard({
  title,
  subtitle,
  value,
  color,
  icon,
}: IndicatorCardProps) {
  return (
    <div className="rounded-xl bg-[rgba(6,33,18,0.55)] ring-1 ring-white/10 backdrop-blur-md p-4 shadow-lg space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-full bg-${color}/20 flex items-center justify-center text-${color}`}>
            {icon}
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-gray-300/70">{subtitle}</div>
          </div>
        </div>
        <div className={`text-${color} font-bold`}>{value}%</div>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className={`h-2 bg-${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
