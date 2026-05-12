import { CheckCircle } from "lucide-react"

const highlights = [
  "Made with fresh, quality ingredients every day",
  "Fast, reliable delivery across Oromocto",
  "Family-friendly atmosphere for dine-in",
  "Wide menu for every appetite and craving",
  "Franchise opportunities available",
  "Community favourite for over a decade",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/40" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage (slightly asymmetric) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden h-72">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Inside Pizza Twice restaurant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img
                  src="/placeholder.svg?height=280&width=400"
                  alt="Fresh pizza being prepared"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 translate-y-6">
                <img
                  src="/placeholder.svg?height=280&width=400"
                  alt="Pizza Twice team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-xl">
              <p className="font-display text-4xl font-bold">10+</p>
              <p className="font-sans text-sm text-primary-foreground/80 mt-1">Years Serving<br />Oromocto</p>
            </div>
          </div>

          {/* Text content */}
          <div className="pt-8 lg:pt-0">
            <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 text-balance"
            >
              More Than Just
              <span className="text-primary"> Great Pizza</span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-4 text-pretty">
              At Pizza Twice, we believe great food brings people together. Nestled in the
              heart of Oromocto, we&apos;ve been serving up hot, handcrafted pizzas, wings,
              donairs, and much more to hungry families and friends for years.
            </p>
            <p className="font-sans text-muted-foreground text-base leading-relaxed mb-8 text-pretty">
              Every item on our menu is made with care using fresh ingredients. Whether
              you&apos;re dining in, picking up, or getting delivery — the Pizza Twice
              experience is always worth it.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-sans text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
