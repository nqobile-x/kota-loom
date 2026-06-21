import { motion, useReducedMotion } from "motion/react";
import WovenPattern from "./WovenPattern.jsx";
import logoImg from "../images/KOTA_LOOM_logo-removebg-preview.png";
import heroKota from "../images/Kota loop shoot 2.jpeg";

export default function Hero() {
  const reduce = useReducedMotion();

  // Load-in choreography: brand strip, headline lines, subtext, CTAs cascade.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ink pt-24"
    >
      {/* Woven texture overlay on the matte black */}
      <WovenPattern
        className="pointer-events-none absolute inset-0"
        color="#D4A017"
        opacity={0.1}
        scale={36}
      />
      {/* Warm gold glow, weighted to the left where the type sits */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 28%, rgba(212,160,23,0.16), transparent 55%), linear-gradient(180deg, rgba(26,26,26,0) 60%, rgba(26,26,26,0.9) 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12"
      >
        {/* Copy column */}
        <div className="lg:col-span-8">
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold"
          >
            <span className="inline-block h-px w-9 bg-gold" />
            Hand-built kasi kotas
          </motion.p>

          <h1 className="font-display tracking-anton text-cream">
            <motion.span
              variants={item}
              className="block text-[16vw] leading-[0.86] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            >
              WOVEN WITH
            </motion.span>
            <motion.span
              variants={item}
              className="block text-[16vw] leading-[0.86] text-gold sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            >
              FLAVOUR
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl"
          >
            Hand-built kotas. Layer by layer. Born in Soweto, Joburg.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#order"
              className="border border-gold bg-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-gold-bright active:translate-y-px"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="border border-cream/70 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-cream transition-all duration-200 hover:border-cream hover:bg-cream hover:text-ink active:translate-y-px"
            >
              See Our Menu
            </a>
          </motion.div>
        </div>

        {/* Real food hero shot. Hidden on small screens where the type leads. */}
        <motion.div
          variants={item}
          className="hidden justify-center lg:col-span-4 lg:flex"
        >
          <div className="relative w-full max-w-sm">
            {/* Gold offset frame for a printed-poster feel */}
            <div className="absolute -inset-3 border border-gold/30" />
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold/40">
              <img
                src={heroKota}
                alt="A loaded Kota Loom, stacked and steaming"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 60% at 50% 0%, rgba(212,160,23,0.18), transparent 60%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10">
                <img src={logoImg} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/85">
                  Woven to order
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
