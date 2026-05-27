"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-panel shadow-lg shadow-primary/5 border-b border-glass-border backdrop-blur-md"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter text-foreground transition-all hover:scale-105 flex items-center gap-1.5 group"
          aria-label="Back to top"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
            <span className="text-lg font-black italic">A</span>
          </div>
          <span className="hidden sm:inline-block">
            <span className="font-extrabold text-foreground">Abdallah</span>
            <span className="font-medium text-muted">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-2xl bg-secondary/50 border border-border/40 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-muted hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-white dark:bg-primary/10 shadow-sm border border-border/50 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="w-px h-6 bg-border/80 mx-2" />
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
        className={`md:hidden absolute top-full left-0 right-0 glass-panel border-b border-glass-border overflow-hidden transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${
          mobileMenuOpen ? "max-h-[30rem] opacity-100 py-6 shadow-2xl" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-bold py-4 px-5 rounded-2xl border-2 transition-all active:scale-95 ${
                activeSection === link.id
                  ? "text-primary bg-primary/5 border-primary/20 shadow-inner"
                  : "text-muted hover:text-foreground border-transparent hover:bg-secondary/80"
              }`}
            >
              <div className="flex items-center justify-between">
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </div>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
