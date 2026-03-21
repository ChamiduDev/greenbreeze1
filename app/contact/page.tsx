"use client";

import ContactInfo from "@/components/ContactInfo";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-sand min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-brand-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 bg-brand-secondary/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.5em] text-xs text-brand-accent font-semibold"
          >
            Concierge Collective
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-playfair font-bold mb-6"
          >
            We design every stay around you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-white font-playfair max-w-3xl mx-auto"
          >
            Share your ideal dates, celebrations, or inspirations—our concierge
            will reply with bespoke recommendations within hours.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20 space-y-10 sm:space-y-12">
        <ContactInfo />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="bg-white/90 backdrop-blur-sm rounded-[32px] border border-brand-secondary/30 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(10,35,66,0.12)]">
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
              <p className="text-sm text-brand-secondary font-playfair text-center sm:text-left">
                Our concierge replies between 06:00–23:00 GMT+5.
              </p>
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-primary text-white font-semibold shadow-[0_20px_40px_rgba(10,35,66,0.4)] hover:-translate-y-0.5 transition">
                Send Message
              </button>
            </div>
          </form>

          <div className="rounded-[32px] border border-brand-secondary/30 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-accent">
              Visit Us
            </p>
            <h3 className="text-2xl sm:text-3xl font-playfair">
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
              <p>WhatsApp Concierge: +94 74 269 2494</p>
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
    <label className="flex flex-col space-y-2 text-sm font-medium text-brand-primary w-full overflow-hidden">
      <span className="uppercase tracking-[0.3em] text-xs text-brand-secondary break-words">
        {label}
      </span>
      {children}
    </label>
  );
}

