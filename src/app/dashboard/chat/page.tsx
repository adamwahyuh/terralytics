'use client'

import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatContent from "@/components/chat/submenu/ChatContent";
import { VoiceContent } from "@/components/chat/submenu/VoiceContent";
import { ImageContent } from "@/components/chat/submenu/ImageContent";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("chat");

  const renderContent = () => {
    switch (activeContent) {
      case "search":
        return <ChatContent />;
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
      className="min-h-screen text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/gunung.jpg')" }}
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
        {/* Dynamic Content */}
        <div className="mt-20">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
