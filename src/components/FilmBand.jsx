/*
  Full-bleed cinematic break. A short loop of a kota being wrapped, used as a
  sensory beat between the menu and the story. Its own layout family (edge to
  edge video) so it breaks the rhythm of the bordered sections around it.
*/
import Reveal from "./Reveal.jsx";
import BrandVideo from "./BrandVideo.jsx";
import wrapMp4 from "../videos/kota-wrap.mp4";
import wrapPoster from "../videos/kota-wrap-poster.jpg";

export default function FilmBand() {
  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden bg-ink">
      <BrandVideo
        src={wrapMp4}
        poster={wrapPoster}
        alt="A Kota Loom being wrapped at the corner shop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Espresso + gold scrim keeps the type readable and on-brand */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.15) 40%, rgba(26,26,26,0.85) 100%)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-14 sm:px-8 sm:pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Made at the corner
          </p>
          <h2 className="mt-4 max-w-2xl font-display tracking-anton text-5xl leading-[0.95] text-cream sm:text-6xl md:text-7xl">
            Wrapped In <span className="text-gold">The Weave</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
