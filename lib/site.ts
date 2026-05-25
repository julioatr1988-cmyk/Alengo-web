import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CarFront,
  Clock3,
  Headphones,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Smartphone,
  TicketCheck
} from "lucide-react";

// Editable placeholders for launch operations.
export const GOOGLE_PLAY_URL = "GOOGLE_PLAY_URL";
export const APPLE_STORE_URL = "APPLE_STORE_URL";
export const WHATSAPP_NUMBER = "+593 XXX XXX XXX";
export const WHATSAPP_URL = "https://wa.me/593XXXXXXXXX";
export const SUPPORT_EMAIL = "soporte@alengoapp.com";
export const PRIVACY_EMAIL = "privacidad@alengoapp.com";
export const LEGAL_COMPANY_NAME = "ALEN GO / Razón social pendiente";

export const site = {
  name: "ALEN GO",
  domain: "https://alengoapp.com",
  title: "ALEN GO - Transporte Puerta a Puerta en Ecuador",
  description:
    "Reserva viajes puerta a puerta, encomiendas y transfers al aeropuerto desde la app ALEN GO.",
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
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  {
    label: "Tratamiento de datos",
    href: "/politica-de-tratamiento-de-datos"
  },
  { label: "Protección de datos", href: "/proteccion-de-datos" }
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
    title: "Reservas rapidas",
    text: "Una experiencia simple para confirmar tus viajes en pocos pasos."
  }
];

// Editable reference prices for public route cards.
export const routes = [
  { from: "Santo Domingo", to: "Quito", price: "USD 18" },
  { from: "Santo Domingo", to: "Manta", price: "USD 25" },
  { from: "Santo Domingo", to: "Guayaquil", price: "USD 30" }
];

export const howItWorks = [
  {
    icon: Smartphone,
    title: "Descarga la app",
    text: "Instala ALEN GO y mantente listo para reservar cuando lo necesites."
  },
  {
    icon: CalendarCheck,
    title: "Reserva tu asiento",
    text: "Selecciona ruta, horario, datos de pasajero y punto de recogida."
  },
  {
    icon: CarFront,
    title: "Viaja seguro",
    text: "Recibe coordinación del servicio y viaja con operadores aliados."
  }
];

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
  { label: "Ubicación", value: site.location, href: "/contacto" }
];

export function pageTitle(title: string) {
  return title;
}
