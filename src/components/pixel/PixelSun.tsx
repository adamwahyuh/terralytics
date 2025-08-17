export default function PixelSun({ size = 8 }: { size?: number }) {
  return (
    <div
      className="grid gap-[1px]"
      style={{
        gridTemplateColumns: `repeat(7, ${size}px)`,
        gridTemplateRows: `repeat(7, ${size}px)`,
      }}
    >
      {[
        "0001100",
        "0011110",
        "0111111",
        "1111111",
        "0111111",
        "0011110",
        "0001100",
      ].map((row, i) =>
        row.split("").map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={
              cell === "1"
                ? "bg-gradient-to-tr from-yellow-400 to-orange-400"
                : "bg-transparent"
            }
          />
        ))
      )}
    </div>
  );
}
