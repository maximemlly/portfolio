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
    <nav className="sticky top-0 z-50 border-b border-white/5 px-6 py-4 backdrop-blur-md bg-background/80">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-text-primary font-bold text-base tracking-tight"
        >
          maxime<span className="text-accent">.</span>dev
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-accent-soft text-sm font-medium"
                    : "text-text-muted text-sm hover:text-text-secondary transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
