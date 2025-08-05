'use client'

import { Bell, User, Leaf } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from '@/lib/links';
import { aboutCompany } from '@/lib/about';


export default function Navbar() {
  const company = aboutCompany[0]; 
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-green-900/80 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div >
          <Link href="/" className='flex items-center gap-2 text-white hover:text-green-300 transition'>
            <Leaf className="text-green-400 w-6 h-6 cursor-pointer hover:text-green-300 transition" />
            <span className="text-xl font-bold">{company.name}</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-green-300 transition">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons & Button */}
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 hover:text-green-300 transition hidden md:block" />
          <User className="w-5 h-5 hover:text-green-300 transition hidden md:block" />
          <Link
            href="/get-started"
            className="bg-[var(--primary-color)] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
