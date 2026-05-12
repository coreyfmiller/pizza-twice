import { Phone, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg/v1/fill/w_980,h_773,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg')",
        }}
        role="img"
        aria-label="Delicious pizza fresh from the oven"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/55" />

      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32 pt-40">
        <div className="max-w-2xl">
          <p className="font-display text-secondary tracking-[0.3em] uppercase text-sm mb-4">
            More Than Just Great Pizza
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance mb-6">
            Tantalize Your<br />
            <span className="text-secondary">Taste Buds</span> at<br />
            Pizza Twice
          </h1>
          <p className="font-sans text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-xl text-pretty">
            Visit Pizza Twice in Oromocto for mouth-watering pizzas, wings,
            donairs, subs, garlic fingers, and more. For fast delivery, call
            the pizza restaurant now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+1"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-display tracking-widest uppercase text-base px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Us Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/60 text-primary-foreground font-display tracking-widest uppercase text-base px-8 py-4 rounded hover:border-secondary hover:text-secondary transition-colors font-semibold"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-secondary transition-colors animate-bounce"
        aria-label="Scroll down to menu"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
