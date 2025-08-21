"use client";
import { Progress } from "@/components/ui/Progress";

export default function YieldMetrics() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Yield Metrics</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-center bg-[#222]/80 rounded-xl p-4 w-1/2 mr-2">
          <p className="text-2xl font-bold">6.2</p>
          <p className="text-xs">tons/hectare</p>
          <p className="text-sm text-green-400">Current Yield</p>
        </div>
        <div className="flex flex-col items-center bg-[#222]/80 rounded-xl p-4 w-1/2 ml-2">
          <p className="text-2xl font-bold">7.8</p>
          <p className="text-xs">tons/hectare</p>
          <p className="text-sm text-yellow-400">Potential Yield</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs">Efficiency</p>
          <Progress value={79} className="h-2" />
          <p className="text-xs text-right">79%</p>
        </div>
        <div>
          <p className="text-xs">ROI</p>
          <Progress value={142} max={200} className="h-2 bg-gray-700" />
          <p className="text-xs text-right">+142%</p>
        </div>
      </div>
    </div>
  );
}
