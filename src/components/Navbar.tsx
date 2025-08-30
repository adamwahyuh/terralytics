"use client";

import { Bell, User, Menu, X } from "lucide-react";
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

  // kalau buka notif, menu ketutup
  useEffect(() => {
    if (notifOpen) setMenuOpen(false);
  }, [notifOpen]);

  // kalau buka menu, notif ketutup
  useEffect(() => {
    if (menuOpen) setNotifOpen(false);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-${color.navColor} text-white ` }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-white ${color.textHover} transition`}
        >
          <img
            src={company.logo}
            alt="Logo"
            className="w-6 h-6 cursor-pointer transition"
          />
          <span className="text-xl font-bold">{company.name}</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.name}
                className="relative flex flex-col items-center"
              >
                <Link
                  href={link.href}
                  className={`${color.textHover} transition pb-1`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className={`${color.gradientGreenYellow} absolute -bottom-[2px] h-[2px] w-full  rounded-full`}
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
          <div className="relative" ref={notifRefDesktop}>
            <Bell
              className={`w-5 h-5 ${color.cursorPointer} ${color.textHover} transition`}
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
                  className="bg-green-900 backdrop-blur-lg absolute right-0 mt-2 w-72 text-white rounded-xl shadow-lg border border-green-900 z-50"
                >
                  <Notif />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User + Get Started */}
          <User
            className={`w-5 h-5 ${color.cursorPointer} ${color.textHover} transition`}
          />
          <Link
            href="/get-started"
            className={`bg-[var(--primary-color)] ${color.textHover} ${color.cursorPointer} text-white px-4 py-2 rounded-full text-sm font-semibold transition`}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger + Bell di Mobile */}
        <div className="flex items-center space-x-4 md:hidden relative">
          {/* Bell mobile */}
          <div className="relative" ref={notifRefMobile}>
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
                  className="bg-green-900 backdrop-blur-lg absolute right-0 mt-2 w-72 text-white rounded-xl shadow-lg border border-green-900 z-50"
                >
                  <Notif />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[var(--primary-color)] px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${color.textHover} transition relative pb-1`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline-mobile"
                      className="absolute -bottom-[2px] h-[2px] w-full bg-white rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
              <Link
                href="/get-started"
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold transition"
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