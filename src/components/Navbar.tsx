"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Free Resources" },
  { href: "/media", label: "Media" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/90 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" aria-label="Vieve Health and Wellness home">
            {/* Mobile: sm icon, Desktop: md icon */}
            <span className="block sm:hidden">
              <Logo variant="dark" size="sm" />
            </span>
            <span className="hidden sm:block">
              <Logo variant="dark" size="md" />
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-green-800 bg-green-50 shadow-inner"
                    : "text-gray-600 hover:text-green-800 hover:bg-green-50",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/work-with-me"
              className={[
                "ml-3 px-5 py-2.5 rounded-full text-sm font-bold",
                "bg-gradient-to-br from-green-600 to-green-800 text-white",
                "shadow-[0_4px_14px_rgba(22,101,52,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                "hover:from-green-500 hover:to-green-700",
                "hover:shadow-[0_8px_22px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",
                "active:translate-y-0 transition-all duration-200",
              ].join(" ")}
            >
              Book a Session
            </Link>
          </nav>

          {/* ── Mobile: book + hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/work-with-me"
              className={[
                "px-4 py-2 rounded-full text-xs font-bold",
                "bg-gradient-to-br from-green-600 to-green-800 text-white",
                "shadow-[0_3px_10px_rgba(22,101,52,0.35)]",
                "hover:shadow-[0_5px_16px_rgba(22,101,52,0.45)]",
                "transition-all duration-200",
              ].join(" ")}
            >
              Book
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={[
                "p-2 rounded-xl transition-all duration-200",
                menuOpen
                  ? "bg-green-50 text-green-800"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-800",
              ].join(" ")}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav
          className={[
            "px-4 pb-5 pt-2 space-y-1",
            "bg-white border-t border-gray-100",
            "shadow-[0_12px_30px_rgba(0,0,0,0.1)]",
          ].join(" ")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname === link.href
                  ? "text-green-800 bg-green-50 font-semibold shadow-inner"
                  : "text-gray-700 hover:text-green-800 hover:bg-green-50",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            className={[
              "flex items-center justify-center mt-3 px-4 py-3.5 rounded-xl text-sm font-bold",
              "bg-gradient-to-br from-green-600 to-green-800 text-white",
              "shadow-[0_4px_14px_rgba(22,101,52,0.35)]",
            ].join(" ")}
          >
            Book a Session with Dr. Genevieve
          </Link>
        </nav>
      </div>
    </header>
  );
}
