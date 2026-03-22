"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { rooms } from "@/data/rooms";

const heroRoomSlug = rooms[0]?.slug ?? "emerald-grand-suite";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Suites", href: `/rooms/${heroRoomSlug}` },
  { label: "Amenities", href: "/amenities" },
  { label: "Events", href: "/#events-calendar", isAnchor: true },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-2 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(10,35,66,0.05)]"
        : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
                y: isScrolled ? 0 : 2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              {/* Soft Radial Spotlight for Transparent Logo Visibility */}
              {!isScrolled && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-white/30 blur-[100px] rounded-full pointer-events-none" />
              )}
              <Image
                src="/logo.png"
                alt="Green Breeze Villa Logo"
                width={160}
                height={160}
                className={`relative z-10 object-contain transition-all duration-300 ${isScrolled
                  ? "w-20 sm:w-24 drop-shadow-[0_4px_12px_rgba(10,35,66,0.1)] brightness-100"
                  : "w-28 sm:w-36 drop-shadow-[0_4px_24px_rgba(255,255,255,0.4)] brightness-110"
                  }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} link={link} isScrolled={isScrolled} />
            ))}
          </div>

          {/* User Actions & Book Button */}
          <div className="flex items-center space-x-6">
            <Link
              href="/booking"
              className="relative hidden lg:inline-flex group overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 rounded-full font-playfair font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl ${isScrolled
                  ? "bg-brand-primary text-white hover:bg-brand-secondary shadow-brand-primary/20"
                  : "bg-white text-brand-primary hover:bg-brand-accent/10 shadow-white/10"
                  }`}
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled
                ? "text-brand-primary hover:bg-brand-primary/5"
                : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full ${isScrolled ? "bg-brand-primary" : "bg-white"}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-full h-0.5 rounded-full ${isScrolled ? "bg-brand-primary" : "bg-white"}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full ${isScrolled ? "bg-brand-primary" : "bg-white"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden border-t border-brand-primary/5 bg-white overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-4">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <MobileNavLink
                    link={link}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/booking"
                  className="w-full flex justify-center py-4 rounded-2xl bg-brand-primary text-white font-playfair font-bold text-lg shadow-lg hover:bg-brand-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Your Escape
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ link, isScrolled }: { link: (typeof NAV_LINKS)[0]; isScrolled: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (link.isAnchor && link.href.startsWith("/#")) {
      e.preventDefault();
      const hash = link.href.split("#")[1];
      if (pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(link.href);
      }
    }
  };

  return (
    <Link
      href={link.href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative py-2 font-playfair font-medium text-[15px] tracking-wide transition-colors duration-300 ${isScrolled
        ? isHovered ? "text-brand-secondary" : "text-brand-primary"
        : isHovered ? "text-brand-accent" : "text-white"
        }`}
    >
      <span>{link.label}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute bottom-0 left-0 w-full h-[2px] origin-left ${isScrolled ? "bg-brand-secondary" : "bg-brand-accent"
          }`}
      />
    </Link>
  );
}

function MobileNavLink({ link, onClose }: { link: (typeof NAV_LINKS)[0]; onClose: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    onClose();
    if (link.isAnchor && link.href.startsWith("/#")) {
      e.preventDefault();
      const hash = link.href.split("#")[1];
      if (pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(link.href);
      }
    }
  };

  return (
    <Link
      href={link.href}
      onClick={handleClick}
      className="flex items-center justify-between group py-3 px-2 border-b border-brand-primary/5 last:border-0"
    >
      <span className="font-playfair font-semibold text-2xl text-brand-primary group-hover:text-brand-secondary transition-colors">
        {link.label}
      </span>
      <motion.div
        whileHover={{ x: 5 }}
        className="text-brand-accent"
      >
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </motion.div>
    </Link>
  );
}

