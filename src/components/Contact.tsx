"use client";

import { Mail, Phone, MapPin, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abdallah.elzorkany.dev@gmail.com",
    href: "mailto:abdallah.elzorkany.dev@gmail.com",
    description: "Send a message directly to my inbox.",
    color: "group-hover:bg-primary group-hover:text-white group-hover:border-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdallhelzorkany",
    href: "https://linkedin.com/in/abdallhelzorkany",
    description: "Connect with me professionally on LinkedIn.",
    color: "group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 150 543 0940",
    href: "tel:+201505430940",
    description: "Available for calls or WhatsApp messages.",
    color: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanta, Gharbia, Egypt",
    href: null,
    description: "Open to remote work and relocation.",
    color: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
  },
];

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

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border/40 relative dot-grid overflow-hidden">
      {/* Dynamic Background Glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px] -z-10" 
      />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="section-label">
            <MessageSquare className="w-3 h-3" />
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Let&apos;s Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed text-balance">
            I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-8" />
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const inner = (
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full glass-panel border border-glass-border p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-300 card-hover-glow shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl bg-secondary/80 border border-border/50 flex items-center justify-center mb-8 transition-all duration-300 shadow-sm ${item.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">{item.label}</h3>
                <p className="text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.value}</p>
                <p className="text-sm text-muted leading-relaxed mt-auto font-medium">{item.description}</p>
                
                {item.href && (
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Connect Now <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );

            return item.href ? (
              <a key={idx} href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}>
                {inner}
              </a>
            ) : (
              <div key={idx}>{inner}</div>
            );
          })}
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel border border-glass-border p-2 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-secondary/30 dark:bg-secondary/10 px-10 py-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3 tracking-tight">Prefer Social Media?</h3>
                <p className="text-muted text-base font-medium">Follow my latest work or reach out on GitHub and LinkedIn.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AbdallhElzorkany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-foreground text-background font-bold text-sm shadow-xl hover:shadow-foreground/20 transition-all w-full sm:w-auto"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/abdallhelzorkany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-[#0A66C2] text-white font-bold text-sm shadow-xl hover:shadow-[#0A66C2]/20 transition-all w-full sm:w-auto"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Network
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
