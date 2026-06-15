"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`tracking-widest uppercase text-xs font-light transition-colors duration-500 ${
            scrolled ? "text-[#1A1A18]" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Portraits by{" "}
          <span
            className="text-[#C4956A] text-lg font-normal italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Khate
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`hover:text-[#C4956A] transition-colors duration-300 text-xs tracking-widest uppercase ${
                  scrolled ? "text-[#3D3D3B]" : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`ml-4 border border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white transition-all duration-300 px-5 py-2 text-xs tracking-widest uppercase ${
                scrolled ? "bg-transparent" : "bg-transparent"
              }`}
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "text-[#1A1A18]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E4DC] px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#3D3D3B] hover:text-[#C4956A] transition-colors text-xs tracking-widest uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block border border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white transition-all px-5 py-2 text-xs tracking-widest uppercase"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
