"use client";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { bulan: "Jun", optimal: 5.5, aktual: 4.8, prediksi: 5.0 },
  { bulan: "Jul", optimal: 6.0, aktual: 5.2, prediksi: 5.4 },
  { bulan: "Agu", optimal: 6.5, aktual: 5.6, prediksi: 5.8 },
  { bulan: "Sep", optimal: 7.0, aktual: 6.0, prediksi: 6.2 },
  { bulan: "Okt", optimal: 7.3, aktual: 6.3, prediksi: 6.6 },
  { bulan: "Nov", optimal: 7.5, aktual: 6.5, prediksi: 6.8 },
];

export default function YieldTrends() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Tren Kinerja Hasil</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="bulan" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="optimal" stroke="#22c55e" strokeWidth={2} name="Optimal" />
          <Line type="monotone" dataKey="aktual" stroke="#38bdf8" strokeWidth={2} name="Aktual" />
          <Line type="monotone" dataKey="prediksi" stroke="#facc15" strokeWidth={2} name="Prediksi" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
