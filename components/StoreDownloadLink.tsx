"use client";

import { Apple, Play } from "lucide-react";

export type DownloadAppType = "passenger" | "driver";
export type DownloadPlatform = "android" | "ios";
export type DownloadLocation =
  | "hero"
  | "download_section"
  | "driver_cta"
  | "footer";

type StoreDownloadLinkProps = {
  appType: DownloadAppType;
  platform: DownloadPlatform;
  location: DownloadLocation;
  href: string;
  tone?: "dark" | "light" | "outline" | "footer";
  compact?: boolean;
  className?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const storeCopy = {
  android: { kicker: "Disponible en", name: "Google Play", icon: Play },
  ios: { kicker: "Descárgalo en", name: "App Store", icon: Apple }
} as const;

export function StoreDownloadLink({
  appType,
  platform,
  location,
  href,
  tone = "dark",
  compact = false,
  className = ""
}: StoreDownloadLinkProps) {
  const store = storeCopy[platform];
  const Icon = store.icon;
  const appName = appType === "passenger" ? "ALEN GO" : "ALEN GO Chofer";
  const tones = {
    dark: "border-[#050914] bg-[#050914] text-white hover:bg-[#131b2d]",
    light: "border-slate-200 bg-white text-brand-navy hover:border-brand-orange",
    outline: "border-white/20 bg-white/10 text-white hover:bg-white/20",
    footer: "border-white/15 bg-white/[0.06] text-white hover:border-brand-orange/70 hover:bg-white/10"
  };

  function trackDownload() {
    const parameters = {
      app_type: appType,
      platform,
      location
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "download_app", parameters);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "download_app", ...parameters });
  }

  return (
    <a
      aria-label={`${store.name}: descargar ${appName}`}
      className={`inline-flex items-center justify-center gap-3 rounded-lg border font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
        compact ? "min-h-11 px-3 py-2" : "min-h-14 px-4 py-2.5"
      } ${tones[tone]} ${className}`}
      data-app-type={appType}
      data-download-location={location}
      data-download-platform={platform}
      href={href}
      onClick={trackDownload}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon aria-hidden="true" className={compact ? "h-5 w-5" : "h-7 w-7"} />
      <span className="min-w-0 text-left leading-none">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] opacity-65">
          {store.kicker}
        </span>
        <span className={`mt-1 block whitespace-nowrap ${compact ? "text-xs" : "text-sm"}`}>
          {store.name}
        </span>
      </span>
    </a>
  );
}
