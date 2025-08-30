"use client";

import { useState } from "react";
import { Upload, XCircle, CheckCircle } from "lucide-react";

export function ImageContent() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4">
      {/* Judul */}
      <div className="text-center space-y-1 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Unggah <span className="text-green-400">Gambar</span> Anda
        </h1>
        <p className="text-gray-300 text-lg">
          Biarkan AI menganalisis gambar untuk Anda
        </p>
        <p className="text-sm text-gray-400">Tunjukkan kondisi lahan Anda!</p>
      </div>

      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="mt-10 w-full max-w-2xl border-2 border-dashed border-green-400/60 rounded-2xl p-6 md:p-10 bg-black/40 backdrop-blur-md shadow-lg flex flex-col items-center justify-center cursor-pointer hover:border-green-400/90 transition"
      >
        <Upload className="w-12 h-12 text-green-400 mb-4" />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-green-400 hover:underline"
        >
          {file ? file.name : "Klik untuk Unggah"}
        </label>
        <p className="text-gray-400 mt-2">Atau seret dan lepaskan file di sini</p>
        <p className="text-gray-500 text-xs mt-2">Ukuran maksimal: 20 MB</p>

        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Preview */}
        {previewUrl && (
          <div className="mt-6 w-full flex justify-center">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-64 rounded-xl border border-green-400 shadow-lg object-contain"
            />
          </div>
        )}
      </div>

      {/* Tombol */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            setFile(null);
            setPreviewUrl(null);
          }}
          className="px-6 py-2 rounded-lg bg-white/10 text-white border border-gray-500 hover:bg-red-500/30 flex items-center gap-2 transition"
        >
          <XCircle className="w-5 h-5" /> Batal
        </button>
        <button
          disabled={!file}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition ${
            file
              ? "bg-green-500/20 border border-green-400 text-green-400 hover:bg-green-500/30"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          <CheckCircle className="w-5 h-5" /> Kirim
        </button>
      </div>
    </div>
  );
}
