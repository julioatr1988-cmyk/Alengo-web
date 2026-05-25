import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALEN GO",
    short_name: "ALEN GO",
    description:
      "Reserva viajes puerta a puerta, encomiendas y transfers al aeropuerto desde la app ALEN GO.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F1E3C",
    theme_color: "#0F1E3C",
    icons: [
      {
        src: "/favicon.png",
        sizes: "775x774",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "775x774",
        type: "image/png"
      }
    ]
  };
}
