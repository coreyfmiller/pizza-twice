import { Phone, MapPin, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance"
          >
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg mt-4 max-w-xl mx-auto text-pretty">
            Have a question, want to place a large order, or interested in our franchise?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Call Us</h3>
                <p className="font-sans text-muted-foreground text-sm mb-2">
                  The fastest way to place your order or ask a question.
                </p>
                <a href="tel:+1" className="font-sans text-primary hover:text-secondary transition-colors font-semibold">
                  Call for our number
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="font-sans text-muted-foreground text-sm mb-2">
                  Come in and enjoy our dine-in experience.
                </p>
                <p className="font-sans text-foreground">Oromocto, New Brunswick, Canada</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email Us</h3>
                <p className="font-sans text-muted-foreground text-sm mb-2">
                  For franchise inquiries or general questions.
                </p>
                <a href="mailto:info@pizzatwice.ca" className="font-sans text-primary hover:text-secondary transition-colors font-semibold">
                  info@pizzatwice.ca
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-primary rounded-xl p-6 mt-2">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                Order Now — Fast Delivery!
              </h3>
              <p className="font-sans text-primary-foreground/80 text-sm mb-4">
                Skip the wait — call us directly for the fastest delivery in Oromocto.
              </p>
              <a
                href="tel:+1"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-display tracking-widest uppercase text-sm px-6 py-3 rounded hover:bg-secondary hover:text-foreground transition-colors font-bold"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
            aria-label="Contact form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="first-name" className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  className="bg-background border border-border rounded px-4 py-3 font-sans text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="last-name" className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  className="bg-background border border-border rounded px-4 py-3 font-sans text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-background border border-border rounded px-4 py-3 font-sans text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                Subject
              </label>
              <select
                id="subject"
                className="bg-background border border-border rounded px-4 py-3 font-sans text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="order">Order Inquiry</option>
                <option value="franchise">Franchise Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="bg-background border border-border rounded px-4 py-3 font-sans text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
