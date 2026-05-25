import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/servicios",
  "/rutas-y-precios",
  "/encomiendas",
  "/traslados-aeropuerto",
  "/politica-de-privacidad",
  "/politica-de-tratamiento-de-datos",
  "/proteccion-de-datos",
  "/contacto"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-05-25"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75
  }));
}
