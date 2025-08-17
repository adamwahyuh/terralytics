"use client";

export default function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-rose-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400"></span>
      </span>
      Live
    </span>
  );
}
