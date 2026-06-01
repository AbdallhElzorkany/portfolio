"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abdallah.elzorkany.dev@gmail.com",
    href: "mailto:abdallah.elzorkany.dev@gmail.com",
    description: "Send a message directly to my inbox.",
    color: "primary",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
    hoverColor: "group-hover:bg-primary",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdallhelzorkany",
    href: "https://linkedin.com/in/abdallhelzorkany",
    description: "Connect with me professionally on LinkedIn.",
    color: "[#0A66C2]",
    bgColor: "bg-[#0A66C2]/10",
    iconColor: "text-[#0A66C2]",
    hoverColor: "group-hover:bg-[#0A66C2]",
    copyable: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 150 543 0940",
    href: "tel:+201505430940",
    description: "Available for calls or WhatsApp messages.",
    color: "emerald-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    hoverColor: "group-hover:bg-emerald-500",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanta, Gharbia, Egypt",
    href: null,
    description: "Open to remote work and relocation.",
    color: "amber-500",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
    hoverColor: "group-hover:bg-amber-500",
    copyable: false,
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
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-border/40 relative dot-grid overflow-hidden">
      {/* Dynamic Background Glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px] -z-10" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] -z-10" 
      />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm -z-10 hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[10%] w-16 h-16 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-sm -z-10 hidden lg:block"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.div>

          <div className="section-label">
            <MessageSquare className="w-3 h-3" />
            Contact
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Let&apos;s Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed text-balance">
            I&apos;m currently looking for new challenges and collaborations. Whether you have a specific project in mind or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const isCopied = copiedText === item.value;
            
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 rounded-[2.5rem] ${item.bgColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                
                <div className="h-full glass-panel border border-glass-border p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 card-hover-glow shadow-xl group-hover:shadow-primary/5 overflow-hidden">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-3xl ${item.bgColor} border border-white/10 flex items-center justify-center mb-8 transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:rotate-6 ${item.hoverColor} group-hover:text-white`}>
                    <Icon className={`w-9 h-9 ${item.iconColor} transition-colors duration-500 group-hover:text-white`} />
                  </div>
                  
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-muted mb-4 block group-hover:text-primary transition-colors">{item.label}</span>
                  
                  <div className="flex flex-col items-center gap-2 mb-6 w-full">
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.label === "LinkedIn" ? "_blank" : undefined} 
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="text-lg font-bold text-foreground group-hover:text-primary transition-colors hover:underline underline-offset-8 decoration-2 decoration-primary/20 truncate max-w-full"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-foreground truncate max-w-full">{item.value}</p>
                    )}
                    
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value)}
                        className="flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-all py-2 px-4 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20 mt-2"
                        aria-label={`Copy ${item.label}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy to Clipboard</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-sm text-muted/80 leading-relaxed mt-auto font-medium">{item.description}</p>
                  
                  {item.href && (
                    <div className="mt-8 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                      Connect Now <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-panel border border-glass-border p-3 rounded-[3rem] overflow-hidden shadow-2xl relative group">
            {/* Animated Background Accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 -z-10 animate-pulse" />
            
            <div className="bg-secondary/40 dark:bg-secondary/20 px-12 py-16 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="text-center lg:text-left max-w-lg">
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Stay Connected</h3>
                <p className="text-muted text-lg font-medium leading-relaxed">
                  I regularly share my thoughts on web development and my latest projects on social platforms. Let&apos;s keep the conversation going!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 w-full lg:w-auto">
                <motion.a
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AbdallhElzorkany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 h-16 px-10 rounded-2xl bg-foreground text-background font-black text-base shadow-2xl hover:shadow-foreground/30 transition-all w-full sm:w-auto"
                >
                  <Github className="w-6 h-6" />
                  GitHub
                  <ExternalLink className="w-4 h-4 opacity-40" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/abdallhelzorkany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 h-16 px-10 rounded-2xl bg-[#0A66C2] text-white font-black text-base shadow-2xl hover:shadow-[#0A66C2]/30 transition-all w-full sm:w-auto"
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                  <ExternalLink className="w-4 h-4 opacity-40" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
