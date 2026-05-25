import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { ServiceCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { services, pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Servicios"),
  description:
    "Servicios de ALEN GO: transporte puerta a puerta, reservas de asiento, encomiendas y traslados al aeropuerto.",
  alternates: {
    canonical: "/servicios"
  },
  openGraph: {
    url: "/servicios"
  }
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Servicios"
        image="/assets/mockup-shirt.jpg"
        text="Reserva, coordina y viaja con una experiencia digital clara para pasajeros y companias aliadas."
        title="Transporte moderno para cada necesidad"
      />
      <section className="bg-brand-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            text="ALEN GO concentra los servicios clave para viajes interprovinciales y operaciones de movilidad."
            title="Todo en una sola app"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
