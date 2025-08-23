"use client";

import AIInsightCard from "@/components/AIInsightCard";
import { Lightbulb, Target, ShieldAlert, TreePine } from "lucide-react";

export default function AIInsightsSection() {

  return (
    <section className="w-full mt-5 px-5 ">
      <div className={`max-w-6xl mx-auto bg-gradient-to-b from-green-700/80 to-yellow-500/90 p-9 rounded-2xl `}>
        {/* Heading */}
        <div className="flex items-center gap-2 mb-6">
          <TreePine className="text-green-300" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Wawasan & Rekomendasi AI
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4">
          <AIInsightCard
            icon={<Lightbulb className="text-yellow-300" size={18} />}
            title="Rekomendasi Cerdas"
            description="Tingkatkan irigasi sebesar 15% di sektor B berdasarkan analisis kelembaban tanah dan prakiraan cuaca."
            bgColor="bg-green-800/40"
          />
          <AIInsightCard
            icon={<Target className="text-orange-300" size={18} />}
            title="Prediksi Hasil Panen"
            description="Diperkirakan terjadi peningkatan hasil panen sebesar 23% musim ini berdasarkan pola pertumbuhan dan analisis AI."
            bgColor="bg-teal-800/40"
          />
          <AIInsightCard
            icon={<ShieldAlert className="text-red-400" size={18} />}
            title="Peringatan Risiko"
            description="Potensi serangan hama terdeteksi di zona C. Disarankan tindakan pencegahan dalam 48 jam."
            bgColor="bg-yellow-800/40"
          />
        </div>
      </div>
    </section>
  );
}
