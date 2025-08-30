'use client'

import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatContent from "@/components/chat/submenu/ChatContent";
import { VoiceContent } from "@/components/chat/submenu/VoiceContent";
import { ImageContent } from "@/components/chat/submenu/ImageContent";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("chat");

  const renderContent = () => {
    switch (activeContent) {
      case "chat":
        return <ChatContent />;
      case "voice":
        return <VoiceContent />;
      case "image":
        return <ImageContent />;
      case "history":
        return <ChatContent />;
      default:
        return <ChatContent />;
    }
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden bg-teal-500/80"
  
    >
      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Sidebar Component */}
      <ChatSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeItem={activeContent}
        onItemClick={(itemId) => setActiveContent(itemId)}
      />

      {/* Main Content */}
      <div className="md:ml-64 min-h-screen relative z-10">
        {/* Dynamic Content dengan fade-up */}
        <motion.div
          key={activeContent} // key biar Framer Motion trigger animasi setiap content berubah
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}
