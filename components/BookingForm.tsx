"use client";

import { useMemo, useState } from "react";
import { rooms } from "@/data/rooms";

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

const enhancements = [
  "In-villa dining ritual",
  "Private sunset yacht",
  "Custom floral welcome",
  "Poolside BBQ feast",
];

export default function BookingForm() {
  const [step, setStep] = useState(0);
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
    const start = new Date(data.arrival).getTime();
    const end = new Date(data.departure).getTime();
    const diff = end - start;
    if (diff <= 0) return 0;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [data.arrival, data.departure]);

  const selectedSuite = rooms.find((room) => room.slug === data.suite);

  const updateField =
    <K extends keyof BookingData>(field: K) =>
    (value: BookingData[K]) => {
      setData((prev) => ({ ...prev, [field]: value }));
    };

  const toggleEnhancement = (value: string) => {
    setData((prev) => ({
      ...prev,
      enhancements: prev.enhancements.includes(value)
        ? prev.enhancements.filter((item) => item !== value)
        : [...prev.enhancements, value],
    }));
  };

  const steps = ["Journey Details", "Your Party", "Enhancements"];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="bg-white/90 backdrop-blur-sm rounded-[32px] border border-brand-secondary/30 p-8 space-y-8 shadow-[0_25px_60px_rgba(12,79,56,0.08)]">
        <div className="flex flex-wrap gap-4">
          {steps.map((label, index) => (
            <button
              type="button"
              key={label}
              className={`flex-1 min-w-[120px] rounded-full border px-4 py-2 text-sm font-semibold transition ${
                step === index
                  ? "bg-brand-primary text-white border-brand-primary"
                  : "border-brand-secondary/30 text-brand-secondary hover:bg-brand-accent/10"
              }`}
              onClick={() => setStep(index)}
            >
              {label}
            </button>
          ))}
        </div>

        {step === 0 && (
          <div className="space-y-6">
            <Field label="Preferred Suite">
              <select
                value={data.suite}
                onChange={(e) => updateField("suite")(e.target.value)}
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3 text-brand-primary"
              >
                {rooms.map((room) => (
                  <option key={room.slug} value={room.slug}>
                    {room.name}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Arrival">
                <input
                  type="date"
                  value={data.arrival}
                  onChange={(e) => updateField("arrival")(e.target.value)}
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
              <Field label="Departure">
                <input
                  type="date"
                  value={data.departure}
                  onChange={(e) => updateField("departure")(e.target.value)}
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
            </div>
            <Field label="Guests">
              <input
                type="number"
                min={1}
                max={6}
                value={data.guests}
                onChange={(e) =>
                  updateField("guests")(Number(e.target.value) || 1)
                }
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <Field label="Full Name">
              <input
                type="text"
                value={data.name}
                onChange={(e) => updateField("name")(e.target.value)}
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email">
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField("email")(e.target.value)}
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateField("phone")(e.target.value)}
                  className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
                />
              </Field>
            </div>
            <Field label="Special Notes">
              <textarea
                rows={4}
                value={data.notes}
                onChange={(e) => updateField("notes")(e.target.value)}
                className="w-full rounded-2xl border border-brand-secondary/30 bg-white/80 px-4 py-3"
              />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm text-brand-secondary">
              Select enhancements to personalize your stay.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {enhancements.map((item) => (
                <label
                  key={item}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium cursor-pointer transition ${
                    data.enhancements.includes(item)
                      ? "bg-brand-primary text-white border-brand-primary"
                      : "border-brand-secondary/30 text-brand-secondary hover:bg-brand-accent/10"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={data.enhancements.includes(item)}
                    onChange={() => toggleEnhancement(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <p className="text-sm text-brand-secondary font-playfair">
            We respond within 2 hours with tailored availability.
          </p>
          <button
            type="button"
            className="px-6 py-3 rounded-full border border-brand-secondary/30 text-brand-primary font-semibold hover:bg-brand-accent/10 transition"
            onClick={() => setStep(Math.max(step - 1, 0))}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-brand-primary text-white font-semibold shadow-[0_20px_40px_rgba(12,79,56,0.4)] hover:-translate-y-0.5 transition"
            onClick={(e) => {
              e.preventDefault();
              setStep(Math.min(step + 1, steps.length - 1));
            }}
          >
            {step === steps.length - 1 ? "Submit Request" : "Next Step"}
          </button>
        </div>
      </form>

      <aside className="rounded-[32px] bg-brand-primary text-white p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
          Stay Summary
        </p>
        <h3 className="text-3xl font-playfair">{selectedSuite?.name}</h3>
        <p className="text-brand-white">{selectedSuite?.tagline}</p>

        <div className="grid grid-cols-3 gap-4 text-center py-4 border-y border-white/10">
          <SummaryItem label="Arrival" value={data.arrival || "TBD"} />
          <SummaryItem label="Nights" value={nights ? `${nights}` : "-"} />
          <SummaryItem label="Guests" value={`${data.guests}`} />
        </div>

        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">
            Enhancements
          </p>
          {data.enhancements.length ? (
            <ul className="space-y-2 text-brand-white">
              {data.enhancements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-brand-white text-sm">
              Select bespoke touches to elevate your stay.
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-white/10 p-5 space-y-2">
          <p className="text-sm text-brand-accent uppercase tracking-[0.3em]">
            Estimated Rate
          </p>
          <p className="text-3xl font-playfair">{selectedSuite?.price}</p>
          {nights > 1 && (
            <p className="text-sm text-brand-white">
              Indicative for {nights} {nights === 1 ? "night" : "nights"}. Final
              quote shared by concierge.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label, children }: FieldProps) {
  return (
    <label className="space-y-2 text-sm font-medium text-brand-primary">
      <span className="uppercase tracking-[0.3em] text-xs text-brand-secondary">
        {label}
      </span>
      {children}
    </label>
  );
}

type SummaryItemProps = {
  label: string;
  value: string;
};

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">
        {label}
      </p>
      <p className="text-lg font-playfair">{value}</p>
    </div>
  );
}

