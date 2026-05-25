import type { Metadata } from "next";
import { Clock3, Plane, ShieldCheck } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Traslados al aeropuerto"),
  description:
    "Programa transfers al aeropuerto con ALEN GO para viajar con coordinación, puntualidad y soporte.",
  alternates: {
    canonical: "/traslados-aeropuerto"
  },
  openGraph: {
    url: "/traslados-aeropuerto"
  }
};

export default function AirportTransfersPage() {
  return (
    <main>
      <PageHero
        cta={{ href: "/contacto", label: "Coordinar traslado" }}
        eyebrow="Airport Transfers"
        image="/assets/mockup-watch.jpg"
        text="Programa traslados hacia o desde el aeropuerto con operadores aliados y seguimiento operativo."
        title="Llega a tiempo con traslados programados"
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            text="Pensado para viajeros que necesitan puntualidad, claridad y respaldo antes de salir."
            title="Una experiencia confiable desde la reserva"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Plane,
                title: "Traslado planificado",
                text: "Coordina hora, punto de salida y destino con anticipacion."
              },
              {
                icon: Clock3,
                title: "Horarios claros",
                text: "Evita improvisar cuando tu viaje depende de llegar a tiempo."
              },
              {
                icon: ShieldCheck,
                title: "Operacion segura",
                text: "Servicio respaldado por companias aliadas y canales de soporte."
              }
            ].map(({ icon: Icon, title, text }) => (
              <article className="rounded-lg bg-brand-mist p-6 ring-1 ring-slate-200" key={title}>
                <Icon className="h-8 w-8 text-brand-orange" />
                <h2 className="mt-6 text-xl font-black text-brand-navy">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
