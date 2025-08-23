import StatCard from "@/components/StatCard";
import { Leaf, Droplet, Thermometer, CloudRain, Database } from "lucide-react";
import AIInsightsSection from "./AIInsightsSection";


export default function DashboardSection() {

  return (

    <section
      className="relative w-full py-16 bg-cover bg-center"
    >


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        {/* Badge */}
        <div className="bg-yellow-100 text-green-800 px-4 py-1 h-10 rounded-2xl text-sm font-semibold mb-4 flex gap-2 items-center">
          <Database /> Real-time Big Data Analytics
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Pertanian Cerdas dengan AI
        </h2>
        <p className="text-sm md:text-base mb-10">
          Pantau tanda-tanda vital pertanian Anda dengan sensor bertenaga AI dan analitik prediktif
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 pb-16">
          <StatCard
            icon={<Leaf size={20} />}
            title="Kesehatan Tanaman"
            value={88}
            unit="%"
            max={100}
            statusText="Optimal"
          />
          <StatCard
            icon={<Droplet size={20} />}
            title="Kelembaban Tanah"
            value={74}
            unit="%"
            max={100}
            statusText="Good"
          />
          <StatCard
            icon={<Thermometer size={20} />}
            title="Temperatur"
            value={24}
            unit="°C"
            max={50}
            statusText="Needs Attention"
          />
          <StatCard
            icon={<CloudRain size={20} />}
            title="Kelembaban"
            value={84}
            unit="%"
            max={100}
            statusText="Optimal"
          />
        </div>

        {/* Button
        <Link
          href="/dashboard"
          className={`mt-10 ${color.gradientGreenYellow + color.cursorPointer} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${color.hoverAnimationScale} transition`}
        >
          Explore Dashboard
        </Link> */}
      </div>

      
        <AIInsightsSection />
    </section>

    
  );
}
