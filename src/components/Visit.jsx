import { useState } from "react";
import { MapPin, Clock, WhatsappLogo, Phone, CheckCircle } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";

// Real, functional contact details for the Hillbrow store.
const WHATSAPP = "27712345678"; // wa.me format, no +, no spaces
const PHONE_DISPLAY = "071 234 5678";

const HOURS = [
  { d: "Mon to Sat", h: "10:00 to 22:00" },
  { d: "Sunday", h: "11:00 to 20:00" },
];

export default function Visit() {
  const [form, setForm] = useState({ name: "", phone: "", order: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((x) => ({ ...x, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Tell us who the order is for.";
    if (!form.order.trim()) next.order = "Add at least one kota.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    const text =
      `New order for Kota Loom%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      (form.phone ? `Phone: ${encodeURIComponent(form.phone)}%0A` : "") +
      `Order: ${encodeURIComponent(form.order)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  const fieldBase =
    "w-full border bg-ink px-4 py-3 text-cream placeholder:text-cream/45 transition-colors focus:border-gold focus:outline-none";

  return (
    <section
      id="order"
      className="relative scroll-mt-24 border-t border-cream/10 bg-ink-soft py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Find us */}
        <Reveal>
          <div className="rule-gold mb-6 w-16" />
          <h2 className="font-display tracking-anton text-5xl text-gold sm:text-6xl md:text-7xl">
            Find Us
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
            Walk up to the corner or send your order ahead. Either way, it gets
            built fresh and wrapped in the weave.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <MapPin size={26} weight="fill" className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-display tracking-anton text-xl text-cream">
                  The Corner
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  Cnr Kotze &amp; Claim Street, Hillbrow, Johannesburg, 2001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={26} weight="fill" className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-display tracking-anton text-xl text-cream">
                  Hours
                </p>
                <dl className="mt-1 space-y-0.5">
                  {HOURS.map((row) => (
                    <div key={row.d} className="flex gap-3 text-sm text-cream/70">
                      <dt className="w-24 text-cream/55">{row.d}</dt>
                      <dd>{row.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright"
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP}`}
                className="inline-flex items-center gap-2 border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                <Phone size={20} weight="fill" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Quick order form */}
        <Reveal delay={0.1} className="border border-cream/10 bg-espresso/35 p-7 sm:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-start justify-center py-6">
              <CheckCircle size={52} weight="fill" className="text-gold" />
              <h3 className="mt-5 font-display tracking-anton text-3xl text-cream">
                Order Ready
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                We just opened WhatsApp with your order filled in. Hit send and
                it lands with the kitchen. If nothing opened, message us on{" "}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold underline underline-offset-2"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", phone: "", order: "" });
                }}
                className="mt-7 border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                Start Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-display tracking-anton text-3xl text-cream">
                Order Ahead
              </h3>
              <p className="mt-2 text-sm text-cream/65">
                Fill it in and we will open WhatsApp with your order ready to
                send.
              </p>

              <div className="mt-7 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-cream">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Thabo M."
                    aria-invalid={!!errors.name}
                    className={`${fieldBase} ${
                      errors.name ? "border-red-400/80" : "border-cream/15"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-300">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-cream">
                    Phone or WhatsApp{" "}
                    <span className="font-normal text-cream/45">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="071 234 5678"
                    className={`${fieldBase} border-cream/15`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="order" className="text-sm font-semibold text-cream">
                    Your order
                  </label>
                  <textarea
                    id="order"
                    rows={4}
                    value={form.order}
                    onChange={update("order")}
                    placeholder="1x Loaded Loom, 1x Cheese Loom, extra atchaar"
                    aria-invalid={!!errors.order}
                    className={`${fieldBase} resize-none ${
                      errors.order ? "border-red-400/80" : "border-cream/15"
                    }`}
                  />
                  {errors.order && (
                    <p className="text-xs text-red-300">{errors.order}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 border border-gold bg-gold px-6 py-4 text-sm font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-gold-bright active:translate-y-px"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Send Order
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
