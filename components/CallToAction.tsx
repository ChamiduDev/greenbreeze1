"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.35),_transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          className="text-brand-accent uppercase tracking-[0.5em] text-xs sm:text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Escapes
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-playfair text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready for Your Perfect Getaway?
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-brand-white font-playfair mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Allow our concierge to tailor every moment—from private transfers to bespoke dining—in a sanctuary where tranquility meets indulgence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-brand-white text-brand-primary rounded-full font-playfair font-semibold text-base sm:text-lg shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:bg-brand-accent/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Suite
          </motion.button>
          <motion.button
            className="px-8 py-4 border border-white/50 text-white rounded-full font-playfair font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Speak with Concierge
          </motion.button>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              label: "Concierge",
              value: "+1 (555) 987-6543",
            },
            {
              label: "Reservations",
              value: "stay@greenbreezevilla.com",
            },
            {
              label: "Location",
              value: "123 Villa Road, Kandy",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6 text-white"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-brand-white mb-2">
                {item.label}
              </p>
              <p className="text-lg font-playfair">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

