"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Pizza Twice Franchise", href: "#franchise" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-foreground/95 backdrop-blur-md shadow-lg"
          : "bg-foreground/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/ba2cd3_19410c97229348bc881957a0e4ac797d~mv2.png/v1/fill/w_263,h_99,al_c,q_85,enc_avif,quality_auto/ba2cd3_19410c97229348bc881957a0e4ac797d~mv2.png"
              alt="Pizza Twice Logo"
              width={160}
              height={60}
              className="object-contain h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm tracking-wider uppercase text-primary-foreground/80 hover:text-secondary transition-colors px-3 py-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:+1"
            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-5 py-3 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Us
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-foreground border-t border-border/20">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm tracking-wider uppercase text-primary-foreground/80 hover:text-secondary transition-colors px-3 py-3 border-b border-border/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-5 py-3 rounded mt-3 justify-center font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
