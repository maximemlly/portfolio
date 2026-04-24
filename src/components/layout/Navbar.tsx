"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-6 border-b border-gray-800">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
