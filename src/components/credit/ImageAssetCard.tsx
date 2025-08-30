"use client";

import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, User, Globe, ExternalLink } from "lucide-react";
import { ImageAssetCredit } from "@/lib/credit";
import { colorTheme } from "@/lib/coloring";

export default function ImageAssetCard({ asset }: { asset: ImageAssetCredit }) {
    const ct = colorTheme[0];
  return (
    <div className= {`${ct.cardColorGreenGradient} rounded-xl p-6 hover:bg-opacity-70 border border-green-700 hover:border-green-600 shadow-xl hover:shadow-2xl transition-all`}>
      <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden bg-green-700">
        <Image src={asset.previewImageUrl} alt={asset.assetName} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-2 right-2 bg-green-900 bg-opacity-80 rounded-full p-2">
          <ImageIcon className="w-4 h-4 text-green-200" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-green-100 mb-4">{asset.assetName}</h3>

      <div className="space-y-3 text-green-200 mb-6">
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-green-300" /> <span className="font-medium text-green-100">Creator:</span> {asset.creator}
        </p>
        <p className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-green-300" /> <span className="font-medium text-green-100">Source:</span> {asset.source}
        </p>
      </div>

      <Link
        href={asset.linkUrl}
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-green-100 shadow-md hover:shadow-lg transition"
      >
        Visit Source <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  );
}
