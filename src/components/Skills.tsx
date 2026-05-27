"use client";

import { Code2, Layers3, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { motion } from "motion/react";

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

const tagVariants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export default function Skills() {
  const technicalSkills = [
    { name: "Next.js", color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200/60 dark:border-indigo-800/40" },
    { name: "React.js", color: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-sky-200/60 dark:border-sky-800/40" },
    { name: "TypeScript", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200/60 dark:border-blue-800/40" },
    { name: "JavaScript", color: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200/60 dark:border-yellow-800/40" },
    { name: "React Query", color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border-rose-200/60 dark:border-rose-800/40" },
    { name: "Redux", color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-200/60 dark:border-purple-800/40" },
    { name: "Tailwind CSS", color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border-teal-200/60 dark:border-teal-800/40" },
    { name: "Shadcn/ui", color: "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-slate-200/60 dark:border-slate-800/40" },
    { name: "Zod", color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200/60 dark:border-indigo-800/40" },
    { name: "React Hook Form", color: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 border-pink-200/60 dark:border-pink-800/40" },
    { name: "Axios", color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border-violet-200/60 dark:border-violet-800/40" },
    { name: "SignalR", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200/60 dark:border-emerald-800/40" },
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-20"
        >
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
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Technical Stack (Wider) */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-8 glass-panel border border-glass-border p-8 sm:p-10 rounded-[2.5rem] shadow-xl card-hover-glow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shadow-inner">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Technical Stack</h3>
                  <p className="text-sm text-muted">Core technologies I excel in</p>
                </div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-[10px] font-bold uppercase tracking-widest text-muted">
                {technicalSkills.length} Technologies
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill) => (
                <motion.div
                  variants={tagVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill.name}
                  className={`group relative p-4 rounded-2xl border transition-all duration-300 cursor-default flex flex-col items-center justify-center text-center gap-2 ${skill.color}`}
                >
                  <span className="text-xs font-bold">{skill.name}</span>
                  <div className="w-full h-1 bg-current/10 rounded-full overflow-hidden mt-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-current opacity-60" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Other Skills (Stacked) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Domain Expertise */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="glass-panel border border-glass-border p-8 rounded-[2rem] shadow-lg card-hover-glow flex-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Layers3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Expertise</h3>
              </div>
              <div className="space-y-4">
                {domainSkills.map((skill) => (
                  <motion.div 
                    variants={tagVariants}
                    key={skill} 
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Qualities */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="glass-panel border border-glass-border p-8 rounded-[2rem] shadow-lg card-hover-glow flex-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Professional</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <motion.div 
                    variants={tagVariants}
                    key={skill} 
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
