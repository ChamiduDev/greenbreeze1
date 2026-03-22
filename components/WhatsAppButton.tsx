"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-5 py-3 border border-brand-primary/5"
          >
            <p className="text-xs text-brand-primary/50 uppercase tracking-widest font-bold mb-0.5">Chat with us</p>
            <p className="text-sm font-playfair text-brand-primary font-bold whitespace-nowrap">+94 74 269 2494</p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/94742692494"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] transition-shadow"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 2.667A13.26 13.26 0 0 0 2.72 15.893a13.16 13.16 0 0 0 1.788 6.627L2.667 29.333l7.027-1.813A13.33 13.33 0 0 0 16.004 29.4c7.353 0 13.33-5.977 13.33-13.333 0-7.36-5.977-13.4-13.33-13.4Zm0 24.4a10.97 10.97 0 0 1-5.587-1.52l-.4-.24-4.16 1.093 1.12-4.08-.267-.42a10.93 10.93 0 0 1-1.68-5.84c0-6.067 4.94-11 11-11 6.053 0 11.067 4.933 11.067 11-.004 6.067-5.02 11.007-11.093 11.007Zm6.027-8.24c-.333-.167-1.96-.967-2.267-1.08-.307-.107-.527-.167-.747.167-.22.333-.86 1.08-1.053 1.3-.193.22-.393.247-.727.08-.333-.167-1.407-.52-2.68-1.653-.993-.88-1.66-1.973-1.853-2.307-.193-.333-.02-.513.147-.68.147-.147.333-.387.5-.58.167-.193.22-.333.333-.553.113-.22.06-.413-.027-.58-.08-.167-.747-1.8-1.02-2.467-.267-.647-.54-.56-.747-.567l-.64-.013a1.22 1.22 0 0 0-.887.413c-.307.333-1.16 1.133-1.16 2.767 0 1.633 1.187 3.213 1.353 3.433.167.22 2.34 3.567 5.667 5 .793.34 1.413.547 1.893.7.793.253 1.52.22 2.093.133.64-.1 1.96-.8 2.24-1.573.28-.773.28-1.44.193-1.573-.08-.14-.3-.22-.633-.387Z" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
