"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, X, Menu, Play, Square, Volume2, Settings, MicOff } from "lucide-react";

export function VoiceContent() {
  const [recording, setRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [micPermission, setMicPermission] = useState<"granted" | "denied" | "pending">("pending");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // Simulasi audio level untuk visualisasi
  useEffect(() => {
    if (recording) {
      const animate = () => {
        setAudioLevel(Math.random() * 100);
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setAudioLevel(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [recording]);

  // Recording timer
  useEffect(() => {
    if (recording) {
      intervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setRecordingTime(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [recording]);

  const handleRecord = () => {
    if (micPermission === "denied") {
      alert("Izin mikrofon diperlukan untuk merekam");
      return;
    }

    setRecording(!recording);
    setIsListening(!recording);
  };

  const handleCancel = () => {
    setRecording(false);
    setIsListening(false);
    setRecordingTime(0);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Simulasi request mic permission
  const requestMicPermission = async () => {
    try {
      // Simulasi permission request
      setMicPermission("granted");
    } catch (error) {
      setMicPermission("denied");
    }
  };

  useEffect(() => {
    requestMicPermission();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col text-white  overflow-hidden">
      {/* Header */}
      <div className="relative z-10 p-4 sm:p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Voice AI</h2> */}
        </div>

        <div className="flex items-center gap-2">
          {recording && (
            <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/40">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono">{formatTime(recordingTime)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ngobrol dengan{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {recording
              ? "Sedang mendengarkan... Silakan bicara"
              : isListening
              ? "Memproses suara Anda..."
              : "Tekan tombol mikrofon untuk mulai berbicara"}
          </p>

          {micPermission === "denied" && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg p-3 max-w-md mx-auto">
              Izin mikrofon diperlukan untuk menggunakan fitur suara
            </p>
          )}
        </div>

        {/* Voice Visualizer */}
        <div className="relative mb-8 sm:mb-12">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            {/* Animated rings when recording */}
            {recording && (
              <>
                <div className="absolute w-full h-full rounded-full border-2 border-green-400/30 animate-ping"></div>
                <div className="absolute w-5/6 h-5/6 rounded-full border-2 border-green-300/40 animate-pulse"></div>
                <div
                  className="absolute w-4/6 h-4/6 rounded-full border-2 border-emerald-400/50 animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </>
            )}

            {/* Audio level visualization */}
            {recording && (
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 sm:w-2 bg-green-400 rounded-full mx-1 transition-all duration-150"
                    style={{
                      height: `${Math.max(10, audioLevel * Math.random() * 0.8 + 20)}px`,
                      opacity: recording ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Main circle */}
            <div
              className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full transition-all duration-500 flex items-center justify-center ${
                recording
                  ? "bg-gradient-to-r from-red-500 to-red-600 shadow-[0_0_40px_10px_rgba(239,68,68,0.4)] scale-110"
                  : micPermission === "denied"
                  ? "bg-gray-600 opacity-50"
                  : "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 hover:scale-105 shadow-[0_0_30px_5px_rgba(34,197,94,0.3)]"
              }`}
            >
              {micPermission === "denied" ? (
                <MicOff className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              ) : (
                <Mic
                  className={`w-8 h-8 sm:w-12 sm:h-12 text-white transition-all ${
                    recording ? "scale-110" : ""
                  }`}
                />
              )}

              {recording && (
                <div className="absolute inset-0 rounded-full animate-ping bg-red-500/20"></div>
              )}
            </div>
          </div>

          {/* Status indicator */}
          <div className="text-center mt-4">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                recording
                  ? "bg-red-500/20 text-red-300 border border-red-500/30"
                  : isListening
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  recording
                    ? "bg-red-400 animate-pulse"
                    : isListening
                    ? "bg-blue-400 animate-pulse"
                    : "bg-gray-500"
                }`}
              ></div>
              {recording ? "Merekam" : isListening ? "Memproses" : "Siap"}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            disabled={!recording && !isListening}
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 border border-gray-600 hover:border-red-500/50"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Main Record Button */}
          <button
            onClick={handleRecord}
            disabled={micPermission === "denied"}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition-all transform hover:scale-105 disabled:cursor-not-allowed ${
              recording
                ? "bg-red-500 hover:bg-red-600 shadow-[0_0_25px_5px_rgba(239,68,68,0.4)]"
                : micPermission === "denied"
                ? "bg-gray-600 opacity-50"
                : "bg-green-500 hover:bg-green-600 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]"
            }`}
          >
            {recording && <span className="absolute inset-0 rounded-full animate-ping bg-red-500/40"></span>}

            {recording ? (
              <Square className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
            ) : (
              <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
            )}
          </button>

          {/* Menu Button */}
          <div className="relative">
            <button
              onClick={handleMenuToggle}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-all transform hover:scale-105 border border-gray-600 hover:border-gray-500"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-gray-800/95 backdrop-blur-md border border-gray-600 rounded-xl p-2 min-w-48 shadow-xl">
                <button className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 rounded-lg transition flex items-center gap-3">
                  <Settings className="w-4 h-4" />
                  Pengaturan
                </button>
                <button className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 rounded-lg transition flex items-center gap-3">
                  <Volume2 className="w-4 h-4" />
                  Audio Settings
                </button>
                <div className="border-t border-gray-600 my-2"></div>
                <button className="w-full text-left px-4 py-3 text-sm text-red-300 hover:bg-red-500/10 rounded-lg transition">
                  Reset Session
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
          <button className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600 rounded-full transition flex items-center gap-2">
            <Play className="w-4 h-4" />
            Putar Ulang
          </button>
          <button className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600 rounded-full transition">
            Simpan Audio
          </button>
          <button className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-400 rounded-full transition">
            Mode Cepat
          </button>
        </div>

      </div>

      {/* Click outside to close menu */}
      {showMenu && <div className="fixed inset-0 z-0" onClick={() => setShowMenu(false)}></div>}
    </div>
  );
}
