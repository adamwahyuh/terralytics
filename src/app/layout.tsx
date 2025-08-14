"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <html lang="id">
      <body className="bg-green-50 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
