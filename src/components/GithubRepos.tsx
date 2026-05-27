"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, BookOpen, ExternalLink, Activity } from "lucide-react";
import { Github } from "@/components/icons";
import { motion } from "motion/react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

// Language → color mapping (GitHub colors)
const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C#": "#178600",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
};

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/AbdallhElzorkany/repos?sort=updated&per_page=6"
        );
        if (!res.ok) throw new Error("Failed to fetch repositories");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("GitHub Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-28 bg-secondary/10 border-t border-border/40 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="section-label">
            <Activity className="w-3 h-3" />
            Open Source
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Live GitHub Activity
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed text-balance">
            Real-time feed of my latest coding activity, dynamically fetched via the GitHub API.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-8" />
        </motion.div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass-panel border border-glass-border p-6 rounded-2xl h-44 flex flex-col justify-between"
              >
                <div className="space-y-3 animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-border rounded" />
                    <div className="h-4 bg-border rounded-md w-2/3" />
                  </div>
                  <div className="h-3 bg-border rounded-md w-full" />
                  <div className="h-3 bg-border rounded-md w-4/5" />
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border/30 animate-pulse">
                  <div className="h-3 bg-border rounded-md w-12" />
                  <div className="h-5 bg-border rounded-full w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="glass-panel border border-glass-border p-10 rounded-3xl text-center max-w-xl mx-auto shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-border flex items-center justify-center mx-auto mb-5">
              <BookOpen className="w-7 h-7 text-muted" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Could not load live repositories
            </h3>
            <p className="text-sm text-muted mb-7 leading-relaxed">
              GitHub API is currently rate-limited or unavailable. Browse all my open-source work directly on GitHub.
            </p>
            <a
              href="https://github.com/AbdallhElzorkany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-primary/25"
            >
              <Github className="w-4 h-4" />
              Visit my GitHub
            </a>
          </div>
        )}

        {/* Repositories grid */}
        {!loading && !error && (
          <>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {repos.map((repo) => {
                const langColor = LANG_COLORS[repo.language] ?? "#8b5cf6";
                return (
                  <motion.a
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel border border-glass-border p-7 rounded-[2rem] flex flex-col justify-between card-hover-glow group cursor-pointer shadow-lg h-full"
                    aria-label={`View repository ${repo.name} on GitHub`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-6 font-medium">
                        {repo.description || "Building something amazing for the open-source community."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border/40 text-xs font-bold text-muted">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 hover:text-amber-500 transition-colors">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                          <GitFork className="w-4 h-4" />
                          {repo.forks_count}
                        </span>
                      </div>
                      {repo.language && (
                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: langColor }}
                          />
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* View all CTA */}
            <div className="flex justify-center mt-10">
              <a
                href="https://github.com/AbdallhElzorkany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary/80 hover:bg-secondary border border-border hover:border-primary/30 text-sm font-semibold text-foreground transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View all repositories
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
