"use client";

import type { ComponentType } from "react";

type Props = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  className?: string;
};

export default function StatusChip({ icon: Icon, label, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}
