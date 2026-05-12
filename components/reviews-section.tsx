"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    location: "Oromocto, NB",
    rating: 5,
    review:
      "Best pizza in town, hands down. The garlic fingers are absolutely incredible — crispy, buttery, and perfectly seasoned. We order from Pizza Twice at least twice a week!",
  },
  {
    name: "James R.",
    location: "Fredericton, NB",
    rating: 5,
    review:
      "Drove over from Fredericton just to try Pizza Twice after hearing so much about it. Worth every mile. The donairs are phenomenal and the wings are perfectly crispy.",
  },
  {
    name: "Linda K.",
    location: "Oromocto, NB",
    rating: 5,
    review:
      "Our family has been ordering from Pizza Twice for years. The quality is always consistent and the delivery is fast. The specialty pizzas are always a hit at our house!",
  },
  {
    name: "Mike T.",
    location: "Oromocto, NB",
    rating: 5,
    review:
      "Pizza Twice never disappoints. The u-bake pizzas are fantastic — perfect for game nights when you want restaurant quality at home. Great value for the price.",
  },
  {
    name: "Angela B.",
    location: "Oromocto, NB",
    rating: 4,
    review:
      "Fantastic local spot! The staff is always friendly and the food is consistently delicious. Love that they have subs and salads too — something for everyone in the family.",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))

  const review = reviews[currentIndex]

  return (
    <section id="reviews" className="py-24 bg-background" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance"
          >
            What Our Customers
            <span className="text-primary"> Are Saying</span>
          </h2>
        </div>

        {/* Featured review */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center relative">
            {/* Quote mark */}
            <span className="absolute top-6 left-8 text-primary/20 font-display text-8xl leading-none select-none" aria-hidden="true">
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? "fill-secondary text-secondary" : "text-border"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote>
              <p className="font-sans text-foreground text-lg sm:text-xl leading-relaxed mb-8 relative z-10 text-pretty">
                &ldquo;{review.review}&rdquo;
              </p>
              <footer>
                <p className="font-display text-foreground text-lg font-semibold">{review.name}</p>
                <p className="font-sans text-muted-foreground text-sm mt-1">{review.location}</p>
              </footer>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Review navigation">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3" aria-label={`${r.rating} stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "fill-secondary text-secondary" : "text-border"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">
                &ldquo;{r.review}&rdquo;
              </p>
              <div>
                <p className="font-display text-foreground font-semibold text-sm">{r.name}</p>
                <p className="font-sans text-muted-foreground text-xs mt-0.5">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
