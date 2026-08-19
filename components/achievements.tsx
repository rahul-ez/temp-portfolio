"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

interface Achievement {
  title: string;
  issuer: string;
  year: string;
  type: "cert" | "award";
  url?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    type: "cert",
    url: "#",
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2023",
    type: "cert",
    url: "#",
  },
  {
    title: "Hackathon 1st Place — [Event Name]",
    issuer: "Organiser",
    year: "2023",
    type: "award",
  },
  {
    title: "Open Source Contributor of the Month",
    issuer: "Community",
    year: "2022",
    type: "award",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
            ~/achievements
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200">
                {/* Icon */}
                <span className="shrink-0 font-mono text-base text-primary mt-0.5">
                  {item.type === "cert" ? "◈" : "★"}
                </span>

                <div className="flex-1 min-w-0">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground text-sm line-clamp-2">
                      {item.title}
                    </p>
                  )}
                  <p className="font-mono text-[10px] text-muted-foreground mt-1">
                    {item.issuer} · {item.year}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
