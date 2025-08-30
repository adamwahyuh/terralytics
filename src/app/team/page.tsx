"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import { colorTheme } from "@/lib/coloring";

interface Member {
  name: string;
  role: string;
  image: string;
  socials: {
    instagram?: string;
    email?: string;
  };
}

const members: Member[] = [
  {
    name: "Adam Wahyu Hariyadi",
    role: "Frontend Developer",
    image: "/img/pp/adam-how-are-you-love-you.png",
    socials: {
      instagram: "https://www.instagram.com/adamwahyuh/",
      email: "mailto:adamdesign19@gmail.com",
    },
  },
  {
    name: "Andri Yanto Wijaya",
    role: "UI/UX Designer",
    image: "/img/pp/andri-pp.jpg",
    socials: {
      instagram: "https://www.instagram.com/nndriii._/",
      email: "mailto:andriyantowijaya82@gmail.com",
    },
  },
  {
    name: "Desta Andriyanto",
    role: "UI/UX Designer",
    image: "/img/pp/desta-pp.jpg",
    socials: {
      instagram: "https://www.instagram.com/destaandry/",
      email: "mailto:destaandrianto34@gmail.com",
    },
  },
];

export default function Team() {
  const color = colorTheme[0];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % members.length); // pindah ke index berikutnya
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative"
      style={{
        backgroundImage: "url(/img/weirdSawah.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center mt-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-green-200 text-center">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 w-full px-4">
          {members.map((member, index) => (
            <div
              key={index}
              className={`${color.cardColorGreenGradient} ${color.cursorPointer} flex flex-col sm:flex-row items-center shadow-md rounded-2xl p-6 hover:shadow-lg transition-transform duration-500`}
              style={{
                transform: activeIndex === index ? "scale(1.08)" : "scale(1)",
                border: activeIndex === index ? "3px solid white" : "none",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />

              <div className="hidden sm:block w-[2px] h-24 bg-green-700 mx-6" />

              <div className="mt-4 sm:mt-0 flex flex-col text-center sm:text-left">
                <h2 className="text-lg md:text-2xl font-semibold text-white">
                  {member.name}
                </h2>
                <p className="text-yellow-100">{member.role}</p>

                <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 transition-all duration-300 hover:text-green-700"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={member.socials.email}
                      className="text-green-400 transition-all duration-300 hover:text-green-700"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
