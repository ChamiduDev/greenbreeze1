"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/3.jpeg", alt: "Signature Residence", span: "lg:col-span-2 lg:row-span-2 min-w-[300px]" },
  { src: "/6.jpeg", alt: "Fish Therapy Pool", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/2.jpeg", alt: "Traditional Cooking", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/pool.jpeg", alt: "Infinity Lap Pool", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/4.jpeg", alt: "Luxury Ensuites", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/1.jpeg", alt: "Outdoor Bathing", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/5.jpeg", alt: "Villa Heritage", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/room2.jpeg", alt: "Sanctuary Interior", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
  { src: "/room3.jpeg", alt: "Mist-Top Living", span: "lg:col-span-1 lg:row-span-1 min-w-[280px]" },
];

export default function HomeGallery() {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(false);

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveDot((prev) => (prev + 1) % galleryImages.length);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Sync scroll position with active dot (on mobile)
  useEffect(() => {
    const container = scrollRef.current;
    if (container && window.innerWidth < 1024) {
      isAutoScrolling.current = true;

      const children = Array.from(container.children) as HTMLElement[];
      const targetChild = children[activeDot];

      if (targetChild) {
        const targetScroll = targetChild.offsetLeft - container.offsetLeft - (container.clientWidth - targetChild.clientWidth) / 2;

        container.scrollTo({
          left: targetScroll,
          behavior: "smooth"
        });
      }

      // Allow manual scroll tracking to resume after animation
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 700);
    }
  }, [activeDot]);

  // Update active dot on manual scroll
  const handleScroll = () => {
    if (scrollRef.current && !isAutoScrolling.current) {
      const container = scrollRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft - container.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeDot) setActiveDot(closestIndex);
    }
  };

  const handleDotClick = (i: number) => {
    setActiveDot(i);
  };

  return (
    <section className="py-24 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.5em] text-xs text-brand-secondary font-semibold"
            >
              Villa Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-playfair text-brand-primary"
            >
              Authentic Hilltop Living
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block max-w-md text-gray-600 font-playfair text-lg text-right italic"
          >
            "Every frame tells a story of heritage, healing, and hilltop peace."
          </motion.p>
        </div>

        {/* Carousel / Bento Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 lg:gap-6 lg:auto-rows-[280px] overflow-x-auto gap-4 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide lg:overflow-visible transition-all duration-700 no-scrollbar"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src + index}
              className={`relative flex-shrink-0 lg:flex-shrink rounded-[40px] overflow-hidden group shadow-xl border border-brand-secondary/5 h-[400px] lg:h-full w-[85%] sm:w-[55%] lg:w-auto snap-center ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-playfair font-medium tracking-wide">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery-style dots Navigation for Mobile */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4 flex-wrap">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${activeDot === i ? "w-8 bg-brand-secondary shadow-[0_4px_12px_rgba(16,185,129,0.3)]" : "w-1.5 bg-brand-secondary/20 hover:bg-brand-secondary/40"
                }`}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
