"use client";

import CropStatsCard from "./CropStatsCard";
import OverallHealthCard from "./OverallHealthCard";
export default function LeftPanel() {
  return (
    <div className="flex flex-col gap-6">
      <CropStatsCard />
      <OverallHealthCard />
    </div>
  );
}
