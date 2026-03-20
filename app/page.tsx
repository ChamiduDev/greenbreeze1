"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Rooms from "@/components/Rooms";
import KandyExploration from "@/components/KandyExploration";
import HomeGallery from "@/components/HomeGallery";
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
            const offset = 80;
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
    <main className="min-h-screen bg-white">
      {/* 1. Hero & Welcome */}
      <Hero />

      {/* 2. Value Prop */}
      <WhyChoose />

      {/* 3. Our Signature Rooms (User priority 1) */}
      <Rooms />

      {/* 4. Gallery (User priority 2) */}
      <HomeGallery />

      {/* 5. Things to See and Do (User priority 3) */}
      <KandyExploration />

      {/* 6. Events Calendar (User priority 4) */}
      <KandyEventsCalendar />

      {/* 7. Final Call to Action */}
      <CallToAction />
    </main>
  );
}
