import sedan from "@/assets/vehicle-sedan.jpg";
import suv from "@/assets/vehicle-suv.jpg";
import traveller from "@/assets/vehicle-traveller.jpg";
import { Snowflake, Users, Fuel, ArrowRight, MapPin, Music2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    name: "Sedan — Etios / Dzire",
    img: sedan,
    seats: "4 + 1",
    ac: "AC",
    fuel: "Diesel",
    price: 12,
    tag: "City & airport",
    badge: "Most Booked",
    perks: ["GPS", "Driver", "AC", "Music"],
  },
  {
    name: "SUV — Innova Crysta",
    img: suv,
    seats: "6 + 1",
    ac: "AC",
    fuel: "Diesel",
    price: 18,
    tag: "Family tours",
    badge: "Best Seller",
    perks: ["GPS", "Driver", "AC", "Music"],
  },
  {
    name: "Tempo Traveller — 17 Seater",
    img: traveller,
    seats: "17 + 1",
    ac: "AC",
    fuel: "Diesel",
    price: 26,
    tag: "Groups & pilgrimage",
    badge: "Weekend Special",
    perks: ["GPS", "Driver", "AC", "Charging"],
  },
];

const perkIcon: Record<string, React.ReactNode> = {
  GPS: <MapPin className="h-3 w-3" />,
  Driver: <ShieldCheck className="h-3 w-3" />,
  AC: <Snowflake className="h-3 w-3" />,
  Music: <Music2 className="h-3 w-3" />,
  Charging: <Music2 className="h-3 w-3" />,
};

export function Vehicles() {
  return (
    <section id="vehicles" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Our Fleet</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A vehicle for <span className="text-gradient">every journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hand-picked, regularly serviced, and driven by experienced chauffeurs. Pick what fits your trip.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <article
              key={v.name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {v.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-glow">
                  {v.badge}
                </span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.7_0.18_150)]/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Available today
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{v.name}</h3>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary-glow" />{v.seats}</span>
                  <span className="inline-flex items-center gap-1.5"><Snowflake className="h-4 w-4 text-primary-glow" />{v.ac}</span>
                  <span className="inline-flex items-center gap-1.5"><Fuel className="h-4 w-4 text-primary-glow" />{v.fuel}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {v.perks.map((p) => (
                    <span key={p} className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                      {perkIcon[p]} {p}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting at</div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      ₹{v.price}
                      <span className="text-sm font-normal text-muted-foreground"> / km</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a href="#book">Details</a>
                    </Button>
                    <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                      <a href="#book">
                        Quick book <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
