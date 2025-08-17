"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", value: 40 },
  { name: "Week 2", value: 30 },
  { name: "Week 3", value: 20 },
  { name: "Week 4", value: 27 },

];

export default function ChartCard() {
  return (
    <div className="rounded-xl bg-[rgba(6,33,18,0.55)] ring-1 ring-white/10 backdrop-blur-md p-4 shadow-lg">
      <h3 className="text-sm font-semibold mb-4">Key Indicators</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
