/*
  KOTA LOOM bread mark, built as SVG so its woven interior can genuinely
  draw itself in (stroke-dashoffset) and so the icon and wordmark can be
  animated independently. The brand logo PNG is a flat raster; this vector
  echo of it is what the intro and navbar animate.

  Every drawable stroke carries `pathLength="1"` (so all strokes normalise to
  the same length for staggered drawing) and the `kl-draw` class so a GSAP
  timeline can select them. Default state is fully drawn, so with no JS or
  under reduced motion the mark simply shows.
*/
export default function LoomMark({ className = "", strokeWidth = 4 }) {
  const thin = +(strokeWidth * 0.62).toFixed(2);
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Loaf silhouette: flat base, domed top */}
      <path
        className="kl-draw"
        pathLength="1"
        strokeDasharray="1"
        strokeWidth={strokeWidth}
        d="M22 96 L22 58 C22 30 98 30 98 58 L98 96 Z"
      />
      {/* Inner crust arc */}
      <path
        className="kl-draw"
        pathLength="1"
        strokeDasharray="1"
        strokeWidth={thin}
        d="M27 57 C32 41 88 41 93 57"
      />
      {/* Woven interior: verticals */}
      {[40, 52, 64, 76].map((x) => (
        <line
          key={`v${x}`}
          className="kl-draw"
          pathLength="1"
          strokeDasharray="1"
          strokeWidth={thin}
          x1={x}
          y1={61}
          x2={x}
          y2={89}
        />
      ))}
      {/* Woven interior: horizontals */}
      {[67, 75, 83].map((y) => (
        <line
          key={`h${y}`}
          className="kl-draw"
          pathLength="1"
          strokeDasharray="1"
          strokeWidth={thin}
          x1={32}
          y1={y}
          x2={88}
          y2={y}
        />
      ))}
    </svg>
  );
}
