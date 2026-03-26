// Certificaciones con los datos del brochure
const certificados = [
    {
        titulo: "Curso Evaluación de Atmósferas Peligrosas",
        fecha: "24-26 Enero 2024",
        lugar: "Carenero, Edo. Miranda",
        link: "https://telegra.ph/EAP24-01-01-Curso-de-Evaluaci%C3%B3n-de-Atm%C3%B3sferas-Peligrosas-Carenero-Edo-Miranda-24-26-Enero-2024-01-21"
    },
    {
        titulo: "Certificación Brigadas Industriales - Nivel Avanzado",
        fecha: "10-14 Marzo 2025",
        lugar: "Punto Fijo",
        link: "#"
    },
    {
        titulo: "Diplomado en Seguridad de Procesos (PSM)",
        fecha: "Febrero 2025",
        lugar: "Modalidad Virtual",
        link: "#"
    },
    {
        titulo: "Curso Espacios Confinados y Rescate Técnico",
        fecha: "Noviembre 2024",
        lugar: "Complejo Industrial",
        link: "#"
    },
    {
        titulo: "Higiene Ocupacional: Muestreo y Control",
        fecha: "Enero 2025",
        lugar: "Caracas",
        link: "#"
    },
    {
        titulo: "Gestión de Emergencias en Unidades Flotantes",
        fecha: "Marzo 2025",
        lugar: "Punto Fijo",
        link: "#"
    }
];

// Eventos actualizados
const eventos = [
    {
        titulo: "Taller: Gestión de Emergencias y Brigadas",
        fecha: "20 Abril 2025",
        modalidad: "Presencial (Punto Fijo)",
        descrip: "Entrenamiento en respuesta inicial, uso de extintores y coordinación de brigadas industriales."
    },
    {
        titulo: "Curso Online: Seguridad Vial para Flotas",
        fecha: "5-7 Mayo 2025",
        modalidad: "E-Learning",
        descrip: "Prevención de accidentes, ISO 39000, conducción defensiva y gestión de flotas."
    },
    {
        titulo: "Seminario: Actualización en Seguridad de Procesos",
        fecha: "15 Junio 2025",
        modalidad: "Aula mixta",
        descrip: "Dirigido a ingenieros y supervisores. Gestión de riesgos operacionales y PSM."
    },
    {
        titulo: "Curso de Espacios Confinados",
        fecha: "10-12 Julio 2025",
        modalidad: "Presencial",
        descrip: "Certificación en entrada a espacios confinados, rescate y monitoreo de atmósferas."
    }
];

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderCertificaciones() {
    const container = document.getElementById('certGrid');
    if (!container) return;

    if (certificados.length === 0) {
        container.innerHTML = '<div class="glass-card" style="grid-column:1/-1; text-align:center;">Próximamente más certificaciones</div>';
        return;
    }

    let html = '';
    certificados.forEach(cert => {
        html += `
            <div class="cert-card glass-card">
                <div class="badge">Certificado oficial</div>
                <h3>${escapeHtml(cert.titulo)}</h3>
                <p><i class="far fa-calendar-alt"></i> ${escapeHtml(cert.fecha)}</p>
                <p><i class="fas fa-location-dot"></i> ${escapeHtml(cert.lugar)}</p>
                <a href="${cert.link}" target="_blank" class="cert-link">Ver certificado <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderEventos() {
    const container = document.getElementById('eventosGrid');
    if (!container) return;

    if (eventos.length === 0) {
        container.innerHTML = '<div class="glass-card" style="grid-column:1/-1; text-align:center;">Próximamente más eventos</div>';
        return;
    }

    let html = '';
    eventos.forEach(ev => {
        html += `
            <div class="event-card glass-card">
                <i class="fas fa-calendar-star"></i>
                <h3>${escapeHtml(ev.titulo)}</h3>
                <p><strong>${escapeHtml(ev.fecha)}</strong> · ${escapeHtml(ev.modalidad)}</p>
                <p>${escapeHtml(ev.descrip)}</p>
                <div class="badge" style="margin-top: 0.8rem; background: linear-gradient(135deg, #E6B422, #C49A1A);">Inscripción abierta</div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a, .btn-primary, .btn-secondary, .btn-outline-glass').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Cerrar menú móvil si está abierto
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Header glass effect on scroll
function initHeaderEffect() {
    const header = document.querySelector('.glass-nav');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(24px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.85)';
            header.style.backdropFilter = 'blur(24px)';
        }
    });
}

// Intersection Observer para animaciones
function initScrollAnimations() {
    const cards = document.querySelectorAll('.glass-card, .service-card, .cert-card, .event-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderCertificaciones();
    renderEventos();
    initSmoothScroll();
    initMobileMenu();
    initHeaderEffect();
    initScrollAnimations();
});