"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "Emerald Grand Suite",
    description:
      "1,600 sq. ft. of curated luxury with a private plunge pool, bespoke minibar, and handcrafted teak interiors.",
    price: "From $899/night",
    image: "/room1.png",
    amenities: ["Private Plunge Pool", "Air-Conditioned Suites", "Garden BBQ Pavilion"],
  },
  {
    name: "Tropical Villa Residence",
    description:
      "A serene two-bedroom hideaway with butler service, alfresco dining pavilion, and rainforest views.",
    price: "From $1,250/night",
    image: "/room2.png",
    amenities: ["Dedicated Butler", "Alfresco Pavilion", "Rainforest Outlook"],
  },
];

export default function Rooms() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-sand via-brand-white to-brand-sand overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-secondary/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-secondary uppercase tracking-[0.4em] text-xs sm:text-sm mb-4">
            Curated Retreats
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-brand-primary mb-4">
            Our Signature Rooms
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-playfair">
            Tailored sanctuaries designed for the discerning traveler, where every texture, scent, and vista inspires serenity.
          </p>
        </motion.div>

        <div className="space-y-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-stretch gap-8`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="relative lg:w-1/2 h-[320px] sm:h-[400px] lg:h-[460px] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(12,79,56,0.25)]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/80 text-brand-primary font-playfair text-sm tracking-[0.2em] uppercase">
                  Signature
                </div>
              </div>

              <div className="lg:w-1/2 bg-white/90 backdrop-blur-sm rounded-[32px] border border-brand-secondary/30 p-8 flex flex-col justify-between shadow-[0_20px_45px_rgba(10,35,66,0.12)]">
                <div>
                  <p className="text-brand-secondary uppercase tracking-[0.3em] text-xs mb-4">
                    Luxury Stay
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-playfair text-brand-primary mb-4">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 font-playfair text-lg mb-6">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-4 py-2 rounded-full border border-brand-secondary/30 bg-brand-sand text-brand-primary text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-2xl font-playfair text-brand-primary">{room.price}</p>
                  <div className="flex gap-4">
                    <motion.button
                      className="px-6 py-3 text-brand-primary border border-brand-secondary/30 rounded-full font-playfair font-semibold hover:bg-brand-accent/20 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 bg-brand-primary text-white rounded-full font-playfair font-semibold hover:bg-brand-secondary transition-colors shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Suite
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

