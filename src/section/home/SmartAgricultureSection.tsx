import { CheckCircle, MessageSquare, Camera, Cpu, Lightbulb, Brain } from "lucide-react";
import { colorTheme } from "@/lib/coloring";
export default function SmartAgricultureSection() {

// 
const color = colorTheme[0];
const leftFeatures = [
"Early plant disease detection with 92% accuracy",
"Optimization of water and fertilizer usage",
"Weather prediction and its impact on plants",
"Best planting and harvesting time recommendations",
"Market analysis for optimal selling prices",
];

const rightFeatures = [
{
    icon: <MessageSquare size={28} />,
    title: "AI Consultation Chatbot",
    description: "Direct Q&A with AI for agricultural problem solutions",
},
{
    icon: <Camera size={28} />,
    title: "Plant Photo Analysis",
    description: "Upload photos for instant disease and pest detection",
},
{
    icon: <Cpu size={28} />,
    title: "Machine Learning",
    description: "Algorithms that continuously learn from your land data",
},
{
    icon: <Lightbulb size={28} />,
    title: "Smart Recommendations",
    description:
    "Intelligent suggestions based on agricultural big data analysis",
},
];

  return (
    <section className=" relative w-full py-16 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="bg-yellow-100 text-green-800 h-10 px-4 py-1 rounded-full text-sm font-semibold flex gap-2 items-center">
            <Brain />Powered by AI
          </span>
          <h2 className="text-4xl font-bold text-center text-white mt-4">
            Artificial Intelligence for <span className="text-green-300">Smart Agriculture</span>
          </h2>
          <p className="text-gray-200 text-center mt-2 max-w-3xl">
            TerrAItycs uses cutting-edge AI technology to provide deep insights about land
            conditions, harvest predictions, and targeted recommendations.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side */}
          <div className={`${color.cardColorGreenGradient +  color.hoverAnimationScale + color.cursorPointer} p-6 rounded-2xl flex flex-col justify-between`}>
            <ul className="space-y-4">
              {leftFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={22} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-gradient-to-r from-teal-600 to-yellow-400 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 w-fit">
              Start AI Consultation
              <span className="bg-white text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-bold">
                &gt;
              </span>
            </button>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightFeatures.map((f, i) => (
              <div
                key={i}
                className={`${color.cardColorGreenGradient +  color.hoverAnimationScale + color.cursorPointer} p-6 rounded-2xl text-white`}
              >
                <div className="bg-green-600/60 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
