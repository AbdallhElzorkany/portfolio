"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

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
    <section id="contact" className="py-24 border-t border-border/40 relative dot-grid">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-primary/5 dark:bg-primary/5 blur-[100px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground/90">
                Let&apos;s start a conversation
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Whether you have a job opportunity, a project proposal, or just want to chat about front-end technologies, my inbox is always open.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:abdallah.elzorkany.dev@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-secondary/80 text-primary border border-border/60 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted tracking-wider uppercase">Email</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      abdallah.elzorkany.dev@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/abdallhelzorkany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-secondary/80 text-primary border border-border/60 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted tracking-wider uppercase">LinkedIn</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/abdallhelzorkany
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+201505430940"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-secondary/80 text-primary border border-border/60 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted tracking-wider uppercase">Phone</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      +201505430940
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/80 text-primary border border-border/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted tracking-wider uppercase">Location</span>
                    <span className="text-sm font-medium text-foreground">
                      Tanta, Gharbia, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-glass-border p-8 rounded-3xl shadow-xs">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted max-w-sm">
                    Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-muted uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="h-11 px-4 rounded-xl border border-border/75 bg-background/50 focus:bg-background focus:outline-hidden focus:border-primary text-sm transition-all text-foreground"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-muted uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="h-11 px-4 rounded-xl border border-border/75 bg-background/50 focus:bg-background focus:outline-hidden focus:border-primary text-sm transition-all text-foreground"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-muted uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="p-4 rounded-xl border border-border/75 bg-background/50 focus:bg-background focus:outline-hidden focus:border-primary text-sm transition-all text-foreground resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 text-white text-sm font-semibold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50"
                  >
                    {submitting ? (
                      "Sending message..."
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
