/**
 * idioma3.js — Traductor ES/EN para servicios3.html
 */

const textsByLang3 = {
    es: {
        'nav3__link-item': ['Inicio', 'Nosotros', 'Contáctanos'],
        'hero-badge-1': 'Servicios Profesionales',
        'hero-badge-2': 'Consultoría Científica',
        'hero3__title': 'Servicios personalizados de alta calidad para <span class="hero3__title-highlight">impulsar tu éxito</span>.',
        'hero3__paragraph': 'Soluciones innovadoras y eficaces para tus necesidades en la industria alimentaria.',
        'hero-cta-primary3': 'Contáctanos <span class="cta3__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost3': 'Ver servicios',
        'metric-label': ['Servicios', 'Empresas', 'Compromiso'],
        'section-header3__eyebrow': [
            '01 — Nuestra diferencia',
            '02 — Nuestros servicios',
            '03 — Cómo trabajamos',
            '04 — ¿Listo para empezar?',
            '05 — Estándares internacionales'
        ],
        'subtitle3': '¿Por qué <span class="text-gradient3">elegirnos</span>?',
        'section-header3-lead-1': 'Combinamos experiencia técnica, enfoque personalizado y resultados medibles en cada proyecto.',
        'exp1': 'Experiencia Profesional',
        'exp2': 'Somos un equipo de expertos con años de experiencia en la industria, listos para brindarte soluciones efectivas.',
        'exp3': 'Enfoque Personalizado',
        'exp4': 'Entendemos que cada cliente es único, por eso adaptamos nuestras soluciones para satisfacer tus necesidades específicas.',
        'exp5': 'Resultados Comprobados',
        'exp6': 'Nuestra consultoría se basa en resultados tangibles y medibles. Hemos ayudado a numerosas empresas a alcanzar sus objetivos.',
        'services-title3': 'Nuestros <span class="text-gradient-light3">Servicios</span>',
        'services-lead3': 'Soluciones integrales diseñadas para cada etapa de tu proyecto.',
        'tag': ['Formación', 'Auditoría', 'Implementación', 'Auditores', 'Sanitaria', 'Metodología', 'HACCP'],
        'capa1': 'Capacitaciones',
        'capa2': 'Nos comprometemos a potenciar el talento y el conocimiento dentro de su organización.',
        'capa3': 'Nuestras capacitaciones están diseñadas para ofrecer soluciones personalizadas que impulsen el crecimiento y la excelencia.',
        'capa4': 'Auditoría e Inspecciones',
        'capa5': 'Nuestro servicio de auditoría e inspecciones está diseñado para brindarle tranquilidad y asegurar el cumplimiento.',
        'capa6': 'Implementación',
        'capa7': 'Nuestro servicio de implementación está diseñado para guiarlo a través de cada paso del proceso.',
        'capa8': 'Formación de Auditores',
        'capa9': 'Nuestro programa de formación de auditores está diseñado para equipar a su equipo con las habilidades.',
        'capa10': 'Asesoría en Habilitación Sanitaria',
        'capa11': 'Nuestro servicio se especializa en garantizar que tu establecimiento cumpla con todos los requisitos.',
        'capa12': 'Implementación de Metodología 5S',
        'capa13': 'La Metodología 5S es un sistema de gestión enfocado en mejorar la organización y eficiencia en el lugar de trabajo.',
        'capa14': 'Asesoría en Implementación de un Plan HACCP',
        'capa15': 'Nuestra asesoría se centra en ayudar a tu empresa a establecer un Sistema de Análisis de Peligros efectivo.',
        'process-title3': 'Nuestro <span class="text-gradient3">proceso</span>',
        'process-lead3': 'Un enfoque estructurado para garantizar resultados en cada proyecto.',
        'process-title': ['Diagnóstico', 'Estrategia', 'Implementación', 'Evaluación'],
        'process-text': [
            'Analizamos tu situación actual y detectamos oportunidades de mejora.',
            'Diseñamos un plan personalizado ajustado a tus objetivos.',
            'Ejecutamos cada acción con rigor técnico y seguimiento continuo.',
            'Medimos resultados y ajustamos para la mejora continua.'
        ],
        'help-eyebrow3': '04 — ¿Listo para empezar?',
        'help-title3': '¿Tu gestión administrativa no refleja la realidad de tu <span class="text-gradient-light3">empresa</span>?',
        'help-description3': 'Nosotros te ayudamos a conseguirlo.',
        'btn-contacto3': 'Contactar <span class="btn3__arrow" aria-hidden="true">→</span>',
        'subtitle4-3': 'Asesoramiento técnico para la obtención de certificaciones',
        'footer3__tagline': 'Consultoría científica independiente en certificaciones alimentarias.',
        'footer3__heading': ['Contacto', 'Newsletter'],
        'footer3__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Perú',
        'footer3__newsletter-text': 'Recibe insights sobre certificaciones y normativas.',
        'footer3__newsletter-placeholder': 'tu@correo.com',
        'footer3__copyright': '© 2025 Consultoría Biológica · Todos los derechos reservados',
        'footer3__credits': 'Rigor científico · Compromiso profesional'
    },

    en: {
        'nav3__link-item': ['Home', 'About us', 'Contact'],
        'hero-badge-1': 'Professional Services',
        'hero-badge-2': 'Scientific Consultancy',
        'hero3__title': 'High-quality personalized services to <span class="hero3__title-highlight">drive your success</span>.',
        'hero3__paragraph': 'Innovative and effective solutions for your needs in the food industry.',
        'hero-cta-primary3': 'Contact us <span class="cta3__arrow" aria-hidden="true">→</span>',
        'hero-cta-ghost3': 'View services',
        'metric-label': ['Services', 'Companies', 'Commitment'],
        'section-header3__eyebrow': [
            '01 — Our difference',
            '02 — Our services',
            '03 — How we work',
            '04 — Ready to start?',
            '05 — International standards'
        ],
        'subtitle3': 'Why <span class="text-gradient3">choose us</span>?',
        'section-header3-lead-1': 'We combine technical expertise, personalized approach, and measurable results in every project.',
        'exp1': 'Professional Experience',
        'exp2': 'We are a team of experts with years of industry experience, ready to provide effective solutions.',
        'exp3': 'Personalized Approach',
        'exp4': 'We understand that every client is unique, so we adapt our solutions to your specific needs.',
        'exp5': 'Proven Results',
        'exp6': 'Our consultancy is based on tangible and measurable results. We have helped many companies achieve their goals.',
        'services-title3': 'Our <span class="text-gradient-light3">Services</span>',
        'services-lead3': 'Comprehensive solutions designed for every stage of your project.',
        'tag': ['Training', 'Audit', 'Implementation', 'Auditors', 'Sanitary', 'Methodology', 'HACCP'],
        'capa1': 'Training programs',
        'capa2': 'We are committed to enhancing talent and knowledge within your organization.',
        'capa3': 'Our training programs are designed to offer customized solutions that promote growth.',
        'capa4': 'Audits and Inspections',
        'capa5': 'Our audit and inspection service is designed to give you peace of mind and ensure compliance.',
        'capa6': 'Implementation',
        'capa7': 'Our implementation service is designed to guide you through every step of the process.',
        'capa8': 'Auditor Training',
        'capa9': 'Our auditor training program is designed to equip your team with the skills.',
        'capa10': 'Sanitary Enablement Advisory',
        'capa11': 'Our service specializes in ensuring your establishment meets all requirements.',
        'capa12': '5S Methodology Implementation',
        'capa13': 'The 5S Methodology is a management system focused on improving organization and efficiency in the workplace.',
        'capa14': 'HACCP Plan Implementation Advisory',
        'capa15': 'Our advisory focuses on helping your company establish an effective Hazard Analysis System.',
        'process-title3': 'Our <span class="text-gradient3">process</span>',
        'process-lead3': 'A structured approach to ensure results in every project.',
        'process-title': ['Diagnosis', 'Strategy', 'Implementation', 'Evaluation'],
        'process-text': [
            'We analyze your current situation and detect opportunities for improvement.',
            'We design a personalized plan tailored to your goals.',
            'We execute every action with technical rigor and continuous monitoring.',
            'We measure results and adjust for continuous improvement.'
        ],
        'help-eyebrow3': '04 — Ready to start?',
        'help-title3': 'Is your administrative management not reflecting the reality of your <span class="text-gradient-light3">company</span>?',
        'help-description3': 'We help you achieve it.',
        'btn-contacto3': 'Contact <span class="btn3__arrow" aria-hidden="true">→</span>',
        'subtitle4-3': 'Advice for obtaining certifications',
        'footer3__tagline': 'Independent scientific consultancy in food certifications.',
        'footer3__heading': ['Contact', 'Newsletter'],
        'footer3__address': 'Av. Los Paugiles Mz G Lote 2<br>Víctor Larco Herrera 13001, Peru',
        'footer3__newsletter-text': 'Get insights on certifications and regulations.',
        'footer3__newsletter-placeholder': 'your@email.com',
        'footer3__copyright': '© 2025 Biological Consultancy · All rights reserved',
        'footer3__credits': 'Scientific rigor · Professional commitment'
    }
};

function setContent3(el, value) {
    if (!el || value === undefined || value === null) return;
    if (typeof value !== 'string') return;
    if (/<[a-z][\s\S]*>/i.test(value)) el.innerHTML = value;
    else el.textContent = value;
}

function setList3(selector, values) {
    if (!values || !Array.isArray(values)) return;
    document.querySelectorAll(selector).forEach((el, i) => {
        if (values[i] !== undefined) setContent3(el, values[i]);
    });
}

function updateTexts3(language) {
    const dict = textsByLang3[language];
    if (!dict) return;

    setList3('.nav3__link-item', dict['nav3__link-item']);

    const badges = document.querySelectorAll('.hero3__badge');
    if (badges[0]) badges[0].innerHTML = `<span class="hero3__badge-dot" aria-hidden="true"></span>${dict['hero-badge-1']}`;
    if (badges[1]) badges[1].textContent = dict['hero-badge-2'];

    setContent3(document.querySelector('.hero3__title'), dict['hero3__title']);
    setContent3(document.querySelector('.hero3__paragraph'), dict['hero3__paragraph']);
    setContent3(document.querySelector('.hero3__cta-group .cta3--primary'), dict['hero-cta-primary3']);
    setContent3(document.querySelector('.hero3__cta-group .cta3--ghost'), dict['hero-cta-ghost3']);
    setList3('.hero3__metric-label', dict['metric-label']);

    setList3('.section-header3__eyebrow', dict['section-header3__eyebrow']);

    setContent3(document.querySelector('.subtitle3'), dict['subtitle3']);

    const leads = document.querySelectorAll('.section-header3__lead');
    if (leads[0]) setContent3(leads[0], dict['section-header3-lead-1']);

    setContent3(document.querySelector('.exp1'), dict['exp1']);
    setContent3(document.querySelector('.exp2'), dict['exp2']);
    setContent3(document.querySelector('.exp3'), dict['exp3']);
    setContent3(document.querySelector('.exp4'), dict['exp4']);
    setContent3(document.querySelector('.exp5'), dict['exp5']);
    setContent3(document.querySelector('.exp6'), dict['exp6']);

    setContent3(document.querySelector('.services3__title'), dict['services-title3']);

    const leads2 = document.querySelectorAll('.section-header3__lead');
    if (leads2[1]) setContent3(leads2[1], dict['services-lead3']);

    setList3('.service3-card__tag', dict['tag']);

    setContent3(document.querySelector('.capa1'), dict['capa1']);
    setContent3(document.querySelector('.capa2'), dict['capa2']);
    setContent3(document.querySelector('.capa3'), dict['capa3']);
    setContent3(document.querySelector('.capa4'), dict['capa4']);
    setContent3(document.querySelector('.capa5'), dict['capa5']);
    setContent3(document.querySelector('.capa6'), dict['capa6']);
    setContent3(document.querySelector('.capa7'), dict['capa7']);
    setContent3(document.querySelector('.capa8'), dict['capa8']);
    setContent3(document.querySelector('.capa9'), dict['capa9']);
    setContent3(document.querySelector('.capa10'), dict['capa10']);
    setContent3(document.querySelector('.capa11'), dict['capa11']);
    setContent3(document.querySelector('.capa12'), dict['capa12']);
    setContent3(document.querySelector('.capa13'), dict['capa13']);
    setContent3(document.querySelector('.capa14'), dict['capa14']);
    setContent3(document.querySelector('.capa15'), dict['capa15']);

    const processTitle = document.querySelector('#process-title3');
    if (processTitle) setContent3(processTitle, dict['process-title3']);

    const leads3 = document.querySelectorAll('.section-header3__lead');
    if (leads3[2]) setContent3(leads3[2], dict['process-lead3']);

    document.querySelectorAll('.process3-step h3').forEach((el, i) => {
        if (dict['process-title'][i]) setContent3(el, dict['process-title'][i]);
    });
    document.querySelectorAll('.process3-step p').forEach((el, i) => {
        if (dict['process-text'][i]) setContent3(el, dict['process-text'][i]);
    });

    const helpEyebrow = document.querySelector('.help3__eyebrow');
    if (helpEyebrow) setContent3(helpEyebrow, dict['help-eyebrow3']);

    const helpTitle = document.querySelector('.help3__title');
    if (helpTitle) setContent3(helpTitle, dict['help-title3']);

    const helpDesc = document.querySelector('.help3__description');
    if (helpDesc) setContent3(helpDesc, dict['help-description3']);

    const helpBtn = document.querySelector('.btn3-contacto');
    if (helpBtn) setContent3(helpBtn, dict['btn-contacto3']);

    setContent3(document.querySelector('.subtitle4-3'), dict['subtitle4-3']);

    setContent3(document.querySelector('.footer3__tagline'), dict['footer3__tagline']);
    setList3('.footer3__heading', dict['footer3__heading']);

    const addressEl = document.querySelector('.footer3__contact-info p:first-child');
    if (addressEl) setContent3(addressEl, dict['footer3__address']);

    setContent3(document.querySelector('.footer3__newsletter-text'), dict['footer3__newsletter-text']);

    const newsInput = document.querySelector('.footer3__newsletter-input');
    if (newsInput) newsInput.placeholder = dict['footer3__newsletter-placeholder'];

    setContent3(document.querySelector('.footer3__copyright'), dict['footer3__copyright']);
    setContent3(document.querySelector('.footer3__credits'), dict['footer3__credits']);

    document.documentElement.lang = language;
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('language-select');
    if (!select) return;

    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = (navigator.language || 'es').slice(0, 2);
    const initialLang = savedLang || (['es', 'en'].includes(browserLang) ? browserLang : 'es');

    select.value = initialLang;
    updateTexts3(initialLang);

    select.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('selectedLanguage', lang);
        updateTexts3(lang);
    });
});