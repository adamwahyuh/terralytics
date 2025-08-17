"use client";

import PixelGrid from "./PixelGrid";

const DIGIT_4 = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

const DIGIT_0 = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

type Props = {
  variant: "4" | "0";
  color?: "green" | "yellow";
  size?: number;
  gap?: number;
  className?: string;
};

export default function Digit404({
  variant,
  color = "green",
  size,
  gap,
  className,
}: Props) {
  const matrix = variant === "4" ? DIGIT_4 : DIGIT_0;
  const colorClass =
    color === "green" ? "bg-green-900" : "bg-yellow-800";

  return (
    <PixelGrid
      matrix={matrix}
      size={size}
      gap={gap}
      className={className}
      activeClass={() => colorClass}
    />
  );
}
