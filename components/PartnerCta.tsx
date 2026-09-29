import { MessageCircle, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DRIVER_WHATSAPP_URL } from "@/lib/site";

export function PartnerCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-lg bg-[#081226] px-6 py-12 text-white shadow-premium sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
          <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.18),transparent_65%)]" />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-brand-navy">
                <UsersRound aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.025em] sm:text-4xl">
                ¿Eres chofer o perteneces a una compañía de transporte?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Forma parte de la red de aliados de ALEN GO y recibe nuevas
                oportunidades de viaje a través de nuestra plataforma.
              </p>
            </div>

            <ButtonLink
              className="w-full whitespace-nowrap sm:w-auto"
              href={DRIVER_WHATSAPP_URL}
              icon={MessageCircle}
              variant="primary"
            >
              Quiero ser aliado
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
