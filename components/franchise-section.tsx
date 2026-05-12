import { TrendingUp, Users, Award, Handshake } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "Join a brand with years of successful operation and a loyal customer base in the Maritimes.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "We provide comprehensive training, marketing support, and ongoing operational guidance.",
  },
  {
    icon: Award,
    title: "Recognizable Brand",
    description: "Benefit from the established Pizza Twice name and reputation that customers trust.",
  },
  {
    icon: Handshake,
    title: "Flexible Opportunities",
    description: "We work with you to find the right franchise model to suit your goals and investment level.",
  },
]

export function FranchiseSection() {
  return (
    <section id="franchise" className="py-24 bg-foreground" aria-labelledby="franchise-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="font-display text-secondary tracking-[0.3em] uppercase text-sm mb-3">
              Grow With Us
            </p>
            <h2
              id="franchise-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance"
            >
              Own a
              <span className="text-secondary"> Pizza Twice</span>
              <br />Franchise
            </h2>
            <p className="font-sans text-primary-foreground/70 text-lg leading-relaxed mb-4 text-pretty">
              Are you an entrepreneur looking for a rewarding business opportunity in the
              food industry? The Pizza Twice franchise is your chance to bring great food
              to your community while building a business you can be proud of.
            </p>
            <p className="font-sans text-primary-foreground/70 text-base leading-relaxed mb-10 text-pretty">
              Our franchise model is designed to set you up for success from day one.
              With a trusted brand, proven recipes, and a support network behind you —
              the only question is: where do you want to open?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm px-8 py-4 rounded hover:bg-secondary hover:text-foreground transition-colors font-semibold"
            >
              Inquire About Franchising
            </a>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:border-secondary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-primary-foreground/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
