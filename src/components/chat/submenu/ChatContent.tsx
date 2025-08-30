"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

export default function ChatContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    if (!started) setStarted(true);

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        sender: "ai",
        text: `AI : "${userMessage.text}" (simulasi jawaban)`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 800);
  };

  // Auto scroll ke bawah tiap ada message baru
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative w-full min-h-screen flex flex-col text-white">
      {!started ? (
        // =================== Tampilan Awal ===================
        <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Chat with <span className="text-green-400">AI</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Minta Jawaban Dari AI 
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-4 px-6 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 transition font-medium"
          >
            Coba Gratis
          </button>

          {/* Input Awal */}
          <div className="mt-10 flex items-center bg-black/40 border border-gray-700 rounded-full px-4 py-2 w-[90%] max-w-2xl backdrop-blur-md shadow-lg">
            <input
              type="text"
              placeholder="Tanya apa aja...."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/30 transition"
            >
              <Send className="w-5 h-5 text-green-400" />
            </button>
          </div>
        </div>
      ) : (
        // =================== Tampilan Chat ===================
        <div className="flex flex-col flex-1 w-full">
          {/* Chat Box */}
          <div
            ref={chatContainerRef}
            className="flex-1 max-h-[80vh] overflow-y-auto px-4 py-6 space-y-3"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-green-500 text-black rounded-br-none"
                      : "bg-gray-800 text-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Chat */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl">
            <div className="flex items-center bg-gray-800/80 border border-gray-700 rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
              <input
                type="text"
                placeholder="Ketik Pesan Kamu..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
