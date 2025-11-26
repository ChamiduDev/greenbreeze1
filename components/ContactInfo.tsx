"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    label: "Concierge",
    value: "+1 (555) 987-6543",
    detail: "Available 24/7 via call or WhatsApp",
  },
  {
    label: "Reservations",
    value: "stay@greenbreezevilla.com",
    detail: "Response within 2 hours",
  },
  {
    label: "Experiences",
    value: "curator@greenbreezevilla.com",
    detail: "Custom itineraries & private events",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {contacts.map((contact, index) => (
        <motion.div
          key={contact.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-3xl border border-brand-secondary/30 bg-white/85 backdrop-blur-md p-6 shadow-[0_20px_45px_rgba(10,35,66,0.12)]"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary">
            {contact.label}
          </p>
          <p className="text-2xl font-playfair text-brand-primary my-2">
            {contact.value}
          </p>
          <p className="text-sm text-gray-600">{contact.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

