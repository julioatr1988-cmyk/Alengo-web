import Image from "next/image";
import { Apple, ArrowRight, Clock3, MapPinned, Play, ShieldCheck, Star } from "lucide-react";
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";
import { AppMockup } from "@/components/AppMockup";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081226] text-white">
      <div className="absolute inset-0 opacity-24">
        <Image
          alt=""
          className="h-full w-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/assets/mockup-shirt.jpg"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#081226_0%,rgba(8,18,38,0.98)_43%,rgba(15,30,60,0.88)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="animate-fadeUp">
          <Image
            alt="ALEN GO"
            className="h-auto w-44"
            height={210}
            priority
            src="/assets/logo-horizontal-light.png"
            width={1503}
          />
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white/80 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-orange" />
            Plataforma de movilidad para Ecuador
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Reserva tu asiento desde ALEN GO
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Viajes puerta a puerta rápidos, cómodos y seguros con reservas,
            encomiendas y transfers gestionados desde una experiencia digital.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={GOOGLE_PLAY_URL} icon={Play} variant="primary">
              Google Play · Próximamente
            </ButtonLink>
            <ButtonLink href={APPLE_STORE_URL} icon={Apple} variant="secondary">
              App Store · Próximamente
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10 py-5">
            {[
              ["4", "rutas principales"],
              ["App", "reservas digitales"],
              ["EC", "operación local"]
            ].map(([value, label]) => (
              <div className="border-r border-white/10 px-4 first:pl-0 last:border-r-0" key={label}>
                <p className="text-2xl font-black tracking-[-0.03em] text-white">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid place-items-center pb-10 lg:pb-0">
          <div className="absolute right-0 top-6 hidden w-72 rounded-lg border border-white/20 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl md:block">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">
                Ruta activa
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-black text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Online
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <MapPinned className="h-5 w-5 text-brand-orange" />
              <div className="min-w-0">
                <p className="truncate text-sm font-black">Santo Domingo</p>
                <p className="text-xs text-white/50">Recogida puerta a puerta</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-white/40" />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-brand-orange" />
              <div>
                <p className="text-sm font-black">Quito</p>
                <p className="text-xs text-white/50">
                  Consulta horarios disponibles en la app
                </p>
              </div>
            </div>
          </div>

          <AppMockup />

          <div className="absolute bottom-2 left-0 hidden w-64 rounded-lg border border-white/20 bg-white p-4 text-brand-navy shadow-premium md:block">
            <div className="flex items-center gap-1 text-brand-orange">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star className="h-4 w-4 fill-current" key={index} />
              ))}
            </div>
            <p className="mt-3 text-sm font-black">Viaja con respaldo operativo</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Conductores y compañías aliadas para reservas interprovinciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
