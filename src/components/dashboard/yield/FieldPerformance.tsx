"use client";

type PriorityLevel = "High" | "Medium" | "Urgent";

const fields: { 
  name: string; 
  area: string; 
  current: number; 
  potential: number; 
  eff: number; 
  priority: PriorityLevel; 
}[] = [
  { name: "Field A", area: "12.5 ha", current: 6.8, potential: 8.2, eff: 83, priority: "High" },
  { name: "Field B", area: "8.3 ha", current: 5.9, potential: 7.5, eff: 79, priority: "Medium" },
  { name: "Field C", area: "15.2 ha", current: 6.4, potential: 7.8, eff: 82, priority: "High" },
  { name: "Field D", area: "9.7 ha", current: 5.2, potential: 6.8, eff: 76, priority: "Urgent" },
];

const priorityColor: Record<PriorityLevel, string> = {
  High: "bg-green-600",
  Medium: "bg-yellow-500",
  Urgent: "bg-red-600",
};

export default function FieldPerformance() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Field Performance</h2>
      <div className="grid md:grid-cols-4 gap-4 cursor-pointer">
        {fields.map((f, i) => (
          <div key={i} className="bg-[#222]/80 rounded-xl p-4 flex flex-col items-center">
            <span className="text-sm font-medium">{f.name}</span>
            <span className="text-xs text-gray-400">{f.area}</span>
            <p className="text-xl font-bold mt-2">{f.current}</p>
            <p className="text-xs">Current</p>
            <p className="mt-1 text-sm">{f.potential} Potential</p>
            <p className="text-xs">{f.eff}% Efficiency</p>
            <span
              className={`mt-2 px-2 py-1 text-xs rounded-full ${priorityColor[f.priority]}`}
            >
              {f.priority} Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
