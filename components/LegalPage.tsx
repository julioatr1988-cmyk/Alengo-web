import Link from "next/link";
import { FileText, Mail, MessageCircle } from "lucide-react";
import type { LegalSection } from "@/lib/legal-content";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
};

export function LegalPage({ title, intro, sections, updated }: LegalPageProps) {
  return (
    <main className="bg-white">
      <section className="bg-brand-navy px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
            ALEN GO Legal
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">{intro}</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <article className="mx-auto grid max-w-4xl gap-9">
          {sections.map((section) => (
            <section
              className={`rounded-lg border p-6 shadow-sm sm:p-8 ${
                section.emphasis
                  ? "border-brand-orange/50 bg-brand-mist"
                  : "border-slate-200 bg-white"
              }`}
              key={section.heading}
            >
              <h2 className="text-2xl font-black text-brand-navy">{section.heading}</h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-slate-600">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-paragraph-${index}`}>{paragraph}</p>
                ))}
                {section.items?.length ? (
                  <ul className="grid list-disc gap-2 pl-5 marker:text-brand-orange">
                    {section.items.map((item) => (
                      <li className="pl-1" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.links?.length ? (
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                    {section.links.map((item) => (
                      <LegalLink key={`${section.heading}-${item.href}`} {...item} />
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ))}
          <p className="rounded-lg bg-brand-mist px-5 py-4 text-sm font-bold text-brand-navy">
            {updated}
          </p>
        </article>
      </section>
    </main>
  );
}

function LegalLink({
  label,
  href,
  kind = "document",
  variant = "secondary"
}: NonNullable<LegalSection["links"]>[number]) {
  const Icon = kind === "email" ? Mail : kind === "whatsapp" ? MessageCircle : FileText;
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-center text-sm font-bold transition ${
    variant === "primary"
      ? "bg-brand-navy text-white shadow-premium hover:bg-[#16284f]"
      : variant === "accent"
        ? "bg-brand-orange text-brand-navy shadow-glow hover:bg-[#ffb536]"
        : "border border-brand-navy/15 bg-white text-brand-navy hover:border-brand-orange"
  }`;
  const content = (
    <>
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      className={className}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}
