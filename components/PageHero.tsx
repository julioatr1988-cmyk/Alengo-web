import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  cta?: {
    href: string;
    label: string;
  };
};

export function PageHero({ eyebrow, title, text, image, cta }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      {image ? (
        <Image
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-28"
          fill
          priority
          sizes="100vw"
          src={image}
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/75" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
        {cta ? (
          <div className="mt-8">
            <ButtonLink href={cta.href} variant="primary">
              {cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
