/**
 * script.js — Utilidades mínimas
 * ⚠️ NO agregar aquí lógica de menú ni de carrusel.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Marcar cuando el usuario hace scroll
    window.addEventListener('scroll', () => {
        document.body.classList.toggle('is-scrolled', window.pageYOffset > 100);
    }, { passive: true });

    // Prevenir imágenes rotas mostrando opacidad baja
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.opacity = '0.3';
        });
    });

});