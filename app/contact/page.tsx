"use client";

import ContactInfo from "@/components/ContactInfo";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-brand-sand via-brand-white to-brand-sand">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.5em] text-xs text-brand-secondary"
        >
          Concierge Collective
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-playfair text-brand-primary"
        >
          We design every stay around you
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 font-playfair"
        >
          Share your ideal dates, celebrations, or inspirations—our concierge
          will reply with bespoke recommendations within hours.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        <ContactInfo />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="bg-white/90 backdrop-blur-sm rounded-[32px] border border-brand-secondary/30 p-8 space-y-6 shadow-[0_25px_60px_rgba(10,35,66,0.12)]">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full Name">
                <input
                  type="text"
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Phone Number">
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
              <Field label="Preferred Villa / Suite">
                <input
                  type="text"
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
            </div>
            <Field label="Desired Dates">
              <input
                type="text"
                placeholder="e.g., June 14 - June 20"
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
              />
            </Field>
            <Field label="Your Message">
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
              />
            </Field>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
              <p className="text-sm text-brand-secondary font-playfair">
                Our concierge replies between 06:00–23:00 GMT+5.
              </p>
              <button className="px-8 py-3 rounded-full bg-brand-primary text-white font-semibold shadow-[0_20px_40px_rgba(10,35,66,0.4)] hover:-translate-y-0.5 transition">
                Send Message
              </button>
            </div>
          </form>

          <div className="rounded-[32px] border border-brand-secondary/30 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-accent">
              Visit Us
            </p>
            <h3 className="text-3xl font-playfair">
              123 Villa Road, Kandy
            </h3>
            <p className="text-brand-white font-playfair">
              Floatplane arrivals from Malé (35 mins) • Private yacht jetty •
              Helipad upon request.
            </p>
            <div className="rounded-3xl overflow-hidden border border-white/20">
              <div className="relative h-56">
                <iframe
                  title="Green Breeze Villa map preview"
                  src="https://maps.google.com/maps?q=Green%20Breeze%20Villa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.app.goo.gl/rGJyPFg5sq1F9PkG9"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-brand-primary/70 px-4 py-2 text-xs uppercase tracking-[0.3em] hover:bg-white/15 transition"
                >
                  Open Full Map
                </a>
              </div>
            </div>
            <div className="space-y-3 text-brand-white">
              <p>Check-in from 3pm • Late departures hosted at our private lounge</p>
              <p>WhatsApp Concierge: +1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label, children }: FieldProps) {
  return (
    <label className="space-y-2 text-sm font-medium text-brand-primary">
      <span className="uppercase tracking-[0.3em] text-xs text-brand-secondary">
        {label}
      </span>
      {children}
    </label>
  );
}

