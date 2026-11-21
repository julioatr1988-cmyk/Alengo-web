import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/servicios",
  "/rutas-y-precios",
  "/encomiendas",
  "/traslados-aeropuerto",
  "/terminos-de-uso",
  "/politica-de-privacidad",
  "/politica-de-tratamiento-de-datos",
  "/proteccion-de-datos",
  "/contacto"
];

const lastModifiedByRoute: Record<string, string> = {
  "": "2026-11-21",
  "/politica-de-privacidad": "2026-11-21",
  "/terminos-de-uso": "2026-10-24"
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(lastModifiedByRoute[route] ?? "2026-05-25"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75
  }));
}
