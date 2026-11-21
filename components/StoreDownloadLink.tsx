"use client";

/* eslint-disable @next/next/no-img-element -- Official store artwork must remain unmodified. */

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

const storeArtwork = {
  android: {
    alt: "Disponible en Google Play",
    height: 250,
    name: "Google Play",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png",
    width: 646
  },
  ios: {
    alt: "Descargar en el App Store",
    height: 40,
    name: "App Store",
    src: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
    width: 135
  }
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
  const store = storeArtwork[platform];
  const appName = appType === "passenger" ? "ALEN GO" : "ALEN GO Chofer";
  const tones = {
    dark: "hover:bg-black/[0.04]",
    light: "hover:bg-slate-100",
    outline: "hover:bg-white/[0.08]",
    footer: "hover:bg-white/[0.08]"
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
      className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded-md px-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
        compact ? "w-[9.5rem]" : "w-40"
      } ${tones[tone]} ${className}`}
      data-app-type={appType}
      data-download-location={location}
      data-download-platform={platform}
      href={href}
      onClick={trackDownload}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={store.alt}
        className={`w-auto max-w-none ${
          platform === "android" ? (compact ? "h-[3.25rem]" : "h-[3.375rem]") : "h-10"
        }`}
        decoding="async"
        height={store.height}
        loading={location === "hero" ? "eager" : "lazy"}
        src={store.src}
        width={store.width}
      />
    </a>
  );
}
