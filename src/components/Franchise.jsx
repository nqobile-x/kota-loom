import Reveal from "./Reveal.jsx";
import WovenPattern from "./WovenPattern.jsx";
import { ArrowUpRight } from "@phosphor-icons/react";

const POINTS = [
  { k: "One method", v: "The loom is the same in every store. Train it once, run it anywhere." },
  { k: "Kasi roots", v: "A brand the street already trusts, built to scale without losing it." },
  { k: "Built to travel", v: "Tight menu, clear systems, low waste. Ready for your city." },
];

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="relative scroll-mt-24 overflow-hidden bg-espresso"
    >
      {/* Brand-built band (robust, no external dependency).
          TODO (owner): for a real venue photo, add an <img ... aria-hidden
          className="absolute inset-0 h-full w-full object-cover" /> here and the
          gradient + weave below will tint it on-brand automatically. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a1a1a, #2c1810 70%, #1a1a1a), radial-gradient(80% 60% at 85% 20%, rgba(212,160,23,0.22), transparent 60%)",
        }}
      />
      <WovenPattern
        className="pointer-events-none absolute inset-0"
        color="#D4A017"
        opacity={0.1}
        scale={38}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-3xl">
          <div className="rule-gold mb-6 w-16" />
          <h2 className="font-display tracking-anton text-5xl text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            Built For <span className="text-gold">The World</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            We started on a Hillbrow corner with one quarter loaf and a method.
            The method travels. If you want to bring the loom to your city, we
            are ready to build with you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal
              key={p.k}
              delay={i * 0.08}
              className="bg-ink/70 p-7 backdrop-blur-sm"
            >
              <p className="font-display tracking-anton text-2xl text-gold">
                {p.k}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{p.v}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <a
            href="mailto:franchise@kotaloom.co.za?subject=Kota%20Loom%20Franchise%20Enquiry"
            className="group inline-flex items-center gap-2 border border-gold bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-gold-bright active:translate-y-px"
          >
            Franchise Enquiry
            <ArrowUpRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
