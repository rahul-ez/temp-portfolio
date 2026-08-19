export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · built with Next.js
        </p>
        {/* Skiper UI attribution — required by free tier license */}
        <p className="font-mono text-xs text-muted-foreground">
          Components by{" "}
          <a
            href="https://skiper-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Skiper UI
          </a>
        </p>
      </div>
    </footer>
  );
}
