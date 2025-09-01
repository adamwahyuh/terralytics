"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import { aboutCompany } from "@/lib/about";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/dashboard/chat");
  const company = aboutCompany[0];

  const siteUrl = "https://terralytics.utpas.id"; 
  const bannerUrl = `${siteUrl}/img/banner.png`;

  return (
    <html lang="id">
      <head>
        <title>Terralytics</title>
        <meta name="description" content={`${company.subtitle}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <meta property="og:title" content="Terralytics" />
        <meta property="og:description" content={`${company.subtitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${pathname}`} />
        <meta property="og:image" content={bannerUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terralytics" />

        
      </head>

      <body className="bg-green-50 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
