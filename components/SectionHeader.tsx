type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  inverse = false
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`text-sm font-black uppercase tracking-[0.18em] ${
            inverse ? "text-brand-orange" : "text-brand-orange"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-black leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl ${
          inverse ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            inverse ? "text-white/70" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
