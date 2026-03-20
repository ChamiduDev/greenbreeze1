"use client";

import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function BookingPage() {
  return (
    <main className="bg-brand-sand min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-brand-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 bg-brand-secondary/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.5em] text-xs text-brand-accent font-semibold"
          >
            Tailored Stays
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-6"
          >
            Begin Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-white font-playfair max-w-3xl mx-auto"
          >
            Share your ideal dates, guests, and bespoke touches. Our concierge
            will respond within hours with curated availability and indulgent
            itineraries.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-[40px] shadow-[0_40px_100px_rgba(10,35,66,0.18)] overflow-hidden border border-brand-secondary/10">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}

