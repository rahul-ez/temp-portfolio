"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

interface Role {
  title: string;
  company: string;
  period: string;
  note?: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    title: "Senior Frontend Developer",
    company: "Company A",
    period: "2024 – present",
    bullets: [
      "Led migration from Pages Router to App Router, reducing TTFB by 40%.",
      "Built and maintained a component library used across 5 product teams.",
      "Introduced E2E testing coverage with Playwright.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Company B",
    period: "2022 – 2024",
    bullets: [
      "Developed REST API with FastAPI serving 50k+ requests/day.",
      "Redesigned dashboard reducing load time from 4 s to under 1 s.",
      "Mentored two junior developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Various clients",
    period: "2020 – 2022",
    note: "scattered",
    bullets: [
      "Built bespoke sites and internal tools for 8+ clients.",
      "Handled full project lifecycle from scoping to deployment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
            ~/experience
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {ROLES.map((role, i) => (
            <ScrollReveal key={role.company + role.period} delay={i * 0.07}>
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {role.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">
                      {role.company}
                      {role.note && (
                        <span className="font-mono text-xs text-primary ml-2">
                          [{role.note}]
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {role.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pl-0">
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-muted-foreground text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-primary shrink-0 font-mono">
                        ›
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {i < ROLES.length - 1 && (
                  <div className="mt-8 border-b border-border/40" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
