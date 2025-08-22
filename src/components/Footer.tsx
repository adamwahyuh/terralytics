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

const iconMap = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Youtube: Youtube,
  LinkedIn: Linkedin,
  X: XIcon,
}

import Image from 'next/image'
import { aboutCompany } from '@/lib/about';
import { colorTheme } from '@/lib/coloring';



export default function Footer() {
  const company = aboutCompany[0];
  const color = colorTheme[0];

  return (
    <footer className="bg-green-950 text-white px-6 md:px-20 py-10">
      <div className="max-w-screen-xl mx-auto">
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
            <p className="text-sm mt-4 text-gray-300 max-w-sm">
              {company.subtitle}
            </p>

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
          <div className="flex flex-wrap md:space-x-16 text-sm">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Products</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="/dashboard">AI Dashboard</Link></li>
                <li><Link className={`${color.textHover}`} href="#">Harvest Prediction</Link></li>
                <li><Link className={`${color.textHover}`} href="#">AI Consultation</Link></li>
                <li><Link className={`${color.textHover}`} href="/dashboard">Weather Prediction</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Groups</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="#">About Us</Link></li>
                <li><Link className={`${color.textHover}`} href="#">Team</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link className={`${color.textHover}`} href="">Contact</Link></li>
                <li><Link className={`${color.textHover}`} href="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-green-900 rounded-2xl mt-12 p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <h4 className="font-semibold text-lg">Get Latest Updates</h4>
            <p className="text-sm text-gray-300">Subscribe to newsletter for AI agriculture tips and latest feature updates</p>
          </div>
          <div className="flex mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email"
              className={`px-4 py-2 rounded-l-full text-sm w-full md:w-64 outline-none text-black bg-white/50`}
            />
            <button className={` ${color.gradientGreenYellow} text-green-950 px-6 py-2 rounded-r-full font-medium hover:bg-green-300 transition`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-800 mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between text-gray-400">
          <p>
            &copy; {company.year}{' '}
            <Link href="https://utpas.ac.id" className="text-purple-500" target="_blank">
              utpas.ac.id
            </Link>{' '}
            All rights reserved. CORISINDO 2025 Web Design Competition.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className={`${color.textHover}`} href="#">Privacy Policy</Link>
            <Link className={`${color.textHover}`} href="#">Terms & Conditions</Link>
            <Link className={`${color.textHover}`} href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
