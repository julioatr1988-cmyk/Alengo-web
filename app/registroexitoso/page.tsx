import type { Metadata } from "next";
import Link from "next/link";
import {
  CircleCheckBig,
  ExternalLink,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  TicketCheck
} from "lucide-react";
import { AppDownloadButtons } from "@/components/AppDownloadButtons";
import { RegistrationSuccessActions } from "@/components/RegistrationSuccessActions";
import {
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Registro completado | ALEN GO"
  },
  description: "Confirmación de registro de usuario en ALEN GO.",
  alternates: {
    canonical: "/registroexitoso"
  },
  robots: {
    index: false,
    follow: false
  }
};

const nextSteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Vuelve a la aplicación",
    text: "Continúa desde ALEN GO para consultar rutas, horarios y opciones disponibles."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Completa tu verificación cuando corresponda",
    text: "Para fortalecer la seguridad de pasajeros y choferes, algunas cuentas pueden requerir verificación de identidad."
  },
  {
    number: "03",
    icon: TicketCheck,
    title: "Reserva tu próximo viaje",
    text: "Selecciona tu ruta, asiento y los datos de tu viaje desde la aplicación."
  }
];

export default function RegistrationSuccessPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-brand-navy px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"
        />
        <div className="relative mx-auto max-w-4xl animate-[fadeUp_450ms_ease-out_both] rounded-lg bg-white px-5 py-9 text-center text-brand-navy shadow-premium sm:px-10 sm:py-12 lg:px-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 sm:h-20 sm:w-20">
            <CircleCheckBig aria-hidden="true" className="h-9 w-9 sm:h-11 sm:w-11" />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
            ALEN GO
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            ¡Registro completado!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-brand-navy sm:text-xl">
            Tu cuenta de ALEN GO fue creada correctamente.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-slate-600">
            Ya puedes continuar en la aplicación y comenzar a utilizar los servicios disponibles.
          </p>

          <RegistrationSuccessActions />

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Si llegaste aquí desde la aplicación, puedes cerrar esta página y continuar en ALEN GO.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Siguiente paso
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
              ¿Qué sigue?
            </h2>
          </div>

          <ol className="mt-10 grid border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-slate-200">
            {nextSteps.map(({ number, icon: Icon, title, text }) => (
              <li
                className="border-b border-slate-200 py-7 last:border-b-0 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0"
                key={number}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-black text-brand-orange">{number}</span>
                  <Icon aria-hidden="true" className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="mt-5 text-xl font-black leading-7 text-brand-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:items-start lg:px-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-navy text-brand-orange shadow-premium">
            <ShieldCheck aria-hidden="true" className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Verificación de identidad
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
              Tu seguridad es importante
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
              <p>
                Para ayudar a proteger a pasajeros y choferes, ALEN GO puede solicitar la
                verificación de identidad mediante documento de identificación y una fotografía
                de verificación.
              </p>
              <p>
                Esta información se utiliza para validar la identidad del titular, reducir el
                riesgo de suplantación y reforzar la seguridad de la plataforma.
              </p>
              <p className="font-bold text-brand-navy">
                Si ya completaste este proceso durante el registro, no necesitas volver a enviar
                tus documentos.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
                href="/politica-de-privacidad"
              >
                Conoce cómo protegemos tus datos
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
                href="/proteccion-de-datos"
              >
                Protección de Datos
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8">
          <div className="lg:pr-12">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              App para pasajeros
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-brand-navy sm:text-3xl">
              ¿Necesitas volver a instalar ALEN GO?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Descarga la aplicación oficial para pasajeros y continúa con tus reservas desde tu
              celular.
            </p>
            <AppDownloadButtons
              appType="passenger"
              className="mt-6"
              location="download_section"
              tone="light"
            />
          </div>

          <div className="border-t border-slate-200 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Soporte
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-brand-navy sm:text-3xl">
              ¿Tienes problemas con tu registro?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Nuestro equipo puede ayudarte con dudas relacionadas con tu cuenta, verificación o
              acceso a la aplicación.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-orange hover:bg-brand-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                href={WHATSAPP_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5 text-brand-orange" />
                <span>
                  <span className="block text-xs font-semibold text-slate-500">WhatsApp</span>
                  {WHATSAPP_NUMBER}
                </span>
              </a>
              <a
                className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-orange hover:bg-brand-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5 text-brand-orange" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-slate-500">Correo</span>
                  <span className="break-all">{SUPPORT_EMAIL}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f9fafb] px-5 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-start gap-3 text-sm leading-6 text-slate-600">
          <LockKeyhole
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
          />
          <p>
            ALEN GO nunca te solicitará por esta página tu contraseña, código de acceso o
            información bancaria.
          </p>
        </div>
      </section>
    </main>
  );
}
