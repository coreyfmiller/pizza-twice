import { MapPin, Phone, Clock } from "lucide-react"

const locations = [
  {
    name: "Pizza Twice Oromocto",
    address: "Oromocto, New Brunswick",
    phone: "Call for number",
    hours: [
      { day: "Monday – Thursday", time: "11:00 AM – 11:00 PM" },
      { day: "Friday – Saturday", time: "11:00 AM – 12:00 AM" },
      { day: "Sunday", time: "12:00 PM – 10:00 PM" },
    ],
    mapEmbed: "https://maps.google.com/maps?q=Oromocto,+New+Brunswick&output=embed",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-muted/40" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Find Us
          </p>
          <h2
            id="locations-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance"
          >
            Our <span className="text-primary">Location</span>
          </h2>
        </div>

        {locations.map((loc) => (
          <div
            key={loc.name}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-md"
          >
            {/* Map */}
            <div className="h-80 lg:h-auto bg-muted relative">
              <iframe
                title={`Map showing ${loc.name}`}
                src={loc.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="bg-card p-8 sm:p-12 flex flex-col justify-center gap-6">
              <h3 className="font-display text-2xl font-bold text-foreground">{loc.name}</h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-sans text-foreground">{loc.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a href="tel:+1" className="font-sans text-foreground hover:text-primary transition-colors">
                    {loc.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Hours
                  </p>
                  <ul className="space-y-1">
                    {loc.hours.map((h) => (
                      <li key={h.day} className="font-sans text-sm text-foreground">
                        <span className="font-semibold">{h.day}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="tel:+1"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold mt-2 self-start"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
