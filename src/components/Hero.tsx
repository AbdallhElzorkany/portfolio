"use client";

import { ArrowRight, Mail, FileText, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 overflow-hidden dot-grid">
      {/* Radial glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-primary/15 dark:bg-primary/12 blur-[100px] sm:blur-[130px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-accent/15 dark:bg-accent/10 blur-[100px] sm:blur-[120px] -z-10"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[60px] -z-10" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Availability Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-glass-border text-xs font-semibold text-primary mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Front-End &amp; Full-Stack roles</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8 text-balance"
        >
          Engineering Digital <br className="hidden md:block" />
          <span className="gradient-text">Experiences with Purpose</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-muted max-w-2xl mb-12 leading-relaxed font-medium text-balance"
        >
          Hi, I&apos;m{" "}
          <span className="text-foreground font-bold">Abdallah Elzorkany</span>.
          I specialize in building high-performance, accessible, and scalable
          web applications using the modern React ecosystem.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer group"
            aria-label="View my featured projects"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 text-foreground font-bold transition-all duration-300 cursor-pointer"
            aria-label="Get in touch with me"
          >
            Let&apos;s Connect
            <Mail className="w-5 h-5 text-muted" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1VZhaJjsw2lmDJ9SBUXHKPc0pZoTVTq7m/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 text-foreground font-bold transition-all duration-300 cursor-pointer"
            aria-label="Download my resume"
          >
            Resume
            <FileText className="w-5 h-5 text-muted" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 mb-16"
        >
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/AbdallhElzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="GitHub Profile"
          >
            <Github className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </motion.a>
          <div className="w-px h-4 bg-border/60" />
          <motion.a
            whileHover={{ y: -2 }}
            href="https://linkedin.com/in/abdallhelzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </motion.a>
          <div className="w-px h-4 bg-border/60" />

          <motion.a
            whileHover={{ y: -2 }}
            href="mailto:abdallah.elzorkany.dev@gmail.com"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="Email Me"
          >
            <Mail className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">Email</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
