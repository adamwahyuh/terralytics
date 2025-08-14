import FeatureCard from "@/components/FeatureCard";
import { Leaf, Cloud, BarChart3, Droplet, Zap} from "lucide-react";

export default function AIFeaturesSection() {
  return (
    <section
      className="relative w-full py-16"
      >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        {/* Badge */}
        <div className="bg-yellow-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 flex items-center gap-2">
          <span><Zap /></span> Advanced AI Technologies
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Revolutionary AI Features for{" "}
          <span className="text-green-400">Modern Agriculture</span>
        </h2>
        <p className="text-sm md:text-base mb-10 max-w-2xl">
          Harness the power of artificial intelligence and big data to
          transform your farming operations
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            icon={<Leaf size={20} />}
            title="Crop Health AI Analysis"
            accuracy="98.5% Accuracy"
            description="Advanced computer vision analyzes crop health in real-time using satellite imagery and drone data."
          />
          <FeatureCard
            icon={<Cloud size={20} />}
            title="Weather Prediction ML"
            accuracy="94.2% Accuracy"
            description="Machine learning models predict weather patterns with unprecedented accuracy for farming decisions."
          />
          <FeatureCard
            icon={<BarChart3 size={20} />}
            title="Yield Optimization"
            accuracy="91.8% Accuracy"
            description="Big data analytics optimize planting schedules and resource allocation for maximum yield."
          />
          <FeatureCard
            icon={<Droplet size={20} />}
            title="Smart Irrigation AI"
            accuracy="96.3% Accuracy"
            description="IoT sensors and AI algorithms determine optimal watering schedules and amounts."
          />
        </div>
      </div>
    </section>
  );
}
