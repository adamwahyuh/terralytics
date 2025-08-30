"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Menu, X } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

export default function ChatContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        text: `AI: "${userMessage.text}" (simulasi jawaban)`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 800);
  };

  const clearChat = () => {
    setMessages([]);
    setIsMenuOpen(false);
  };

  const resetChat = () => {
    setStarted(false);
    setMessages([]);
    setInput("");
    setIsMenuOpen(false);
  };

  // Auto scroll ke bawah tiap ada message baru
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative w-full min-h-screen flex flex-col text-white ">
      {/* Header - hanya muncul saat chat dimulai */}
      {started && (
        <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <h2 className="text-lg sm:text-xl font-bold text-green-400">AI Chat</h2>
            <div className="flex items-center gap-2">
              {/* Desktop Menu */}
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={clearChat}
                  className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition"
                >
                  Clear Chat
                </button>
                <button
                  onClick={resetChat}
                  className="px-3 py-1 text-sm bg-red-600 hover:bg-red-500 rounded-md transition"
                >
                  Reset
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden p-2 hover:bg-gray-700 rounded-md transition"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="sm:hidden bg-gray-800 border-t border-gray-700 px-4 py-3 space-y-2">
              <button
                onClick={clearChat}
                className="block w-full text-left px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition"
              >
                Clear Chat
              </button>
              <button
                onClick={resetChat}
                className="block w-full text-left px-3 py-2 bg-red-600 hover:bg-red-500 rounded-md transition"
              >
                Reset Chat
              </button>
            </div>
          )}
        </div>
      )}

      {!started ? (
        // =================== Tampilan Awal ===================
        <div className="flex flex-col items-center justify-center flex-1 text-center space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Chat with <span className="text-green-400 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text ">AI</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Dapatkan jawaban instant dari AI untuk semua pertanyaan Anda
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => setStarted(true)}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Mulai Chat Gratis
              </button>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                AI siap membantu 24/7
              </div>
            </div>

            {/* Input Awal */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="flex items-center bg-black/40 border border-gray-600 hover:border-green-500/50 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md shadow-xl transition-all">
                <input
                  type="text"
                  placeholder="Tanya apa saja... contoh: 'Jelaskan tentang AI'"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2 text-sm sm:text-base"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 sm:p-3 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // =================== Tampilan Chat ===================
        <div className="flex flex-col flex-1 w-full">
          {/* Chat Container */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-4 pb-24"
            style={{ 
              maxHeight: started ? 'calc(100vh - 140px)' : '80vh'
            }}
          >
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mulai Percakapan</h3>
                <p className="text-gray-400 max-w-md">
                  Ketik pesan di bawah untuk memulai chat dengan AI
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } px-2 sm:px-0`}
                >
                  <div
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-2xl max-w-[85%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] shadow-lg ${
                      msg.sender === "user"
                        ? "bg-green-500 text-black rounded-br-md font-medium"
                        : "bg-gray-800/90 text-gray-100 rounded-bl-md border border-gray-700"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed break-words">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Chat - Fixed Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent pt-4 pb-4 px-3 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end gap-2 sm:gap-4">
                <div className="flex-1 bg-gray-800/95 border border-gray-600 hover:border-green-500/50 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl backdrop-blur-md transition-all">
                  <textarea
                    placeholder="Ketik pesan Anda..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    rows={1}
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none text-sm sm:text-base leading-relaxed"
                    style={{ 
                      minHeight: '24px',
                      maxHeight: '120px'
                    }}
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-3 sm:p-4 rounded-xl bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg flex-shrink-0"
                >
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </button>
              </div>
              
              <div className="text-center mt-2">
                <p className="text-xs text-gray-500">
                  Tekan Enter untuk kirim • Shift+Enter untuk baris baru
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}