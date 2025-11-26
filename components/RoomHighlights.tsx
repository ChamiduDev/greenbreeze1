"use client";

import { motion } from "framer-motion";

type Highlight = {
  title: string;
  description: string;
};

type RoomHighlightsProps = {
  highlights: Highlight[];
  amenities: string[];
  services: string[];
};

export default function RoomHighlights({
  highlights,
  amenities,
  services,
}: RoomHighlightsProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            className="rounded-3xl border border-brand-secondary/30 bg-white/80 backdrop-blur-md p-6 shadow-[0_20px_45px_rgba(12,79,56,0.08)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary mb-2">
              Signature Highlight
            </p>
            <h3 className="text-2xl font-playfair text-brand-primary mb-2">
              {highlight.title}
            </h3>
            <p className="text-gray-600 font-playfair">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <Card title="Sanctuary Amenities" items={amenities} />
        <Card title="Curated Services" items={services} />
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  items: string[];
};

function Card({ title, items }: CardProps) {
  return (
    <div className="rounded-3xl border border-brand-secondary/30 bg-gradient-to-b from-brand-white to-brand-sand/40 p-6 shadow-[0_15px_40px_rgba(12,79,56,0.08)] h-full">
      <h4 className="text-lg font-playfair text-brand-primary mb-4">{title}</h4>
      <ul className="space-y-3 text-gray-600 font-playfair text-sm">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-brand-primary/80"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

