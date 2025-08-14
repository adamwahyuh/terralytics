import { ReactNode } from "react";

interface AIInsightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

export default function AIInsightCard({
  icon,
  title,
  description,
  bgColor = "bg-green-900/40",
}: AIInsightCardProps) {
  return (
    <div
      className={`${bgColor} rounded-2xl p-5 flex flex-col gap-2 min-h-[120px] w-full md:w-[300px]`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  );
}
