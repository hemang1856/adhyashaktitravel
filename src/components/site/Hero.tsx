import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, ShieldCheck, Star, Car, Route, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Premium tempo traveller and sedan on the Gujarat coast at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      {/* Layered overlays for richer depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl animate-drift-slow" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_1fr]">
        {/* Copy */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            Trusted across Gujarat since 2009
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl">
            Drive your journey
            <br />
            with <span className="text-gradient">comfort & care.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Premium cars, tempo travellers and buses for tours, weddings and corporate
            trips. Curated Somnath, Dwarka and Statue of Unity packages — booked in minutes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-glow">
              <a href="#book">
                Book a Vehicle <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white">
              <a href="tel:+919000000000">
                <PhoneCall className="mr-1 h-4 w-4" /> Call +91 90000 00000
              </a>
            </Button>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-sm text-white/80">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Verified drivers · GPS-tracked vehicles · Transparent billing
          </p>
        </div>

        {/* Floating glass stat stack */}
        <div className="relative hidden h-[440px] lg:block">
          <StatCard
            className="absolute right-0 top-0 w-64 rotate-[2deg]"
            icon={<Star className="h-5 w-5 fill-accent text-accent" />}
            value="4.9 / 5"
            label="2,400+ Google reviews"
            sub="Verified by travellers"
          />
          <StatCard
            className="absolute left-2 top-32 w-60 -rotate-[3deg]"
            icon={<Car className="h-5 w-5 text-accent" />}
            value="40+"
            label="Vehicles in fleet"
            sub="Sedans · SUVs · Travellers"
          />
          <StatCard
            className="absolute right-6 bottom-4 w-64 rotate-[1deg]"
            icon={<Users className="h-5 w-5 text-accent" />}
            value="12,000+"
            label="Happy travellers"
            sub="Since 2009"
          />
          <StatCard
            className="absolute left-0 bottom-20 w-56 -rotate-[2deg]"
            icon={<Route className="h-5 w-5 text-accent" />}
            value="3.2M km"
            label="Driven safely"
            sub="Across India"
          />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function StatCard({
  className,
  icon,
  value,
  label,
  sub,
}: {
  className?: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-5 text-white shadow-elegant transition-transform hover:rotate-0 hover:scale-105 ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/75">
        {icon}
        {label}
      </div>
      <div className="mt-2 font-display text-3xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-white/70">{sub}</div>
    </div>
  );
}
