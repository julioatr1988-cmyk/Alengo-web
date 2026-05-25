import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal-content";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Política de privacidad"),
  description:
    "Política de privacidad de ALEN GO para usuarios, reservas, encomiendas, ubicación y protección de datos.",
  alternates: {
    canonical: "/politica-de-privacidad"
  },
  openGraph: {
    url: "/politica-de-privacidad"
  }
};

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
