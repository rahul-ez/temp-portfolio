"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "$ whoami",
  "> full-stack developer",
  "$ ls ~/skills",
  "> TypeScript  React  Next.js  Node.js  Python",
  "$ cat interests.txt",
  "> building things that feel good to use",
  "$ _",
];

const TYPING_SPEED = 38; // ms per char
const LINE_PAUSE = 380;  // ms between lines

export function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (currentLine >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[currentLine];

    if (currentChar < line.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] ?? "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, TYPING_SPEED);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentLine, currentChar]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal window */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm mb-16 max-w-2xl">
          {/* Traffic lights */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              terminal — zsh
            </span>
          </div>

          {/* Output */}
          <div className="p-5 font-mono text-sm leading-relaxed min-h-[200px]">
            {displayed.map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith("$")
                    ? "text-foreground"
                    : "text-primary pl-2"
                }
              >
                {line}
                {i === currentLine && !done && (
                  <span className="cursor-blink ml-px">▍</span>
                )}
              </p>
            ))}
            {done && (
              <span className="cursor-blink text-foreground">▍</span>
            )}
          </div>
        </div>

        {/* Hero copy — below terminal, quiet */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
            ~/hello
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-primary">Your Name</span>.
            <br />
            I build for the web.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-10">
            Full-stack developer focused on clean interfaces, thoughtful
            architecture, and code that&apos;s a pleasure to maintain.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
