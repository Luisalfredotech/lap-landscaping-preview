/* LAP Landscaping — prototype interactions (v2)
   Local prototype only. No analytics, no third-party calls.
*/
(function () {
  'use strict';

  /* ============== i18n DICTIONARY ============== */
  const dict = {
    en: {
      'meta.title': 'Landscaping & Paver Patios in Troutman & Lake Norman NC | LAP',
      'meta.desc': 'LAP Landscaping — family-run hardscape & landscape crew in Troutman NC. Paver patios, irrigation, lighting, drainage. Bilingual. Licensed. Free estimates.',
      'util.area': 'Proudly Serving Lake Norman & Surrounding Areas',
      'util.bilingual': 'Hablamos Español | We proudly serve clients in English & Spanish',
      'nav.services': 'Services',
      'nav.work': 'Our Work',
      'nav.about': 'About LAP',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'cta.estimate': 'Get a Free Estimate',
      'cta.work': 'View Our Work →',
      'hero.pill': 'Family-run hardscape & landscape crew · Troutman, NC',
      'hero.region': 'Serving Troutman, Mooresville, Statesville & the Lake Norman area',
      'hero.badge1': '100% Satisfaction Guaranteed',
      'hero.badge2': 'Free, no-pressure estimate',
      'trust.t1': 'Licensed & Insured',
      'trust.p1': 'Fully licensed for North Carolina. Every project is insured from day one to handover.',
      'trust.t2': 'Detail-Oriented Craftsmanship',
      'trust.p2': 'Proper base prep, edge restraint, and clean finishing on every paver, plant, and pipe.',
      'trust.t3': 'Custom Solutions',
      'trust.p3': 'No cookie-cutter packages. Every landscape is designed around your home, lot, and lifestyle.',
      'trust.t4': 'Satisfaction Guaranteed',
      'trust.p4': 'Your yard, your way. We don\'t leave the driveway until the work meets your standard.',
      'projects.eyebrow': 'Featured Projects',
      'projects.title': 'Outdoor Spaces Built to Impress.',
      'projects.p': 'Recent paver patios, retaining walls, sod restorations and lighting installs across the Lake Norman area. Photos from current LAP project files.',
      'projects.cta': 'Start Your Project →',
      'svc.learn': 'Learn More →',
      'faq.title.en': 'Frequently Asked Questions',
      'faq.title.es': ' | Preguntas Frecuentes',
      'cta.title.en': 'Ready to Elevate Your Outdoor Space?',
      'cta.title.es': ' | ¿Listo para transformar su espacio exterior?',
      'cta.btn1': 'Get a Free Estimate',
      'cta.btn2': 'Or Call 704-327-5663',
      'ftr.lang': 'Language',
      'ftr.privacy': 'Privacy Policy',
      'ftr.sms': 'SMS Terms',
      'hero.title': 'Paver Patios, Irrigation & Landscaping for <em>Lake Norman</em> Homes',
      'hero.lede': 'Same crew on every job — we walk your property, draw the plan, and build the patio, irrigation, lighting or drainage ourselves.',
      'hero.bilingual': '🌎 Se habla Español | We speak English & Spanish',
      'hero.mini': 'Quality-first <strong>hardscape specialists</strong>',
      'hero.trust': '<span class="hero-trust-stars" aria-hidden="true">★★★★★</span><span><strong>100% Satisfaction Guaranteed</strong> · Free, no-pressure estimate</span>',
      'pg.eyebrow': 'How We Build It',
      'pg.title': 'From Bare Yard to Finished Outdoor Living',
      'pg.lede': 'Four stages of an LAP build: site walk, plan, install, hand-off.',
      'pg.s1.h': 'Site walk',
      'pg.s1.p': 'We walk the property, listen to your goals, and map the constraints.',
      'pg.s2.h': 'Plan',
      'pg.s2.p': 'Materials, layout and drainage drawn up — priced clearly before a shovel turns.',
      'pg.s3.h': 'Install',
      'pg.s3.p': 'Same crew, on-site. Base prepped, edges restrained, cleaned daily.',
      'pg.s4.h': 'Hand-off',
      'pg.s4.p': 'Walk-through, care plan, optional seasonal upkeep — and we stand behind it.',
      'ftr.signoff.tag': 'Built to last. Built local.',
      'services.eyebrow': 'What We Do',
      'services.title': 'Complete Outdoor Solutions',
      'services.lede': 'Six services. One crew. The same team walks your property, draws the plan, and builds the result.',
      'svc.link': 'Explore →',
      'svc.patio.tag': 'Patios & Walls',
      'svc.patio.h': 'Paver Patios & Retaining Walls',
      'svc.patio.p': 'Patios, walkways, retaining walls and outdoor living spaces engineered to handle North Carolina weather.',
      'svc.irr.tag': 'Sprinklers',
      'svc.irr.h': 'Irrigation & Sprinkler Systems',
      'svc.irr.p': 'Smart, zoned watering that keeps your lawn green and your water bill low — installed and tuned to your property.',
      'svc.sod.tag': 'Sod & Lawn',
      'svc.sod.h': 'Sod Installation & Lawn Care',
      'svc.sod.p': 'Final grading, fresh sod, aeration and seasonal care for a lawn that looks new from day one.',
      'svc.light.tag': 'Lighting',
      'svc.light.h': 'Landscape Lighting',
      'svc.light.p': 'Path, deck and accent lighting that extends your evenings outside and adds curb appeal after sunset.',
      'svc.drain.tag': 'Drainage',
      'svc.drain.h': 'Drainage & Grading Solutions',
      'svc.drain.p': 'Stop pooling, erosion and basement seepage with proper grading and engineered drainage solutions.',
      'svc.lawn.tag': 'Mulch & Pruning',
      'svc.lawn.h': 'Mulch, Aeration & Pruning',
      'svc.lawn.p': 'Seasonal upkeep that protects beds, feeds lawns and keeps trees and shrubs healthy year-round.',
      'svc.stone.h': 'Travertine & Natural Stone',
      'svc.stone.p': 'Pool decks, patios and walkways in Florida tumbled travertine, marble and natural stone — mortar-set and sealed.',
      'svc.concrete.h': 'Concrete Work',
      'svc.concrete.p': 'Sidewalks, driveways and slab patios — proper grade, control joints, broom or brushed finish.',
      'svc.dry.h': 'Drywall & Finishing',
      'svc.dry.p': 'Gypsum board hung, taped, floated and textured — walls and ceilings ready for paint.',
      'about.badge.t': 'Local crew',
      'about.badge.s': 'No subs, no shortcuts',
      'about.eyebrow': 'About LAP',
      'about.title': 'Built on Integrity. Focused on Quality. Proudly Local.',
      'about.p': "LAP Landscaping is a small, family-run crew based in Troutman, NC. We do hardscape and landscape work for homeowners across the Lake Norman area. The same team walks your property, draws the plan, and builds it — no subs, no surprises.",
      'about.l1': '<strong>Single accountable crew.</strong> The people who quote your job are the people who build it.',
      'about.l2': '<strong>Hardscape specialists.</strong> Pavers, walls and outdoor living are our craft — not an afterthought.',
      'about.l3': '<strong>Bilingual & local.</strong> Full English and Spanish service so every homeowner gets the same clarity.',
      'about.cta': 'Talk to the LAP Crew',
      'process.eyebrow': 'How We Work',
      'process.title': 'A Simple, Proven Process',
      'process.s1.h': 'Consult', 'process.s1.p': 'We visit your property, listen to your goals, and take measurements.',
      'process.s2.h': 'Design', 'process.s2.p': 'You receive a clear plan and a written quote — materials, layout, drainage, and price.',
      'process.s3.h': 'Build', 'process.s3.p': 'Our in-house crew prepares the site, installs hardscape and softscape, and cleans daily.',
      'process.s4.h': 'Maintain', 'process.s4.p': 'Optional seasonal care — aeration, mulch refresh, irrigation tuning — keeps it looking new.',
      'reviews.eyebrow': 'References',
      'reviews.title': 'Talk to a Recent LAP Client',
      'reviews.lede': "We're collecting our first batch of Google reviews. Until then, call us and we'll connect you with a recent customer in the Lake Norman area who'll walk you through their project.",
      'rev.refs.q': '<strong>Ask for a client reference.</strong> We will put you in touch with a homeowner whose paver patio, irrigation system or retaining wall LAP built — same crew, same region.',
      'rev.refs.cta': 'Call 704-327-5663',
      'faq.eyebrow': 'FAQ',
      'faq.lede': 'Common questions, real answers — in English or Spanish.',
      'faq.cta': 'Ask Us Anything →',
      'faq.q1': 'Who will work on my landscape?',
      'faq.a1': 'The only people who will work on your landscape are LAP Landscaping employees. Our team members have experience and we will all be informed with your landscaping needs.',
      'faq.q2': 'Are you insured and licensed?',
      'faq.a2': 'We have all necessary licenses for our area, and we carry insurance for all of our projects.',
      'faq.q3': 'What kind of landscaping do you do?',
      'faq.a3': 'We can do all kinds of landscaping, such as tree and shrubs pruning & installations, mulch, top soil, retaining walls, paver patios and walkways, sprinkler systems, sod installation, landscape lighting installation, lawn aeration, final grading, drainage systems, & much more.',
      'faq.q4': '¿Hablan español?',
      'faq.a4': 'Sí. Tenemos personal bilingüe disponible. Solicite su presupuesto gratuito sin compromiso — atendemos en inglés y español.',
      'cta.eyebrow': 'Free Estimate',
      'cta.p': "No pressure, no upsell. We'll walk the property, listen to your goals, and follow up with a written quote — scope, materials, timeline, price.",
      'cta.trust1': 'Free estimate',
      'cta.trust2': 'Licensed & insured',
      'cta.trust3': 'Bilingual EN · ES',
      'cta.trust4': 'No pressure, no upsell',
      'cta.step1.h': 'We walk your property.',
      'cta.step1.p': 'An LAP crew member visits, listens to how you want to use the space, and takes measurements.',
      'cta.step2.h': 'You get a clear plan.',
      'cta.step2.p': 'A written quote follows — scope, materials, drainage, timeline and price laid out plainly.',
      'cta.step3.h': 'We build it.',
      'cta.step3.p': 'The same crew that quoted the job installs it, cleans up daily, and stands behind the finished space.',
      'cta.btn3': 'Email service@laplandscaping.com',
      'cta.bilingual': '🌎 Hablamos Español · We answer in English & Spanish.',
      'cta.fine': 'By submitting, you agree to be contacted about your project. SMS opt-in is optional and you can reply <strong>STOP</strong> to unsubscribe at any time.',
      'ftr.about': 'Designing and building durable outdoor spaces. Bilingual service. Licensed & insured.',
      'ftr.bilingual': '🌎 Hablamos Español',
      'ftr.h.services': 'Services',
      'ftr.h.company': 'Company',
      'ftr.h.contact': 'Contact',
      'ftr.addr': 'Troutman, NC 28166',
      'ftr.legal': 'Privacy Policy · SMS Terms (preserved verbatim from current site)',
      'ftr.rights': 'All rights reserved.',
      'ftr.flag': 'Family-run · Troutman, NC · Serving the Lake Norman area',
      'sticky.call': 'Call',
      /* ----- service page strings ----- */
      'svc.back': '← Back to home',
      'svc.h.includes': "What's included",
      'svc.h.problems': 'Problems we solve',
      'svc.h.process': 'Our process',
      'svc.h.faq': 'Frequently asked',
      'svc.cta': 'Request a free estimate'
    },
    es: {
      'meta.title': 'Paisajismo y Patios de Adoquines en Troutman y Lake Norman NC | LAP',
      'meta.desc': 'LAP Landscaping — equipo familiar de hardscape y paisajismo en Troutman NC. Patios, riego, iluminación, drenaje. Bilingüe. Asegurado. Presupuesto gratis.',
      'util.area': 'Atendemos con Orgullo Lake Norman y Zonas Aledañas',
      'util.bilingual': 'Hablamos Español | Atendemos clientes en inglés y español',
      'nav.services': 'Servicios',
      'nav.work': 'Nuestro Trabajo',
      'nav.about': 'Sobre LAP',
      'nav.gallery': 'Galería',
      'nav.reviews': 'Reseñas',
      'nav.faq': 'Preguntas',
      'nav.contact': 'Contacto',
      'cta.estimate': 'Solicitar Presupuesto Gratis',
      'cta.work': 'Ver Nuestro Trabajo →',
      'hero.pill': 'Equipo familiar de hardscape y paisajismo · Troutman, NC',
      'hero.region': 'Atendemos Troutman, Mooresville, Statesville y la zona de Lake Norman',
      'hero.badge1': '100% Satisfacción Garantizada',
      'hero.badge2': 'Presupuesto gratis, sin presión',
      'trust.t1': 'Con Licencia y Seguro',
      'trust.p1': 'Totalmente licenciado en Carolina del Norte. Cada proyecto cubierto por seguro de inicio a fin.',
      'trust.t2': 'Calidad en los Detalles',
      'trust.p2': 'Base preparada, bordes contenidos y acabados limpios en cada adoquín, planta y tubería.',
      'trust.t3': 'Soluciones a Medida',
      'trust.p3': 'Sin paquetes genéricos. Cada jardín se diseña según su casa, terreno y estilo de vida.',
      'trust.t4': 'Satisfacción Garantizada',
      'trust.p4': 'Su patio, a su manera. No nos vamos hasta que el trabajo cumpla con su estándar.',
      'projects.eyebrow': 'Proyectos Destacados',
      'projects.title': 'Espacios Exteriores Hechos para Impresionar.',
      'projects.p': 'Patios de adoquines, muros, restauraciones de césped e iluminación recientes en la zona de Lake Norman. Imágenes de los archivos de proyecto de LAP.',
      'projects.cta': 'Empiece su Proyecto →',
      'svc.learn': 'Más Información →',
      'faq.title.en': 'Preguntas Frecuentes',
      'faq.title.es': ' | Frequently Asked Questions',
      'cta.title.en': '¿Listo para Transformar su Espacio Exterior?',
      'cta.title.es': ' | Ready to Elevate Your Outdoor Space?',
      'cta.btn1': 'Solicitar Presupuesto Gratis',
      'cta.btn2': 'O Llame al 704-327-5663',
      'ftr.lang': 'Idioma',
      'ftr.privacy': 'Política de Privacidad',
      'ftr.sms': 'Términos de SMS',
      'hero.title': 'Patios de Adoquines, Riego y Paisajismo para Casas en <em>Lake Norman</em>',
      'hero.lede': 'El mismo equipo en cada proyecto — recorremos su propiedad, dibujamos el plan y construimos el patio, riego, iluminación o drenaje nosotros mismos.',
      'hero.bilingual': '🌎 Se habla Español | We speak English & Spanish',
      'hero.mini': 'Calidad primero <strong>especialistas en hardscape</strong>',
      'hero.trust': '<span class="hero-trust-stars" aria-hidden="true">★★★★★</span><span><strong>100% Satisfacción Garantizada</strong> · Presupuesto gratis, sin presión</span>',
      'pg.eyebrow': 'Cómo lo Construimos',
      'pg.title': 'De un Jardín Vacío a un Espacio Exterior Terminado',
      'pg.lede': 'Cuatro etapas de un proyecto LAP: visita, plan, instalación, entrega.',
      'pg.s1.h': 'Visita al sitio',
      'pg.s1.p': 'Recorremos la propiedad, escuchamos sus metas y mapeamos las limitaciones.',
      'pg.s2.h': 'Plan',
      'pg.s2.p': 'Materiales, distribución y drenaje dibujados — con precio claro antes de empezar.',
      'pg.s3.h': 'Instalación',
      'pg.s3.p': 'Mismo equipo, en sitio. Base preparada, bordes contenidos, limpieza diaria.',
      'pg.s4.h': 'Entrega',
      'pg.s4.p': 'Recorrido final, plan de cuidado, mantenimiento opcional de temporada — respaldamos el trabajo.',
      'ftr.signoff.tag': 'Hecho para durar. Hecho localmente.',
      'services.eyebrow': 'Lo Que Hacemos',
      'services.title': 'Soluciones Completas para Espacios Exteriores',
      'services.lede': 'Nueve servicios. Un solo equipo. El mismo equipo recorre su propiedad, dibuja el plan y construye el resultado.',
      'svc.link': 'Ver más →',
      'svc.patio.tag': 'Patios y Muros',
      'svc.patio.h': 'Patios de Adoquines y Muros de Contención',
      'svc.patio.p': 'Patios, caminos, muros de contención y espacios de estar exteriores diseñados para resistir el clima de Carolina del Norte.',
      'svc.irr.tag': 'Riego',
      'svc.irr.h': 'Sistemas de Riego y Aspersores',
      'svc.irr.p': 'Riego inteligente por zonas que mantiene el césped verde y la factura de agua baja — instalado y ajustado a su propiedad.',
      'svc.sod.tag': 'Césped',
      'svc.sod.h': 'Instalación de Césped y Cuidado del Lawn',
      'svc.sod.p': 'Nivelación final, césped fresco, aireación y cuidado de temporada para un césped que se ve nuevo desde el primer día.',
      'svc.light.tag': 'Iluminación',
      'svc.light.h': 'Iluminación de Jardín',
      'svc.light.p': 'Iluminación de senderos, terrazas y acentos que extienden sus noches al aire libre y dan presencia a su casa al anochecer.',
      'svc.drain.tag': 'Drenaje',
      'svc.drain.h': 'Soluciones de Drenaje y Nivelación',
      'svc.drain.p': 'Detenga charcos, erosión y filtraciones en sótanos con nivelación adecuada y soluciones de drenaje diseñadas a medida.',
      'svc.lawn.tag': 'Mantillo y Poda',
      'svc.lawn.h': 'Mantillo, Aireación y Poda',
      'svc.lawn.p': 'Mantenimiento de temporada que protege canteros, alimenta el césped y mantiene árboles y arbustos sanos todo el año.',
      'svc.stone.h': 'Travertino y Piedra Natural',
      'svc.stone.p': 'Cubiertas de piscina, patios y caminos en travertino floridano, mármol y piedra natural — instalados con mortero y sellados.',
      'svc.concrete.h': 'Trabajo en Concreto',
      'svc.concrete.p': 'Aceras, entradas y patios de losa — pendiente correcta, juntas de control, acabado escobillado o cepillado.',
      'svc.dry.h': 'Drywall y Acabados',
      'svc.dry.p': 'Planchas de yeso instaladas, cintadas, flotadas y texturizadas — paredes y techos listos para pintura.',
      'about.badge.t': 'Equipo local',
      'about.badge.s': 'Sin subcontratistas, sin atajos',
      'about.eyebrow': 'Sobre LAP',
      'about.title': 'Construido Sobre Integridad. Enfocado en Calidad. Local con Orgullo.',
      'about.p': 'LAP Landscaping es un equipo familiar pequeño basado en Troutman, NC. Hacemos hardscape y paisajismo para dueños de casa en toda la zona de Lake Norman. El mismo equipo recorre su propiedad, dibuja el plan y lo construye — sin subcontratistas, sin sorpresas.',
      'about.l1': '<strong>Un solo equipo responsable.</strong> Quienes le cotizan son quienes construyen su proyecto.',
      'about.l2': '<strong>Especialistas en hardscape.</strong> Adoquines, muros y espacios exteriores son nuestro oficio — no algo secundario.',
      'about.l3': '<strong>Bilingüe y local.</strong> Servicio completo en inglés y español para que cada cliente reciba la misma claridad.',
      'about.cta': 'Hable con el Equipo LAP',
      'process.eyebrow': 'Cómo Trabajamos',
      'process.title': 'Un Proceso Simple y Probado',
      'process.s1.h': 'Consulta', 'process.s1.p': 'Visitamos su propiedad, escuchamos sus metas y tomamos medidas.',
      'process.s2.h': 'Diseño', 'process.s2.p': 'Recibe un plan claro y un presupuesto por escrito — materiales, distribución, drenaje y precio.',
      'process.s3.h': 'Construcción', 'process.s3.p': 'Nuestro equipo prepara el sitio, instala hardscape y plantas, y limpia cada día.',
      'process.s4.h': 'Mantenimiento', 'process.s4.p': 'Cuidado opcional de temporada — aireación, mantillo, ajuste de riego — para mantener todo como nuevo.',
      'reviews.eyebrow': 'Referencias',
      'reviews.title': 'Hable con un Cliente Reciente de LAP',
      'reviews.lede': 'Estamos reuniendo nuestra primera tanda de reseñas de Google. Mientras tanto, llámenos y lo conectamos con un cliente reciente en la zona de Lake Norman que le cuente cómo fue su proyecto.',
      'rev.refs.q': '<strong>Pida una referencia de cliente.</strong> Lo conectamos con un dueño de casa cuyo patio de adoquines, sistema de riego o muro de contención construyó LAP — mismo equipo, misma región.',
      'rev.refs.cta': 'Llame al 704-327-5663',
      'faq.eyebrow': 'Preguntas Frecuentes',
      'faq.lede': 'Preguntas comunes, respuestas reales — en inglés o español.',
      'faq.cta': 'Pregúntenos lo que sea →',
      'faq.q1': '¿Quién va a trabajar en mi jardín?',
      'faq.a1': 'Solo trabajan en su jardín empleados de LAP Landscaping. Nuestro equipo tiene experiencia y todos estaremos informados de sus necesidades.',
      'faq.q2': '¿Tienen seguro y licencia?',
      'faq.a2': 'Tenemos todas las licencias necesarias para nuestra zona y seguro en todos nuestros proyectos.',
      'faq.q3': '¿Qué tipo de jardinería hacen?',
      'faq.a3': 'Hacemos todo tipo de jardinería: poda e instalación de árboles y arbustos, mantillo, tierra superior, muros de contención, patios y caminos de adoquines, sistemas de riego, instalación de césped, iluminación, aireación, nivelación final, sistemas de drenaje, y mucho más.',
      'faq.q4': '¿Hablan español?',
      'faq.a4': 'Sí. Tenemos personal bilingüe disponible. Solicite su presupuesto gratuito sin compromiso — atendemos en inglés y español.',
      'cta.eyebrow': 'Presupuesto Gratis',
      'cta.p': 'Sin presión, sin venta agresiva. Recorremos la propiedad, escuchamos sus metas y le enviamos un presupuesto por escrito — alcance, materiales, tiempos y precio.',
      'cta.trust1': 'Presupuesto gratis',
      'cta.trust2': 'Con licencia y seguro',
      'cta.trust3': 'Bilingüe EN · ES',
      'cta.trust4': 'Sin presión, sin venta agresiva',
      'cta.step1.h': 'Visitamos su propiedad.',
      'cta.step1.p': 'Un miembro del equipo LAP recorre el lugar, escucha cómo quiere usar el espacio y toma medidas.',
      'cta.step2.h': 'Recibe un plan claro.',
      'cta.step2.p': 'Le enviamos un presupuesto por escrito — alcance, materiales, drenaje, tiempos y precio explicados con claridad.',
      'cta.step3.h': 'Lo construimos.',
      'cta.step3.p': 'El mismo equipo que cotiza el trabajo lo instala, limpia cada día y responde por el espacio terminado.',
      'cta.btn3': 'Escríbanos a service@laplandscaping.com',
      'cta.bilingual': '🌎 Hablamos Español · Atendemos en inglés y español.',
      'cta.fine': 'Al enviar, acepta ser contactado sobre su proyecto. La opción de SMS es opcional y puede responder <strong>STOP</strong> para cancelar en cualquier momento.',
      'ftr.about': 'Diseñamos y construimos espacios exteriores duraderos. Servicio bilingüe. Con licencia y seguro.',
      'ftr.bilingual': '🌎 Hablamos Español',
      'ftr.h.services': 'Servicios',
      'ftr.h.company': 'Empresa',
      'ftr.h.contact': 'Contacto',
      'ftr.addr': 'Troutman, NC 28166',
      'ftr.legal': 'Política de Privacidad · Términos de SMS (preservados textualmente del sitio actual)',
      'ftr.rights': 'Todos los derechos reservados.',
      'ftr.flag': 'Empresa familiar · Troutman, NC · Atendemos la zona de Lake Norman',
      'sticky.call': 'Llamar',
      'svc.back': '← Volver al inicio',
      'svc.h.includes': 'Qué incluye',
      'svc.h.problems': 'Problemas que resolvemos',
      'svc.h.process': 'Nuestro proceso',
      'svc.h.faq': 'Preguntas frecuentes',
      'svc.cta': 'Solicitar presupuesto gratis'
    }
  };

  /* ============== APPLY LANGUAGE ============== */
  function applyLang(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    const d = dict[lang];

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      if (!d[key]) return;
      if (attr) el.setAttribute(attr, d[key]);
      else el.textContent = d[key];
    });

    // html-permissive
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (d[key]) el.innerHTML = d[key];
    });

    // inline per-element strings (used on service pages for page-specific copy)
    const inlineAttr = lang === 'es' ? 'data-es' : 'data-en';
    document.querySelectorAll('[data-en][data-es]').forEach(el => {
      const v = el.getAttribute(inlineAttr);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-en-html][data-es-html]').forEach(el => {
      const v = el.getAttribute(lang === 'es' ? 'data-es-html' : 'data-en-html');
      if (v != null) el.innerHTML = v;
    });

    // toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem('lap.lang', lang); } catch (e) {}
  }

  /* ============== INIT LANGUAGE ============== */
  let initialLang = 'en';
  try {
    const urlLang = new URLSearchParams(location.search).get('lang');
    if (urlLang === 'en' || urlLang === 'es') {
      initialLang = urlLang;
    } else {
      const saved = localStorage.getItem('lap.lang');
      if (saved === 'en' || saved === 'es') initialLang = saved;
      else if ((navigator.language || '').toLowerCase().startsWith('es')) initialLang = 'es';
    }
  } catch (e) {}
  applyLang(initialLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang-btn'));
    });
  });

  /* ============== IMAGE FALLBACK ==============
     If a remote image fails (offline or 404), swap to a CSS gradient tile
     keyed off data-fallback-tile so layout never breaks.
  */
  document.querySelectorAll('img[data-fallback-tile]').forEach(img => {
    img.addEventListener('error', () => {
      const tile = img.getAttribute('data-fallback-tile') || 'patio';
      const replacement = document.createElement('span');
      replacement.className = 'img-fallback';
      replacement.setAttribute('data-tile', tile);
      replacement.setAttribute('aria-hidden', 'true');
      img.replaceWith(replacement);
    }, { once: true });
  });

  /* ============== FOOTER YEAR ============== */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ============== MOBILE NAV ============== */
  const toggle = document.querySelector('.nav-toggle');
  const mnav = document.getElementById('mnav');
  if (toggle && mnav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      if (!open) {
        mnav.hidden = false;
        requestAnimationFrame(() => mnav.classList.add('open'));
      } else {
        mnav.classList.remove('open');
        mnav.hidden = true;
      }
    });
    mnav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mnav.classList.remove('open');
        mnav.hidden = true;
      })
    );
  }

  /* ============== SCROLL REVEAL ============== */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ============== HERO PARALLAX (lightweight) ============== */
  if (!reduced) {
    const heroPhoto = document.querySelector('.hero-photo');
    if (heroPhoto) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.max(0, window.scrollY);
          if (y < 800) {
            heroPhoto.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(${1 + Math.min(y, 600) * 0.00012})`;
          }
          ticking = false;
        });
      }, { passive: true });
    }
  }

  /* ============== HEADER SHADOW ON SCROLL ============== */
  const hdr = document.querySelector('.hdr');
  if (hdr) {
    let last = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 8 && last <= 8) hdr.classList.add('hdr-scrolled');
      else if (y <= 8 && last > 8) hdr.classList.remove('hdr-scrolled');
      last = y;
    }, { passive: true });
  }
})();
