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
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              key={section.heading}
            >
              <h2 className="text-2xl font-black text-brand-navy">{section.heading}</h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
