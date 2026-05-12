const menuItems = [
  {
    name: "Specialty Pizzas",
    description: "Crafted with premium toppings and our signature sauce on hand-tossed dough.",
    image: "/placeholder.svg?height=280&width=400",
    badge: "Fan Favourite",
  },
  {
    name: "Wings",
    description: "Crispy, saucy, and available in a variety of bold flavours.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
  {
    name: "Subs",
    description: "Generously stuffed subs with fresh ingredients on toasted bread.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
  {
    name: "U-Bake Pizzas",
    description: "Take home a fresh, ready-to-bake pizza and enjoy it hot from your oven.",
    image: "/placeholder.svg?height=280&width=400",
    badge: "New",
  },
  {
    name: "Garlic Fingers",
    description: "Our legendary garlic fingers — the perfect shareable side or snack.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
  {
    name: "Salads",
    description: "Fresh garden and specialty salads made with crisp, quality ingredients.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
  {
    name: "Donairs",
    description: "Seasoned meat wrapped in soft pita with our sweet, tangy donair sauce.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
  {
    name: "Beverages",
    description: "Cold drinks to wash it all down — sodas, juices, and more.",
    image: "/placeholder.svg?height=280&width=400",
    badge: null,
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-background" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-3">
              What We Serve
            </p>
            <h2
              id="menu-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance"
            >
              Something for
              <span className="text-primary"> Everyone</span>
            </h2>
          </div>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-md text-pretty lg:text-right">
            From crispy wings to hearty donairs — our menu is packed with flavours
            that keep Oromocto coming back for more.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-display tracking-wider uppercase text-xs px-3 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-2 text-balance">
              Ready to Order?
            </h3>
            <p className="font-sans text-primary-foreground/80 text-base">
              Call us for fast delivery right to your door.
            </p>
          </div>
          <a
            href="tel:+1"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary-foreground text-primary font-display tracking-widest uppercase text-sm px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-bold whitespace-nowrap"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
