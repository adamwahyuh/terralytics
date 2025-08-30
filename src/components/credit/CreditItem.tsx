"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CreditItem } from "@/lib/credit";

export default function CreditItemCard({ item }: { item: CreditItem }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div
        className={`${
          item.id % 2 === 0 ? "lg:order-2" : "lg:order-1"
        } space-y-6`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {item.title}
        </h2>
        <p className="text-lg text-white leading-relaxed">
          {item.description}
        </p>
        <div className="pt-4">
          <Link
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-400 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl"
          >
            {item.linkText}
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className={`${item.id % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/20 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
