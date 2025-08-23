"use client";

import Link from "next/link";
import LogoType from "@/components/LogoType";
import { colorTheme } from "@/lib/coloring";
import { Play } from "lucide-react";
import { aboutCompany } from "@/lib/about";
import { CustomAnimation } from "@/lib/animation";
import { col } from "framer-motion/client";

export default function AboutSection() {
  const color = colorTheme[0];
  const company = aboutCompany[0];
  const anim = CustomAnimation[0];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <LogoType />
        <h2 className={`${anim.fadeInUp} text-2xl font-semibold mt-2 `} style={{ animationDelay: "0.5s" }}>
          Revolusi Pertanian Pintar
        </h2>
        <p className={`${anim.fadeInUp} mt-2 text-sm md:text-base max-w-xl `}  style={{ animationDelay: "0.5s" }}>
          {company.subtitle} 
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            className={`bg-white/20 border border-white text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition ${color.cursorPointer} ${anim.fadeInUp}`}
            style={{ animationDelay: "0.5s" }}
          >
            <span className={``} >Akurasi 98% dalam Prediksi Tanaman</span>
          </button>
          <Link
            href="/dashboard"
            className={`${color.gradientGreenYellow + color.hoverRingWhite} ${color.cursorPointer} text-white px-6 py-2 rounded-full hover:opacity-90 transition flex gap-2 items-center ${anim.fadeInUp}`}
            style={{ animationDelay: "0.5s" }}
          >
            <Play />
            Mulai Analisis AI
          </Link>
        </div>
      </div>
    </div>
  );
}
