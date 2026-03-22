"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const SUITES = [
  { name: "Couple Package", slug: "couple-package" },
  { name: "Full Board", slug: "full-board-package" },
  { name: "Full Villa", slug: "full-private-villa" },
];

export function SuiteSwitcher() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white border-y border-brand-primary/10 sticky top-16 sm:top-20 z-30">
      <div className="max-w-6xl mx-auto px-6 overflow-x-auto no-scrollbar">
        <nav className="flex justify-start sm:justify-center items-center py-6 gap-10 sm:gap-20 min-w-max">
          {SUITES.map((suite) => {
            const isActive = pathname.includes(suite.slug);
            return (
              <Link
                key={suite.slug}
                href={`/rooms/${suite.slug}`}
                className={`group relative py-2 transition-all duration-500 ${
                  isActive ? "text-brand-primary font-bold" : "text-brand-primary/30 hover:text-brand-primary"
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className={`text-[10px] uppercase tracking-[0.4em] mb-1 transition-colors ${isActive ? "text-brand-accent" : "text-brand-accent/50 group-hover:text-brand-accent"}`}>
                    Suite
                  </span>
                  <span className="text-sm sm:text-base font-playfair whitespace-nowrap tracking-wide uppercase italic">
                    {suite.name}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-line"
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-accent shadow-[0_4px_12px_rgba(199,166,115,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
