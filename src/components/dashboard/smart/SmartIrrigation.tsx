import React from "react";
import { colorTheme } from "@/lib/coloring";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const irrigationData = [
  { time: "00:00", soil: 0, flow: 20, temp: 65 },
  { time: "04:00", soil: 10, flow: 22, temp: 62 },
  { time: "08:00", soil: 25, flow: 27, temp: 75 },
  { time: "12:00", soil: 30, flow: 30, temp: 78 },
  { time: "16:00", soil: 20, flow: 22, temp: 72 },
  { time: "20:00", soil: 8, flow: 20, temp: 68 },
];

const weeklyUsage = [
  { day: "Sen", actual: 400, optimal: 370 },
  { day: "Sel", actual: 350, optimal: 360 },
  { day: "Rab", actual: 380, optimal: 370 },
  { day: "Kam", actual: 370, optimal: 360 },
  { day: "Jum", actual: 360, optimal: 355 },
  { day: "Sab", actual: 420, optimal: 400 },
  { day: "Min", actual: 450, optimal: 430 },
];

const zones = [
  { id: "A", status: "Aktif", crop: "Tomat", moisture: 78, next: "14:30" },
  { id: "B", status: "Siaga", crop: "Jagung", moisture: 65, next: "16:00" },
  { id: "C", status: "Aktif", crop: "Padi", moisture: 82, next: "15:15" },
  { id: "D", status: "Perawatan", crop: "Gandum", moisture: 0, next: "Manual" },
];

const recommendations = [
  {
    title: "Optimalkan Jadwal Zona B",
    desc: "Tunda irigasi selama 2 jam berdasarkan prediksi kelembaban tanah",
    impact: "-15%",
  },
  {
    title: "Perbarui Kalibrasi Sensor",
    desc: "Sensor Zona B perlu dikalibrasi ulang agar pembacaan optimal",
    impact: "-8%",
  },
  {
    title: "Penyesuaian Berdasarkan Cuaca",
    desc: "Hujan diperkirakan besok, kurangi irigasi sebesar 20%",
    impact: "-12%",
  },
];

export default function SmartIrrigation() {
  const ct = colorTheme[0];
  return (
    <div className="relative flex flex-col gap-6 p-6 text-white overflow-hidden min-h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/gunung.jpg)" }}
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-[#042012]/50 backdrop-blur-md" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Bagian Atas */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Data Irigasi Real-time */}
          <div className="flex-1 bg-green-900/50 p-4 rounded-2xl w-full">
            <h2 className="text-lg font-semibold mb-2">Data Irigasi Real-time</h2>
            <div className="w-full h-64 md:h-80 lg:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={irrigationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="time" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', color: '#fff' }} />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Line type="monotone" dataKey="soil" stroke="#00ff88" name="Kelembaban Tanah" />
                  <Line type="monotone" dataKey="flow" stroke="#ffee33" name="Laju Aliran" />
                  <Line type="monotone" dataKey="temp" stroke="#3399ff" name="Suhu" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>


          {/* Status Sistem */}
          <div className={`w-full lg:w-1/3 bg-green-900/50 p-4 rounded-2xl flex flex-col justify-between ${ct.hoverRingWhite + ct.cursorPointer} `}>
            <div>
              <h2 className="text-lg font-semibold mb-4">Status Sistem</h2>
              <p className="text-3xl font-bold">
                1.847 <span className="text-sm">liter/hari</span>
              </p>
              <p className="text-green-400 text-lg">Hemat 23% hari ini</p>
            </div>
            <div className="mt-4">
              <p>Kesehatan Sistem: <span className="font-bold">94%</span></p>
              <p>Cakupan: <span className="font-bold">12/12 Zona</span></p>
            </div>
          </div>
        </div>

        {/* Zona */}
        <div className="flex flex-wrap gap-4">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`flex-1 min-w-[200px] p-4 rounded-2xl text-white ${ct.hoverRingWhite + ct.cursorPointer} ${
                zone.status === "Aktif"
                  ? "bg-green-700"
                  : zone.status === "Siaga"
                  ? "bg-yellow-600"
                  : "bg-red-700"
              }`}
            >
              <h3 className="font-bold">Zona {zone.id}</h3>
              <p>Status: {zone.status}</p>
              <p>Tanaman: {zone.crop}</p>
              <p>Kelembaban: {zone.moisture}%</p>
              <p>Berikutnya: {zone.next}</p>
            </div>
          ))}
        </div>

        {/* Bagian Bawah */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Pemakaian Air Mingguan */}
          <div className="flex-1 bg-green-900/50 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Pemakaian Air Mingguan</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyUsage}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="day" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="actual" fill="#00ff88" name="Pemakaian Aktual" />
                <Bar dataKey="optimal" fill="#ffee33" name="Pemakaian Optimal" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Rekomendasi AI */}
          <div className="w-full lg:w-1/3 bg-green-900/50 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Rekomendasi AI</h2>
            <div className="flex flex-col gap-4">
              {recommendations.map((rec, i) => (
                <div key={i} className={`p-3 rounded-xl bg-green-800/60 ${ct.hoverRingWhite + ct.cursorPointer} `}>
                  <h3 className="font-bold text-base">{rec.title}</h3>
                  <p className="text-sm text-gray-300">{rec.desc}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-green-400 font-bold">{rec.impact}</span>
                    <button className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded-xl text-sm">
                      Terapkan Jadwal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
