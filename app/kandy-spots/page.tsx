"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const kandyAttractions = [
  {
    title: "Temple of the Tooth Relic",
    description: "The most sacred Buddhist site in Sri Lanka, housing the relic of the tooth of the Buddha. Located in the royal palace complex of the former Kingdom of Kandy.",
    distance: "3.5 km",
    time: "15 mins",
    image: "/temple.png",
  },
  {
    title: "Royal Botanical Gardens",
    description: "Renowned for its collection of orchids, the gardens include more than 4,000 species of plants, including spices, medicinal plants, and palm trees.",
    distance: "7.2 km",
    time: "20 mins",
    image: "/gardens.png",
  },
  {
    title: "Kandy Lake",
    description: "An artificial lake in the heart of the city built in 1807 by King Sri Wickrama Rajasinghe. Perfect for peaceful morning or evening walks.",
    distance: "3.0 km",
    time: "10 mins",
    image: "/kandy_lake.png",
  },
  {
    title: "Udawatta Kele Sanctuary",
    description: "A historic forest reserve on a hill-ridge in the city. Famous for its extensive avifauna and beautiful walking trails through dense canopy.",
    distance: "4.1 km",
    time: "18 mins",
    image: "/udawatta_kele.png",
  },
  {
    title: "Bahirawakanda Vihara",
    description: "Home to a giant Buddha statue that can be seen from almost anywhere in Kandy. Climb to the top for magnificent panoramic views of the entire city.",
    distance: "4.5 km",
    time: "15 mins",
    image: "/bahirawakanda.png",
  },
  {
    title: "Ceylon Tea Museum",
    description: "Housed in the former Hanthana Tea Factory, exhibiting vintage tea-processing machinery and offering insights into Sri Lanka's tea heritage.",
    distance: "6.8 km",
    time: "25 mins",
    image: "/tea_museum.png",
  },
  {
    title: "Ambuluwawa Tower",
    description: "A biodiversity complex and the first multi-religious sanctuary in Sri Lanka. Features a unique, spiral climbing tower with breathtaking 360-degree views.",
    distance: "25.0 km",
    time: "1 hour",
    image: "/ambuluwawa.png",
  },
  {
    title: "Hanthana Mountain Range",
    description: "A very popular hiking destination offering scenic trails, beautiful weather, and undisturbed views of the surrounding Kandy plateau.",
    distance: "8.0 km",
    time: "30 mins",
    image: "/hanthana.png",
  },
];

export default function KandySpotsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/kandy_bg.png"
            alt="Kandy Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-primary to-brand-primary/95" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="uppercase tracking-[0.4em] text-sm text-brand-secondary font-bold">
              Discover Sri Lanka&apos;s Cultural Capital
            </p>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
              Explore Kandy
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-playfair leading-relaxed">
              Surrounded by lush green mountains and tea plantations, Kandy is 
              the heart of Sri Lanka&apos;s rich cultural heritage. Discover sacred temples, 
              royal gardens, and breathtaking viewpoints just moments away from Green Breeze Villa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spots Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {kandyAttractions.map((spot, index) => (
              <motion.div
                key={spot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full">{spot.distance}</span>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{spot.time} drive</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">
                    {spot.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-playfair flex-grow">
                    {spot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600 font-playfair text-lg mb-8 max-w-2xl mx-auto">
                Ready to explore these magnificent locations? Our team at Green Breeze Villa 
                can help you arrange transportation, guided tours, and tickets.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-playfair font-semibold tracking-wide text-white uppercase transition-all duration-300 rounded-full bg-brand-primary hover:bg-brand-secondary shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Us to Arrange Tours
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
