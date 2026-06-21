import {
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import WovenPattern from "./WovenPattern.jsx";
import BrandVideo from "./BrandVideo.jsx";
import logoMp4 from "../videos/logo-reveal.mp4";
import logoPoster from "../videos/logo-reveal-poster.jpg";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Franchise", href: "#franchise" },
  { label: "Order", href: "#order" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogo },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookLogo },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogo },
  { label: "WhatsApp", href: "https://wa.me/27712345678", Icon: WhatsappLogo },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-ink">
      <WovenPattern
        className="pointer-events-none absolute inset-0"
        color="#D4A017"
        opacity={0.07}
        scale={40}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="#top"
              aria-label="Kota Loom, back to top"
              className="inline-block w-44 overflow-hidden sm:w-52"
            >
              <BrandVideo
                src={logoMp4}
                poster={logoPoster}
                alt="Kota Loom"
                className="w-full"
              />
            </a>
            <p className="mt-2 max-w-sm font-body text-lg font-light italic text-cream/80">
              Woven With Flavour.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/55">
              Hand-built kasi kotas, layer by layer. Born on the street. Built
              for the world.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/45">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/45">
              Find Us
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Vilakazi Street, Orlando West,
              <br />
              Soweto, Johannesburg
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kota Loom. Woven with flavour in Soweto, Johannesburg.</p>
          <p>Proudly kasi. Franchise-ready.</p>
        </div>
      </div>
    </footer>
  );
}
