"use client";

import { useState } from "react";
import { Mic, X, Menu } from "lucide-react";

export function VoiceContent() {
  const [recording, setRecording] = useState(false);

  const handleRecord = () => {
    setRecording(!recording);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white   overflow-hidden">
      {/* Title */}
      <div className="text-center z-10">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Use your voice to connect directly
        </h1>
        <h2 className="text-2xl md:text-4xl font-extrabold ">
          with our <span className="text-green-400">smart AI</span>
        </h2>
      </div>

      {/* Waveform / Logo Placeholder */}
      <div className="mt-12 relative w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse blur-md opacity-40"></div>
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-green-400 via-cyan-400 to-yellow-400 opacity-80"></div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center gap-8">
        {/* Cancel */}
        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/30 transition">
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Record */}
        <button
          onClick={handleRecord}
          className={`w-16 h-16 flex items-center justify-center rounded-full transition ${
            recording
              ? "bg-red-500/70 hover:bg-red-600"
              : "bg-green-500/30 hover:bg-green-500/50"
          }`}
        >
          <Mic className="w-7 h-7 text-white" />
        </button>

        {/* Options */}
        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-gray-500/30 transition">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Input bar */}
      <div className="mt-12 w-[90%] max-w-xl flex items-center bg-white/10 rounded-full border border-gray-600 px-4 py-3 backdrop-blur-md">
        <input
          type="text"
          placeholder="Ask Anything"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
        <Mic className="w-6 h-6 text-green-400 cursor-pointer" />
      </div>
    </div>
  );
}
