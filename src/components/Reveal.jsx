import { motion, useReducedMotion } from "motion/react";

/*
  Scroll-reveal wrapper. Motion communicates hierarchy here: content lifts in
  as it enters the viewport, drawing the eye section by section. Honors
  prefers-reduced-motion by rendering static (MOTION_INTENSITY is 6, so the
  reduced-motion fallback is mandatory).
*/
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  amount = 0.3,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
