import { ArrowRight, Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden dot-grid">
      {/* Radial glows in the background */}
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-primary/15 dark:bg-primary/10 blur-[80px] sm:blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-accent/15 dark:bg-accent/10 blur-[100px] sm:blur-[120px] animate-pulse-slow -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-glass-border text-xs font-semibold text-primary mb-8 shadow-xs relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Front-End & Full-Stack roles</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
          Building Digital Solutions with{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent">
            Precision & Style
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed font-normal">
          Hi, I&apos;m <span className="font-semibold text-foreground">Abdallah Elzorkany</span>, a Software Engineer specializing in modern frontend systems using React, Next.js, and TypeScript. I craft high-performance, responsive web platforms with clean architecture.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 text-white font-medium shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-secondary/80 hover:bg-secondary/60 border border-border text-foreground font-medium transition-all duration-300 cursor-pointer"
          >
            Get in touch
            <Mail className="w-4 h-4 text-muted" />
          </a>
          <a
            href="/Abdallah_Elzorkany_Resume_classic (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-secondary/80 hover:bg-secondary/60 border border-border text-foreground font-medium transition-all duration-300 cursor-pointer"
          >
            Resume
            <FileText className="w-4 h-4 text-muted" />
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AbdallhElzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-2 hover:bg-secondary/80 rounded-lg border border-transparent hover:border-border/40"
            aria-label="GitHub Profile"
          >
            <Github className="w-5.5 h-5.5" />
          </a>
          <a
            href="https://linkedin.com/in/abdallhelzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-2 hover:bg-secondary/80 rounded-lg border border-transparent hover:border-border/40"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5.5 h-5.5" />
          </a>
          <a
            href="mailto:abdallah.elzorkany.dev@gmail.com"
            className="text-muted hover:text-foreground transition-colors p-2 hover:bg-secondary/80 rounded-lg border border-transparent hover:border-border/40"
            aria-label="Send Email"
          >
            <Mail className="w-5.5 h-5.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
