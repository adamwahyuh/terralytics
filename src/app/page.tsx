import { aboutCompany } from '@/lib/about';

export default function Home() {
  const company = aboutCompany[0];
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-green-900">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di {company.name}</h1>
      <p className="text-lg leading-relaxed mb-4">
        {company.subtitle}
      </p>
      <p className="text-lg leading-relaxed">
        Jelajahi data, pantau kondisi hutan secara real-time, dan gunakan kecerdasan buatan untuk keputusan yang lebih bijak demi masa depan bumi.
      </p>
    </div>
  );
}
