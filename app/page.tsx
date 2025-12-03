"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Rooms from "@/components/Rooms";
import KandyEventsCalendar from "@/components/KandyEventsCalendar";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  useEffect(() => {
    // Handle scroll to section when page loads with hash
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    handleHashScroll();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-sand to-brand-white">
      <Hero />

      <WhyChoose />

      <Rooms />

      <KandyEventsCalendar />

      <CallToAction />
    </main>
  );
}

