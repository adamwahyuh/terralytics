export default function PixelCloud({ size = 8 }: { size?: number }) {
  return (
    <div
      className="grid gap-[1px]"
      style={{
        gridTemplateColumns: `repeat(10, ${size}px)`,
        gridTemplateRows: `repeat(6, ${size}px)`,
      }}
    >
      {[
        "0001111000",
        "0011111110",
        "0111111111",
        "1111111111",
        "0111111110",
        "0011111100",
      ].map((row, i) =>
        row.split("").map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={
              cell === "1" ? "bg-white shadow-sm" : "bg-transparent"
            }
          />
        ))
      )}
    </div>
  );
}
