/**
 * menu2.js — Control del menú móvil para nosotros2.html
 */
document.addEventListener('DOMContentLoaded', () => {

    const menuBtn  = document.querySelector('.nav2__menu');
    const closeBtn = document.querySelector('.nav2__close');
    const navMenu  = document.querySelector('.nav2__link--menu');
    const navLinks = document.querySelectorAll('.nav2__link-item');

    if (!menuBtn || !navMenu) {
        console.warn('menu2.js: no se encontraron los elementos del menú');
        return;
    }

    const openMenu = () => {
        navMenu.classList.add('nav2__link--show');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        navMenu.classList.remove('nav2__link--show');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    const toggleMenu = () => {
        navMenu.classList.contains('nav2__link--show') ? closeMenu() : openMenu();
    };

    // Botón hamburguesa
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Botón cerrar
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    }

    // Cerrar al hacer click en un enlace
    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('nav2__link--show')) {
            closeMenu();
        }
    });

    // Cerrar si se agranda la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('nav2__link--show')) {
            closeMenu();
        }
    });

    // Cerrar al tocar el overlay
    navMenu.addEventListener('click', (e) => {
        if (e.target === navMenu) closeMenu();
    });

});