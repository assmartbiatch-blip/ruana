// Certificaciones (datos estáticos, fácil de editar)
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
        titulo: "Higiene Ocupacional: muestreo y control",
        fecha: "Enero 2025",
        lugar: "Caracas",
        link: "#"
    }
];

// Eventos (programación)
const eventos = [
    {
        titulo: "Taller: Gestión de Emergencias y Brigadas",
        fecha: "20 Abril 2025",
        modalidad: "Presencial (Punto Fijo)",
        descrip: "Entrenamiento en respuesta inicial, uso de extintores y coordinación."
    },
    {
        titulo: "Curso Online: Seguridad Vial para Flotas",
        fecha: "5-7 Mayo 2025",
        modalidad: "E-Learning",
        descrip: "Prevención de accidentes, ISO 39000, conducción defensiva."
    },
    {
        titulo: "Seminario: Actualización en Seguridad de Procesos",
        fecha: "15 Junio 2025",
        modalidad: "Aula mixta",
        descrip: "Dirigido a ingenieros y supervisores. Gestión de riesgos operacionales."
    }
];

// Función para escapar HTML (seguridad)
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Renderizar certificaciones
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
                <a href="${cert.link}" target="_blank" class="cert-link">Ver certificado <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Renderizar eventos
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
                <i class="fas fa-calendar-week" style="font-size: 1.8rem; color:#0A2F6C;"></i>
                <h3>${escapeHtml(ev.titulo)}</h3>
                <p><strong>${escapeHtml(ev.fecha)}</strong> · ${escapeHtml(ev.modalidad)}</p>
                <p>${escapeHtml(ev.descrip)}</p>
                <div class="badge" style="margin-top: 0.8rem;">Inscripción abierta</div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Smooth scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a, .btn-primary, .btn-outline-glass').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Efecto vidrio dinámico en el header al hacer scroll
function initHeaderGlassEffect() {
    const headerGlass = document.querySelector('.glass-nav');
    if (!headerGlass) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            headerGlass.style.background = 'rgba(255, 255, 255, 0.85)';
            headerGlass.style.backdropFilter = 'blur(16px)';
        } else {
            headerGlass.style.background = 'rgba(255, 255, 255, 0.72)';
            headerGlass.style.backdropFilter = 'blur(14px)';
        }
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    renderCertificaciones();
    renderEventos();
    initSmoothScroll();
    initHeaderGlassEffect();
});