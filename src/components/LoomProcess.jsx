import { motion, useReducedMotion } from "motion/react";
import { steps } from "../data/steps.js";
import Reveal from "./Reveal.jsx";

export default function LoomProcess() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-t border-cream/10 bg-ink py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="rule-gold mb-6 w-16" />
          <h2 className="font-display tracking-anton text-5xl text-gold sm:text-6xl md:text-7xl">
            How We Build It
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Every kota runs the same loom. Six layers, in order, never rushed.
            This is the method that travels.
          </p>
        </Reveal>

        {/* Horizontal scroll on mobile, threaded grid on larger screens. */}
        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative min-w-[76%] shrink-0 snap-start border border-cream/10 bg-espresso/40 p-6 transition-colors duration-300 hover:border-gold/50 sm:min-w-[42%] md:min-w-0"
            >
              <span className="font-display tracking-anton text-6xl leading-none text-gold transition-colors group-hover:text-gold-bright">
                {step.n}
              </span>
              <h3 className="mt-4 font-display tracking-anton text-2xl text-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {step.desc}
              </p>
              {/* Threaded connector to the next layer (desktop only). */}
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute right-[-13px] top-12 hidden h-px w-6 bg-gold/40 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
