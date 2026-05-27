"use client";

import { useEffect, useState } from "react";
import { ExternalLink, FolderGit2, Rocket } from "lucide-react";
import { Github } from "@/components/icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

// Fallback data from the resume
const staticProjects: Project[] = [
  {
    title: "Rafiq — Down Syndrome Family Support",
    description:
      "A comprehensive digital healthcare platform connecting families of children with Down Syndrome to therapy specialists. Features session scheduling, activity tracking, progress reports, real-time messaging, and an AI-driven support assistant.",
    tech: ["React.js", "React Query", "SignalR", "Context API", "Formik", "Yup", "Axios", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "Linku — Link Tree Platform",
    description:
      "A full-stack link-in-bio platform for creators and businesses to consolidate their online presence. Offers custom usernames, unlimited links, advanced analytics, custom QR code generation, and a subscription upgrade model.",
    tech: ["Next.js", "Supabase", "Stripe", "React Hook Form", "Zod", "Shadcn/ui", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "MyZoo — Veterinary Clinic Platform",
    description:
      "A veterinary management platform designed to streamline pet healthcare. Enables pet owners to discover clinic services, book and manage veterinary appointments online, and access their pets' digital medical history files.",
    tech: ["Next.js", "Next-Auth", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "TaskMaster — Team Task Manager",
    description:
      "An organizational task workflow tool. Admins can create tasks, assign roles, set due dates, and monitor team progress in real time. Employees can update task statuses and maintain their individual profiles.",
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
];

const ACCENT_GRADIENTS = [
  "from-indigo-500 to-violet-500",
  "from-violet-500 to-pink-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-500",
];

const enhanceProjectData = (
  name: string,
  description: string,
  html_url: string,
  homepage: string,
  topics: string[],
  language: string
): Project => {
  const normName = name.toLowerCase();

  if (normName.includes("rafiq")) {
    return { ...staticProjects[0], github: html_url, live: homepage || staticProjects[0].live };
  }
  if (normName.includes("linku")) {
    return { ...staticProjects[1], github: html_url, live: homepage || staticProjects[1].live };
  }
  if (normName.includes("myzoo")) {
    return { ...staticProjects[2], github: html_url, live: homepage || staticProjects[2].live };
  }
  if (normName.includes("taskmaster")) {
    return { ...staticProjects[3], github: html_url, live: homepage || staticProjects[3].live };
  }

  const techList = [...topics];
  if (language && !techList.includes(language)) {
    techList.unshift(language);
  }

  const formattedTitle = name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: formattedTitle,
    description: description || "No description provided.",
    tech: techList.length > 0 ? techList : ["Project"],
    github: html_url,
    live: homepage || "#",
  };
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarred = async () => {
      try {
        const res = await fetch("https://api.github.com/users/AbdallhElzorkany/starred");
        if (!res.ok) throw new Error("Failed to fetch starred repos");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((repo: any) =>
            enhanceProjectData(
              repo.name,
              repo.description,
              repo.html_url,
              repo.homepage,
              repo.topics || [],
              repo.language
            )
          );
          setProjects(mapped);
        } else {
          setProjects(staticProjects);
        }
      } catch (err) {
        console.error("Fetch starred projects error, using static fallback:", err);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchStarred();
  }, []);

  return (
    <section id="projects" className="py-28 border-t border-border/40 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="section-label">
            <Rocket className="w-3 h-3" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Selected work showcasing my skills in building real-world applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5" />
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="glass-panel border border-glass-border rounded-3xl overflow-hidden h-80 flex flex-col"
              >
                <div className="h-1.5 shimmer" />
                <div className="p-7 flex flex-col gap-4 flex-1 animate-pulse">
                  <div className="h-4 bg-border rounded-md w-20" />
                  <div className="h-6 bg-border rounded-md w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3.5 bg-border rounded-md w-full" />
                    <div className="h-3.5 bg-border rounded-md w-5/6" />
                    <div className="h-3.5 bg-border rounded-md w-2/3" />
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-5 bg-border rounded-md w-14" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects list */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="glass-panel border border-glass-border rounded-3xl overflow-hidden shadow-xs flex flex-col group card-hover-glow"
              >
                {/* Top accent bar */}
                <div className={`h-1 bg-gradient-to-r ${ACCENT_GRADIENTS[idx % ACCENT_GRADIENTS.length]}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Project {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-secondary/80 text-[10px] font-bold text-muted border border-border/40 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 border-t border-border/40 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                    {project.live !== "#" && project.live !== "" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
