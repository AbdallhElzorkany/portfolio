"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abdallah.elzorkany.dev@gmail.com",
    href: "mailto:abdallah.elzorkany.dev@gmail.com",
    color: "group-hover:bg-primary group-hover:text-white group-hover:border-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdallhelzorkany",
    href: "https://linkedin.com/in/abdallhelzorkany",
    color: "group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 150 543 0940",
    href: "tel:+201505430940",
    color: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanta, Gharbia, Egypt",
    href: null,
    color: "",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 border-t border-border/40 relative dot-grid overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/6 dark:bg-primary/8 blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="section-label">
            <MessageSquare className="w-3 h-3" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Have a project in mind or want to collaborate? My inbox is always open.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Intro card */}
            <div className="glass-panel border border-glass-border p-7 rounded-3xl">
              <h3 className="text-xl font-bold mb-3 text-foreground/90">
                Let&apos;s start a conversation
              </h3>
              <p className="text-muted leading-relaxed text-sm mb-5">
                Whether you have a job opportunity, a project proposal, or just want to chat about front-end technologies — I&apos;d love to hear from you.
              </p>
              <a
                href="mailto:abdallah.elzorkany.dev@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
              >
                Send me a message
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className={`flex items-center gap-4 ${item.href ? "group cursor-pointer" : ""}`}>
                    <div className={`p-3 rounded-xl bg-secondary/80 text-primary border border-border/60 transition-all duration-300 shrink-0 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-muted tracking-widest uppercase mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-4 rounded-2xl border border-border/50 hover:border-primary/25 bg-secondary/20 hover:bg-secondary/40 transition-all duration-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl border border-border/50 bg-secondary/20"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AbdallhElzorkany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/60 hover:border-primary/30 bg-secondary/30 hover:bg-secondary/60 text-sm font-medium text-muted hover:text-foreground transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abdallhelzorkany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/60 hover:border-[#0A66C2]/40 bg-secondary/30 hover:bg-[#0A66C2]/8 text-sm font-medium text-muted hover:text-[#0A66C2] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-xs">
              {submitted ? (
                <div className="py-14 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h4>
                  <p className="text-sm text-muted max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">Send a Message</h3>
                    <p className="text-sm text-muted">I&apos;ll reply within 24–48 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-[10px] font-bold text-muted uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-[10px] font-bold text-muted uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-[10px] font-bold text-muted uppercase tracking-widest">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="textarea-field"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-sm font-semibold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
