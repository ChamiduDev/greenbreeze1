"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = ["About Us", "Rooms", "Amenities", "Dining", "Contact"];
const experiences = [
  "Sunset Yacht Cruises",
  "Private Pool Evenings",
  "Garden BBQ Tables",
  "Cultural Excursions",
];
const socials = ["Facebook", "Instagram", "Twitter", "Pinterest"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 bg-brand-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 bg-brand-secondary/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Green Breeze Villa"
                width={110}
                height={110}
                className="drop-shadow-[0_6px_12px_rgba(255,255,255,0.45)]"
              />
            </div>
            <p className="text-brand-white font-playfair">
              A private sanctuary where tropical botanicals, curated design, and bespoke service converge.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-sm text-brand-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-colors font-playfair"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-sm text-brand-accent mb-4">
              Experiences
            </h4>
            <ul className="space-y-3 text-white/80 font-playfair">
              {experiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="uppercase tracking-[0.3em] text-sm text-brand-accent mb-3">
                Reservations
              </h4>
              <p className="font-playfair text-lg">+1 (555) 123-4567</p>
              <p className="text-brand-white font-playfair">
                stay@greenbreezevilla.com
              </p>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.3em] text-sm text-brand-accent mb-3">
                Visit Us
              </h4>
              <p className="font-playfair text-white/80">
                123 Villa Road,kandy, Sri lanka
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social}
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-brand-white text-sm tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} Green Breeze Villa — Crafted for the discerning traveler.
        </div>
      </div>
    </footer>
  );
}

