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
    slug: "couple-package",
    name: "Couple Package",
    tagline: "A romantic and peaceful getaway for two with breakfast included.",
    description:
      "Our Couple Package is perfectly tailored for a quiet hilltop retreat, offering an intimate atmosphere for two. This package includes a comfortable bedroom with an attached bathroom featuring hot and cold water. Stay connected with free high-speed WiFi and start your day with a delicious local breakfast prepared with fresh ingredients, all while enjoying the serene hilltop breeze and complete access to our signature swimming pool.",
    size: "Suite for Two",
    capacity: "2 Guests",
    beds: "1 Large Double Bed",
    price: "Rs. 9,500",
    images: [
      "/double_room/double_1.jpeg",
      "/double_room/double_2.jpeg",
      "/double_room/double_3.jpeg",
      "/double_room/double_4.jpeg",
      "/double_room/double_5.jpeg",
      "/double_room/double_6.jpeg",
      "/double_room/double_7.jpeg",
    ],
    highlights: [
      {
        title: "Hilltop Pool",
        description: "Full access to the swimming pool for a refreshing stay.",
      },
      {
        title: "Breakfast Included",
        description: "Wake up to a delicious local breakfast prepared just for you.",
      },
      {
        title: "Modern Comfort",
        description: "Attached bathroom with hot water, TV, and high-speed WiFi.",
      },
    ],
    amenities: [
      "Large double bed",
      "Attached bathroom",
      "Swimming pool access",
      "Free high-speed WiFi",
      "TV with local channels",
      "Hot water facility",
    ],
    services: [
      "Daily room cleaning",
      "Concierge assistance",
      "Fresh towels",
      "Security & Privacy",
    ],
  },
  {
    slug: "full-board-package",
    name: "Full Board Package",
    tagline: "Total relaxation for two including all your meals and pool access.",
    description:
      "Experience total relaxation and let our team handle everything. The Full Board Package for two includes a comprehensive meal plan with breakfast, lunch, and dinner, all prepared in-house featuring authentic local flavors. Guests will enjoy a spacious suite equipped with an attached bathroom and private hot water facilities. This package provides unlimited access to the swimming pool and wellness area, plus free high-speed WiFi throughout your stay for a truly restorative experience.",
    size: "Full Board Suite",
    capacity: "2 Guests",
    beds: "Luxury Bedding",
    price: "Rs. 15,000",
    images: [
      "/upper/upper_1.jpeg",
      "/upper/upper_2.jpeg",
      "/upper/upper_3.jpeg",
      "/upper/upper_4.jpeg",
      "/upper/upper_5.jpeg",
      "/upper/upper_6.jpeg",
      "/upper/upper_7.jpeg",
      "/upper/upper_8.jpeg",
      "/upper/upper_9.jpeg",
      "/upper/upper_10.jpeg",
    ],
    highlights: [
      {
        title: "All Meals Included",
        description: "Enjoy breakfast, lunch, and dinner prepared in-house.",
      },
      {
        title: "Complete Refreshment",
        description: "Full access to the swimming and wellness pools.",
      },
      {
        title: "Premium Living",
        description: "Complete privacy with attached bathroom and unlimited WiFi.",
      },
    ],
    amenities: [
      "Luxury bedroom bedding",
      "Full board dining (Breakfast, Lunch, Dinner)",
      "Swimming pool access",
      "Attached bathroom",
      "Free high-speed WiFi",
      "Hot water & Entertainment",
    ],
    services: [
      "Priority meal service",
      "Daily refreshment stock",
      "Premium linens",
      "Hilltop concierge",
    ],
  },
  {
    slug: "full-private-villa",
    name: "Full Private Villa",
    tagline: "The absolute premium hilltop buyout for groups of 7.",
    description:
      "For the ultimate villa escape, book the entire Green Breeze property for your exclusive use. Ideal for families and groups of up to 7, this Full Board villa buyout includes breakfast, lunch, and dinner for the whole party. Your stay features complete private access to all villa facilities, including the swimming pool, BBQ area, and hilltop fire area. Each bedroom provides an attached bathroom with hot water and free WiFi, ensuring a comfortable and memorable group retreat.",
    size: "Whole Property",
    capacity: "Up to 7 Guests",
    beds: "3 Large Bedrooms",
    price: "Rs. 20,000",
    images: ["/room3.jpeg", "/room2.jpeg", "/pool.jpeg", "/5.jpeg"],
    highlights: [
      {
        title: "Full Property Buyout",
        description: "The entire villa is yours for maximum privacy.",
      },
      {
        title: "Group Full Board",
        description: "Daily breakfast, lunch, and dinner included for every guest.",
      },
      {
        title: "Complete Amenities",
        description: "Private pool, fire area, BBQ, and high-speed WiFi throughout.",
      },
    ],
    amenities: [
      "Entire Hilltop Villa",
      "Private swimming pool",
      "Full Board Meals (B, L, D)",
      "Fire area for social nights",
      "BBQ facilities",
      "Attached bathrooms & WiFi",
    ],
    services: [
      "Private property host",
      "Dedicated kitchen staff",
      "Firewood preparation",
      "Gated safe parking",
    ],
  },
];

export const getRoomBySlug = (slug: string) =>
  rooms.find((room) => room.slug === slug);
