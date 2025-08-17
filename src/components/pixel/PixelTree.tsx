"use client";

import PixelGrid from "./PixelGrid";

// daun (1) & batang (2)
const TREE = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
];

type Props = {
  size?: number;
  gap?: number;
  className?: string;
};

export default function PixelTree({ size = 16, gap = 3, className }: Props) {
  return (
    <PixelGrid
      matrix={TREE}
      size={size}
      gap={gap}
      className={className}
      activeClass={(r, c) =>
        TREE[r][c] === 1 ? "bg-green-700" : "bg-amber-900"
      }
    />
  );
}
