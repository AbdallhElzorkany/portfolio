import { ArrowRight, Mail, FileText, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden dot-grid">
      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-primary/15 dark:bg-primary/12 blur-[100px] sm:blur-[130px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-accent/15 dark:bg-accent/10 blur-[100px] sm:blur-[120px] animate-pulse-slow -z-10" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[60px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-glass-border text-xs font-semibold text-primary mb-8 shadow-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Front-End &amp; Full-Stack roles</span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 animate-fade-in-up animate-delay-100"
          style={{ opacity: 0 }}
        >
          Building Digital Solutions with{" "}
          <span className="gradient-text">
            Precision &amp; Style
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed font-normal animate-fade-in-up animate-delay-200"
          style={{ opacity: 0 }}
        >
          Hi, I&apos;m{" "}
          <span className="font-semibold text-foreground">Abdallah Elzorkany</span>
          , a Software Engineer specializing in modern frontend systems using React, Next.js, and TypeScript. I craft high-performance, responsive web platforms with clean architecture.
        </p>

        {/* Call to Actions */}
        <div
          className="flex flex-col sm:flex-row gap-3 mb-12 w-full justify-center sm:w-auto animate-fade-in-up animate-delay-300"
          style={{ opacity: 0 }}
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-pointer group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-secondary/80 hover:bg-secondary border border-border hover:border-primary/30 text-foreground font-medium transition-all duration-300 cursor-pointer"
          >
            Get in touch
            <Mail className="w-4 h-4 text-muted" />
          </a>
          <a
            href="/Abdallah_Elzorkany_Resume_classic (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-secondary/80 hover:bg-secondary border border-border hover:border-primary/30 text-foreground font-medium transition-all duration-300 cursor-pointer"
          >
            Resume
            <FileText className="w-4 h-4 text-muted" />
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center gap-2 mb-16 animate-fade-in-up animate-delay-400"
          style={{ opacity: 0 }}
        >
          <a
            href="https://github.com/AbdallhElzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="GitHub Profile"
          >
            <Github className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <div className="w-px h-4 bg-border/60" />
          <a
            href="https://linkedin.com/in/abdallhelzorkany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <div className="w-px h-4 bg-border/60" />
          <a
            href="mailto:abdallah.elzorkany.dev@gmail.com"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border/50"
            aria-label="Send Email"
          >
            <Mail className="w-4.5 h-4.5" />
            <span className="hidden sm:inline font-medium">Email</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-300 animate-fade-in-up animate-delay-500 group"
          style={{ opacity: 0 }}
          aria-label="Scroll down"
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-6 h-9 rounded-full border-2 border-muted/40 group-hover:border-primary/60 transition-colors flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors animate-scroll-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
