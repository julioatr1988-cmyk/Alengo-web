import Link from "next/link";
import { BadgeCheck, FileCheck2, ShieldCheck, UserRoundPlus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    icon: UserRoundPlus,
    title: "Crea tu cuenta",
    text: "Registra la información necesaria para utilizar la aplicación."
  },
  {
    icon: FileCheck2,
    title: "Verifica tu identidad",
    text: "Documento de identificación y fotografía de verificación cuando corresponda."
  },
  {
    icon: BadgeCheck,
    title: "Usa ALEN GO con mayor confianza",
    text: "La verificación ayuda a proteger la identidad de pasajeros y choferes."
  }
];

export function IdentitySecuritySection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-orange text-brand-navy">
              <ShieldCheck aria-hidden="true" className="h-7 w-7" />
            </div>
            <SectionHeader
              eyebrow="Verificación y seguridad"
              inverse
              text="Por seguridad de pasajeros y choferes, la app puede solicitar cédula y selfie con la cédula para validar identidad y ayudar a prevenir fraudes."
              title="Verificación para mayor seguridad"
            />
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">
              Esta información se utiliza para validar la identidad del titular, ayudar a prevenir
              suplantaciones y reforzar la seguridad de la plataforma.
            </p>
            <Link
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/20"
              href="/politica-de-privacidad"
            >
              Conoce cómo protegemos tus datos
            </Link>
          </div>

          <ol className="grid border-y border-white/15 sm:grid-cols-3 sm:border-y-0 sm:border-l">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  className="border-b border-white/15 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
                  key={step.title}
                >
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" className="h-7 w-7 text-brand-orange" />
                    <span className="text-sm font-black text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
