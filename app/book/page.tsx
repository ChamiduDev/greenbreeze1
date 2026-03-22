import BookingForm from "@/components/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay | Green Breeze Villa",
  description: "Customize your perfect hilltop escape. Select your package and add curated traditional experiences.",
};

export default function BookPage() {
  return (
    <main className="bg-brand-sand min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header section */}
        <div className="max-w-3xl space-y-6">
          <p className="uppercase tracking-[0.6em] text-[10px] sm:text-xs text-brand-secondary font-bold">
            Curated Escapes
          </p>
          <h1 className="text-4xl sm:text-6xl font-playfair text-brand-primary leading-tight">
            Reserve your hilltop <span className="italic">moment.</span>
          </h1>
          <p className="text-lg text-brand-primary/60 font-playfair max-w-xl leading-relaxed">
            Choose your signature package and personalize your stay with our traditional 
            Sinhala Ayurvedic treatments, fish therapy, and private BBQ experiences.
          </p>
        </div>

        {/* Form section */}
        <BookingForm />

      </div>
    </main>
  );
}
