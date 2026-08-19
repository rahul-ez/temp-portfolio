"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            ~/about
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="max-w-2xl space-y-5 text-foreground/80 leading-relaxed text-[1.05rem]">
            <p>
              I&apos;m a full-stack developer with a focus on building
              thoughtful, well-crafted web applications. I care deeply about the
              details — how an interface feels to use, how code reads six months
              later, and how systems hold up under real conditions.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m likely reading about
              distributed systems, taking photos, or tinkering with hardware
              projects that probably won&apos;t make it to production.
            </p>
            <p>
              Based in{" "}
              <span className="text-foreground font-medium">
                [Your City]
              </span>
              , open to remote opportunities worldwide.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
