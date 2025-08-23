type ImpactLevel = "Tinggi" | "Sedang" | "Rendah";

import { colorTheme } from "@/lib/coloring";

const recs: { title: string; desc: string; impact: ImpactLevel }[] = [
  {
    title: "Optimalkan Kepadatan Tanam",
    desc: "Tingkatkan kepadatan tanam jagung sebesar 15% di Lahan A untuk memaksimalkan potensi hasil.",
    impact: "Tinggi",
  },
  {
    title: "Waktu Aplikasi Nitrogen",
    desc: "Aplikasikan pupuk nitrogen secara bertahap selama fase pertumbuhan vegetatif.",
    impact: "Sedang",
  },
  {
    title: "Pemilihan Varietas",
    desc: "Beralih ke varietas padi tahan kekeringan untuk performa lebih baik.",
    impact: "Tinggi",
  },
];

const impactColor: Record<ImpactLevel, string> = {
  Tinggi: "text-red-400",
  Sedang: "text-yellow-400",
  Rendah: "text-green-400",
};

export default function AIRecommendations() {
  const color = colorTheme[0];
  return (
    <div className={`${color.hoverRingWhite}`}>
      <h2 className="text-lg font-semibold mb-4">Rekomendasi AI</h2>
      <div className="space-y-4">
        {recs.map((r, i) => (
          <div
            key={i}
            className={`${color.hoverRingWhite + color.cursorPointer} bg-[#222]/80 p-3 rounded-xl`}
          >
            <p className="font-medium">{r.title}</p>
            <p className="text-xs text-gray-300">{r.desc}</p>
            <p className={`text-xs mt-1 ${impactColor[r.impact]}`}>
              Dampak {r.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
