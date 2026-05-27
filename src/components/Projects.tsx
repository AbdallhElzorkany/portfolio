"use client";

import { useEffect, useState } from "react";
import { ExternalLink, FolderGit2, Rocket } from "lucide-react";
import { Github } from "@/components/icons";
import { motion } from "motion/react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

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

interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

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
          const mapped = data.map((repo: GithubRepo) =>
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-20"
        >
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
        </motion.div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="glass-panel border border-glass-border rounded-[2rem] overflow-hidden h-[32rem] flex flex-col"
              >
                <div className="h-64 w-full bg-secondary/40 animate-pulse" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="h-8 bg-secondary/60 rounded-xl w-3/4 animate-pulse" />
                  <div className="space-y-3 mt-2">
                    <div className="h-4 bg-secondary/40 rounded-lg w-full animate-pulse" />
                    <div className="h-4 bg-secondary/40 rounded-lg w-5/6 animate-pulse" />
                    <div className="h-4 bg-secondary/40 rounded-lg w-2/3 animate-pulse" />
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 bg-secondary/40 rounded-lg w-16 animate-pulse" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects list */}
        {!loading && (
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                key={idx}
                className="glass-panel border border-glass-border rounded-[2rem] overflow-hidden shadow-xl flex flex-col group card-hover-glow h-full"
              >
                {/* Project Preview Area (Thumbnail) */}
                <div className="relative h-64 w-full overflow-hidden bg-secondary/50">
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${ACCENT_GRADIENTS[idx % ACCENT_GRADIENTS.length]} transition-transform duration-500 group-hover:scale-110`} />
                  
                  {/* Decorative Project Icon/Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 group-hover:bg-white/20`}
                    >
                      <FolderGit2 className="w-16 h-16 text-foreground/80 group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-1.5 rounded-full glass-panel border border-white/20 text-[10px] font-bold uppercase tracking-widest text-foreground/80 shadow-sm">
                      Project {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Hover Overlay with Link */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-white text-primary shadow-xl hover:scale-110 transition-transform"
                        title="View Source Code"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      {project.live !== "#" && project.live !== "" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-4 rounded-2xl bg-primary text-white shadow-xl hover:scale-110 transition-transform"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag) => (
                      <motion.span
                        whileHover={{ y: -1, scale: 1.05 }}
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-secondary/80 text-[10px] font-bold text-muted border border-border/40 uppercase tracking-wide transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/40">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github className="w-4.5 h-4.5" />
                      Source Code
                    </a>
                    {project.live !== "#" && project.live !== "" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        Live Demo
                        <ExternalLink className="w-4.5 h-4.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-bold text-muted/50 uppercase tracking-widest">
                        Internal Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
