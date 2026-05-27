"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel shadow-sm border-b border-glass-border"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:opacity-90 flex items-center gap-1"
        >
          <span className="gradient-text font-extrabold">Abdallah</span>
          <span className="font-semibold text-foreground/80">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === link.id
                  ? "text-primary bg-primary/8"
                  : "text-muted hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </a>
          ))}
          <div className="w-px h-5 bg-border/60 mx-2" />
          <ThemeToggle />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-secondary/80 text-foreground hover:bg-secondary border border-border flex items-center justify-center cursor-pointer transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-panel border-b border-glass-border overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-72 opacity-100 py-4 shadow-lg" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-3 px-3 rounded-xl border transition-colors ${
                activeSection === link.id
                  ? "text-primary bg-primary/8 border-primary/20"
                  : "text-muted hover:text-foreground border-transparent hover:bg-secondary/60"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
