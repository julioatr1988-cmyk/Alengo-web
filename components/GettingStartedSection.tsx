import {
  BadgeCheck,
  CalendarCheck,
  CarFront,
  Download,
  RadioTower,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const tracks: {
  label: string;
  title: string;
  icon: LucideIcon;
  accent: "orange" | "navy";
  steps: { title: string; icon: LucideIcon }[];
}[] = [
  {
    label: "Pasajeros",
    title: "Empieza a viajar",
    icon: UserRoundCheck,
    accent: "orange",
    steps: [
      { title: "Descarga ALEN GO", icon: Download },
      { title: "Crea y verifica tu cuenta", icon: ShieldCheck },
      { title: "Reserva tu asiento y viaja", icon: CalendarCheck }
    ]
  },
  {
    label: "Choferes",
    title: "Activa tu operación",
    icon: CarFront,
    accent: "navy",
    steps: [
      { title: "Descarga ALEN GO Chofer", icon: Download },
      { title: "Registra y verifica tu información", icon: BadgeCheck },
      { title: "Activa tu operación y recibe solicitudes", icon: RadioTower }
    ]
  }
];

export function GettingStartedSection() {
  return (
    <section className="bg-[#f6f7f9] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Cómo empezar"
          text="Cada aplicación tiene un recorrido claro para comenzar."
          title="Tres pasos para formar parte de ALEN GO"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tracks.map((track) => {
            const TrackIcon = track.icon;
            const isOrange = track.accent === "orange";

            return (
              <article
                className={`overflow-hidden rounded-lg border bg-white shadow-sm ${
                  isOrange ? "border-brand-orange/45" : "border-brand-navy/20"
                }`}
                key={track.label}
              >
                <div
                  className={`flex items-center gap-3 px-6 py-5 ${
                    isOrange ? "bg-brand-orange text-brand-navy" : "bg-brand-navy text-white"
                  }`}
                >
                  <TrackIcon aria-hidden="true" className="h-6 w-6" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] opacity-65">
                      {track.label}
                    </p>
                    <h3 className="mt-1 text-xl font-black">{track.title}</h3>
                  </div>
                </div>
                <ol className="divide-y divide-slate-200 px-6 sm:px-8">
                  {track.steps.map((step, index) => {
                    const StepIcon = step.icon;

                    return (
                      <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6" key={step.title}>
                        <span className="text-sm font-black text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-black text-brand-navy">{step.title}</span>
                        <StepIcon aria-hidden="true" className="h-5 w-5 text-brand-orange" />
                      </li>
                    );
                  })}
                </ol>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
