import { GraduationCap, Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            About Me & Journey
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Bio */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold mb-6 text-foreground/90">
              Who is Abdallah?
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              I am a dedicated Software Engineer holding a Bachelor of Science in Computer Science from Tanta University. I specialize in modern front-end engineering, with an emphasis on building robust, performant web applications using <strong>React.js</strong> and <strong>Next.js</strong>.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              My approach focuses on pixel-perfect details, clean components, type safety with <strong>TypeScript</strong>, and smooth user interactions. I love learning new technologies, optimizing frontend performance, and collaborating in agile teams to solve complex problems.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/50 flex flex-col gap-1 shadow-2xs">
                <span className="text-2xl font-bold text-primary">3.66</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">B.Sc. GPA</span>
              </div>
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/50 flex flex-col gap-1 shadow-2xs">
                <span className="text-2xl font-bold text-accent">ITI</span>
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">Internship Alum</span>
              </div>
            </div>
          </div>

          {/* Column 2: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8 text-foreground/90 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Education & Experience
            </h3>

            <div className="relative pl-6 border-l-2 border-border/70 space-y-12">
              {/* Timeline Item 1: Internship */}
              <div className="relative">
                {/* Bullet node */}
                <div className="absolute left-[-33px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-xs" />

                <div className="glass-panel border border-glass-border p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      <Briefcase className="w-3 h-3" />
                      Work Experience
                    </span>
                    <span className="text-sm font-medium text-muted flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      July 2025 - August 2025
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground">
                    Front-End (Angular) Internship
                  </h4>
                  <p className="text-sm font-semibold text-primary mb-4 flex items-center gap-1">
                    ITI, Tanta University
                  </p>

                  <ul className="list-disc pl-5 text-sm text-muted space-y-2 leading-relaxed">
                    <li>Contributed to the development of an Angular-based web application, actively participating in team sprints, daily standups, and code reviews.</li>
                    <li>Implemented highly responsive user interfaces, ensuring cross-browser compatibility and an optimal user experience across multiple screen dimensions.</li>
                    <li>Utilized Angular, TypeScript, and RxJS to build modular features, improving overall application performance and user engagement.</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 2: Education */}
              <div className="relative">
                {/* Bullet node */}
                <div className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-4 border-accent flex items-center justify-center shadow-xs" />

                <div className="glass-panel border border-glass-border p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-accent/20">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                      <GraduationCap className="w-3 h-3" />
                      Education
                    </span>
                    <span className="text-sm font-medium text-muted flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Sept 2022 - June 2026
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground">
                    Faculty of Computer and Information
                  </h4>
                  <p className="text-sm font-semibold text-accent mb-2">
                    Tanta University
                  </p>
                  <p className="text-sm text-muted font-medium mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-muted/80" />
                    Tanta, Gharbia, Egypt
                  </p>

                  <div className="text-sm text-muted leading-relaxed space-y-3">
                    <p>
                      <strong>Degree:</strong> Computer Science Bachelor&apos;s Degree (B.Sc.)
                    </p>
                    <p>
                      <strong>GPA:</strong> 3.66 / 4.0
                    </p>
                    <p className="p-3 bg-secondary/50 rounded-xl border border-border/40 text-xs">
                      <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Systems, Computer Networks, Operating Systems, Software Engineering.
                    </p>
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
