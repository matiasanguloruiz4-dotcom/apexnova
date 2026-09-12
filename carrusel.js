/**
 * carrusel.js — Carrusel automático (sin flechas)
 */
document.addEventListener('DOMContentLoaded', () => {

    const track      = document.querySelector('.carrusel-items');
    const indicators = document.querySelector('.carrusel__indicators');

    if (!track) {
        console.error('carrusel.js: no se encontró .carrusel-items');
        return;
    }

    console.log('🎠 Carrusel iniciado');

    // =========================================
    // CONFIGURACIÓN
    // =========================================
    const INTERVALO_MS = 2500;
    const VELOCIDAD    = 'smooth';

    let timer = null;

    // =========================================
    // UTILIDADES
    // =========================================
    const getStep = () => {
        const firstItem = track.querySelector('.carrusel-item');
        if (!firstItem) return 260;
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.gap) || 20;
        return firstItem.offsetWidth + gap;
    };

    const getMaxScroll = () => track.scrollWidth - track.clientWidth;

    // =========================================
    // MOVER AL SIGUIENTE
    // =========================================
    const nextSlide = () => {
        const max  = getMaxScroll();
        const step = getStep();

        // Si no hay scroll, no hacer nada
        if (max <= 0) return;

        // Si llegamos al final, volver al inicio
        if (track.scrollLeft >= max - 5) {
            track.scrollTo({ left: 0, behavior: VELOCIDAD });
        } else {
            track.scrollBy({ left: step, behavior: VELOCIDAD });
        }
    };

    // =========================================
    // INDICADORES
    // =========================================
    const buildIndicators = () => {
        if (!indicators) return;

        const max  = getMaxScroll();
        const step = getStep();
        const total = Math.max(1, Math.ceil(max / step) + 1);

        indicators.innerHTML = '';

        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carrusel__indicator';
            dot.setAttribute('aria-label', `Ir a la posición ${i + 1}`);
            dot.addEventListener('click', () => {
                track.scrollTo({ left: step * i, behavior: 'smooth' });
            });
            indicators.appendChild(dot);
        }
        updateIndicators();
    };

    const updateIndicators = () => {
        if (!indicators) return;

        const step = getStep();
        const current = Math.round(track.scrollLeft / step);
        const dots = indicators.querySelectorAll('.carrusel__indicator');

        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === current);
        });
    };

    // =========================================
    // AUTOPLAY
    // =========================================
    const start = () => {
        if (timer) return;
        timer = setInterval(nextSlide, INTERVALO_MS);
    };

    // Actualizar indicadores al scroll
    track.addEventListener('scroll', updateIndicators, { passive: true });

    // =========================================
    // INICIALIZAR
    // =========================================
    const imgs = track.querySelectorAll('img');
    let cargadas = 0;

    const init = () => {
        buildIndicators();
        start();
    };

    if (imgs.length === 0) {
        init();
    } else {
        imgs.forEach(img => {
            if (img.complete) {
                cargadas++;
                if (cargadas === imgs.length) init();
            } else {
                img.addEventListener('load', () => {
                    cargadas++;
                    if (cargadas === imgs.length) init();
                });
                img.addEventListener('error', () => {
                    cargadas++;
                    if (cargadas === imgs.length) init();
                });
            }
        });

        // Timeout de seguridad: si en 3s no cargaron todas, iniciar igual
        setTimeout(() => {
            if (!timer) {
                console.warn('Timeout: iniciando carrusel sin esperar imágenes');
                init();
            }
        }, 3000);
    }

});