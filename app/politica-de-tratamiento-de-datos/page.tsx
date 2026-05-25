import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { dataHandlingPolicy } from "@/lib/legal-content";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Política de tratamiento de datos"),
  description:
    "Política de tratamiento de datos de ALEN GO para reservas, pasajeros, encomiendas, pagos y solicitudes.",
  alternates: {
    canonical: "/politica-de-tratamiento-de-datos"
  },
  openGraph: {
    url: "/politica-de-tratamiento-de-datos"
  }
};

export default function DataHandlingPolicyPage() {
  return <LegalPage {...dataHandlingPolicy} />;
}
