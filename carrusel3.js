/**
 * carrusel3.js — Carrusel automático para servicios.html
 */
document.addEventListener('DOMContentLoaded', () => {

    const track      = document.querySelector('.carrusel-items3');
    const indicators = document.querySelector('.carrusel3__indicators');

    if (!track) {
        console.warn('carrusel3.js: no se encontró .carrusel-items3');
        return;
    }

    console.log('🎠 Carrusel3 iniciado');

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
        const firstItem = track.querySelector('.carrusel-item3');
        if (!firstItem) return 260;
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.gap) || 20;
        return firstItem.offsetWidth + gap;
    };

    const getMaxScroll = () => track.scrollWidth - track.clientWidth;

    // =========================================
    // SIGUIENTE
    // =========================================
    const nextSlide = () => {
        const max  = getMaxScroll();
        const step = getStep();

        if (max <= 0) return;

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
            dot.className = 'carrusel3__indicator';
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
        const dots = indicators.querySelectorAll('.carrusel3__indicator');
        dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    };

    // =========================================
    // AUTOPLAY
    // =========================================
    const start = () => {
        if (timer) return;
        timer = setInterval(nextSlide, INTERVALO_MS);
    };

    // =========================================
    // DRAG CON MOUSE (opcional)
    // =========================================
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    track.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        startX = e.clientX;
        startScrollLeft = track.scrollLeft;
        track.classList.add('is-dragging');
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!track.classList.contains('is-dragging')) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        track.scrollLeft = startScrollLeft - dx;
    });

    window.addEventListener('mouseup', () => {
        if (!track.classList.contains('is-dragging')) return;
        track.classList.remove('is-dragging');
        if (!timer) start();
        setTimeout(() => { moved = false; }, 50);
    });

    // Evitar click accidental después de arrastrar
    track.addEventListener('click', (e) => {
        if (moved) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // =========================================
    // ACTUALIZAR INDICADORES AL SCROLL
    // =========================================
    track.addEventListener('scroll', updateIndicators, { passive: true });

    // =========================================
    // INIT
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

        // Fallback: si en 3s no cargaron todas, iniciar igual
        setTimeout(() => {
            if (!timer) init();
        }, 3000);
    }

});