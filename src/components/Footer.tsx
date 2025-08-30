'use client'
import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  X as XIcon,
} from 'lucide-react'
import Image from 'next/image'
import { aboutCompany } from '@/lib/about'
import { colorTheme } from '@/lib/coloring'

const iconMap = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Youtube: Youtube,
  LinkedIn: Linkedin,
  X: XIcon,
}

export default function Footer() {
  const company = aboutCompany[0]
  const color = colorTheme[0]

  return (
    <footer className="bg-green-950 text-white px-6 md:px-20 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <Image src={company.logo} alt="TerrAlytics Logo" width={40} height={40} />
              <span className="text-2xl font-semibold text-white">
                <span className="text-white">Terr</span>
                <span className="text-lime-400">Alytics</span>
              </span>
            </div>
            <p className="text-sm mt-4 text-gray-300 max-w-sm">{company.subtitle}</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {company.socialLinks.map(({ name, href }) => {
                const Icon = iconMap[name] || null
                return Icon ? (
                  <Link key={name} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className={`w-6 h-6 text-gray-200 ${color.textHover} cursor-pointer transition`} />
                  </Link>
                ) : null
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap md:space-x-16 gap-x-10 gap-y-6 text-sm">
            <div>
              <h3 className="font-bold mb-2">Halaman</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="/dashboard">AI Dashboard</Link></li>
                <li><Link className={`${color.textHover}`} href="/dashboard/chat">AI Chat</Link></li>
                <li><Link className={`${color.textHover}`} href="/saya-admin-paling-ganteng">404</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Groups</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="/about">About Us</Link></li>
                <li><Link className={`${color.textHover}`} href="/team">Team</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="/contact">Contact</Link></li>
                <li><Link className={`${color.textHover}`} href="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-green-900 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-white text-center md:text-left">
            <h4 className="font-semibold text-lg">Get Latest Updates</h4>
            <p className="text-sm text-gray-300">
              Subscribe to newsletter for AI agriculture tips and latest feature updates
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-1">
            <input
              type="email"
              placeholder="Your Email"
              className={`px-4 py-2 rounded-l-full text-sm w-full md:w-64 outline-none text-black bg-white/50 ${color.hoverRingWhite}`}
            />
            <button className={`${color.gradientGreenYellow + color.hoverRingWhite +color.cursorPointer} text-green-950 px-6 py-2 rounded-r-full font-medium hover:bg-green-300 transition`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-800 mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4 md:gap-0">
          <p className="text-center md:text-left">
            &copy; {company.year}{' '}
            <Link href="https://utpas.ac.id" className="text-purple-500" target="_blank">
              utpas.ac.id
            </Link>{' '}
            All rights reserved. CORISINDO 2025 Web Design Competition.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link className={`${color.textHover}`} href="#">Privacy Policy</Link>
            <Link className={`${color.textHover}`} href="#">Terms & Conditions</Link>
            <Link className={`${color.textHover}`} href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
