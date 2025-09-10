export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Terry AI', href: '/dashboard/chat' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
