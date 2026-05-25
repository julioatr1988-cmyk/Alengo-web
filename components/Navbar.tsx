"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 text-white backdrop-blur-xl">
      <nav
        aria-label="Navegacion principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Link aria-label="ALEN GO inicio" className="flex items-center" href="/">
          <Image
            alt="ALEN GO"
            className="h-auto w-36"
            height={210}
            priority
            src="/assets/logo-horizontal-light.png"
            width={1503}
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="/contacto" variant="primary">
            Hablar con soporte
          </ButtonLink>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-navy px-5 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-lg px-4 py-3 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink className="mt-2 w-full" href="/contacto" variant="primary">
              Hablar con soporte
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
