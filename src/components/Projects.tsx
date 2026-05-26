"use client";

import { useEffect, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
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
    title: "Rafiq - Down Syndrome Family Support Platform",
    description: "A comprehensive digital healthcare platform connecting families of children with Down Syndrome to therapy specialists. Features session scheduling, activity tracking, progress reports, real-time messaging, and an AI-driven support assistant.",
    tech: ["React.js", "React Query", "SignalR", "Context API", "Formik", "Yup", "Axios", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "Linku - Link Tree Platform",
    description: "A full-stack link-in-bio platform for creators and businesses to consolidate their online presence. Offers custom usernames, unlimited links, advanced analytics, custom QR code generation, and a subscription upgrade model.",
    tech: ["Next.js", "Supabase", "Stripe", "React Hook Form", "Zod", "Shadcn/ui", "Typescript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "MyZoo - Veterinary Clinic Website",
    description: "A veterinary management platform designed to streamline pet healthcare. Enables pet owners to discover clinic services, book and manage veterinary appointments online, and access their pets' digital medical history files.",
    tech: ["Next.js", "Next-Auth", "Typescript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
  {
    title: "TaskMaster - Task Management Application",
    description: "An organizational task workflow tool. Admins can create tasks, assign roles, set strict due dates, and monitor team progress in real time. Employees can update task statuses and maintain their individual profiles.",
    tech: ["Next.js", "Supabase", "Typescript", "Tailwind CSS"],
    github: "https://github.com/AbdallhElzorkany",
    live: "#",
  },
];

// Helper function to map & enhance starred repositories with rich details if they match resume projects
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
    return {
      title: "Rafiq - Down Syndrome Family Support Platform",
      description: staticProjects[0].description,
      tech: staticProjects[0].tech,
      github: html_url,
      live: homepage || staticProjects[0].live,
    };
  }
  if (normName.includes("linku")) {
    return {
      title: "Linku - Link Tree Platform",
      description: staticProjects[1].description,
      tech: staticProjects[1].tech,
      github: html_url,
      live: homepage || staticProjects[1].live,
    };
  }
  if (normName.includes("myzoo")) {
    return {
      title: "MyZoo - Veterinary Clinic Website",
      description: staticProjects[2].description,
      tech: staticProjects[2].tech,
      github: html_url,
      live: homepage || staticProjects[2].live,
    };
  }
  if (normName.includes("taskmaster")) {
    return {
      title: "TaskMaster - Task Management Application",
      description: staticProjects[3].description,
      tech: staticProjects[3].tech,
      github: html_url,
      live: homepage || staticProjects[3].live,
    };
  }

  // Fallback map structure for other starred repositories
  const techList = [...topics];
  if (language && !techList.includes(language)) {
    techList.unshift(language);
  }

  // Format name nicely (e.g. my-project -> My Project)
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
    <section id="projects" className="py-24 border-t border-border/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="glass-panel border border-glass-border rounded-3xl p-8 h-80 animate-pulse flex flex-col justify-between"
              >
                <div>
                  <div className="h-4 bg-border rounded-md w-24 mb-4" />
                  <div className="h-6 bg-border rounded-md w-3/4 mb-4" />
                  <div className="h-4 bg-border rounded-md w-full mb-2" />
                  <div className="h-4 bg-border rounded-md w-5/6 mb-2" />
                  <div className="h-4 bg-border rounded-md w-2/3" />
                </div>
                <div>
                  <div className="flex gap-2 mb-6">
                    <div className="h-5 bg-border rounded-md w-12" />
                    <div className="h-5 bg-border rounded-md w-14" />
                    <div className="h-5 bg-border rounded-md w-16" />
                  </div>
                  <div className="h-4 bg-border rounded-md w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects list */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="glass-panel border border-glass-border rounded-3xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <FolderGit2 className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider">Project #{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-secondary/80 text-[10px] font-bold text-muted border border-border/30 hover:border-primary/20 transition-colors uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 border-t border-border/40 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    {project.live !== "#" && project.live !== "" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors cursor-pointer"
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
