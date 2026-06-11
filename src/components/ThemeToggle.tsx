"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      const isDark = document.documentElement.classList.contains("dark");
      requestAnimationFrame(() => {
        setTheme(isDark ? "dark" : "light");
      });
    }
  }, [mounted]);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-secondary/50 border border-border animate-pulse" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg  text-foreground transition-all duration-300 flex items-center justify-center cursor-pointer relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="relative w-5 h-5 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
