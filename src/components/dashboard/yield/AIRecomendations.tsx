type ImpactLevel = "High" | "Medium" | "Low";

import { colorTheme } from "@/lib/coloring";
import { col } from "framer-motion/client";
const recs: { title: string; desc: string; impact: ImpactLevel }[] = [
  {
    title: "Optimize Planting Density",
    desc: "Increase corn planting density by 15% in Field A to maximize yield potential.",
    impact: "High",
  },
  {
    title: "Nitrogen Application Timing",
    desc: "Apply nitrogen fertilizer in split doses during vegetative growth stages.",
    impact: "Medium",
  },
  {
    title: "Variety Selection",
    desc: "Switch to drought-resistant rice variety for better performance.",
    impact: "High",
  },
];

const impactColor: Record<ImpactLevel, string> = {
  High: "text-red-400",
  Medium: "text-yellow-400",
  Low: "text-green-400",
};

export default function AIRecommendations() {
const color = colorTheme[0];
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
      <div className="space-y-4">
        {recs.map((r, i) => (
          <div key={i} className={`${color.hoverAnimationScale + color.cursorPointer} bg-[#222]/80 p-3 rounded-xl`}>
            <p className="font-medium">{r.title}</p>
            <p className="text-xs text-gray-300">{r.desc}</p>
            <p className={`text-xs mt-1 ${impactColor[r.impact]}`}>
              {r.impact} Impact
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
