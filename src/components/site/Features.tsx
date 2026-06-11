import { ShieldCheck, BadgeIndianRupee, Clock4, MapPinned, Headphones, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, t: "Verified drivers", d: "Background-checked, courteous chauffeurs with 5+ years of experience." },
  { icon: BadgeIndianRupee, t: "Transparent pricing", d: "No hidden costs. Fuel, tolls and driver bata included in every quote." },
  { icon: Clock4, t: "24/7 availability", d: "Last-minute bookings, airport pickups and overnight trips — anytime." },
  { icon: MapPinned, t: "GPS tracked rides", d: "Live trip tracking so family always knows where you are on the road." },
  { icon: Headphones, t: "Dedicated support", d: "A real person on call from booking to drop-off, in Hindi, English & Gujarati." },
  { icon: Sparkles, t: "Sanitised interiors", d: "Every vehicle deep-cleaned and inspected before every single trip." },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Why Aadhyashakti Travels</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Built on <span className="text-gradient">trust & comfort</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-glow/40 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
