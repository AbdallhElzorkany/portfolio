import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubRepos from "@/components/GithubRepos";
import Contact from "@/components/Contact";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubRepos />
        <Contact />
      </main>

      <footer className="border-t border-border/40 bg-secondary/10 relative overflow-hidden">
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#" className="text-lg font-extrabold tracking-tight gradient-text">
                Abdallah.dev
              </a>
              <p className="text-xs text-muted max-w-xs text-center md:text-left leading-relaxed">
                Front-End &amp; Full-Stack Engineer specializing in React, Next.js &amp; TypeScript.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex items-center gap-1 flex-wrap justify-center">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-muted hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary/80"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social icons + Back to top */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AbdallhElzorkany"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/abdallhelzorkany"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:abdallah.elzorkany.dev@gmail.com"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="w-px h-5 bg-border/60 mx-1" />
              <a
                href="#"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary/80 border border-border/50 hover:border-primary/30 transition-all"
                aria-label="Back to top"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-muted/70">
              &copy; {new Date().getFullYear()} Abdallah Elzorkany. All rights reserved.
            </p>
            <p className="text-[11px] text-muted/50">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
