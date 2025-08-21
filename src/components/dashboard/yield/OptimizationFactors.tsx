"use client";
import { Progress } from "@/components/ui/Progress";

const factors = [
  { name: "Seed Quality", value: 85 },
  { name: "Fertilizer Timing", value: 78 },
  { name: "Irrigation Schedule", value: 82 },
  { name: "Pest Management", value: 89 },
];

export default function OptimizationFactors() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Optimization Factors</h2>
      <div className="space-y-4">
        {factors.map((f, i) => (
          <div key={i}>
            <p className="text-sm">{f.name}</p>
            <Progress value={f.value} className="h-2" />
            <p className="text-xs text-right">{f.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
