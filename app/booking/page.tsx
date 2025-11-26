"use client";

import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function BookingPage() {
  return (
    <main className="bg-gradient-to-b from-brand-sand via-brand-white to-brand-sand">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-brand-secondary uppercase tracking-[0.5em] text-xs sm:text-sm">
            Tailored Stays
          </p>
          <h1 className="text-4xl sm:text-5xl font-playfair text-brand-primary">
            Begin Your Journey
          </h1>
          <p className="text-lg text-gray-600 font-playfair max-w-3xl mx-auto">
            Share your ideal dates, guests, and bespoke touches. Our concierge
            will respond within hours with curated availability and indulgent
            itineraries.
          </p>
        </motion.div>

        <BookingForm />
      </section>
    </main>
  );
}

