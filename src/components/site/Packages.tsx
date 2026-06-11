import somnath from "@/assets/tour-somnath.jpg";
import dwarka from "@/assets/tour-dwarka.jpg";
import sou from "@/assets/tour-sou.jpg";
import { MapPin, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tours = [
  {
    name: "Somnath Darshan",
    img: somnath,
    days: "2 Days · 1 Night",
    stops: "Somnath · Bhalka · Triveni Sangam",
    price: "₹6,499",
    badge: "Most Popular",
    includes: ["AC vehicle + driver", "Fuel & tolls", "1 night hotel"],
  },
  {
    name: "Dwarka Pilgrimage",
    img: dwarka,
    days: "3 Days · 2 Nights",
    stops: "Dwarka · Bet Dwarka · Nageshwar",
    price: "₹9,999",
    badge: "Best Seller",
    includes: ["AC vehicle + driver", "Ferry to Bet Dwarka", "2 nights hotel"],
  },
  {
    name: "Statue of Unity Trip",
    img: sou,
    days: "1 Day",
    stops: "Kevadia · Sardar Sarovar · Valley of Flowers",
    price: "₹3,799",
    badge: "Weekend Special",
    includes: ["AC vehicle + driver", "Entry tickets", "Lunch package"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Curated Trips</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Popular <span className="text-gradient">Gujarat tours</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Plan less, travel more. All-inclusive packages with vehicle, fuel, driver and toll covered.
            </p>
          </div>
          <Button asChild variant="outline" className="border-primary/30">
            <a href="#book">Customize a tour</a>
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {tours.map((t, i) => (
            <article
              key={t.name}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-glow">
                  {t.badge}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <Clock className="h-3.5 w-3.5" /> {t.days}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">{t.name}</h3>
                  <p className="mt-1 inline-flex items-start gap-1.5 text-sm text-white/85">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {t.stops}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-white/85">
                    {t.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-1.5">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> {inc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                    <div>
                      <div className="text-xs text-white/70">From</div>
                      <div className="font-display text-xl font-bold">{t.price}</div>
                    </div>
                    <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90">
                      <a href="#book">Book trip</a>
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
