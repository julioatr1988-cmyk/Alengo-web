import Image from "next/image";
import {
  CalendarCheck,
  ChevronRight,
  MapPin,
  MapPinned,
  Navigation,
  ShieldCheck
} from "lucide-react";

export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[24rem] animate-float motion-reduce:animate-none">
      <div className="absolute -left-8 top-12 h-[86%] w-10 rounded-full bg-black/30 blur-2xl" />
      <div className="relative rounded-[2.6rem] border-[10px] border-[#050914] bg-[#050914] p-2 shadow-[0_36px_110px_rgba(0,0,0,0.48)]">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#050914]" />
        <div className="overflow-hidden rounded-[1.9rem] bg-[#f7f8fb]">
          <div className="relative overflow-hidden bg-brand-navy px-5 pb-6 pt-7 text-white">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
            <div className="flex items-center justify-between">
              <Image
                alt="ALEN GO"
                className="h-auto w-28"
                height={210}
                src="/assets/logo-horizontal-light.png"
                width={1503}
              />
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">
                EC
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold text-white/60">Reserva actual</p>
            <h3 className="mt-1 text-2xl font-black tracking-[-0.03em]">
              Santo Domingo
              <span className="mx-2 text-brand-orange">→</span>
              Quito
            </h3>

            <div className="mt-5 rounded-lg bg-white p-4 text-brand-navy shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Precio ref.
                  </p>
                  <p className="mt-1 text-3xl font-black tracking-[-0.04em]">USD 17</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                  Disponible
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-2/3 rounded-full bg-brand-orange" />
              </div>
            </div>
          </div>

          <div className="grid gap-3 p-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-orange">
                  <Navigation className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                    Recogida
                  </p>
                  <p className="text-sm font-black text-brand-navy">Puerta a puerta</p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-slate-300" />
              </div>
            </div>

            {[
              {
                icon: CalendarCheck,
                label: "Horarios disponibles",
                value: "Consulta en la app"
              },
              { icon: MapPinned, label: "Ruta confirmada", value: "Interprovincial" },
              { icon: ShieldCheck, label: "Soporte activo", value: "Viaje seguro" }
            ].map(({ icon: Icon, label, value }) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
                key={label}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    {label}
                  </p>
                  <p className="text-sm font-black text-brand-navy">{value}</p>
                </div>
              </div>
            ))}

            <div className="mt-1 rounded-lg bg-brand-navy p-4 text-white">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
                    Estado
                  </p>
                  <p className="text-sm font-black">Conductor aliado asignable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
