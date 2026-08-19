"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "you@example.com",
    href: "mailto:you@example.com",
    mono: "you@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/yourhandle",
    href: "https://github.com/yourhandle",
    mono: "yourhandle",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    mono: "yourprofile",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            ~/contact
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-12">
            I&apos;m open to interesting work, collaboration, or just a good
            conversation about software. Feel free to reach out.
          </p>
        </ScrollReveal>

        <div className="space-y-5">
          {CONTACT_LINKS.map((link, i) => (
            <ScrollReveal key={link.label} delay={0.08 + i * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest w-20 shrink-0">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.value}
                </a>
              </div>
            </ScrollReveal>
          ))}

          {/* Resume download */}
          <ScrollReveal delay={0.26}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest w-20 shrink-0">
                Résumé
              </span>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
              >
                ↓ Download PDF
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
