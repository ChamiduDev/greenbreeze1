"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const kandySpots = [
  {
    title: "Temple of the Tooth",
    description: "The most famous temple in Kandy, located by a beautiful lake. It is a very peaceful and holy place for everyone.",
    image: "/temple.png",
  },
  {
    title: "Royal Botanical Gardens",
    description: "A large and beautiful garden with giant trees and colorful flowers. Perfect for a long walk with your family.",
    image: "/gardens.png",
  },
  {
    title: "Kandy Lake Walk",
    description: "Enjoy a morning or evening walk around the lake. You can see beautiful birds and enjoy the fresh air.",
    image: "/kandy.jpg",
  },
];

export default function KandyExploration() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-xs text-brand-secondary font-bold"
          >
            Explore the City
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-playfair font-bold text-brand-primary"
          >
            Things to see and do in Kandy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-playfair max-w-2xl mx-auto"
          >
            There is so much to see around our villa. Here are some of the most beautiful places you can visit while staying with us.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {kandySpots.map((spot, index) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-72 rounded-[40px] overflow-hidden shadow-xl mb-6 border border-white/50">
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-3">
                {spot.title}
              </h3>
              <p className="text-gray-600 font-playfair leading-relaxed">
                {spot.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-playfair font-semibold hover:-translate-y-1 transition-all shadow-lg">
            See More Kandy Spots
          </button>
        </div>
      </div>
    </section>
  );
}
