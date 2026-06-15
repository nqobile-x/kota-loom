/*
  Brand intro overlay. Isolated GSAP leaf: no Motion inside this tree, so it
  never fights the navbar's Motion-driven scroll values for frames.

  Sequence (power2.out throughout, ~4.5s total):
    1. Loom mark fades in (0 -> 1) and scales (0.8 -> 1) over 0.8s
    2. Gold shimmer sweeps left to right across the mark over 1.2s
    3. Woven strokes draw themselves in (stroke-dashoffset) over ~1.5s
    4. "KOTA LOOM" (Anton) slides up 20px + fades over 0.6s
    5. "Woven With Flavour" (Montserrat italic) fades in 0.4s after the title
    6. Hold ~1s, then the whole overlay fades out and unmounts

  A skip control fades in after 2s. Reduced motion skips the whole thing.
*/
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import LoomMark from "./LoomMark.jsx";

const SEEN_KEY = "kl_intro_seen";

export default function Preloader({ onDone }) {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const iconRef = useRef(null);
  const shimmerRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const skipRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const finish = () => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* private mode: just proceed */
      }
      document.body.style.overflow = "";
      onDone();
    };

    // Reduced motion: do not perform the cinematic intro at all.
    if (reduce) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: finish,
      });
      tlRef.current = tl;

      tl.fromTo(
        iconRef.current,
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.8 },
        0,
      )
        .fromTo(
          shimmerRef.current,
          { xPercent: -130 },
          { xPercent: 130, duration: 1.2 },
          0.4,
        )
        .fromTo(
          ".kl-draw",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.5, stagger: 0.045 },
          0.5,
        )
        .fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          1.8,
        )
        .fromTo(
          taglineRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5 },
          2.2,
        )
        .to(skipRef.current, { autoAlpha: 1, duration: 0.3 }, 2.0)
        .to(rootRef.current, { autoAlpha: 0, duration: 0.5 }, "+=0.9");
    }, rootRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [reduce, onDone]);

  const handleSkip = () => {
    const tl = tlRef.current;
    if (tl) tl.kill();
    gsap.to(rootRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power1.inOut",
      onComplete: () => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* ignore */
        }
        document.body.style.overflow = "";
        onDone();
      },
    });
  };

  if (reduce) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink"
      role="status"
      aria-label="Loading Kota Loom"
    >
      {/* Mark + shimmer */}
      <div ref={iconRef} className="relative" style={{ visibility: "hidden" }}>
        <LoomMark className="h-32 w-32 text-gold sm:h-40 sm:w-40" strokeWidth={4} />
        {/* Gold shimmer sweep, clipped to the mark's box */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            ref={shimmerRef}
            className="absolute inset-y-0 -inset-x-1/4"
            style={{
              background:
                "linear-gradient(105deg, transparent 38%, rgba(245,236,215,0.85) 50%, transparent 62%)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </div>

      <h1
        ref={titleRef}
        className="mt-8 font-display tracking-anton text-4xl text-gold sm:text-5xl"
        style={{ visibility: "hidden" }}
      >
        KOTA LOOM
      </h1>
      <p
        ref={taglineRef}
        className="mt-3 font-body text-base font-light italic text-cream/80 sm:text-lg"
        style={{ visibility: "hidden" }}
      >
        Woven With Flavour
      </p>

      <button
        ref={skipRef}
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-gold"
        style={{ opacity: 0 }}
      >
        Skip
      </button>
    </div>
  );
}
