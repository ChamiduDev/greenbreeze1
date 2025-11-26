"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type RoomGalleryProps = {
  images: string[];
};

export default function RoomGallery({ images }: RoomGalleryProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {images.map((image, index) => (
        <motion.div
          key={image + index}
          className={`relative h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(12,79,56,0.18)] ${
            index === 0 ? "lg:row-span-2 lg:h-full" : ""
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Image
            src={image}
            alt="Room gallery"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

