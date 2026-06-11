import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarDays, MapPin, Phone, User, Car } from "lucide-react";

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Frontend-only stub. Wire to backend when Lovable Cloud is enabled.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Booking request received", {
        description: "Our team will WhatsApp you within 15 minutes to confirm.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Book a Ride</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Tell us your trip, <br />
            we'll handle the <span className="text-gradient">rest.</span>
          </h2>
          <p className="mt-5 text-white/75">
            Fill the form and a real human gets back within 15 minutes with a transparent quote — no auto-bots, no hidden fees.
          </p>

          <ul className="mt-8 space-y-4 text-white/85">
            {["Instant WhatsApp confirmation", "Free cancellation up to 24h", "Pay 20% advance, rest after trip"].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/15 bg-card/95 p-7 shadow-elegant backdrop-blur md:col-span-3 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Your name" icon={<User className="h-4 w-4" />}>
              <Input id="name" name="name" required placeholder="Rahul Shah" />
            </Field>
            <Field id="phone" label="Phone / WhatsApp" icon={<Phone className="h-4 w-4" />}>
              <Input id="phone" name="phone" type="tel" required placeholder="+91 90000 00000" />
            </Field>

            <Field id="vehicle" label="Vehicle type" icon={<Car className="h-4 w-4" />}>
              <select
                id="vehicle"
                name="vehicle"
                required
                defaultValue=""
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" disabled>Choose vehicle</option>
                <option>Sedan (4+1)</option>
                <option>Innova Crysta (6+1)</option>
                <option>Tempo Traveller (17+1)</option>
                <option>Mini Bus (25+1)</option>
              </select>
            </Field>

            <Field id="date" label="Pickup date" icon={<CalendarDays className="h-4 w-4" />}>
              <Input id="date" name="date" type="date" required />
            </Field>

            <Field id="pickup" label="Pickup location" icon={<MapPin className="h-4 w-4" />}>
              <Input id="pickup" name="pickup" required placeholder="Ahmedabad, Maninagar" />
            </Field>
            <Field id="drop" label="Drop location" icon={<MapPin className="h-4 w-4" />}>
              <Input id="drop" name="drop" required placeholder="Somnath" />
            </Field>
          </div>

          <div className="mt-5">
            <Label htmlFor="notes" className="mb-2 block text-sm font-medium">Trip details (optional)</Label>
            <Textarea id="notes" name="notes" rows={3} placeholder="Number of passengers, stops, return date…" />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="mt-6 w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            {submitting ? "Sending…" : "Request booking"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            By submitting you agree to be contacted on the phone number provided.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 flex items-center gap-1.5 text-sm font-medium">
        <span className="text-primary-glow">{icon}</span> {label}
      </Label>
      {children}
    </div>
  );
}
