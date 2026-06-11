import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hi%20Aadhyashakti%20Travels%2C%20I%27d%20like%20to%20book%20a%20vehicle."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-elegant ring-4 ring-[oklch(0.7_0.18_150)]/25 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.18_150)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[oklch(0.75_0.18_150)]" />
      </span>
    </a>
  );
}
