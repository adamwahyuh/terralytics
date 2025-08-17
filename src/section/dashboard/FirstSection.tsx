// app/page.tsx
import { ShieldCheck, Network } from "lucide-react";
import StatusChip from "@/components/dashboard/StatusChip";
import MetricCard from "@/components/dashboard/MetricCard";
import HealthSummary from "@/components/dashboard/HealtSumary";
import RiskCard from "@/components/dashboard/RiskCard";

export default function FirstSection() {
  return (
    <main className="relative w-full text-white overflow-hidden min-h-screen">
      {/* Background layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/img/gunung.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Blur + dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm" />

      {/* Konten */}
      <div className="relative mx-auto max-w-6xl px-4 py-8 mt-20">
        {/* Top chips */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <StatusChip icon={Network} label="Real-time Big Data Analytics" />
          <StatusChip icon={ShieldCheck} label="All Systems Active" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Live Farm Intelligence Dashboard
        </h1>
        <p className="mt-2 text-center text-sm text-emerald-100/90">
          Monitor your farm’s vital signs with AI-powered sensors and predictive analytics
        </p>

        {/* Metrics */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon="sprout" title="Crop Health Index" valueLabel="88%" value={88} max={100} footerLabel="Optimal" live />
          <MetricCard icon="droplet" title="Soil Moisture" valueLabel="74%" value={74} max={100} footerLabel="Good" live />
          <MetricCard icon="thermo" title="Temperature" valueLabel="24°C" value={24} max={50} footerLabel="Needs Attention" live />
          <MetricCard icon="humidity" title="Humidity" valueLabel="84%" value={84} max={100} footerLabel="Optimal" live />
        </section>

        {/* Overall health */}
        <section className="mt-10">
          <HealthSummary percent={82} label="Excellent" />
        </section>

        {/* Bottom risk row */}
        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <RiskCard tone="good" title="Normal" subtitleTop="Water Stress" subtitleBottom="Optimal levels" />
          <RiskCard tone="warn" title="Medium" subtitleTop="Nutrient Levels" subtitleBottom="Needs attention" />
          <RiskCard tone="bad" title="Low" subtitleTop="Pest Risk" subtitleBottom="All Clear" />
        </section>
      </div>
    </main>
  );
}
