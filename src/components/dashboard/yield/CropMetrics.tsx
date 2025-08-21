"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Rice", value: 35 },
  { name: "Corn", value: 25 },
  { name: "Wheat", value: 20 },
  { name: "Tomato", value: 20 },
];

const COLORS = ["#22c55e", "#38bdf8", "#facc15", "#f87171"];

export default function CropMetrics() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Yield Metrics</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ul className="mt-2 text-xs space-y-1">
        {data.map((d, i) => (
          <li key={i}>{d.name}: {d.value}%</li>
        ))}
      </ul>
    </div>
  );
}
