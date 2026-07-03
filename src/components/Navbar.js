"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Showcase" },
  { href: "/guide", label: "Guide" },
  { href: "/about", label: "About" },
  { href: "/map", label: "Map" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold">
          {"<MakingComponents />"}
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
