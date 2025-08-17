"use client";

type Props = { percent: number };

export default function ProgressBar({ percent }: Props) {
  return (
    <div className="h-2 w-full rounded-full bg-white/15">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-200"
        style={{ width: `${percent}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        role="progressbar"
      />
    </div>
  );
}
