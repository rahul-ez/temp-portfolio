"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const LEARNING = [
  { label: "Rust — systems programming foundations" },
  { label: "WebAssembly & WASM runtimes" },
  { label: "Distributed systems design patterns" },
  { label: "Machine learning fundamentals (fast.ai)" },
  { label: "3D on the web — Three.js / R3F" },
];

export function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
            ~/currently-learning
          </p>
        </ScrollReveal>

        <ul className="space-y-4 max-w-xl">
          {LEARNING.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <li className="flex items-center gap-4 text-foreground/80">
                {/* Pulsing dot */}
                <span
                  className="shrink-0 w-2 h-2 rounded-full bg-primary pulse-dot"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <span className="text-sm">{item.label}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
