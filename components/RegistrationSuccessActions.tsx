"use client";

import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/site";

const supportMessage =
  "Hola ALEN GO, acabo de completar mi registro y necesito ayuda con mi cuenta.";
const supportUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(supportMessage)}`;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function trackRegistrationEvent(name: string, parameters: Record<string, string>) {
  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", name, parameters);
    return;
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: name, ...parameters });
}

export function RegistrationSuccessActions() {
  const pageViewTracked = useRef(false);

  useEffect(() => {
    if (pageViewTracked.current) return;

    pageViewTracked.current = true;
    trackRegistrationEvent("registration_success_page_view", { source: "app" });
  }, []);

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <Link
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-sm font-bold text-brand-navy shadow-glow transition duration-200 hover:bg-[#ffb536] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        data-registration-action="return-home"
        href="/"
      >
        <Home aria-hidden="true" className="h-5 w-5" />
        Volver a ALEN GO
      </Link>
      <a
        aria-label="Necesito ayuda con mi cuenta por WhatsApp"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-brand-navy px-5 text-sm font-bold text-white transition duration-200 hover:bg-[#16284f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        data-registration-action="support"
        href={supportUrl}
        onClick={() => trackRegistrationEvent("registration_support_click", { source: "app" })}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        Necesito ayuda
      </a>
    </div>
  );
}
