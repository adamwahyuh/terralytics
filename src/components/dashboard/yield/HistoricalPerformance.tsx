"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2021", yield: 4.8, roi: 137 },
  { year: "2022", yield: 5.4, roi: 153 },
  { year: "2023", yield: 5.8, roi: 148 },
  { year: "2024", yield: 6.2, roi: 162 },
];

export default function HistoricalPerformance() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Riwayat Performa</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="year" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="yield" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs mt-2 space-y-1">
        {data.map((d, i) => (
          <p key={i}>
            {d.year}: {d.yield} t/ha ({d.roi}% ROI)
          </p>
        ))}
      </div>
    </div>
  );
}
