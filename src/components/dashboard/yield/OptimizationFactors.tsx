"use client";
import { Progress } from "@/components/ui/Progress";

const factors = [
  { name: "Kualitas Benih", value: 85 },
  { name: "Waktu Pupuk", value: 78 },
  { name: "Jadwal Irigasi", value: 82 },
  { name: "Pengendalian Hama", value: 89 },
];

export default function OptimizationFactors() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Faktor Optimalisasi</h2>
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
