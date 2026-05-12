import Image from "next/image"
import { Phone, MapPin } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Pizza Twice Franchise", href: "#franchise" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
]

const menuLinks = [
  "Specialty Pizzas",
  "Wings",
  "Subs",
  "U-Bake Pizzas",
  "Garlic Fingers",
  "Salads",
  "Donairs",
  "Beverages",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" aria-label="Pizza Twice Home">
              <Image
                src="https://static.wixstatic.com/media/ba2cd3_19410c97229348bc881957a0e4ac797d~mv2.png/v1/fill/w_263,h_99,al_c,q_85,enc_avif,quality_auto/ba2cd3_19410c97229348bc881957a0e4ac797d~mv2.png"
                alt="Pizza Twice Logo"
                width={150}
                height={56}
                className="object-contain h-12 w-auto mb-5"
              />
            </a>
            <p className="font-sans text-primary-foreground/60 text-sm leading-relaxed mb-5 text-pretty">
              More Than Just Great Pizza. Serving Oromocto with mouth-watering
              food and fast delivery since day one.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+1" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                Call Us Now
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                Oromocto, New Brunswick
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary-foreground mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary-foreground mb-5">
              Our Menu
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {menuLinks.map((item) => (
                <li key={item}>
                  <span className="font-sans text-primary-foreground/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary-foreground mb-5">
              Order Now
            </h3>
            <p className="font-sans text-primary-foreground/60 text-sm leading-relaxed mb-6 text-pretty">
              Ready to satisfy your cravings? Call us for fast, reliable
              delivery straight to your door.
            </p>
            <a
              href="tel:+1"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-xs px-6 py-3 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-primary-foreground/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pizza Twice. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-primary-foreground/40 hover:text-secondary text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-primary-foreground/40 hover:text-secondary text-xs transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
