import { SiteContent, GenderMode } from "@/types/content";

export const siteData: Record<GenderMode, SiteContent> = {
  women: {
    brand: {
      name: "aura",
      studio: "ATELIER DE IMAGEN",
      tagline: "Asesoría de Imagen Personal",
    },
    nav: {
      approach: "Mi enfoque",
      services: "Servicios",
      howItWorks: "Cómo funciona",
      cta: "Hablemos",
    },
    hero: {
      kicker: "Asesoría de Imagen Personal",
      titleLine1: "Tu estilo.",
      titleLine2: "Tu historia.",
      titleHighlight: "Tu momento.",
      description:
        "Vestirse debería hacerte sentir más tú, no menos. Descubre una forma de entender tu imagen que empieza por conocerte.",
      primaryCta: "Descubre cómo puedo ayudarte",
      secondaryCta: "Leer mi filosofía",
      imageSrc: "/images/hero-model.png",
      imageAlt: "Aura Atelier de Imagen - Asesoría de Imagen Femenina",
      badgeText: "TU ESTILO ES TU HISTORIA, NO UNA MODA.",
      counterText: "01 / 04 — Una imagen que habla de ti",
    },
    beyond: {
      index: "01 / 04",
      category: "Más allá de la ropa",
      headlineStart: "La mejor versión de ti es la que ",
      headlineHighlight: "se siente como tú.",
      body: "La imagen personal no es sobre seguir reglas estrictas ni convertirte en alguien más. Se trata de encontrar el punto exacto donde lo que ves en el espejo refleja cómo te sientes por dentro.",
      linkText: "Descubre mi enfoque",
    },
    approach: {
      index: "02 / 04",
      category: "La Metodología",
      title: "Un proceso consciente diseñado alrededor de ",
      highlight: "quién eres",
      titleEnd: ", no de tendencias pasajeras.",
      intro:
        "Reemplazamos la indecisión matutina por claridad, armonía visual y una seguridad duradera.",
      imageSrc: "/images/color-consultation.jpg",
      imageAlt: "Estudio de colorimetría y análisis de tejidos",
      steps: [
        {
          num: "01",
          title: "Esencia & Diagnóstico",
          desc: "Una sesión íntima para comprender tu rutina, aspiraciones y la relación emocional con las prendas que habitas.",
        },
        {
          num: "02",
          title: "Colorimetría & Armonía",
          desc: "Análisis científico de tonalidades estacionales para descubrir la paleta que ilumina tu rostro y mirada con resplandor natural.",
        },
        {
          num: "03",
          title: "Arquitectura del Armario",
          desc: "Depuración consciente del guardarropa, recuperando piezas valiosas y estructurando fórmulas para el día a día sin fricción.",
        },
        {
          num: "04",
          title: "El Lookbook Digital",
          desc: "Tu dossier interactivo en el móvil con decenas de estilismos armados, guía de compras intencionales y principios de estilo de por vida.",
        },
      ],
      cta: "Descubre por cuál paso comenzar",
    },
    services: {
      index: "03 / 04",
      category: "Servicios Exclusivos",
      title: "Consultorías a medida para transformar cómo te vistes y te expresas.",
      intro:
        "Ya sea una revitalización integral o una sesión enfocada en colorimetría, cada encuentro se vive con empatía, calidez y máxima atención al detalle.",
      items: [
        {
          id: "signature",
          title: "The Signature Transformation",
          tag: "Experiencia Integral",
          desc: "El programa completo de 4 semanas que rediseña tu presencia visual y transforma tu relación diaria con la ropa.",
          duration: "4 Semanas",
          format: "Presencial o Híbrido",
          features: [
            "Diagnóstico de Estilo & Estilo de Vida",
            "Estudio Completo de Colorimetría & Telas",
            "Auditoría y Depuración de Armario",
            "Jornada de Personal Shopping Exclusivo",
            "Lookbook Digital con 40+ combinaciones",
            "30 días de asesoría continua por WhatsApp",
          ],
        },
        {
          id: "wardrobe",
          title: "Auditoría de Armario & Cápsula",
          tag: "Alto Impacto",
          desc: "Convierte tu clóset saturado en un santuario ordenado con combinaciones sofisticadas usando lo que ya tienes.",
          duration: "Jornada Intensiva",
          format: "En Domicilio",
          features: [
            "Evaluación de siluetas, patronaje y ajustes",
            "Depuración consciente y organización física",
            "Creación de 20+ fórmulas listas para usar",
            "Lista quirúrgica de compras con piezas clave",
            "Fotogalería de looks organizada en tu teléfono",
          ],
        },
        {
          id: "color",
          title: "Colorimetría & Silueta en Estudio",
          tag: "Sesión Firma",
          desc: "Domina tus tonos. Conoce los contrastes, metales y cortes que acentúan tu belleza natural sin depender de dogmas.",
          duration: "3 Horas",
          format: "Estudio Privado",
          features: [
            "Test físico con pañoletas de seda y lana",
            "Armonización de subtono, ojos y cabello",
            "Paleta física de muestras de color para llevar",
            "Guía de joyería, maquillaje y escotes ideales",
            "Dossier digital de proporciones corporales",
          ],
        },
      ],
    },
    experience: {
      index: "04 / 04",
      category: "La Experiencia",
      title: "Elegancia sin esfuerzo, paso a paso.",
      intro:
        "Un camino sereno y sin juicios diseñado para darte autonomía y disfrute en cada elección.",
      steps: [
        {
          number: "Paso 01",
          title: "Llamada de Descubrimiento",
          description:
            "20 minutos de conversación para resolver dudas, conocer tus metas y elegir el servicio ideal.",
        },
        {
          number: "Paso 02",
          title: "Sesiones en Estudio o Casa",
          description:
            "Trabajamos de forma práctica y cercana en telas, cortes y orden de armario con enfoque empático.",
        },
        {
          number: "Paso 03",
          title: "Tu Guía Permanente",
          description:
            "Recibes tu catálogo de estilismos y pautas definitivas para vestir con confianza cada mañana.",
        },
      ],
      imageSrc: "/images/wardrobe.jpg",
      imageAlt: "Armario cápsula minimalista y sofisticado",
      quote:
        "Trabajar con Aura cambió mis mañanas para siempre. Dejé de mirar mi armario con frustración y por fin veo en el espejo a alguien que se siente auténticamente yo.",
      authorName: "Valeria C.",
      authorRole: "Directora Creativa & Consultora",
      cta: "Agendar una conversación",
    },
    modal: {
      eyebrow: "Conectemos",
      title: "Inicia tu camino de imagen",
      subtitle: "Compártenos tus datos e inquietudes de estilo para coordinar tu sesión.",
      services: [
        "The Signature Transformation (4 Semanas)",
        "Auditoría de Armario & Cápsula (1 Día)",
        "Colorimetría & Silueta en Estudio",
        "Consulta General de Estilismo",
      ],
    },
    footer: {
      ctaKicker: "Comienza tu evolución",
      ctaHeadline: "¿Lista para encontrarte con la versión de ti que ",
      ctaHighlight: "se siente como hogar",
      ctaButton: "Hablemos",
      description:
        "Un atelier de consultoría de imagen personal devoto a potenciar tu presencia con autenticidad, gracia y precisión atemporal.",
    },
  },

  men: {
    brand: {
      name: "aura",
      studio: "HOMME · SASTRERÍA & IMAGEN",
      tagline: "Asesoría de Imagen Masculina & Presencia",
    },
    nav: {
      approach: "El Método Sastre",
      services: "Servicios Homme",
      howItWorks: "El Proceso",
      cta: "Agendar Consulta",
    },
    hero: {
      kicker: "Asesoría de Imagen & Presencia Masculina",
      titleLine1: "Tu presencia.",
      titleLine2: "Tu firma.",
      titleHighlight: "Tu momento.",
      description:
        "La verdadera elegancia masculina no exige artificios, sino precisión, proporciones intachables y la serenidad de saber exactamente quién eres.",
      primaryCta: "Diseñar mi presencia",
      secondaryCta: "Conocer el método sastre",
      imageSrc: "/images/men-hero.jpg",
      imageAlt: "Aura Homme - Asesoría de Imagen Masculina y Presencia",
      badgeText: "LA PRESENCIA NO SE IMPROVISA, SE CONSTRUYE.",
      counterText: "01 / 04 — Sastrería & Arquitectura Personal",
    },
    beyond: {
      index: "01 / 04",
      category: "Más allá del traje",
      headlineStart: "El verdadero poder de tu estilo es la seguridad que ",
      headlineHighlight: "proyectas sin forzarlo.",
      body: "El estilo masculino contemporáneo va mucho más allá de un traje convencional. Se trata de dominar los códigos visuales (caídas de tejido, proporciones de solapa y contrastes de color) para que tu imagen comunique autoridad, sofisticación y naturalidad.",
      linkText: "Explorar el método masculino",
    },
    approach: {
      index: "02 / 04",
      category: "El Método Sastre",
      title: "Una metodología de precisión: desde la caída del hombro hasta ",
      highlight: "el último detalle",
      titleEnd: ".",
      intro:
        "Elevamos tu estándar diario combinando la maestría de la sastrería clásica con la versatilidad del guardarropa contemporáneo.",
      imageSrc: "/images/men-fabrics.jpg",
      imageAlt: "Selección de tejidos de sastrería noble y accesorios",
      steps: [
        {
          num: "01",
          title: "Diagnóstico Ejecutivo & Hábitos",
          desc: "Analizamos tu entorno profesional, compromisos sociales y nivel de confort para definir tu firma estética personal.",
        },
        {
          num: "02",
          title: "Colorimetría Masculina & Tejidos",
          desc: "Estudio de contrastes faciales para seleccionar tonalidades exactas en paños de lana, sedas, camisería y pieles nobles.",
        },
        {
          num: "03",
          title: "Arquitectura de Sastrería & Calce",
          desc: "Corrección milimétrica de proporciones: anchos de solapa, largos de manga, tiro de pantalón y armonía de hombros.",
        },
        {
          num: "04",
          title: "El Fondo de Armario Ejecutivo",
          desc: "Estructuración de un sistema cápsula de alta gama con combinaciones impecables para juntas, viajes y fines de semana.",
        },
      ],
      cta: "Descubre cómo elevar tu guardarropa",
    },
    services: {
      index: "03 / 04",
      category: "Servicios Masculinos",
      title: "Programas de imagen y sastrería para líderes que valoran su tiempo.",
      intro:
        "Diseñado para profesionales y empresarios que requieren una presencia contundente, refinada y sin complicaciones operativas.",
      items: [
        {
          id: "executive-overhaul",
          title: "The Executive & Bespoke Overhaul",
          tag: "Programa Integral",
          desc: "Consultoría completa de presencia ejecutiva, fondo de armario y asesoría directa de confección a medida.",
          duration: "4 Semanas",
          format: "Presencial Privado",
          features: [
            "Auditoría de Marca Personal & Liderazgo",
            "Estudio de Colorimetría & Paños de Traje",
            "Limpieza Quirúrgica del Armario Actual",
            "Acompañamiento a Sastrería & Compras Privadas",
            "Dossier Digital con 35+ combinaciones formales y casuales",
            "Soporte directo de estilismo para eventos clave",
          ],
        },
        {
          id: "smart-casual",
          title: "Armario Cápsula Smart-Casual",
          tag: "Máxima Versatilidad",
          desc: "La transición perfecta entre el traje formal y la ropa relajada de negocios con prendas atemporales de altísima calidad.",
          duration: "Jornada Intensiva",
          format: "En Domicilio / Suite",
          features: [
            "Auditoría y optimización de blazers, knits y calzado",
            "Eliminación de compras impulsivas y piezas obsoletas",
            "20 fórmulas para reuniones, viajes y cenas",
            "Curaduría de marcas de lujo silencioso (quiet luxury)",
            "Guía de cuidado y mantenimiento de calzado y lanas",
          ],
        },
        {
          id: "tailoring-color",
          title: "Colorimetría & Calce en Estudio",
          tag: "Precisión Sastre",
          desc: "Aprende qué cortes, texturas y gamas cromáticas favorecen tu fisonomía y potencian tu autoridad visual.",
          duration: "2.5 Horas",
          format: "Estudio Privado",
          features: [
            "Muestrario de tejidos: franela, cashmere, lino y sedas",
            "Definición de gama de camisería, corbatas y pañuelos",
            "Guía de combinaciones de calzado (oxford, monk, mocasín)",
            "Asesoría de accesorios: relojes, cinturones y gafas",
            "Ficha técnica con medidas ideales de calce",
          ],
        },
      ],
    },
    experience: {
      index: "04 / 04",
      category: "La Experiencia Homme",
      title: "Precisión sastre con cero pérdida de tiempo.",
      intro:
        "Un proceso eficiente y directo, concebido para ejecutivos con agendas demandantes.",
      steps: [
        {
          number: "Paso 01",
          title: "Diagnóstico Rápido",
          description:
            "Evaluación de 20 minutos de tus objetivos de imagen corporativa o personal.",
        },
        {
          number: "Paso 02",
          title: "Sesión de Precisión",
          description:
            "Revisión de prendas, selección de tejidos y ajustes de calce con criterio experto.",
        },
        {
          number: "Paso 03",
          title: "Blueprint de Estilo",
          description:
            "Recibes tu manual digital con fórmulas de combinación para no pensar qué ponerte jamás.",
        },
      ],
      imageSrc: "/images/men-wardrobe.jpg",
      imageAlt: "Armario cápsula masculino con trajes a medida y punto fino",
      quote:
        "La asesoría con Aura simplificó mi vida por completo. Antes vestirme para juntas de directorio o viajes era una carga; ahora sé exactamente qué piezas funcionan y el impacto en mi seguridad ha sido rotundo.",
      authorName: "Carlos R.",
      authorRole: "Managing Director & Inversor",
      cta: "Solicitar sesión inicial",
    },
    modal: {
      eyebrow: "Atelier Masculino",
      title: "Reserva tu consultoría de imagen",
      subtitle: "Indícanos tus requerimientos de presencia para coordinar tu cita privada.",
      services: [
        "The Executive & Bespoke Overhaul (4 Semanas)",
        "Armario Cápsula Smart-Casual (1 Día)",
        "Colorimetría & Calce Sastre en Estudio",
        "Asesoría Especial para Evento / Gala",
      ],
    },
    footer: {
      ctaKicker: "Construye tu estándar",
      ctaHeadline: "¿Listo para proyectar una presencia que ",
      ctaHighlight: "hable por ti antes de hablar",
      ctaButton: "Agendar Consulta",
      description:
        "Práctica exclusiva de consultoría de imagen y sastrería masculina, dedicada a esculpir una presencia imponente, sobria y atemporal.",
    },
  },
};
