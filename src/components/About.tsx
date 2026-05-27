import { GraduationCap, Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border/40 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-accent/5 blur-[120px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="section-label">
            <Award className="w-3 h-3" />
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            About Me &amp; My Journey
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            A computer science graduate passionate about building exceptional digital experiences.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Column 1: Bio */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold mb-5 text-foreground/90">
              Who is Abdallah?
            </h3>
            <p className="text-muted leading-relaxed mb-5 text-[15px]">
              I am a dedicated Software Engineer holding a Bachelor of Science in Computer Science from Tanta University. I specialize in modern front-end engineering, with an emphasis on building robust, performant web applications using{" "}
              <strong className="text-foreground">React.js</strong> and{" "}
              <strong className="text-foreground">Next.js</strong>.
            </p>
            <p className="text-muted leading-relaxed mb-8 text-[15px]">
              My approach focuses on pixel-perfect details, clean components, type safety with{" "}
              <strong className="text-foreground">TypeScript</strong>, and smooth user interactions. I love learning new technologies, optimizing frontend performance, and collaborating in agile teams.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/8 to-primary/4 border border-primary/15 flex flex-col gap-1.5 group hover:border-primary/30 transition-colors">
                <span className="text-3xl font-extrabold gradient-text">3.66</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">B.Sc. GPA / 4.0</span>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/8 to-accent/4 border border-accent/15 flex flex-col gap-1.5 group hover:border-accent/30 transition-colors">
                <span className="text-3xl font-extrabold text-accent">ITI</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">Internship Alum</span>
              </div>
            </div>
          </div>

          {/* Column 2: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold mb-8 text-foreground/90 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              Education &amp; Experience
            </h3>

            <div className="relative pl-7 border-l-2 border-gradient space-y-10" style={{ borderImage: "linear-gradient(to bottom, var(--primary), var(--accent)) 1" }}>
              {/* Timeline Item 1: Internship */}
              <div className="relative">
                <div className="absolute -left-[38px] top-2 w-5 h-5 rounded-full bg-background border-[3px] border-primary shadow-sm shadow-primary/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="glass-panel border border-glass-border p-6 rounded-2xl card-hover-glow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      <Briefcase className="w-3 h-3" />
                      Work Experience
                    </span>
                    <span className="text-xs font-medium text-muted flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      July 2025 – Aug 2025
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Front-End (Angular) Internship
                  </h4>
                  <p className="text-sm font-semibold text-primary mb-4">
                    ITI, Tanta University
                  </p>

                  <ul className="space-y-2">
                    {[
                      "Contributed to an Angular-based web app, participating in team sprints, standups, and code reviews.",
                      "Implemented highly responsive UIs ensuring cross-browser compatibility across screen sizes.",
                      "Used Angular, TypeScript, and RxJS to build modular features, improving performance and engagement.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Item 2: Education */}
              <div className="relative">
                <div className="absolute -left-[38px] top-2 w-5 h-5 rounded-full bg-background border-[3px] border-accent shadow-sm shadow-accent/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="glass-panel border border-glass-border p-6 rounded-2xl card-hover-glow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                      <GraduationCap className="w-3 h-3" />
                      Education
                    </span>
                    <span className="text-xs font-medium text-muted flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      Sept 2022 – June 2026
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Faculty of Computer and Information
                  </h4>
                  <p className="text-sm font-semibold text-accent mb-1">
                    Tanta University
                  </p>
                  <p className="text-sm text-muted font-medium mb-5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-muted/70 shrink-0" />
                    Tanta, Gharbia, Egypt
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-muted">
                    <div className="p-3 bg-secondary/40 rounded-xl border border-border/40">
                      <span className="text-xs font-bold text-muted/70 uppercase tracking-wider block mb-1">Degree</span>
                      <span className="font-semibold text-foreground">B.Sc. Computer Science</span>
                    </div>
                    <div className="p-3 bg-secondary/40 rounded-xl border border-border/40">
                      <span className="text-xs font-bold text-muted/70 uppercase tracking-wider block mb-1">GPA</span>
                      <span className="font-semibold text-foreground">3.66 / 4.0</span>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-secondary/30 rounded-xl border border-border/30 text-xs text-muted leading-relaxed">
                    <strong className="text-foreground">Relevant Coursework:</strong> Data Structures, Algorithms, OOP, Database Systems, Computer Networks, Operating Systems, Software Engineering.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
