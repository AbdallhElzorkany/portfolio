import { Code2, Layers3, Sparkles, CheckCircle2, Zap } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Next.js", color: "text-foreground bg-secondary/70 border-border/60" },
    { name: "React.js", color: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-sky-200/60 dark:border-sky-800/40" },
    { name: "TypeScript", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200/60 dark:border-blue-800/40" },
    { name: "JavaScript", color: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200/60 dark:border-yellow-800/40" },
    { name: "React Query", color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border-rose-200/60 dark:border-rose-800/40" },
    { name: "Redux", color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-200/60 dark:border-purple-800/40" },
    { name: "Context API", color: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-sky-200/60 dark:border-sky-800/40" },
    { name: "Tailwind CSS", color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border-teal-200/60 dark:border-teal-800/40" },
    { name: "Shadcn/ui", color: "text-foreground bg-secondary/70 border-border/60" },
    { name: "Zod", color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200/60 dark:border-indigo-800/40" },
    { name: "React Hook Form", color: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 border-pink-200/60 dark:border-pink-800/40" },
    { name: "Axios", color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border-violet-200/60 dark:border-violet-800/40" },
    { name: "SignalR", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200/60 dark:border-emerald-800/40" },
    { name: "CSS", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200/60 dark:border-blue-800/40" },
    { name: "HTML", color: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-200/60 dark:border-orange-800/40" },
    { name: "Bootstrap", color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-200/60 dark:border-purple-800/40" },
    { name: "Formik", color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border-rose-200/60 dark:border-rose-800/40" },
    { name: "Yup", color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200/60 dark:border-indigo-800/40" },
  ];

  const domainSkills = [
    "Frontend Architecture",
    "Git & GitHub Version Control",
    "Responsive Web Design",
    "Cross-Browser Compatibility",
    "Backend Basics & REST APIs",
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
    <section id="skills" className="py-28 bg-secondary/10 border-t border-border/40 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-primary/5 blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="section-label">
            <Zap className="w-3 h-3" />
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Technologies and methodologies I use daily to build modern, scalable web applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Card 1: Technical Stack */}
          <div className="glass-panel border border-glass-border p-7 rounded-3xl shadow-xs flex flex-col h-full card-hover-glow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Technical Stack</h3>
                <p className="text-xs text-muted mt-0.5">{technicalSkills.length} technologies</p>
              </div>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Languages, libraries, and frameworks I use to build scalable applications.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {technicalSkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-default ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Domain Skills */}
          <div className="glass-panel border border-glass-border p-7 rounded-3xl shadow-xs flex flex-col h-full card-hover-glow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <Layers3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Domain Expertise</h3>
                <p className="text-xs text-muted mt-0.5">{domainSkills.length} areas</p>
              </div>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Engineering methodologies, architecture preferences, and workflow standards.
            </p>
            <ul className="space-y-3 mt-auto">
              {domainSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-sm text-muted group">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="group-hover:text-foreground transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Soft Skills */}
          <div className="glass-panel border border-glass-border p-7 rounded-3xl shadow-xs flex flex-col h-full card-hover-glow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Core Competencies</h3>
                <p className="text-xs text-muted mt-0.5">{softSkills.length} traits</p>
              </div>
            </div>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Interpersonal and operational traits that help me thrive in collaborative teams.
            </p>
            <ul className="space-y-3 mt-auto">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-sm text-muted group">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <span className="group-hover:text-foreground transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
