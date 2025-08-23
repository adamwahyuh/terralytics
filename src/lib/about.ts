const year = new Date().getFullYear();

export type SocialMediaName = 'Facebook' | 'Twitter' | 'Instagram' | 'Youtube' | 'X';

export const aboutCompany = [
  {   
    name: 'TerrAlytics', 
    subtitle : 'Transforming Agriculture with Artificial Intelligence & Big Data Analytics',
    email : 'hello@terralytics.test',
    socialLinks: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Youtube', href: '#' },
    ] as { name: SocialMediaName; href: string }[],
    year,
    logo:"/img/logo.png",
  }
];

    

// Cara make: import { aboutCompany } from '@/lib/about' di modul 
// ambil objek pertama dari array ex : company = aboutCompany[0]
// kemudian akses properti seperti company.name, company.subtitle, dll.)