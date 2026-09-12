/**
 * idioma2.js — Traductor ES/EN para nosotros2.html
 * Versión corregida y robusta
 */

// =========================================
// DICCIONARIO DE TRADUCCIONES
// =========================================
const textsByLang2 = {

    // =========================================
    // ESPAÑOL
    // =========================================
    es: {
        // ---------- NAV ----------
        'nav2__link-item': ['Inicio', 'Servicios', 'Contáctanos'],

        // ---------- HERO ----------
        'hero-badge-1': 'ApexNova Strategies',
        'hero-badge-2': 'Desde 2018',
        'hero__title2': 'Somos un equipo comprometido con la <span class="hero__title-highlight2">excelencia</span> y el servicio excepcional.',
        'hero__paragraph2': 'Nuestro enfoque centrado en el cliente logra excelentes resultados y relaciones duraderas.',
        'hero-cta-primary2': 'Contáctanos <span class="cta2__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost2': 'Ver servicios',

        // Métricas hero
        'metric-label': ['Certificaciones', 'Empresas', 'Años'],

        // ---------- SECTION HEADERS ----------
        'section-header2__eyebrow': [
            '01 — Sobre nosotros',
            '02 — Lo que nos define',
            '03 — Quiénes somos',
            '04 — Cómo trabajamos',
            '05 — Nuestros servicios',
            '06 — Estándares internacionales'
        ],

        // ---------- ABOUT ----------
        'subtitle2': '¿Buscas <span class="text-gradient2">certificaciones alimentarias</span> confiables?',
        'about2__paragraph': 'Nuestra consultoría se especializa en proporcionar certificaciones alimentarias confiables que cumplen con los estándares más altos de la industria.',
        'about2__title1': 'Misión',
        'about2__title2': 'Visión',
        'about2__paragrah1': 'Ayudar a nuestros clientes mediante el desarrollo, implementación, mantenimiento y mejora continua en sus sistemas de gestión, permitiéndoles lograr la eficiencia en sus procesos y crear o mantener una ventaja competitiva a través del tiempo.',
        'about2__paragrah2': 'Ser una empresa líder al nivel nacional y ser socios estratégicos de nuestros clientes, que apuesten por la mejora continua en sus organizaciones y como personas.',

        // ---------- PRINCIPIOS ----------
        'principio1': 'Nuestros <span class="text-gradient-light2">Principios</span>',
        'principio2': 'Integridad',
        'detalle1': 'Nos comprometemos a actuar con honestidad, transparencia y ética en todas nuestras operaciones y relaciones comerciales.',
        'principio3': 'Innovación',
        'detalle2': 'Buscamos constantemente nuevas formas de mejorar y crecer, fomentando la innovación en todo lo que hacemos.',
        'principio4': 'Respeto',
        'detalle3': 'Tratar a los demás con consideración, empatía y cortesía en cada interacción.',
        'principio5': 'Creatividad',
        'detalle4': 'Buscar nuevas ideas, soluciones y perspectivas para abordar problemas y desafíos.',

        // ---------- NOSOTROS ----------
        'nosotros-quote': 'Somos una empresa que presta servicios de asesoramiento, auditorías e inspecciones, monitoreos ocupacionales, implementación y formación de auditores.',
        'section-title3': 'Somos tu <span class="text-gradient2">socio estratégico</span> en la industria alimentaria.',
        'somos1': 'Trabajamos con empresas que buscan hacer sus operaciones más rentables a través de una asesoría integral y especializada que les permita desarrollar y optimizar sus actividades.',

        // ---------- METODOLOGÍA ----------
        'meto1': 'Nuestra <span class="text-gradient2">Metodología</span>',
        'meto2': 'Una metodología rigurosa y orientada a resultados, dividida en cinco etapas clave.',
        'meto3': 'Entendimiento del Cliente',
        'meto4': 'Análisis y Diagnóstico',
        'meto5': 'Desarrollo de Estrategias',
        'meto6': 'Implementación y Seguimiento',
        'meto7': 'Evaluación y Mejora',
        'timeline__text': [
            'Nos sumergimos en la comprensión de las necesidades, objetivos y desafíos únicos de cada cliente.',
            'Realizamos un análisis exhaustivo de la situación actual del cliente, identificando áreas de mejora y oportunidades.',
            'Trabajamos en estrecha colaboración con el cliente para desarrollar estrategias personalizadas que aborden sus desafíos y alcancen sus objetivos.',
            'Implementamos las soluciones acordadas y monitoreamos continuamente su efectividad, haciendo ajustes según sea necesario.',
            'Evaluamos regularmente el progreso y los resultados obtenidos, buscando siempre maneras de mejorar y optimizar nuestros enfoques y procesos.'
        ],

        // ---------- HELP ----------
        'section-title6': '¿Cómo podemos <span class="text-gradient2">ayudarte</span>?',
        'asesora1': 'Asesoramiento Personalizado',
        'asesora4': 'Recibe asesoramiento individualizado de nuestro equipo de expertos para encontrar soluciones a tus desafíos.',
        'asesora2': 'Capacitación Especializada',
        'asesora5': 'Accede a programas de capacitación diseñados específicamente para tus necesidades, impartidos por profesionales de la industria.',
        'asesora3': 'Soluciones a Medida',
        'asesora6': 'Desarrollamos soluciones personalizadas para tu empresa, adaptadas a tus objetivos y requerimientos específicos.',

        // ---------- CARRUSEL ----------
        'subtitle4-2': 'Asesoramiento técnico para la obtención de certificaciones',

        // ---------- FOOTER ----------
        'footer2__tagline': 'Consultoría científica independiente en certificaciones alimentarias.',
        'footer2__heading': ['Contacto', 'Newsletter'],
        'footer2__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Perú',
        'footer2__newsletter-text': 'Recibe insights sobre certificaciones y normativas.',
        'footer2__newsletter-placeholder': 'tu@correo.com',
        'footer2__copyright': '© 2025 Consultoría Biológica · Todos los derechos reservados',
        'footer2__credits': 'Rigor científico · Compromiso profesional'
    },

    // =========================================
    // INGLÉS
    // =========================================
    en: {
        // ---------- NAV ----------
        'nav2__link-item': ['Home', 'Services', 'Contact'],

        // ---------- HERO ----------
        'hero-badge-1': 'ApexNova Strategies',
        'hero-badge-2': 'Since 2018',
        'hero__title2': 'We are a team committed to <span class="hero__title-highlight2">excellence</span> and exceptional service.',
        'hero__paragraph2': 'Our customer-centric approach achieves excellent results and lasting relationships.',
        'hero-cta-primary2': 'Contact us <span class="cta2__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost2': 'View services',

        // Métricas hero
        'metric-label': ['Certifications', 'Companies', 'Years'],

        // ---------- SECTION HEADERS ----------
        'section-header2__eyebrow': [
            '01 — About us',
            '02 — What defines us',
            '03 — Who we are',
            '04 — How we work',
            '05 — Our services',
            '06 — International standards'
        ],

        // ---------- ABOUT ----------
        'subtitle2': 'Looking for <span class="text-gradient2">reliable food certifications</span>?',
        'about2__paragraph': 'Our consultancy specializes in providing reliable food certifications that meet the highest industry standards.',
        'about2__title1': 'Mission',
        'about2__title2': 'Vision',
        'about2__paragrah1': 'To help our clients through the development, implementation, maintenance, and continuous improvement of their management systems, enabling them to achieve efficiency in their processes and create or maintain a competitive advantage over time.',
        'about2__paragrah2': 'To be a leading company at the national level and a strategic partner of our clients, who bet on continuous improvement in their organizations and as individuals.',

        // ---------- PRINCIPIOS ----------
        'principio1': 'Our <span class="text-gradient-light2">Principles</span>',
        'principio2': 'Integrity',
        'detalle1': 'We commit to act with honesty, transparency, and ethics in all our operations and business relationships.',
        'principio3': 'Innovation',
        'detalle2': 'We constantly seek new ways to improve and grow, fostering innovation in everything we do.',
        'principio4': 'Respect',
        'detalle3': 'Treating others with consideration, empathy, and courtesy in every interaction.',
        'principio5': 'Creativity',
        'detalle4': 'Seeking new ideas, solutions, and perspectives to address problems and challenges.',

        // ---------- NOSOTROS ----------
        'nosotros-quote': 'We are a company that provides consultancy, audits and inspections, occupational monitoring, implementation, and auditor training services.',
        'section-title3': 'We are your <span class="text-gradient2">strategic partner</span> in the food industry.',
        'somos1': 'We work with companies looking to make their operations more profitable through comprehensive and specialized consultancy that allows them to develop and optimize their activities.',

        // ---------- METODOLOGÍA ----------
        'meto1': 'Our <span class="text-gradient2">Methodology</span>',
        'meto2': 'A rigorous, results-oriented methodology divided into five key stages.',
        'meto3': 'Client Understanding',
        'meto4': 'Analysis and Diagnosis',
        'meto5': 'Strategy Development',
        'meto6': 'Implementation and Monitoring',
        'meto7': 'Evaluation and Improvement',
        'timeline__text': [
            'We immerse ourselves in understanding the unique needs, objectives, and challenges of each client.',
            'We conduct a comprehensive analysis of the client\'s current situation, identifying areas for improvement and opportunities.',
            'We work closely with the client to develop customized strategies that address their challenges and achieve their goals.',
            'We implement the agreed-upon solutions and continuously monitor their effectiveness, making adjustments as necessary.',
            'We regularly evaluate progress and results achieved, always seeking ways to improve and optimize our approaches and processes.'
        ],

        // ---------- HELP ----------
        'section-title6': 'How can we <span class="text-gradient2">help you</span>?',
        'asesora1': 'Personalized Consulting',
        'asesora4': 'Receive personalized advice from our team of experts to find solutions to your challenges.',
        'asesora2': 'Specialized Training',
        'asesora5': 'Access training programs designed specifically for your needs, delivered by industry professionals.',
        'asesora3': 'Tailored Solutions',
        'asesora6': 'We develop customized solutions for your company, tailored to your specific goals and requirements.',

        // ---------- CARRUSEL ----------
        'subtitle4-2': 'Advice for obtaining certifications',

        // ---------- FOOTER ----------
        'footer2__tagline': 'Independent scientific consultancy in food certifications.',
        'footer2__heading': ['Contact', 'Newsletter'],
        'footer2__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Peru',
        'footer2__newsletter-text': 'Get insights on certifications and regulations.',
        'footer2__newsletter-placeholder': 'your@email.com',
        'footer2__copyright': '© 2025 Biological Consultancy · All rights reserved',
        'footer2__credits': 'Scientific rigor · Professional commitment'
    }
};

// =========================================
// UTILIDADES
// =========================================
function setContent2(el, value) {
    if (!el || value === undefined || value === null) return;
    if (typeof value !== 'string') return;

    // Si contiene etiquetas HTML, usar innerHTML
    if (/<[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
    } else {
        el.textContent = value;
    }
}

function setList2(selector, values) {
    if (!values || !Array.isArray(values)) return;
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, i) => {
        if (values[i] !== undefined) {
            setContent2(el, values[i]);
        }
    });
}

// =========================================
// FUNCIÓN PRINCIPAL
// =========================================
function updateTexts2(language) {
    const dict = textsByLang2[language];
    if (!dict) {
        console.warn('idioma2.js: idioma no soportado:', language);
        return;
    }

    // ---------- NAV ----------
    setList2('.nav2__link-item', dict['nav2__link-item']);

    // ---------- HERO ----------
    const badges = document.querySelectorAll('.hero2__badge');
    if (badges[0]) {
        badges[0].innerHTML = `<span class="hero2__badge-dot" aria-hidden="true"></span>${dict['hero-badge-1']}`;
    }
    if (badges[1]) {
        badges[1].textContent = dict['hero-badge-2'];
    }

    setContent2(document.querySelector('.hero__title2'), dict['hero__title2']);
    setContent2(document.querySelector('.hero__paragraph2'), dict['hero__paragraph2']);
    setContent2(document.querySelector('.hero2__cta-group .cta2--primary'), dict['hero-cta-primary2']);
    setContent2(document.querySelector('.hero2__cta-group .cta2--ghost'), dict['hero-cta-ghost2']);

    setList2('.hero2__metric-label', dict['metric-label']);

    // ---------- SECTION HEADERS (eyebrows) ----------
    setList2('.section-header2__eyebrow', dict['section-header2__eyebrow']);

    // ---------- ABOUT ----------
    setContent2(document.querySelector('.subtitle2'), dict['subtitle2']);
    setContent2(document.querySelector('.about2__paragraph'), dict['about2__paragraph']);
    setContent2(document.querySelector('.about2__title1'), dict['about2__title1']);
    setContent2(document.querySelector('.about2__title2'), dict['about2__title2']);
    setContent2(document.querySelector('.about2__paragrah1'), dict['about2__paragrah1']);
    setContent2(document.querySelector('.about2__paragrah2'), dict['about2__paragrah2']);

    // ---------- PRINCIPIOS ----------
    setContent2(document.querySelector('.principio1'), dict['principio1']);
    setContent2(document.querySelector('.principio2'), dict['principio2']);
    setContent2(document.querySelector('.detalle1'), dict['detalle1']);
    setContent2(document.querySelector('.principio3'), dict['principio3']);
    setContent2(document.querySelector('.detalle2'), dict['detalle2']);
    setContent2(document.querySelector('.principio4'), dict['principio4']);
    setContent2(document.querySelector('.detalle3'), dict['detalle3']);
    setContent2(document.querySelector('.principio5'), dict['principio5']);
    setContent2(document.querySelector('.detalle4'), dict['detalle4']);

    // ---------- NOSOTROS ----------
    setContent2(document.querySelector('.nosotros2__quote-text'), dict['nosotros-quote']);
    setContent2(document.querySelector('.section-title3'), dict['section-title3']);
    setContent2(document.querySelector('.somos1'), dict['somos1']);

    // ---------- METODOLOGÍA ----------
    setContent2(document.querySelector('.meto1'), dict['meto1']);
    setContent2(document.querySelector('.meto2'), dict['meto2']);
    setContent2(document.querySelector('.meto3'), dict['meto3']);
    setContent2(document.querySelector('.meto4'), dict['meto4']);
    setContent2(document.querySelector('.meto5'), dict['meto5']);
    setContent2(document.querySelector('.meto6'), dict['meto6']);
    setContent2(document.querySelector('.meto7'), dict['meto7']);

    setList2('.timeline__text', dict['timeline__text']);

    // ---------- HELP ----------
    setContent2(document.querySelector('.section-title6'), dict['section-title6']);
    setContent2(document.querySelector('.asesora1'), dict['asesora1']);
    setContent2(document.querySelector('.asesora4'), dict['asesora4']);
    setContent2(document.querySelector('.asesora2'), dict['asesora2']);
    setContent2(document.querySelector('.asesora5'), dict['asesora5']);
    setContent2(document.querySelector('.asesora3'), dict['asesora3']);
    setContent2(document.querySelector('.asesora6'), dict['asesora6']);

    // ---------- CARRUSEL ----------
    setContent2(document.querySelector('.subtitle4-2'), dict['subtitle4-2']);

    // ---------- FOOTER ----------
    setContent2(document.querySelector('.footer2__tagline'), dict['footer2__tagline']);
    setList2('.footer2__heading', dict['footer2__heading']);

    const addressEl = document.querySelector('.footer2__contact-info p:first-child');
    if (addressEl) setContent2(addressEl, dict['footer2__address']);

    setContent2(document.querySelector('.footer2__newsletter-text'), dict['footer2__newsletter-text']);

    const newsInput = document.querySelector('.footer2__newsletter-input');
    if (newsInput) newsInput.placeholder = dict['footer2__newsletter-placeholder'];

    setContent2(document.querySelector('.footer2__copyright'), dict['footer2__copyright']);
    setContent2(document.querySelector('.footer2__credits'), dict['footer2__credits']);

    // ---------- HTML LANG ----------
    document.documentElement.lang = language;
}

// =========================================
// INICIALIZACIÓN
// =========================================
document.addEventListener('DOMContentLoaded', () => {

    const select = document.getElementById('language-select');
    if (!select) {
        console.warn('idioma2.js: no se encontró #language-select');
        return;
    }

    // Idioma guardado o detección del navegador
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = (navigator.language || 'es').slice(0, 2);
    const initialLang = savedLang || (['es', 'en'].includes(browserLang) ? browserLang : 'es');

    // Aplicar idioma inicial
    select.value = initialLang;
    updateTexts2(initialLang);

    // Cambio de idioma
    select.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('selectedLanguage', lang);
        updateTexts2(lang);
    });

});