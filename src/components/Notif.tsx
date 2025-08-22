import { Bell, Cloud, Cpu, Server, BrainCircuit } from "lucide-react";

export default function Notif() {
  const notifs = [
    {
      id: 1,
      icon: <Bell className="w-6 h-6 text-lime-600" />,
      title: "Harvest Prediction Ready",
      desc: "Rice harvest prediction is available for this season.",
    },
    {
      id: 2,
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Weather Update",
      desc: "Expect rainfall tomorrow in your area.",
    },
    {
      id: 3,
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: "New AI Model",
      desc: "An updated AI model is ready for analysis.",
    },
    {
      id: 4,
      icon: <Server className="w-6 h-6 text-yellow-300" />,
      title: "Server Maintenance",
      desc: "System will be down at 17.00-19.00.",
    },
    {
      id: 5,
      icon: <BrainCircuit className="w-6 h-6 text-red-500" />,
      title: "Ai Went Rogue",
      desc: "An AI went rogue. It will conquer the world!",
    },
  ];

  return (
    <div className="p-4 text-sm text-white">
      <h2 className="text-base font-bold mb-3">Notifications</h2>
      <ul className="divide-y divide-green-800">
        {notifs.map((item) => (
          <li key={item.id} className="flex items-start gap-3 py-3">
            <div className="flex-shrink-0">{item.icon}</div>
            {/* icon atas, bawah notif */}
            <div className="flex-1">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-gray-300 text-xs">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
