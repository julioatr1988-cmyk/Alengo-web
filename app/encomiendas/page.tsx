import type { Metadata } from "next";
import { PackageCheck, Route, ShieldCheck } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Encomiendas"),
  description:
    "Gestiona encomiendas entre ciudades con información clara, soporte y compañías aliadas desde ALEN GO.",
  alternates: {
    canonical: "/encomiendas"
  },
  openGraph: {
    url: "/encomiendas"
  }
};

export default function EncomiendasPage() {
  return (
    <main>
      <PageHero
        cta={{ href: "/contacto", label: "Consultar encomienda" }}
        eyebrow="Encomiendas"
        image="/assets/mockup-bag.jpg"
        text="Coordina envios entre ciudades con datos de remitente, destinatario, ruta y soporte operativo."
        title="Envia con una operacion mas clara"
      />
      <section className="bg-brand-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            text="La app ayuda a ordenar la informacion necesaria para que los aliados puedan gestionar cada encomienda con mayor precision."
            title="Gestion simple para cada envio"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: PackageCheck,
                title: "Datos del envio",
                text: "Registra informacion de contacto, origen, destino y detalles de la encomienda."
              },
              {
                icon: Route,
                title: "Ruta definida",
                text: "Asocia la encomienda a rutas y horarios disponibles segun operacion aliada."
              },
              {
                icon: ShieldCheck,
                title: "Soporte operativo",
                text: "Mantiene canales de atencion para novedades o consultas durante la gestion."
              }
            ].map(({ icon: Icon, title, text }) => (
              <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200" key={title}>
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
