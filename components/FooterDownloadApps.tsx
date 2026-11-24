"use client";

import { usePathname } from "next/navigation";
import { AppDownloadButtons } from "@/components/AppDownloadButtons";

export function FooterDownloadApps() {
  const pathname = usePathname();
  const showDriverApp = pathname !== "/registroexitoso";

  return (
    <>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-white/45">
        Pasajeros
      </p>
      <AppDownloadButtons
        appType="passenger"
        className="mt-2"
        compact
        location="footer"
        tone="footer"
      />
      {showDriverApp ? (
        <>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-white/45">
            Choferes
          </p>
          <AppDownloadButtons
            appType="driver"
            className="mt-2"
            compact
            location="footer"
            tone="footer"
          />
        </>
      ) : null}
    </>
  );
}
