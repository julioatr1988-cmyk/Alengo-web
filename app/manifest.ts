import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALEN GO",
    short_name: "ALEN GO",
    description: site.description,
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
