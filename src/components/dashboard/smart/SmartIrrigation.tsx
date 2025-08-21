import React from "react";
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
  { day: "Mon", actual: 400, optimal: 370 },
  { day: "Tue", actual: 350, optimal: 360 },
  { day: "Wed", actual: 380, optimal: 370 },
  { day: "Thu", actual: 370, optimal: 360 },
  { day: "Fri", actual: 360, optimal: 355 },
  { day: "Sat", actual: 420, optimal: 400 },
  { day: "Sun", actual: 450, optimal: 430 },
];

const zones = [
  { id: "A", status: "Active", crop: "Tomatoes", moisture: 78, next: "14:30" },
  { id: "B", status: "Standby", crop: "Corn", moisture: 65, next: "16:00" },
  { id: "C", status: "Active", crop: "Rice", moisture: 82, next: "15:15" },
  { id: "D", status: "Maintenance", crop: "Wheat", moisture: 0, next: "Manual" },
];

const recommendations = [
  {
    title: "Optimize Zone B Schedule",
    desc: "Delay irrigation by 2 hours based on soil moisture prediction",
    impact: "-15%",
  },
  {
    title: "Update Sensor Calibration",
    desc: "Zone B sensors need recalibration for optimal readings",
    impact: "-8%",
  },
  {
    title: "Weather-Based Adjustment",
    desc: "Rain expected tomorrow, reduce irrigation by 20%",
    impact: "-12%",
  },
];

export default function SmartIrrigation() {
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
        
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Real-time Irrigation Data */}
          <div className="flex-1 bg-green-900/50 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Real-time Irrigation Data</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={irrigationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="time" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="soil" stroke="#00ff88" name="Soil Moisture" />
                <Line type="monotone" dataKey="flow" stroke="#ffee33" name="Flow Rate" />
                <Line type="monotone" dataKey="temp" stroke="#3399ff" name="Temperature" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* System Status */}
          <div className="w-full lg:w-1/3 bg-green-900/50 p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4">System Status</h2>
              <p className="text-3xl font-bold">
                1,847 <span className="text-sm">liters/day</span>
              </p>
              <p className="text-green-400 text-lg">23% saved today</p>
            </div>
            <div className="mt-4">
              <p>System Health: <span className="font-bold">94%</span></p>
              <p>Coverage: <span className="font-bold">12/12 Zones</span></p>
            </div>
          </div>
        </div>

        {/* Zones */}
        <div className="flex flex-wrap gap-4">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`flex-1 min-w-[200px] p-4 rounded-2xl text-white ${
                zone.status === "Active"
                  ? "bg-green-700"
                  : zone.status === "Standby"
                  ? "bg-yellow-600"
                  : "bg-red-700"
              }`}
            >
              <h3 className="font-bold">Zone {zone.id}</h3>
              <p>Status: {zone.status}</p>
              <p>Crop: {zone.crop}</p>
              <p>Moisture: {zone.moisture}%</p>
              <p>Next: {zone.next}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Weekly Water Usage */}
          <div className="flex-1 bg-green-900/50 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Weekly Water Usage</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyUsage}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="day" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="actual" fill="#00ff88" name="Actual Usage" />
                <Bar dataKey="optimal" fill="#ffee33" name="Optimal Usage" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* AI Recommendations */}
          <div className="w-full lg:w-1/3 bg-green-900/50 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
            <div className="flex flex-col gap-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="p-3 rounded-xl bg-green-800/60">
                  <h3 className="font-bold text-base">{rec.title}</h3>
                  <p className="text-sm text-gray-300">{rec.desc}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-green-400 font-bold">{rec.impact}</span>
                    <button className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded-xl text-sm">
                      Apply Schedule
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
