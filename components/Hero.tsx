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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/kandy.jpg"
          alt="Kandy skyline backdrop"
          fill
          priority
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary/85 to-brand-primary" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-brand-secondary/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-24 grid gap-12 lg:grid-cols-[1fr_0.8fr] items-center">
        <div className="text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
          <div className="space-y-4">
            <motion.p
              className="uppercase tracking-[0.45em] text-brand-accent text-[10px] sm:text-xs font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Green Breeze Villa
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-[1.15] lg:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Relax in a peaceful <span className="text-brand-accent">hilltop</span> home
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl font-playfair text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Enjoy a quiet stay where you can see beautiful birds and butterflies all around. Relax by the pool, enjoy a BBQ, and feel the fresh hill air.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button className="px-8 py-4 bg-white text-brand-primary rounded-full font-playfair font-bold text-base shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-brand-accent transition-all duration-300 hover:-translate-y-1">
              See Our Rooms
            </button>
            <button className="px-8 py-4 border border-white/40 rounded-full font-playfair font-bold text-base hover:bg-white/10 transition-all duration-300">
              Book Your Stay
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {[
              { label: "Guest Rooms", value: "02" },
              { label: "Private Pool", value: "01" },
              { label: "Nature Views", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md text-center group hover:bg-white/10 transition-colors">
                <p className="text-2xl sm:text-3xl font-playfair font-bold text-brand-accent">{stat.value}</p>
                <p className="uppercase tracking-[0.2em] text-[9px] sm:text-[10px] text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[440px] sm:h-[500px] lg:h-[620px] flex items-center justify-center mt-8 lg:mt-0">
          <motion.div
            className="relative w-full h-full max-w-[500px] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 0.9,
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Main Featured Card */}
            <div className="absolute inset-0 bg-white/10 rounded-[48px] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden backdrop-blur-sm z-10 transition-all duration-500 hover:border-white/40">
              <Image
                src="/3.jpeg"
                alt="Green Breeze Villa A-frame exterior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[32px] p-6 text-brand-primary shadow-2xl border border-white/50">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-brand-secondary font-bold mb-1 opacity-70">
                      Signature Suite
                    </p>
                    <p className="text-xl sm:text-2xl font-playfair font-bold leading-tight">The Wooden Residence</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="px-3 py-1 bg-brand-primary/5 rounded-full border border-brand-primary/10">
                      <p className="text-[9px] font-bold text-brand-secondary tracking-widest uppercase">Breakfast Included</p>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-brand-secondary/10 mb-3" />
                <p className="text-[10px] sm:text-xs text-brand-primary/80 leading-relaxed font-playfair font-medium italic opacity-80">
                  Stilted Architecture • Panoramic Balcony • Rustic Elegance
                </p>
              </div>
            </div>

            {/* Floating Detail Image 1 - Wellness */}
            <motion.div
              className="absolute -top-6 -left-4 sm:-left-12 w-36 sm:w-52 rounded-[32px] border border-white/30 bg-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="relative h-28 sm:h-36 w-full">
                <Image src="/fishtherapy.jpeg" alt="Wellness experience" fill className="object-cover" />
              </div>
              <div className="p-3 bg-white/95 text-center">
                <p className="text-[9px] font-bold text-brand-secondary tracking-widest uppercase mb-1">Wellness</p>
                <p className="text-xs font-playfair font-bold text-brand-primary">Fish Therapy Pool</p>
              </div>
            </motion.div>

            {/* Floating Detail Image 2 - Food */}
            <motion.div
              className="absolute -bottom-10 -right-4 sm:-right-8 w-36 sm:w-52 rounded-[32px] border border-white/30 bg-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="relative h-28 sm:h-36 w-full">
                <Image src="/2.jpeg" alt="Grill experience" fill className="object-cover" />
              </div>
              <div className="p-3 bg-white/95 text-center">
                <p className="text-[9px] font-bold text-brand-accent tracking-widest uppercase mb-1">Taste</p>
                <p className="text-xs font-playfair font-bold text-brand-primary">Traditional Grill</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] font-bold uppercase pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="[writing-mode:vertical-lr] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
