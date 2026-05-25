import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
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

  const isExternal = href.startsWith("http") || href.includes("_URL");

  if (isExternal) {
    return (
      <a
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200 ${styles[variant]} ${className}`}
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200 ${styles[variant]} ${className}`}
      href={href}
    >
      {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
      {children}
    </Link>
  );
}
