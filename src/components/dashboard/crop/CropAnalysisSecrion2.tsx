"use client";

import IndicatorCard from "./IndicatorCard";
import ActionItemCard from "./ActionItemCard";
import ChartCard from "./ChartCard";
import { Droplets, Bug, Leaf } from "lucide-react";

export default function CropAnalysisSection2() {
  return (
    <section className="space-y-6 ">
      {/* Indicators - full width */}
      <div className="space-y-4">
        <IndicatorCard
          title="Water Stress"
          subtitle="Optimal moisture levels"
          value={23}
          color="blue-400"
          icon={<Droplets size={18} />}
        />
        <IndicatorCard
          title="Pest Infestation"
          subtitle="Low pest activity"
          value={12}
          color="green-400"
          icon={<Bug size={18} />}
        />
        <IndicatorCard
          title="Nutrient Levels"
          subtitle="Needs fertilization"
          value={78}
          color="amber-400"
          icon={<Leaf size={18} />}
        />
      </div>

      {/* Chart + Actions - 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard />

        <div className="space-y-3">
          <ActionItemCard
            title="Apply Nitrogen Fertilizer"
            description="Corn fields showing nutrient deficiency"
            actionText="Schedule fertilization for Field B-3"
            severity="High"
          />
          <ActionItemCard
            title="Monitor Tomato Fields"
            description="Water stress detected in southern area"
            actionText="Increase irrigation frequency"
            severity="Medium"
          />
          <ActionItemCard
            title="Apply Nitrogen Fertilizer"
            description="Corn fields showing nutrient deficiency"
            actionText="Schedule fertilization for Field B-3"
            severity="Low"
          />
        </div>
      </div>
    </section>
  );
}
