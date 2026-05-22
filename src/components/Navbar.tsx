"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Genevieve" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Free Resources" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/media", label: "Media & Speaking" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Vieve Health & Wellness home">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-green-800 bg-green-50"
                    : "text-gray-600 hover:text-green-800 hover:bg-green-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/work-with-me"
              className="ml-4 px-5 py-2.5 bg-green-700 text-white rounded-full text-sm font-semibold hover:bg-green-800 transition-colors duration-200 shadow-sm"
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-green-800 hover:bg-green-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-green-800 bg-green-50"
                    : "text-gray-700 hover:text-green-800 hover:bg-green-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/work-with-me"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-3 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
