import { CheckCircle, MessageSquare, Camera, Cpu, Lightbulb, Brain } from "lucide-react";
import { colorTheme } from "@/lib/coloring";

export default function SmartAgricultureSection() {
  const color = colorTheme[0];

  const leftFeatures = [
    "Deteksi dini penyakit tanaman dengan akurasi 92%",
    "Optimasi penggunaan air dan pupuk",
    "Prediksi cuaca dan dampaknya pada tanaman",
    "Rekomendasi waktu tanam dan panen terbaik",
    "Analisis pasar untuk harga jual optimal",
  ];

  const rightFeatures = [
    {
      icon: <MessageSquare size={28} />,
      title: "Chatbot Konsultasi AI",
      description: "Tanya jawab langsung dengan AI untuk solusi masalah pertanian",
    },
    {
      icon: <Camera size={28} />,
      title: "Analisis Foto Tanaman",
      description: "Unggah foto untuk deteksi penyakit dan hama secara instan",
    },
    {
      icon: <Cpu size={28} />,
      title: "Machine Learning",
      description: "Algoritma yang terus belajar dari data lahan Anda",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Rekomendasi Pintar",
      description: "Saran cerdas berdasarkan analisis big data pertanian",
    },
  ];

  return (
    <section className="relative w-full py-16 p-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="bg-yellow-100 text-green-800 h-10 px-4 py-1 rounded-full text-sm font-semibold flex gap-2 items-center">
            <Brain /> Didukung oleh AI
          </span>
          <h2 className="text-4xl font-bold text-center text-white mt-4">
            Kecerdasan Buatan untuk <span className="text-green-300">Pertanian Pintar</span>
          </h2>
          <p className="text-gray-200 text-center mt-2 max-w-3xl">
            TerrAItycs menggunakan teknologi AI terkini untuk memberikan wawasan mendalam tentang kondisi lahan, prediksi hasil panen, dan rekomendasi tepat sasaran.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side */}
          <div className={`${color.cardColorGreenGradient + color.hoverAnimationScale + color.cursorPointer} p-6 rounded-2xl flex flex-col justify-between`}>
            <ul className="space-y-4">
              {leftFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={22} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-8 bg-gradient-to-r from-teal-600 to-yellow-400 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 w-fit">
              Mulai Konsultasi AI
              <span className="bg-white text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-bold">
                &gt;
              </span>
            </button> */}
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightFeatures.map((f, i) => (
              <div
                key={i}
                className={`${color.cardColorGreenGradient + color.hoverAnimationScale + color.cursorPointer} p-6 rounded-2xl text-white`}
              >
                <div className="bg-green-600/60 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
