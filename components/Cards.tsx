import type { LucideIcon } from "lucide-react";
import { ArrowRight, MapPin } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  text
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-premium">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy opacity-0 transition group-hover:opacity-100" />
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-brand-orange transition group-hover:bg-brand-orange group-hover:text-brand-navy">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export function RouteCard({
  from,
  to,
  price
}: {
  from: string;
  to: string;
  price: string;
}) {
  return (
    <article className="group rounded-lg border border-white/20 bg-white p-6 text-brand-navy shadow-premium transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            Ruta
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight">
            {from}
            <span className="mx-2 text-brand-orange">↔</span>
            {to}
          </h3>
        </div>
        <div className="rounded-lg bg-brand-orange px-4 py-3 text-right text-brand-navy">
          <p className="text-xs font-black uppercase tracking-[0.14em]">Desde</p>
          <p className="text-xl font-black">{price}</p>
        </div>
      </div>
      <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-bold text-slate-500">
        <MapPin className="h-4 w-4 text-brand-orange" />
        Servicio interprovincial referencial
        <ArrowRight className="ml-auto h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </article>
  );
}

export function TrustBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur">
      <Icon className="h-5 w-5 text-brand-orange" />
      {label}
    </div>
  );
}
