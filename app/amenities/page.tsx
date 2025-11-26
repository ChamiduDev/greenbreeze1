"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Private Pool Sanctuaries",
    description:
      "Temperature-controlled plunge pools with submerged loungers, underwater lighting, and refreshments delivered on cue.",
    image: "/hero.png",
    bullets: [
      "Heated basalt pools with mosaic tiling",
      "Shade cabanas with ceiling fans",
      "Dedicated attendant for poolside tastings",
    ],
  },
  {
    title: "Climate-Controlled Suites",
    description:
      "Air-conditioned villas with hand-carved screens, blackout drapery, and curated scent menus for perfect rest.",
    image: "/room1.png",
    bullets: [
      "Dual-zone climate controls",
      "Nighttime turndown with cooling linens",
      "Soundproof glass with rainforest views",
    ],
  },
  {
    title: "Garden BBQ Evenings",
    description:
      "Chef-led grill experiences set among frangipani courtyards, complete with live fire demonstrations and mixology pairings.",
    image: "/room2.png",
    bullets: [
      "Custom marinades & tasting menus",
      "Private pitmaster and sommelier",
      "Starlit dining lounges with live acoustics",
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <main className="bg-gradient-to-b from-brand-sand via-brand-white to-brand-sand">
      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.45),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.5em] text-xs sm:text-sm text-brand-accent"
          >
            Beyond Amenities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-playfair"
          >
            Curated experiences for every sense
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-white font-playfair"
          >
            From sunrise meditations to starlit gastronomy, our concierge
            orchestrates every moment with artistry.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.title}
            className={`grid gap-8 lg:grid-cols-2 items-center ${
              index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative h-72 sm:h-96 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(12,79,56,0.25)]">
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="space-y-5">
              <p className="uppercase tracking-[0.4em] text-xs text-brand-secondary">
                Signature Offering
              </p>
              <h2 className="text-3xl font-playfair text-brand-primary">
                {amenity.title}
              </h2>
              <p className="text-gray-600 font-playfair">{amenity.description}</p>
              <ul className="space-y-2 text-brand-primary/80 font-playfair">
                {amenity.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-[32px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary text-white p-10 text-center space-y-4 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          <p className="uppercase tracking-[0.4em] text-xs text-brand-accent">
            Bespoke Moments
          </p>
          <h3 className="text-3xl font-playfair">
            Tell us how you envision paradise
          </h3>
          <p className="text-brand-white font-playfair">
            Our concierge will craft an itinerary that mirrors your pace —
            whether it is serenity, celebration, or discovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-full border border-white/40 font-playfair hover:bg-white/10 transition">
              Explore Sample Itineraries
            </button>
            <button className="px-8 py-3 rounded-full bg-white text-brand-primary font-playfair font-semibold hover:-translate-y-0.5 transition">
              Speak with Experiences Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

