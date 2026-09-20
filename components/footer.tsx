"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 dark:border-white/10 bg-background/60 dark:bg-slate-950/60 backdrop-blur-md py-5 text-xs text-muted-foreground select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="tracking-wide">
          © {currentYear} <span className="font-semibold text-foreground">Saddam Hossain</span>. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-200 cursor-pointer text-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}