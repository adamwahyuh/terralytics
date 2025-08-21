"use client";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jun", optimal: 5.5, actual: 4.8, predicted: 5.0 },
  { month: "Jul", optimal: 6.0, actual: 5.2, predicted: 5.4 },
  { month: "Aug", optimal: 6.5, actual: 5.6, predicted: 5.8 },
  { month: "Sep", optimal: 7.0, actual: 6.0, predicted: 6.2 },
  { month: "Oct", optimal: 7.3, actual: 6.3, predicted: 6.6 },
  { month: "Nov", optimal: 7.5, actual: 6.5, predicted: 6.8 },
];

export default function YieldTrends() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Yield Performance Trends</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="optimal" stroke="#22c55e" strokeWidth={2} />
          <Line type="monotone" dataKey="actual" stroke="#38bdf8" strokeWidth={2} />
          <Line type="monotone" dataKey="predicted" stroke="#facc15" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
