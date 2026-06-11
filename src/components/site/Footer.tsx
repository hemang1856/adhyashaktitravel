import { Car, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from "lucide-react";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Fleet", href: "#vehicles" },
      { label: "Tour Packages", href: "#packages" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Airport Transfer", href: "#book" },
      { label: "Outstation Trips", href: "#book" },
      { label: "Wedding Fleet", href: "#book" },
      { label: "Corporate Hire", href: "#book" },
    ],
  },
  {
    title: "Top Routes",
    links: [
      { label: "Ahmedabad → Somnath", href: "#packages" },
      { label: "Ahmedabad → Dwarka", href: "#packages" },
      { label: "Ahmedabad → Statue of Unity", href: "#packages" },
      { label: "Custom itinerary", href: "#book" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Car className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">Aadhyashakti Travels</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Family-run since 2009. Premium cars, tempo travellers and buses for tours, weddings and corporate trips across Gujarat & India.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" /> +91 90000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow" /> hello@aadhyashaktitravels.in</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> CG Road, Ahmedabad 380009</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary-glow/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aadhyashakti Travels · All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 fill-[oklch(0.65_0.22_25)] text-[oklch(0.65_0.22_25)]" /> in Gujarat
          </span>
        </div>
      </div>
    </footer>
  );
}
