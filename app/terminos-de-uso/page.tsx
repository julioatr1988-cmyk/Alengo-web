import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfUse } from "@/lib/legal-content";
import { pageTitle } from "@/lib/site";

const description =
  "Consulta los Términos de Uso de ALEN GO, las normas de conducta, seguridad, reportes, bloqueo de usuarios y condiciones para utilizar la plataforma.";

export const metadata: Metadata = {
  title: pageTitle("Términos de Uso"),
  description,
  alternates: {
    canonical: "/terminos-de-uso"
  },
  openGraph: {
    title: "Términos de Uso | ALEN GO",
    description,
    url: "/terminos-de-uso",
    siteName: "ALEN GO",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/assets/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ALEN GO - Términos de Uso"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Uso | ALEN GO",
    description,
    images: ["/assets/social-preview.jpg"]
  }
};

export default function TermsOfUsePage() {
  return <LegalPage {...termsOfUse} />;
}
