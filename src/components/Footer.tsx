import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Leaf,
  Mail,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color)] text-white pt-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <path d="M0 0L800 600" stroke="white" />
          <path d="M800 0L0 600" stroke="white" />
        </svg>
      </div>

      {/* Top */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={28} className="text-green-400" />
            <span className="text-2xl font-bold tracking-wide">TerrAlytics</span>
          </div>
          <p className="text-sm text-gray-200">
            AI-driven insights for smarter, sustainable agriculture. Helping plantations grow better through intelligent systems.
          </p>
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="#" aria-label="X"><X size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-green-300">Home</a></li>
            <li><a href="#" className="hover:text-green-300">Solutions</a></li>
            <li><a href="#" className="hover:text-green-300">Technology</a></li>
            <li><a href="#" className="hover:text-green-300">Partners</a></li>
            <li><a href="#" className="hover:text-green-300">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p className="text-sm text-gray-200 mb-2">Reach out to collaborate or learn more.</p>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={18} />
            <a href="mailto:hello@terrallytics.ai" className="hover:text-green-300 text-sm">
              hello@terrallytics.test
            </a>
          </div>
          <button className="mt-6 flex items-center gap-2 border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-[--primary-color] transition">
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>

      <div className="mt-16 border-t border-white/20 text-center text-sm py-4 text-gray-400 relative z-10">
        © {new Date().getFullYear()} Terrallytics. All rights reserved.
      </div>
    </footer>
  );
}
