import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { contactItems, legalLinks, navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Image
            alt="ALEN GO"
            className="h-auto w-40"
            height={210}
            src="/assets/logo-horizontal-light.png"
            width={1503}
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Plataforma tecnológica para reservar transporte puerta a puerta,
            encomiendas y traslados al aeropuerto con compañías aliadas en
            Ecuador.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" }
            ].map(({ icon: Icon, label }) => (
              <a
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-brand-orange hover:text-brand-orange"
                href="#"
                key={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <FooterGroup title="Navegacion" items={navItems} />
          <FooterGroup title="Legal" items={legalLinks} />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Contacto
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {contactItems.slice(0, 3).map((item) => (
                <a className="transition hover:text-white" href={item.href} key={item.label}>
                  <span className="block text-white/50">{item.label}</span>
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <p className="mx-auto max-w-7xl text-sm text-white/60">
          © 2026 ALEN GO - alengoapp.com
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  items
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
        {title}
      </h2>
      <div className="mt-4 grid gap-3 text-sm text-white/70">
        {items.map((item) => (
          <Link className="transition hover:text-white" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
