"use client";

import Link from "next/link";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about",        href: "#about" },
  { label: "skills",       href: "#skills" },
  { label: "projects",     href: "#projects" },
  { label: "experience",   href: "#experience" },
  { label: "contact",      href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / monospace path */}
        <Link
          href="#"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ~/portfolio
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground overflow-hidden block"
              >
                <TextRoll className="text-xs uppercase tracking-widest leading-none">
                  {link.label}
                </TextRoll>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <ThemeToggleButton variant="circle" start="center" />
      </nav>
    </header>
  );
}
