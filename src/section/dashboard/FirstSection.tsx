import { ShieldCheck, Network } from "lucide-react";
import StatusChip from "@/components/dashboard/StatusChip";
import MetricCard from "@/components/dashboard/MetricCard";
import HealthSummary from "@/components/dashboard/HealtSumary";
import RiskCard from "@/components/dashboard/RiskCard";
import { CustomAnimation } from "@/lib/animation";

export default function FirstSection() {
  const anim = CustomAnimation[0];
  return (
    <main className="relative w-full text-white overflow-hidden min-h-screen">
      {/* Latar belakang */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/img/gunung.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Efek blur + overlay gelap */}
      <div className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm" />

      {/* Konten */}
      <div className="relative mx-auto max-w-6xl px-4 py-8 mt-20">
        {/* Chip status */}
        <div
          className={`mb-4 flex flex-wrap items-center justify-center gap-3 ${anim.fadeInUp}`}
          style={{ animationDelay: "0.1s" }}
        >
          <StatusChip icon={Network} label="Analitik Big Data Real-time" />
          <StatusChip icon={ShieldCheck} label="Semua Sistem Aktif" />
        </div>

        {/* Judul */}
        <div
          className={`text-center ${anim.fadeInUp}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Panel Cerdas Pertanian
          </h1>
          <p className="mt-2 text-sm text-emerald-100/90">
            Pantau kondisi pertanian Anda dengan sensor bertenaga AI dan analisis prediktif
          </p>
        </div>

        {/* Metrik */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.3s" }}>
            <MetricCard
              icon="sprout"
              title="Kesehatan Tanaman"
              valueLabel="88%"
              value={88}
              max={100}
              footerLabel="Optimal"
              live
            />
          </div>
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.4s" }}>
            <MetricCard
              icon="droplet"
              title="Kelembapan Tanah"
              valueLabel="74%"
              value={74}
              max={100}
              footerLabel="Baik"
              live
            />
          </div>
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.5s" }}>
            <MetricCard
              icon="thermo"
              title="Suhu"
              valueLabel="24°C"
              value={24}
              max={50}
              footerLabel="Perlu Perhatian"
              live
            />
          </div>
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.6s" }}>
            <MetricCard
              icon="humidity"
              title="Kelembapan Udara"
              valueLabel="84%"
              value={84}
              max={100}
              footerLabel="Optimal"
              live
            />
          </div>
        </section>

        {/* Ringkasan kesehatan */}
        <section
          className={`mt-10 ${anim.fadeInUp}`}
          style={{ animationDelay: "0.7s" }}
        >
          <HealthSummary percent={82} label="Sangat Baik" />
        </section>

        {/* Baris risiko */}
        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.8s" }}>
            <RiskCard
              tone="good"
              title="Normal"
              subtitleTop="Stres Air"
              subtitleBottom="Tingkat optimal"
            />
          </div>
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "0.9s" }}>
            <RiskCard
              tone="warn"
              title="Sedang"
              subtitleTop="Kadar Nutrisi"
              subtitleBottom="Perlu perhatian"
            />
          </div>
          <div className={`${anim.fadeInUp}`} style={{ animationDelay: "1s" }}>
            <RiskCard
              tone="bad"
              title="Rendah"
              subtitleTop="Risiko Hama"
              subtitleBottom="Aman"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
