import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getRoomBySlug, rooms } from "@/data/rooms";
import RoomGallery from "@/components/RoomGallery";
import RoomHighlights from "@/components/RoomHighlights";

type RoomPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: RoomPageProps): Metadata {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    return {
      title: "Suite Not Found | Green Breeze Villa",
    };
  }

  return {
    title: `${room.name} | Green Breeze Villa`,
    description: room.tagline,
  };
}

export default function RoomPage({ params }: RoomPageProps) {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-b from-brand-white to-brand-sand">
      <section className="relative min-h-[70vh] pt-24">
        <div className="absolute inset-0">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid gap-10 lg:grid-cols-2 text-white">
          <div>
            <p className="uppercase tracking-[0.5em] text-xs text-brand-accent mb-4">
              Signature Suite
            </p>
            <h1 className="text-4xl sm:text-5xl font-playfair mb-6">
              {room.name}
            </h1>
            <p className="text-lg text-brand-white font-playfair">
              {room.tagline}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 h-fit space-y-4">
            <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-brand-accent">
              <span>From</span>
              <span>{room.price}</span>
            </div>
            <div className="grid grid-cols-3 text-center gap-4 text-sm">
              <InfoBlock label="Size" value={room.size} />
              <InfoBlock label="Guests" value={room.capacity} />
              <InfoBlock label="Beds" value={room.beds} />
            </div>
            <button className="w-full px-8 py-4 bg-white text-brand-primary rounded-full font-playfair font-semibold text-base shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition">
              Reserve {room.name}
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <p className="text-gray-700 text-lg font-playfair">
          {room.description}
        </p>

        <RoomGallery images={room.images} />

        <RoomHighlights
          highlights={room.highlights}
          amenities={room.amenities}
          services={room.services}
        />

        <div className="rounded-[32px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary text-white p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
              Bespoke Escapes
            </p>
            <h2 className="text-3xl font-playfair">
              Curate your stay with our concierge collective.
            </h2>
            <p className="text-brand-white font-playfair">
              Share your travel dates and we will tailor rituals, dining, and
              island moments unique to you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 border border-white/40 rounded-full font-playfair hover:bg-white/10 transition">
              View Availability
            </button>
            <button className="px-6 py-3 bg-white text-brand-primary rounded-full font-playfair font-semibold hover:-translate-y-0.5 transition">
              Speak with Concierge
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

type InfoBlockProps = {
  label: string;
  value: string;
};

function InfoBlock({ label, value }: InfoBlockProps) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">
        {label}
      </p>
      <p className="text-lg font-playfair text-white">{value}</p>
    </div>
  );
}

