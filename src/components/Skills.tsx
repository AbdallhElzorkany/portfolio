import { Code, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    "Next.js",
    "React.js",
    "Typescript",
    "Javascript",
    "React Query",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "Shadcn/ui",
    "Zod",
    "React Hook Form",
    "Formik",
    "Yup",
    "Axios",
    "SignalR",
    "CSS",
    "HTML",
    "Bootstrap",
  ];

  const domainSkills = [
    "Frontend Architecture",
    "Git & GitHub Version Control",
    "Responsive Web Design",
    "Cross-Browser Compatibility",
    "Backend Basics & Rest APIs",
    "State Management Systems",
  ];

  const softSkills = [
    "Critical & Analytical Thinking",
    "Creative Problem-Solving",
    "Agile Collaboration & Gitflow",
    "Rapid Tech Adoption",
    "Attention to Detail & Quality",
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/15 border-t border-border/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Technical Stack */}
          <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-xs flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Technical Stack</h3>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Languages, libraries, and frameworks I use on a daily basis to build scalable applications.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-background border border-border/60 text-xs font-semibold text-foreground/80 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Domain Skills */}
          <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-xs flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Domain Expertise</h3>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              My engineering methodologies, architecture preferences, and workflow standards.
            </p>
            <ul className="space-y-3.5 mt-auto">
              {domainSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-sm text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Soft Skills */}
          <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-xs flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Core Competencies</h3>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Essential interpersonal and operational traits that help me perform effectively in teams.
            </p>
            <ul className="space-y-3.5 mt-auto">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-sm text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
