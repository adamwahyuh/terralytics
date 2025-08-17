"use client";

export default function CropStatsCard() {
  return (
    <div className="rounded-2xl bg-[rgba(6,33,18,0.55)]/80 ring-1 ring-white/6 backdrop-blur-md p-5 shadow-lg">
      <h3 className="text-xl font-bold text-white">Crop Analysis</h3>
      <p className="mt-2 text-sm text-emerald-200/80">
        Real-time monitoring and AI-powered insights for your fields
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Total Fields</div>
          <div className="text-lg font-semibold text-emerald-300">8</div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Active Alerts</div>
          <div className="text-lg font-semibold text-yellow-300">3</div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-white/6 px-5 py-3">
          <div className="text-sm text-emerald-100">Coverage</div>
          <div className="text-lg font-semibold text-sky-300">28 ha</div>
        </div>
      </div>
    </div>
  );
}
