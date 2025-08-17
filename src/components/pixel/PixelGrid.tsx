"use client";

type PixelGridProps = {
  matrix: number[][];
  activeClass: (r: number, c: number) => string; // tentukan warna per sel
  size?: number;  // px per kotak
  gap?: number;   // px jarak antar kotak
  className?: string;
};

export default function PixelGrid({
  matrix,
  activeClass,
  size = 24,
  gap = 4,
  className = "",
}: PixelGridProps) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${matrix[0].length}, ${size}px)`,
        gap,
      }}
    >
      {matrix.map((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            className={cell ? activeClass(r, c) : "bg-transparent"}
            style={{ width: size, height: size }}
          />
        ))
      )}
    </div>
  );
}
