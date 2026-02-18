"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work-history", label: "History" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      const scrolledPastHeader = current > 80;
      if (delta > 6 && scrolledPastHeader) {
        setShowBottomNav(false);
      } else if (delta < -6) {
        setShowBottomNav(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-cabinet/80 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 border-b-2 border-screen">
            <Link
              href="/"
              className="font-arcade text-lg text-cyan hover:text-magenta transition-colors"
            >
              Simonlinn.dev
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "font-arcade text-xs uppercase tracking-widest transition-colors hover:text-cyan focus-ring",
                    pathname === href ? "text-cyan" : "text-pixel"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile bottom nav */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cabinet border-t-2 border-screen shadow-[0_-4px_0_theme(colors.screen)] transition-transform duration-200",
          showBottomNav ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="grid grid-cols-3 text-center">
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "py-3 font-arcade text-[11px] uppercase tracking-widest block transition-colors hover:text-cyan",
                pathname === href ? "text-cyan" : "text-pixel"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 text-center border-t-2 border-screen">
          {navLinks.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "py-3 font-arcade text-[11px] uppercase tracking-widest block transition-colors hover:text-cyan",
                pathname === href ? "text-cyan" : "text-pixel"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
