"use client";

import Link from "next/link";
import LogoType from "@/components/LogoType";
import { colorTheme } from "@/lib/coloring";
import { Play } from "lucide-react";
import { aboutCompany } from "@/lib/about";
import { CustomAnimation } from "@/lib/animation";

export default function AboutSection() {
  const color = colorTheme[0];
  const company = aboutCompany[0];
  const anim = CustomAnimation[0];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-8">
        <LogoType />

        <h2
          className={`${anim.fadeInUp} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-3`}
          style={{ animationDelay: "0.5s" }}
        >
          Revolusi Pertanian Pintar
        </h2>

        <p
          className={`${anim.fadeInUp} mt-3 text-xs sm:text-sm md:text-base lg:text-lg max-w-lg md:max-w-2xl`}
          style={{ animationDelay: "0.5s" }}
        >
          {company.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <button
            className={`w-full sm:w-auto bg-white/20 border border-white text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white/30 transition ${color.cursorPointer} ${anim.fadeInUp}`}
            style={{ animationDelay: "0.5s" }}
          >
            <span>Akurasi 98% dalam Prediksi Tanaman</span>
          </button>

          <Link
            href="/dashboard"
            className={`w-full sm:w-auto ${color.gradientGreenYellow + color.hoverRingWhite} ${color.cursorPointer} text-white px-6 py-2 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 ${anim.fadeInUp}`}
            style={{ animationDelay: "0.5s" }}
          >
            <Play size={18} />
            Mulai Analisis AI
          </Link>
        </div>
      </div>
    </div>
  );
}
