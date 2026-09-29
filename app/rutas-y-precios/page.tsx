import type { Metadata } from "next";
import { RouteCard } from "@/components/Cards";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { ROUTE_PRICING_NOTE, routes, pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Rutas y precios"),
  description:
    "Consulta rutas y precios referenciales de ALEN GO desde Santo Domingo hacia Quito, Los Valles, Manta y Guayaquil.",
  alternates: {
    canonical: "/rutas-y-precios"
  },
  openGraph: {
    url: "/rutas-y-precios"
  }
};

export default function RoutesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Rutas y precios"
        image="/assets/mockup-folder.jpg"
        text="Tarifas de referencia para planificar tus viajes interprovinciales desde la app ALEN GO."
        title="Precios claros para tus rutas principales"
      />
      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {routes.map((route) => (
              <RouteCard key={`${route.from}-${route.to}`} {...route} />
            ))}
          </div>
          <p className="mt-7 rounded-lg border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/70">
            {ROUTE_PRICING_NOTE}
          </p>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
