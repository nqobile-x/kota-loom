/*
  Navbar logo as an isolated GSAP leaf (no Motion in this tree). The icon and
  wordmark are separate elements so they can animate independently.

  Idle:  bread icon breathes scale 1.0 -> 1.02 -> 1.0 over 3s, on loop.
  Hover: icon rotates 5deg, a gold shimmer sweeps across it, and the wordmark
         tracking expands to 0.08em (all 0.3-0.4s, power2.out).
  Leave: everything eases back over 0.25s, power1.inOut, then idle resumes.

  Reduced motion: no idle loop, no hover motion; the logo stays fully static.
*/
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import LoomMark from "./LoomMark.jsx";

const BASE_TRACKING = "0.012em"; // matches .tracking-anton

export default function NavLogo({ onClick }) {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const iconRef = useRef(null);
  const shimmerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (reduce) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const idle = gsap.to(iconRef.current, {
        scale: 1.02,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      const enter = () => {
        idle.pause();
        gsap.to(iconRef.current, {
          rotation: 5,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          transformOrigin: "50% 50%",
        });
        gsap.to(textRef.current, {
          letterSpacing: "0.08em",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          shimmerRef.current,
          { xPercent: -130, autoAlpha: 1 },
          { xPercent: 130, duration: 0.4, ease: "power2.out" },
        );
      };

      const leave = () => {
        gsap.to(iconRef.current, {
          rotation: 0,
          scale: 1,
          duration: 0.25,
          ease: "power1.inOut",
          transformOrigin: "50% 50%",
          onComplete: () => idle.resume(),
        });
        gsap.to(textRef.current, {
          letterSpacing: BASE_TRACKING,
          duration: 0.25,
          ease: "power1.inOut",
        });
      };

      root.addEventListener("mouseenter", enter);
      root.addEventListener("mouseleave", leave);
      return () => {
        root.removeEventListener("mouseenter", enter);
        root.removeEventListener("mouseleave", leave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <a
      ref={rootRef}
      href="#top"
      onClick={onClick}
      aria-label="Kota Loom, back to top"
      className="flex items-center gap-2.5"
    >
      <span
        ref={iconRef}
        className="relative block h-9 w-9 overflow-hidden text-gold sm:h-10 sm:w-10"
      >
        <LoomMark className="h-full w-full" strokeWidth={5} />
        <span
          ref={shimmerRef}
          className="pointer-events-none absolute inset-y-0 -inset-x-1/4"
          style={{
            background:
              "linear-gradient(105deg, transparent 38%, rgba(245,236,215,0.9) 50%, transparent 62%)",
            mixBlendMode: "screen",
            opacity: 0,
          }}
        />
      </span>
      <span
        ref={textRef}
        className="font-display text-2xl leading-none text-gold sm:text-[28px]"
        style={{ letterSpacing: BASE_TRACKING }}
      >
        KOTA LOOM
      </span>
    </a>
  );
}
