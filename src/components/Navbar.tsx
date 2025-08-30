"use client";

import { Bell, User, Menu, X, Brain } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/links";
import { aboutCompany } from "@/lib/about";
import { colorTheme } from "@/lib/coloring";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Notif from "./Notif";

export default function Navbar() {
  const company = aboutCompany[0];
  const color = colorTheme[0];
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifRefDesktop = useRef<HTMLDivElement>(null);
  const notifRefMobile = useRef<HTMLDivElement>(null);

  // klik di luar notif, otomatis close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notifRefDesktop.current?.contains(event.target as Node) ||
        notifRefMobile.current?.contains(event.target as Node)
      ) {
        return;
      }
      setNotifOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // auto close
  useEffect(() => {
    if (notifOpen) setMenuOpen(false);
  }, [notifOpen]);

  useEffect(() => {
    if (menuOpen) setNotifOpen(false);
  }, [menuOpen]);


  const hideMenu = pathname.startsWith("/dashboard");


  return (
    <header className={`fixed top-0 w-full z-50 text-white bg-${color.navColor} backdrop-blur-2xl sm:backdrop-blur-none sm:bg-transparent`}>
      <div className="max-w-full px-6 py-4 flex justify-between items-center 
         ">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-white ${color.textHover} transition`}
        >
          {/* <img
            src={company.logo}
            alt="Logo"
            className="w-7 h-7 cursor-pointer transition hover:scale-110"
          /> */}
          <Brain className="w-7 h-7 cursor-pointer transition hover:scale-110" />
          <span className="text-xl font-bold">{company.name}</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm rounded-full px-10 py-3 font-medium relative bg-black/40 backdrop-blur-md shadow-inner">
          {navLinks.map((link: any) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`relative z-10 px-5 py-3 rounded-full transition font-medium
                    ${isActive 
                      ? "text-black" 
                      : "text-white hover:text-gray-200 hover:bg-white/10 hover:scale-105"
                    }`}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute -inset-1 rounded-full bg-white shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Icons Desktop */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Bell dengan dropdown notif */}
          {hideMenu && <div className="relative" ref={notifRefDesktop}>
            <Bell
              className={`w-5 h-5 ${color.cursorPointer} ${color.textHover} transition hover:scale-110`}
              onClick={() => setNotifOpen((prev) => !prev)}
            />
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  key="notif-dropdown"
                  initial={{ opacity: 0, scale: 0.95, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-black/80 backdrop-blur-lg absolute right-0 mt-3 w-72 text-white rounded-xl shadow-2xl border border-white/10 z-50 p-3"
                >
                  <Notif />
                </motion.div>
              )}
            </AnimatePresence>
          </div>}

          {/* User + Get Started */}
          <User
            className={`w-5 h-5 ${color.cursorPointer} ${color.textHover} transition hover:scale-110`}
          />
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-green-400 to-yellow-300 text-black px-5 py-2 rounded-full text-sm font-semibold transition hover:scale-105 shadow-md"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:hidden relative">
          {/* Bell mobile */}
          {hideMenu && <div className="relative" ref={notifRefMobile}>
            <Bell
              className={`w-6 h-6 ${color.cursorPointer} ${color.textHover} transition`}
              onClick={() => setNotifOpen((prev) => !prev)}
            />
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`backdrop-blur-lg bg-green-900 absolute right-0 mt-2 w-72 text-white rounded-xl shadow-xl border border-white/10 z-50 p-3`}
                >
                  <Notif />
                </motion.div>
              )}
            </AnimatePresence>
          </div>}

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden bg-${color.navColor} backdrop-blur-sm px-6 py-6 space-y-4 shadow-2xl rounded-b-2xl`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block relative px-2 py-2 rounded-md transition
                    ${isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-gray-200"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Link
                href="/get-started"
                className="bg-gradient-to-r from-green-400 to-yellow-300 text-black px-5 py-2 rounded-full text-sm font-semibold transition hover:scale-105 shadow-md"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
