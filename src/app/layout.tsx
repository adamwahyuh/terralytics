import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-green-50 font-sans">
        <Navbar />
        <main className="min-h-screen mt-[8vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
