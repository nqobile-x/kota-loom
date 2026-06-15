import { Flame } from "@phosphor-icons/react";
import { menu, addOns } from "../data/menu.js";
import Reveal from "./Reveal.jsx";

function Heat({ level }) {
  if (!level) return null;
  return (
    <span className="flex items-center gap-0.5" aria-label={`Spice level ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          size={15}
          weight="fill"
          className={i <= level ? "text-gold" : "text-cream/15"}
        />
      ))}
    </span>
  );
}

function MenuCard({ item, index }) {
  return (
    <Reveal
      delay={(index % 3) * 0.06}
      className="group flex h-full flex-col border border-cream/10 bg-espresso/35 p-6 transition-colors duration-300 hover:border-gold/50 sm:p-7"
    >
      {/*
        TODO (owner): to add real kota photography, drop an <img> here, e.g.
        <img src={item.image} alt={item.name} className="mb-5 aspect-[4/3] w-full object-cover" />
        Cards are designed to read well with or without a photo.
      */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {item.tag && (
            <span className="bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
              {item.tag}
            </span>
          )}
          <Heat level={item.heat} />
        </div>
        <span className="shrink-0 font-display tracking-anton text-3xl leading-none text-gold">
          R{item.price}
        </span>
      </div>

      <h3 className="mt-5 font-display tracking-anton text-3xl text-cream sm:text-[2rem]">
        {item.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.desc}</p>

      <ul className="mt-5 flex flex-wrap gap-2 border-t border-cream/10 pt-5">
        {item.fill.map((f) => (
          <li
            key={f}
            className="border border-cream/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cream/65"
          >
            {f}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative scroll-mt-24 border-t border-cream/10 bg-ink-soft py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="rule-gold mb-6 w-16" />
          <h2 className="font-display tracking-anton text-5xl text-gold sm:text-6xl md:text-7xl">
            The Menu
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Six kotas, each one woven to order. Slap chips first, always. Prices
            in Rand, hunger in layers.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Add-ons: a different layout family (inline strip), not more cards. */}
        <Reveal className="mt-10 flex flex-col gap-4 border border-cream/10 bg-espresso/30 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display tracking-anton text-2xl text-cream">
            Weave In Extras
          </span>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {addOns.map((a) => (
              <li key={a.name} className="text-sm text-cream/75">
                {a.name}{" "}
                <span className="font-semibold text-gold">R{a.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
