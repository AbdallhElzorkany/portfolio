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
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we are at the very top of the page, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // If we're within 50px of the bottom, set active to contact
      if (scrollPosition >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // Standard intersection logic for other sections
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the top of the section is in the top half of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className={`transition-all duration-500 flex items-center justify-between pointer-events-auto ${
        scrolled
          ? "w-[calc(100%-2rem)] max-w-6xl mt-4 py-3 px-6 glass-panel shadow-2xl shadow-primary/10 border border-glass-border rounded-3xl backdrop-blur-xl"
          : "w-full max-w-7xl py-6 px-6 bg-transparent border-b border-transparent"
      }`}>
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
        className={`md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 glass-panel border border-glass-border rounded-3xl overflow-hidden transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${
          mobileMenuOpen ? "max-h-[30rem] opacity-100 py-6 shadow-2xl" : "max-h-0 opacity-0 py-0 border-none"
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
