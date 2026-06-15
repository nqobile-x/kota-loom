/*
  The Loom Wheel. The six build steps sit on a turning plate; the wheel spins
  one notch at a time to bring each ingredient to the top while the hub reads
  out the step. Motion is motivated: the rotation reveals the build order in
  sequence (storytelling) and the focused disc directs attention (hierarchy).

  Shape note: the whole site is sharp-cornered, but a loom and a plate are
  round by definition, so the wheel, discs and hub are the one intentional
  circular motif. Surrounding controls stay sharp.

  Reduced motion: no wheel, no spin. Falls back to a plain numbered grid.
*/
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { steps } from "../data/steps.js";
import Reveal from "./Reveal.jsx";
import WovenPattern from "./WovenPattern.jsx";

const N = steps.length; // 6
const SEG = 360 / N; // 60deg per step
const R = 188; // ring radius (base design space, scaled responsively)
const AUTO_MS = 3800;

const wrap = (i) => ((i % N) + N) % N;

function Disc({ step, i, counter, active, onSelect }) {
  // Position on the ring, then keep the photo upright: undo the positional
  // tilt (static) and undo the live ring rotation (counter motion value).
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(-50%,-50%) rotate(${i * SEG}deg) translateY(-${R}px)` }}
    >
      <motion.button
        type="button"
        onClick={onSelect}
        aria-label={`${step.n} ${step.title}`}
        aria-pressed={active}
        style={{ rotate: counter }}
        animate={{ scale: active ? 1.18 : 0.82, opacity: active ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className="block origin-center"
      >
        <span
          className="block"
          style={{ transform: `rotate(${-i * SEG}deg)` }}
        >
          <span
            className={`relative grid h-28 w-28 place-items-center overflow-hidden rounded-full border-2 transition-colors duration-300 ${
              active ? "border-gold" : "border-cream/15"
            }`}
          >
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              className={`absolute inset-0 transition-opacity duration-300 ${
                active ? "opacity-0" : "opacity-60"
              }`}
              style={{ background: "rgba(26,26,26,0.65)" }}
            />
            <span className="relative font-display tracking-anton text-2xl leading-none text-cream drop-shadow-lg">
              {step.n}
            </span>
          </span>
        </span>
      </motion.button>
    </div>
  );
}

function Wheel() {
  const [step, setStep] = useState(0); // continuous counter, only grows/shrinks
  const [paused, setPaused] = useState(false);
  const index = wrap(step);

  // Spring drives the ring rotation; counter keeps each disc upright.
  const rot = useSpring(0, { stiffness: 55, damping: 14, mass: 0.9 });
  const counter = useTransform(rot, (v) => -v);

  useEffect(() => {
    rot.set(-step * SEG);
  }, [step, rot]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStep((s) => s + 1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Click a disc: take the shortest path to it (can spin either way).
  const goTo = (target) => {
    let delta = wrap(target - index);
    if (delta > N / 2) delta -= N;
    setStep((s) => s + delta);
  };

  const current = steps[index];

  return (
    <div
      className="flex flex-col items-center"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {/* Wheel stage, scaled down on small screens to avoid horizontal overflow */}
      <div className="relative h-[520px] w-[520px] max-w-full origin-top scale-[0.6] sm:scale-[0.82] lg:scale-100">
        {/* Plate base */}
        <div className="absolute inset-6 rounded-full border border-gold/15" />
        <div className="absolute inset-16 rounded-full border border-cream/5" />

        {/* Rotating ring of discs */}
        <motion.div className="absolute inset-0" style={{ rotate: rot }}>
          {steps.map((s, i) => (
            <Disc
              key={s.n}
              step={s}
              i={i}
              counter={counter}
              active={i === index}
              onSelect={() => goTo(i)}
            />
          ))}
        </motion.div>

        {/* Center hub: the plate that reads out the active step */}
        <div className="absolute left-1/2 top-1/2 grid h-56 w-56 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-gold/30 bg-espresso text-center">
          <WovenPattern
            className="pointer-events-none absolute inset-0 rounded-full"
            color="#D4A017"
            opacity={0.14}
            scale={26}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 70% at 50% 30%, rgba(212,160,23,0.18), transparent 65%)",
            }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-6"
            >
              <p className="font-display tracking-anton text-6xl leading-none text-gold">
                {current.n}
              </p>
              <p className="mt-2 font-display tracking-anton text-2xl leading-tight text-cream">
                {current.title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Read-out + controls (full size, kept readable below the wheel) */}
      <div className="mt-2 w-full max-w-md text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[3rem] text-base leading-relaxed text-cream/75"
          >
            {current.desc}
          </motion.p>
        </AnimatePresence>

        <div className="mt-5 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            aria-label="Previous layer"
            className="grid h-11 w-11 place-items-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold active:translate-y-px"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          <p className="font-display tracking-anton text-lg tabular-nums text-cream/70">
            <span className="text-gold">{current.n}</span>
            <span className="px-1 text-cream/30">/</span>
            {String(N).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            aria-label="Next layer"
            className="grid h-11 w-11 place-items-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold active:translate-y-px"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Static, motion-free fallback: a plain numbered grid of the same six steps.
function StaticGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <div
          key={s.n}
          className="flex flex-col overflow-hidden border border-cream/10 bg-espresso/40"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
            <span className="absolute bottom-2 left-4 font-display tracking-anton text-5xl leading-none text-gold drop-shadow-lg">
              {s.n}
            </span>
          </div>
          <div className="p-6 pt-4">
            <h3 className="font-display tracking-anton text-2xl text-cream">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LoomProcess() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-t border-cream/10 bg-ink py-24 sm:py-28"
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

        <div className="mt-10 sm:mt-12">
          {reduce ? <StaticGrid /> : <Wheel />}
        </div>
      </div>
    </section>
  );
}
