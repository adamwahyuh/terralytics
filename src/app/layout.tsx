"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/dashboard/chat");

  return (
    <html lang="id">
      <body className="bg-green-50 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
