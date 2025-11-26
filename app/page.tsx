import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Rooms from "@/components/Rooms";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-sand to-brand-white">
      <Hero />

      <WhyChoose />

      <Rooms />

      <CallToAction />
    </main>
  );
}

