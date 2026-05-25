import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, PackageCheck, Plane, Route, Smartphone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactPanel } from "@/components/ContactPanel";
import { Hero } from "@/components/Hero";
import { RouteCard, ServiceCard, TrustBadge } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/ButtonLink";
import { howItWorks, routes, services, trustBadges } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Sobre la app"
              text="ALEN GO es una plataforma tecnológica que ayuda a usuarios a reservar transporte, encomiendas y traslados al aeropuerto mediante compañías de transporte aliadas en Ecuador."
              title="Movilidad interprovincial con experiencia digital."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { item: "Transporte puerta a puerta", icon: Route },
                { item: "Reservas de asiento", icon: Smartphone },
                { item: "Encomiendas", icon: PackageCheck },
                { item: "Compañías aliadas", icon: Building2 }
              ].map(({ item, icon: Icon }) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-brand-navy shadow-sm"
                  key={item}
                >
                  <Icon className="h-5 w-5 text-brand-orange" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[28rem] overflow-hidden rounded-lg bg-brand-mist shadow-premium">
            <Image
              alt="Identidad visual ALEN GO"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/assets/mockup-bag.jpg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Servicios"
            text="Todo lo que un pasajero espera de una app de transporte moderna: claridad, velocidad y soporte."
            title="Servicios diseñados para reservar sin fricción"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Rutas y precios"
              inverse
              text="Tarifas de referencia para las rutas principales. La disponibilidad puede variar por horario y compañía aliada."
              title="Precios claros antes de reservar"
            />
            <ButtonLink href="/rutas-y-precios" variant="primary">
              Ver rutas
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {routes.map((route) => (
              <RouteCard key={`${route.from}-${route.to}`} {...route} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-white/60">
            Los precios son valores referenciales y pueden variar según ruta,
            horario, disponibilidad o compañía de transporte aliada.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FeatureTile
            href="/encomiendas"
            icon={<PackageCheck className="h-7 w-7" />}
            image="/assets/mockup-folder.jpg"
            title="Encomiendas entre ciudades"
            text="Coordina envios con informacion clara de remitente, destinatario, ruta y soporte operativo."
          />
          <FeatureTile
            href="/traslados-aeropuerto"
            icon={<Plane className="h-7 w-7" />}
            image="/assets/mockup-watch.jpg"
            title="Transfers al aeropuerto"
            text="Reserva traslados programados para llegar a tiempo y moverte con respaldo."
          />
        </div>
      </section>

      <section className="bg-[#f6f7f9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Como funciona"
            title="Reserva en tres pasos"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {howItWorks.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article
                  className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-premium"
                  key={step.title}
                >
                  <div className="flex items-center justify-between">
                    <StepIcon className="h-8 w-8 text-brand-orange" />
                    <span className="text-5xl font-black text-slate-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-black text-brand-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#081226] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBadges.map((badge) => (
            <TrustBadge key={badge.label} {...badge} />
          ))}
        </div>
      </section>

      <ContactPanel />
    </main>
  );
}

function FeatureTile({
  href,
  icon,
  image,
  title,
  text
}: {
  href: string;
  icon: ReactNode;
  image: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      className="group relative min-h-[28rem] overflow-hidden rounded-lg bg-brand-navy p-7 text-white shadow-premium"
      href={href}
    >
      <Image
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
      <div className="relative flex h-full flex-col justify-end">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-orange text-brand-navy">
          {icon}
        </div>
        <h3 className="mt-6 text-3xl font-black">{title}</h3>
        <p className="mt-3 max-w-md text-white/70">{text}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-orange">
          Conocer más <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
