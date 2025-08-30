"use client";

import Link from "next/link";
import { Package, Code, User, Shield } from "lucide-react";
import { NpmLibraryCredit } from "@/lib/credit";

const getCategoryColor = (category: NpmLibraryCredit["category"]) => {
  const colors = {
    ui: "bg-blue-600 text-blue-100",
    utility: "bg-purple-600 text-purple-100",
    framework: "bg-red-600 text-red-100",
    icon: "bg-yellow-600 text-yellow-100",
    animation: "bg-pink-600 text-pink-100",
    other: "bg-gray-600 text-gray-100",
    library: "bg-indigo-900 text-white",
  };
  return colors[category] || colors.other;
};

export default function NpmLibraryCard({ lib }: { lib: NpmLibraryCredit }) {
  return (
    <div
      className="bg-green-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 border border-green-700 hover:border-green-600 shadow-xl hover:shadow-2xl transition-all 
                  flex flex-col h-full min-h-[320px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-5 h-5 text-green-300" />
            <h3 className="text-lg font-mono font-semibold text-green-100">
              {lib.packageName}
            </h3>
          </div>
          <span className="text-sm font-mono text-green-300 bg-green-900 bg-opacity-50 px-2 py-1 rounded">
            v{lib.version}
          </span>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(
            lib.category
          )}`}
        >
          {lib.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-green-200 text-sm mb-4 line-clamp-4">{lib.description}</p>

      {/* Meta info */}
      <div className="space-y-2 text-green-200 text-sm mb-6">
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-green-300" />{" "}
          <span className="font-medium text-green-100">Author:</span> {lib.author}
        </p>
        <p className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-300" />{" "}
          <span className="font-medium text-green-100">License:</span> {lib.license}
        </p>
      </div>

      {/* Actions (always at bottom) */}
      <div className="mt-auto flex gap-2 flex-wrap">
        <Link
          href={lib.npmUrl}
          target="_blank"
          className="inline-flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white text-sm transition"
        >
          <Package className="w-3 h-3" /> NPM
        </Link>
        {lib.githubUrl && (
          <Link
            href={lib.githubUrl}
            target="_blank"
            className="inline-flex items-center gap-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition"
          >
            <Code className="w-3 h-3" /> GitHub
          </Link>
        )}
      </div>
    </div>
  );
}
