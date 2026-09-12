/**
 * main.js — Animaciones de entrada al hacer scroll
 */
document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll(
        '.about__icons, .knowledge__texts, .knowledge__picture, .prestamos, .box, .section-header, .hero__stat'
    );

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        observer.observe(el);
    });

});