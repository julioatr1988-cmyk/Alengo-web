import { StoreDownloadLink } from "@/components/StoreDownloadLink";
import type {
  DownloadAppType,
  DownloadLocation
} from "@/components/StoreDownloadLink";
import { appDownloadLinks } from "@/lib/site";

type AppDownloadButtonsProps = {
  appType: DownloadAppType;
  location: DownloadLocation;
  tone?: "dark" | "light" | "outline" | "footer";
  compact?: boolean;
  className?: string;
};

export function AppDownloadButtons({
  appType,
  location,
  tone = "dark",
  compact = false,
  className = ""
}: AppDownloadButtonsProps) {
  const links = appDownloadLinks[appType];
  const appName = appType === "passenger" ? "ALEN GO para pasajeros" : "ALEN GO Chofer";

  return (
    <div
      aria-label={`Descargar ${appName}`}
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}
      role="group"
    >
      <StoreDownloadLink
        appType={appType}
        compact={compact}
        href={links.ios}
        location={location}
        platform="ios"
        tone={tone}
      />
      <StoreDownloadLink
        appType={appType}
        compact={compact}
        href={links.android}
        location={location}
        platform="android"
        tone={tone}
      />
    </div>
  );
}
