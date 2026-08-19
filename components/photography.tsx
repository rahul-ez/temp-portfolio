"use client";

import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import ReactLenis from "lenis/react";
import { ScrollReveal } from "@/components/scroll-reveal";

// Replace these with real photography image paths in /public/photos/
const PHOTO_CARDS = [
  { id: 1, image: "/photos/photo-1.jpg", alt: "Photo 1" },
  { id: 2, image: "/photos/photo-2.jpg", alt: "Photo 2" },
  { id: 3, image: "/photos/photo-3.jpg", alt: "Photo 3" },
  { id: 4, image: "/photos/photo-4.jpg", alt: "Photo 4" },
  { id: 5, image: "/photos/photo-5.jpg", alt: "Photo 5" },
];

export function Photography() {
  return (
    <section
      id="photography"
      className="py-24 px-6 bg-muted/20"
      aria-label="Photography"
    >
      <div className="max-w-5xl mx-auto">
        {/* Low-priority label — deliberately quiet */}
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mb-2">
            hidden corner
          </p>
          <p className="text-muted-foreground/70 text-sm mb-10 max-w-sm">
            Sometimes I wander with a camera. Here&apos;s what I come back with.
          </p>
        </ScrollReveal>

        {/* StickyCard002 needs height context + Lenis for its own scroll area */}
        <div className="h-[70vh] rounded-2xl overflow-hidden border border-border/40 shadow-sm">
          <ReactLenis>
            <StickyCard002
              cards={PHOTO_CARDS}
              className="h-full"
              containerClassName="rounded-2xl"
              imageClassName="object-cover"
            />
          </ReactLenis>
        </div>
      </div>
    </section>
  );
}
