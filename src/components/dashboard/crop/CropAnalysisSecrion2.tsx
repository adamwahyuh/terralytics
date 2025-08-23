"use client";

import IndicatorCard from "./IndicatorCard";
import ActionItemCard from "./ActionItemCard";
import ChartCard from "./ChartCard";
import { Droplets, Bug, Leaf } from "lucide-react";
import { colorTheme } from "@/lib/coloring";

export default function CropAnalysisSection2() {
  const ct = colorTheme[0];
  return (
    <section className="space-y-6 ">
      {/* Indikator - full width */}
      <div className={` space-y-4`}>
        <IndicatorCard
          title="Stres Air"
          subtitle="Kadar kelembapan optimal"
          value={23}
          color="blue-400"
          icon={<Droplets size={18} />}
        />
        <IndicatorCard
          title="Serangan Hama"
          subtitle="Aktivitas hama rendah"
          value={12}
          color="green-400"
          icon={<Bug size={18} />}
        />
        <IndicatorCard
          title="Kadar Nutrisi"
          subtitle="Perlu pemupukan"
          value={78}
          color="amber-400"
          icon={<Leaf size={18} />}
        />
      </div>

      {/* Grafik + Tindakan - 2 kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard />

        <div className="space-y-3">
          <ActionItemCard
            title="Terapkan Pupuk Nitrogen"
            description="Lahan jagung menunjukkan kekurangan nutrisi"
            actionText="Jadwalkan pemupukan untuk Lahan B-3"
            severity="High"
          />
          <ActionItemCard
            title="Pantau Lahan Tomat"
            description="Stres air terdeteksi di area selatan"
            actionText="Tingkatkan frekuensi irigasi"
            severity="Medium"
          />
          <ActionItemCard
            title="Terapkan Pupuk Nitrogen"
            description="Lahan jagung menunjukkan kekurangan nutrisi"
            actionText="Jadwalkan pemupukan untuk Lahan B-3"
            severity="Low"
          />
        </div>
      </div>
    </section>
  );
}
