import React from 'react';
import { CheckCircle, Users, Zap, Leaf } from 'lucide-react';
import Image from 'next/image';
import { CustomAnimation } from '@/lib/animation';

export default function About() {
  const anim = CustomAnimation[0];

  const missionItems = [
    "Menyediakan analisis kesehatan tanaman secara real-time",
    "Prediksi hasil panen yang lebih akurat",
    "Rekomendasi berbasis AI untuk irigasi, pemupukan, dan pengelolaan lahan",
    "Membantu petani mengambil keputusan lebih cepat dan tepat",
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Inovasi",
      description: "Menggunakan teknologi AI & Big Data terbaru",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kolaborasi",
      description: "Bersama petani, ilmuwan, dan pemerintah",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efisiensi",
      description: "Memaksimalkan hasil dengan sumber daya minimal",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Keberlanjutan",
      description: "Menuju pertanian yang ramah lingkungan",
    },
  ];

  return (
    <div className={`relative min-h-screen `}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/gunung.jpg')" }}
      />
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        {/* Header Section */}
        <div
          className={`text-center mb-16 ${anim.fadeInUp}`}
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tentang <span className="text-green-400">TerrAlytics</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Merevolusi pertanian dengan Kecerdasan Buatan & Big Data
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image Section */}
          <div
            className={`${anim.fadeInUp}`}
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden">
                {/* Gambar Background */}
                <Image
                  src="/img/about-us-sigma.jpg"
                  alt="Pemandangan Pertanian"
                  width={800}
                  height={450}
                  className="rounded-lg object-cover w-full h-auto"
                />

                {/* Badge Status */}
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  AI Monitoring Aktif
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`space-y-8 ${anim.fadeInUp}`}
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Visi Kami</h2>
              <p className="text-green-100 leading-relaxed">
                Meningkatkan produktivitas pertanian dengan solusi AI berbasis
                data untuk menciptakan masa depan pertanian yang berkelanjutan.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Misi Kami</h2>
              <div className="space-y-4">
                {missionItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${anim.fadeInUp}`}
                    style={{
                      animationDelay: `${index * 0.2 + 0.4}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-green-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`text-center mb-12 ${anim.fadeInUp}`}
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nilai Kami</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center 
                hover:bg-white/20 transition-all duration-300 hover:scale-105 ${anim.fadeInUp}`}
              style={{
                animationDelay: `${index * 0.2 + 0.7}s`,
                animationFillMode: "both",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 text-green-400">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-green-100 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 ${anim.fadeInUp}`}
          style={{ animationDelay: "1.5s", animationFillMode: "both" }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Mengubah Pertanian Anda?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan petani yang sudah menggunakan AI untuk
              mengoptimalkan praktik pertanian dan meningkatkan hasil panen.
            </p>
            <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}