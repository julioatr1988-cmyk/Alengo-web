import {
  LEGAL_COMPANY_NAME,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  site
} from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
  emphasis?: boolean;
  links?: {
    label: string;
    href: string;
    kind?: "document" | "email" | "whatsapp";
    variant?: "primary" | "accent" | "secondary";
  }[];
};

const reportEmailUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Reporte de contenido o conducta en ALEN GO"
)}`;
const reportWhatsAppUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola ALEN GO, quiero reportar un problema de contenido o conducta en la plataforma."
)}`;

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
        `El responsable del tratamiento es ${LEGAL_COMPANY_NAME}, plataforma asociada al dominio ${site.domain}.`,
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

export const termsOfUse = {
  title: "Términos de Uso de ALEN GO",
  intro: "Condiciones para el acceso y utilización de la plataforma ALEN GO.",
  sections: [
    {
      heading: "1. Aceptación de los términos",
      paragraphs: [
        "Al acceder, registrarse o utilizar ALEN GO, el usuario declara haber leído y aceptado estos Términos de Uso, así como la Política de Privacidad, la Política de Manejo de Datos y la Política de Protección de Datos de la plataforma.",
        "Si el usuario no está de acuerdo con estas condiciones, deberá abstenerse de utilizar el servicio."
      ],
      links: [
        { label: "Política de Privacidad", href: "/politica-de-privacidad" },
        {
          label: "Política de Manejo de Datos",
          href: "/politica-de-tratamiento-de-datos"
        },
        { label: "Política de Protección de Datos", href: "/proteccion-de-datos" }
      ]
    },
    {
      heading: "2. Naturaleza de ALEN GO",
      paragraphs: [
        "ALEN GO es una plataforma tecnológica destinada a facilitar la consulta, reserva, coordinación y comunicación de servicios relacionados con movilidad y logística.",
        "Determinados servicios de transporte pueden ser prestados por empresas, vehículos o conductores aliados, quienes son responsables de cumplir la normativa, autorizaciones y obligaciones aplicables a su actividad. ALEN GO no se presenta como operadora directa de transporte cuando jurídicamente no corresponda."
      ],
      items: [
        "Consulta de rutas y disponibilidad.",
        "Reserva de viajes y selección de asientos cuando la funcionalidad esté disponible.",
        "Coordinación entre usuarios y prestadores aliados.",
        "Gestión de encomiendas y servicios de transfer.",
        "Comunicaciones relacionadas con reservas, viajes, soporte y seguridad."
      ]
    },
    {
      heading: "3. Registro y cuenta del usuario",
      paragraphs: [
        "El usuario deberá proporcionar información verdadera, actualizada y suficiente para crear y utilizar su cuenta, gestionar reservas y recibir comunicaciones relacionadas con los servicios.",
        "El usuario es responsable de proteger sus credenciales de acceso, evitar su uso por terceros no autorizados y responder por la actividad realizada desde su cuenta, salvo que comunique oportunamente un acceso no reconocido."
      ],
      items: [
        "No crear identidades falsas ni suplantar a terceros.",
        "No utilizar datos ajenos sin autorización.",
        "No utilizar la plataforma con fines fraudulentos, engañosos o ilícitos."
      ]
    },
    {
      heading: "4. Normas de conducta y contenido prohibido",
      paragraphs: [
        "Al utilizar la plataforma, el usuario se compromete a no crear, enviar, publicar, compartir o transmitir contenido ofensivo, abusivo, discriminatorio, ilegal, amenazante, intimidatorio, acosador, fraudulento, sexualmente explícito, difamatorio o inapropiado."
      ],
      items: [
        "Acosar o intimidar a otros usuarios, conductores, empresas o personal de ALEN GO.",
        "Realizar amenazas, promover violencia o poner en riesgo a otras personas.",
        "Discriminar por razones personales o protegidas por la legislación aplicable.",
        "Compartir contenido sexual, pornográfico, ilegal o que infrinja derechos de terceros.",
        "Utilizar la plataforma para fraude, estafa o suplantación.",
        "Compartir información personal de terceros sin autorización.",
        "Enviar spam o comunicaciones abusivas.",
        "Intentar interferir con la seguridad, integridad o funcionamiento de la plataforma.",
        "Utilizar ALEN GO para actividades contrarias a la ley."
      ],
      emphasis: true
    },
    {
      heading: "5. Contenido generado por usuarios",
      paragraphs: [
        "Los mensajes, reportes, archivos, fotografías, información, comentarios u otros materiales que los usuarios puedan enviar mediante la plataforma son responsabilidad de quien los genera.",
        "ALEN GO podrá establecer mecanismos automáticos o manuales para detectar, limitar, ocultar o retirar contenido que incumpla estos Términos de Uso, las normas de la plataforma o la legislación aplicable.",
        "La existencia de mecanismos de moderación no implica que ALEN GO supervise previamente todas las comunicaciones o todo el contenido generado por usuarios."
      ]
    },
    {
      heading: "6. Reporte de contenido o conductas",
      paragraphs: [
        "Los usuarios pueden reportar contenido, cuentas o conductas que consideren ofensivas, abusivas, fraudulentas, amenazantes, ilegales o contrarias a estos Términos.",
        "ALEN GO podrá revisar los reportes y adoptar las medidas que considere apropiadas según la evidencia disponible, la gravedad del caso y el riesgo para otras personas.",
        "Los reportes serán tratados dentro de un plazo razonable de acuerdo con su naturaleza y gravedad. Para reportar un problema, el usuario puede escribir al correo oficial o comunicarse por WhatsApp."
      ],
      links: [
        {
          label: "Reportar un problema",
          href: reportEmailUrl,
          kind: "email",
          variant: "primary"
        },
        {
          label: "Reportar por WhatsApp",
          href: reportWhatsAppUrl,
          kind: "whatsapp",
          variant: "accent"
        }
      ],
      emphasis: true
    },
    {
      heading: "7. Bloqueo de usuarios",
      paragraphs: [
        "Cuando la funcionalidad correspondiente se encuentre disponible, los usuarios podrán bloquear a otros usuarios para evitar interacciones no deseadas.",
        "ALEN GO podrá bloquear preventivamente o restringir cuentas cuando existan reportes razonables de abuso, amenazas, fraude o incumplimiento grave. Esta disposición no afirma que una función automática de bloqueo esté disponible actualmente dentro de la aplicación."
      ]
    },
    {
      heading: "8. Moderación y medidas sobre cuentas",
      paragraphs: [
        "ALEN GO podrá revisar reportes y restringir, suspender o cancelar cuentas que incumplan estos Términos de Uso, las normas comunitarias, las políticas de seguridad o la legislación aplicable.",
        "Las decisiones podrán considerar la gravedad de la conducta, su reincidencia, el riesgo para terceros y la evidencia disponible."
      ],
      items: [
        "Advertencias.",
        "Eliminación o restricción de contenido.",
        "Limitación temporal de funciones.",
        "Suspensión temporal.",
        "Cancelación de cuenta.",
        "Bloqueo definitivo cuando corresponda."
      ]
    },
    {
      heading: "9. Seguridad de pasajeros, conductores y terceros",
      paragraphs: [
        "Los usuarios deberán utilizar la plataforma de forma responsable y respetuosa. No se permitirá utilizar ALEN GO para poner en riesgo la seguridad, integridad, bienes o privacidad de pasajeros, conductores, empresas, operadores o terceros.",
        "Ante una posible emergencia o un riesgo inmediato, el usuario deberá comunicarse directamente con los servicios de emergencia o las autoridades competentes. ALEN GO no sustituye a los servicios de emergencia."
      ]
    },
    {
      heading: "10. Reservas, rutas y tarifas",
      paragraphs: [
        "Las rutas, disponibilidad, horarios, vehículos, tarifas y condiciones del servicio pueden variar según la operación, el horario, la demanda, el punto de recogida, el destino o el prestador aliado.",
        "El precio aplicable será el informado al usuario al momento de realizar la reserva o contratar el servicio, incluyendo cualquier recargo que corresponda antes de su confirmación."
      ]
    },
    {
      heading: "11. Encomiendas",
      paragraphs: [
        "El usuario es responsable de declarar correctamente el contenido de la encomienda y de proporcionar información verdadera sobre el remitente, destinatario, naturaleza, dimensiones y destino del envío.",
        "Podrán existir restricciones adicionales de peso, tamaño, naturaleza o destino de acuerdo con la ley, las condiciones operativas o las reglas del prestador aliado."
      ],
      items: [
        "Sustancias ilegales.",
        "Armas prohibidas o explosivos.",
        "Materiales peligrosos.",
        "Objetos cuya posesión o transporte sea ilegal.",
        "Contenido que infrinja derechos de terceros."
      ]
    },
    {
      heading: "12. Pagos",
      paragraphs: [
        "Cuando la plataforma permita pagos electrónicos, estos podrán ser procesados mediante proveedores externos especializados. Podrán aplicarse las condiciones, controles de seguridad y políticas del proveedor de pagos correspondiente.",
        "ALEN GO no afirma almacenar directamente números completos de tarjetas u otros datos financieros sensibles cuando el procesamiento sea realizado por un proveedor externo."
      ]
    },
    {
      heading: "13. Cancelaciones y cambios",
      paragraphs: [
        "Las condiciones de cancelación, cambio de horario, cambio de ruta, ausencia del pasajero o reembolso podrán depender del servicio reservado, el momento de la solicitud y las condiciones informadas por el prestador correspondiente.",
        "Cuando corresponda, estas condiciones deberán mostrarse al usuario antes de confirmar la operación. Estos Términos no establecen penalidades ni porcentajes que no hayan sido previamente informados."
      ]
    },
    {
      heading: "14. Propiedad intelectual",
      paragraphs: [
        "ALEN GO, su nombre, logotipo, interfaz, diseños, software, textos, elementos gráficos y demás contenidos propios están protegidos por la legislación aplicable.",
        "Los usuarios no podrán copiar, modificar, reproducir, distribuir o utilizar estos elementos sin autorización, salvo los usos permitidos expresamente por la ley."
      ]
    },
    {
      heading: "15. Privacidad y protección de datos",
      paragraphs: [
        "El tratamiento de información personal se rige por las políticas vigentes de ALEN GO y por la normativa ecuatoriana aplicable. El usuario puede consultar el detalle de los datos tratados, sus finalidades, medidas de seguridad y derechos en las siguientes páginas."
      ],
      links: [
        { label: "Política de Privacidad", href: "/politica-de-privacidad" },
        {
          label: "Política de Manejo de Datos",
          href: "/politica-de-tratamiento-de-datos"
        },
        { label: "Política de Protección de Datos", href: "/proteccion-de-datos" }
      ]
    },
    {
      heading: "16. Eliminación o suspensión de cuentas",
      paragraphs: [
        `El usuario puede solicitar la eliminación de su cuenta a través de los mecanismos proporcionados por ALEN GO o escribiendo a ${SUPPORT_EMAIL}. La solicitud podrá requerir verificación de identidad y estará sujeta a las obligaciones legales de conservación aplicables.`,
        "ALEN GO podrá suspender o cancelar cuentas por incumplimiento grave o reiterado de estos Términos. Esta disposición no afirma que exista actualmente una función automática de eliminación dentro de la aplicación."
      ]
    },
    {
      heading: "17. Limitación de responsabilidad",
      paragraphs: [
        "ALEN GO adopta medidas razonables para mantener la plataforma disponible y segura, pero no garantiza que el servicio opere de forma ininterrumpida o libre de errores. Pueden presentarse mantenimientos, interrupciones técnicas, fallas de conectividad, actos de terceros o circunstancias externas.",
        "En la medida permitida por la legislación aplicable, la responsabilidad se evaluará según la naturaleza del servicio, la participación de los prestadores aliados y las circunstancias del caso. Ninguna disposición de estos Términos excluye responsabilidades ni derechos de consumidores y usuarios que legalmente no puedan excluirse."
      ]
    },
    {
      heading: "18. Cambios en los términos",
      paragraphs: [
        "ALEN GO podrá actualizar estos Términos de Uso por cambios legales, regulatorios, tecnológicos, de seguridad u operativos.",
        `La versión vigente permanecerá publicada en ${site.domain}/terminos-de-uso. Cuando un cambio sea relevante, ALEN GO podrá comunicarlo por los canales disponibles.`
      ]
    },
    {
      heading: "19. Legislación aplicable",
      paragraphs: [
        "Estos Términos de Uso se interpretarán de acuerdo con la legislación de la República del Ecuador, sin perjuicio de los derechos imperativos que correspondan a consumidores y usuarios y de las competencias de las autoridades aplicables."
      ]
    },
    {
      heading: "20. Contacto",
      paragraphs: [
        `${LEGAL_COMPANY_NAME} atiende consultas relacionadas con estos Términos de Uso desde Santo Domingo de los Tsáchilas, Ecuador.`,
        `Correo: ${SUPPORT_EMAIL}. WhatsApp: ${WHATSAPP_NUMBER}.`
      ],
      links: [
        {
          label: SUPPORT_EMAIL,
          href: `mailto:${SUPPORT_EMAIL}`,
          kind: "email",
          variant: "primary"
        },
        {
          label: WHATSAPP_NUMBER,
          href: WHATSAPP_URL,
          kind: "whatsapp",
          variant: "accent"
        }
      ]
    }
  ] satisfies LegalSection[],
  updated: "Última actualización: octubre de 2026"
};
