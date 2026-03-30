// Datos de servicios para el acordeón
const serviciosAcordeon = [
    {
        icono: "fas fa-hard-hat",
        titulo: "Seguridad Industrial",
        descripcion: "Estudios de riesgo, implementación de PSM, control de riesgos físicos, químicos, biológicos. Sistemas de gestión ISO 45000, ISO 31000 y seguridad vial. Más de 30 años de experiencia protegiendo activos industriales."
    },
    {
        icono: "fas fa-fire-extinguisher",
        titulo: "Gestión de Emergencias",
        descripcion: "Planes de emergencia, organización de brigadas industriales y comunitarias, mantenimiento de vehículos de bomberos, estudios de vulnerabilidad, diseño de sistemas de protección contra incendios."
    },
    {
        icono: "fas fa-water",
        titulo: "Seguridad Acuática",
        descripcion: "Evaluación de instalaciones flotantes, inspecciones pre-aseguradoras, gestión portuaria (SISEINOP, PBIP), investigación de siniestros marítimos y legislación acuática especializada."
    },
    {
        icono: "fas fa-chalkboard-user",
        titulo: "Entrenamiento & Certificación",
        descripcion: "Capacitación SIHO, espacios confinados, H₂S, conducción segura. Modalidades presencial, e-learning y mixta. Certificación de competencias y formación continua."
    },
    {
        icono: "fas fa-truck-fast",
        titulo: "Suministro Técnico",
        descripcion: "Equipos de bomberos, EPP, sistemas fijos de extinción, espuma contra incendios, rescate y material peligroso. Asistencia técnica post-venta y control de calidad."
    },
    {
        icono: "fas fa-laptop-code",
        titulo: "Desarrollo de Software",
        descripcion: "Digitalización de procesos preventivos, sistemas modulares y escalables, integración web con tecnología de punta. Diseños atractivos y amigables para gestión de riesgos."
    }
];

// Certificaciones
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
    }
];

// Eventos con WhatsApp
const eventos = [
    {
        titulo: "Taller: Gestión de Emergencias y Brigadas",
        fecha: "20 Abril 2025",
        modalidad: "Presencial (Punto Fijo)",
        descrip: "Entrenamiento en respuesta inicial, uso de extintores y coordinación de brigadas industriales.",
        whatsappMsg: "Hola RUANA C.A., estoy interesado/a en el Taller de Gestión de Emergencias y Brigadas del 20 Abril 2025. Quisiera más información."
    },
    {
        titulo: "Curso Online: Seguridad Vial para Flotas",
        fecha: "5-7 Mayo 2025",
        modalidad: "E-Learning",
        descrip: "Prevención de accidentes, ISO 39000, conducción defensiva y gestión de flotas.",
        whatsappMsg: "Hola RUANA C.A., me interesa el Curso Online de Seguridad Vial para Flotas del 5-7 Mayo 2025. Por favor, envíenme información."
    },
    {
        titulo: "Seminario: Actualización en Seguridad de Procesos",
        fecha: "15 Junio 2025",
        modalidad: "Aula mixta",
        descrip: "Dirigido a ingenieros y supervisores. Gestión de riesgos operacionales y PSM.",
        whatsappMsg: "Hola RUANA C.A., quisiera inscribirme en el Seminario de Seguridad de Procesos del 15 Junio 2025. Necesito detalles."
    },
    {
        titulo: "Curso de Espacios Confinados",
        fecha: "10-12 Julio 2025",
        modalidad: "Presencial",
        descrip: "Certificación en entrada a espacios confinados, rescate y monitoreo de atmósferas.",
        whatsappMsg: "Hola RUANA C.A., estoy interesado/a en el Curso de Espacios Confinados del 10-12 Julio 2025. Gracias."
    }
];

// Número de WhatsApp (formato internacional sin +)
const whatsappNumber = "584126605468";

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Renderizar lista expandible de servicios
function renderServiceList() {
    const container = document.getElementById('servicesList');
    if (!container) return;

    container.innerHTML = '';

    serviciosAcordeon.forEach((servicio, index) => {
        const item = document.createElement('article');
        item.className = 'service-item glass-card';

        item.innerHTML = `
            <div class="service-trigger" role="button" aria-expanded="false" tabindex="0">
                <div class="service-title"><i class="${servicio.icono}"></i>${escapeHtml(servicio.titulo)}</div>
                <div class="service-arrow"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div class="service-content"><p>${escapeHtml(servicio.descripcion)}</p></div>
        `;

        const trigger = item.querySelector('.service-trigger');

        function closeAll() {
            container.querySelectorAll('.service-item.expanded').forEach(openItem => {
                openItem.classList.remove('expanded');
                const openTrigger = openItem.querySelector('.service-trigger');
                if (openTrigger) openTrigger.setAttribute('aria-expanded', 'false');
            });
        }

        function toggle() {
            const isOpen = item.classList.contains('expanded');
            if (isOpen) {
                item.classList.remove('expanded');
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                closeAll();
                item.classList.add('expanded');
                trigger.setAttribute('aria-expanded', 'true');
            }
        }

        trigger.addEventListener('click', toggle);
        trigger.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle();
            }
        });

        container.appendChild(item);
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
                <a href="${cert.link}" target="_blank" class="cert-link">Ver certificado <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Renderizar eventos con botón de WhatsApp
function renderEventos() {
    const container = document.getElementById('eventosGrid');
    if (!container) return;

    if (eventos.length === 0) {
        container.innerHTML = '<div class="glass-card" style="grid-column:1/-1; text-align:center;">Próximamente más eventos</div>';
        return;
    }

    let html = '';
    eventos.forEach(ev => {
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ev.whatsappMsg)}`;
        html += `
            <div class="event-card glass-card">
                <i class="fas fa-calendar-star"></i>
                <h3>${escapeHtml(ev.titulo)}</h3>
                <p><strong>${escapeHtml(ev.fecha)}</strong> · ${escapeHtml(ev.modalidad)}</p>
                <p>${escapeHtml(ev.descrip)}</p>
                <a href="${whatsappLink}" target="_blank" class="btn-whatsapp-event">
                    <i class="fab fa-whatsapp"></i> Inscribirme por WhatsApp
                </a>
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
            header.style.background = 'rgba(255, 255, 255, 0.96)';
            header.style.backdropFilter = 'blur(24px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(24px)';
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const cards = document.querySelectorAll('.glass-card, .cert-card, .event-card, .accordion-item');
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
    renderServiceList();
    renderCertificaciones();
    renderEventos();
    initSmoothScroll();
    initMobileMenu();
    initHeaderEffect();
    initScrollAnimations();
});

// Al final del archivo main.js, añadir:

// Hacer que el botón Admin se muestre siempre (el login maneja la seguridad)
// Esto es solo para que el enlace exista
console.log('RUANA C.A. - Sitio oficial');

// Si quieres ocultar el botón Admin cuando ya hay sesión (opcional)
// Eso se manejaría con Firebase, pero no es crítico