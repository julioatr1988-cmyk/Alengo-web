import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { PartnerCta } from "@/components/PartnerCta";
import { PageHero } from "@/components/PageHero";
import {
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  LOCATION_URL,
  pageTitle,
  site
} from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Contacto"),
  description:
    "Contacta a ALEN GO por WhatsApp, soporte, privacidad o información pública del servicio.",
  alternates: {
    canonical: "/contacto"
  },
  openGraph: {
    url: "/contacto"
  }
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        image="/assets/mockup-shirt.jpg"
        text="Canales oficiales para soporte, privacidad, información pública y coordinación del servicio."
        title="Estamos listos para ayudarte"
      />
      <section className="bg-brand-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: WHATSAPP_NUMBER,
              href: WHATSAPP_URL,
              note: "Consultas para choferes y compañías de transporte aliadas."
            },
            {
              icon: Mail,
              label: "Soporte",
              value: SUPPORT_EMAIL,
              href: `mailto:${SUPPORT_EMAIL}`,
              note: "Reservas, viajes, encomiendas y asistencia técnica."
            },
            {
              icon: ShieldCheck,
              label: "Privacidad",
              value: PRIVACY_EMAIL,
              href: `mailto:${PRIVACY_EMAIL}`,
              note: "Solicitudes de datos personales y eliminación de cuenta."
            },
            {
              icon: MapPin,
              label: "Ubicación",
              value: site.location,
              href: LOCATION_URL,
              note: "Base operativa principal en Ecuador."
            }
          ].map(({ icon: Icon, label, value, href, note }) => (
            <a
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-premium"
              href={href}
              key={label}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <Icon className="h-8 w-8 text-brand-orange" />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>
              <h2 className="mt-2 text-xl font-black text-brand-navy">{value}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
            </a>
          ))}
        </div>
      </section>
      <PartnerCta />
    </main>
  );
}
