"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Comfortable Rooms",
    description:
      "Large, soft beds and attached bathrooms with hot water. Everything you need for a restful night.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M3 11V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
        <line x1="12" y1="5" x2="12" y2="13" />
        <path d="M2 13h20" />
      </svg>
    ),
  },
  {
    title: "Private Fun",
    description:
      "Enjoy the swimming pool, BBQ, and fire area for night chats with your friends or family.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    title: "Nature & Peace",
    description:
      "A very quiet area with butterflies and beautiful birds all around the hilltop villa.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19c-2.3 0-6.4-.8-8.1-2.3S2 10.7 2 8c0-3.3 2.7-6 6-6 2.1 0 3.9 1.1 5 2.8C14.1 3.1 15.9 2 18 2c3.3 0 6 2.7 6 6 0 2.7-1.3 5.3-2.9 6.7S14.3 19 12 19z" />
        <path d="M12 19v-6" />
        <path d="M12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brand-sand overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-secondary/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />
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
            A Better Stay
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-brand-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-playfair">
            Enjoy the best of Kandy hills with us. We make sure you have everything you need for a happy holiday.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-brand-secondary/40 via-transparent to-brand-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              <div className="relative h-full rounded-[40px] border border-white/50 bg-white/95 backdrop-blur-sm p-10 flex flex-col gap-6 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/20 flex items-center justify-center text-brand-primary relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                  <div className="relative z-10 transition-colors duration-500 group-hover:text-brand-secondary">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-playfair text-base">
                    {feature.description}
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-brand-secondary/5 via-brand-secondary/20 to-brand-secondary/5" />
                <div className="flex items-center text-brand-secondary font-playfair text-xs tracking-[0.3em] uppercase font-bold">
                  View Detail
                  <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-secondary/30 group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
