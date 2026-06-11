import hero from "@/assets/hero.jpg";
import somnath from "@/assets/tour-somnath.jpg";
import dwarka from "@/assets/tour-dwarka.jpg";
import sou from "@/assets/tour-sou.jpg";
import suv from "@/assets/vehicle-suv.jpg";
import traveller from "@/assets/vehicle-traveller.jpg";

const photos = [
  { src: somnath, span: "md:col-span-2 md:row-span-2", alt: "Somnath temple at sunset" },
  { src: traveller, span: "", alt: "Tempo traveller" },
  { src: dwarka, span: "", alt: "Dwarka temple" },
  { src: hero, span: "md:col-span-2", alt: "Fleet on the coast" },
  { src: sou, span: "", alt: "Statue of Unity" },
  { src: suv, span: "", alt: "Innova SUV" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Gallery</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Moments from the <span className="text-gradient">road</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
