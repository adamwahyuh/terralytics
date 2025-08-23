"use client";

import { useState, useEffect } from "react";

export default function LogoType() {
  const fullText = "TerrAlytics";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-6xl md:text-9xl font-bold">
      <span className="text-green-500">{displayText.slice(0, 4)}</span>
      {displayText.slice(4)}
    </h1>
  );
}
