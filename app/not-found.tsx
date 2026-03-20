"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-sand px-6 pt-20">
      <div className="max-w-xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="uppercase tracking-[0.5em] text-xs sm:text-sm text-brand-secondary">
            Off the path
          </p>
          <h1 className="text-4xl sm:text-5xl font-playfair text-brand-primary">
            A hidden enclave, yet to be found
          </h1>
          <p className="text-lg text-gray-600 font-playfair">
            The path you followed lead to a secluded corner where we have yet
            to build our sanctuaries.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="px-10 py-4 rounded-full bg-brand-primary text-white font-playfair font-semibold tracking-widest uppercase text-sm shadow-[0_20px_40px_rgba(10,35,66,0.25)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(10,35,66,0.3)] transition-all duration-300"
          >
            Return to Sanctuary
          </Link>
        </div>
      </div>
    </main>
  );
}
