import Digit404 from "@/components/pixel/Digit404";
import PixelTree from "@/components/pixel/PixelTree";
import PixelGround from "@/components/pixel/PixelGround";
import PixelSun from "@/components/pixel/PixelSun";
import PixelCloud from "@/components/pixel/PixelCloud";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-sky-300 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Matahari + awan */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-10 pt-6 z-0 mt-20">
        <PixelSun />
        <div className="flex gap-6">
          
          {Array.from({ length: 15 }).map((_, i) => (
            <PixelCloud key={i} />
          ))}
        </div>
      </div>

      {/* Pohon + tanah */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-0">
        <div className="flex  justify-center gap-6 mb-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <PixelTree key={i} />
          ))}
        </div>
        <PixelGround />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* 404 */}
        <div className="flex items-center gap-6 mb-10">
          <Digit404 variant="4" color="green" size={26} gap={4} />
          <Digit404 variant="0" color="yellow" size={26} gap={4} />
          <Digit404 variant="4" color="green" size={26} gap={4} />
        </div>

        {/* Teks + tombol */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-6">
          Ups! Halaman yang kamu cari tidak tersedia.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-400 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
