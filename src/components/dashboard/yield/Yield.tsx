"use client";
import YieldTrends from "./YieldTrends";
import YieldMetrics from "./YieldMetrics";
import FieldPerformance from "./FieldPerformance";
import HistoricalPerformance from "./HistoricalPerformance";
import CropMetrics from "./CropMetrics";
import OptimizationFactors from "./OptimizationFactors";
import AIRecommendations from "./AIRecomendations";

export default function YieldDashboard() {
  return (
    <div
      className="relative flex flex-col min-h-screen -z-9 w-screen text-white p-6 gap-6 bg-cover"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#042012]/70 backdrop-blur-sm" />

      {/* Container */}
      <div className="flex flex-col gap-6">

        {/* Top Section (Trends + Metrics) */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-[#111]/70 rounded-2xl shadow-lg p-6">
            <YieldTrends />
          </div>
          <div className="w-full lg:w-1/3 bg-[#111]/70 rounded-2xl shadow-lg p-6">
            <YieldMetrics />
          </div>
        </div>

        {/* Field Performance (full width) */}
        <div className="w-full bg-[#111]/70 rounded-2xl shadow-lg p-6">
          <FieldPerformance />
        </div>

        {/* Historical + Crop */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          <div className="flex-1 bg-[#111]/70 rounded-2xl shadow-lg p-6 min-w-[280px]">
            <HistoricalPerformance />
          </div>
          <div className="flex-1 bg-[#111]/70 rounded-2xl shadow-lg p-6 min-w-[280px]">
            <CropMetrics />
          </div>
        </div>

        {/* Optimization + AI Recommendations */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          <div className="flex-1 bg-[#111]/70 rounded-2xl shadow-lg p-6 min-w-[280px]">
            <OptimizationFactors />
          </div>
          <div className="flex-1 bg-[#111]/70 rounded-2xl shadow-lg p-6 min-w-[280px]">
            <AIRecommendations />
          </div>
        </div>

      </div>
    </div>
  );
}
