import { ShieldCheck, BadgeCheck, Clock, MapPinned, Sparkles, IndianRupee } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Verified Drivers" },
  { icon: Sparkles, label: "Sanitised Vehicles" },
  { icon: Clock, label: "24/7 Support" },
  { icon: IndianRupee, label: "Transparent Billing" },
  { icon: MapPinned, label: "GPS Enabled" },
  { icon: ShieldCheck, label: "₹5L Trip Insurance" },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="relative border-y border-border bg-secondary/50 py-6">
      <div className="mx-auto max-w-7xl overflow-hidden px-6">
        <div className="flex w-max animate-marquee gap-12">
          {[...items, ...items].map((it, i) => (
            <div key={i} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-primary-glow shadow-card">
                <it.icon className="h-4 w-4" />
              </span>
              {it.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
