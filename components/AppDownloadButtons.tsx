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

  return (
    <div className={`grid gap-2 ${className}`}>
      <StoreDownloadLink
        appType={appType}
        compact={compact}
        href={links.android}
        location={location}
        platform="android"
        tone={tone}
      />
      <StoreDownloadLink
        appType={appType}
        compact={compact}
        href={links.ios}
        location={location}
        platform="ios"
        tone={tone}
      />
    </div>
  );
}
