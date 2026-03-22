"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Sinhala Ayurvedic Traditional Treatments",
    description:
      "Experience the ancient healing arts of our island. Our traditional Sinhala Ayurvedic treatments use natural oils and time-honored techniques to restore balance to your body and mind.",
    image: "/ayur.jpg",
    bullets: [
      "Authentic Sinhala healing techniques",
      "Natural herbal oils and remedies",
      "Restores physical and mental balance",
    ],
  },
  {
    title: "Large Swimming Pool",
    description:
      "Take a dip in our clean and cool swimming pool. It is perfect for a morning swim or a relaxing afternoon with your family.",
    image: "/pool.jpeg",
    bullets: [
      "Clean water for all guests",
      "Resting chairs by the pool",
      "Beautiful hillside views",
    ],
  },
  {
    title: "Fire Area & BBQ",
    description:
      "Enjoy a warm fire at night and have a fun BBQ with your family and friends. We provide everything you need.",
    image: "/2.jpeg",
    bullets: [
      "Warm fire for night chats",
      "BBQ grill for tasty food",
      "Plenty of seating for everyone",
    ],
  },
  {
    title: "Fish Therapy Pool",
    description:
      "Relax your feet in our special fish therapy pool. It is a natural and fun way to feel refreshed and happy.",
    image: "/double_room/double_4.jpeg",
    bullets: [
      "Natural and calm setting",
      "Fun for the whole family",
      "Included with your stay",
    ],
  },
  {
    title: "Comfortable Bedrooms",
    description:
      "Each bedroom has an attached bathroom with a hot water facility. Enjoy free WiFi and a TV in every room.",
    image: "/upper/upper_7.jpeg",
    bullets: [
      "Soft beds for a good sleep",
      "Hot and cold water",
      "Free WiFi and TV",
      "Attached private bathrooms",
    ],
  },
  {
    title: "Curated Tour Guide Services",
    description:
      "Explore the hidden beauty of Kandy and beyond. Our local tour guides can take you on secret nature trails, historical landmarks, and cultural journeys tailored exactly to your pace. Available upon request via contact.",
    image: "/1.jpeg",
    bullets: [
      "Expert local knowledge",
      "Historical and cultural landmarks",
      "Secret nature trails & viewpoints",
      "Bespoke itineraries upon request",
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <main className="bg-brand-sand min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-brand-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 bg-brand-secondary/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.5em] text-xs sm:text-sm text-brand-accent"
          >
            Villa Facilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-playfair"
          >
            Great things you can do here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-white font-playfair"
          >
            Enjoy our facilities made for your comfort and fun. We have everything you need for a peaceful stay.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.title}
            className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
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

