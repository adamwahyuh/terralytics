"use client";

import React from "react";

interface StepCircleProps {
  number: number;
  active: boolean;
  onClick: () => void;
}

export default function StepCircle({ number, active, onClick }: StepCircleProps) {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 
        ${active ? "bg-white text-green-600 border-green-600 font-bold" 
                 : "bg-transparent text-white border-white"} 
        transition duration-300 z-2 backdrop-blur-md cursor-pointer`}
    >
      {number}
    </button>
  );
}
