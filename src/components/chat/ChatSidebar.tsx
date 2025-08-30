'use client'

import { 
  Search, 
  MessageCircle, 
  Mic, 
  Image, 
  History,
  X,
  Menu
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeItem?: string;
  onItemClick: (id: string) => void;
}

import { colorTheme } from "@/lib/coloring";

export default function ChatSidebar({ isOpen, onToggle, activeItem = "chat", onItemClick }: SidebarProps) {
  const sidebarItems = [
    { icon: Search, label: "Search", id: "search" },
    { icon: MessageCircle, label: "Chat", id: "chat" },
    { icon: Mic, label: "Voice", id: "voice" },
    { icon: Image, label: "Image", id: "image" },
    { icon: History, label: "History", id: "history" },
  ];
const ct = colorTheme[0];
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-gray-800/80 rounded-lg backdrop-blur-sm"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-black/80 transform transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        
        {/* Navigation Items */}
        <div className="p-6 space-y-3 mt-20">
          {sidebarItems.map((item) => {
            const isActive = activeItem.toLowerCase() === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30 shadow-md shadow-green-500/10" 
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Profile Section */}
        <div className="p-6">
          <div className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 transition rounded-xl cursor-pointer">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-white text-sm font-bold">D</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Destaanacry</p>
              <p className="text-xs text-gray-400">TerraPlus</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
}
