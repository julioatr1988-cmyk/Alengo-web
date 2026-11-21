import Image from "next/image";
import {
  BellRing,
  CalendarCheck,
  CarFront,
  Check,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  Smartphone,
  UserRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppDownloadButtons } from "@/components/AppDownloadButtons";
import { SectionHeader } from "@/components/SectionHeader";

const apps = [
  {
    id: "descargas-pasajeros",
    label: "Pasajeros",
    title: "Descarga la app para pasajeros",
    text: "Reserva tu asiento, elige tu ruta y coordina tu viaje puerta a puerta desde tu celular.",
    appType: "passenger" as const,
    icon: UserRound,
    qr: "/assets/qr-passenger.svg",
    qrLabel: "Pasajeros",
    benefits: [
      "Reserva tu asiento.",
      "Consulta rutas y horarios disponibles.",
      "Coordina recogida puerta a puerta.",
      "Gestiona encomiendas."
    ]
  },
  {
    id: "descargas-choferes",
    label: "Choferes",
    title: "Descarga la app para choferes",
    text: "Administra solicitudes, pasajeros y operación de viajes desde la app ALEN GO Chofer.",
    appType: "driver" as const,
    icon: CarFront,
    qr: "/assets/qr-driver.svg",
    qrLabel: "Choferes",
    benefits: [
      "Administra solicitudes de viaje.",
      "Organiza pasajeros y viajes asignados.",
      "Consulta encomiendas.",
      "Recibe notificaciones operativas."
    ]
  }
];

export function AppDownloadSection() {
  return (
    <section className="bg-[#f6f7f9] py-20 sm:py-24" id="descargas">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Descargas oficiales"
          text="Dos aplicaciones creadas para experiencias distintas, conectadas por la misma red de movilidad."
          title="Elige tu app de ALEN GO"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>

        <aside className="mt-8 grid gap-5 border-y border-brand-navy/10 bg-white px-6 py-6 shadow-sm sm:grid-cols-[auto_1fr] sm:items-center sm:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-brand-navy">
            <ShieldCheck aria-hidden="true" className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-brand-navy">
              Verificación para mayor seguridad
            </h3>
            <p className="mt-1 max-w-5xl text-sm leading-6 text-slate-600">
              Por seguridad de pasajeros y choferes, la app puede solicitar cédula y selfie con la
              cédula para validar identidad y ayudar a prevenir fraudes.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function AppCard({
  id,
  label,
  title,
  text,
  appType,
  icon: Icon,
  qr,
  qrLabel,
  benefits
}: (typeof apps)[number]) {
  const isPassenger = appType === "passenger";

  return (
    <article
      className={`scroll-mt-24 overflow-hidden rounded-lg border bg-white shadow-premium ${
        isPassenger ? "border-brand-orange/45" : "border-brand-navy/20"
      }`}
      id={id}
    >
      <div className={`h-1.5 ${isPassenger ? "bg-brand-orange" : "bg-brand-navy"}`} />
      <div className="grid min-h-full md:grid-cols-[minmax(0,1fr)_13rem] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_13rem]">
        <div className="flex min-w-0 flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
                {label}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-brand-navy sm:text-3xl">
                {title}
              </h3>
            </div>
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                isPassenger
                  ? "bg-brand-orange text-brand-navy"
                  : "bg-brand-navy text-brand-orange"
              }`}
            >
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>
          <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
            {benefits.map((benefit) => (
              <li className="flex items-start gap-3" key={benefit}>
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-7">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
              Descarga oficial
            </p>
            <AppDownloadButtons
              appType={appType}
              className="mt-2"
              location="download_section"
              tone="light"
            />
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-center gap-5 border-t p-6 md:border-l md:border-t-0 lg:border-l-0 lg:border-t xl:border-l xl:border-t-0 ${
            isPassenger
              ? "border-brand-orange/15 bg-[#fff8ec]"
              : "border-white/10 bg-brand-navy"
          }`}
        >
          <AppPreview variant={appType} />
          <div className="hidden items-center gap-3 xl:flex">
            <Image
              alt={`Código QR para descargar ALEN GO - ${qrLabel}`}
              className="h-20 w-20 bg-white p-1"
              height={160}
              src={qr}
              width={160}
            />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-orange">
                {qrLabel}
              </p>
              <p
                className={`mt-1 max-w-20 text-xs leading-4 ${
                  isPassenger ? "text-slate-500" : "text-white/55"
                }`}
              >
                Escanea y elige tu tienda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function AppPreview({ variant }: { variant: "passenger" | "driver" }) {
  const passengerItems: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Route, label: "Ruta", value: "Santo Domingo → Quito" },
    { icon: CalendarCheck, label: "Reserva", value: "Asiento disponible" },
    { icon: MapPinned, label: "Recogida", value: "Puerta a puerta" }
  ];
  const driverItems: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: BellRing, label: "Solicitudes", value: "Nuevas oportunidades" },
    { icon: CarFront, label: "Operación", value: "Viajes asignados" },
    { icon: PackageCheck, label: "Encomiendas", value: "Gestión disponible" }
  ];
  const items = variant === "passenger" ? passengerItems : driverItems;

  return (
    <div className="w-full max-w-[12rem] rounded-[1.8rem] border-[7px] border-[#050914] bg-[#050914] p-1.5 shadow-premium">
      <div className="overflow-hidden rounded-[1.25rem] bg-[#f6f7f9]">
        <div className="bg-brand-navy px-4 pb-4 pt-5 text-white">
          <div className="flex items-center justify-between">
            <Smartphone aria-hidden="true" className="h-5 w-5 text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-white/60">
              {variant === "passenger" ? "Pasajero" : "Chofer"}
            </span>
          </div>
          <p className="mt-5 text-xs text-white/55">
            {variant === "passenger" ? "Tu próximo viaje" : "Operación activa"}
          </p>
          <p className="mt-1 text-sm font-black">
            {variant === "passenger" ? "Reserva en minutos" : "Gestiona desde la app"}
          </p>
        </div>
        <div className="grid gap-2 p-3">
          {items.map(({ icon: ItemIcon, label, value }) => (
            <div className="flex items-center gap-2 rounded-md bg-white p-2.5 shadow-sm" key={label}>
              <ItemIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-orange" />
              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
                  {label}
                </p>
                <p className="truncate text-[10px] font-bold text-brand-navy">{value}</p>
              </div>
            </div>
          ))}
          <div className="mt-1 flex items-center justify-center gap-1.5 rounded-md bg-brand-orange px-2 py-2 text-[10px] font-black text-brand-navy">
            <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
            ALEN GO
          </div>
        </div>
      </div>
    </div>
  );
}
