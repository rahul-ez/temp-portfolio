"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

interface Project {
  name: string;
  year: string;
  type: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Project Alpha",
    year: "2025",
    type: "Web App",
    description:
      "A real-time collaboration tool built with Next.js and WebSockets. Supports live cursors, presence awareness, and conflict-free document editing.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    url: "#",
    repo: "#",
  },
  {
    name: "Project Beta",
    year: "2024",
    type: "CLI Tool",
    description:
      "A developer CLI that scaffolds opinionated project templates in seconds. Used internally to standardise team setups across 10+ projects.",
    tags: ["Node.js", "TypeScript", "Bash"],
    repo: "#",
  },
  {
    name: "Project Gamma",
    year: "2024",
    type: "Open Source",
    description:
      "A lightweight analytics library that tracks page performance metrics without cookies and respects user privacy by design.",
    tags: ["JavaScript", "Performance", "Privacy"],
    url: "#",
    repo: "#",
  },
  {
    name: "Project Delta",
    year: "2023",
    type: "API / Backend",
    description:
      "RESTful API service handling thousands of requests/day, built with FastAPI and deployed on a self-hosted Linux server behind Nginx.",
    tags: ["Python", "FastAPI", "Nginx", "Docker"],
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
            ~/projects
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.07}>
              <article className="group flex flex-col h-full rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {project.year} · {project.type}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Live demo of ${project.name}`}
                      >
                        ↗ live
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Source code of ${project.name}`}
                      >
                        ↗ repo
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-foreground font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
