"use client";

import LeftPanel from "./crop/LeftPanel";
import HeatmapCard from "./crop/HeatMap";
import HealthDistributionCard from "./crop/HealtDistributionCard";
import CropAnalysisSection2 from "./crop/CropAnalysisSecrion2";
export default function CropAnalysis() {
  return (
    <section className="relative w-full">
     
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/gunung.jpg')" }}
      />
      {/* subtle dark overlay so cards pop */}
      <div className="absolute inset-0 -z-10 bg-[#042012]/70 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        {/* grid: left, center, right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* left column (2.5 / 12) */}
          <div className="lg:col-span-3 space-y-6">
            <LeftPanel />
          </div>

          {/* center (6.5 / 12) */}
          <div className="lg:col-span-6">
            <HeatmapCard />
          </div>

          {/* right (2.5 / 12) */}
          <div className="lg:col-span-3 space-y-4">
            <HealthDistributionCard />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <CropAnalysisSection2 />
      </div>
    </section>
  );
}
