import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const channels = [
  { icon: Phone, label: "Call us", value: "+91 90000 00000", href: "tel:+919000000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919000000000" },
  { icon: Mail, label: "Email", value: "hello@aadhyashaktitravels.in", href: "mailto:hello@aadhyashaktitravels.in" },
  { icon: MapPin, label: "Office", value: "CG Road, Ahmedabad 380009", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Get in touch</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            We're here, <span className="text-gradient">round the clock.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href }, i) => (
              <a
                key={label}
                href={href}
                style={{ transitionDelay: `${i * 70}ms` }}
                className="reveal group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary-glow/40 hover:shadow-elegant"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1 font-display font-semibold text-foreground">{value}</div>
              </a>
            ))}
          </div>

          <div className="reveal overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Aadhyashakti Travels — Ahmedabad office"
              src="https://www.google.com/maps?q=CG%20Road%2C%20Ahmedabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
