"use client";

import PixelGrid from "./PixelGrid";

const GROUND = [Array(150).fill(1)];

type Props = {
  size?: number;
  gap?: number;
  className?: string;
};

export default function PixelGround({ size = 12, gap = 2, className }: Props) {
  return (
    <PixelGrid
      matrix={GROUND}
      size={size}
      gap={gap}
      className={className}
      activeClass={() => "bg-amber-800"}
    />
  );
}
