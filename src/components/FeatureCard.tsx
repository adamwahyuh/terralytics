import { ReactNode } from "react";
import { MoveUpRight, BrainCircuit } from 'lucide-react'; 
import { colorTheme } from "@/lib/coloring";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  accuracy: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  accuracy,
  description,
}: FeatureCardProps) {

const color = colorTheme[0];

  return (
    <div  className={`relative ${color.cardColorGreenGradient + color.hoverAnimationScale} rounded-2xl p-6 pb-10 text-white w-full md:w-64 flex flex-col justify-between shadow-lg`}>
      
      <div>
        <div className="flex items-start gap-4 mb-2">
          <div className="bg-teal-600 p-3 rounded-lg">{icon}</div>
          <h3 className="text-md font-bold pt-1">{title}</h3>
        </div>
        <hr className="opacity-40" />

        <div className="flex items-center justify-center gap-3 my-4">
          <div className="bg-gray-800/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {accuracy}
          </div>
        </div>
        <p className="text-sm text-gray-200 text-start">{description}</p>

      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="bg-slate-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          <MoveUpRight size={24} />
        </div>
      </div>
      
    </div>
  );
}