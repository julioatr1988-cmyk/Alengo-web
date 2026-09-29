import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string | null;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-brand-orange text-brand-navy shadow-glow hover:-translate-y-0.5 hover:bg-[#ffb536]",
    secondary:
      "border border-white/20 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20",
    dark:
      "bg-brand-navy text-white shadow-premium hover:-translate-y-0.5 hover:bg-[#16284f]"
  };

  const baseClasses =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} cursor-not-allowed border border-white/15 bg-white/5 text-white/55 ${className}`}
        title="Enlace disponible próximamente"
      >
        {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
        {children}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        className={`${baseClasses} ${styles[variant]} ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link
      className={`${baseClasses} ${styles[variant]} ${className}`}
      href={href}
    >
      {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
      {children}
    </Link>
  );
}
