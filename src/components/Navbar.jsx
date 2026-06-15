import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import logoImg from "../images/KOTA LOOM logo.png";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Franchise", href: "#franchise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Motion's scroll value (not a window scroll listener) flips the nav from
  // transparent-over-hero to solid black once the user leaves the hero.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 48));

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled || open
            ? "bg-ink/95 backdrop-blur-md border-b border-gold/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
          {/* Wordmark */}
          <a href="#top" onClick={close} className="flex items-center">
            <img
              src={logoImg}
              alt="Kota Loom"
              className="h-9 w-auto sm:h-10"
              loading="eager"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium uppercase tracking-wide text-cream/85 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              className="border border-gold bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-200 hover:bg-gold-bright active:translate-y-px"
            >
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center text-cream md:hidden"
          >
            {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-gold/20 bg-ink/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="border-b border-cream/10 py-3.5 font-display text-2xl tracking-anton text-cream transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={close}
                className="mt-4 bg-gold px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-ink"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
