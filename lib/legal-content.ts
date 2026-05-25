import { LEGAL_COMPANY_NAME, PRIVACY_EMAIL, SUPPORT_EMAIL, site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export const privacyPolicy = {
  title: "Política de privacidad",
  intro:
    "Esta política explica cómo ALEN GO recopila, usa, conserva y comparte información personal cuando las personas utilizan la aplicación, el sitio web y los canales de soporte relacionados con el servicio.",
  sections: [
    {
      heading: "Información que recopilamos",
      paragraphs: [
        "Podemos recopilar nombre, número de teléfono, correo electrónico, datos de cuenta, datos de dispositivo, dirección IP, información técnica de uso, reservas realizadas, rutas, horarios, puntos de recogida y destino, información de encomiendas y comunicaciones con soporte.",
        "Cuando sea aplicable al servicio, también podemos tratar datos de pago, comprobantes, estado de cobro, facturación o información necesaria para validar una reserva.",
        "Con autorización del usuario, ALEN GO puede tratar ubicación en tiempo real o ubicación aproximada para coordinar recogidas, entregas, monitoreo operativo y seguridad del viaje."
      ]
    },
    {
      heading: "Uso de la información",
      paragraphs: [
        "Utilizamos la información para gestionar reservas, asignar viajes, coordinar encomiendas, confirmar traslados al aeropuerto, brindar soporte técnico, mejorar el servicio, prevenir abusos, proteger a usuarios y cumplir obligaciones legales.",
        "La información también puede usarse para comunicar cambios de horario, disponibilidad, confirmaciones, alertas operativas, novedades importantes del servicio y respuestas a solicitudes del usuario."
      ]
    },
    {
      heading: "Uso de ubicación",
      paragraphs: [
        "La ubicación se utiliza para coordinar puntos de recogida, facilitar la comunicación operativa con conductores o compañías aliadas, monitorear rutas y reforzar la seguridad operacional.",
        "El usuario puede gestionar permisos de ubicación desde la configuración del dispositivo. Algunas funciones pueden no operar correctamente si el permiso requerido está desactivado."
      ]
    },
    {
      heading: "Compartición de datos",
      paragraphs: [
        "ALEN GO puede compartir información necesaria con compañías de transporte aliadas, conductores, proveedores tecnológicos, servicios de soporte, pasarelas de pago cuando aplique y autoridades competentes cuando exista requerimiento legal.",
        "No vendemos datos personales. La información compartida se limita a lo necesario para operar, proteger, auditar o mejorar el servicio."
      ]
    },
    {
      heading: "Seguridad y conservación",
      paragraphs: [
        "Aplicamos medidas técnicas, administrativas y organizativas razonables para proteger la información contra acceso no autorizado, pérdida, uso indebido o divulgación no permitida.",
        "Los datos se conservan durante el tiempo necesario para prestar el servicio, atender obligaciones legales, resolver disputas, prevenir fraude o cumplir finalidades operativas legítimamente informadas."
      ]
    },
    {
      heading: "Derechos del usuario",
      paragraphs: [
        "Los usuarios pueden solicitar acceso, actualización, rectificación, eliminación, oposición o limitación del tratamiento de su información personal, de acuerdo con la normativa aplicable.",
        `Para solicitudes de privacidad, eliminación de cuenta o consultas sobre datos personales, escriba a ${PRIVACY_EMAIL}. Para soporte operativo, escriba a ${SUPPORT_EMAIL}.`
      ]
    }
  ] satisfies LegalSection[],
  updated: "Última actualización: mayo de 2026"
};

export const dataHandlingPolicy = {
  title: "Política de tratamiento de datos",
  intro:
    "Esta política describe cómo ALEN GO administra datos operativos, reservas, pasajeros, encomiendas, pagos y solicitudes de usuarios dentro de su plataforma tecnológica.",
  sections: [
    {
      heading: "Almacenamiento de datos",
      paragraphs: [
        "Los datos pueden almacenarse en sistemas propios o de proveedores tecnológicos contratados para operar la aplicación, el sitio web, soporte, analítica, seguridad, comunicaciones y respaldo de información.",
        "ALEN GO adopta controles razonables de acceso, trazabilidad y protección para que la información sea utilizada por personal o aliados autorizados según su rol operativo."
      ]
    },
    {
      heading: "Gestión operativa",
      paragraphs: [
        "La información de reservas se utiliza para confirmar cupos, coordinar horarios, organizar recogidas, registrar estados del viaje y mantener comunicación entre usuario, soporte y compañías aliadas.",
        "La información de pasajeros y encomiendas se gestiona para identificar solicitudes, coordinar entregas, resolver novedades, verificar datos de contacto y mantener registros operativos del servicio."
      ]
    },
    {
      heading: "Gestión de pagos",
      paragraphs: [
        "Cuando existan pagos dentro o fuera de la plataforma, ALEN GO podrá registrar información necesaria para validar cobros, comprobantes, estados de pago, conciliaciones o solicitudes de soporte.",
        "Los datos financieros sensibles, cuando apliquen, deberán ser tratados mediante proveedores especializados y bajo medidas de seguridad acordes al tipo de información."
      ]
    },
    {
      heading: "No venta de datos personales",
      paragraphs: [
        "ALEN GO no vende datos personales de usuarios, pasajeros, remitentes, destinatarios ni contactos relacionados con encomiendas.",
        "La información se comparte únicamente cuando es necesaria para ejecutar el servicio, cumplir obligaciones legales, proteger la plataforma o atender una solicitud del usuario."
      ]
    },
    {
      heading: "Eliminación de información",
      paragraphs: [
        `Los usuarios pueden solicitar eliminación de su información o cierre de cuenta escribiendo a ${PRIVACY_EMAIL}. ALEN GO evaluará la solicitud y conservará datos solo cuando exista una obligación legal, contractual, contable, de seguridad o resolución de disputas.`,
        "Las solicitudes se atenderán por los canales oficiales y podrán requerir verificación de identidad para proteger la información del titular."
      ]
    }
  ] satisfies LegalSection[],
  updated: "Última actualización: mayo de 2026"
};

export const dataProtectionPolicy = {
  title: "Protección de datos personales",
  intro:
    "Esta página resume los compromisos de ALEN GO frente a la Ley Orgánica de Protección de Datos Personales del Ecuador y los derechos de los titulares de datos.",
  sections: [
    {
      heading: "Responsable del tratamiento",
      paragraphs: [
        `El responsable del tratamiento es ${LEGAL_COMPANY_NAME}, plataforma asociada al dominio ${site.domain}. La razón social definitiva podrá actualizarse cuando sea formalmente registrada.`,
        `Canal de contacto para privacidad y protección de datos: ${PRIVACY_EMAIL}.`
      ]
    },
    {
      heading: "Finalidades del tratamiento",
      paragraphs: [
        "Los datos se tratan para crear y administrar cuentas, gestionar reservas, coordinar transporte puerta a puerta, procesar encomiendas, operar traslados al aeropuerto, brindar soporte, mejorar la plataforma, prevenir incidentes de seguridad y cumplir obligaciones legales.",
        "También pueden tratarse datos para comunicaciones operativas, confirmaciones, avisos de disponibilidad, seguimiento de solicitudes y atención de reclamos."
      ]
    },
    {
      heading: "Base legal y consentimiento",
      paragraphs: [
        "El tratamiento puede basarse en el consentimiento del titular, la ejecución de un servicio solicitado, el cumplimiento de obligaciones legales, el interés legítimo de seguridad operacional y la atención de solicitudes realizadas por el usuario.",
        "Cuando una funcionalidad requiera permisos específicos, como ubicación en tiempo real, el usuario podrá otorgar o retirar dicho permiso desde su dispositivo, sin perjuicio de que algunas funciones dependan de ese permiso para operar."
      ]
    },
    {
      heading: "Retención de datos",
      paragraphs: [
        "ALEN GO conservará la información durante el tiempo necesario para cumplir las finalidades informadas, prestar el servicio, atender obligaciones legales, contables o contractuales y resolver reclamos o disputas.",
        "Cuando la información ya no sea necesaria, se eliminará, anonimizará o bloqueará de acuerdo con criterios técnicos y legales aplicables."
      ]
    },
    {
      heading: "Medidas de seguridad",
      paragraphs: [
        "ALEN GO aplica medidas razonables de seguridad técnica, administrativa y organizativa para proteger los datos personales frente a accesos no autorizados, pérdida, alteración, destrucción o divulgación indebida.",
        "El acceso a información operativa se limita según necesidad funcional a personal autorizado, compañías aliadas, conductores o proveedores que apoyan la prestación del servicio."
      ]
    },
    {
      heading: "Derechos de los titulares",
      paragraphs: [
        "Los titulares pueden ejercer derechos de acceso, rectificación, actualización, eliminación, oposición, suspensión, portabilidad y otros reconocidos por la normativa ecuatoriana aplicable.",
        `Para ejercer derechos o realizar consultas, escriba a ${PRIVACY_EMAIL}. Para asuntos de servicio o reservas, escriba a ${SUPPORT_EMAIL}.`
      ]
    }
  ] satisfies LegalSection[],
  updated: "Última actualización: mayo de 2026"
};
