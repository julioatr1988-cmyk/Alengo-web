import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { dataProtectionPolicy } from "@/lib/legal-content";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Protección de datos"),
  description:
    "Protección de datos personales de ALEN GO conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.",
  alternates: {
    canonical: "/proteccion-de-datos"
  },
  openGraph: {
    url: "/proteccion-de-datos"
  }
};

export default function DataProtectionPage() {
  return <LegalPage {...dataProtectionPolicy} />;
}
