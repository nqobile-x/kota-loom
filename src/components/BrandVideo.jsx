/*
  Brand video helper. Autoplays muted, looped, inline (the only combo browsers
  allow to autoplay). Always carries a poster so there is no black flash while
  the file loads, and under prefers-reduced-motion it renders the poster image
  only -- no motion at all.
*/
import { useReducedMotion } from "motion/react";

export default function BrandVideo({
  src,
  poster,
  className = "",
  alt = "",
  loop = true,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <img src={poster} alt={alt} className={className} loading="lazy" />
    );
  }

  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop={loop}
      playsInline
      preload="metadata"
      aria-label={alt || undefined}
    />
  );
}
