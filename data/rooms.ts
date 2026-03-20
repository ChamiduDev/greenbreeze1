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
    slug: "comfortable-double-room",
    name: "Comfortable Double Room",
    tagline: "A peaceful stay for two with breakfast included.",
    description:
      "A cozy bedroom with everything you need for a restful night. Enjoy the quiet hilltop air and wake up to a fresh breakfast.",
    size: "Standard Size",
    capacity: "2 guests",
    beds: "1 Large Double Bed",
    price: "Rs. 9,500 / night",
    images: ["/room2.jpeg", "/4.jpeg", "/3.jpeg", "/1.jpeg", "/5.jpeg", "/6.jpeg", "/room3.jpeg", "/pool.jpeg"],
    highlights: [
      {
        title: "Attached Bathroom",
        description: "Private bathroom with hot water facility.",
      },
      {
        title: "Modern Comforts",
        description: "Includes TV and Free WiFi to keep you connected.",
      },
      {
        title: "Breakfast Included",
        description: "Start your day with a delicious local breakfast.",
      },
    ],
    amenities: [
      "Comfortable large bed",
      "Attached bathroom",
      "Hot water facility",
      "TV with local channels",
      "Free high-speed WiFi",
    ],
    services: [
      "Daily room cleaning",
      "Helpful staff available",
      "Tour planning help",
      "Fresh towels",
    ],
  },
  {
    slug: "full-private-villa",
    name: "Full Private Villa",
    tagline: "The perfect group getaway for up to 6 people.",
    description:
      "Have the entire villa to yourselves! Perfect for families or friends who want a private place to relax, BBQ, and enjoy the pool.",
    size: "Whole Property",
    capacity: "Up to 6 guests",
    beds: "3 Comfortable Bedrooms",
    price: "Rs. 20,000 / night",
    images: ["/room3.jpeg", "/room2.jpeg", "/pool.jpeg", "/5.jpeg"],
    highlights: [
      {
        title: "Entire House",
        description: "3 bedrooms, all with attached bathrooms and hot water.",
      },
      {
        title: "Private Fun",
        description: "Full access to the swimming pool, BBQ, and fire area.",
      },
      {
        title: "Nature & Peace",
        description: "Located in a very quiet area with butterflies and birds all around.",
      },
    ],
    amenities: [
      "3 Private bedrooms",
      "Swimming pool access",
      "Fire area for night chats",
      "BBQ facility",
      "Fish therapy pool",
      "Free WiFi and TV",
    ],
    services: [
      "Private villa host",
      "Kitchen use allowed",
      "Firewood for the fire area",
      "Safe parking space",
    ],
  },
];

export const getRoomBySlug = (slug: string) =>
  rooms.find((room) => room.slug === slug);
