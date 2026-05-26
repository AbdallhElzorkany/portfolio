import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubRepos from "@/components/GithubRepos";
import Contact from "@/components/Contact";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

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
      <footer className="py-8 bg-secondary/25 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Abdallah Elzorkany. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AbdallhElzorkany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/abdallhelzorkany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:abdallah.elzorkany.dev@gmail.com"
              className="text-muted hover:text-foreground transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
