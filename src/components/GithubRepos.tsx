"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, BookOpen } from "lucide-react";
import { Github } from "@/components/icons";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/AbdallhElzorkany/repos?sort=updated&per_page=6");
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
    <section className="py-24 bg-secondary/15 border-t border-border/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-2.5">
            <Github className="w-8 h-8 text-foreground" />
            Live GitHub Activity
          </h2>
          <p className="text-muted text-sm max-w-md">
            My recently updated repositories pulled dynamically via GitHub API.
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass-panel border border-glass-border p-6 rounded-2xl h-44 animate-pulse flex flex-col justify-between"
              >
                <div>
                  <div className="h-5 bg-border rounded-md w-3/4 mb-4" />
                  <div className="h-4 bg-border rounded-md w-full mb-2" />
                  <div className="h-4 bg-border rounded-md w-5/6" />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-4 bg-border rounded-md w-12" />
                  <div className="h-4 bg-border rounded-md w-14" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error boundary */}
        {!loading && error && (
          <div className="glass-panel border border-glass-border p-8 rounded-3xl text-center max-w-xl mx-auto shadow-xs">
            <BookOpen className="w-12 h-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Could not load live repositories</h3>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              GitHub API is currently rate-limited or unavailable. You can browse all my open-source work directly on my GitHub profile.
            </p>
            <a
              href="https://github.com/AbdallhElzorkany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-primary hover:bg-primary/95 text-white text-sm font-medium transition-all cursor-pointer shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              <Github className="w-4 h-4" />
              Visit my GitHub
            </a>
          </div>
        )}

        {/* Repositories cards list */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel border border-glass-border p-6 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors truncate text-sm">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted line-clamp-3 leading-relaxed mb-4">
                    {repo.description || "No description provided."}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted mt-auto pt-2.5 border-t border-border/10">
                  <div className="flex items-center gap-2.5">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3.5 h-3.5 text-muted/80" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                  {repo.language && (
                    <span className="px-2 py-0.5 rounded-full bg-secondary/80 border border-border/40 text-[9px] font-bold">
                      {repo.language}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
