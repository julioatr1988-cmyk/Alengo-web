import { Mail, MapPin, MessageCircle } from "lucide-react";
import { contactItems } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

export function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "bg-brand-mist py-20 sm:py-24"}>
      <div className={compact ? "" : "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"}>
        <div className="grid gap-8 rounded-lg bg-brand-navy p-6 text-white shadow-premium sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Soporte para usuarios, aliados y solicitudes de privacidad.
            </h2>
            <p className="mt-4 text-white/70">
              Encuentra el canal adecuado para resolver consultas sobre viajes,
              reservas y protección de datos.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contacto" variant="primary">
                Ver canales de contacto
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                className="rounded-lg border border-white/20 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:bg-white/20"
                href={item.href}
                key={item.label}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                <IconFor label={item.label} />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-1 font-black text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconFor({ label }: { label: string }) {
  const classes = "h-6 w-6 text-brand-orange";
  if (label === "WhatsApp") return <MessageCircle className={classes} />;
  if (label === "Ubicación") return <MapPin className={classes} />;
  return <Mail className={classes} />;
}
