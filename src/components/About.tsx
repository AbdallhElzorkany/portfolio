"use client";

import { GraduationCap, Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";

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
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border/40 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-accent/5 blur-[120px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="section-label">
            <Award className="w-3 h-3" />
            Background
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            The Journey So Far
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed text-balance">
            A software engineer dedicated to crafting seamless digital experiences with a strong foundation in computer science and modern web technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Column 1: Bio */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center h-full"
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-foreground tracking-tight">
              Driven by <span className="text-primary">Innovation</span> & Design
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-muted leading-relaxed mb-6 text-base font-medium">
              I am a dedicated Software Engineer holding a Bachelor of Science in Computer Science from Tanta University. I specialize in modern front-end engineering, with an emphasis on building robust, performant web applications using{" "}
              <strong className="text-foreground font-bold">React.js</strong> and{" "}
              <strong className="text-foreground font-bold">Next.js</strong>.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted leading-relaxed mb-10 text-base font-medium">
              My approach focuses on pixel-perfect details, clean components, type safety with{" "}
              <strong className="text-foreground font-bold">TypeScript</strong>, and smooth user interactions. I love learning new technologies, optimizing frontend performance, and collaborating in agile teams.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-primary/8 to-primary/4 border border-primary/15 flex flex-col gap-1.5 group hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl font-extrabold gradient-text">3.66</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">B.Sc. GPA / 4.0</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-accent/8 to-accent/4 border border-accent/15 flex flex-col gap-1.5 group hover:border-accent/30 transition-colors"
              >
                <span className="text-3xl font-extrabold text-accent">ITI</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">Internship Alum</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Column 2: Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold mb-10 text-foreground tracking-tight flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shadow-inner">
                <BookOpen className="w-5 h-5" />
              </div>
              Education & Experience
            </h3>

            <div className="relative pl-8 space-y-12">
              {/* Timeline Vertical Line */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent rounded-full opacity-30" />
              {/* Timeline Item 1: Internship */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[38px] top-2 w-5 h-5 rounded-full bg-background border-[3px] border-primary shadow-sm shadow-primary/30 flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-lg card-hover-glow transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      <Briefcase className="w-3.5 h-3.5" />
                      Work Experience
                    </span>
                    <span className="text-xs font-bold text-muted flex items-center gap-2 bg-secondary/80 px-3 py-1.5 rounded-xl border border-border/50">
                      <Calendar className="w-4 h-4" />
                      July 2025 – Aug 2025
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-1 tracking-tight">
                    Front-End (Angular) Internship
                  </h4>
                  <p className="text-sm font-bold text-primary mb-6">
                    ITI, Tanta University
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Contributed to an Angular-based web app, participating in team sprints, standups, and code reviews.",
                      "Implemented highly responsive UIs ensuring cross-browser compatibility across screen sizes.",
                      "Used Angular, TypeScript, and RxJS to build modular features, improving performance and engagement.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-muted font-medium">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Timeline Item 2: Education */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[38px] top-2 w-5 h-5 rounded-full bg-background border-[3px] border-accent shadow-sm shadow-accent/30 flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-lg card-hover-glow transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Education
                    </span>
                    <span className="text-xs font-bold text-muted flex items-center gap-2 bg-secondary/80 px-3 py-1.5 rounded-xl border border-border/50">
                      <Calendar className="w-4 h-4" />
                      Sept 2022 – June 2026
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-1 tracking-tight">
                    Faculty of Computer and Information
                  </h4>
                  <p className="text-sm font-bold text-accent mb-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Tanta University, Egypt
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted mb-6">
                    <div className="p-4 bg-secondary/50 rounded-2xl border border-border/50 group/item hover:border-accent/30 transition-colors">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1.5">Degree</span>
                      <span className="font-bold text-foreground">B.Sc. Computer Science</span>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-2xl border border-border/50 group/item hover:border-accent/30 transition-colors">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1.5">Current GPA</span>
                      <span className="font-bold text-foreground">3.66 / 4.0</span>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-sm leading-relaxed">
                    <strong className="text-foreground font-bold block mb-1">Focus Areas:</strong>
                    <p className="text-muted font-medium">
                      Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Operating Systems.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
