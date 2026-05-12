const galleryImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Specialty pizza with fresh toppings", span: "col-span-2" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Crispy chicken wings with dipping sauce", span: "" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Loaded sub sandwich", span: "" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Classic donair wrap", span: "" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Garlic fingers fresh from the oven", span: "col-span-2" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Fresh garden salad", span: "" },
]

export function GallerySection() {
  return (
    <section className="py-24 bg-foreground" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-display text-secondary tracking-[0.3em] uppercase text-sm mb-3">
            Food Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight text-balance"
          >
            Made to <span className="text-secondary">Impress</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden group relative ${image.span ? "lg:" + image.span : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
