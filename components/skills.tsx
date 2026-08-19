"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface SkillGroup {
  category: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    category: "Infra & Tools",
    skills: ["Docker", "Nginx", "Linux", "Git", "CI/CD", "Vercel"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono text-xs border border-border/60 hover:border-primary/40 hover:text-foreground transition-colors">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
            ~/skills
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-10">
          {SKILL_GROUPS.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.06}>
              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                {/* scroll-fade-y applied for Skiper87 soft-fade effect */}
                <div
                  className={cn(
                    "flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1 scroll-fade-y"
                  )}
                >
                  {group.skills.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
