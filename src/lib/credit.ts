// === INTERFACES ===
export interface CreditItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

export interface ImageAssetCredit {
  id: number;
  assetName: string;
  creator: string;
  source: string;
  linkUrl: string;
  previewImageUrl: string;
}

export interface NpmLibraryCredit {
  id: number;
  packageName: string;
  version: string;
  description: string;
  author: string;
  license: string;
  npmUrl: string;
  githubUrl?: string;
  category:
    | "ui"
    | "utility"
    | "framework"
    | "icon"
    | "animation"
    | "other"
    | "library";
}

// === DATA CREDIT ===
export const creditData: CreditItem[] = [
  {
    id: 1,
    title: "Developer Team",
    description:
      "Tim pengembang yang telah berkontribusi dalam pembuatan aplikasi untuk lomba Web Desain CORINDO 2025 ",
    imageUrl: "/img/utpas-biru.png",
    linkUrl: "/team",
    linkText: "Lihat Team",
  },
  {
    id: 2,
    title: "UNIVERSITAS UTPADAKA SWASTIKA",
    description:
      "Terimakasih kepada pihak kampus yang selalu mendukung kami ",
  imageUrl: "/img/utpas-daftar.png",
    linkUrl: "https://pendaftaran.utpas.ac.id/daftar?informasi=website",
    linkText: "Daftar UTPAS",
  },
];

export const imageAssetsCredit: ImageAssetCredit[] = [
  {
    id: 1,
    assetName: "1463895 - Foto Sawah",
    creator: "Tidak Tahu",
    source: "wallpaperaccess.com",
    linkUrl: "https://wallpaperaccess.com/full/1463895.jpg",
    previewImageUrl: "/img/gunung.jpg",
  },
  {
    id: 2,
    assetName: "aerial-view-of-agricultural-farmland-3zz4s",
    creator: "Edgar Navarro",
    source: "lummi.ai",
    linkUrl:
      "https://www.lummi.ai/photo/aerial-view-of-agricultural-farmland-3zz4s",
    previewImageUrl: "/img/weirdSawah.png",
  },
  {
    id: 3,
    assetName: "fresh-raindrops-on-green-leaf-n6bnh",
    creator: "Pablo Stanley",
    source: "lummi.ai",
    linkUrl: "https://www.lummi.ai/photo/fresh-raindrops-on-green-leaf-n6bnh",
    previewImageUrl: "/img/leaf.png",
  },
  {
    id: 4,
    assetName: "stormy-wheat-field-506z",
    creator: "Sam Schwartz Creations",
    source: "lummi.ai",
    linkUrl: "https://www.lummi.ai/photo/stormy-wheat-field-506z",
    previewImageUrl: "/img/FWeather.png",
  },
];

export const npmLibrariesCredit: NpmLibraryCredit[] = [
  {
    id: 1,
    packageName: "next",
    version: "^15.4.5",
    description:
      "The React Framework for Production - provides server-side rendering and many other features",
    author: "Vercel",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/next",
    githubUrl: "https://github.com/vercel/next.js",
    category: "framework",
  },
  {
    id: 2,
    packageName: "react",
    version: "^19.1.0",
    description: "A JavaScript library for building user interfaces",
    author: "Meta (Facebook)",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/react",
    githubUrl: "https://github.com/facebook/react",
    category: "library",
  },
  {
    id: 3,
    packageName: "tailwindcss",
    version: "^4",
    description:
      "A utility-first CSS framework for rapidly building custom designs",
    author: "Tailwind Labs",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/tailwindcss",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    category: "ui",
  },
  {
    id: 4,
    packageName: "lucide-react",
    version: "^0.536.0",
    description: "Beautiful & consistent icon toolkit made by the community",
    author: "Lucide Contributors",
    license: "ISC",
    npmUrl: "https://www.npmjs.com/package/lucide-react",
    githubUrl: "https://github.com/lucide-icons/lucide",
    category: "icon",
  },
  {
    id: 5,
    packageName: "typescript",
    version: "^5",
    description: "TypeScript is a language for application-scale JavaScript",
    author: "Microsoft",
    license: "Apache-2.0",
    npmUrl: "https://www.npmjs.com/package/typescript",
    githubUrl: "https://github.com/microsoft/TypeScript",
    category: "utility",
  },
  {
    id: 6,
    packageName: "framer-motion",
    version: "^12.23.12",
    description: "A production-ready motion library for React",
    author: "Framer",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/framer-motion",
    githubUrl: "https://github.com/framer/motion",
    category: "animation",
  },
  {
    id: 7,
    packageName: "react-loading-indicators",
    version: "^1.0.1",
    description:
      "Kit of elegant loading indicators for React applications (built with TypeScript)",
    author: "Hane-Smitter",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/react-loading-indicators",
    githubUrl: "https://github.com/hane-smitter/react-loading-indicator",
    category: "ui",
  },
  {
    id: 8,
    packageName: "react-type-animation",
    version: "^3.2.0",
    description: "Customizable React typing animation component",
    author: "Maxeth",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/react-type-animation",
    githubUrl: "https://github.com/maxeth/react-type-animation",
    category: "animation",
  },
  {
    id: 9,
    packageName: "recharts",
    version: "^3.1.2",
    description: "Composable charting library built with React and D3",
    author: "Recharts Group",
    license: "MIT",
    npmUrl: "https://www.npmjs.com/package/recharts",
    githubUrl: "https://github.com/recharts/recharts",
    category: "utility",
  },
];
