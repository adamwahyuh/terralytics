// components/dashboard/HealthSummary.tsx
"use client";

type Props = {
  percent: number;
  label: string;
};

export default function HealthSummary({ percent, label }: Props) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-bold">Overall Farm Health</h3>
      <p className="mt-1 text-xs text-emerald-100/80">
        Real-time comprehensive assessment
      </p>

      <div className="mx-auto mt-3 grid place-items-center">
        <div className="grid place-items-center rounded-full bg-white/5 p-4 ring-1 ring-white/10">
          <div className="grid place-items-center rounded-full bg-emerald-600/10 px-8 py-6 ring-1 ring-white/10">
            <div className="text-3xl font-extrabold">{percent}%</div>
            <div className="mt-1 text-xs text-emerald-100/90">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
