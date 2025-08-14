"use client";

import AIInsightCard from "@/components/AIInsightCard";
import { Lightbulb, Target, ShieldAlert, TreePine } from "lucide-react";
import { colorTheme } from "@/lib/coloring";

export default function AIInsightsSection() {
const color = colorTheme[0];

  return (
    <section className="w-full mt-5 px-5 ">

      <div className={`max-w-6xl mx-auto bg-gradient-to-b from-green-700/80 to-yellow-500/90 p-9 rounded-2xl `}>
        {/* Heading */}
        <div className="flex items-center gap-2 mb-6">
          <TreePine className="text-green-300" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            AI Insights & Recommendations
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4">
          <AIInsightCard
            icon={<Lightbulb className="text-yellow-300" size={18} />}
            title="Smart Recommendation"
            description="Increase irrigation by 15% in sector B based on soil moisture analysis and weather forecast."
            bgColor="bg-green-800/40"
          />
          <AIInsightCard
            icon={<Target className="text-orange-300" size={18} />}
            title="Yield Prediction"
            description="Expected 23% yield increase this season based on current growth patterns and AI analysis."
            bgColor="bg-teal-800/40"
          />
          <AIInsightCard
            icon={<ShieldAlert className="text-red-400" size={18} />}
            title="Risk Alert"
            description="Potential pest outbreak detected in zone C. Preventive measures recommended within 48 hours."
            bgColor="bg-yellow-800/40"
          />
        </div>
      </div>
    </section>
  );
}
