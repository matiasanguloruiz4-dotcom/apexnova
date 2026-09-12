/**
 * idioma2.js — Traductor ES/EN completo para index.html
 * Funciona por selectores CSS (sin necesidad de data-i18n en el HTML)
 */

// =========================================
// DICCIONARIO COMPLETO DE TRADUCCIONES
// =========================================
const textsByLang = {

    // =========================================
    // ESPAÑOL
    // =========================================
    es: {

        // ---------- NAV ----------
        'nav__link-item': ['Nosotros', 'Servicios', 'Contáctanos'],

        // ---------- HERO ----------
        'hero__badge': 'Consultoría científica · Certificaciones internacionales',
        'hero__title': 'Ciencia y <span class="hero__title-highlight">confianza</span> para la excelencia alimentaria.',
        'hero__paragraph': 'Acompañamos a tu empresa con evidencia científica, rigor técnico y estándares internacionales en cada etapa del proceso.',
        'hero-cta-primary': 'Agendar consulta <span class="cta__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost': 'Explorar servicios',

        // Hero stats
        'hero__stat-label': ['Certificaciones', 'Empresas', 'Años'],

        // ---------- ABOUT ----------
        'section-header__eyebrow': [
            'Sobre nosotros',
            'Estándares internacionales',
            'Áreas de especialidad'
        ],
        'subtitle': 'Certificaciones con <span class="text-gradient">rigor científico</span> y compromiso real.',
        'section-header__lead': 'Nuestra consultoría se especializa en proporcionar certificaciones alimentarias confiables que cumplen con los estándares más altos de la industria.',
        'about__title': ['Misión', 'Visión'],
        'about__paragraph': [
            'Ayudar a nuestros clientes mediante el desarrollo, implementación, mantenimiento y mejora continua en sus sistemas de gestión, permitiéndoles lograr la eficiencia en sus procesos y crear o mantener una ventaja competitiva a través del tiempo.',
            'Ser una empresa líder al nivel nacional y ser socios estratégicos de nuestros clientes, que apuesten por la mejora continua en sus organizaciones y como personas.'
        ],

        // ---------- KNOWLEDGE ----------
        'knowledge__eyebrow': 'Nuestro compromiso',
        'subtitle10': 'Garantiza certificaciones que demuestren tu compromiso con la calidad y la <span class="text-gradient-light">seguridad alimentaria</span>.',
        'knowledge__paragraph': 'Con nuestro asesoramiento técnico, cada proceso queda respaldado por evidencia científica y buenas prácticas internacionales.',
        'cta1': 'Cotiza ahora <span class="cta__arrow" aria-hidden="true">→</span>',

        // ---------- CARRUSEL ----------
        'subtitle4': 'Asesoramiento para la obtención de certificaciones',

        // ---------- SERVICIOS ----------
        'section-title': 'Asesoramiento, auditorías, inspecciones y <span class="text-gradient-light">formación profesional</span>.',
        'buscamos6': 'Buscamos optimizar sus operaciones y hacerlas más rentables mediante una asesoría especializada y completa. Nuestro objetivo es ayudarle a desarrollar su negocio de manera eficiente y exitosa.',
        'btn-conocenos': 'Conócenos <span class="cta__arrow" aria-hidden="true">→</span>',

        // ---------- CARDS ----------
        'service__title6': 'Nuestros servicios',
        'box__tag': ['Capacitación', 'Auditoría', 'Implementación', 'Formación', 'Sanitaria'],
        'box-title': [
            'Capacitaciones',
            'Auditoría e Inspecciones',
            'Implementación',
            'Formación de Auditores',
            'Asesoría Sanitaria'
        ],
        'box-text': [
            'Ofrecemos capacitaciones prácticas y eficaces para mejorar habilidades y conocimientos, promoviendo el desarrollo profesional de los participantes.',
            'Realizamos auditorías e inspecciones rigurosas para garantizar el cumplimiento y la calidad.',
            'Ejecutamos estrategias eficientemente y colaboramos con las partes interesadas para lograr resultados exitosos.',
            'Ofrecemos programas de formación para auditores, fortaleciendo sus habilidades y conocimientos técnicos.',
            'Aseguramos la calidad alimentaria con asesoría sanitaria, incluyendo HACCP.'
        ],

        // ---------- FOOTER ----------
        'footer__tagline': 'Consultoría científica independiente en certificaciones alimentarias.',
        'footer__heading': ['Contacto', 'Newsletter'],
        'footer__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Perú',
        'footer__newsletter-text': 'Recibe insights sobre certificaciones y normativas.',
        'footer__newsletter-placeholder': 'tu@correo.com',
        'footer__copyright': '© 2025 Consultoría Biológica · Todos los derechos reservados',
        'footer__credits': 'Rigor científico · Compromiso profesional'
    },

    // =========================================
    // INGLÉS
    // =========================================
    en: {

        // ---------- NAV ----------
        'nav__link-item': ['About us', 'Services', 'Contact'],

        // ---------- HERO ----------
        'hero__badge': 'Scientific consultancy · International certifications',
        'hero__title': 'Science and <span class="hero__title-highlight">trust</span> for food excellence.',
        'hero__paragraph': 'We support your company with scientific evidence, technical rigor, and international standards at every stage of the process.',
        'hero-cta-primary': 'Book a consultation <span class="cta__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost': 'Explore services',

        // Hero stats
        'hero__stat-label': ['Certifications', 'Companies', 'Years'],

        // ---------- ABOUT ----------
        'section-header__eyebrow': [
            'About us',
            'International standards',
            'Areas of expertise'
        ],
        'subtitle': 'Certifications with <span class="text-gradient">scientific rigor</span> and real commitment.',
        'section-header__lead': 'Our consultancy specializes in providing reliable food certifications that meet the highest industry standards.',
        'about__title': ['Mission', 'Vision'],
        'about__paragraph': [
            'To help our clients through the development, implementation, maintenance, and continuous improvement of their management systems, enabling them to achieve efficiency in their processes and create or maintain a competitive advantage over time.',
            'To be a leading company at the national level and a strategic partner of our clients, who bet on continuous improvement in their organizations and as individuals.'
        ],

        // ---------- KNOWLEDGE ----------
        'knowledge__eyebrow': 'Our commitment',
        'subtitle10': 'Ensure certifications that demonstrate your commitment to quality and <span class="text-gradient-light">food safety</span>.',
        'knowledge__paragraph': 'With our technical advice, every process is backed by scientific evidence and international best practices.',
        'cta1': 'Get a quote <span class="cta__arrow" aria-hidden="true">→</span>',

        // ---------- CARRUSEL ----------
        'subtitle4': 'Advice for obtaining certifications',

        // ---------- SERVICIOS ----------
        'section-title': 'Consultancy, audits, inspections, and <span class="text-gradient-light">professional training</span>.',
        'buscamos6': 'We aim to optimize your operations and make them more profitable through specialized and comprehensive consultancy. Our goal is to help you develop your business efficiently and successfully.',
        'btn-conocenos': 'Get to know us <span class="cta__arrow" aria-hidden="true">→</span>',

        // ---------- CARDS ----------
        'service__title6': 'Our services',
        'box__tag': ['Training', 'Audit', 'Implementation', 'Training', 'Sanitary'],
        'box-title': [
            'Training programs',
            'Audits and inspections',
            'Implementation',
            'Auditor training',
            'Sanitary advisory'
        ],
        'box-text': [
            'We offer practical and effective training to improve skills and knowledge, promoting the professional development of participants.',
            'We conduct rigorous audits and inspections to ensure compliance and quality.',
            'We execute strategies efficiently and collaborate with stakeholders to achieve successful results.',
            'We offer auditor training programs, strengthening their technical skills and knowledge.',
            'We ensure food quality through sanitary consulting, including HACCP.'
        ],

        // ---------- FOOTER ----------
        'footer__tagline': 'Independent scientific consultancy in food certifications.',
        'footer__heading': ['Contact', 'Newsletter'],
        'footer__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Peru',
        'footer__newsletter-text': 'Get insights on certifications and regulations.',
        'footer__newsletter-placeholder': 'your@email.com',
        'footer__copyright': '© 2025 Biological Consultancy · All rights reserved',
        'footer__credits': 'Scientific rigor · Professional commitment'
    }
};

// =========================================
// UTILIDAD: aplicar HTML o texto plano
// =========================================
function setContent(el, value) {
    if (!el || value === undefined || value === null) return;

    // Si el valor contiene etiquetas HTML, usar innerHTML
    if (/<[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
    } else {
        el.textContent = value;
    }
}

// =========================================
// FUNCIÓN PRINCIPAL
// =========================================
function updateTexts(language) {
    const dict = textsByLang[language];
    if (!dict) return;

    // ---------------------------------------------
    // 1. NAV
    // ---------------------------------------------
    document.querySelectorAll('.nav__link-item').forEach((el, i) => {
        setContent(el, dict['nav__link-item'][i]);
    });

    // ---------------------------------------------
    // 2. HERO
    // ---------------------------------------------
    const heroBadge = document.querySelector('.hero__badge');
    if (heroBadge) {
        // El badge tiene un <span class="hero__badge-dot"> + texto
        // Conservamos el dot y cambiamos solo el texto
        heroBadge.innerHTML = `<span class="hero__badge-dot" aria-hidden="true"></span>${dict['hero__badge']}`;
    }

    setContent(document.querySelector('.hero__title'), dict['hero__title']);
    setContent(document.querySelector('.hero__paragraph'), dict['hero__paragraph']);
    setContent(document.querySelector('.hero__cta-group .cta--primary'), dict['hero-cta-primary']);
    setContent(document.querySelector('.hero__cta-group .cta--ghost'), dict['hero-cta-ghost']);

    // Hero stats labels
    document.querySelectorAll('.hero__stat-label').forEach((el, i) => {
        setContent(el, dict['hero__stat-label'][i]);
    });

    // ---------------------------------------------
    // 3. SECTION HEADERS (eyebrows)
    // ---------------------------------------------
    document.querySelectorAll('.section-header__eyebrow').forEach((el, i) => {
        setContent(el, dict['section-header__eyebrow'][i]);
    });

    // ---------------------------------------------
    // 4. ABOUT
    // ---------------------------------------------
    setContent(document.querySelector('.subtitle'), dict['subtitle']);
    setContent(document.querySelector('.section-header__lead'), dict['section-header__lead']);

    document.querySelectorAll('.about__title').forEach((el, i) => {
        setContent(el, dict['about__title'][i]);
    });

    document.querySelectorAll('.about__paragraph').forEach((el, i) => {
        setContent(el, dict['about__paragraph'][i]);
    });

    // ---------------------------------------------
    // 5. KNOWLEDGE
    // ---------------------------------------------
    setContent(document.querySelector('.knowledge__eyebrow'), dict['knowledge__eyebrow']);
    setContent(document.querySelector('.subtitle10'), dict['subtitle10']);
    setContent(document.querySelector('.knowledge__paragraph'), dict['knowledge__paragraph']);
    setContent(document.querySelector('.cta1'), dict['cta1']);

    // ---------------------------------------------
    // 6. CARRUSEL
    // ---------------------------------------------
    setContent(document.querySelector('.subtitle4'), dict['subtitle4']);

    // ---------------------------------------------
    // 7. SERVICIOS
    // ---------------------------------------------
    setContent(document.querySelector('.section-title'), dict['section-title']);
    setContent(document.querySelector('.buscamos6'), dict['buscamos6']);
    setContent(document.querySelector('.btn-conocenos'), dict['btn-conocenos']);

    // ---------------------------------------------
    // 8. CARDS DE SERVICIOS
    // ---------------------------------------------
    setContent(document.querySelector('.service__title6'), dict['service__title6']);

    // Tags
    document.querySelectorAll('.box__tag').forEach((el, i) => {
        setContent(el, dict['box__tag'][i]);
    });

    // Títulos (h3 dentro de .box .details .content)
    document.querySelectorAll('.box .details .content h3').forEach((el, i) => {
        setContent(el, dict['box-title'][i]);
    });

    // Textos (p dentro de .box .details .content)
    document.querySelectorAll('.box .details .content p').forEach((el, i) => {
        setContent(el, dict['box-text'][i]);
    });

    // ---------------------------------------------
    // 9. FOOTER
    // ---------------------------------------------
    setContent(document.querySelector('.footer__tagline'), dict['footer__tagline']);

    // Headings
    document.querySelectorAll('.footer__heading').forEach((el, i) => {
        setContent(el, dict['footer__heading'][i]);
    });

    // Dirección (primer p del contact-info)
    const addressEl = document.querySelector('.footer__contact-info p:first-child');
    if (addressEl) setContent(addressEl, dict['footer__address']);

    // Newsletter
    setContent(document.querySelector('.footer__newsletter-text'), dict['footer__newsletter-text']);

    const newsletterInput = document.querySelector('.footer__newsletter-input');
    if (newsletterInput) {
        newsletterInput.placeholder = dict['footer__newsletter-placeholder'];
    }

    // Copyright y créditos
    setContent(document.querySelector('.footer__copyright'), dict['footer__copyright']);
    setContent(document.querySelector('.footer__credits'), dict['footer__credits']);

    // ---------------------------------------------
    // 10. Actualizar atributo lang del HTML
    // ---------------------------------------------
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
    updateTexts(initialLang);

    // Cambio de idioma
    select.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('selectedLanguage', lang);
        updateTexts(lang);
    });

});