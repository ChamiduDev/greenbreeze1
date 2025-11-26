"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Signature Suites",
    description:
      "Light-filled sanctuaries with whisper-quiet air conditioning, Italian linens, and panoramic views of emerald canopies.",
    icon: "🏰",
  },
  {
    title: "Butlered Experiences",
    description:
      "Dedicated hosts anticipate every desire—from sunset cruises to candlelit garden dining crafted just for you.",
    icon: "🤵",
  },
  {
    title: "Pool & BBQ Sanctuaries",
    description:
      "Private plunge pools, shaded cabanas, and chef-hosted garden BBQs create effortless days and starlit evenings.",
    icon: "🔥",
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
            Signature Excellence
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-brand-primary mb-4">
            Why Choose Green Breeze Villa?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-playfair">
            Every detail is meticulously curated to envelop you in refined comfort, soulful service, and nature&apos;s grandeur.
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-secondary/40 via-transparent to-brand-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              <div className="relative h-full rounded-3xl border border-brand-secondary/30 bg-white/90 backdrop-blur-sm p-8 flex flex-col gap-6 shadow-[0_25px_60px_rgba(10,35,66,0.12)]">
                <div className="w-14 h-14 rounded-full border border-brand-secondary/30 bg-brand-white flex items-center justify-center text-2xl text-brand-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-playfair text-brand-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-playfair text-base">
                    {feature.description}
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />
                <div className="flex items-center text-brand-secondary font-playfair text-sm tracking-[0.25em] uppercase">
                  Indulge
                  <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-secondary/30 group-hover:bg-brand-accent/10 transition-colors">
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

