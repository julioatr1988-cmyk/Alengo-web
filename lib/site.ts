import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Headphones,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  TicketCheck
} from "lucide-react";

export const appDownloadLinks = {
  passenger: {
    android: "https://play.google.com/store/apps/details?id=com.alengo.app.cliente",
    ios: "https://apps.apple.com/ec/app/alengo/id6790227179"
  },
  driver: {
    android: "https://play.google.com/store/apps/details?id=com.alengo.app.chofer",
    ios: "https://apps.apple.com/ec/app/alengo-chofer/id6790226774"
  }
} as const;
export const WHATSAPP_NUMBER = "0939818125";
export const WHATSAPP_URL = "https://wa.me/593939818125";
export const DRIVER_WHATSAPP_MESSAGE =
  "Hola ALEN GO, quiero información para registrarme como chofer o empresa aliada.";
export const DRIVER_WHATSAPP_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  DRIVER_WHATSAPP_MESSAGE
)}`;
export const SUPPORT_EMAIL = "julioatr1988@gmail.com";
export const PRIVACY_EMAIL = "privacidad@alengoapp.com";
export const LEGAL_COMPANY_NAME = "ALEN GO";
export const LOCATION_URL =
  "https://www.google.com/maps/search/?api=1&query=Santo+Domingo+de+los+Tsachilas%2C+Ecuador";

export const site = {
  name: "ALEN GO",
  domain: "https://alengoapp.com",
  title: "ALEN GO | App de transporte puerta a puerta en Ecuador",
  description:
    "Descarga ALEN GO para reservar viajes, seleccionar tu asiento, gestionar encomiendas y viajar puerta a puerta. Aplicaciones disponibles para pasajeros y choferes.",
  location: "Santo Domingo de los Tsáchilas, Ecuador"
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Rutas", href: "/rutas-y-precios" },
  { label: "Encomiendas", href: "/encomiendas" },
  { label: "Aeropuerto", href: "/traslados-aeropuerto" },
  { label: "Contacto", href: "/contacto" }
];

export const legalLinks = [
  { label: "Términos de Uso", href: "/terminos-de-uso" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  {
    label: "Política de Manejo de Datos",
    href: "/politica-de-tratamiento-de-datos"
  },
  { label: "Protección de Datos", href: "/proteccion-de-datos" }
];

export const services = [
  {
    icon: TicketCheck,
    title: "Reserva tu asiento",
    text: "Elige tu ruta, horario y cupo desde la app sin llamadas innecesarias."
  },
  {
    icon: MapPinned,
    title: "Puerta a puerta",
    text: "Coordina puntos de recogida y llegada para viajes más cómodos."
  },
  {
    icon: Plane,
    title: "Transfers al aeropuerto",
    text: "Programa traslados confiables hacia y desde terminales aéreas."
  },
  {
    icon: PackageCheck,
    title: "Encomiendas",
    text: "Gestiona envíos entre ciudades con seguimiento operativo."
  },
  {
    icon: ShieldCheck,
    title: "Viajes seguros",
    text: "Operación con compañías aliadas y soporte durante el servicio."
  },
  {
    icon: Clock3,
    title: "Reservas rápidas",
    text: "Una experiencia simple para confirmar tus viajes en pocos pasos."
  }
];

export const routes = [
  { from: "Santo Domingo", to: "Quito", price: "USD 17" },
  { from: "Santo Domingo", to: "Los Valles", price: "USD 22" },
  { from: "Santo Domingo", to: "Manta", price: "USD 25" },
  { from: "Santo Domingo", to: "Guayaquil", price: "USD 30" }
];

export const ROUTE_PRICING_NOTE =
  "Tarifas base. Determinados sectores, puntos de recogida o destinos pueden generar un recargo adicional. El valor correspondiente se mostrará antes de confirmar la reserva.";

export const trustBadges = [
  { icon: BadgeCheck, label: "Conductores aliados" },
  { icon: ShieldCheck, label: "Viajes seguros" },
  { icon: Headphones, label: "Soporte rápido" },
  { icon: BriefcaseBusiness, label: "Reservas fáciles" }
];

export const contactItems = [
  { label: "WhatsApp", value: WHATSAPP_NUMBER, href: WHATSAPP_URL },
  { label: "Soporte", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  { label: "Privacidad", value: PRIVACY_EMAIL, href: `mailto:${PRIVACY_EMAIL}` },
  { label: "Ubicación", value: site.location, href: LOCATION_URL }
];

export function pageTitle(title: string) {
  return title;
}
