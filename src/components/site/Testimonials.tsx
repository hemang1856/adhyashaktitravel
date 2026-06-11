import { Star, Quote, BadgeCheck } from "lucide-react";

const reviews = [
  {
    name: "Priya Mehta",
    place: "Ahmedabad",
    initials: "PM",
    trip: "Dwarka–Somnath · Tempo Traveller",
    text: "Booked a traveller for our Dwarka–Somnath trip. Spotless vehicle and Rakesh bhai is the kindest driver — felt like family.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    place: "Surat",
    initials: "AP",
    trip: "Corporate pickups · Innova Crysta",
    text: "Used them three times for client pickups. Always on time, billing is clean, and the Innova was brand new. Highly recommend.",
    rating: 5,
  },
  {
    name: "Hetal & Nikhil",
    place: "Vadodara",
    initials: "HN",
    trip: "Statue of Unity day-trip · Sedan",
    text: "Our Statue of Unity day-trip was perfectly planned. They even helped us with tickets. Worth every rupee.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Travellers love us</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            4.9 stars · <span className="text-gradient">2,400+ reviews</span>
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-[oklch(0.65_0.18_240)]" />
            Trusted by 12,000+ travellers across Gujarat
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary-glow/20" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
                  {r.initials}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-semibold">{r.name}</span>
                    <BadgeCheck className="h-4 w-4 text-[oklch(0.65_0.18_240)]" aria-label="Verified" />
                  </div>
                  <div className="text-xs text-muted-foreground">{r.place} · {r.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
