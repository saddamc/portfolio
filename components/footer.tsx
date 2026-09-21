"use client";

import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={
        className ||
        (isServicesPage
          ? "border-t border-white/[0.08] bg-slate-950/90 text-zinc-400 backdrop-blur-md py-6 text-xs select-none relative z-10"
          : "border-t border-border/40 dark:border-white/10 bg-background/60 dark:bg-slate-950/60 backdrop-blur-md py-5 text-xs text-muted-foreground select-none")
      }
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="tracking-wide">
          © {currentYear}{" "}
          <span className={`font-semibold ${isServicesPage ? 'text-white' : 'text-foreground'}`}>
            Saddam Hossain
          </span>
          . All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className={`inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer text-xs ${
            isServicesPage ? 'text-zinc-400 hover:text-white' : 'hover:text-foreground'
          }`}
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}