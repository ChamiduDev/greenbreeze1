"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/kandy.jpg"
          alt="Kandy skyline backdrop"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary/80 to-brand-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="text-center lg:text-left space-y-6">
          <motion.p
            className="uppercase tracking-[0.45em] text-brand-accent text-xs sm:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Green Breeze Villa
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Relax in a peaceful hilltop home
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-playfair text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Enjoy a quiet stay in our peaceful hilltop home. We have comfortable rooms for two people where you can see beautiful birds and butterflies all around. Relax by the pool, enjoy a BBQ, and feel the fresh hill air.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-white text-brand-primary rounded-full font-playfair font-semibold text-base sm:text-lg shadow-lg hover:bg-brand-accent/20 transition">
              See Rooms
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white/70 rounded-full font-playfair font-semibold text-base sm:text-lg hover:bg-white/10 transition">
              Book Your Stay
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 pt-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {[
              { label: "Comfortable Rooms", value: "02" },
              { label: "Swimming Pool", value: "01" },
              { label: "Nature Views", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-4 backdrop-blur-md text-center">
                <p className="text-2xl font-playfair font-semibold">{stat.value}</p>
                <p className="uppercase tracking-[0.2em] text-[10px] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 0.95,
              y: [0, -12, 0]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Main Featured Card */}
            <motion.div
              className="absolute inset-x-0 inset-y-4 sm:inset-4 bg-white/10 rounded-[40px] border border-white/30 shadow-[0_40px_100px_rgba(10,35,66,0.4)] overflow-hidden backdrop-blur-md z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/3.jpeg"
                alt="Green Breeze Villa A-frame exterior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-3xl px-6 py-5 text-brand-primary shadow-2xl border border-white/50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-1">
                      Signature Sanctuary
                    </p>
                    <p className="text-2xl font-playfair font-bold">The Wooden Residence</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-brand-secondary">Breakfast Included</p>
                  </div>
                </div>
                <div className="h-px w-full bg-brand-secondary/10 my-3" />
                <p className="text-xs text-brand-primary/80 leading-relaxed font-playfair tracking-wide">
                  Stilted Architecture • Panoramic Balcony • Rustic Elegance • Hilltop Views
                </p>
              </div>
            </motion.div>

            {/* Floating Detail Image 1 - Fish Therapy */}
            <motion.div
              className="absolute top-[15%] -left-4 sm:-left-12 w-40 sm:w-56 rounded-[32px] border border-white/40 bg-white/90 shadow-2xl overflow-hidden z-20"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: -2 }}
            >
              <div className="relative h-32 sm:h-40 w-full">
                <Image src="/6.jpeg" alt="Fish Therapy experience" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
              <div className="p-4 bg-white/95">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-1">
                  Wellness
                </p>
                <p className="text-xs sm:text-sm font-playfair font-bold text-brand-primary">Fish Therapy Pool</p>
              </div>
            </motion.div>

            {/* Floating Detail Image 2 - Traditions */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:-right-8 w-40 sm:w-56 rounded-[32px] border border-white/40 bg-white/90 shadow-2xl overflow-hidden z-20"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: 2 }}
            >
              <div className="relative h-32 sm:h-40 w-full">
                <Image src="/2.jpeg" alt="Traditional outdoor kitchen" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
              <div className="p-4 bg-white/95">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-1">
                  Taste
                </p>
                <p className="text-xs sm:text-sm font-playfair font-bold text-brand-primary">Traditional Grill</p>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute -inset-10 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


