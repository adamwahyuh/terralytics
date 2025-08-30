import { Send  } from 'lucide-react'
export default function ChatContent() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center  text-white overflow-hidden">
      
      {/* Title */}
      <div className="text-center space-y-2 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Chat with <span className="text-green-400">AI</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Simply ask your AI chatbot assistant to generate!
        </p>
        
        {/* Try Demo Button */}
        <button className="mt-4 px-6 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 transition font-medium">
          Try with Demo
        </button>
      </div>

      {/* Chat Input */}
      <div className="mt-10 flex items-center bg-black/40 border border-gray-700 rounded-full px-4 py-2 w-[90%] max-w-2xl backdrop-blur-md shadow-lg">
        <input 
          type="text" 
          placeholder="Ask Anything" 
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
        />
        <button className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/30 transition">
          <Send className="w-5 h-5 text-green-400" />
        </button>
      </div>

    </div>
  );
}