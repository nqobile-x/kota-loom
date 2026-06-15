/*
  Brand-requested woven / interlaced texture.
  Legitimate because it is a repeating *texture* (the "loom" motif at the heart
  of the brand), not a decorative illustration or a fake screenshot.

  Implemented as a single SVG basket-weave tile encoded into a CSS
  background-image and tiled via background-repeat. This is far cheaper than a
  live <pattern> with thousands of DOM cells: the browser rasterizes one small
  tile and the compositor repeats it, which keeps paint cost (and mobile FPS)
  sane across full-bleed sections.

  `color` and `opacity` are controlled by the caller so the same weave can sit
  on black, espresso, or gold backgrounds.
*/
export default function WovenPattern({
  className = "",
  color = "#D4A017",
  opacity = 0.12,
  scale = 34,
}) {
  const s = scale;
  const bar = +(s * 0.42).toFixed(2); // thread width
  const gap = +(s * 0.08).toFixed(2);
  const half = +(s / 2).toFixed(2);
  const len = +(s / 2 - gap * 1.5).toFixed(2);

  // Basket weave: horizontal threads top-left + bottom-right, vertical threads
  // top-right + bottom-left, implying an over/under interlace.
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${s}' height='${s}'>` +
    `<g fill='none' stroke='${color}' stroke-width='1.25'>` +
    `<rect x='${gap}' y='${gap}' width='${len}' height='${bar}'/>` +
    `<rect x='${half + gap / 2}' y='${half + gap / 2}' width='${len}' height='${bar}'/>` +
    `<rect x='${half + gap / 2}' y='${gap}' width='${bar}' height='${len}'/>` +
    `<rect x='${gap}' y='${half + gap / 2}' width='${bar}' height='${len}'/>` +
    `</g></svg>`;

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundRepeat: "repeat",
        backgroundSize: `${s}px ${s}px`,
        opacity,
      }}
    />
  );
}
