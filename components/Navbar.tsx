"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { rooms } from "@/data/rooms";

const heroRoomSlug = rooms[0]?.slug ?? "emerald-grand-suite";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md"
          : "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Green Breeze Villa Logo"
              width={150}
              height={150}
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? "w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  : "w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { label: "Home", href: "/" },
              { label: "Suites", href: `/rooms/${heroRoomSlug}` },
              { label: "Amenities", href: "/amenities" },
              { label: "Events", href: "/#events-calendar", isAnchor: true },
              { label: "Booking", href: "/booking" },
              { label: "Contact", href: "/contact" },
            ].map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href.startsWith("/#")) {
                        const hash = link.href.split("#")[1];
                        // If we're on the home page, scroll to the section
                        if (window.location.pathname === "/") {
                          const element = document.getElementById(hash);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        } else {
                          // If we're on another page, navigate to home with hash
                          window.location.href = link.href;
                        }
                      }
                    }}
                    className={`font-playfair font-medium transition-colors ${
                      isScrolled
                        ? "text-brand-primary hover:text-brand-secondary"
                        : "text-white hover:text-brand-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-playfair font-medium transition-colors ${
                    isScrolled
                      ? "text-brand-primary hover:text-brand-secondary"
                      : "text-white hover:text-brand-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Book Now Button */}
          <Link
            href="/booking"
            className={`hidden lg:inline-block px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-playfair font-semibold transition-colors shadow-lg ${
              isScrolled
                ? "bg-brand-secondary text-white hover:bg-brand-secondary"
                : "bg-white text-brand-primary hover:bg-brand-accent/10"
            }`}
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled
                ? "text-brand-primary hover:text-brand-secondary"
                : "text-white hover:text-brand-accent"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-4 space-y-4 ${
              isScrolled
                ? "bg-white"
                : "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary"
            }`}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Suites", href: `/rooms/${heroRoomSlug}` },
              { label: "Amenities", href: "/amenities" },
              { label: "Events", href: "/#events-calendar", isAnchor: true },
              { label: "Booking", href: "/booking" },
              { label: "Contact", href: "/contact" },
            ].map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      if (link.href.startsWith("/#")) {
                        const hash = link.href.split("#")[1];
                        // If we're on the home page, scroll to the section
                        if (window.location.pathname === "/") {
                          const element = document.getElementById(hash);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        } else {
                          // If we're on another page, navigate to home first
                          window.location.href = link.href;
                        }
                      }
                    }}
                    className={`block px-4 py-2 font-playfair font-medium transition-colors ${
                      isScrolled
                        ? "text-brand-primary hover:text-brand-secondary hover:bg-brand-accent/10"
                        : "text-white hover:text-brand-accent hover:bg-brand-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 font-playfair font-medium transition-colors ${
                    isScrolled
                      ? "text-brand-primary hover:text-brand-secondary hover:bg-brand-accent/10"
                      : "text-white hover:text-brand-accent hover:bg-brand-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <Link
                href="/booking"
                className={`w-full inline-flex justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-playfair font-semibold text-sm sm:text-base transition-colors shadow-lg ${
                  isScrolled
                    ? "bg-brand-secondary text-white hover:bg-brand-secondary"
                    : "bg-white text-brand-primary hover:bg-brand-accent/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

