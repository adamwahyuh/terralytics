"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function WeatherForecast() {
  const data = [
    { day: "Sen", temp: 29 },
    { day: "Sel", temp: 30 },
    { day: "Rab", temp: 28 },
    { day: "Kam", temp: 27 },
    { day: "Jum", temp: 31 },
    { day: "Sab", temp: 32 },
    { day: "Min", temp: 30 },
  ];

  return (
    <div className="bg-black/50 rounded-2xl shadow-lg p-20 h-[50vh]">
      <h2 className="text-lg font-semibold mb-4 text-white">7-Day Forecast</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderRadius: "0.5rem",
              border: "none",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#60a5fa"
            strokeWidth={3}
            dot={{ fill: "#60a5fa", r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
