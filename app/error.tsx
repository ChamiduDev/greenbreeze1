"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-sand px-6 pt-20">
      <div className="max-w-xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="uppercase tracking-[0.5em] text-xs text-brand-secondary">
            Momentary Departure
          </p>
          <h1 className="text-4xl sm:text-5xl font-playfair text-brand-primary">
            A small ripple in the serenity
          </h1>
          <p className="text-lg text-gray-600 font-playfair">
            We encountered an unexpected breeze on this path. Our concierge is
            already working to restore perfection.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 rounded-full bg-brand-primary text-white font-semibold shadow-xl hover:-translate-y-0.5 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 rounded-full border border-brand-primary/20 text-brand-primary font-playfair hover:bg-brand-primary/5 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
