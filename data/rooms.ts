export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  capacity: string;
  beds: string;
  price: string;
  images: string[];
  highlights: {
    title: string;
    description: string;
  }[];
  amenities: string[];
  services: string[];
};

export const rooms: Room[] = [
  {
    slug: "emerald-grand-suite",
    name: "Emerald Grand Suite",
    tagline: "Panoramic rainforest vistas with private plunge pool",
    description:
      "An expansive sanctuary curated with Italian linens, custom teak furnishings, and floor-to-ceiling glass that frames the emerald canopy.",
    size: "1,600 sq ft",
    capacity: "Up to 3 guests",
    beds: "1 King Bed + Day Lounger",
    price: "From $899/night",
    images: ["/room1.png", "/room2.png", "/hero.png"],
    highlights: [
      {
        title: "Private Plunge Pool",
        description: "Heated basalt-lined plunge pool overlooking tropical gardens.",
      },
      {
        title: "Bespoke Bar",
        description: "Curated artisan spirits and botanicals tailored to your palate.",
      },
      {
        title: "Poolside BBQ Pavilion",
        description: "Dedicated grill terrace with chef service for twilight feasts.",
      },
    ],
    amenities: [
      "Sunken living salon",
      "Air-conditioned master suite",
      "Poolside daybeds with cabana fans",
      "Dedicated BBQ deck",
      "Complimentary sunset canapés",
    ],
    services: [
      "Private chauffered transfers",
      "Daily pressed garments",
      "Custom pillow atelier",
      "Personalized island itinerary",
    ],
  },
  {
    slug: "tropical-villa-residence",
    name: "Tropical Villa Residence",
    tagline: "Two-bedroom villa wrapped in gardens and reflection pools",
    description:
      "Seamless indoor-outdoor living with a dining pavilion, dedicated butler pantry, and fragrant frangipani courtyards.",
    size: "2,400 sq ft",
    capacity: "Up to 5 guests",
    beds: "2 King Suites",
    price: "From $1,250/night",
    images: ["/room2.png", "/room1.png", "/hero.png"],
    highlights: [
      {
        title: "Garden Pavilion",
        description: "Alfresco dining with overhead fans and curated playlists.",
      },
      {
        title: "Dual Rain Showers",
        description: "Twin outdoor rain showers framed by candlelit pools.",
      },
      {
        title: "Concierge Pantry",
        description: "On-demand mixology, patisserie, and tailored amenities.",
      },
    ],
    amenities: [
      "Private infinity lap pool",
      "Outdoor cinema setup",
      "Dedicated host team",
      "Chef-crafted breakfast in villa",
      "Bamboo bicycles for island rides",
    ],
    services: [
      "Custom fragrance bar",
      "In-villa fitness instructors",
      "Heliport access",
      "VIP departure lounge",
    ],
  },
];

export const getRoomBySlug = (slug: string) =>
  rooms.find((room) => room.slug === slug);

