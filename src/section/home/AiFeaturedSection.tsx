import FeatureCard from "@/components/FeatureCard";
import { Leaf, Cloud, BarChart3, Droplet, Zap } from "lucide-react";

export default function AIFeaturesSection() {
  return (
    <section className="relative w-full py-16">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        {/* Badge */}
        <div className="bg-yellow-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 flex items-center gap-2">
          <span><Zap /></span> Teknologi AI Canggih
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Fitur AI Revolusioner untuk{" "}
          <span className="text-green-400">Pertanian Modern</span>
        </h2>
        <p className="text-sm md:text-base mb-10 max-w-2xl">
          Manfaatkan kekuatan kecerdasan buatan dan big data untuk
          mengubah cara operasional pertanian Anda
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            icon={<Leaf size={20} />}
            title="Analisis Kesehatan Tanaman AI"
            accuracy="Akurasi 98,5%"
            description="Computer vision canggih menganalisis kesehatan tanaman secara real-time menggunakan citra satelit dan data drone."
          />
          <FeatureCard
            icon={<Cloud size={20} />}
            title="Prediksi Cuaca ML"
            accuracy="Akurasi 94,2%"
            description="Model machine learning memprediksi pola cuaca dengan akurasi tinggi untuk mendukung keputusan pertanian."
          />
          <FeatureCard
            icon={<BarChart3 size={20} />}
            title="Optimasi Hasil Panen"
            accuracy="Akurasi 91,8%"
            description="Analisis big data mengoptimalkan jadwal tanam dan alokasi sumber daya untuk hasil panen maksimal."
          />
          <FeatureCard
            icon={<Droplet size={20} />}
            title="Irigasi Pintar AI"
            accuracy="Akurasi 96,3%"
            description="Sensor IoT dan algoritma AI menentukan jadwal dan jumlah penyiraman optimal."
          />
        </div>
      </div>
    </section>
  );
}
