"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "@/public/hero.png";
import roomOne from "@/public/room1.png";
import roomTwo from "@/public/room2.png";
import kandy from "@/public/kandy.jpg";

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
          src={kandy}
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Where hilltop breezes meet bespoke luxury
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-playfair text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Sunrise rituals above Kandy, private plunge pools cooled to your comfort, and garden BBQ pavilions curated by our chefs—every indulgence is handwritten by our concierge collective.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-white text-brand-primary rounded-full font-playfair font-semibold text-base sm:text-lg shadow-lg hover:bg-brand-accent/20 transition">
              Browse Retreats
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white/70 rounded-full font-playfair font-semibold text-base sm:text-lg hover:bg-white/10 transition">
              Arrange Your Stay
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 pt-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {[
              { label: "Suites & Villas", value: "25" },
              { label: "Private Pools", value: "08" },
              { label: "Curated Moments", value: "40+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-4 backdrop-blur-md">
                <p className="text-2xl font-playfair font-semibold">{stat.value}</p>
                <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative h-[380px] sm:h-[440px] lg:h-[520px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-[36px] border border-white/30 shadow-[0_30px_80px_rgba(10,35,66,0.35)] overflow-hidden backdrop-blur-md">
            <Image
              src={heroImage}
              alt="Private suite with lush surroundings"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/45 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 rounded-2xl px-6 py-4 text-brand-primary shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary mb-1">
                    Featured Villa
                  </p>
                  <p className="text-2xl font-playfair">Emerald Grand Suite</p>
                </div>
                <p className="text-sm font-semibold">From $899 / night</p>
              </div>
              <p className="text-sm text-brand-primary/80 mt-2">
                Infinity lap pool • Butler pantry • Sunrise terrace yoga
              </p>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-4 w-40 sm:w-48 rounded-3xl border border-white/30 bg-white/90 shadow-xl overflow-hidden">
            <Image src={roomOne} alt="Pool villa" className="h-32 w-full object-cover" />
            <div className="p-4 text-brand-primary">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
                Pool Villa
              </p>
              <p className="text-sm font-playfair">Private plunge & BBQ deck</p>
            </div>
          </div>

          <div className="absolute -top-10 right-0 w-44 sm:w-52 rounded-3xl border border-white/30 bg-white/90 shadow-xl overflow-hidden">
            <Image src={roomTwo} alt="Garden pavilion" className="h-32 w-full object-cover" />
            <div className="p-4 text-brand-primary">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
                Garden Pavilion
              </p>
              <p className="text-sm font-playfair">Alfresco dining rituals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


