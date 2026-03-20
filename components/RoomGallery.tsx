"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type RoomGalleryProps = {
  images: string[];
};

export default function RoomGallery({ images }: RoomGalleryProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-playfair text-brand-primary">The Sanctuary Gallery</h3>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary">Captures of Peace</p>
      </div>

      <div className="grid gap-5 grid-cols-6 grid-rows-2 h-[600px] sm:h-[700px] lg:h-[800px]">
        {/* Large Feature - Villa Residence */}
        <motion.div
           className="col-span-6 lg:col-span-4 row-span-2 relative rounded-[40px] overflow-hidden shadow-2xl group border border-brand-secondary/10"
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Image src={images[0]} alt="Villa Residence" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white text-lg font-playfair">Main Residence</p>
            <div className="h-0.5 w-12 bg-brand-accent mt-2" />
          </div>
        </motion.div>

        {/* Top Detail - Interiors */}
        <motion.div
           className="col-span-3 lg:col-span-2 row-span-1 relative rounded-[32px] overflow-hidden shadow-xl group border border-brand-secondary/10"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image src={images[1] || images[0]} alt="Suite Detail" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </motion.div>

        {/* Bottom Detail - Traditions */}
        <motion.div
           className="col-span-3 lg:col-span-2 row-span-1 relative rounded-[32px] overflow-hidden shadow-xl group border border-brand-secondary/10"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Image src={images[2] || images[0]} alt="Traditional Context" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </motion.div>
      </div>

      <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
        {images.slice(3).map((image, i) => (
          <motion.div
             key={image + i}
             className="relative h-64 lg:h-72 rounded-[32px] overflow-hidden shadow-lg border border-brand-secondary/10 group"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <Image src={image} alt={`Gallery ${i + 3}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

