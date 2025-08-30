"use client";

import { useState, useRef } from "react";
import { Upload, XCircle, CheckCircle, Camera, FileImage, AlertCircle, Lightbulb } from "lucide-react";

export function ImageContent() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'File harus berupa gambar (JPG, PNG, GIF, dll.)';
    }
    
    // Check file size (20MB = 20 * 1024 * 1024 bytes)
    if (file.size > 20 * 1024 * 1024) {
      return 'Ukuran file tidak boleh lebih dari 20 MB';
    }
    
    return null;
  };

  const handleFileSelection = (selectedFile: File) => {
    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulasi upload
    setTimeout(() => {
      setIsUploading(false);
      alert('Gambar berhasil dianalisis! (Simulasi)');
    }, 2000);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col text-white ">
      <div className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Unggah <span className="text-green-400 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text ">Gambar</span> Anda
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Biarkan AI menganalisis gambar untuk memberikan insight yang akurat
          </p>
          
          <p className="text-sm sm:text-base text-green-400 font-medium flex gap-3 justify-center">
            <Camera /> Tunjukkan kondisi lahan atau objek yang ingin dianalisis!
          </p>
        </div>

        {/* Upload Section */}
        <div className="w-full max-w-3xl mx-auto space-y-6">
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm sm:text-base">{error}</p>
            </div>
          )}

          {/* Upload Box */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer group ${
              isDragOver 
                ? 'border-green-400 bg-green-500/10 scale-[1.02]' 
                : file 
                  ? 'border-green-400/80 bg-green-500/5'
                  : 'border-green-400/60 bg-black/40 hover:border-green-400/90 hover:bg-green-500/5'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
              
              {!file ? (
                <>
                  <div className={`transition-all duration-300 ${isDragOver ? 'scale-110' : 'group-hover:scale-105'}`}>
                    <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl font-semibold text-green-400">
                      {isDragOver ? 'Lepaskan file di sini' : 'Klik untuk Unggah Gambar'}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Atau seret dan lepaskan file gambar di sini
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FileImage className="w-4 h-4" />
                      JPG, PNG, GIF
                    </span>
                    <span>•</span>
                    <span>Maks. 20 MB</span>
                  </div>
                </>
              ) : (
                <>
                  {/* File Info */}
                  <div className="flex items-center gap-3 text-green-400">
                    <FileImage className="w-6 h-6 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-medium text-sm sm:text-base truncate max-w-xs sm:max-w-sm">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Preview */}
                  {previewUrl && (
                    <div className="w-full max-w-md mx-auto">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-48 sm:h-64 md:h-72 rounded-xl border-2 border-green-400/50 shadow-2xl object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-400 text-sm">
                    Klik untuk mengganti gambar
                  </p>
                </>
              )}
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Action Buttons */}
          {file && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleReset}
                disabled={isUploading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gray-800/80 text-gray-300 border border-gray-600 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all font-medium"
              >
                <XCircle className="w-5 h-5" />
                Hapus Gambar
              </button>
              
              <button
                onClick={handleSubmit}
                disabled={isUploading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-black font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Analisis Gambar
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-green-400 flex gap-3 justify-center">
              <Lightbulb /> Tips untuk Hasil Terbaik
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Gunakan pencahayaan yang cukup</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Pastikan objek terlihat jelas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Hindari gambar yang buram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}