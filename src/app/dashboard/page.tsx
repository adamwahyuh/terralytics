"use client";

import { useState, useEffect } from "react";

// Section
import FirstSection from "@/section/dashboard/FirstSection";
import SecondSection from "@/section/dashboard/SecondSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Daftar pesan loading dalam bahasa Indonesia
  const messages = [
    "AI sedang melakukan analisis mendalam...",
    "Mengumpulkan data dari server...",
    "Mengoptimalkan algoritma cerdas...",
    "Menyiapkan tampilan...",
    ];


  // Daftar background image
  const backgrounds = [
    "/img/gunung.jpg",
    "/img/weirdSawah.png",
    "/img/FWeather.png",
    "/img/leaf.png",
  ];

  // Timer utama 10 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Timer ganti pesan tiap 2,5 detik
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [loading, messages.length]);

  // Timer ganti background tiap 3 detik
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [loading, backgrounds.length]);

  if (loading) {
    return (
      <div className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
        {/* Background Images dengan efek fade */}
        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
            style={{
              backgroundImage: `url(${bg})`,
              opacity: i === bgIndex ? 1 : 0, // hanya bg aktif yang kelihatan
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        {/* Konten loading */}
        <div className="relative text-center">
          <div className="animate-spin h-12 w-12 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-lg font-semibold animate-pulse">
            {messages[messageIndex]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
  );
}
