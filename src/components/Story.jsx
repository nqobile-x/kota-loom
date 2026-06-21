import Reveal from "./Reveal.jsx";
import WovenPattern from "./WovenPattern.jsx";
import kotaImg from "../images/handheld_kotaloom.jpeg";

const PILLARS = [
  { k: "Hand-built", v: "Layer by layer, never rushed." },
  { k: "Intentional", v: "Every ingredient earns its place." },
  { k: "Proudly kasi", v: "Born on the street, made for it." },
  { k: "Franchise-ready", v: "One method, built to travel." },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative scroll-mt-24 border-t border-cream/10 bg-ink py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal>
          <div className="rule-gold mb-6 w-16" />
          <h2 className="font-display tracking-anton text-5xl text-cream sm:text-6xl md:text-7xl">
            Our <span className="text-gold">Story</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-cream/85 sm:text-xl">
            Every kota is hand-built, layer by layer. Nothing is rushed.
            Everything is intentional.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            Born on the street. Built for the world. We started on a Soweto
            corner with one quarter loaf and a method we refused to compromise.
            The corner grew. The method stayed.
          </p>
          <p className="mt-7 font-body text-xl font-light italic text-gold sm:text-2xl">
            Proudly kasi. Franchise-ready.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6">
            {PILLARS.map((p) => (
              <div key={p.k} className="border-l-2 border-gold/60 pl-4">
                <dt className="font-display tracking-anton text-xl text-cream">
                  {p.k}
                </dt>
                <dd className="mt-1 text-sm text-cream/65">{p.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden border border-gold/25"
          >
            <img
              src={kotaImg}
              alt="Loaded kota, freshly built at Kota Loom"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Espresso + gold scrim to keep brand tone over the photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(44,24,16,0.55) 0%, rgba(26,26,26,0.35) 50%, rgba(26,26,26,0.75) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 60% at 80% 10%, rgba(212,160,23,0.22), transparent 60%)",
              }}
            />
            <WovenPattern
              className="pointer-events-none absolute inset-0"
              color="#D4A017"
              opacity={0.1}
              scale={28}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-display tracking-anton text-3xl text-cream drop-shadow">
                One corner.
              </p>
              <p className="font-display tracking-anton text-3xl text-gold drop-shadow">
                One method.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
