"use client";

import { useMemo, useState } from "react";
import { rooms } from "@/data/rooms";
import Image from "next/image";

type BookingData = {
  suite: string;
  arrival: string;
  departure: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
  enhancements: string[];
};

const ENHANCEMENTS = [
  { id: "ayurveda", name: "Ayurveda Treatment", price: 18000 },
  { id: "fish", name: "Fish Therapy", price: 1000 },
  { id: "bbq", name: "Kitchen and BBQ", price: 3000 },
  { id: "lunch", name: "Sri Lankan Food (Lunch for 2)", price: 3000 },
];

export default function BookingForm() {
  const [data, setData] = useState<BookingData>({
    suite: rooms[0]?.slug ?? "",
    arrival: "",
    departure: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
    enhancements: [],
  });

  const nights = useMemo(() => {
    if (!data.arrival || !data.departure) return 0;
    const diff = new Date(data.departure).getTime() - new Date(data.arrival).getTime();
    return diff > 0 ? Math.ceil(diff / 86400000) : 0;
  }, [data.arrival, data.departure]);

  const selectedSuite = rooms.find((r) => r.slug === data.suite) || rooms[0];

  const basePrice = parseInt(selectedSuite.price.replace(/[^\d]/g, ""));

  const enhancementsTotal = useMemo(
    () =>
      data.enhancements.reduce((sum, id) => {
        const e = ENHANCEMENTS.find((x) => x.id === id);
        return sum + (e?.price || 0);
      }, 0),
    [data.enhancements]
  );

  const totalPrice = basePrice * (nights || 1) + enhancementsTotal;

  const update = <K extends keyof BookingData>(key: K, val: BookingData[K]) =>
    setData((prev) => ({ ...prev, [key]: val }));

  const toggleEnhancement = (id: string) =>
    setData((prev) => ({
      ...prev,
      enhancements: prev.enhancements.includes(id)
        ? prev.enhancements.filter((x) => x !== id)
        : [...prev.enhancements, id],
    }));

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      {/* ── LEFT: Form ─────────────────────────────── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Booking request received! Our team will contact you shortly.");
        }}
        className="bg-white/90 backdrop-blur-sm rounded-[32px] border border-brand-secondary/30 p-6 sm:p-8 space-y-8 shadow-[0_25px_60px_rgba(10,35,66,0.12)]"
      >
        {/* Package Selection */}
        <div className="space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-brand-secondary font-semibold">
            Choose Your Package
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {rooms.map((room) => (
              <button
                type="button"
                key={room.slug}
                onClick={() => update("suite", room.slug)}
                className={`relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                  data.suite === room.slug
                    ? "border-brand-secondary bg-brand-secondary/5 shadow-md"
                    : "border-brand-secondary/20 bg-white hover:border-brand-secondary/40"
                }`}
              >
                {data.suite === room.slug && (
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                )}
                <h4 className="font-playfair font-bold text-brand-primary text-sm leading-tight">
                  {room.name}
                </h4>
                <p className="text-xs text-brand-accent font-bold mt-1">
                  {room.price}
                </p>
                <p className="text-[10px] text-brand-primary/40 mt-1">
                  {room.capacity}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Dates & Guests */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Arrival Date">
            <input
              type="date"
              value={data.arrival}
              onChange={(e) => update("arrival", e.target.value)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
          <Field label="Departure Date">
            <input
              type="date"
              value={data.departure}
              onChange={(e) => update("departure", e.target.value)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Full Name">
            <input
              type="text"
              placeholder="Your name"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
          <Field label="Guests">
            <input
              type="number"
              min={1}
              max={7}
              value={data.guests}
              onChange={(e) => update("guests", Number(e.target.value) || 1)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Email Address">
            <input
              type="email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
          <Field label="Phone Number">
            <input
              type="tel"
              placeholder="+94 XX XXX XXXX"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition"
            />
          </Field>
        </div>

        {/* Enhancements */}
        <div className="space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-brand-secondary font-semibold">
            Add Enhancements
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {ENHANCEMENTS.map((item) => {
              const active = data.enhancements.includes(item.id);
              return (
                <label
                  key={item.id}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 cursor-pointer transition-all duration-300 ${
                    active
                      ? "border-brand-secondary bg-brand-secondary/5"
                      : "border-brand-secondary/20 bg-white hover:border-brand-secondary/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${
                        active
                          ? "border-brand-secondary bg-brand-secondary"
                          : "border-brand-primary/20"
                      }`}
                    >
                      {active && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm font-medium text-brand-primary">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-secondary whitespace-nowrap">
                    Rs. {item.price.toLocaleString()}
                  </span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={active}
                    onChange={() => toggleEnhancement(item.id)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <Field label="Special Requests">
          <textarea
            rows={3}
            placeholder="Dietary needs, celebrations, arrival time..."
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary focus:border-brand-secondary outline-none transition resize-none"
          />
        </Field>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <p className="text-sm text-brand-secondary font-playfair text-center sm:text-left">
            We respond within 2 hours.
          </p>
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-brand-primary text-white font-semibold shadow-[0_20px_40px_rgba(10,35,66,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Send Booking Request
          </button>
        </div>
      </form>

      {/* ── RIGHT: Summary ─────────────────────────── */}
      <div className="rounded-[32px] border border-brand-secondary/30 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)] h-fit lg:sticky lg:top-24">
        <p className="uppercase tracking-[0.4em] text-xs text-brand-accent">
          Booking Summary
        </p>
        <h3 className="text-2xl sm:text-3xl font-playfair">
          {selectedSuite.name}
        </h3>

        {/* Selected Image */}
        <div className="relative h-40 rounded-3xl overflow-hidden border border-white/20">
          <Image
            src={selectedSuite.images[0]}
            alt={selectedSuite.name}
            fill
            className="object-cover"
            sizes="400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute bottom-3 left-4 text-xs text-white/80 font-playfair italic">
            {selectedSuite.tagline}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 text-center border-y border-white/10 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Nights</p>
            <p className="text-lg font-playfair">{nights || "—"}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Guests</p>
            <p className="text-lg font-playfair">{data.guests}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Package</p>
            <p className="text-lg font-playfair">{selectedSuite.price}</p>
          </div>
        </div>

        {/* Enhancements Breakdown */}
        {data.enhancements.length > 0 && (
          <div className="space-y-3">
            <p className="uppercase tracking-[0.4em] text-xs text-brand-accent">
              Enhancements
            </p>
            <ul className="space-y-2">
              {data.enhancements.map((id) => {
                const item = ENHANCEMENTS.find((x) => x.id === id);
                return (
                  <li key={id} className="flex justify-between text-sm">
                    <span className="text-brand-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {item?.name}
                    </span>
                    <span className="text-white/60">
                      Rs. {item?.price.toLocaleString()}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Total */}
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold mb-2">
            Estimated Total
          </p>
          <p className="text-3xl sm:text-4xl font-playfair font-bold">
            Rs. {totalPrice.toLocaleString()}
          </p>
          <p className="text-xs text-brand-white/50 mt-2 font-playfair">
            {nights > 0
              ? `${selectedSuite.price} × ${nights} night${nights > 1 ? "s" : ""}${enhancementsTotal > 0 ? ` + Rs. ${enhancementsTotal.toLocaleString()} extras` : ""}`
              : "Select dates for full breakdown"}
          </p>
        </div>

        <p className="text-xs text-brand-white/40 text-center font-playfair">
          WiFi & attached bathrooms included with every package.
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col space-y-2 text-sm font-medium text-brand-primary w-full overflow-hidden">
      <span className="uppercase tracking-[0.3em] text-xs text-brand-secondary break-words">
        {label}
      </span>
      {children}
    </label>
  );
}
